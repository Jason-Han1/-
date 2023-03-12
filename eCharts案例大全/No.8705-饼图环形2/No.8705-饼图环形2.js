let bgColor = '#fff';
let fontColor = "#333";
let titleColor = '#666';
let scale = 1;
let title = '总数';
let echartData = [{
        name: "A类",
        value: "3720",
        // unit: "元"
    },
    {
        name: "B类",
        value: "2920",
        // unit: "元"
    },
    {
        name: "C类",
        value: "2200",
        // unit: "元"
    },
    {
        name: "D类",
        value: "1420",
        // unit: "元"
    }
];
let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);
option = {
    backgroundColor: bgColor,
    color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: '{name|' + title + '}\n{val|' + total + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 22 * scale,
                    fontWeight: 'bold',
                    color: titleColor,
                    padding: [10, 0]
                },
                val: {
                    fontSize: 22* scale,
                    fontWeight: 'bold',
                    color: titleColor,
                }
            }
        }
    },
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '80%',
        y: 'center',
        itemWidth: 12 * scale,
        itemHeight: 12 * scale,
        align: 'left',
        textStyle: {
            rich: {
                name: {
                    fontSize: 12 * scale
                },
                value: {
                    fontSize: 16 * scale,
                    padding: [0, 5, 0, 15]
                },
                unit: {
                    fontSize: 12 * scale
                }
            }
        },
        formatter: function(name) {
            let res = echartData.filter(v => v.name === name);
            res = res[0] || {};
            let unit = res.unit || '';
            return '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
        }
        // data: legendName
    },
    series: [{
        type: 'pie',
        radius: ['30%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        // itemStyle: {
        //     normal: {
        //         borderColor: bgColor,
        //         borderWidth: 1
        //     }
        // },
        labelLine: {
            normal: {
                length: 20,
                length2: 20
            }
        },
        label: {
            normal: {
                formatter: params => {
                    console.log(params)
                    return (
                        "{value|" +
                        params.percent.toFixed(2) +
                        "}" +
                        "{unit|%}"
                    );
                },
                rich: {
                    value: {
                        fontSize: 16 * scale,
                        lineHeight: 16 * scale
                    },
                    unit: {
                        fontSize: 12 * scale,
                        lineHeight: 12 * scale,
                        padding: [0, 0, 2 * scale, 0]
                    }
                }
            }
        },
    }]
};