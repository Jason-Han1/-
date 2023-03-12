$(function() {
    var i = 1;
    //1s模拟1min
    var timer = setInterval(function() {
        i++;
        refreshEcharts(i);
        if (i > 241) clearInterval(timer);
    }, 1000)

})



function refreshEcharts(data) {
    var data0 = 2000,
        data1 = [],
        data2 = [],
        minY,
        maxY,
        weekday = ['日', '一', '二', '三', '四', '五', ''];

    //生成横坐标时间轴
    var beforenoon = autoTimeline('9:30', '11:30');
    var afternoon = autoTimeline('13:00', '15:00');
    beforenoon.splice(beforenoon.length - 1, 1);
    afternoon[0] = '11:30/13:00';
    var timeline = beforenoon.concat(afternoon);

    //模拟数据传入
    for (var i = 0; i < 241; i++) {
        var x = Math.floor(Math.random() * 200);
        data1.push(2100 - x);
    }
    minY = ((Math.min.apply(Math, data1) - data0) / data0 * 100).toFixed(2);
    maxY = ((Math.max.apply(Math, data1) - data0) / data0 * 100).toFixed(2);
    for (var i = 0; i < 241; i++) {
        var x = Math.floor(Math.random() * 100);
        data2.push(2050 - x);
    }

    //图表初始化
   
     myChart.setOption(option = {
        title: {
            text: '股票分时刷新图',
        },
        dataZoom: [{
            type: 'inside'
        }],
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                var today = new Date();
                todays = today.getFullYear() + '/' + ((today.getMonth() + 1) < 10 ? '0' +
                    (today.getMonth() + 1) : (today.getMonth() + 1)) + '/' + (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());
                //鼠标指向为空时显示为空
                var res = params[0].name && params[0].name.length > 0 ?
                    '<span >' +
                    option.title.text + '<br />' + todays + '/' + weekday[today.getDay()] + ' ' + params[0].name + '<br />' +
                    params[0].seriesName + ': <span style="color:' + setColor((params[0].data - data0)) + '">' + params[0].data.toFixed(2) + '</span><br />' +
                    params[1].seriesName + ': <span style="color:red">' + params[1].data.toFixed(2) + '</span><br />' +
                    '涨跌: <span style="color:' + setColor((params[0].data - data0)) + '">' + (params[0].data - data0).toFixed(2) + '(' + ((params[0].data - data0) / data0 * 100).toFixed(2) + '%)</span>' +
                    '</span>' :
                    '';

                function setColor(data) {
                    return data > 0 ? '#FF0000' : '#00FF00';
                }
                return res;
            }
        },

        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
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
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                interval: 59,
            },
            data: timeline,

        }],
        yAxis: [{
            type: 'value',
            scale: true,
            min: 'dataMin',
            max: 'dataMax',

            axisLabel: {
                formatter: function(val) {
                    return val.toFixed(2);
                },
                textStyle: {
                    color: function(val) {
                        //设置坐标轴刻度颜色(大于1000的数需要去除'，')
                        return val.split(',').join('') < data0 ? 'green' : 'red';
                    }
                }
            },
        }, {
            type: 'value',
            scale: true,
            min: minY,
            max: maxY,

            axisLabel: {
                formatter: function(val) {
                    return val + '%';
                },
                textStyle: {
                    color: function(val) {
                        return val.split(',').join('') < 0 ? 'green' : 'red';
                    }
                }
            },

        }],

        // visualMap: {
        //     show: false,
        //     pieces: [{
        //         gt: 0,
        //         lte: data0,
        //         color: 'green'
        //     }, {
        //         gt: data0,
        //         color: 'red'
        //     }]
        // },
        series: [{
            name: '价格',
            itemStyle: {
                normal: {
                    color: 'blue',
                }
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            animation: false,
            smooth: true,
            type: 'line',
            data: data1,
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }, {
                    type: 'min',
                    name: '最小值'
                }]
            },
            markLine: {
                silent: true,
                label: {
                    normal: {
                        position: 'start'
                    }
                },
                data: [{
                    yAxis: data0.toFixed(2)
                }]
            }
        }, {
            name: '均值',
            itemStyle: {
                normal: {
                    color: 'black',
                }
            },
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            animation: false,
            smooth: true,
            type: 'line',
            data: data2,

        }]
    });


}


function autoTimeline(start, end) {
    var timeline = [],
        startHour = start.split(':')[0] * 1,
        startMin = start.split(':')[1] * 1,
        endHour = end.split(':')[0] * 1,
        endMin = end.split(':')[1] * 1;
    for (var i = startHour; i <= endHour; i++) {
        var start = (i == startHour) ? startMin : '0';
        var end = (i == endHour) ? endMin : '59';
        for (var j = start; j <= end; j++) {
            j = (j < 10) ? '0' + j : j;
            timeline.push(i + ":" + j);
        }
    }
    return timeline;
}