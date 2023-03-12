app.title = '网点营运中心';

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
        data: ['净利','返利', '成本', '收入'],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [159,0,0,0],
        coordinateSystem: 'polar',
        name: '净利',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0,81,0,0],
        coordinateSystem: 'polar',
        name: '返利',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0,0,24,0],
        coordinateSystem: 'polar',
        name: '成本',
        stack: 'a'
    },{
        type: 'bar',
        data: [0,0,0,190],
        coordinateSystem: 'polar',
        name: '收入',
        stack: 'a'
    }
    ],
    legend: {
        show: true,
        data: ['净利','返利', '成本', '收入']
    }
};