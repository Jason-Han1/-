option = {
    title: {
        text: '不同紧急程度抢修效率分析'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['一般','紧急','特急']
    },
   
    toolbox: {
                show: true,
         feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', 
        '9月', '10月']
    },
    yAxis: {
        type: 'value'        ,
        axisLabel: {
            formatter: '{value} 分钟'
        }
    },
    series: [
       {
            name:'特急',
            type:'line',
            data:[30, 31, 35, 36, 37, 41, 42,43,45,44]
        },
        {
            name:'紧急',
            type:'line',
           data:[32, 39, 44, 45, 45, 46, 47,48,43,22]
        } 
        ,
        {
            name:'一般',
            type:'line',
           data:[40, 41, 50, 60, 57, 58, 59,60,61,62]
        }     
    ]
};
