var hours = ['12a', '1a'];
var days = ['Saturday', 'Friday'];

var data = [[0,0,1], [0, 1, 2], [1, 0, 3], [1, 1, 4]]
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            show: true,
            formatter: function(p){
                if (p.value[2] >2) {
                    return `{a|${p.value[2]}}`
                }else {
                    return `{b|${p.value[2]}}`
                }
            },
            rich: {
                a: {
                    color: 'red',
                    width: '100%',
                    height: '100%',
                    backgroundColor:'blue'
                },
                b: {
                    color: 'green',
                    width: '1%',
                    backgroundColor:'blue'
                }
            }
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};