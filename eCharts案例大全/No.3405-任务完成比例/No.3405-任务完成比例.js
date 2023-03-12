option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['目标任务', '完成任务','完成率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        name:'%'
        //boundaryGap: [0, 0.01]
    },{
        type: 'value',
        name:'个'
        //boundaryGap: [0, 0.01]
    }],
    yAxis: [{
        type: 'category',
        data: ['海曙', '江北', '镇海', '北仑', '鄞州', '奉化','余姚','慈溪','宁海','象山','杭州湾','保税区','大榭','高新区','东钱湖']
    }],
    series: [
        {
            name: '目标任务',
            type: 'bar',
            data: [18,89, 34, 70, 44,30,50,30,22,35,43,22,32,55,10],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFFF"
                        },
                        {
                            offset: 1,
                            color: "#0080FF"
                        }
                    ])
                }
            },
        },
        {
            name: '完成任务',
            type: 'bar',
            data:  [18,89, 34, 70, 44,30,50,30,22,35,43,22,32,55,10],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#E29052"
                        },
                        {
                            offset: 1,
                            color: "#FA5A53"
                        }
                    ])
                }
            },
        }
        ,
        {
            name: '完成率',
            type: 'line',
            xAxisIndex: 1,
            data: [98,77, 87, 97, 79,84,56,88,93,80,90,89,99,83,68],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "rgba(25,133,255,.4)"
                        },
                        {
                            offset: 1,
                            color: "rgba(25,133,255,.4)"
                        }
                    ])
                }
            },
        }
    ]
};