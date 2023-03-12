
let data = [{
    name: '创新能力',
    value: 109,
}, {
    name: '经营能力',
    value: 165,
}, {
    name: '信用水平',
    value: 208,
}, {
    name: '盈利能力',
    value: 113,
}, {
    name: '风险水平',
    value: 185,
}, {
    name: '行业特点',
    value: 198,
}];


let titleArr = [],
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
console.log(i)
            titleArr.push({
                text: data[i].name,
                left: (i ) * 30 + 19  + '%',
                top: '39%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#505D6F',
                    textAlign: 'center',
                },
            }); 
            seriesArr.push({
                name: data[i].name,
                type: 'pie',
                clockWise: true,
                center: [(i ) * 30 + 20 + '%', '20%'],
                radius: ['20%', '25%'],
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
                            color:'#8EA2B5'
                        }
                    },
                    label: {
                        normal: {
                            formatter: function(params) {
                                console.log(params)
                                return params.value;
                                
                            },
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold',
                                fontFamily:'Verdana',
                                color: '#505D6F'
                            }
                        }
                    },
                }, {
                    value: total - data[i].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color: '#EDF0F4'
                        },
                        emphasis: {
                            color:'#EDF0F4'
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
                    color: '#505D6F',
                    textAlign: 'center',
                },
            });
            seriesArr.push({
                name: data[i].name,
                type: 'pie',
                clockWise: true,
                center: [(i - 3) * 30 + 20 + '%', '72%'],
                radius: ['20%', '25%'],

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
                            color:'#3BC48B',
                            shadowColor:"#000",
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
                                color: '#505D6F'
                            }
                        }
                    },
                }, {
                    value: total - data[i].value,
                    name: 'invisible',
                    itemStyle: {
                        normal: {
                            color:'#EDF0F4'
                        },
                        emphasis: {
                            color:'#EDF0F4'
                        }
                    }
                }]
            })
        }
    }


option = {
    backgroundColor: '#fff',
    title: titleArr,
    series: seriesArr
}