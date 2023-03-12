//在yourdata中填入数据，赤字增加为正数，赤字减少为负数
function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
var rowdata1=[0.78, 0.29, 0.35, 0.65, 0.92, 0.9 , 0.96, 1.02, 1.63, 2.57, 3.76,3.69, 4.26, 5.04, 6.19, 7.21, 7.71, 7.19, 7.23, 3.95, 5.13, 5.8 ,5.66, 4.92, 4.75, 5.24, 5.21]
var newdata1=[]
for (var i = 0; i < rowdata1.length; i++){
    newdata1.push(rowdata1[i]*100)
}
var rowdata = [-0.81, -0.31, -0.39, -0.7, -0.99, -0.96, -1.04, -1.08, -1.66, -2.59, -3.73, -3.62, -4.19, -4.94, -6.1, -7.14, -7.62, -7.05, -7.09, -3.84, -4.95, -5.49, -5.37, -4.62, -4.9, -5, -5.05];
var newdata = [80.1]
for (var i = 1; i < rowdata.length; i++) {
    newdata.push(precisionRound(100*rowdata[i - 1] - 100*rowdata[i], 2))
}
var yourdata = newdata
// var yourdata = [764, 66, 238, -59, -303, 563, -482, 178, 835, -81, 833, 49, 732, 432, -444, 214, 158, -712, -249, -302, -386, 697, -446, 592, -277, -879, -383, 31, -412, -72, 962, -513, 580, -373, 292, -105, -282, 767, -993, 33, 218];
//在xaxisdata中填入x轴的数据
var xaxisdata = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
var timeinterval = 200

function maxsum(data) {
    var x = 0;
    var list = []
    for (var i = 0; i < data.length; i++) {
        x = x + data[i];
        list.push(x)
    };
    return Math.max.apply(null, list)
}

function getymax() {
    var data = maxsum(yourdata)
    var length = Math.floor(Math.log10(data)) - 1
    var yaxismax = Math.ceil(data / Math.pow(10, length)) * Math.pow(10, length)
    return yaxismax

}
var ymax = 800
var updata = [];
var downdata = [];
var auxdata = [];
var sum = 0
for (var i = 0; i < yourdata.length; i++) {
    auxdata.push(sum)
    if (yourdata[i] > 0) {
        updata.push(yourdata[i])
        downdata.push('-')
    } else {
        updata.push('-')
        downdata.push(Math.abs(yourdata[i]))
    }
    sum = sum + yourdata[i]
};
auxdata.slice(0, yourdata.length - 1)

option = {
    title: {
        text: '美国经常账户赤字变化情况',
                textStyle: {
            fontSize: 18,
            color: '#F1F1F3'
        }
        // subtext: '修改自官网by小白高'
    },
    backgroundColor: '#394056',
    toolbox: {
        feature: {
            // magicType: {
            //     type: ['line','bar']
            // },
            saveAsImage: {
                show: true,
                pixelRatio:5
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[2];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['赤字减少', '赤字增加', '储蓄缺口'],
        left: 400,
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    // grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    // },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel:{
            interval:0,
            rotate:45,
        },
        splitLine: {
            show: false
        },
        data: xaxisdata
    },
    yAxis: [{
            splitLine: {
                show: false
            },
            axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
            type: 'value',
            max: ymax,
            name: '十亿美元',
        },
        {
            type: 'value',
            max: ymax,
            inverse: true,
            show: false
        },
        
    ],
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            // data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292],
            data: auxdata,
        },

        {
            name: '赤字增加',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle:{
                normal:{
                    color:'rgb(219,50,51)'
                }
            },
            data: updata,
            animationDelay: function(idx) {
                return idx * timeinterval;
            }

        },
        {
            name: '赤字减少',
            type: 'bar',
            yAxisIndex: 1,
            stack: '总量',
            itemStyle: {
                color: "green"
            },
            label: {
                normal: {
                    show: true,
                    position: 'bottom'
                }
            },
                       itemStyle:{
                normal:{
                    color:'rgb(137,189,27)'
                }
            },
            data: downdata,
            // z:2,
            // zlevel:2,
            animationDelay: function(idx) {
                return idx * timeinterval;
            }
        },
        // {
        //     name: '储蓄率（左轴）',
        //     type: 'line',
        //     stack: '总量',
        //     smooth: true,
        //     yAxisIndex:2,
        //     animationDelay: function(idx) {
        //         return idx * timeinterval;
        //     },
        //     data: [18.77, 18.84, 17.71, 17.06, 17.85, 18.73, 19.6, 20.79, 21.34, 20.91, 20.77, 19.63, 18.3, 17.47, 17.66, 18.04, 19.31, 17.51, 15.67, 14.57, 15.32, 15.95, 17.98, 18.54, 19.58, 19.44, 18.09],
        // },
        {
            name: '储蓄缺口',
            type: 'line',
            // markArea: {
            //     zlevel:3,
            //     data: [[{
            //         name: '中层',
            //         xAxis: 2000,
            //     }, {
            //         xAxis: 2016,
            //     }]]
            // },
            smooth: true,
            // stack: '总量',
            // yAxisIndex: 2,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.5)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0.05)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data:newdata1 ,
        // zlevel:3,
        // z:3
        },
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function(idx) {
        return idx * 10;
    }
};