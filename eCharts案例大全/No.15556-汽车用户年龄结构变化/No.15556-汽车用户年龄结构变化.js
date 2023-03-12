
var markLineOpt = {
    animation: true,
    label: {
        normal: {
            formatter: '35%',
            textStyle: {
                align: 'right',
                color:'#ffffff'
            }
        }
    },
    lineStyle: {
        normal: {
            color:'#c1232b',
            type: 'solid',
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 5
        }
    },
    data: [[{
        coord: ['2013年', 26],
        symbol: 'none'
    }, {
        coord: ['2014年', 35],
        symbol: 'none'
    }]]
};
var markLineOpt2 = {
    animation: true,
    label: {
        normal: {
            formatter: '36%',
            textStyle: {
                align: 'right',
                color:'#ffffff'
            }
        }
    },
    lineStyle: {
        normal: {
            color:'#c1232b',
            type: 'solid',
            width: 3,
            shadowColor: 'rgba(0,0,0,0.4)',
            shadowBlur: 10,
            shadowOffsetY: 5
        }
    },
    data: [[{
        coord: ['2014年', 35],
        symbol: 'none'
    }, {
        coord: ['2015年', 36],
        symbol: 'none'
    }]]
};

option = {
    legend: {
        data: ['25岁以下', '26-30岁', '31-35岁', '36-40岁', '41-45岁', '45岁以上'],
       
    },
    // brush: {
    //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    //     xAxisIndex: 0
    // },
    xAxis: {
        data: ['2013年','2014年','2015年'],
        name: '年度',
        //silent: false,
        //axisLine: {onZero: true},
        //splitLine: {show: false},
        //splitArea: {show: false}
    },
    yAxis: {
        //inverse: true,
        max:100,
        splitArea: {show: false}
    },
    series: [
        {
            name: '25岁以下',
            type: 'bar',
            stack: 'one',
            //itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    formatter: '{c} %'
                }
            },
            data: [6,14,13],
            markLine: markLineOpt
        },
        {
            name: '26-30岁',
            type: 'bar',
            stack: 'one',
            //itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    formatter: '{c} %'
                }
            },
            data: [20,21,23],
            markLine: markLineOpt2
        },
        {
            name: '31-35岁',
            type: 'bar',
            stack: 'one',
            //itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    formatter: '{c} %'
                }
            },
            data: [20,20,18]
        },
        {
            name: '36-40岁',
            type: 'bar',
            stack: 'one',
            //itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    formatter: '{c} %'
                }
            },
            data: [17,15,15]
        },
        {
            name: '41-45岁',
            type: 'bar',
            stack: 'one',
            //itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    formatter: '{c} %'
                }
            },
            data: [16,14,14]
        },
        
        {
            name: '45岁以上',
            type: 'bar',
            stack: 'one',
            //itemStyle: itemStyle,
            label: {
                normal: {
                    show: true,
                    formatter: '{c} %'
                }
            },
            data: [21,16,17]
        }
    ]
};