var series = [];

var data = [-28, -6, -3, 12, 22, 31, 40];
var countries = ['俄罗斯', '中国', '美国', '英国', '墨西哥', '巴西', '澳大利亚'];

var titles = [];

for (var i = 0; i < 7; i++) {

    var x = 7 + i / 7 * 100 + '%';

    titles.push({
        text: countries[i],
        textAlign: 'center',
        left: x,
        bottom: 10,
        padding: 0,
        textStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 'normal'
        }
    })

    series.push({
        animation: true,
        waveAnimation: true,

        color: ['rgb(253, 77, 73)'],
        center: [x, '50%'],
        radius: '63%',
        type: 'liquidFill',
        shape: 'path://M229.844,151.547v-166.75c0-11.92-9.662-21.582-21.58-21.582s-21.581,9.662-21.581,21.582v166.75c-9.088,6.654-14.993,17.397-14.993,29.524c0,20.2,16.374,36.575,36.574,36.575c20.199,0,36.574-16.375,36.574-36.575C244.838,168.944,238.932,158.201,229.844,151.547z',
        outline: {
            show: false
        },
        amplitude: 1,
        waveLength: '20%',
        backgroundStyle: {
            color: 'none',
            borderColor: '#fff',
            borderWidth: 5
        },
        data: [{
            // -60 到 100 度
            value: (data[i] - (-60)) / 160 + 0.1,
            rawValue: data[i]
        }],
        itemStyle: {
            normal: {
                shadowBlur: 0
            }
        },
        label: {
            normal: {
                position: 'insideBottom',
                distance: 10,
                formatter: function(item) {
                    return ' ' + item.data.rawValue + '°';
                },
                textStyle: {
                    color: 'rgb(253, 77, 73)',
                    fontSize: 16
                }
            }
        }
    })
}

myChart.setOption({
    title: titles,
    series: series
});