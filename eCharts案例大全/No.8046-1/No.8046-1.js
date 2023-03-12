option = {
    color:['#4876FF'],
    backgroundColor:'rgba(13, 16, 27)',
    angleAxis: {
        data: ['周一', '周二', '周三', '周四'],
    },
    radiusAxis: {
        splitNumber:1,
        type: 'category',
         data: [100],
        z: 10
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [20,20,40],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }],
};
