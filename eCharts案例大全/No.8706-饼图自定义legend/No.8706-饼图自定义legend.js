let bgColor = '#fff';
let fontColor = "#333"
let scale = 1;
let title = '总数';
let echartData = [{
        name: "A类",
        value: "372",
        // unit: "元"
    },
    {
        name: "B类",
        value: "292",
        // unit: "元"
    },
    {
        name: "C类",
        value: "220",
        // unit: "元"
    },
    {
        name: "D类",
        value: "142",
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
total = formatNumber(total);
option = {
    backgroundColor: bgColor,
    color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
    tooltip: {
        trigger: 'item'
    },
    // title: {
    //     text: '{name|' + title + '}\n{val|' + total + '}',
    //     top: 'center',
    //     left: 'center',
    //     textStyle: {
    //         rich: {
    //             name: {
    //                 fontSize: 16 * scale,
    //                 fontWeight: 'normal',
    //                 color: fontColor,
    //                 padding: [10, 0]
    //             },
    //             val: {
    //                 fontSize: 32 * scale,
    //                 fontWeight: 'normal',
    //                 color: fontColor,
    //             }
    //         }
    //     }
    // },
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '30',
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
                show: false,
                formatter: params => {
                    console.log(params)
                    return (
                        "{name| " +
                        params.name +
                        "}\n" +
                        "{value|" +
                        params.percent.toFixed(2) +
                        "}" +
                        "{unit|%}"
                    );
                },
                rich: {
                    name: {
                        fontSize: 12 * scale,
                        lineHeight: 12 * scale,
                        color: fontColor
                    },
                    value: {
                        fontSize: 16 * scale,
                        lineHeight: 16 * scale,
                        color: fontColor
                    },
                    unit: {
                        fontSize: 12 * scale,
                        lineHeight: 12 * scale,
                        color: fontColor,
                        padding: [0, 0, 5 * scale, 0]
                    }
                }
            }
        },
    }]
};