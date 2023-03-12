option = {
    backgroundColor: 'rgba(60, 163, 216, 0.2)',
    grid: {
        top: '10%',
        left: '5%',
        right: '5%',
        bottom: '6%',
    },
    legend: {
        show: false
    },
    tooltip: {},
    xAxis: [{
        type: 'category',
        data: ['山东省', '周二', '周三', '周四', '周五', '周六', '周日'],
        splitLine:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:true,
            color:'#fff'
        }
    }],
    yAxis: [{
        type: 'value',
        max: function(value) {
            return value.max + 20;
        },
        splitLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            show:false
        }
    }, {
        type: 'value',
        max: function(value) {
            return value.max + 20;
        },
        splitLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        axisLine:{
            show:false
        },
        axisLabel:{
            show:false
        }
    }],
    dataZoom: [{
        show: true,
        height: 12,
        xAxisIndex: [0],
        bottom: '3%',
        start: 0,
        end: 50,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",
        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c"
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    series: [{
            name: '立项数',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [18, 3],
            symbolOffset: [-59, 0],
            yAxisIndex: 0,
            z: 2,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#71adf7'
                }
            },
            data: [{
                value: 10,
                symbolPosition: 'end'
            }]
        },
        {
            name: '验收数',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 3],
            symbolOffset: [-35, 0],
            yAxisIndex: 0,
            z: 2,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#27efa466'
                }
            },
            data: [{
                value: 10,
                symbolPosition: 'end'
            }]
        },
        {
            name: '立项拆旧区',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 3],
            symbolOffset: [-12, 0],
            yAxisIndex: 1,
            z: 2,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#fdaf0166'
                }
            },
            data: [{
                value: 25,
                symbolPosition: 'end'
            }]
        },
        {
            name: '验收拆旧区',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 3],
            symbolOffset: [12, 0],
            yAxisIndex: 1,
            z: 2,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#fd810166'
                }
            },
            data: [{
                value: 25,
                symbolPosition: 'end'
            }]
        },
        {
            name: '安置建新区',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 3],
            symbolOffset: [35, 0],
            yAxisIndex: 1,
            z: 2,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#01e6fd66'
                }
            },
            data: [{
                value: 15,
                symbolPosition: 'end'
            }]
        },
        {
            name: '城镇建新区',
            type: 'pictorialBar',
            symbol: 'rect',
            symbolSize: [17, 3],
            symbolOffset: [59, 0],
            yAxisIndex: 1,
            z: 2,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#fd01f566'
                }
            },
            data: [{
                value: 15,
                symbolPosition: 'end'
            }]
        },
        {
            name: '立项数',
            type: 'bar',
            barWidth: 18,
            yAxisIndex: 0,
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgb(42, 80, 138, 1)'
                            },
                            {
                                offset: 0.7,
                                color: 'rgba(42, 80, 138, 0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(42, 80, 138, 0.1)'
                            }
                        ]
                    )
                },

            },
            data: [10],
        },
        {
            name: '验收数',
            type: 'bar',
            barWidth: 18,
            yAxisIndex: 0,
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(53, 165, 123,1)'
                            },
                            {
                                offset: 0.7,
                                color: 'rgba(53, 165, 123,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(53, 165, 123,0.1)'
                            }
                        ]
                    )
                },

            },
            data: [10],
        },
        {
            name: '立项拆旧区',
            type: 'bar',
            barWidth: 18,
            yAxisIndex: 1,
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(187, 134, 54,1)'
                            },
                            {
                                offset: 0.7,
                                color: 'rgba(187, 134, 54,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(187, 134, 54,0.1)'
                            }
                        ]
                    )
                },

            },
            data: [25],
        },
        {
            name: '验收拆旧区',
            type: 'bar',
            barWidth: 18,
            yAxisIndex: 1,
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                       0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(165, 88, 33,1)'
                            },
                            {
                                offset: 0.7,
                                color: 'rgba(165, 88, 33,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(165, 88, 33,0.1)'
                            }
                        ]
                    )
                },

            },
            data: [25],
        },
        {
            name: '安置建新区',
            type: 'bar',
            barWidth: 18,
            yAxisIndex: 1,
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(74, 123, 140,1)'
                            },
                            {
                                offset: 0.7,
                                color: 'rgba(74, 123, 140,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(74, 123, 140,0.1)'
                            }
                        ]
                    )
                },

            },
            data: [15],
        },
        {
            name: '城镇建新区',
            type: 'bar',
            barWidth: 18,
            yAxisIndex: 1,
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0,
                                color: 'rgba(30,89,115,1)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(30,89,115,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'transparent'
                            }
                        ]
                    )
                },

            },
            data: [15],
        }
    ]
};