option = {
    title: {
        text: 'ucloud空闲率对比'
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
        max:0.002
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
            data:[0.000192379, 0.000708521, 0.001252815, 0.001097972,0.001754879]
        },
        {
            name:'上周空闲率',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[0.000009384,0.000032845,0.000347222,0.000422297,0.000990052]
        },
    ]
};
