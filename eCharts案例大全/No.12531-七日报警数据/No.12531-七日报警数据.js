var Xnamelist = ['12月1日', '12月2日', '12月3日', '12月4日', '12月5日', '12月6日', '12月7日'];
var data1 = ['14', '23', '12', '21', '12', '34', '11'];
var data2 = ['1.1', '1.2', '1.5', '1.6', '2.2', '1.2', '1.1'];
var data3 = ['0.3', '0.4', '1', '1.2', '0.2', '0.2', '0.1'];
var data4 = ['0.3', '1.4', '0.2', '0.1', '1', '0.2', '0.2'];
var data5 = ['2.2', '0.1', '1', '0.3', '1.4', '1.2', '0.2'];
var tittlename = "综采支架工作阻力实时在线监测";
var XTypelist = ['报警'];
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
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: XTypelist,
        textStyle: {
            color: "white"
        }
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        //data: xData,
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
        name: '数量',
        type: 'value',
        minInterval: 1,

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
                show: true,
                lineStyle: {
                    color: '#0177d4'
                }
            },
    },
    series: [{
            name: XTypelist[0],
            type: 'line',
            smooth:true,
            barWidth: 25,
            itemStyle: lineStyle1,

             label: labelstyle1,
            data: data1
        }],

    
};