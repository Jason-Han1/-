let bgColor = '#fff';
let title = '160';
// let color = ['#A530FF', '#6C62FF', '#3F89FF', '#02D8FF'];
let colorList = ['#6DCDE6', '#E23AF5', '#4366F3', '#F5A43A'];
let Data = [{
        name: "流动性紧缺",
        value: "37"
    },
    {
        name: "供给性紧缺",
        value: "29"
    },
    {
        name: "小规模供给性紧缺",
        value: "22"
    },
    {
        name: "一般紧缺",
        value: "14"
    }
];

let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = Data.reduce((a, b) => {
    return a + b.value * 1
}, 0);

option = {
    // backgroundColor: bgColor,
    color: colorList,
    // tooltip: {
    //     trigger: 'item'
    // },
    title: [{
        // text: '{name|' + title + '}{val|cm}\n{val|-平均身高-}',
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
        // orient: 'vertical',
        icon: 'rect',
        x: 'center',
        y: '20',
        itemWidth: 12,
        itemHeight: 12,
        align: 'left',
        itemGap: 24,
        textStyle: {
            fontSize: 12,
            color: '#8EC6D8',
           /* rich: {
                name: {
                    fontSize: 12,
                    color: '#8EC6D8'
                },
                value: {
                    fontSize: 16,
                    padding: [0, 5, 0, 15]
                },
                unit: {
                    fontSize: 12
                }
            }*/
        },
        // formatter: function(name) {
        //     let res = Data.filter(v => v.name === name);
        //     res = res[0] || {};
        //     let unit = res.unit || '';
        //     return '{name|' + name + '}'
        // }
        // data: legendName
    },
    series: [{
        type: 'pie',
        radius: ['35%', '45%'],
        center: ['50%', '50%'],
        hoverAnimation: true,
        selectedMode: 'single',
        selectedOffset: 10,
        clockwise: true,
        data: Data,
        itemStyle: {
            normal: {
                borderColor: bgColor,
                borderWidth: 6
            }
        },
        labelLine: {
            normal: {
                length: 40,
                length2: 60,
                lineStyle: {
                    color: '#73C5D9'
                }
            }
        },
        label: {
            textStyle: {
                align: 'left'
            },
            formatter: '{a|{b} \n {d}%}',
                /*formatter: params => {
                    return (
                        '{a| '+ params.name +' \n }' + 
                        '{b| '+ params.value +'% \n }'
                    );
                },*/
            padding: [20, 0, 0, 0],
            rich: {
                icon: {
                    fontSize: 16
                },
                a: {
                    fontSize: 14,
                    padding: [0, 10, 6, 4],
                    color: '#8EC6D8'
                },
            }
        }
    },
    {
        // 短刻度节点线
        type: 'gauge',
        startAngle: 270, // 270
        endAngle: -89.9999,
        center: ['50%', '50%'],
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        radius: '56%',
        splitNumber: '60', // 42
        axisLine: {
            show: false,
            lineStyle: {
                color: [
                    [1, '#1755ff'] // 01ADF8 1755ff
                ],
                width: 10
            }
        },
        splitLine: {
            length: 14,
            lineStyle: {
                width: 2,
                color: '#01ADF8',
                distance: 10,
            } 
        },
        detail: {
            show: false
        },
    },
    {
        // 长刻度节点线
        type: 'gauge',
        startAngle: 270, // 270
        endAngle: -89.9999,
        center: ['50%', '50%'],
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        radius: '58%',
        splitNumber: '12',
        axisLine: {
            show: false,
            lineStyle: {
                color: [
                    [1, '#1755ff'] // 01ADF8 1755ff
                ],
                width: 10
            }
        },
        splitLine: {
            length: 18,
            lineStyle: {
                width: 2,
                color: '#00ADF9',
                distance: 10,
            }
        },
        detail: {
            show: false
        },
    },
    
    ]
};