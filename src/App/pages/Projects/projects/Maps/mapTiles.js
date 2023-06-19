// view-source:https://www.alspergis.altervista.org/hikemaps.html
// https://github.com/leaflet-extras/leaflet-providers

const mapTiles = [
    {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        maxNativeZoom: 19,
    },
    {
        attribution: '<a href="https://wiki.openstreetmap.org/wiki/Hiking/mri">&copy; sly</a> MODIS/Terra Snow Cover 8-day by NSDIC | ASTER GDEM is a product of METI and NASA | SRTM V4 thanks to CGIAR-CSI<br>EU-DEM produced using Copernicus data and information funded by the European Union | Données <a href="http://www.openstreetmap.org/copyright">&copy; les contributeurs OpenStreetMap</a>',
        url: 'https://maps.refuges.info/hiking/{z}/{x}/{y}.png',
        maxNativeZoom: 18,
    },
    {
        attribution: '<a target="_blank" href="https://www.seznam.cz/">Seznam.cz</a> - <a target="_blank" href="http://openstreetmap.org">OpenStreetMap</a>, under <a target="_blank" href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>',
        url: 'https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}',
        maxNativeZoom: 18,
    },
    {
        attribution: 'Author: Martin Tesař, osmmtb&nbsp;(at)&nbsp;gmail.com | Data provided by <a href="http://openstreetmap.org/" target="_blank">OpenStreetMap</a> and&nbsp;<a href="http://dds.cr.usgs.gov/srtm/">USGS</a>',
        url: 'http://tile.mtbmap.cz/mtbmap_tiles/{z}/{x}/{y}.png',
        maxNativeZoom: 18,
    },
    {
        attribution: 'Data by <a href="http://www.openstreetmap.org" target="_blank" title="OpenStreetMap.org">OpenStreetMap.org</a> contributors under <a href="http://creativecommons.org/licenses/by-sa/2.0/" target="_blank">CC BY-SA 2.0</a> license<em> | Tiles: © Toursprung GmbH</em>',
        url: 'https://vtile01.maptoolkit.net/raster/toursprung/terrain/{z}/{x}/{y}.png',
        maxNativeZoom: 19,
    },
    {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        maxNativeZoom: 24,
    },
    {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        url: 'https://tile.waymarkedtrails.org/hiking/{z}/{x}/{y}.png',
        maxNativeZoom: 18,
    },
    {
        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        url: 'https://a.gps-tile.openstreetmap.org/lines/{z}/{x}/{y}.png',
        maxNativeZoom: 24,
    },
]

export default mapTiles;