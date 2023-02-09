
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "PublicSpaces_0": {
            "type": "geojson",
            "data": json_PublicSpaces_0
        }
                    ,
        "ProspectiveRooftopHubs_1": {
            "type": "geojson",
            "data": json_ProspectiveRooftopHubs_1
        }
                    ,
        "ProspectiveHighSites_2": {
            "type": "geojson",
            "data": json_ProspectiveHighSites_2
        }
                    ,
        "RooftopHubs_3": {
            "type": "geojson",
            "data": json_RooftopHubs_3
        }
                    ,
        "MeshNodes_4": {
            "type": "geojson",
            "data": json_MeshNodes_4
        }
                    ,
        "HighSites_5": {
            "type": "geojson",
            "data": json_HighSites_5
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        //{
            //"id": "background",
            //"type": "background",
            //"layout": {},
            //"paint": {
                //"background-color": "#ffffff"
            //}
        //},
        {
            "id": "lyr_PublicSpaces_0_0",
            "type": "circle",
            "source": "PublicSpaces_0",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#d5b43c', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_ProspectiveRooftopHubs_1_0",
            "type": "circle",
            "source": "ProspectiveRooftopHubs_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#8d5a99', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_ProspectiveHighSites_2_0",
            "type": "circle",
            "source": "ProspectiveHighSites_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_RooftopHubs_3_0",
            "type": "circle",
            "source": "RooftopHubs_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#b7484b', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_MeshNodes_4_0",
            "type": "circle",
            "source": "MeshNodes_4",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#7d8b8f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_HighSites_5_0",
            "type": "circle",
            "source": "HighSites_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}