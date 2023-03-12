var colors = ['#67b9ff', '#62dfc9', '#fbaa6d'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['蓝鸽标准模拟卷', '传统模拟卷', '基础复习套卷1']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['知识点覆盖度', '匹配度', '难度', '区分度', '曝光度']
    }],
    yAxis: [{
        type: 'value',
        name: '知识点覆盖度',
        position: 'left',
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
    }],
    series: [{
        name: '蓝鸽标准模拟卷',
        type: 'bar',
        data: [75, 20, 0.75, 0.2, 0.2]
    }, {
        name: '传统模拟卷',
        type: 'bar',

        data: [70, 20, 0.7, 0.2, 0.2]
    }, {
        name: '基础复习套卷1',
        type: 'bar',

        data: [6.48, 82.82, 0.5, 0.5, 0]
    }]
};