let bgColor = '#fff';
let fontColor = "#333";
let innerColor = '#E5F5F4';
let titleColor = '#22C278'
let scale = 1;
let echartData = [{
        name: "A类",
        value: "372",
        unit: "元"
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
let unit = echartData[0].unit || '';
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);
option = {
    backgroundColor: bgColor,
    color: ['#8FC8F0', '#67A0D5', '#FF7B51', '#FFBA00', '#4AEAB0'],
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: '{val|' + total + '}\n{name|' + unit + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 16 * scale,
                    fontWeight: 'normal',
                    color: fontColor
                },
                val: {
                    fontSize: 36 * scale,
                    fontWeight: 'bold',
                    color: titleColor,
                    padding: [10, 0]
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
    },
    series: [{
            type: 'pie',
            radius: ['40%', '60%'],
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
        },
        {
            type: 'pie',
            radius: ['0', '35%'],
            color: [innerColor],
            data: [100],
            label: {
                show: false
            },
            hoverAnimation: false,
            tooltip: {
                show: false
            },
        }
    ]
};