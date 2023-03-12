option = {
    title: {
        text: '设备空闲率走势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['本周空闲率','上周空闲率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五']
    },
    yAxis: {
        type: 'value',
        min:0,
        max:0.2
    },
    series: [
        {
            name:'本周空闲率',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[0.000369727,
0.007941101,
0.007058578,
0.000344007,
0.012786137]
        },
        {
            name:'上周空闲率',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[0.042265747,
0.000053615,
0.118469742,
0.114327186,
0.000626929
]
        },
    ]
};
