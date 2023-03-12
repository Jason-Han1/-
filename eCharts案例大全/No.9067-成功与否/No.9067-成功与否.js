var scaleData = [{
        'name': '成功',
        'value': 100
    }, {
        'name': '不成功',
        'value': 30
    },



];
var rich = {
    blue: {
        color: "rgb(137, 192, 252)",
        padding: [10, 0],
        fontSize: 20,
        fontFamily: ""
    }
};
var placeHolderStyle = {
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
var data = [];
var color = ['rgb(50, 177, 108)', 'rgb(236, 105, 65)', ]
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 10,
                borderColor: color[i],
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
        type: 'pie',
        zlevel: 1,
        silent: true,
        radius: ['25%', '25%'],
        hoverAnimation: false,
        // animation:false,    //charts3 no
        label: {
            normal: {
                show: false
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: _pie1()
    },
    {
        type: 'pie',
        zlevel: 2,
        silent: true,
        radius: ['33%', '34%'],
        startAngle: -65,
        label: {
            normal: {
                show: false
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: _pie2()
    }, {
        name: '',
        type: 'pie',
        clockWise: false, //是否顺时针
        radius: [195, 200],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(1);
                        if (params.name !== '') {
                            return params.name + '\n{blue|' + percent + '%}';
                        } else {
                            return '';
                        }
                    },
                    rich: rich
                },
                labelLine: {
                    length: 50,
                    length2: 20,
                    show: true,
                    color: '#ccc',
                }
            }
        },
        data: data
    }
];
option = {
    backgroundColor: '#04243E',
    color: color,
    tooltip: {
        show: false
    },
    legend: {
        show: true,
        bottom: '10%',
        left: '10%',
        itemWidth: 10,
        itemHeight: 10,
        orient: "vertical",
        textStyle: {
            color: "#fff"
        },
        formatter: function(names) {
            console.log('lengend', names);
            var v = 0;
            for (var i = 0; i < scaleData.length; i++) {
                if (scaleData[i].name == names) {
                    v = scaleData[i].value;
                }
            }
            return "成功" + names + "个数 : " + v

        },
        data: ["1", "2"]
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}

function _pie1() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
        dataArr.push({
            name: (i + 1).toString(),
            value: 20,
            itemStyle: {
                normal: {
                    color: "rgba(0, 0, 0,0)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        })

    }
    return dataArr

}

function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 45,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 20,
                        borderColor: "rgba(14, 77, 135,1)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 8,
                itemStyle: {
                    normal: {
                        color: "rgba(0, 0, 0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}