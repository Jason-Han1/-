var xData = ['正式', '预备', '支部', '总支', '党委']

var data = [13.7, 13.4, 13.5, 16.1, 17.4]

option = {
    backgroundColor: '#121847',
    title:{show:false},
    tooltip: {
        show: false,
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [10, 10], //内边距
    },
    grid: {
        // borderWidth: 0,
        top: 5,
        left:5,
        right:75,
        bottom: 5,
        // textStyle: {
        //     color: "#fff"
        // }
    },
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#363e83',
            }
        },
        axisLabel: {
            show:false,
            inside: false,
            textStyle: {
                color:'red'|| '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
        },
        data: xData,
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show:true,
            inside: false,
            textStyle: {
                color:'#fff',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter:function(val){
                return  `${val}k`
            },
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: [500,400,300,200,100],
        
    }],
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#2f3640',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#2f3640 ',
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#bac0c0',
                fontWeight: 'normal',
                fontSize: '12',
            },
            formatter: '{value}个',
        },
    },
    series: [{
            name: '',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c0e9'
                    }, {
                        offset: 1,
                        color: '#3b73cf'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '20%',
            data: data,
            label: {
                normal: {
                    color:'#fff',
                    show: true,
                    // position: 'center',
                    position: [0, '-100%'],
                    textStyle: {
                        fontSize: 14,
                        fontWeight: 'bold',
                        fontFamily:'PingFangSC'
                    },
                    formatter:function(a,b){
                        
                        console.log(a,b);
                        return a.name;
                    }
                }
            },
        },
        {
            name: '',
            type: 'bar',
            yAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#121847', //柱子背景色
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            label: {
                normal: {
                    color:'#fff',
                    show: false,
                    // position: 'center',
                    position: [0, '-100%'],
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 'bold'
                    },
                    formatter:1212|| '{b}\n{c}%'
                }
            },
            barWidth: '20%',
            data: [30, 30, 30, 30, 30]
        }
    ]
}