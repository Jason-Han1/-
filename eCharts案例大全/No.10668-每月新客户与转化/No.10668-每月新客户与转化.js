app.title = '';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#888'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: true},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: false}
        }
    },
    legend: {
        data:['新客户数量','新客户转化率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '数量',
            min: 0,
            max: 450,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '转化率',
            min: 0,
            max: 70,
            interval: 5,
            axisLabel: {
                formatter: '{value} ％'
            }
        }
    ],
    series: [
        {
            name:'新客户数量',
            type:'bar',
            data:[100, 110, 230, 233, 256, 280, 267, 162]
        },
        
        {
            name:'新客户转化率',
            type:'line',
            yAxisIndex: 1,
            data:[30, 35, 33, 45, 30, 30, 23, 34]
        }
    ]
};
