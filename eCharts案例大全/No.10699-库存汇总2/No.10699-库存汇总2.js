option = {
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['库存数量','可用数量']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'库存数量',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[100, 80, 101, 134, 90, 80, 110, 80, 101, 134, 90]
        },
        {
            name:'可用数量',
            type:'line',
            stack: '总量',
            areaStyle: {},
            data:[12, 8, 13, 24, 9, 10, 10, 20, 21, 24, 30]
        },
        
    ]
};
