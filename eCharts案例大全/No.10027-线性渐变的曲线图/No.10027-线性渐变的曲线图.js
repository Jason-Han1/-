option = {
    tooltip: {
        trigger: 'axis',
        position: function(pt) {
            return [pt[0], '10%'];
        }
    },
    grid: {
        left: '10%',
        top: '30%',
        right: '8%',
        bottom: '15%',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#c1f3ff'
            }
        },
        axisTick: {
            alignWithLabel: true,
        },
        data: (function() {
            var now = new Date(new Date().getTime());
            var x = [];
            var len = 5;
            while (len--) {
                x.unshift(formatDate(now, "MM-dd"));
                now = new Date(now - 60000 * 60 * 24)
            }
            return x
        })()
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                // color:'rgba(20,71,111,0.5)'
                color: '#c1f3ff'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(193,243,255,0.1)',
            }
        }
    },
    series: [{
        name: "报障量",
        data: [20, 32, 28, 36, 30],
        type: 'line',
        smooth: true,
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'rgb(0,181,248)' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'rgb(66,191,159)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        areaStyle: {},
    }]
};

function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds() //毫秒
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
}

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}