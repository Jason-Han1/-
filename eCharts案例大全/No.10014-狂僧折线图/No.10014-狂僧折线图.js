option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['加权到手均价','最高到手价','最低到手价','当前商品'],
        right:'30'
    },
    dataZoom:{
        // 仅显示即可
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
        data: ['10月1日','10月2日','10月3日','10月4日','10月5日','10月6日','10月7日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'加权到手均价',
            type:'line',
            data:[280, 192, 181, 174, 210, 280, 210],
            symbolSize:1
        },
        {
            name:'最高到手价',
            type:'line',
            data:[340, 382, 391, 334, 390, 390, 410],
            symbolSize:1
        },
        {
            name:'最低到手价',
            type:'line',
            data:[100, 132, 101, 154, 190, 130, 210],
            symbolSize:1
        },
        {
            name:'当前商品',
            type:'line',
            data:[240, 332, 301, 324, 380, 330, 320],
            symbolSize:8
        }
    ]
};
