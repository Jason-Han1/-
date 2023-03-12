var uploadedDataURL = "/asset/get/s/data-1482228126093-SJLj-tUNe.png";

var percentage = [0.58, 0.24, 0.16, 0.02];
var radius = [0.4];
for (var i = 1; i < percentage.length; ++i) {
    radius.push(radius[0] / Math.sqrt(percentage[0] / percentage[i]));
}
var colors = ['#ec5845', '#f28a7d', '#fbdcd8', '#fff'];
var labels = ['≥500元：2%', '≥200元：16%', '≥100元：24%', '其他：58%'];
var left = 0.3;

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
        center: [(left + (-radius[i] + radius[0]) / 2) * 100 + '%', '75%'],
        data: [{
            itemStyle: {
                normal: {
                    color: colors[i]
                }
            }
        }],
        itemStyle: {
            normal: {
                shadowBlur: 30,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
        }
    });
}

option = {
    legend: {
        data: labels,
        top: '66%',
        left: '55%',
        orient: 'vertical'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: series,
    graphic: {
        elements: [{
            type: 'image',
            style: {
                image: uploadedDataURL,
                width: 30,
                height: 30
            },
            left: 'center',
            top: 145
        }]
    }
};