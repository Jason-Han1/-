let bgColor = '#fff';
let title = '160';
let color = ['#A530FF', '#6C62FF', '#3F89FF', '#02D8FF'];
let echartData = [{
        name: "130cm以下",
        value: "3720"
    },
    {
        name: "130·135cm",
        value: "2920"
    },
    {
        name: "135-145cm",
        value: "2200"
    },
    {
        name: "145cm以上",
        value: "1420"
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
    // backgroundColor: bgColor,
    color: color,
    // tooltip: {
    //     trigger: 'item'
    // },
    title: [{
        text: '{name|' + title + '}{val|cm}\n{val|-平均身高-}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 32,
                    fontWeight: 'normal',
                    color: '#02CDFF',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#5982AC',
                }
            }
        }
    }],
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '80%',
        y: 'center',
        itemWidth: 12,
        itemHeight: 12,
        align: 'left',
        textStyle: {
            rich: {
                name: {
                    fontSize: 12
                },
                value: {
                    fontSize: 16,
                    padding: [0, 5, 0, 15]
                },
                unit: {
                    fontSize: 12
                }
            }
        },
        formatter: function(name) {
            let res = echartData.filter(v => v.name === name);
            res = res[0] || {};
            let unit = res.unit || '';
            return '{name|' + name + '}'
        }
        // data: legendName
    },
    series: [{
        type: 'pie',
        radius: ['45%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                borderColor: bgColor,
                borderWidth: 2
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                    color: '#e6e6e6'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{value|' +
                        formatNumber(params.value) + '人}'
                    );
                },
                padding: [0 , -100, 25, -100],
                rich: {
                    icon: {
                        fontSize: 16
                    },
                    name: {
                        fontSize: 14,
                        padding: [0, 10, 0, 4],
                        color: '#666666'
                    },
                    value: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#333333'
                    }
                }
            }
        },
    }]
};