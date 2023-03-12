option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
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
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    },
    series: [
        {
            name: '最高气温',
            type: 'line',
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
                symbol: 'circle',
                label: {
                  show: true,
                  fontSize: 50 ,
                  position: 'top',
                },
                itemStyle: {
                  color: '#fff',
                  borderColor: '#34aaff',
                  borderWidth: 4,
                  opacity: 1
                },
                data: [
                    {
                        name: '某个坐标',
                        value: 11,
                        coord: [6,9]
                    }
                ]
            },
        }
    ]
};