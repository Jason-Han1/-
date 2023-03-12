app.title = '本年用车部门统计';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#111'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            data: ['财务部','研发部','综合管理部','产品部','UI设计部','工程实施部','技术部'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '次数',
            min: 0,
            max:150,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'次数',
            type:'line',
            data:[12, 7, 9, 5, 2,15,8]
        }
    ]
};
