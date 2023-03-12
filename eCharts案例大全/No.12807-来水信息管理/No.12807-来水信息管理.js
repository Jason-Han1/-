option = {
    title: {
        text: '来水信息管理',
       // subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // align: 'bottom',
        bottom:10,
        data:['水布垭来水','隔河岩来水','高坝洲来水']
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
        name: '时间（m³/s）',
        nameLocation: 'center',
        nameGap:100,
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        name: '流量（m³/s）',
        nameLocation: 'center',
        nameGap:80,
        min: 80,
        axisLabel: {
            formatter: '{value} m³/s'
        }
    },
    series: [
        {
            name:'水布垭来水',
            type:'line',
            data:[114, 151, 145, 134, 127, 103, 130],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'隔河岩来水',
            type:'line',
            data:[103, 112, 112, 115, 113, 102, 120],
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
        },
         {
            name:'高坝洲来水',
            type:'line',
            data:[123, 112, 132, 125, 133, 122, 120],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
    ]
};
