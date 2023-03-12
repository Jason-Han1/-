var data = {
    id: 'multipleThree',
    title: 'x轴可点击多柱子',
    subTitle: '最近更新：07月17日',
    symbol: '%', //数值是否带百分号        --默认为空 ''
    yAxisLabel: true, //展示Y轴信息        --默认不展示 false
    seriesLabel: true, //柱子上方toplabel --默认展示 trur
    barWidth: 12, //柱子宽度               --默认12
    scale: false, //y轴是否自动            --默认不自动 false
    xWidth: 55, //x轴label                 --默认像素宽度70
    legendRight: '38%', //图例具右侧位置   --默认center居中
    ysplitLine: '#F1F3F5', //y轴横向分割线颜色 --默认#F1F3F5
    legendShow: true, //图例是否展示  --默认展示true
    action: true, //监听x轴（点击label）
    splitNum: [3, 3, 4, 6], //x轴label换行 --默认值 3 3 4 6  四个阶段 <=4 | 5-7| 8-9 |10-14
    legend: ['正面占比', '中立占比', '负面占比'], //必选参数
    xAxis: ['只想要你知道', '遥不可及的你', '只要平凡', '时间飞行', '对你太想念',
        '不找了', '可能否', '感觉自己是巨星', '逆流成河', '闻窗一如初见', '关于春天的一切', '流程', '世界上另一个我'
    ],
    yAxis: [
        // ['8.2%', '10%', '10%', '11%', '4%', '13%', '6%'],
        ['8.2', '10', '10', '11', '4', '13', '6.3', 7, 7, 8, 7, 0, 1],
        // ['8.2%', '2%', '10%', '11%', '4%', '13%', '6%']
        [10, 7, 8, 8, 7, 9, 8, 7, 7, 8, 7, 3, 5],
        // [6, 5, 4, 7, 9, 8, 5, 3, 4, 5, 3, 7, 11]
    ],
    color: ['#3FA7DC', '#7091C4', '#5170A2'] //柱子颜色 必填参数
}


var _this = this;
var action = data.action || false
//_this.activeId = action ? 0 : -1
var symbol = data.symbol || ' '
var splitNum = data.splitNum || [4, 4, 4, 6, 8, 10]
let xAxis = data.xAxis

// 保留一位小数，可选择性使用
function utilNumDecimal(x) {
    if (x == 0) return '0.0'
    if (!x) return '-'
    if (isNaN(x)) {
        return '--';
    }
    let f = Math.round(x * 10) / 10;
    let s = f.toString();
    let rs = s.indexOf('.');
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    while (s.length <= rs + 1) {
        s += '0';
    }
    return s;
}

var myData = (function test() {

    let yAxis = data.yAxis
    let legend = data.legend
    let seriesLabel = data.seriesLabel === false ? false : true
    let seriesArr = []
    let legendArr = []

    yAxis && yAxis.forEach((item, index) => {
        legendArr.push({
            name: legend[index]
        })

        var tempArr = [];
        let num = '';
        item.forEach((value, _) => {
            if (value || value === 0) {
                num = value
            } else {
                num = 'null';
            }
            tempArr.push(num);
        })

        seriesArr.push({
            name: legend[index],
            type: 'bar',
            barGap: .4,
            data: tempArr,
            barCategoryGap: '2%',
            barWidth: data.barWidth || 12,
            label: {
                normal: {
                    show: seriesLabel,
                    formatter: function(data) {
                        return utilNumDecimal(data.value)
                    },
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
                    color: data.color[index]
                },
            }
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
        link: 'http://music.163.com/#/user/home?id=323781690'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var time = '';
            var str = '';
            for (var i of params) {
                time = i.name.replace(/\n/g, '') + '<br/>';
                if (i.data == 'null' || i.data == null) {
                    str += '<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:' +
                        data.color[i.seriesIndex] + '"></span> ' + i.seriesName + '：无数据' + '<br/>'
                } else {
                    str += '<span style="height: 10px;width: 10px;display: inline-block;border-radius: 50%;background:' +
                        data.color[i.seriesIndex] + '"></span> ' + i.seriesName + '：' + i.data + symbol + '<br/>'
                }

            }
            return time + str;
        },
        axisPointer: {
            type: 'none'
        }
    },
    legend: {
        show: data.legendShow === false ? false : true,
        right: data.legendRight || 'center',
        top: 20,
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 10,
        borderRadius: 4,
        data: myData.legendArr,
        textStyle: {
            color: '#414957',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        x: 46,
        y: 80,
        x2: 30,
        y2: 54,
    },
    xAxis: {
        type: 'category',
        data: xAxis,
        axisTick: {
            show: false,
        },
        triggerEvent: action ? true : false,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
                color: '#687284',
                align: 'center',
                whiteSpace: 'wrap',
                lineHeight: 15,
                height: 50,
                fontSize: 10
            },
            rich: {
                active: {
                    height: 18,
                    width: data.xWidth || 70,
                    backgroundColor: '#f0f0f0',
                },
                normal: {
                    height: 18,
                    // width: data.xWidth||70,
                },
            },
            formatter: function(params, index) {
                var newParamsName = "";
                var splitNumber = 5;
                var paramsNameNumber = params && params.length;
                if (paramsNameNumber && paramsNameNumber <= 4) {
                    splitNumber = splitNum[0] || 4;
                } else if (paramsNameNumber >= 5 && paramsNameNumber <= 7) {
                    splitNumber = splitNum[1] || 4;
                } else if (paramsNameNumber >= 8 && paramsNameNumber <= 9) {
                    splitNumber = splitNum[2] || 4;
                } else if (paramsNameNumber >= 10 && paramsNameNumber <= 14) {
                    splitNumber = splitNum[3] || 5;
                } else if (paramsNameNumber >= 15 && paramsNameNumber <= 16) {
                    splitNumber = splitNum[4] || 6;
                } else if (paramsNameNumber >= 17 && paramsNameNumber <= 20) {
                    splitNumber = splitNum[5] || 6;
                } else {
                    params = params && params.slice(0, 21);
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

                let tag = 'normal'
                let arr = newParamsName.split('\n')
                let str = []
                switch (arr.length) {
                    case 3:
                        arr.forEach((item, index) => {
                            str.push('{' + tag + '|' + item + '}')
                        })
                        break;
                    case 2:
                        arr.forEach((item, index) => {
                            str.push('{' + tag + '|' + item + '}')
                        })
                        str.push('{' + tag + '|' + ' ' + '}')
                        break;
                    case 1:
                        arr.forEach((item, index) => {
                            str.push('{' + tag + '|' + item + '}')
                        })
                        str.push('{' + tag + '|' + ' ' + '}')
                        str.push('{' + tag + '|' + ' ' + '}')
                        break;
                    default:
                }
                return str.join('\n');
            },
            color: '#687284',
        },

    },
    yAxis: {
        scale: data.scale === true ? true : false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: data.yAxisLabel || false,
            textStyle: {
                color: '#687284'
            }
        },
        splitLine: {
            show: true,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: data.ysplitLine || '#F1F3F5',
                type: 'solid'
            },
        },
    },
    series: myData.seriesArr
};

myChart.on('click', params => {
    if (params.componentType == "xAxis") {
        let str = params.event.target.anid.split('_')[1]
        //_this.activeId = str
        myChart.setOption(option, true);
        //   this.$emit('xAction', params.value)//@TODO 去做该做的事
    }
})