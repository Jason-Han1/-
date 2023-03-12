var xdata = 55;
var ydata = 95; 
var datas_outer = [];
var datas_inner = [];
var num = 50; 
var rate = xdata / ydata;

for (var i = num; i >= 0; i--) {
    if (i <= rate * 70) {
        datas_outer.push({
            value: 1,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#0f675c'
                }, {
                    offset: 1,
                    color: '#1fd5bf'
                }]),
                borderWidth: 2,
                borderColor: '#fff',
            }
        });
        datas_inner.push({
            value: 1,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#702932'
                }, {
                    offset: 1,
                    color: '#f4586d'
                }]),
                borderWidth: 2,
                borderColor: '#fff', 
            }
        })
    } else {
        datas_outer.push({
            value: 1, 
            itemStyle: {
                normal: {
                    color: 'rgba(32, 214, 192,0)',
                },
            }
        });
        datas_inner.push({
            value: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(245,89,110,0)',
                },

            }
        })
    }
}

option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false
    },
    title: {
        text: xdata + '/' + ydata, 
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#000',
            fontSize: '30' 
        }
    },
    series: [{
            name: '',
            type: 'pie',
            radius: ['60%', '40%'],
            center: ['50%', '50%'],
            clockwise: false,
            data: datas_outer,
            startAngle: 100,
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
        },
        {
            name: '',
            type: 'pie',
            radius: ['38%', '28%'],
            center: ['50%', '50%'],
            clockwise: false,
            data: datas_inner,
            startAngle: -50,
            label: {
                show: false,
            },
            labelLine: {
                show: false
            },
        }
    ]
};