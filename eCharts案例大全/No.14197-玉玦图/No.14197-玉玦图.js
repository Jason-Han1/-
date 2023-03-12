app.title = '玉玦图';

option = {
    angleAxis: {
        startAngle: 180,
        max: 2,
        //哎,datamax也不能用 datamax*2更不能用
        // function(data){
        //       console.log(data)
        //       return data.max*2},
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    radiusAxis: {
        type: 'category',
        inverse: true,
        data: [, , , , , , , , ],
        //因为polar.radius不能用所以随便往里面塞点东西扩张一下
        z: 10,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    polar: {
        //哎 polar.radius也不能用
    },
    series: [{
        type: 'bar',
        data: [1],
        coordinateSystem: 'polar',
        name: 'a'
    }, {
        type: 'bar',
        data: [, 0.4],
        coordinateSystem: 'polar',
        name: 'b'
    }, {
        type: 'bar',
        data: [, , 0.2],
        coordinateSystem: 'polar',
        name: 'c'
    }, {
        //固定用 
        data:[],
        type: 'bar',
        coordinateSystem: 'polar',
        barCategoryGap: 2,
        barGap: '-100%',
    }],
    legend: {
        show: true,
        data: ['a', 'b', 'c']
    }
};