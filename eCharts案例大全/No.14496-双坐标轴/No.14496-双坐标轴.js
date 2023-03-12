option = {
    textStyle: {
        color: 'white'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },

    legend: {
        data: ['离职率','管理层', '中台', '策划', '销售', '拓展', '财务', '非营其他'],
        textStyle: {
            color: 'white'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:[{
        type: 'value',
        name: '人数',
        min: 0,
        position: 'left',
        axisLabel: {
            formatter: '{value} 人'
        }
    }, {
        type: 'value',
        name: '离职率',
        min: 0,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    xAxis: {
        type: 'category',
        data: ['上海', '苏州', '常州', '无锡', '南昌', '深圳', '北京'],
    },
    series: [{
        name:'离职率',
        type: 'line',
               yAxisIndex: 1,
        data: [2.1, 5.6, 2.8, 1.0, 5.0, 15.5, 20.5]
    }, {
        name: '管理层',
        type: 'bar',
        stack: '人数',
   
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [320, 302, 301, 334, 390, 330, 320]
    }, {
        name: '中台',
        type: 'bar',
        stack: '人数',
   
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [120, 132, 101, 134, 90, 230, 210]
    }, {
        name: '策划',
        type: 'bar',
        stack: '人数',
   
        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        name: '销售',
        type: 'bar',
        stack: '人数',

        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [150, 212, 201, 154, 190, 330, 410]
    }, {
        name: '拓展',
        type: 'bar',
        stack: '人数',

        label: {
            normal: {
                show: true,
                position: 'insideRight'
            }
        },
        data: [820, 832, 901, 934, 1290, 1330, 1320]
    }]
};