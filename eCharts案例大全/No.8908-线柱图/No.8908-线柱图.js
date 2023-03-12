var xAxis = ['1', '2', '3', '1', '2', '3', '1', '2', '3'];
var data = ['1', '2', '3', '1', '2', '3', '1', '2', '3'];

var lineData = [];
data.forEach((v, i) => {
    lineData.push({
        coords: [
            [i, 0],
            [i, v - 0.06],
        ]
    });
});

option = {
    xAxis: {
        data: xAxis
    },
    yAxis: {

    },
    color: ['#5dc'],
    series: [{
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                barBorderRadius: [15, 15, 0, 0]
            },
            data: data,
        }, {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 2,
            effect: {
                show: true,
                period: 3,
                trailLength: 0.5,
                color: 'rgba(255, 255, 255, .2)',
                //symbol: 'rect',
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: '#fff',
                    width: 0,
                    curveness: 0
                }
            },
            data: lineData
        },
        {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 2,
            effect: {
                delay: .5,
                show: true,
                period: 2,
                trailLength: 0.5,
                color: 'rgba(255, 255, 255, .2)',
                //symbol: 'rect',
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: '#fff',
                    width: 0,
                    curveness: 0
                }
            },
            data: lineData
        }
    ]
}