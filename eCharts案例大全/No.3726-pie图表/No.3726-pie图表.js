var tit = '桔子';
var data = [{
    cityName: 'title1',
    value: 100,
}, {
    cityName: 'title2',
    value: 170,
}, {
    cityName: 'title3',
    value: 100,
}]
var data_dw = [];
var datahl = [];
for (var i = 0; i < data.length; i++) {
    data_dw.push(data[i].cityName);
    datahl.push(data[i].value)
}
option = {
    backgroundColor: '#05283a',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },

    legend: {

        show: true,

        orient: 'vertical',

        itemGap: 6,

        data: data_dw,

        x: '2%',

        y: '70%',

        itemHeight: 10,

        itemWidth: 10,

        textStyle: {

            color: '# fff ',
            fontSize: 12,
        }
    },
    title: {
        text: tit,
        // subtext: tit,
        x: 'center',
        y: '35%',
        textStyle: {
            fontSize: 16,
            fontWeight: 'normal',
            align: "center",
            color: '#CCCCCC'
        },
    },
    series: [{
            type: 'pie',
            radius: ['50%', '55%'],
            center: ['50%', '40%'],
            color: ['#80C269', '#00FFFF', '#0090F1', '#FFA800', '#4658F6'],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#031845',
                }
            },
            data: [{
                    value: datahl[0],
                    name: data_dw[0],
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#29ffa7' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#1ffdd4' // 100% 处的颜色
                                }]
                            }
                        }
                    }
                },
                {
                    value: datahl[1],
                    name: data_dw[1],
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#e97716' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#fbc800' // 100% 处的颜色
                                }]
                            }
                        }
                    }
                },
                {
                    value: datahl[2],
                    name: data_dw[2],
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#048ff6' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#048ff6' // 100% 处的颜色
                                }]
                            }
                        }
                    }
                }

            ],
            labelLine: {
                normal: {
                    show: false,
                    length: 0,
                    length2: 0,
                    lineStyle: {
                        color: '#CCCCCC',
                        width: 0
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b|{d}%}',
                    // \n{hr|}\n{c|{c}}
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#f9b50a',
                            align: 'left',
                            padding: 0
                        },
                        d: {
                            fontSize: 12,
                            padding: 10,
                        },
                        hr: {
                            borderColor: '#CCCCCC',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        c: {
                            fontSize: 14,
                            align: 'center',
                            padding: 4,
                            color: '#fff'
                        }
                    }
                }
            }
        }

    ]
};