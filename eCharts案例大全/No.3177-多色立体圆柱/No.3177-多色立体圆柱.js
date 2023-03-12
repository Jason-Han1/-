 data = [{
        name: "常规",
        value: 175.17
    },
    {
        name: "紧急",
        value: 148.35
    },
    {
        name: "疑难",
        value: 95.36
    }
];
xAxisData = [];
seriesData1 = [];
sum = 0;

barTopColor = ["#02c3f1", "#53e568", "#a154e9"];
barBottomColor = ["rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)"];
data.forEach(item => {
    xAxisData.push(item.name);
    seriesData1.push(item.value);
    sum += item.value;
});
option = {
    backgroundColor: '#061326',
    title: {
        text: '多色立体圆柱',
        top:20,
        left:'center',
        textStyle:{
            color:'#fff',
            fontSize:20
        }
    },
    grid:{
        top:'25%',
        bottom:'15%'
    },
    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            formatter: function(params, index) {
                return '{a|' + (seriesData1[index] / sum * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
            },
            textStyle: {
                fontSize: 14,
                color: '#ffffff',
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#ffffff'
                    },
                    b: {
                        height: 20,
                        fontSize: 14,
                        color: '#ffffff'
                    }
                }
            }
        },
        interval: 0
    },
    yAxis: {
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
    series: [{
        name: '柱顶部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                }
            }
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16
        },
        symbolPosition: 'end',
        data: seriesData1,
    }, {
        name: '柱底部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                }
            }
        },
        data: seriesData1
    }, 
    {
        name: '第一圈',
        type: 'pictorialBar',
        symbolSize: [47, 16],
        symbolOffset: [0, 11],
        z: 11,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: barTopColor[0],
                borderWidth: 2
            }
        },
         data: [seriesData1[0],"",""]
    }, 
        {
        name: '第一圈',
        type: 'pictorialBar',
        symbolSize: [47, 16],
        symbolOffset: [0, 11],
        z: 11,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: barTopColor[1],
                borderWidth: 2
            }
        },
         data: ["",seriesData1[1],""]
    },
        {
        name: '第一圈',
        type: 'pictorialBar',
        symbolSize: [47, 16],
        symbolOffset: [0, 11],
        z: 11,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: barTopColor[2],
                borderWidth: 2
            }
        },
     data: ["","",seriesData1[2]]
    },
      {
        name: '第二圈',
        type: 'pictorialBar',
        symbolSize: [62, 22],
        symbolOffset: [0, 17],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: barTopColor[0],
                borderWidth: 2
            }
        },
        data: [seriesData1[0],"",""]
    }, 
     {
        name: '第二圈',
        type: 'pictorialBar',
        symbolSize: [62, 22],
        symbolOffset: [0, 17],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: barTopColor[1],
                borderWidth: 2
            }
        },
          data: ["",seriesData1[1],""]
    }, 
     {
        name: '第二圈',
        type: 'pictorialBar',
        symbolSize: [62, 22],
        symbolOffset: [0, 17],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor:barTopColor[2],
                borderWidth: 2
            }
        },
            data: ["","",seriesData1[2]]
    }, 
  
    {
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    return new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 1,
                                color: barTopColor[params.dataIndex]
                            },
                            {
                                offset: 0,
                                color: barBottomColor[params.dataIndex]
                            }
                        ]
                    );
                },
                opacity: 0.8
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: seriesData1
    }
    ]
};