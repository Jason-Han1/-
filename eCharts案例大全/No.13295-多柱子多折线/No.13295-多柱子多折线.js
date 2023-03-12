/**
 * 图标数据
 */
var data = {
    id: 'multipleBarsLines',
    title: '多柱子多折线',
    subTitle: '最近更新：07月18日',
    legendBar: ['正面占比', '中立占比', '负面占比'],
    symbol: '%', //数值是否带百分号        --默认为空 ''
    legendLine: ['折线一', '折线二'],
    xAxis: ['只想要你知道', '遥不可及的你', '只要平凡', '时间飞行', '对你太想念',
        '不找了', '闻窗一如初见', '关于春天的一切', '流程', '世界上另一个我'
    ],
    yAxis: [
        [8, 10, 10, 11, 4, 13, 6, 5, 9, 7],
        [10, 7, 8, 8, 7, 9, 8, 7, 3, 5],
        [6, 5, 4, 7, 9, 4, 5, 3, 7, 11]
    ],
    lines: [
        [10, 10, 9, 11, 7, 4, 13, 8, 2, 1],
        [6, 12, 12, 2, 4, 4, 10, 8, 13, 12]
    ],
    barColor: ['#3FA7DC', '#7091C4', '#5170A2'], //柱子颜色 必填参数
    lineColor: ['#638862', '#DA8084'], // 折线颜色

}
/////////////end/////////

var myData = (function test() {
    let yAxis = data.yAxis || []
    let lines = data.lines || []
    let legendBar = data.legendBar || []
    let legendLine = data.legendLine || []
    var symbol = data.symbol || ' '
    let seriesArr = []
    let legendArr = []
    yAxis && yAxis.forEach((item, index) => {
        legendArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index]
        })
        seriesArr.push({
            name: legendBar && legendBar.length > 0 && legendBar[index],
            type: 'bar',
            barGap: '0.5px',
            data: item,
            barWidth: data.barWidth || 12,
            label: {
                normal: {
                    show: true,
                    formatter: '{c}' + symbol,
                    position: 'top',
                    textStyle: {
                        color: '#414957',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        textAlign: 'left',
                        fontSize: 11,
                    },
                },
            },
            itemStyle: { //图形样式
                normal: {
                    barBorderRadius: 4,
                    color: data.barColor[index]
                },
            }
        })
    })

    lines && lines.forEach((item, index) => {
        legendArr.push({
            name: legendLine && legendLine.length > 0 && legendLine[index]
        })
        seriesArr.push({
            name: legendLine && legendLine.length > 0 && legendLine[index],
            type: 'line',
            data: item,
            itemStyle: {
                normal: {
                    color: data.lineColor[index],
                    lineStyle: {
                        width: 3,
                        type: 'solid',
                    }
                }
            },
            label: {
                normal: {
                    show: false, //折线上方label控制显示隐藏
                    position: 'top',
                }
            },
            symbol: 'circle',
            symbolSize: 10
        })
    })

    return {
        seriesArr,
        legendArr
    }
})()


option = {
    backgroundColor: '#fff',
    title: {
        show: true,
        text: data.title,
        subtext: data.subTitle,
        link: 'http://gallery.echartsjs.com/editor.html?c=xB1j9UgsXQ'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data == 'null' || i.data == null) {
                    str += i.seriesName + '：无数据' + '<br/>'
                } else {
                    str += i.seriesName + '：' + i.data + symbol + '%<br/>'
                }

            }
            return time + str;
        },
        axisPointer: {
            type: 'none'
        },
    },
    legend: {
        right: data.legendRight || '30%',
        top: 12,
        itemGap: 16,
        itemWidth: 10,
        itemHeight: 10,
        data: myData.legendArr,
        textStyle: {
            color: '#414957',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        x: 30,
        y: 80,
        x2: 30,
        y2: 60,
    },
    xAxis: {
        type: 'category',
        data: data.xAxis,
        axisTick: {
            show: false,
        },

        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
                lineHeight: 16,
                padding: [2, 2, 0, 2],
                height: 50,
                fontSize: 12,
            },
            rich: {
                Sunny: {
                    height: 50,
                    // width: 60,
                    padding: [0, 5, 0, 5],
                    align: 'center',
                },
            },
            formatter: function(params, index) {
                var newParamsName = "";
                var splitNumber = 5;
                var paramsNameNumber = params && params.length;
                if (paramsNameNumber && paramsNameNumber <= 4) {
                    splitNumber = 4;
                } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
                    splitNumber = 4;
                } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
                    splitNumber = 5;
                } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
                    splitNumber = 5;
                } else {
                    params = params && params.slice(0, 15);
                }

                var provideNumber = splitNumber; //一行显示几个字
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber) || 0;
                if (paramsNameNumber > provideNumber) {
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = "";
                        var start = p * provideNumber;
                        var end = start + provideNumber;
                        if (p == rowNumber - 1) {
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;
                    }

                } else {
                    newParamsName = params;
                }
                params = newParamsName
                return '{Sunny|' + params + '}';
            },
            color: '#687284',
        },

    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F1F3F5',
                type: 'solid'
            },
            interval: 2
        },
        splitNumber: 4,
    },
    series: myData.seriesArr
}