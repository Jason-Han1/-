let data = [{
    'name': '8:30-9:00',
    'value': 25
}, {
    'name': '9:00-9:30',
    'value': 20
}, {
    'name': '9:30-10:00',
    'value': 18
}, {
    'name': '10:00-10:30',
    'value': 15
}].sort((a, b) => {
    return b.value - a.value
})
data.forEach((v) => {
    v.labelLine = {
        lineStyle: {
            // width: 1,
            color: '#6f7bd7',
            smooth: 0.2,
            length: 2,
            length2: 2,
        }
    }
})
option = {
    backgroundColor: 'black',
    grid: {
        left: '5%',
        right: '2%',
        bottom: '0%',
        top: '0%',
        containLabel: true
    },
    series: [{
            type: 'pie',
            // radius: '85%',
            radius: ['10%', '85%'],
            center: ['50%', '50%'],
            zIndex: 1,
            clockwise: true,
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
                show: true,
                position: 'outside',
                formatter: function(params) {
                    return '{a|' + params.name + '}  {b|' + params.value + '}';
                },
                rich: {
                    a: {
                        color: '#627aad',
                        fontSize: 17,


                    },
                    b: {
                        color: '#00d5b9',
                        fontSize: 18,
                    },
                }

            },
            itemStyle: {
                normal: {
                    color: () => {
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#01387a'
                        }, {
                            offset: 1,
                            color: '#2a72ff'
                        }])
                    }

                    // borderColor:'#6ec0fa',
                    // borderWidth:0.5,
                },

            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    // length: 0,
                    // length2: 2,
                }
            },
            data: data,
            roseType: 'radius'
        },
        {
            name: '占位',
            type: 'pie',
            silent: true,
            center: ['50%', '50%'],
            radius: '10%',
            zIndex: 3,
            hoverAnimation: false,
            label: {
                show: false,
                position: 'center'
            },
            data: [{
                    value: 1,
                    name: '占位2'
                },

            ],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#86b1ff'
                    }, {
                        offset: 1,
                        color: '#1e6afe'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                    shadowBlur: 10,
                },
            }
        },
    ]
};