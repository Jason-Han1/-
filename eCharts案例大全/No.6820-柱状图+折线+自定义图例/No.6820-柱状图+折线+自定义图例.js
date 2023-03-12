var getname = ['财政经常性补助收入', '学费收入', '中央地方财政专项收入', '其他收入', '社会捐赠']; //数据点名称
var getvalue = [2301, 1935, 1535, 1303, 998]; //本校数据
var getvalue1 = [92, 88, 93.5, 94, 96]; //全国示范院校平均数
var seriescolor = ['#4B96F3', '#03C9AC'];
//计算最大值  
function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}


var max = Math.ceil(calMax([getvalue]) / 100) * 100;

option = {
    grid: {
        top: '50',
        right: '40',
        left: '60',
        bottom: '40'
    },
    tooltip: {
        trigger: 'axis',
        extraCssText: 'padding-left:8px;line-height:30px;width:210px;height:110px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
        axisPointer: {
            type: 'none'
        },
        textStyle: {
            fontSize: '14',
            color: '#666',
        },
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[0] + ';"></span>' + params[0].seriesName + '</span> : <span>' + params[0].value + '</br>';
            str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[1] + ';"></span>' + params[1].seriesName + '</span> : <span>' + params[1].value + '</br>';
            return str;
        }
    },
    legend: {
        data: [{
            name: '人数',
        }, {
            name: '比例',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB60lEQVQ4jX1TTU8TQRh+3rqNAYIxMeHjBxjDCTyogfZAExLQxIM3DwQPBv5AiQfxjATlx+gFRKUkxB7UaC8eDAdOhJZoYiSFsrvvPGZmd5bWVt/D7O7sPB/vxwhJ9IpLn18FQjMExgD1OL7zMO51rosg92VrSqBlGJ0D4n4xCqGekrol1I1ocqHakyBXey+gWQe1DMSSAgEaCGPQfkMpNM9BfRYWHjtgzjMReAlw2ZIKs71sFS8IPgXwosOB1CoFgdkDVRJFq6wYCQL3bIRNt+cdgUrAFMPCYjV1wDJJ8ayj+ct4d2MKhxP3cHjzPt6OlTCa77twJBAQy4mzWiUQ8BdpBrzCzvVbmB681lHcyu86Zr9tg5lD0wTMVetgGMCAtKn/DbZRujKC4XxfVhNALGbIpWDrQPSeh65gWzkhrgsNQJrewVF0jt2Tn104m0IjOktalBy2mOMcx6ftqL1p158/qKFy8qMN3MCj/WrmkcmyfV5cioPEjqzB4IF9sX+OohZmvlddG23B6mkbPViSfDfgB4njpU+OxFmzHUq06lEL9bB1oepDsBYWFz9kBGmsgFx1+DRJ225nKptEN6OrIFYyrq7L9HXzNow+EepdUPvFTp6JTwW6Cep6NLnwscPMv6/z60Co/7/OAP4A1ywO34B4JloAAAAASUVORK5CYII='
        }],
        type: "scroll",
        //icon: 'ret',
        height: '88%',
        right: '20',
        top: '10',
        itemGap: 25,
        itemWidth: 13,
        itemHeight: 13,
        textStyle: {
            fontSize: '13',
            color: '#666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#333333',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        //name: '单位：万元',
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        nameTextStyle: {
            color: '#333333',
            fontSize: 13
        },
        axisLabel: {
            color: '#333333',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
            }
        }
    }, {
        type: 'value',
        min: 0,
        max: 100, // 计算最大值
        interval: 20, //  平均分为5份
        splitNumber: 5,
        nameTextStyle: {
            color: '#333333',
            fontSize: 13
        },
        axisLabel: {
            color: '#333333',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
            }
        }
    }],
    animation: false,
    series: [{
        name: "人数",
        type: 'bar',
        data: getvalue,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5FBEFF'
                }, {
                    offset: 1,
                    color: '#589AFC'
                }], false),
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }, {
        name: "比例",
        type: 'line',
        data: getvalue1,
        symbol: 'circle',
        yAxisIndex: 1,
        symbolSize: 8,
        lineStyle: {
            normal: {
                width: 3,
                color: {
                    type: 'linear',
                    colorStops: [{
                        offset: 0,
                        color: '#00D0BF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#05C399' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(1,206,186,0.38)',
                shadowBlur: 6,
                shadowOffsetY: 8,
            }
        },
        itemStyle: {
            normal: {
                color: '#FFF',
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00D0BF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#05C399' // 100% 处的颜色
                }], false),
                borderWidth: 3
            },
        },
        smooth: true,
    }]
};