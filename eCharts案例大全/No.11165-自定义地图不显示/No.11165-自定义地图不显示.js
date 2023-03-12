

< !DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" >
<
html style = "height:100%;" >
    <
    head >
    <
    meta http - equiv = "Content-Type"
content = "text/html; charset=utf-8" / >
    <
    title > 成都公交路线 < /title> <
    /head>

    <
    body style = "height:100%;margin:0" >
    <
    div id = "main"
style = "height:100%" > < /div> <
    script type = "text/javascript"
src = "http://echarts.baidu.com/gallery/vendors/jquery/jquery.js" > < /script> <
    script type = "text/javascript"
src = "http://echarts.baidu.com/gallery/vendors/echarts/echarts-all-3.js" > < /script> <
    script type = "text/javascript"
src = "http://echarts.baidu.com/gallery/vendors/echarts/extension/dataTool.min.js" > < /script> <
    script type = "text/javascript"
src = "http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js" > < /script> <
    script type = "text/javascript"
src = "http://echarts.baidu.com/gallery/vendors/echarts/map/js/world.js" > < /script> <
    script type = "text/javascript"
src = "http://api.map.baidu.com/api?v=2.0&ak=1XjLLEhZhQNUzd93EjU5nOGQ" > < /script> <
    script type = "text/javascript"
src = "http://echarts.baidu.com/gallery/vendors/echarts/extension/bmap.min.js" > < /script> <
    script type = "text/javascript" >
    var dom = document.getElementById("main");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '自定义地图';
$.getJSON(uploadedDataURL, function(data) {
    var hStep = 1 / (data.length - 1);
    var busLines = [].concat.apply([], data.map(function(busLine, idx) {
        var points = [];
        for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            points.push([pt[0], pt[1]]);
        }
        return {
            coords: points,
            lineStyle: {
                normal: {
                    color: echarts.color.modifyHSL('#red', Math.round(hStep * idx))
                }
            }
        };
    }));
    myChart.setOption(option = {
        bmap: {
            center: [104.06, 30.67],
            zoom: 12,
            roam: true,
            mapStyle: {
                'styleJson': [{
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#031628'
                    }
                }, {
                    'featureType': 'land',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000102'
                    }
                }, {
                    'featureType': 'highway',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                }, {
                    'featureType': 'arterial',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#0b3d51'
                    }
                }, {
                    'featureType': 'local',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#000000'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                }, {
                    'featureType': 'railway',
                    'elementType': 'geometry.stroke',
                    'stylers': {
                        'color': '#08304b'
                    }
                }, {
                    'featureType': 'subway',
                    'elementType': 'geometry',
                    'stylers': {
                        'lightness': -85
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'geometry.fill',
                    'stylers': {
                        'color': '#000000'
                    }
                }, {
                    'featureType': 'all',
                    'elementType': 'labels.text.fill',
                    'stylers': {
                        'color': '#857f7f'
                    }
                }, {
                    'featureType': 'all',
                    'elementType': 'labels.text.stroke',
                    'stylers': {
                        'color': '#000000'
                    }
                }, {
                    'featureType': 'building',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#022338'
                    }
                }, {
                    'featureType': 'green',
                    'elementType': 'geometry',
                    'stylers': {
                        'color': '#062032'
                    }
                }, {
                    'featureType': 'boundary',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#465b6c'
                    }
                }, {
                    'featureType': 'manmade',
                    'elementType': 'all',
                    'stylers': {
                        'color': '#022338'
                    }
                }, {
                    'featureType': 'label',
                    'elementType': 'all',
                    'stylers': {
                        'visibility': 'off'
                    }
                }]
            },
        }
    });
});
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}; <
/script> <
/body> <
/html>