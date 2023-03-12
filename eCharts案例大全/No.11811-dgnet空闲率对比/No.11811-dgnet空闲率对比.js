option = {
    title: {
        text: '本周与上周走势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['本周利用率','上周利用率']
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
        max:50
    },
    series: [
        {
            name:'本周利用率',
            type:'line',
           
            label:{
                normal:{
                    show:true
                }
            },
            data:[34.82,37.16,44.68,43.73,29.89]
        },
        {
            name:'上周利用率',
            type:'line',
            label:{
                normal:{
                    show:true
                }
            },
            data:[42.33,39.25,40.48,42.80,48.56,44.96]
        },
    ]
};
