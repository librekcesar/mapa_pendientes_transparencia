var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_slope_wgs841_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "slope_wgs841",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/slope_wgs841_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11061387.553496, 2160559.144913, -11013935.595662, 2224900.379045]
                            })
                        });
var format_zonas_cdmx_2 = new ol.format.GeoJSON();
var features_zonas_cdmx_2 = format_zonas_cdmx_2.readFeatures(json_zonas_cdmx_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonas_cdmx_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonas_cdmx_2.addFeatures(features_zonas_cdmx_2);
var lyr_zonas_cdmx_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zonas_cdmx_2, 
                style: style_zonas_cdmx_2,
                interactive: true,
                title: '<img src="styles/legend/zonas_cdmx_2.png" /> zonas_cdmx'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_slope_wgs841_1.setVisible(true);lyr_zonas_cdmx_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_slope_wgs841_1,lyr_zonas_cdmx_2];
lyr_zonas_cdmx_2.set('fieldAliases', {'country': 'country', 'locality': 'locality', 'state': 'state', 'zonificacion': 'zonificacion', 'catstationid': 'catstationid', 'station_code': 'station_code', 'zipcode': 'zipcode', 'region': 'region', 'station_name': 'station_name', 'id': 'id', 'coverage_type': 'coverage_type', 'cobertura_diferenciada': 'cobertura_diferenciada', 'cluster_diferenciado': 'cluster_diferenciado', 'polygon': 'polygon', 'neighborhood': 'neighborhood', 'fid': 'fid', });
lyr_zonas_cdmx_2.set('fieldImages', {'country': 'TextEdit', 'locality': 'TextEdit', 'state': 'TextEdit', 'zonificacion': 'TextEdit', 'catstationid': 'TextEdit', 'station_code': 'TextEdit', 'zipcode': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'id': 'TextEdit', 'coverage_type': 'TextEdit', 'cobertura_diferenciada': 'TextEdit', 'cluster_diferenciado': 'TextEdit', 'polygon': 'TextEdit', 'neighborhood': 'TextEdit', 'fid': 'TextEdit', });
lyr_zonas_cdmx_2.set('fieldLabels', {'country': 'no label', 'locality': 'no label', 'state': 'no label', 'zonificacion': 'no label', 'catstationid': 'no label', 'station_code': 'no label', 'zipcode': 'no label', 'region': 'no label', 'station_name': 'no label', 'id': 'no label', 'coverage_type': 'no label', 'cobertura_diferenciada': 'no label', 'cluster_diferenciado': 'no label', 'polygon': 'no label', 'neighborhood': 'no label', 'fid': 'no label', });
lyr_zonas_cdmx_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});