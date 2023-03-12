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
                data: [
                    {
                        symbol: "rect", 
                        symbolSize: 180,
                        // 指定markpoint坐标
                        // [x, y]
                        coord: [3, 11], 
                        label: {
                        show: true,
                        
                        formatter: function (data){
                                return '自定义markpoint内容';
                            }
                    }}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        }
    ]
};