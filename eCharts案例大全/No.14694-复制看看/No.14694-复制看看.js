var percentage = [0.58, 0.22, 0.16, 0.04];
var radius = [0.6];
for (var i = 1; i < percentage.length; ++i) {
    radius.push(radius[0] / Math.sqrt(percentage[0] / percentage[i]));
}
var colors = ['#ec5845', '#f28a7d', '#fbdcd8', '#fff'];
var labels = ['≥500元：4%', '≥200元：16%', '≥100元：22%', '<100元：58%'];
var top = 0.7;

var series = [{
    type: 'pie',
    radius: [30, '40%'],
    center: ['50%', 160],
    roseType: 'radius',
    color: ['#f2c955', '#00a69d', '#46d185', '#ec5845'],
    data: [{
            value: 7,
            name: '其他'
        }, {
            value: 12,
            name: '自己制作'
        }, {
            value: 38,
            name: '线下购买'
        }, {
            value: 53,
            name: '网上购买'
        }
    ],
    label: {
        normal: {
            textStyle: {
                color: '#333',
                fontSize: 16
            },
            formatter: function (param) {
                console.log(param);
                return param.name + ':\n' + param.value + '%';
            }
        }
    },
    labelLine: {
        normal: {
            lineStyle: {
                width: 2
            }
        }
    },
    itemStyle: {
        normal: {
            shadowBlur: 30,
            shadowColor: 'rgba(0, 0, 0, 0.4)'
        }
    }
}];

for (var i = 0; i < percentage.length; ++i) {
    series.push({
        type: 'pie',
        silent: true,
        name: labels[percentage.length - i - 1],
        radius: [0, radius[i] * 100 + '%'],
        label: {
            normal: {
                show: false,
            }
        },
        color: [colors[i]],
        center: ['35%', (top + (-radius[i] + radius[0]) / 2) * 100 + '%'],
        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: colors[i],
                    shadowBlur: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            }
        }],
        animationType: 'scale'
    });
}
myChart.setOption({
    legend: {
        data: labels,
        top: '65%',
        left: '60%',
        orient: 'vertical'
    },
    series: series
});