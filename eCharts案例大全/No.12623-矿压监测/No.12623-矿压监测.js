var Xnamelist = ["架113", "架93", "架73", "架53", "架33", "架13"];
var data1 = ["29.10", "21.10", "40.10", "27.90", "26.30", "35.40"];
var data2 = ["30.50", "20.60", "28.40", "26.70", "28.20", "34.50"];
var tittlename = "综采支架工作阻力实时在线监测";
var Ytpye1 = "单位:Mpa";
var Ytpye2 = "";
var Ytpye3 = "";
var Ytpye4 = "";
var Xtpye = "";
var fontcolor = "#fff";
var maxValue = "38.5";
var maxName = "压力上限";
var minValue = "24";
var minName = "压力上限";
var color = ['#db8258', '#eda350', '#a6a34b', '#84aa6d', '#84abab']
var labelstyle1 = {
        show: true,
        position: 'top',
        textStyle: {
            color: '#fff',
        }
    };
    var lineStyle1 = {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#008cff'
            }, {
                offset: 1,
                color: '#005193'
            }]),
            opacity: 1,

        }
    };
var lineStyle2 = {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00da9c'
        }, {
            offset: 1,
            color: '#007a55'
        }]),
        opacity: 1,
    }
};
var lineStyle3 = {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#eda999'
        }, {
            offset: 1,
            color: '#a6a000'

        }]),
        opacity: 1,
    }
};
var lineStyle3 = {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#c4e300'
        }, {
            offset: 1,
            color: '#728400'
        }]),
        opacity: 1,
    }
};
var lineStyle4 = {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#eda000'
        }, {
            offset: 1,
            color: '#ce42d1'

        }]),
        opacity: 1,
    }
};



option = {

    title: {
        text: tittlename,
        x: "center",
        textStyle: {
            color: '#00FFFF',
            fontSize: 20,
        }
    },


    xAxis: {
        data: Xnamelist,
        axisLine: {
            lineStyle: {
                color: '#0177d4'
            }
        },
        axisLabel: {
            color: fontcolor,
            fontSize: 14
        }
    },
    yAxis: {
        name: Ytpye1,
        nameTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        axisLine: {
            lineStyle: {
                color: '#0177d4'
            }
        },
        axisLabel: {
            color: '#fff',
            fontSize: 16
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0177d4'
            }
        },
        interval: 10,
        max: 60

    },
    series: [{
            type: 'bar',
            barWidth: 25,
            itemStyle: lineStyle1,
            markLine: {
                lineStyle: {
                    color: 'red',
                },
                data: [{
                    yAxis: 24,
                    name: '压力下限'
                }]
            },
            label: labelstyle1,
            data: data1
        },
        {
            type: 'bar',
            barWidth: 25,
            itemStyle: lineStyle2,
            label: labelstyle1,
            markLine: {
                lineStyle: {
                    color: 'yellow',
                },
                data: [{
                    yAxis: 36,
                    name: '压力上限'
                }]
            },
            data: data2
        }, {
            type: 'bar',
            barWidth: 25,
            itemStyle: lineStyle3,
            label: labelstyle1,
            data: data1
        }

        , {
            type: 'bar',
            barWidth: 25,
            itemStyle: lineStyle4,
            label: labelstyle1,
            data: data1
        }

    ]
};