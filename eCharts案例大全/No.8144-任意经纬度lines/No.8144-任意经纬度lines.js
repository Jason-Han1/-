var option = {
                backgroundColor: '#333',
                title:{
                  text:"任意经纬度lines"  ,
                  textStyle:{
                      color: '#fff',
                      fontSize: 22,
                      fontWeight: 0
                  }
                },
                color: ['gold', 'aqua', 'lime'],
                legend: {
                    show: true,
                    selected: {},
                    x: 'left',
                    orient: 'vertical',
                    textStyle: {
                        color: 'white'
                    },
                    data: []
                },
                geo: {
                    show: true,
                    roam: false,
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#1b1b1b',
                            borderColor: 'rgba(100,149,237,0.7)',
                        },
                        emphasis: {

                            areaColor: 'rgba(0,0,0,0.6)'
                        }
                    }
                },


                series: [{
                    name: "lines",
                    type: 'lines',
                    coordinateSystem: 'geo',
                    effect: {
                        constantSpeed: 30,
                        show: true,
                        trailLength: .7,
                        symbolSize: 3,
                        color: 'rgba(255, 255, 255, 0.5)',
                        symbol: 'circle'
                    },

                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#4ef2f2',
                                width: 0.8,
                                opacity: 0.9,
                                curveness: 0.2,
                            }
                        }
                    },
                    data: []
                }, {
                    symbol: 'circle',
                    coordinateSystem: 'geo',
                    type: 'effectScatter',
                    symbolSize: 3,
                    itemStyle: {
                        normal: {
                            color: '#4ef2f2'
                        }
                    },
                    rippleEffect: {
                        period: 4, //动画时间，值越小速度越快
                        brushType: "stroke", //波纹绘制方式 stroke, fill
                        scale: 4 //波纹圆环最大限制，值越大波纹越大
                    },
                    data: []
                }]
            };

            function getData() {
                var lineData = [];
                var scatterData=[];
                var res = [
                    [
                        [116.395645, 39.929986],
                        [121.309555, 37.536562]
                    ],
                    [
                        [116.395645, 39.929986],
                        [101.722423, 26.587571]
                    ],
                    [
                        [116.395645, 39.929986],
                        [101.722423, 36.587571]
                    ],
                    [
                        [117.210813, 39.14393],
                        [101.722423, 36.587571]
                    ],
                    [
                        [116.395645, 39.929986],
                        [117.058739, 30.537898]
                    ]
                ]
                res.forEach(function (item) {
                    lineData.push({
                        coords: item
                    });
                    scatterData.push(item[0], item[1])
                });
                option.series[0].data = lineData;
                option.series[1].data = scatterData;
                myChart.setOption(option);
            }

            getData();