import React, { useState, useEffect } from 'react';

const PI_180 = 1.7453292519943295e-02;

const deg2rad = (deg) => {
  return deg * PI_180;
}

const earthRadius = (lat) => {
  // https://rechneronline.de/earth-radius/
  const r1 = 6378137; // equator radius
  const r2 = 6371001; // poles radius 
  const r1cos = r1 * Math.cos(lat);
  const r2sin = r2 * Math.sin(lat);
  const num = Math.pow(r1 * r1cos, 2) + Math.pow(r2 * r2sin, 2);
  const den = Math.pow(r1cos, 2) + Math.pow(r2sin, 2);
  return Math.sqrt(num / den);
}

const dist2d = (a, b) => {
  const R = earthRadius((a.latRad + b.latRad) / 2.0);
  const dLat = b.latRad - a.latRad;
  const dLon = b.lonRad - a.lonRad;
  const r = Math.sin(dLat / 2) *
    Math.sin(dLat / 2) +
    Math.cos(a.latRad) *
    Math.cos(b.latRad) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
  const d = R * c;
  return d;
}

const dist3d = (a, b) => {
  // https://github.com/mpetazzoni/leaflet-gpx/blob/f446d48935f5f489bd341479c53c2b31c2a32bd5/gpx.js#L630
  const planar = dist2d(a, b);
  const height = Math.abs(b.ele - a.ele);
  return {
    dist: Math.sqrt(Math.pow(planar, 2) + Math.pow(height, 2)),
    steep: height / planar
  };
}

/*!
 * JavaScript function to calculate the destination point given start point latitude / longitude (numeric degrees), bearing (numeric degrees) and distance (in m).
 *
 * Original scripts by Chris Veness
 * Taken from http://movable-type.co.uk/scripts/latlong-vincenty-direct.html and optimized / cleaned up by Mathias Bynens <http://mathiasbynens.be/>
 * Based on the Vincenty direct formula by T. Vincenty, “Direct and Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations”, Survey Review, vol XXII no 176, 1975 <http://www.ngs.noaa.gov/PUBS_LIB/inverse.pdf>
 */

function distVincenty(p1, p2) {
  const a = 6378137,
    b = 6356752.3142,
    f = 1 / 298.257223563, // WGS-84 ellipsoid params
    L = p2.lonRad - p1.lonRad,
    U1 = Math.atan((1 - f) * Math.tan(p1.latRad)),
    U2 = Math.atan((1 - f) * Math.tan(p2.latRad)),
    sinU1 = Math.sin(U1),
    cosU1 = Math.cos(U1),
    sinU2 = Math.sin(U2),
    cosU2 = Math.cos(U2);
  let lambda = L, lambdaP, iterLimit = 100;
  do {
    var sinLambda = Math.sin(lambda),
      cosLambda = Math.cos(lambda),
      sinSigma = Math.sqrt((cosU2 * sinLambda) * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
    if (0 === sinSigma) {
      return 0; // co-incident points
    };
    var cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda,
      sigma = Math.atan2(sinSigma, cosSigma),
      sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma,
      cosSqAlpha = 1 - sinAlpha * sinAlpha,
      cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha,
      C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
    if (isNaN(cos2SigmaM)) {
      cos2SigmaM = 0; // equatorial line: cosSqAlpha = 0 (§6)
    };
    lambdaP = lambda;
    lambda = L + (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
  } while (Math.abs(lambda - lambdaP) > 1e-12 && --iterLimit > 0);

  if (!iterLimit) {
    return NaN; // formula failed to converge
  };

  const uSq = cosSqAlpha * (a * a - b * b) / (b * b),
    A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq))),
    B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq))),
    deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM))),
    s = b * A * (sigma - deltaSigma);
  return s; // round to 1mm precision
};

const getElemContent = (elemHTML, tag) => {
  return elemHTML.getElementsByTagName(tag)[0].innerHTML;
}

const parseXml = (xml) => {
  let prevPt;
  return Array.from(xml.getElementsByTagName("trkpt")).map((e, i) => {
    const date = new Date(getElemContent(e, 'time'));
    const parsed = Object.fromEntries(
      [
        'ele',
        'course',
        'hAcc',
        'vAcc',
        'speed',
      ].map(x => [x, parseFloat(getElemContent(e, x))])
    )
    const lat_lon = ['lat', 'lon'].map(x => parseFloat(e.getAttribute(x)));
    let pt = {
      ...parsed,
      hAccuracy: parsed.hAcc,
      vAccuracy: parsed.vAcc,
      accuracy: Math.sqrt(parsed.hAcc * parsed.hAcc + parsed.vAcc * parsed.vAcc),
      latitude: lat_lon[0],
      longitude: lat_lon[1],
      latRad: deg2rad(lat_lon[0]),
      lonRad: deg2rad(lat_lon[1]),
      date: date,
      timestamp: date.getTime(),
      activeTime: i,
    }
    if (i > 0) {
      const { dist, steep } = dist3d(pt, prevPt);
      pt.dist3d = prevPt.dist3d + dist;
      pt.distVi = prevPt.distVi + distVincenty(pt, prevPt);
      pt.distance = prevPt.distance + pt.speed;
      pt.steep3d = isFinite(steep) ? steep * 100 : 0;
      const tmp = (pt.ele - prevPt.ele) * 200 / (pt.speed + prevPt.speed);
      pt.steepness = isFinite(tmp) ? Math.sign(tmp) * Math.min(Math.abs(tmp), 100) : 0;
    } else {
      pt.dist3d = 0;
      pt.distVi = 0;
      pt.distance = pt.speed;
    }
    prevPt = pt;
    return pt;
  });
}

const UploadFile = ({ setData }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!file) return;
    file.text().then(text => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(text, "text/xml");
      setData(parseXml(xml));
    })
  }, [file])

  return (
    <input
      onChange={e => setFile(e.target.files.item(0))}
      type="file" accept='.gpx'
    />
  );
}

export default UploadFile;