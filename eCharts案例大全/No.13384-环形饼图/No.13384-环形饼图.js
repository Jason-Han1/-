option = {
    backgroundColor: '#031845',
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {d}% <br/> {c}"
    },
    legend: {
        orient: 'vertical',
        right: 'right',
        y: 'center',
        textStyle: {
            color: '#fff'
        },
        data: ['社保', '低保', '党建', '卫计', '社情民意']
    },
    title: {
        text: '事项类型',
        left: 'center',
        top: 'center',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 18,
            align: 'center'
        }
    },
    series: [{
        type: 'pie',
        radius: ['40%', '50%'],
        center: ['50%', '50%'],
        color: ['#FEBE12', '#12EABE', '#9000F0', '#FF5454', '#0000ff'],
        data: [{
                value: 335,
                name: '社保'
            },
            {
                value: 310,
                name: '低保'
            },
            {
                value: 234,
                name: '党建'
            },
            {
                value: 235,
                name: '卫计'
            },
            {
                value: 254,
                name: '社情民意'
            }
        ],
        labelLine: {
            normal: {
                show: true,
                length: 20,
                length2: 20,
                lineStyle: {
                    color: '#12EABE',
                    width: 2
                }
            }
        },
        label: {
            normal: {
                formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                rich: {
                    b: {
                        fontSize: 20,
                        color: '#12EABE',
                        align: 'left',
                        padding: 4
                    },
                    hr: {
                        borderColor: '#12EABE',
                        width: '100%',
                        borderWidth: 2,
                        height: 0
                    },
                    d: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    },
                    c: {
                        fontSize: 20,
                        color: '#fff',
                        align: 'left',
                        padding: 4
                    }
                }
            }
        }
    }]
};