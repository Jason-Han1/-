option = {
    backgroundColor: '#C7EDCC',
    legend: {
        data: ['接入率', '在线率'],
        align: 'right',
        right: 10,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['广东省发改委',
            '广州市发改委',
            '东莞市发改委',
            '深圳市发改委',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#494e54",
                width: 1,
                type: "solid"
            }
        },
       
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            fontSize: 14,
            textStyle: {
                color: "#a4a7aa",
            }
        },
    }],
    yAxis: [{
        
        name: '总投资(万元)',
        axisLine: {
            lineStyle: {
                color: '#494e54',
            }
        },
        axisTick:{ //y轴刻度线
		show:false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#1a213b',
            }
        },
        axisLabel:{
            formatter:'{value} ',
        }
        
    },
      {
        name: '项目数量(件)',   
        splitLine: {show: false},
        axisTick:{ //y轴刻度线
		show:false
        },
        axisLine: {
            lineStyle: {
                color: '#494e54',
            }
        },
        axisLabel:{
            formatter:'{value} ',
        }
    }],
    series: [{
        name: '接入率',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                borderRadius: 200,
                position: [-6, -30],
                distance: 1,
                formatter: [
                    ' {a|{c}}',
                ].join(','),
                rich: {
                    a: {
                        color: '#fff',
                        align: 'center',
                    },

                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#46f9fd'
                }, {
                    offset: 1,
                    color: 'rgba(16,186,249,.1)'
                }]),
                opacity: 1,
            }
        }
    }, {
        name: '在线率',
        type: 'bar',
         yAxisIndex: 1, // 对应y轴第二个维度
        data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
        barWidth: 10,
        barGap: 1,
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                borderRadius: 200,
                position: [-6, -30],
                distance: 1,
                formatter: [
                    ' {a|{c}}',
                ].join(','),
                rich: {
                    a: {
                        color: '#fff',
                        align: 'center',
                    },

                }
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#dfcb61'
                }, {
                    offset: 0.8,
                    color: 'rgba(226,184,71,.8)'
                },{
                    offset: 1,
                    color: 'rgba(226,184,71,.1)'
                }]),
                opacity: 1,
            }
        }
    }]
};