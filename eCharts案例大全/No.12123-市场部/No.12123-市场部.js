app.title = '市场部';

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
        data: ['件量','成本','收入']  ,
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [60,100,20],
        coordinateSystem: 'polar',
        name: '占比/超出',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0,140,0],
        coordinateSystem: 'polar',
        name: '超出',
        stack: 'a'
    }],
    legend: {
        show: true,
        data:  ['占比/超出']
    }
};