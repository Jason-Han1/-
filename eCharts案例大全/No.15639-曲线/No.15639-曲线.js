var uploadedDataURL = "/asset/get/s/data-1485156189964-SJUwyE7De.json";

function format(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
$.get(uploadedDataURL, function(data) {
    data = JSON.parse(data);
    myChart.setOption(option = {
        xAxis: {
            type: 'time',
            name: '时间',
            interval: 10 * 60 * 1000,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            nameTextStyle: {
                color: '#333'
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                },
                formatter: function(value) {
                    return format(new Date(value), 'hh:mm')
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            name: '心率',
            max: 200,
            min: 50,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            nameTextStyle: {
                color: '#333'
            },
            axisLabel: {
                textStyle: {
                    color: '#333'
                }
            },
            interval: 25,
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#e2e6a'

                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['#fbfbfb', '#fbfbfb']
                }
            }
        },
        visualMap: {
            show: false,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 126,
                color: '#32b6cf'
            }, {
                gt: 126,
                lte: 140,
                color: '#4b7cde'
            }, {
                gt: 140,
                lte: 153,
                color: '#118b43'
            }, {
                gt: 153,
                lte: 166,
                color: '#98cf44'
            }, {
                gt: 166,
                lte: 180,
                color: '#fea621'
            }, {
                gt: 180,
                lte: 205,
                color: '#f72c2e'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        legend: {
            show: false
        },
        series: [{
            name: '心率',
            type: 'line',
            hoverAnimation: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },
            markPoint: {
                symbol: 'image://http://res.takefit.cn/static/img/maxp.png',
                symbolOffset: [0, '-100%'],
                symbolSize: [40, 30],
                itemStyle: {
                    normal: {
                        color: '#eb426d'
                    }
                },
                data: [{
                    name: '最高心率',
                    type: 'max',
                    valueIndex: 1
                }]

            },
            data: data.map(function(item) {
                return {
                    name: item.value,
                    value: [item.time, item.value]
                }
            }),
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#c5c5e1' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#f9fafb' // 100% 处的颜色
                    }], false),
                    opacity: 0.4
                }
            }
        }],
        tooltip: {
            trigger: 'axis',
            formatter: function(p) {
                return format(new Date(p[0].value[0]), 'hh:mm:ss') + "<br/><span style='display: block;height: 10px;width: 10px;border-radius: 5px;background-color: " + p[0].color + ";'></span>心率 : " + p[0].name
            }
        }
    });
});