option = {
    baseOption: {
        backgroundColor: '#090F27',
        tooltip: {
            triggerOn: "onmousemove",
        },
        color: ['#00D8FF', '#FF4343'],

        geo: {
            map: 'china',
            roam: true,
        },
        visualMap: {
            show: true,
            top: 'top',
            min: 0,
            max: 20,
            seriesIndex: 0,
            calculable: true,
            inRange: {
                color: ['blue', 'blue', 'green', 'yellow', 'red']
            }
        },
        timeline: {
            show: true,
            axisType : 'category',
            data: ['2020','2021'],
            autoPlay: true,
            // playInterval: 300,
        },
        series: [{
            type: 'heatmap',
            coordinateSystem: 'geo',
            pointSize: 5,
            blurSize: 6
        }]
    },
    options: [
        {
        series: [{
            type: 'heatmap',
            name: '2020',
            data: [
                [120.09909203766, 30.237447835223, 12],
                [120.09909203766, 30.937447835223, 12],
                [120.09909203766, 30.237447835223, 2],
                [118.99909203766, 30.447835223, 200],
            ],
        }]
    },
    {
        series: [{
            type: 'heatmap',
            name: '2021',
            data: [
                [120.09909203766, 30.237447835223, 1],
                [120.09909203766, 30.937447835223, 129],
                [120.09909203766, 30.237447835223, 22],
            ],
        }]
    },
    ]
};