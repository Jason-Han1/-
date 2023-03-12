var data = [{
    name: '专科',
    value: 1780
}, {
    name: '本科',
    value: 15358
}, {
    name: '研究生',
    value: 8006
}, {
    name: '博士',
    value: 15189
}]

var scale = 1;
var total = 0,
    legend = [];
data.forEach(function(item, i) {
    total += item.value
    legend.push(item.name)
})

var rich = {
    blue: {
        color: '#49dff0',
        fontSize: 12 * scale,
        align: 'center',
        padding: [0, 0, 5, 0]
    },
    circle: {
        backgroundColor: '#fff',
        width: 10,
        height: 10,
        borderRadius: 10
    }
}
var labelStyle = {
    normal: {
        show: true,
        color: '#3fdaff',
        fontSize: 12 * scale,
        formatter: function(params, ticket, callback) {
            return params.name + '\n{blue|' + params.percent + '%}'
        },
        rich: rich
    }
}
option = {
    backgroundColor: '#424956',
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'middle',
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 20,
        align: 'left',
        data: legend,
        formatter: function(name) {
            var val = ''
            data.forEach(function(item) {
                if(item.name == name) val = item.value
            })
            return '{name|'+ name +'}  {value|'+ val +'人}'
        },
        textStyle: {
            color: '#fff',
            rich: {
                name: {
                    fontSize: 12 * scale,
                    color: '#3fdaff',
                    width: 60
                },
                value: {
                    fontSize: 12 * scale,
                    color: '#ffc72b',
                    width: 50
                }
            }
        }
    },
    series: [{
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['27%', '34%'],
        clockwise:true,
        startAngle:270,
        hoverAnimation:false,
        color: ['#fc0752', 'rgba(40,207,255,0.5)'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: data[0].value,
            name: data[0].name,
            label: labelStyle,
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 20,
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }
        }, {
            value: total-data[0].value
        }]
    }, {
        type: 'pie',
        center: ['30%', '50%'],
        radius: ['39%', '46%'],
        clockwise:true,
        startAngle:90,
        hoverAnimation:false,
        color: ['#00a8ff', 'rgba(40,207,255,0.5)'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: data[1].value,
            name: data[1].name,
            label: labelStyle,
            labelLine: {
                normal: {
                    show: true,
                    length: 25,
                    length2: 15,
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }
        }, {
            value: total-data[1].value
        }]
    }, {
        type: 'pie',
        center: ['30%', '50%'],
        startAngle:270,
        clockwise:false,
        hoverAnimation:false,
        radius: ['51%', '58%'],
        color: ['#ffc72b', 'rgba(40,207,255,0.5)'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: data[2].value,
            name: data[2].name,
            label: labelStyle,
            labelLine: {
                normal: {
                    show: true,
                    length: 20,
                    length2: 10,
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }
        }, {
            value: total-data[2].value
        }]
    }, {
        type: 'pie',
        center: ['30%', '50%'],
        clockwise:false,
        startAngle: 90,
        hoverAnimation:false,
        radius: ['63%', '70%'],
        color: ['#00ffea', 'rgba(40,207,255,0.5)'],
        label: {
            normal: {
                show: false
            }
        },
        data: [{
            value: data[3].value,
            name: data[3].name,
            label: labelStyle,
            labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 10,
                    lineStyle: {
                        color: '#fff',
                    }
                }
            }
        }, {
            value: total-data[3].value
        }]
    }]
};