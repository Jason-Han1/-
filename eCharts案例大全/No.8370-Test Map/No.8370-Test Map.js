var uploadedDataURL = "/asset/get/s/data-1584539897741-awremJ0P_.json";

myChart.showLoading();

$.get('/asset/get/s/data-1584530867563-fUXCJiNUK.json', function(mapJson) {
    echarts.registerMap('SGP', mapJson);

    $.get(uploadedDataURL, function(covidDataJson) {
        myChart.hideLoading();
        
        var covidData = JSON.parse(covidDataJson);
        
        var geoCoordMap = {
            // "NCID": [103.847242, 1.322125],
            // "SGH": [103.8298055,1.2857238],
            // "NTFGH": [103.745413,1.333927],
        };

        var processedData = {};
        Object.keys(covidData).forEach(function(key) {
            if (!geoCoordMap[covidData[key]]) {
                geoCoordMap[covidData[key].Hospital] = [covidData[key].HospitalLongitude, covidData[key].HospitalLatitude];
            }
            if (!processedData[covidData[key].Hospital]) {
                processedData[covidData[key].Hospital] = {
                    num: 1,
                    details: {
                        isRecovered: covidData[key].IsRecovered ? 1 : 0,
                        isLocal: covidData[key].IsLocal ? 1 : 0
                    }
                };
            } else {
                processedData[covidData[key].Hospital].num += 1;
                if (covidData[key].IsRecovered) {
                    processedData[covidData[key].Hospital].details.isRecovered += 1;
                }
                 if (covidData[key].IsLocal) {
                    processedData[covidData[key].Hospital].details.isLocal += 1;
                }
            }
        });

        var data = [];
        Object.keys(processedData).forEach(function(key) {
            data.push({
                name: key,
                value: processedData[key].num,
                details: processedData[key].details
            });
        });

        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value).concat(data[i].details)
                    });
                }
            }
            return res;
        };

        option = {
            backgroundColor: '#404a59',
            title: {
                text: 'Singapore Covid-19',
                left: 'right'
            },
            tooltip: {
                trigger: 'item'
            },
            visualMap: {
                left: 'right',
                min: 0,
                max: 300,
                inRange: {
                    color: ['#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                },
                text: ['High', 'Low'],
                calculable: true
            },
            toolbox: {
                show: true,
                //orient: 'vertical',
                left: 'left',
                top: 'top',
                feature: {
                    dataView: {
                        readOnly: false
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            geo: {
                map: 'SGP',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: [{
                    name: 'Covid-19',
                    type: 'heatmap',
                    coordinateSystem: 'geo',
                    data: convertData(data)
                },
                {
                    name: 'Point',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function(val) {
                        return (5 + Math.log2(val[2]));
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: function(params) {
                            var details = params.value[3];
                            var tipHtml = '';
                            tipHtml = '<div style="width:280px;height:180px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
                            +'<div style="width:100%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 0">'
                            +'<span style="margin-left:10px;color:#fff;font-size:16px;">'+params.name+'</span>'+'</div>'
                            +'<div style="padding:20px">'
                            +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
                            +'Num：'+'<span style="color:#11ee7d;margin:0 6px;">'+params.value[2]+'</span></p>'
                            +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
                            +'IsRecovered：'+'<span style="color:#11ee7d;margin:0 6px;">'+details.isRecovered+'</span></p>'
                             +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
                            +'IsLocal：'+'<span style="color:#11ee7d;margin:0 6px;">'+details.isLocal+'</span></p>'
                            +'</div>'+'</div>';
                            // return params.name + ' : ' + params.value[2];
                            return tipHtml;
                        }
                    },
                }
            ]
        };

        myChart.setOption(option);
    });
});