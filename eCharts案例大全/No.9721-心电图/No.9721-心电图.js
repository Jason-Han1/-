const color = '#ebf8ac';

function getColor(length) {
    var color = [];
    while (color.length < length) {
        color.push('hsla(' + 360 / (length + 1) * (color.length + 1) + ',80%,50%,.521)')
    }
    return color;
}
option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'item',
    },
    visualMap: {
       min:-1,max:1,
        color: getColor(12)
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.521)'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: color
            }
        }
    },
    yAxis: {
        name: '脉搏',
        type: 'value',
        splitNumber: 8,
        scale: true,
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.21)'
            }
        },
        axisLabel: {
            textStyle: {
                color: color
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.88)'
            }
        }
    },
    series: [{
            type: "line",
            smooth: true, //平滑曲线显示
            areaStyle: {},
            data: []
        }
    ]
};
const interval = setInterval(function() {
    let now = new Date();
    let dataItem = [
        now,
        Math.sin(option.series[0].data.length)
    ]
    option.series.forEach(function(serie) {
        if (serie.data.length >= 120) {
            serie.data.length = 0;
        }
        serie.data.push(dataItem);
    })
    myChart.setOption(option);
}, 210);