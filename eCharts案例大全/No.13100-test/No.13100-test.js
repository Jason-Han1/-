option = {
    legend: {
        selectedMode: 'single',
        data: ['111', '222']
    },
    tooltip: {
        show: true,
    },
    geo: [{
        map: 'china',
        label: {
            show: true
        },
        regions: [{
            name: '浙江',
            itemStyle: {
                areaColor: 'red'
            }
        }, {
            name: '江苏',
            itemStyle: {
                areaColor: 'green'
            }
        }, {
            name: '江西',
            itemStyle: {
                areaColor: 'blue'
            }
        }]
    }],
    series: [{
            name: '111',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 20,
            geoIndex: 0,
            tooltip: {
                formatter: function(params) {
                    return params.name + ' : ' + params.value[2];
                }
            },
            data: [{
                name: '浙江',
                value: [120.19, 30.26, 111]
            }, {
                name: '江苏',
                value: [119.42, 32.39, 112]
            }]
        }, {
            name: '222',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            geoIndex: 0,
            symbolSize: 20,
            tooltip: {
                formatter: function(params) {
                    return params.name + ' : ' + params.value[2];
                }
            },
            data: [{
                name: '陕西',
                value: [108.72, 34.36, 222]
            }, {
                name: '山西',
                value: [112.53, 37.87, 223]
            }]
        }

    ]

};