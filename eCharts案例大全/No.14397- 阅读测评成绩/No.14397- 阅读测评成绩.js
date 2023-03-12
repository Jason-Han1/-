option = {
    title: {
        text: '阅读测试成绩概览',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['正确率', '用时']
    },
    toolbox: {

        show: true,
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }

        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ["向君丞", "刘星雨", "冯景文", "邓晓雯", "王然", "黄张林", "梁雄伟", "林馀", "林思言"]
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '平均正确率',
        type: 'bar',
        data: [75, 49.5, 72.5, 63, 68.8, 68.8, 78.3, 88.8, 47],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '[平均用时',
        type: 'bar',
        data: [329.25, 392.25, 418.25, 418.5, 309.75, 219.5, 129, 310.5, 349.5],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};