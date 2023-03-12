var chartData = [90.83, 11.36,7.12]
var datas=[];
for (var i = 0; i < chartData.length; ++i) {
    datas.push(chartData[i]/100);
}
var chartName = ['2016', '2017', '2018']
var radius = [0.3];

var colors = ['#317FFF', '#A1D4FF'];
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
        color: '#e4e4e4',
        opacity: 1,
    }
};
var series = [];
var titles = [];
for (var i = 0; i < datas.length; ++i) {
    titles.push({
            text: chartData[i] + '次',
            left: 'center',
            top: '47%',
            left: i * 25 + 20 + '%',
            textStyle: {
                color: '#317FFF',
                fontSize: 25,
                fontWeight: 'normal',

            }
        }, {
            text: chartName[i]+'年',
            left: 'center',
            top: '65%',
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
        radius: [70, radius[0] * 80 + '%'],
        label: {
            normal: {
                show: false,
            }
        },
        color: [colors[0]],
        center: [i * 25 + 25 + '%', (top) * 100 + '%'],
        data: [{
            value: datas[i],
            name: '01',
            itemStyle: {
                normal: {
                    color: colors[0],
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                } 
            }
        }, {
            name: '02',
            value: 1-datas[i],
             itemStyle: placeHolderStyle
        }]
    })
}

myChart.setOption({
    title: titles,
    series: series,
    backgroundColor: '#fff'

});