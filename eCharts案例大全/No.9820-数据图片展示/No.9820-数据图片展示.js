var uploadedDataURL1 = "/asset/get/s/data-1571903156177-jKZm9OYY.png";

var uploadedDataURL2 = "/asset/get/s/data-1571903969487-_8xWdw8q.png";

var uploadedDataURL3 = "/asset/get/s/data-1571903980255-4uxiI-VV.png";

var uploadedDataURL4 = "/asset/get/s/data-1571903156177-jKZm9OYY.png";

var option={
    grid: {
        bottom: '25%',
        containLabel: true
    },
    tooltip: {
        show: true
    },
    xAxis: {
        data: [
            ['监造', 5],
            ['厂内抽检', 45],
            ['送样抽检', 416],
            ['催交验收', 28]
        ],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            rich: {
                black: {
                    color: '#333333',
                    fontSize: 12
                },
                blue: {
                    color: '#0078DB',
                    fontSize: 14
                },
                align: {}
            }
        }
    },
    yAxis: {
        show: false,
        max: 60
    },
    series: [{
        type: 'pictorialBar',
        name: 'pictorial element',
        symbolSize: [60, 60],
        symbolPosition: 'start',
        z: 10,
        barGap: '20%',
        tooltip: {},
        label: {
            show: false,
            position: 'bottom',
            distance: -70,
            rich: {
                black: {
                    color: '#333333',
                    fontSize: 12
                },
                blue: {
                    color: '#0078DB',
                    fontSize: 14
                },
                align: {}
            }
        },
        data: [{
            value: 100,
            symbol: 'image://' + uploadedDataURL1,
            cursor: 'default'
        }, {
            value: 100,
            symbol: 'image://' + uploadedDataURL2,
            cursor: 'default'
        }, {
            value: 100,
            symbol: 'image://' + uploadedDataURL3,
            cursor: 'default'
        }, {
            value: 100,
            symbol: 'image://' + uploadedDataURL4,
            cursor: 'default'
        }]
    }]
}