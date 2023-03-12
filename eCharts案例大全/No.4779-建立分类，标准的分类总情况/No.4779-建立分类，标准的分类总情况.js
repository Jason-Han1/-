let color = ['#ff4343', '#f69846', '#f6d54a', '#45dbf7', '#f69846', '#44aff0', '#4777f5', '#5045f6', '#ad46f3', '#f845f1'];
let names = ["宝安区", "南山区", "龙华区", "福田区", "坪山区", "龙岗区"];
let data = [1114, 444, 501, 468, 478, 431]
let list = []
let total = 0
for (let i in data) {
    total += data[i]
}

let placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};

let rich = {
    white: {
        align: 'center',
        padding: [3, 0]
    }
};

for (let i in data) {
    list.push({
        value: data[i],
        name: names[i],
        itemStyle: {
            normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: color[i],
                shadowColor: color[i],
                color: color[i]
            }
        }
    }, {
        value: total / 30,
        name: '',
        itemStyle: placeHolderStyle
    })
}

let func = (params) => {
    let percent = ((params.value / total) * 100).toFixed(1)
    let name = params.name.replace(/\n/g, '')
    if (params.name !== '') {
        return name + '\n{white|' + percent + '%}'
    } else {
        return ''
    }
}



option = {
    backgroundColor: '#04243E',
    title: {
        show:true,
        text: '深圳企业标准各区参与情况',
        textStyle: {
                    color: '#ccc',
                    fontSize: 25
                },
                x: 'center',
                top: 20
    },
    tooltip: {
        show: false
    },
    legend: {
        orient: 'vertical',
        data: names,
        icon: 'circle',
        right: '5px',
        top: '10px',
        textStyle: {
            color: '#fff',
            fontSize: 20
        }
    },
    series: [{
            name: '',
            type: 'pie',
            clockWise: false,
            startAngle: '90',
            center: ['50%', '50%'],
            radius: ['50%', '51%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        formatter: func,
                        rich: rich
                    },
                    labelLine: {
                        length: 40,
                        length2: 100,
                        show: true,
                        color: '#00ffff'
                    }
                }
            },
            data: list,
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return idx * 50;
            }
        },
        {
            name: '',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '49%'],
            itemStyle: {
                color: 'transparant'
            },
            startAngle: '90',
            data: [{
                value: total,
                name: '',
                label: {
                    normal: {
                        show: true,
                        formatter: '{c|{c}} {b|条记录}',
                        rich: {
                            c: {
                                color: 'rgb(98,137,169)',
                                fontSize: 50,
                                fontWeight: 'bold',
                                lineHeight: 5
                            },
                            b: {
                                color: 'rgb(98,137,169)',
                                fontSize: 40,
                                lineHeight: 5
                            }
                        },
                        textStyle: {
                            fontSize: 20,
                            fontWeight: 'bold'
                        },
                        position: 'center'
                    }
                }
            }]
        }
    ]
};