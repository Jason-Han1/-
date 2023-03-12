// var myColor=['#eb2100','#eb3600','#d0570e','#d0a00e','#34da62','#00e9db','#00c0e9','#0096f3'];
// var myData = [232, 212, 124, 102, 42];
var myData = [42, 102, 124, 212, 232];
var myColor = ['#fff100'];
option = {
    backgroundColor: '#121B2C', //背景色
    grid: {
        left: '11%',
        top: '12%',
        right: '10%',
        bottom: '8%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b0}: {c0}"
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '16',
            }
        },
        // inverse:true,               //让y轴数据逆向
        // data: ['林宇', '黄志强', '唐正华', '张奇', '王峰']
        data: ['王峰', '张奇', '唐正华', '黄志强', '林宇']
    }, {
        axisTick: 'none',
        axisLine: 'none',
        axisLabel: {
            // show: false,
            show: true,
            textStyle: {
                color: '#fff100',
                fontSize: '16',
            },
            formatter: function (value, index) {
                return myData[index];
            }
        },
        data: ['300', '300', '300', '300', '300']
    }, {
        // name: '单位：件',
        // nameGap: '50',
        // nameTextStyle: {
        //     color: '#ffffff',
        //     fontSize: '16',
        // },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            // data: [232, 212, 124, 102, 42],
            data: myData,
            label: {
                normal: {
                    // show: true,
                    show: false,
                    position: 'right',
                    formatter: function(param) {
                        return param.value;
                    },
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    // color: function(params) {
                    //     var num = myColor.length;
                    //     return myColor[params.dataIndex % num]
                    // },
                    color: '#fff100',
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [299.5, 299.5, 299.5, 299.5, 299.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#0e2147',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [300, 300, 300, 300, 300],
            barWidth: 24,
            itemStyle: {
                normal: {
                    // color: function(params) {
                    //         var num=myColor.length;
                    //         return myColor[params.dataIndex%num]
                    // },
                    color: '#2c5eb9',
                    barBorderRadius: 5,
                }
            },
            z: 0
        },
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        },
        {
            name: '内圆',
            type: 'scatter',
            stack:'圆',
            yAxisIndex: 0,
            data: myData,
            yAxisIndex: 2,
            symbolSize: 14,
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth:3 ,
                    color: '#fff100',
                    opacity: 1,
                }
            },
            z: 2
        }
    ]
};