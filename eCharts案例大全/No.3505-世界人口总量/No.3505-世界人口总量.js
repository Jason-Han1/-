option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter:function (params, ticket, callback) {
            console.log(params[0].data.name)
            return  params[0].data.name
        }
    },
    legend: {
        data: ['2011年', '2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
           type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
    
    },
    yAxis: {
         type: 'value',
        boundaryGap: [0, 0.01]
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [{value:'1231',name:'你好'},{value:'122',name:'好啊'}]
        },
   
    ]
};