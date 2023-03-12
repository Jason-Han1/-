var uploadedDataURL = "/asset/get/s/data-1603936589396-WRJ-JyfkQ.png";


var datas = [{
    'name': 'UV',
    'value': 45
}, {
    'name': 'PV',
    'value': 55
}, {
    'name': 'IP',
    'value': 35
}]

var datax = datas.map(item => {
    return item.name
})

option = {
    // title: {
    //     text: '用户活跃占比',
    //     textStyle: {
    //         fontSize: 24,
    //         color: '#fff',
    //         fontFamily: "Microsoft Yahei",
    //         fontWeight: '100'
    //     },
    //     top: '10%',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ': ' + params[0].value + '%';
        }
    },
    xAxis: {
        data: datax,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#444444'
            }
        }
    },
    yAxis: {
        max: 100,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    color: ['#89DA4F', '#FCC828', '#8EC7F4', '#CDCBEC', '#14B961'],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '0%',
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: 'path://M10 600 Q 95 0 180 600',
        label: {
            normal: {
                show: true,
                position: 'top',
                // formatter: '{c}%',
                formatter: ['{c|{c}%}', '{b|{b}}', '{d|}'].join('\n'),
                rich: {
                    // hr: {
                    //     backgroundColor: 't',
                    //     borderRadius: 3,
                    //     width: 3,
                    //     height: 3,
                    //     padding: [3, 3, 0, -12]
                    // },
                    b: {
                        color: '#aaa',
                        padding: [2, 0, 0, 0],
                        align: 'center',
                        fontSize: 18,

                    },
                    c: {
                        color: '#00EEFF',
                        padding: [2, 0, 0, 0],
                        
                        fontSize: 20,
                        fontWeight: 'bolder'
                    },
                    d: {
                        backgroundColor: {
                            image: uploadedDataURL,
                        },
                        align: 'center',
                        height: 25,
                        width: 25,
                    }
                },

            }
        },
        itemStyle: {
            // normal: {
            //     opacity: 1,
            //     color: function (params){
            //       var colorList = ['#89DA4F','#FCC828','#8EC7F4','#CDCBEC','#14B961','#E3E3E3'];
            //       return colorList[params.dataIndex];
            //     }
            // },
            emphasis: {
                opacity: 1
            }
        },
        data: [{
            value: datas[0].value,
            symbolSize: ['110%', '105%'],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#63FA63'
                    }, {
                        offset: 1,
                        color: '#01CC98'
                    }]),
                },
                emphasis: {
                    opacity: 1,
                    color: '#89DA4F'
                }

            },

        }, {
            value: datas[1].value,
            symbolSize: ['130%', '105%'],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#EAB700'
                    }, {
                        offset: 1,
                        color: '#EDB900'
                    }]),
                },
                emphasis: {
                    opacity: 1,
                    color: '#FFD700'
                }

            },
            z: 10
        }, {
            value: datas[2].value,
            symbolSize: ['110%', '105%'],
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#18CDF2'
                    }, {
                        offset: 1,
                        color: '#3378FF'
                    }]),
                },
                emphasis: {
                    opacity: 1,
                    color: '#1E90FF'
                }

            },
        }],
    }]
};