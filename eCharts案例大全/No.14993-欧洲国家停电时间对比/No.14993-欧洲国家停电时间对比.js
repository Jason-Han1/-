option = {
    title: {
        text: '欧洲国家与美国停电时间对比(min)',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2013年', '过去5年平均']
    },
        toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['卢森堡', '丹麦', '瑞士', '德国', '荷兰','奥地利',
        '比利时','英国','挪威','瑞典','美国']
    },
    series: [
        {
            name: '2013年',
            type: 'bar',
            data: [13, 15, 16.5, 18, 41, 50,51,78,120,123,244]
        },
        {
            name: '过去5年平均',
            type: 'bar',
            itemStyle:{normal:{color:'#41a9f4'}},
            data: [12, 15, 15, 46,31,47,46,68,150,152,240]
        }
    ]
};
