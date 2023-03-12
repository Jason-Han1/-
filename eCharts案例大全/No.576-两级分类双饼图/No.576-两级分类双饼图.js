
var seriesData1 = [{
    name: "养殖",
    value: "3759"
}, {
    name: "生活用品",
    value: "1741"
}, {
    name: "种植",
    value: "510"
}];

var seriesData2 = [{
    name: "饲料",
    value: "1759"
}, {
    name: "动保",
    value: "1000"
}, {
    name: "添加剂",
    value: "500"
}, {
    name: "海鲜水产",
    value: "300"
}, {
    name: "养殖设备",
    value: "200"
}, {
    name: "礼品保健",
    value: "741"
}, {
    name: "腊味干货",
    value: "600"
}, {
    name: "米面油粮",
    value: "400"
}, {
    name: "水果干果",
    value: "510"
}];


let echartData = {
    inner: seriesData1,
    outer: seriesData2
};

var colorList1=[{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#2E2EE6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#2E2EE6' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#E6174B' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#E6174B' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#30BF30' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#30BF30' // 100% 处的颜色
                }],
            }];
var colorList2 = [{
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#24B383' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#24B383' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#00AACC' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00AACC' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#0066FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#0066FF' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#4400CC' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#4400CC' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#C500CC' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#C500CC' // 100% 处的颜色
                }],
            }, {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#E60000' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#E60000' // 100% 处的颜色
                }],
            }
            , {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FA8219' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FA8219' // 100% 处的颜色
                }],
            }
            , {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#BF9926' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#BF9926' // 100% 处的颜色
                }],
            }
            , {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#9BBF30' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#9BBF30' // 100% 处的颜色
                }],
            }
            ];
option = {
    series: [{
            color:colorList1,
            type: 'pie',
            radius: ['15%', '40%'],
            itemStyle: {
                normal: {
                    borderColor: 'rgba(28,33,46,0.6)',
                    borderWidth:4,
                }
            },
            label: {
                normal: {
                    position: 'inner',
                    fontSize: 14,
                    formatter: params => {
                        return (
                            '{name|' + params.name + '}'
                        );
                    },
                    padding: [0, -130, 25, -130],
                    rich: {
                        color: '#fff',
                        name: {
                            fontSize: 14,
                            padding: [0, 0, 3, 0],
                            color: '#fff'
                        },
                        percent: {
                            fontSize: 14,
                            color: '#fff',
                            padding: [0, 0, 17, 0],
                        },
                    },
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: echartData.inner
        },
        {
            type: 'pie',
            color: colorList2,
            radius: ['40%', '60%'],
            data: echartData.outer,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(28,33,46,0.6)',
                    borderWidth:4,
                }
            },
            labelLine: {
                normal: {
                    length:20,
                    length2: 0,
                    lineStyle: {
                        color: '#C8C8C8'
                    }
                }
            },
            label: {
                normal: {
                    formatter: params => {
                        return '{name|' + params.name + '}\n{hr|}\n{percent|' + params.value + '万元}  {percent|' + params.percent + '%} '
                    },
                    distanceToLabelLine: 0,
                    padding: [-2, 0, 0, 0],
                    rich: {
                        name: {
                            color: "#fff",
                            fontSize: 13,
                            padding: [6, 10],
                            align: 'left'
                        },
                        percent: {
                            color: "#fff",
                            align: 'center',
                            fontSize: 13,
                            padding: [5, 10]
                        },
                        hr: {
                            borderColor: '#fff',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0,
                        }
                    }
                }
            },
        }
    ]
};
