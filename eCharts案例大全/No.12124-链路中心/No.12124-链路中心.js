app.title = '链路中心';

option = {
     tooltip : {
        trigger: 'item',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['撤仓补贴', '运输成本', '转运成本', '收入'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [10, 100, 60, 99],
        coordinateSystem: 'polar',
        name: '占比/超出',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0, 15, 60, 0],
        coordinateSystem: 'polar',
        name: '超出',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['占比/超出']
    }
};