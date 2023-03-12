var uploadedDataURLblue = "/asset/get/s/data-1596261792887-rfxw9oPbZ.png";

var uploadedDataURLgreen = "/asset/get/s/data-1596261779112-YOj9zlVq0.png";

let data = [{
    name: '人工智能',
    value: 109,
    icon:uploadedDataURLgreen
}, {
    name: '智慧能源',
    value: 165,
    icon:uploadedDataURLblue
}, {
    name: '智能制造',
    value: 208,
     icon:uploadedDataURLblue
}, {
    name: '智慧医疗',
    value: 113,
    icon:uploadedDataURLgreen
}, {
    name: '智慧教育',
    value: 185,
    icon:uploadedDataURLblue
}, {
    name: '智慧城市',
    value: 198,
    icon:uploadedDataURLblue
}];


let titleArr = [],
    legendArr = [],
    seriesArr = [],
    total = 0,
colors = [
    ['#0b2a50', '#3da9b8', '#58d3bd', '#62e3bf'],
    ['#0b2a50', '#1265ce','#1987d2','#1c94d4'],
    ['#0b2a50', '#1265ce','#1987d2','#1c94d4'],
    ['#0b2a50', '#3da9b8', '#58d3bd', '#62e3bf'],
    ['#0b2a50', '#1265ce','#1987d2','#1c94d4'],
    ['#0b2a50', '#1265ce','#1987d2','#1c94d4']
]
for (let i = 0; i < data.length; i++) {
    total += data[i].value
}

for (let i = 0; i < data.length; i++) {

        if (i < 3) {

            titleArr.push({
                text: data[i].name,
                left: (i ) * 30 + 19  + '%',
                top: '39%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#a7d4e2',
                    textAlign: 'center',
                },
            });
            legendArr.push({
                left: (i ) * 30 + 30 + '%',
                top: '3%',
                itemWidth: 8,
                itemHeight: 12,

                data: [{
                    name: data[i].name,
                    icon: 'image://' +data[i].icon

                }],
                textStyle: {
                    fontSize: 12, //字体大小
                    color: 'transparent', //字体颜色
                },

            })
            seriesArr.push({
                name: data[i].name,
                type: 'pie',
                clockWise: true,
                center: [(i ) * 30 + 20 + '%', '20%'],
                radius: ['25%' , '35%'],
                itemStyle: {
                    normal: {

                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,

                data: [{
                    value: data[i].value,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: colors[i][1]
                            }, {
                                offset: 0.5,
                                color: colors[i][2]
                            },
                                {
                                    offset:1,
                                    color: colors[i][3]
                                }
                            ]),

                            shadowColor: colors[i][1],
                            shadowBlur: 0,

                        }
                    },
                    label: {
                        normal: {
                            formatter: function(params) {
                                return params.value;
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                fontFamily:'Verdana',
                                color: '#eefafb'
                            }
                        }
                    },
                }, {
                    value: total - data[i].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[i][0]
                        },
                        emphasis: {
                            color: colors[i][0]
                        }
                    }
                }]
            })

        } else {
            titleArr.push({
                text: data[i].name,
                left: (i - 3) * 30 + 19 + '%',
                top: '91%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#a7d4e2',
                    textAlign: 'center',
                },
            });
            legendArr.push({
                left: (i - 3) * 30 + 30 + '%',
                top: '50%',
                itemWidth: 8,
                itemHeight: 12,

                data: [{
                    name: data[i].name,
                    icon: 'image://' +data[i].icon

                }],
                textStyle: {
                    fontSize: 12, //字体大小
                    color: 'transparent', //字体颜色
                },

            })
            seriesArr.push({
                name: data[i].name,
                type: 'pie',
                clockWise: true,
                center: [(i - 3) * 30 + 20 + '%', '72%'],
                radius: ['25%', '35%'],

                itemStyle: {
                    normal: {

                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                    }
                },
                hoverAnimation: false,

                data: [{
                    value: data[i].value,
                    itemStyle: {
                        normal: {
                            color: colors[i][1],
                            shadowColor: colors[i][1],
                            shadowBlur: 0,

                        }
                    },
                    label: {
                        normal: {
                            formatter: function(params) {
                                return params.value;
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                color: '#eefafb'
                            }
                        }
                    },
                }, {
                    value: total - data[i].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: colors[i][0]
                        },
                        emphasis: {
                            color: colors[i][0]
                        }
                    }
                }]
            })
        }
    }


option = {
    backgroundColor: '#000f1e',
    title: titleArr,
    legend: legendArr,
    series: seriesArr
}