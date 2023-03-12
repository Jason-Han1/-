var color = ['#FC4567', '#2F8DF4', '#C25EC4']

option = {
    color: color,
    backgroundColor: '#0A173B',
    title: {
        text: '南丁格尔',
        left: 'center',
        top: '50%',
        textStyle: {
            fontSize: 22,
            color: '#fff',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: 20,
        top: 20
    },
    series: [{
        type: 'pie',
        roseType: 'radius',
        radius: ['30%', '60%'],
        data: [{
                value: 220,
                name: '社会组织'
            }, {
                value: 120,
                name: '事业单位'
            },
            {
                value: 189,
                name: '工商企业登记注册'
            }
        ],
        label: {
            normal: {
                formatter: '{font|{c}}\n{hr|}\n{font|{d}%}',
                rich: {
                    font: {
                        fontSize: 20,
                        padding: [5, 0],
                        color: '#fff'
                    },
                    hr: {
                        height: 0,
                        borderWidth: 1,
                        width: '100%',
                        borderColor: '#fff'
                    }
                }
            },
        },
        labelLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        }
    }]
};