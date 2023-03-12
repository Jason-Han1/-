option = {
    backgroundColor: '#fff',
    title: {
        text: '门店预警跟踪'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['严重预警','零销预警','低销预警','波动大预警','持续降低预警'],
        orient: 'vertical',
        top: 66,
        right: 20,
        textStyle: {
            color: '#555',
            fontSize: 14
        },
        itemGap: 20,
        selected: {
                '零销预警': true, '低销预警': false, '波动大预警': false,'持续降低预警' : false
            }
    },
    grid: {
        left: '3%',
        right: '24%',
        bottom: '53%',
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
            name:'严重预警',
            type:'line',
            data:[12, 13, 10, 13, 10, 23, 21, 10, 13, 20, 23, 21],
            itemStyle: {
                    //color: '#C23531'
                }
        },
        {
            name:'零销预警',
            type:'line',
            data:[22, 18, 19, 23, 29, 33, 31, 19, 23, 29, 33, 31],
            itemStyle: {
                    //color: '#3398DB'
                }
        },
        {
            name:'低销预警',
            type:'line',
            data:[45, 43, 40, 45, 49, 43, 41, 40, 45, 49, 43, 40],
            itemStyle: {
                    //color: '#3398DB'
                }
        },
        {
            name:'波动大预警',
            type:'line',
            data:[62, 63, 60, 63, 69, 63, 62, 60, 63, 69, 63, 62],
            itemStyle: {
                    //color: '#3398DB'
                }
        },
        {
            name:'持续降低预警',
            type:'line',
            data:[82, 93, 91, 93, 90, 93, 92, 95, 93, 99, 93, 90],
            itemStyle: {
                    //color: '#3398DB'
                }
        }
    ]
};
