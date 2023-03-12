var uploadedDataURL = "/asset/get/s/data-1550116430897-dcjHih3pA.json";



$.getJSON(uploadedDataURL, function(geoJson) {
    myChart.hideLoading();
    echarts.registerMap('NANNING', geoJson); //只需要注册省的json数据，（注册哪里显示哪里）

    var geoCoordMap = {
        '南宁市': [108.479,23.1152],
        "上林县":[108.603937, 23.431769],
        "江南区":[108.310478, 22.799593],
        "宾阳县":[108.816735,23.216884],
        "横县":[109.270987,22.68743],
        "武鸣区":[108.280717,23.157163],
        "良庆区":[108.322102,22.75909],
        "马山县":[108.172903,23.711758],
        "邕宁区":[108.484251,22.756598],
        "西乡塘区":[108.306903,22.832779],
        "青秀区":[108.346113,22.816614],
        "隆安县":[107.688661,23.174763],
        "兴宁区":[108.320189,22.819511],
    };
    
    var BJData = [
        [{name:''}, {name:'南宁市',value:80}],
        [{name:'南宁市'}, {name:'上林县',value:80}],
        [{name:'南宁市'}, {name:'江南区',value:80}],
        [{name:'南宁市'}, {name:'宾阳县',value:80}],
        [{name:'南宁市'}, {name:'横县',value:80}],
        [{name:'南宁市'}, {name:'马山县',value:80}],
        [{name:'南宁市'}, {name:'隆安县',value:80}],
    ];
    
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['南宁市', BJData]].forEach(function (item, i) {
        series.push({
            // name: item[0],
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        },
        // {
        //     // name: item[0],
        //     type: 'lines',
        //     zlevel: 2,
        //     symbol: ['none', 'arrow'],
        //     symbolSize: 10,
        //     effect: {
        //         show: true,
        //         period: 6,
        //         trailLength: 0,
        //         symbol: planePath,
        //         symbolSize: 15
        //     },
        //     lineStyle: {
        //         normal: {
        //             color: color[i],
        //             width: 1,
        //             opacity: 0.6,
        //             curveness: 0.2
        //         }
        //     },
        //     data: convertData(item[1])
        // },
        {
            // name: item[0],
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });
    
    option = {
        backgroundColor: '#404a59',
        title : {
            text: '南宁市',
            subtext: '鲜生销售路线',
            left: 'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'NANNING',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };  

    myChart.setOption(option);
})

