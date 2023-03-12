
let bgColor = '#fff';
let fontColor = "#333";
let titleColor = '#666';
let scale = 0.8;
let title = '合计';
let echartData = [{
        name: "可售",
        value: "3720",
    },
    {
        name: "计划入库",
        value: "2920",
 
    },
    {
        name: "入库中",
        value: "2200",
    },
    {
        name: "预留-转运中",
        value: "1420",
    },
    {
        name: "预留-处理中",
        value: "1420",
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
    color: ['#1891FF', '#FF7A8C', '#8167F5', '#FFA94C', '#82D588', '#4AEAB0'],
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
        icon: 'circle',
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
            return '{name|' + name + '}  {value|' + res.value + '}'
        }
    },
    series: [{
        type: 'pie',
        radius: ['30%', '50%'],
        center: ['50%', '50%'],
        data: echartData,

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
                        '{value|' + params.name + '} {value|' +
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