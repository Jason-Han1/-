option = {
    title: {
        text: '环比分析图',
        top:'5%',
        left:'5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        top:'5%',
        right:'20%',
        data: ['经营利润','营业收入','经营成本']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top:'15%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '经营成本',
            type: 'line',
            stack: '总量',
            smooth:true,
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
             areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#617CD0'
                }, {
                    offset: 1,
                    color: '#ADB9EC'
                }])
            },
            data: [120, 132, 101, 134, 90, 230, 210,132, 101, 134, 90, 230]
        },
        {
            name: '营业收入',
            type: 'line',
            stack: '总量',
            smooth:true,
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
             areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#B4D3BE'
                }, {
                    offset: 1,
                    color: '#9BCE81'
                }])
            },
            data: [220, 182, 191, 234, 290, 330, 310, 182, 191, 234, 290, 330]
        },
        {
            name: '经营利润',
            type: 'line',
            stack: '总量',
            smooth:true,
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
             areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#D4C4B4'
                }, {
                    offset: 1,
                    color: '#FED95F'
                }])
            },
            data: [150, 232, 201, 154, 190, 330, 410, 232, 201, 154, 190, 330]
        },
       
       
    ]
};