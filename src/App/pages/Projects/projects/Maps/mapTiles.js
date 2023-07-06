// sources:
// https://www.alspergis.altervista.org/hikemaps.html
// https://github.com/leaflet-extras/leaflet-providers
// https://leaflet-extras.github.io/leaflet-providers/preview/

const MAP_TILES = [
    {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        name: 'OpenStreetMap',
        maxNativeZoom: 19,
    },
    {
        url: 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png',
        maxNativeZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        name: "OpenStreetMap.DE"
    },
    {
        url: 'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png',
        maxNativeZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        name: "OpenStreetMap.CH"
    },
    {
        url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
        maxNativeZoom: 20,
        attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        name: "OpenStreetMap.FR"
    },
    {
        url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        maxNativeZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
        name: "OpenStreetMap.HOT"
    },
    {
        url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        maxNativeZoom: 16,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
        name: "OpenTopoMap"
    },
    {
        attribution: '<a href="https://wiki.openstreetmap.org/wiki/Hiking/mri">&copy; sly</a> MODIS/Terra Snow Cover 8-day by NSDIC | ASTER GDEM is a product of METI and NASA | SRTM V4 thanks to CGIAR-CSI<br>EU-DEM produced using Copernicus data and information funded by the European Union | Données <a href="http://www.openstreetmap.org/copyright">&copy; les contributeurs OpenStreetMap</a>',
        url: 'https://maps.refuges.info/hiking/{z}/{x}/{y}.png',
        name: 'OpenStreetMap Hike',
        maxNativeZoom: 18,
    },
    {
        url: 'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        name: "Stadia.OSM",
        maxNativeZoom: 20
    },
    {
        url: 'https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png',
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        name: "Stadia.Outdoors",
        maxNativeZoom: 20
    },
    // {
    //     url: 'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    //     attribution: '<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //     maxNativeZoom: 20,
    //     name: "CyclOSM"
    // },
    // {
    //     attribution: '<a target="_blank" href="https://www.seznam.cz/">Seznam.cz</a> - <a target="_blank" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
    //     url: 'https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}.png',
    //     name: 'Mapy',
    //     maxNativeZoom: 18,
    // },
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; USGS',
        url: 'http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png',
        name: 'mtbmap',
        maxNativeZoom: 18,
    },
    {
        attribution: 'Data by <a href="http://www.openstreetmap.org" target="_blank" title="OpenStreetMap.org">OpenStreetMap.org</a> contributors under <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC BY-SA 2.0</a> license<em> | Tiles: © Toursprung GmbH</em>',
        url: 'https://vtile01.maptoolkit.net/raster/toursprung/terrain/{z}/{x}/{y}.png',
        name: 'toursprung',
        maxNativeZoom: 19,
    },
    {
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        name: "Esri.WorldImagery",
        maxNativeZoom: 24,
    }
]

const MAP_OVERLAYS = [
    {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        url: 'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
        name: "waymarkedtrails",
        maxNativeZoom: 18,
    },
    {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        url: 'https://a.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png',
        name: "GPS Tracks",
        maxNativeZoom: 24,
    },
];

export { MAP_TILES, MAP_OVERLAYS };