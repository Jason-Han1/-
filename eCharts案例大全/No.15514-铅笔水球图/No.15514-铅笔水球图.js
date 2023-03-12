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
        radius: '50%',
    
        type: 'liquidFill',
        shape:'path://M43.844,188.547 L43.844,21.797 C43.844,9.877 34.182,0.215 22.264,0.215 C10.346,0.215 0.683,9.877 0.683,21.797 L0.683,188.547 L22.2635,221.428128 L43.844,188.547 Z',
        //shape: 'path://M479.232622,0.563387605 C479.232622,0.563387605 581.318924,34.9465747 595.916359,117.247124 C610.513793,199.547674 712.946576,234.277341 712.946576,234.277341 L282.844461,664.379456 C251.594162,695.539776 210.032528,712.700992 165.814244,712.700992 C121.595959,712.700992 80.0620523,695.5408 48.7840267,664.379456 C-15.71599,600.034368 -15.71599,495.32832 48.8117536,430.984256 L479.232622,0.563387605 Z',
        outline: {
            show: false
        },
        amplitude: 1,
        waveLength: '10%',
        backgroundStyle: {
            color: 'none',
            borderColor: '#fff',
            borderWidth: 15
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
                distance: -40,
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