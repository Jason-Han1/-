option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['销售金额','销售数量','合伙人利润']
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
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'销售金额',
            type:'line',
            stack: '',
            data:[120000, 130000, 100000, 140000, 190000, 200000, 210000]
        },
        {
            name:'销售数量',
            type:'line',
            stack: '总量',
            data:[22, 18, 19, 23, 29, 33, 31]
        },
        {
            name:'合伙人利润',
            type:'line',
            stack: '',
            data:[12300, 13600, 12200, 21800, 53600, 30100, 29100]
        }
    ]
};
