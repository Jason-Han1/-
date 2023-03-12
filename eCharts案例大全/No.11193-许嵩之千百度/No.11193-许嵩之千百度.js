var classData = [
    {name: '党团活动', value: 100},
    {name: '志愿活动', value: 60},
    {name: '社团活动', value: 80},
    {name: '公益劳动', value: 130},
    {name: '升旗仪式', value: 45},
    {name: '某某活动', value: 190},
    {name: '户外拓展', value: 66},
    {name: '辩论比赛', value: 160}
];
var colors = ['#E7E906', '#00c800', '#01ffff', '#c451ea', '#ff5252', '#0098ec'];
var total = 0; // 总计
var legendData = classData.map(function(item, i) {
    // 增加随机颜色, 防止固定给的颜色不够造成重复
    if (colors.length <= i) colors.push(getRandomColor());
    total += item.value;
    return item.name;
})
var i = 0;
var xAxisData = [];
var seriesData = [];
while (i < 4) {
    xAxisData.push(classData[i].name)
    seriesData.push(classData[i])
    i++
}

option = {
    backgroundColor: '#0e4b86',
    color: colors,
    title: [{
        text: '参加各类活动次数',
        top: '16%',
        right: '15%',
        textStyle: {
            fontSize: 16,
            color: '#fff'
        }
    }, {
        text: '专项活动累计时长',
        top: '47%',
        left: '15%',
        textStyle: {
            fontSize: 14,
            color: '#52FFFF'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: function(e) {
            return e.marker + e.name + '：' + e.value + ' 次';
        }
    },
    legend: [{
        type: 'scroll',
        orient: 'vertical',
        top: '20%',
        right: '18%',
        itemWidth: 14,
        itemHeight: 14,
        height: '25%',
        itemGap: 15,
        textStyle: {
            fontSize: 14,
            color: '#fff'
        },
        pageButtonItemGap: 10, // 按钮和页信息之间的间隔
        pageButtonGap: 10, // 控制块和图例项之间的间隔
        pageIconInactiveColor: 'orange', // 按钮未激活颜色
        pageIconColor: 'red', // 按钮颜色
        pageIconSize: [15, 30], // 翻页按钮的大小 [宽, 高]
        pageTextStyle: {
            color: '#fff',
            fontSize: 16
        },
        data: legendData
    }],
    grid: {
        left: '15%',
        right: '15%',
        bottom: '5%',
        height: '40%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false // X轴线不显示
        },
        axisTick: {
            show: false // 是否显示坐标轴刻度
        },
        data: xAxisData,
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: "#fff",
                fontSize: 12
            }
        }
    },
    yAxis: {
        splitNumber: 5, // 控制Y轴数值显示数量
        axisLine: {
            show: false // Y轴线不显示
        },
        axisTick: {
            show: false // 是否显示坐标轴刻度
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "orange", // 分割线背景色
                width: 1 // 分割线宽度
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize: 12
            }
        }
    },
    series: [{
        name: '饼图',
        type: 'pie',
        radius: ['21%', '35%'], // 大小缩放
        center: ['40%', '25%'], // 位置调整
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: classData,
        zlevel: 5
    }, {
        name: '设置总计的方式',
        type: 'pie',
        radius: ['21%', '35%'], // 大小缩放
        center: ['40%', '25%'], // 位置调整
        data: [{
            name: '总计',
            value: total,
            label: {
                normal: {
                    show: true,
                    formatter: '{title|总计}\n{total|' + total + '}',
                    lineHeight: 20,
                    rich: {
                        title: {
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold'
                        },
                        total: {
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }
                    },
                    position: "center"
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                opacity: 0
            },
            tooltip: {
                show: false
            }
        }]
    }, {
        name: '',
        type: 'bar', // 柱子的形状
        barWidth: 27, // 柱子的宽度
        itemStyle: { // 柱子圆角
            barBorderRadius: [5, 5, 0, 0],
            // 要用方法设置, 否则颜色只会渲染一个
            color: function(e) {
                return colors[e.dataIndex]
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function(e) {
                return e.marker + e.name + '：' + e.value + '小时';
            }
        },
        data: seriesData
    }]
};

// 随机生成颜色
function getRandomColor() {
    return '#' + (function(color) {
        return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) &&
            (color.length == 6) ? color : arguments.callee(color);
    })('');
}