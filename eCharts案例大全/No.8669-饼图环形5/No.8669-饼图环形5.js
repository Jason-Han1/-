let bgColor = '#151618';
let fontColor = "#fff"
let scale = 1;
let title = '总数';
let echartData = [{
        name: "A类",
        value: "372",
        unit: "元",
        selected: true
    },
    {
        name: "B类",
        value: "292",
        unit: "元"
    },
    {
        name: "C类",
        value: "220",
        unit: "元"
    },
    {
        name: "D类",
        value: "142",
        unit: "元"
    }
];
let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);
echartData.forEach(v => {
    if (v.selected) {
        v.itemStyle = {
            normal: {
                borderColor: '#FFF',
                borderWidth: 0
            }
        }
    } else {
        v.itemStyle = {
            normal: {
                borderColor: '#FFF',
                borderWidth: 3
            }
        }
    }
})
option = {
    backgroundColor: bgColor,
    color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
    tooltip: {
        trigger: 'item'
    },
    title: [{
        text: '{name|' + title + '}\n{val|' + total + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 16 * scale,
                    fontWeight: 'normal',
                    color: fontColor,
                    padding: [10, 0]
                },
                val: {
                    fontSize: 32 * scale,
                    fontWeight: 'normal',
                    color: fontColor,
                }
            }
        }
    }, {
        text: '收入情况汇总',
        top: '30',
        left: 'center',
        textStyle: {
            fontSize: 28 * scale,
            color: fontColor,
            fontWeight: 400
        }
    }],
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '30',
        y: 'center',
        itemWidth: 12 * scale,
        itemHeight: 12 * scale,
        itemGap: 0,
        align: 'left',
        textStyle: {
            color: fontColor,
            fontSize: 12 * scale,
            rich: {
                name: {
                    width: 35
                },
                hr: {
                    width: 1,
                    height: 24,
                    backgroundColor: fontColor
                },
                value: {
                    padding: [0, 0, 0, 15]
                }

            }
        },
        formatter: function(name) {
            let res = echartData.filter(v => v.name === name);
            res = res[0] || {};
            let unit = res.unit || '';
            let percent = (res.value * 100 / total).toFixed(1) + '%';
            return '{name| ' + name + '}{hr|}  {per|' + percent + '}{value|' + res.value + unit + '}'
        }
        // data: legendName
    },
    series: [{
        type: 'pie',
        radius: ['30%', '50%'],
        center: ['50%', '50%'],
        selectedMode: 'single',
        data: echartData,
        labelLine: {
            normal: {
                length: 20,
                length2: 20
            }
        },
        label: {
            normal: {
                show: false
            }
        },
    }]
};

myChart.on('click', function(params) {
    echartData.forEach((v, i) => {
        if (params.dataIndex === i) {
            v.selected = true;
            v.itemStyle = {
                normal: {
                    borderColor: '#FFF',
                    borderWidth: 0
                }
            }
        } else {
            v.selected = false
            v.itemStyle = {
                normal: {
                    borderColor: '#FFF',
                    borderWidth: 3
                }
            }
        }
    });
    option.series.data = echartData;
    myChart.setOption(option)
});