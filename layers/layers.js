ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32737").setExtent([-33037.118949, 9963692.456430, 163545.084220, 10075703.826199]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_nandi_1 = new ol.format.GeoJSON();
var features_nandi_1 = format_nandi_1.readFeatures(json_nandi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_nandi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nandi_1.addFeatures(features_nandi_1);
var lyr_nandi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nandi_1, 
                style: style_nandi_1,
                interactive: true,
                title: '<img src="styles/legend/nandi_1.png" /> nandi'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_nandi_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_nandi_1];
lyr_nandi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE': 'CODE', 'SCHOOL_NAM': 'SCHOOL_NAM', 'LEVEL': 'LEVEL', 'Status': 'Status', 'County': 'County', 'DISTRICT': 'DISTRICT', 'ZONE': 'ZONE', 'SUB_COUNTY': 'SUB_COUNTY', 'Ward': 'Ward', 'X_Coord': 'X_Coord', 'Y_Coord': 'Y_Coord', 'Source': 'Source', });
lyr_nandi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE': 'TextEdit', 'SCHOOL_NAM': 'TextEdit', 'LEVEL': 'TextEdit', 'Status': 'TextEdit', 'County': 'TextEdit', 'DISTRICT': 'TextEdit', 'ZONE': 'TextEdit', 'SUB_COUNTY': 'TextEdit', 'Ward': 'TextEdit', 'X_Coord': 'TextEdit', 'Y_Coord': 'TextEdit', 'Source': 'TextEdit', });
lyr_nandi_1.set('fieldLabels', {'OBJECTID': 'no label', 'CODE': 'no label', 'SCHOOL_NAM': 'header label', 'LEVEL': 'no label', 'Status': 'no label', 'County': 'no label', 'DISTRICT': 'no label', 'ZONE': 'no label', 'SUB_COUNTY': 'no label', 'Ward': 'no label', 'X_Coord': 'no label', 'Y_Coord': 'no label', 'Source': 'no label', });
lyr_nandi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});