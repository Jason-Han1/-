let bgColor = '#fff';
let title = '案件数/件';
let color = [{
    c1: '#4D80F3',
    c2: '#8C9FFE',
}, {
    c1: '#1DB8B0',
    c2: '#32CCC4',
}, {
    c1: '#1EC15A',
    c2: '#37D872',
}, {
    c1: '#B1B632',
    c2: '#BFC444',
}, {
    c1: '#E79861',
    c2: '#F5AA76',
}, {
    c1: '#499AF2',
    c2: '#67B0FF',
}];
let echartData = [{
        name: "案由1",
        value: "152"
    },
    {
        name: "案由2",
        value: "321"
    },
    {
        name: "案由3",
        value: "164"
    },
    {
        name: "案由4",
        value: "95"
    },
    {
        name: "案由5",
        value: "306"
    },
    {
        name: "案由6",
        value: "189"
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
    color: 'red',
    title: [{
        text: '{val|' + formatNumber(total) + '}\n{name|' + title + '}',
        top: 'center',
        left: 'center',
        textStyle: {
            rich: {
                name: {
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: '#666666',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#333333',
                }
            }
        }
    }, {
        text: '单位：个',
        top: 20,
        left: 20,
        textStyle: {
            fontSize: 14,
            color: '#666666',
            fontWeight: 400
        }
    }],
    // legend: {
    //     orient: 'vertical',
    //     icon: 'rect',
    //     x: '80%',
    //     y: 'center',
    //     itemWidth: 12,
    //     itemHeight: 12,
    //     align: 'left',
    //     textStyle: {
    //         rich: {
    //             name: {
    //                 fontSize: 12
    //             },
    //             value: {
    //                 fontSize: 14,
    //                 padding: [0, 5, 0, 15]
    //             },
    //             unit: {
    //                 fontSize: 12
    //             }
    //         }
    //     },
    //     formatter: function(name) {
    //         let res = echartData.filter(v => v.name === name);
    //         res = res[0] || {};
    //         let unit = res.unit || '';
    //         return '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
    //     }
    //     // data: legendName
    // },
    series: [{
        type: 'pie',
        radius: ['20%', '30%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                borderColor: bgColor,
                borderWidth: 2,
                color: params => {
                    return {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: color[params.dataIndex].c2 // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: color[params.dataIndex].c1 // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            }
        },
        labelLine: {
            normal: {
                length: 20,
                lineStyle: {
                    width: 1
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}\n350件  15%'
                    );
                },
                color: 'black', //label的颜色
                lineHeight: '20',
                rich: {
                    icon: {
                        fontSize: 16,
                        color:'auto' //icon的颜色
                    },
                    name: {
                        fontSize: 14,
                        padding: [0, 10, 0, 4],
                        color: '#666666'  //那么的颜色
                    }
                }
            }
        },
    }]
};