option = {

    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        selectedMode: 'single',
        label: {
            normal: {
                position: 'inside',

                formatter: function(e) {
                    if (e.percent == 0) {
                        return ''
                    } else {
                        return e.percent + '%'
                    }
                }
            }
        },
        data: [{
                value: 335,
                name: '10',
                selected: true
            }, {
                value: 310,
                name: '邮件营销',
            }, {
                value: 1234,
                name: '联盟广告'
            },

        ],
        itemStyle: {
            normal: {
                color: function(obj) {
                    console.log(obj.percent / 100)
                    return {
                            type: 'radial',
                            x: obj.percent / 100,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [{
                                offset: 0,
                                color: 'red' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'blue' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    
                },
            },
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};