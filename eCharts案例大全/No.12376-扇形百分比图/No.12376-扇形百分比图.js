var chartData = [10.83, 11.36,7.12]
var datas=[];
for (var i = 0; i < chartData.length; ++i) {
    datas.push(chartData[i]/100);
}
var chartName = ['2016', '2017', '2018']
var radius = [0.3];

var colors = ['#558BFF', '#A1D4FF'];
var top = 0.5;


var series = [];
var titles = [];
for (var i = 0; i < datas.length; ++i) {
    titles.push({
            text: chartData[i] + '次',
            left: 'center',
            top: '65%',
            left: i * 25 + 20.3 + '%',
            textStyle: {
                color: '#317FFF',
                fontSize: 28,
                fontWeight: 'normal',

            }
        }, {
            text: chartName[i]+'年',
            left: 'center',
            top: '72%',
            left: i * 25 + 22 + '%',
            textStyle: {
                color: 'gray',
                fontSize: 18,
                fontWeight: '100',
            }
        }

    );
    series.push({
        type: 'pie',
        silent: true,
        radius: [85, radius[0] * 90 + '%'],
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
                    color: '#F1F1F1',
                    opacity: 1
                }
            }
        }],
        animationType: 'scale'
    }, {
        type: 'pie',
        silent: true,
        radius: [0, radius[0] * 100 + '%'],
        
        center: [i * 25 + 25 + '%', (top) * 100 + '%'],
        itemStyle:{
                normal:{
                     labelLine: {
                    show: false,
                    },
                    color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
                        offset: 0,
                        color: colors[0]
                    }, {
                        offset: 1,
                        color: colors[1]
                    }]),
                    shadowBlur: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            },
        data: [{
            value: datas[i],
            
            
        }, {
            value: 1-datas[i],
            itemStyle: {
                normal: {
                    opacity:0
                },
            }
        }]
    })
}

myChart.setOption({
    title: titles,
    series: series,
    backgroundColor: '#fff'

});