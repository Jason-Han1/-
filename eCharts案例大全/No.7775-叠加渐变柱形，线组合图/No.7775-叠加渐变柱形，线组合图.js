var datas = {
    company: "%",
    xdata: ['a', 'b', 'c', ],
    legend: ['1', '2', '3'],
    dataArr: [2.5, 2.1, 1.8],
    dataArr2: [8, 3.9, 6.5, ],
    dataArr3: [65,84, 102],
    total:30
}
var ydata = [];
var scale = 1;
// var color = 'rgba(0,254,255,';
var maxYdata = [];
for (var i = 0; i < datas.dataArr.length; i++) {
    var item = scale;
    ydata.push(item);
    maxYdata.push(100)
};
var normalColor = "rgba(255,255,255,.5)";
option = {
    backgroundColor: 'rgb(8,43,101)',
    title: {
        textStyle: {
            fontSize: 14
        }
    },
    legend: {
        show: true,
        // icon: "rect",
        // itemWidth: 20,
        // itemHeight: 3,
        right: "center",
        top: "5%",
        textStyle: {
            color: "#fff",
            fontSize: 16
        },
        data: datas.legend
    },
    tooltip: { // 提示框组件
        trigger: 'axis',
        show: true,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        padding:10,
        formatter: function(params) {
            console.log(params);
            return params[0].name + "<br/>" + datas.legend[0] + ":" + params[0].data +
                "<br/>" + datas.legend[1] + ":" + params[1].data +
                "<br/>" + datas.legend[2] + ":" + params[2].data + '%';
            // return params[0].name + "年" + params[0].data + datas.company;
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '10%',
        top: '15%',
        containLabel: true,
        show: false // 网格边框是否显示，上和右边框 
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            color: normalColor,
            fontSize: 16,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: normalColor,
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                type: "solid",
                color: normalColor
            }
        },
        data: datas.xdata
    }],
    yAxis: [{
        name: "单位:个",
        nameTextStyle: {
            fontSize: 16,
        },
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: normalColor,
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: normalColor,
            fontSize: 16,
            // margin: 25,
            formatter: '{value}'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "solid",
                color: normalColor
            }
        },
    }, {
        name: "单位:%",
         nameTextStyle: {
            fontSize: 16,
        },
        type: 'value',
        min: 0,
        max: 100,
        axisLine: {
            show: false,
            lineStyle: {
                color: normalColor,
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
             color: normalColor,
            fontSize: 16,
        },
        splitLine: {
            show: false,
        },
    }, ],

    series: [{
            name: '1',
            type: 'bar',
            yAxisIndex: 0,
            stack: '1',
            zlevel: 2,
            barGap: '50%',
            barWidth: '40%',
            barCategoryGap: "50%",
            color: normalColor,

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(59,243,100,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(12,94,38,.8)'
                    }]),
                    label: {
                        show: false,
                    }

                }
            },
            data: datas.dataArr
        },
        {
            name: '2',
            type: 'bar',
            yAxisIndex: 0,
            stack: '1',
            zlevel: 2,
            barGap: '50%',
            barWidth: '40%',
            barCategoryGap: "50%",
            color: normalColor,

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        // color: color +'.5)'
                        color: 'rgba(132,229,254,.8)'
                    }, {
                        offset: 1,
                        // color: 'rgba(25,94,122,0.8)'
                        color: 'rgba(24,142,225,1)'
                    }]),
                    label: {
                        show: false,
                    }

                }
            },
            data: datas.dataArr2
        },
        {
            name: '3',
            type: 'line',
            yAxisIndex: 1,
            zlevel: 2,
            symbol: 'none',
            lineStyle: {
                width: 3
            },
            itemStyle: {
                normal: {
                    color: 'rgba(218,234,6,1)',

                }
            },
            data: datas.dataArr3
        },
        {
            name: '',
            type: 'bar',
            barGap: '-100%',
            yAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: 'rgba(25,94,122,0)',
                    // borderWidth: 0,
                    // shadowBlur: {
                    //     shadowColor: 'rgba(61, 69, 79,0.31)',
                    //     shadowBlur: 10,
                    //     shadowOffsetX: 0,
                    //     shadowOffsetY: 2,
                    // },
                }
            },
            barWidth: '40%',
            data: maxYdata
        }
    ]
};