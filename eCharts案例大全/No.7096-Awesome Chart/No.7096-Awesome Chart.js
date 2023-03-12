option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: [{
            type: 'value',
            interval: 10,
            position: 'left',
            max: 10,
            min: -190,
        },
        {
            type: 'category',
            position: 'right',
            interval: 0,
            data: ['', '左高低(mm)', '右高低(mm)', '左轨向(mm)', '右轨向(mm)',
                '轨距(mm)', '超高(mm)', '水平(mm)', '三角坑(mm)',
                '曲率(radpkm)', '横向加速度(g)', '垂向加速度(g)', '速度(km/h)',
                '地面标志物ALD()', '左高低70m(mm)', '右高低70m(mm)', '左轨向70m(mm)',
                '右轨向70m(mm)', '轨距变化率(mm)', '曲率变化率(radpkmpm)', ''
            ],
            boundaryGap: false,
            triggerEvent: true,
            inverse: true,
        }
    ],
    series: [{
        type: 'line',
        data: [0, -20, -30, 0, -90, -100, 0]
    }, {
        type: 'line',
        data: [-50, -20, 0, -70, -90, -110, 0]
    }],
    toolbox: {
        feature: {
            dataZoom: {
                show: true,
            }
        }

    }
};