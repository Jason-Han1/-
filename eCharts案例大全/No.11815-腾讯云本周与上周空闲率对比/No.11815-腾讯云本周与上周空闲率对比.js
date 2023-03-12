option = {
    title: {
        text: '腾讯云设备空闲率走势'
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
        max:0.1,
        interval:0.1
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
            data:[0.002314815,0.002237713,0.056213091,0.0675,0.085185185]
        },
        {
            name:'上周空闲率',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[0.047588734, 0.004718137, 0.059022671, 0.000835503,0.000763888]
        },
    ]
};
