//echarts折线图

let dataList = [{
    name: '一月',
    value: '40'
}, {
    name: '二月',
    value: '45'
}, {
    name: '三月',
    value: '30'
}, {
    name: '四月',
    value: '45'
}, {
    name: '五月',
    value: '26'
}, {
    name: '六月',
    value: '50'
}]
let dataList2 = [{
    name: '一月',
    value: '30'
}, {
    name: '二月',
    value: '35'
}, {
    name: '三月',
    value: '25'
}, {
    name: '四月',
    value: '40'
}, {
    name: '五月',
    value: '20'
}, {
    name: '六月',
    value: '38'
    
}
]

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        backgroundColor:'#fff',
        textStyle: {
          color: '#999'  
        },
        formatter: function(params) {
            var result = '';
            params.forEach(function (item) {
                result += item.marker + " " + item.seriesName + " : " + item.value +"</br>";
            });
            return result;
        },
        axisPointer: {
            lineStyle: {
                color: 'rgba(153, 153, 153, .3)',
                type: 'dashed'
            }
        }
    },
    legend: {
        data: ['进货量', '出货量'],
        type:'plain',
        itemGap:42,
        itemWidth:14,
        icon:'roundRect',
        textStyle: {
            color: "#A5A7A7",
            fontSize: 16
        }
    },
    title: {
        text: '进出货量对比',
        left: 26,
        top: 2,
        textStyle: {
            color: '#505A59',
            fontSize: 27,
            fontWeight: 700,
            fontFamily: 'PingFang SC'
        }
    },
    grid: {
        left: '6%',
        right: '6%',
        bottom: '5%',
        top: '18%',
        containLabel: true
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: dataList.length > 15 ? 35 : 100
    }],
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#f0f2f5'
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                color: '#A5A7A7',
                fontSize: '16'
            }
        },
        data: ['一月', '二月', '三月', '四月', '五月', '六月']
    },
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        axisTick: {
            show: false
        },
        //轴线上的字
        axisLabel: {
            margin: 30,
            textStyle: {
                fontSize: '16',
                color: '#9DA8C8'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#397cbc'
            }
        },
        //网格线
        splitLine: {
            lineStyle: {
                color: '#f0f2f5'
            }
        }
    }],
    series: [{
        name: '进货量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showSymbol: false,
        markPoint: {
            data: [{
                name: '周最高',
                value: 320,
                xAxis: 4,
                yAxis: 320
            }]
        },
        itemStyle: {
            color: '#98b8e6',
            borderColor: '#98b8e6',
            borderWidth: 0,
        },
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',

                    colorStops: [{
                            offset: 0,
                            color: '#98b8e6' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#98b8e6' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(49, 114, 206, 0.1)',
                shadowBlur: 30,
                shadowOffsetY: 5
            }
        },
        areaStyle: {
            //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(49, 114, 206, 0.1)"
                        }, {
                            offset: 0.6,
                            color: "rgba(49, 114, 206, 0.05)"
                        },
                        {
                            offset: 0.8,
                            color: "rgba(49, 114, 206, 0.01)"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(49, 114, 206, 0.1)",
                shadowBlur: 6
            }
        },
        data: dataList
    }, {
        name: '出货量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        showSymbol: false,
        itemStyle: {
            color: '#8dc7c3',
            borderColor: '#8dc7c3',
            borderWidth: 0
        },
        markPoint: {
            data: [{
                name: '周最高',
                value: 310,
                xAxis: 5,
                yAxis: 310
            }]
        },
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',

                    colorStops: [{
                            offset: 0,
                            color: '#8dc7c3' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#8dc7c3' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(27, 143, 135, 0.1)',
                shadowBlur: 12,
                shadowOffsetY: 5
            }
        },
        areaStyle: {
            //区域填充样式
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(27, 143, 135, 0.1)"
                        },
                        {
                            offset: 0.6,
                            color: "rgba(27, 143, 135, 0.05)"
                        },
                        {
                            offset: 1,
                            color: "rgba(27, 143, 135, 0.01)"
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(27, 143, 135, 0.1)",
                shadowBlur: 6
            }
        },
        data: dataList2
    }]
};