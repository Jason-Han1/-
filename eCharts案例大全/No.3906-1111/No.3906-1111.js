var option = {
    toolbox: {
　　show: true,
    feature: {
　　　saveAsImage: {
　　show:true,
　　excludeComponents :['toolbox'],
　　pixelRatio: 2

　　　　}

　　}



  
},
                backgroundColor: '#fff',
                title:{
                  text:""  ,
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
                        symbolSize: 7,
                        color: 'rgba(255, 255, 255, 0.5)',
                        symbol: 'arrow'
                    },

                    itemStyle: {
                        normal: {
                            lineStyle: {
                                color: '#4ef2f2',
                                width:1,
                                opacity: 2,
                                curveness: 0.2,
                            }
                        }
                    },
                    data: []
                }, {
                    symbol: 'circle',
                    coordinateSystem: 'geo',
                    type: 'effectScatter',
                    symbolSize: 10,
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
                       [117.126541,36.6584],
                       [108.946166,34.349382]
                    ],
                    [
                        [117.126541,36.6584],
                        [117.233674,31.826972]
                        ],
                         [
                        [117.126541,36.6584],
                        [111.755426,40.848119]
                        ],
                         [
                       [ 117.290313,34.209974],
                        [113.270766,23.135618]
                        ],
                        [
                       [ 117.290313,34.209974],
                        [119.302903,26.080553]
                        ],
                         [
                       [ 117.290313,34.209974],
                        [106.634858,26.652434]
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