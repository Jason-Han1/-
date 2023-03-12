let barTopColor = ["#22A29D", "#CD8954", "#2299D2"];
let barBottomColor = ["#80B670", "#C6BD49", "#2AD0DC"];
option = {
    backgroundColor: '#161C43',
    title: {
        text: '食用菌',
        top:20,
        left:'center',
        textStyle:{
            color:'#00eaff',
            fontSize:18,
            fontWeight:'normal'
        }
    },
    grid:{
        top:'20%',
        bottom:'15%'
    },
    xAxis: {
        data: ['2019年','2020年','2021年'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle:{
                color:'#545278'
            }
        },
        axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
                fontSize: 14,
                color: '#ffffff',
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
            show: true,
            lineStyle:{
                color:'#545278'
            }
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#ffffff',
            }
        },
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
                    return barBottomColor[params.dataIndex];
                }
            }
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16
        },
        symbolPosition: 'end',
        data: [20,30,20],
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
        data: [20,30,20],
    },{
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
                opacity: .9
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%',
        data: [20,30,20],
    }]
};