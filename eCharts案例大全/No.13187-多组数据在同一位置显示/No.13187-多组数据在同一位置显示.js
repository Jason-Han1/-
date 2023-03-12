option = {
     backgroundColor: '#142058',
    legend: {
        top: 20,
        textStyle: {
            color: '#fff',
        },
        data: ['车公司A', '车公司B', '车公司C']
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '5%',
        containLabel: true
    },

    yAxis: {
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#363e83',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#363e83 ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#363e83 ',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['1月', '2月', '3月','4月', '5月', '6月','7月', '8月', '9月','10月', '11月', '12月']
        }, {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            //data: ['会', '不会', '看情况']
        },{
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true
            },
            splitLine: {
                show: false
            },
           // data: ['会', '不会', '看情况']
        },

    ],
    series: [{
            name: '车公司A',
            type: 'bar',
            xAxisIndex: 2,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    borderWidth: 2,
                    borderColor:'#076aba',
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            barWidth: '50%',
            data: [24, 27, 26,13,21,14,18,12,18,28,29,16]
        },{
            name: '车公司B',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#57a9e9',
                    barBorderRadius: 1,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '50%',
            data: [16, 18, 22,9,13,8,13,8,12,18,19,12]
        }
        ,{
            name: '车公司C',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#0888ed',
                    barBorderRadius: 1,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '50%',
            data: [11, 14, 16,8,10,5,8,3,7,9,7,9]
        }
    ]
};