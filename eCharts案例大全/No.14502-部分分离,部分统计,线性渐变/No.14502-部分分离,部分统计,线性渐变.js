app.title = '分离部分统计';

option = {
    series: [{
        name: '总规模',
        hoverAnimation: false,
        selectedOffset: 5,
        startAngle: 30,
        label: {
            normal: {
                show: false
            }
        },
        z: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    var color = [
                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#eba64a'
                        }, {
                            offset: 1,
                            color: '#e26e20'
                        }]),

                        new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: '#1eb0ec'
                        }, {
                            offset: 1,
                            color: '#156be1'
                        }]), new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#f1986c'
                        }, {
                            offset: 1,
                            color: '#e74b5c'
                        }]),


                    ];
                    return color[params.dataIndex];
                }
            }
        },
        type: 'pie',
        radius: ['30%', '60%'],
        data: [{
            value: 100,
            name: '剩余规模'
        }, {
            value: 100,
            name: '未投出规模',
            selected: true
        }, {
            value: 100,
            name: '投出规模'
        }]
    }, {
        name: '已投入规模',
        hoverAnimation: false,
        startAngle: 150,
        type: 'pie',
        radius: ['60%', '65%'],
        data: [{
            value: 200,
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6b6ae4'
                    }, {
                        offset: 1,
                        color: '#539dea'
                    }])
                }
            }
        }, {
            value: 100,
            itemStyle: {
                normal: {
                    color: '#fff'
                },
                emphasis: {
                    color: '#fff'
                }
            },
            hoverAnimation: false
        }]
    }]
};