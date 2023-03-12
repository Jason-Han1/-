option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
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
        data:['已贯通','未贯通','贯通率']
    },
    xAxis: [
        {
            type: 'category',
            data: ['主变压器','断路器','组合电器','隔离开关','电流互感器','电压互感器','电抗器','电力电容器','耦合电容器','接地变','站用变','开关柜','避雷器','消弧线圈']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '数量',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '贯通率',
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name:'已贯通',
            type:'bar',
            data:[2, 5, 7, 23, 25, 76, 135, 162, 32, 20, 6, 3,20,30]
        },
        {
            name:'未贯通',
            type:'bar',
            data:[3, 6, 9, 26, 28, 70, 175, 182, 48, 18, 6, 2,30,20]
        },
        {
            name:'贯通率',
            type:'line',
            yAxisIndex: 1,
            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,8,5]
        }
    ]
};
