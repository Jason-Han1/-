var wdData=[25.1,25.4,25.5,25.7,25.7,25.1,25.2,25.8,25.5,24.3];
    setInterval(function() {
        sub_wd = randomNum(245, 255)/10;

        wdData.shift();
        wdData.push(sub_wd);

        axisData = (new Date()).Format("m:s");

        option.xAxis[0].data.shift();
        option.xAxis[0].data.push(axisData);

        myChart.setOption(option);
    }, 2000)

function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
        default:
            return 0;
    }
}
Date.prototype.Format = function(fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

option = {
    backgroundColor: '#12243d',
    title: {
        text: '回风温度曲线',
        show: false,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#ff0066'
        },
        left: '2%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#1F5376'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['温度'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#ff0066'
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#1F5376'
            }
        },
        data: (function() {
            var now = new Date();
            var res = [];
            var len = 10; //显示个数
            while (len--) {
                //res.unshift(now.toLocaleTimeString().replace(/^\D*/, '').substring(0,5));
                //res.unshift(now.Format("yyyy-M-d h:m:s.S"));
                res.unshift(now.Format("m:s"));
                now = new Date(now - 2000);
            }
            return res;
        })(),
    }],
    yAxis: [{
        type: 'value',
        name: '',
        min: 24,
        max: 26,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#1F5376'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#1F5376'
            }
        }
    }],
    series: [{
        name: '温度',
        type: 'line',
        smooth: true,
        showSymbol: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 10,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 0, 102, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 0, 102, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                //#ff0066
                color: 'rgb(255, 0, 51)',
                borderColor: 'rgba(255, 0, 102, 0.2)',
                borderWidth: 12
            }
        },
        data: wdData //[220, 182, 191, 134, 150, 120, 110, 125, 145, 122]
    }, {
            name: '平行于x轴的趋势线',
            type: 'line',
            markLine: {
                data: [{
                    yAxis: 25.3
                }],
                lineStyle: {
                    normal: {
                        // color: colors[0]
                    }
                }
            }
        },  ]
};