option = {
    backgroundColor:'#081C90',
    legend: {
        orient: 'vertical',
        right: '20',
        y: 'center',
        icon: 'circle',
        textStyle: {
            color: '#196FD9'
        },
        data: ['物料1', '物料2', '物料3', '物料4', '物料5', '物料6', '物料7'],
        formatter: function(name) {
            var oa = option.series[0].data;
            var num = oa[0].value + oa[1].value + oa[2].value + oa[3].value;
            for (var i = 0; i < option.series[0].data.length; i++) {
                if (name == oa[i].name) {
                    return name + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                }
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['50%', '70%'],
        roseType: 'radius',
        startAngle: 100,
        color: ['#FF4F64', '#2271DD', '#43AFF1', '#FF9D1B', '#FF6426', '#2545E7', '#8356E4'],
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            },

        },
        data: [{
            value: 700,
            name: '物料1',

        }, {
            value: 500,
            name: '物料2',
        }, {
            value: 500,
            name: '物料3',

        }, {
            value: 650,
            name: '物料4',
        }, {
            value: 650,
            name: '物料5',

        }, {
            value: 500,
            name: '物料6',
        }, {
            value: 700,
            name: '物料7',

        }]
    }, {
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '46%'],
        label: {
            show: false,
        },
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#1C365E'
                }
            }
        }]
    }, {
        name: '',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [0, '43%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 0,
            itemStyle: {
                normal: {
                    color: '#43AFF1'
                }
            },
            label: {
                normal: {
                    formatter: '物料采购',
                    textStyle: {
                        color: '#000',
                        fontSize: 25,
                        fontWeight: 'bold'
                    }
                }
            }
        }]
    }]
};