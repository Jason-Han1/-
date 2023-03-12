 
option = {
    backgroundColor: '#000312',
    series: [
        {
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['40%', '0%'],
            z: 10,
            labelLine: {
                normal: {
                    show: false
                }
            },
            silent: true,
            data: [{
                value: 220,
                itemStyle: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(0, 88, 170, 0)' // 0% 处的颜色
                        }, {
                            offset: 0.7,
                            color: 'rgba(0, 88, 170, 0)' // 0% 处的颜色
                        }, {
                            offset: .8,
                            color: 'rgba(66, 100, 189, 0.6)' // 50% 处的颜色
                        }, {
                            offset: .85,
                            color: 'rgba(66, 100, 189, 0.72)' // 50% 处的颜色
                        }, {
                            offset: .9,
                            color: 'rgba(66, 100, 189, 0.6)' // 50% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(66, 100, 189, 0.1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            }]
        },
    ]
};