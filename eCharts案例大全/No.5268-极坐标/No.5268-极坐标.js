let linearEndColor = '#FFCC59';
let linearStartColor = '#1AF6EE';
let max = 100;
let currentNum = 50;



option = {
    angleAxis: {},
    radiusAxis: [{
        type: 'category',
        data: ['周一'],
        z: 10
    }],
    polar: {},
    series: [{
        type: 'bar',
        // roundCap: true,
        data: [1],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        barWidth: 40,
        itemStyle: {
            // color: [
            //     [currentNum / max, {
            //         type: 'linear',
            //         x: 0,
            //         y: 0,
            //         x2: 0,
            //         y2: 1,
            //         colorStops: [{
            //             offset: 0,
            //             color: linearEndColor // 0% 处的颜色
            //         }, {
            //             offset: 1,
            //             color: linearStartColor // 100% 处的颜色
            //         }],
            //     }],
            //     [1, "#D2D2D2"]
            // ],
        }
    }, {
        type: 'bar',
        roundCap: true,
        data: [1],
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a',
        label:{
            show:true,
            position:'right'
        }
    },{
        type: 'bar',
        roundCap: true,
        data: [1],
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A']
    }
};