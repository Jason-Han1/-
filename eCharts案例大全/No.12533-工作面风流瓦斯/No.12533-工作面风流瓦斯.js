var Xnamelist = ['12月1日', '12月2日', '12月3日', '12月4日', '12月5日', '12月6日', '12月7日'];
var data1 = ['3803', '3703', '3303', '3663', '3503', '3903', '3403'];
var data2 = ['1.1','1.2','1.5','1.6','2.2','1.2','1.1'];
var data3 = ['0.3', '0.4', '1', '1.2', '0.2', '0.2', '0.1'];
var data4 = ['0.3', '1.4', '0.2', '0.1', '1', '0.2', '0.2'];
var data5 = ['2.2', '0.1', '1', '0.3', '1.4', '1.2', '0.2'];
var tittlename = "综采支架工作阻力实时在线监测";
var XTypelist = ['工作面日产量', '工作面回风大巷风速', '工作面风流瓦斯', '工作面回风流瓦斯', '工作面回风隅角瓦斯','工作面回风隅角瓦斯'];
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


 legend: {
        data: XTypelist,
        textStyle: {
            color: "white"
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
    yAxis: [{
            type: 'value',
            name: '产量t/日',
            min: 0,
            max: 8000,
            interval: 2000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: color[3]
                }
            },
            axisLabel: {
                color: 'white',
                formatter: '{value}'
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#0177d4'
                }
            },
        },
        {
            type: 'value',
            name: '风速m/s',
            min: 0,
            max: 3,
            interval: 0.5,
            position: 'right',
           
            axisLine: {
                lineStyle: {
                    color: color[1]
                }
            },
            axisLabel: {
                formatter: '{value}',
                color: 'white',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#0177d4'
                }
            },
        },
        {
            type: 'value',
            name: '瓦斯°C',
            min: -3,
            max: 3,
            interval: 1,
            position: 'right',
             offset: 80,
            axisLine: {
                lineStyle: {
                    color: color[2]
                }
            },
            axisLabel: {
                color: 'white',
                formatter: '{value}'
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#0177d4'
                }
            },
        }
    ],
    series: [{
            name: XTypelist[0],
            type: 'bar',
            barWidth: 25,
            itemStyle: lineStyle1,

             label: labelstyle1,
            data: data1
        },
        {
            name: XTypelist[1],
            type: 'line',
            yAxisIndex: 1,
            data: data2,
            smooth:true,
             label: labelstyle1,
             itemStyle: lineStyle2,
        }, {
            name: XTypelist[2],
            type: 'line',
            barWidth: 25,
            yAxisIndex: 2,
            smooth:true,
             label: labelstyle1,
             itemStyle: lineStyle3,
            data: data3
        }

        , {
            name: XTypelist[3],
            type: 'line',
            barWidth: 25,
            smooth:true,
            itemStyle: lineStyle4,
             label: labelstyle1,
            yAxisIndex: 2,
            data: data4
        }, {
            name: XTypelist[4],
            type: 'line',
            smooth:true,
            barWidth: 25,
            yAxisIndex: 2,
             label: labelstyle1,
            itemStyle: {
    normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#178cff'
        }, {
            offset: 1,
            color: '#605193'
        }]),
        opacity: 1,

    }
},
            data: data5
        }
    ]
};