option = {
    tooltip: {
        show: true,

    },
    visualMap: [{
        show: true,
        type: 'continuous',
        seriesIndex: 0,
        calculable: true,
        right: 100,
        bottom: 40,
        min: 7000,
        max: 35000,
        inRange: {
            color: ['#10284C', '#265EB3']
        },
        textStyle: {
            color: '#fff',
            fontSize: 18
        }
    }],
    series: [{
        type: 'map3D',
        map: 'china',
        regionHeight: 1,
        boxWidth: 95,
        boxDepth: 70,
        label: {
            show: false,
            textStyle: {
                color: '#fff',
                fontSize: 28
            }
        },
        emphasis: {
            label: {
                show: false
            }
        },
        itemStyle: {
            areaColor: '#1d5e98',
            opacity: 1,
            borderWidth: 1,
            borderColor: '#06152A',

        },
        data: []
    }]
};