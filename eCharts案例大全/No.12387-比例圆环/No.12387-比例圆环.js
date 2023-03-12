var chartData = [0.2311, 0.3311, 0.4311]
var chartName = ['2016', '2017', '2018']
var radius = [0.3];
for (var i = 0; i < chartData.length; ++i) {
    radius.push(radius[0] / Math.sqrt(1 / chartData[i]));
}
var colors = ['#558BFF', '#A1D4FF'];
var top = 0.5;

var series = [];
var titles = [];
for (var i = 0; i < chartData.length; ++i) {
    titles.push({
        text: chartData[i] * 100 + '%',
        left: 'center',
        top: '25%',
        left: i * 25 + 20 + '%',
        textStyle: {
            color: '#fff',
            fontSize: 28,
            fontWeight: 'normal',

        }
    },{
        text: chartName[i],
        left: 'center',
        top: '65%',
        left: i * 25 + 22.2 + '%',
        textStyle: {
            color: 'gray',
            fontSize: 20,
            fontWeight: 'normal',
        }
    }
    
    );
    series.push({
        type: 'pie',
        silent: true,
        radius: [97, radius[0] * 100 + '%'],
        label: {
            normal: {
                show: false,
            }
        },
        color: [colors[0]],
        center: [i * 25 + 25 + '%', (top) * 100 + '%'],
        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: '#fff',
                    opacity: 0.3
                }
            }
        }],
        animationType: 'scale'
    }, {
        type: 'pie',
        silent: true,
        radius: [0, radius[i + 1] * 100 + '%'],
        label: {
            normal: {
                show: false,
            }
        },
        // color: [colors[i]],
        center: [i * 25 + 25 + '%', (top + (-radius[i + 1] + radius[0]) / 2) * 100 + '%'],
        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(1, 0, 1, 1, [{
                        offset: 0,
                        color: colors[0]
                    }, {
                        offset: 1,
                        color: colors[1]
                    }]),
                    shadowBlur: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            }
        }],
        animationType: 'scale'
    })
}

myChart.setOption({
    title: titles,
    series: series,
    backgroundColor: '#053686'

});