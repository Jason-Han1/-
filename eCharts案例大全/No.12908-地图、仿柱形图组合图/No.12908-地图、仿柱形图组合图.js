//宁夏地图数据 
var uploadedDataURL = "/asset/get/s/data-1542176665987-Ew7EV9vfm.json";

$.get(uploadedDataURL, function(geoJson){
    echarts.registerMap('宁夏', geoJson);

    var option = {
        backgroundColor: '#fff',
        tooltip: {
            trigger: 'item',
            formatter: function(params, ticket, callback) {
                //根据业务自己拓展要显示的内容
                var name = params.name;
                var value = params.value;
                var res = "";
                res += "<span style='color:#fff;'>" + name + "</span>";
                res += "<br/>经度:" + (value[0] - 0).toFixed(2);
                res += ",纬度:" + (value[1] - 0).toFixed(2);
                res += "<br/>通道数量:" + value[2];
                res += "<br/>断开通道:" + value[4];
                return res;
            }
        },
        geo: {
            map: '宁夏',
            roam: false,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                areaColor: '#4bbdd7',
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 3,
                shadowColor: "#eee",
                shadowOffsetX: 1,
                shadowOffsetY: 2,
    
            }

        },
        series: [{
                name: '通道运行状态',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [],
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        color: function(val) {
                            var color = val.value[3];
                            return color;
                        }
                    }
                },
                zlevel: 2
            },
            {
                name: '通道运行状态',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [],
                symbol: 'rect',
                symbolSize: function(val) {
                    return val[4] == 0 ? 0 : [6, 10 + val[4] * 10];
                },
                symbolOffset: [0, "-50%"],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        color: function(val) {
                            var color = val.value[3];
                            return color;
                        }
                    }
                },
                zlevel: 1
            }
        ]
    };
    
    var datas = [{
            name: '中卫市',
            longitude: 105.189568,
            latitude: 37.514951,
            num: 4,
            except_num: 3
        },
        {
            name: '石嘴山市',
            longitude: 106.376173,
            latitude: 39.01333,
            num: 4,
            except_num: 1
        },
        {
            name: '银川市',
            longitude: 106.278179,
            latitude: 38.46637,
            num: 4,
            except_num: 0
        }
    ];
    
    $.each(datas, function(i, item) {
        var color = item.except_num == 0 ? "#2afe2e" : "#ed130d";
        option.series[0].data.push({
            name: item.name,
            value: [item.longitude, item.latitude, item.num, color, item.except_num]
        });
        option.series[1].data.push({
            name: item.name,
            value: [item.longitude, item.latitude, item.num, color, item.except_num]
        });
    });
    
    myChart.setOption(option);

});