option = {
    color: ['rgb(106,187,255)', '#00d98b', '#f45e23'],
    legend: {
        data: ['20s接通率', '人工服务量', '人工服务量预测'],
        right: 40,
        itemWidth: 25,
        itemHeight: 10,
        itemGap: 10,
        textStyle: {
            fontSize: 9,
            color: '#000'
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
            type: 'category',
            name: '时间',
            data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            // show: false,
            // position: 'top',
             axisLabel: {
                formatter: '{value}时',
                textStyle: {
                    color: '#000',
                    fontSize: 8,
                }
            },
              nameTextStyle: {
                color: "#000",
                fontSize: 8,
                padding: 10
            },
            axisLine: {
                lineStyle: {
                    color: '#000',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            splitLine: {
                show: false
            }, //去除网格线
        },
        // {
        //     type: 'value',
        //     min: 0,
        //     max: 24,
        //     splitNumber: 24,
        //     axisLabel: {
        //         formatter: '{value}时',
        //         textStyle: {
        //             color: '#61beff',
        //             fontSize: 8,
        //         }
        //     },
        //     axisLine: {
        //         lineStyle: {
        //             color: '#61beff',
        //             width: 1 //这里是为了突出显示加上的
        //         }
        //     },
        //     splitLine: {
        //         show: false
        //     }, //去除网格线
        // }
    
    yAxis: [{
            type: 'value',
            name: '服务量',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#61beff',
                    fontSize: 8,
                }
            },
            splitLine: {
                show: false
            },
            nameTextStyle: {
                color: "#61beff",
                fontSize: 8,
                padding: 10
            },
            axisLine: {
                lineStyle: {
                    color: '#61beff',
                    width: 1, //这里是为了突出显示加上的
                }
            }
        },
        {
            type: 'value',
            name: '接通率',
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: '#00d98b',
                    fontSize: 8,
                }
            },
            splitLine: {
                show: false
            },
            nameTextStyle: {
                color: "#00d98b",
                fontSize: 8,
                padding: 10
            },
            axisLine: {
                lineStyle: {
                    color: '#00d98b',
                    width: 1, //这里是为了突出显示加上的
                }
            }
        }
    ],
    series: [{
            name: '20s接通率',
            type: 'line',
            yAxisIndex: 1,
            // symbol: 'circle',     //折点设定为实心点
            symbolSize: 8, //设定实心点的大小
            data: [20.3, 23.4, 23.0, 45, 23, 45, 68, 12, 65],
            label: {
                normal: {
                    formatter: function(params) {
                        let str = '';
                        if (params.value != 0) {
                            str = params.value + '%';
                        }
                        return str;
                    },
                    show: true,
                    position: 'top',
                    fontSize: 10,
                    color: '#000'
                }
            },
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 2 
                    }
                }
            },
        },
        {
            name: '人工服务量',
            type: 'bar',
            stack: '广告',
            data: [310, 290, 330, 310, 310, 290, 330, 310, 310],
            label: {
                normal: {
                    formatter: function(params) {
                        let str = '';
                        if (params.value != 0) {
                            str = params.value;
                        }
                        return str;
                    },
                    show: true,
                    position: 'top',
                    fontSize: 10
                }
            },
        },
        {
            name: '人工服务量预测',
            type: 'bar',
            stack: '广告',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 330, 310, 310, 290, 330, 310, 310, 290, 330, 310, 310, 290, 330, 310, 310],
            label: {
                normal: {
                    formatter: function(params) {
                        let str = '';
                        if (params.value != 0) {
                            str = params.value;
                        }
                        return str;
                    },
                    show: true,
                    position: 'top',
                    fontSize: 10
                }
            },
        },
    ]
};
setInterval(() => {
    myChart.setOption({
      legend: {
        selected: {
          '20s接通率': false,
          '人工服务量': true,
          '人工服务量预测':true
        }
      }
    })
    myChart.setOption({
      legend: {
        selected: {
         '20s接通率': true,
          '人工服务量': true,
          '人工服务量预测':true
        }
      }
    })
},5000)