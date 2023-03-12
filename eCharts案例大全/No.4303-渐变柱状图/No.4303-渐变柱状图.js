option = {
    backgroundColor: '#ffffff',
    title: {
        text: "区域高风险煤矿统计",
        x: "center"
    },
    tooltip: {
        show: false
    },
    xAxis: [{
        type: 'category',
        data: [ '新桥煤矿', '陈四楼矿', '测试1', '测试2', '测试3', '测试4', '测试5','测试6'],
        axisLabel: {
            margin: 10,
            color: '#a4a4a4'
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        axisLabel: {
            color: '#a4a4a4',
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        data: [300, 450, 479, 229, 210, 250, 120, 100],
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(102,159,239,1)'
                }, {
                    offset: 1,
                    color: 'rgba(170,202,246,1)' 
                }], false)
            }
        },
        label: {
            normal: {
                show: true,
                position: 'top'
                
            }
        }
    }]
};