var uploadedDataURL = "/asset/get/s/data-1634462112438-OzwyHUKbG.json";

//var uploadedDataURL = "/asset/get/s/data-1634274766926-660z1p06g.json";

    //定义自定义图形渲染函数
    function renderItem(params, api, points, lw) {
        var coords = points[params.dataIndex];
        var shape_points = [];
        for (var i = 0; i < coords.length; i++) {
            shape_points.push(api.coord(coords[i]));
        }

        var P = {
            type: 'polygon',
            shape: {
                points: shape_points
            },
            style: api.style({
                
                stroke: 'rgba(0,0,0,0.1)',
                lineWidth: lw
            })
        };
        return P
    }

    function getgeojsondata(zone, name,valuename) {
        var points = [];
        var shape_name = []
        
        for (var j = 0; j < zone['features'].length; j++) {
            var temp = [];
            var area = zone['features'][j]['geometry']['coordinates'];
            if (area.length == 1) {
                area = area[0]
                for (var i = 0; i < area.length; i++) {
                    temp.push(area[i])
                }
                points.push(temp)
            
                shape_name.push({name:zone['features'][j]['properties'][name],
                    value:zone['features'][j]['properties'][valuename]}
                    )
                        
                    
                
            } else {
                for (var k = 0; k < area.length; k++) {
                    area1 = area[k][0]
                    var temp = [];
                    for (var i = 0; i < area1.length; i++) {
                        temp.push(area1[i])
                    }
                    points.push(temp)
                               
                shape_name.push({name:zone['features'][j]['properties'][name],
                    value:zone['features'][j]['properties'][valuename]}
                    )
                    
                }
            }
        }
        return [points, shape_name]
    }
$.getJSON(uploadedDataURL, function (zone) {
            //整理shape坐标点
            zonedata = getgeojsondata(zone, 'qh','count')
            points = zonedata[0]
            shape_name = zonedata[1]
            console.log(shape_name)
            var option = {
                bmap: {
                    center: [114.118600, 22.650422],
                    zoom: 12,
                    roam: true,
                    /*
                    mapStyle: {
                        styleJson: styleJson
                    }*/
                },
                visualMap:{min:0,max:1500,
                text: ['High', 'Low'],
                realtime: false,
        calculable: true,
                    inRange:{
                         color: ['#070093', '#1c3fbf', '#1482e5', '#70b4eb', '#b4e0f3', '#ffffff']
                    }
                    
                },
                title: {
                    text: "",
                    textStyle: {
                        color: '#fff',
                        fontSize: 30
                    }
                },
                legend: {},
                tooltip: {},
                series: [{
                    type: 'custom',
                    coordinateSystem: 'bmap',
                    data:shape_name,
                    renderItem: function(params, api) { return renderItem(params, api, points, 1.5) }
                }],
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option, true);
    });

