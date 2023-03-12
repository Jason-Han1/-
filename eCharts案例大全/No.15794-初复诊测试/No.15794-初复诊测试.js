app.title = '堆叠柱状图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    legend: {
        data: ['初诊', '复诊']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['王医生', '李医生', '李医生1', '李医生2', '李医生3', '李医生4', '李医生5']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '初诊',
        type: 'bar',
        stack: '广告',
        data: [120, 132, 101, 134, 90, 230, 210],
        label: {
            normal: {
                show: true
            }
        },
    }, {
        name: '复诊',
        type: 'bar',
        stack: '广告',
        data: [220, 182, 191, 234, 290, 330, 310],
        label: {
            normal: {
                show: true
            }
        },
    }, ]
};