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
            data: [1, 10, 2, 5, 3, '', ''],

        },
        {
            name: '最低气温',
            type: 'line',
            data:['', '', '', '', 3, 2, 0],
                 itemStyle:{
                normal:{
                    lineStyle:{
                        width:2,
                        type:'dotted'  //'dotted'虚线 'solid'实线
                    }
                }
            },      

        }
    ]
};