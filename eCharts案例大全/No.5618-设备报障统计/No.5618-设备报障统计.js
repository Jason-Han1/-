options = [{
    backgroundColor:'#FFFFFF',
    title: {
        text: '设备报障统计',

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: true},
            //magicType: {show: true, type: ['stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    // legend: {
    //     data: ['检查企业数']
    // },
    
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
         data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }],
    yAxis: [{
        type: 'value',
        name: '故障上报次数',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '检查企业数',
        type: 'bar',
        itemStyle:{
            normal:{color:'#01949B'},
        },
        markPoint : {
                data : [
                    {type : 'max', name : '最大值'},
                     {type : 'min', name : '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            },
        data: [5, 10, 3, 8, 9,10, 15, 3, 0,2,12,10]
    }]
}
];