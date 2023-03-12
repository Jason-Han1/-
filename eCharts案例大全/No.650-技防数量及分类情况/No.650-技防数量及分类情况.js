let XData = ['震川社区', '花桥镇社区', '巴城镇社区', '千灯镇社区', '柏庐社区']
let valueData = [55,75,52,78,84]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            show: true,
            status: 'shadow',
            z: -1,
            shadowStyle: {
                color: '#E6F7FF',
            },
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [
        {
            position: 'bottom',
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ECF1F6'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 0.72)'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 0,
                    type: 'dashed'
                }
            },
            gridIndex: 0,
            data: XData,
        }
    ],
    yAxis: [
        {
            type: 'value',
            position: 'left',
            minInterval: 200,
            // maxInterval: 5,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: 'rgba(0, 0, 0, 0.72)',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 1,
                    type: 'solid'
                }
            },
        }
    ],
    "dataZoom": [{
        "show": true,
        "height": 8,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '160%',
        handleStyle:{
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff',
                },
                {
                    offset: 1,
                    color: '#F0F5FA',
                },
            ]),
            borderColor: '#D1DCED'
        },
       textStyle:{
        color:"#333",
        fontSize: 14,
        zlevel: 10
       },
       borderColor: 'RGBA(221, 233, 242, 1)',
       backgroundColor: 'RGBA(221, 233, 242, 1)'
    }, {
        "type": "inside",
        "show": true,
        "height": 5,
        "start": 1,
        "end": 35
    }],
    series: [
        {
            name: '技防数量及分类情况',
            type: 'bar',
            data: valueData,
            label: {
                normal: {
                    show: true,
                    position: "top",
                    textStyle: {
                        color: "rgba(80, 165, 230, 1)",
                        fontSize:18
                    }
                }
            },
            itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(71, 153, 236, 1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(82, 168, 229, 1)"
                        }
                    ])
                }
            },
            barMaxWidth: '25%',
        }
    ]
};