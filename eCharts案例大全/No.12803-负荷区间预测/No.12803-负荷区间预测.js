option = {
    title: {
       // text: '来水信息管理',
       // subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // align: 'bottom',
        bottom:10,
        data:['历史负荷']
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
    xAxis:  {
        name: '时间',
        nameLocation: 'center',
        nameGap:100,
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        name: '负荷（万kW）',
        nameLocation: 'center',
        nameGap:80,
        min: 0,
        max: 80,
        axisLabel: {
            formatter: '{value} m³/s'
        }
    },
    series: [
     
        {
            name:'历史负荷',
            type:'line',
            data:[25, 29, 15, 18, 68, 60, 30],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
};
