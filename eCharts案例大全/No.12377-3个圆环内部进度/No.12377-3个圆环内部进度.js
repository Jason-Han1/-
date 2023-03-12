var chartData = [0.9111, 0.3311, 0.4311]
var chartName = ['2016', '2017', '2018']
var radius = [0.3];

var colors = ['#9ACEFF'];
var top = 0.5;
placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: "center"
        },
        labelLine: {
            show: false
        },
        color: '#fff',
        opacity: 0.3,
        borderWidth: 0
    }
};
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
        }, {
            text: chartName[i]+'年',
            left: 'center',
            top: '47%',
            left: i * 25 + 20 + '%',
            textStyle: {
                color: 'gray',
                fontSize: 25,
                fontWeight: '100',
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
        radius: [79, radius[0] * 100*0.8 + '%'],
        
        center: [i * 25 + 25 + '%', (top) * 100 + '%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                borderColor:colors[0],
            }
        },
        data: [{
            value: chartData[i],
            name: '70%',
            
        }, {
            value: 1-chartData[i],
            name: '',
            itemStyle: placeHolderStyle
        }]
    })
}

myChart.setOption({
    title: titles,
    series: series,
    backgroundColor: '#053686'

});