var yAxisdata = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var data = [3, 1, 4, 2, 7, 6, 8, 10, 4, 4, 8, 6];


//马卡龙配色
var colorList = ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
    '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
    '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
];

var bgColor = {
    type: 'radial',
    x: 0.5,
    y: 0.5,
    r: 0.7,
    colorStops: [{
        offset: 0,
        color: '#b6a2de' // 0% 处的颜色
    }, {
        offset: .4,
        color: '#9a7fd1' // 100% 处的颜色
    }, {
        offset: 1,
        color: '#59678c' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
};

option = {
    backgroundColor: bgColor,
    title: {
        text: '2018年阅读量统计',
        subtext: '全年总计{a|63}本\n平均每月读{a|5.2}本，每周{a|1.2}本\n最高一个月读{a|10}本',
        textStyle: {
            fontSize: 30,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },
        subtextStyle: {
            fontSize: 20,
            color: '#DDD',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
            rich: {
                a: {
                    color: 'red',
                    fontWeight: 'bold',
                    fontSize: 25,
                    textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
                },

            }
        },


    },
    tooltip: {
        trigger: 'axis'
    },

    grid: {
        top: '18%',
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    yAxis: [{
        type: 'category',
        data: yAxisdata,
        axisLabel: {
            fontSize: 30,
            color: '#FFF',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        }
    }],
    xAxis: [{
        type: 'value',
        axisLabel: {
            fontSize: 30,
            show: false
        }
    }],
    series: [{
        name: '阅读量',
        type: 'bar',
        data: data,
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.

                    return colorList[params.dataIndex]
                },
                shadowBlur: 10,
                shadowColor: '#aaa',
                shadowOffsetX: 2,
                shadowOffsetY: 2,

                label: {
                    fontSize: 30,
                    show: true,
                    position: 'insideLeft',
                    formatter: '{c}本',
                    textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
                }
            }
        }
    }]
};