var getvalue = [
    [2306, 1936, 1320, 290, 222, 214],
    [1553, 998, 365, 290, 222, 214],
    [1936, 606, 566, 553, 420, 398],
    [566, 553, 420, 398, 365, 290],
    [2306, 1936, 1553, 1320, 998, 606],
    [998, 606, 553, 420, 398, 365]
];
var getxnxq=['2017-1', '2017-2', '2018-1','2018-2','2019-1','2019-2'];
var color1 = ['#49A7FF', '#FEB063', '#9796FF', '#FF9887', '#61D6A6', '#55D6F3'];
var color2 = ['#1A91FF', '#F1AE55', '#807FFF', '#FF6788', '#08C67C', '#2FD7D4'];
var getxlmc =['公必','公选','专必','专选','备选1','备选2'];
var series = [];
for (var i = 0; i < getxlmc.length; i++) {
    series.push({
        name: getxlmc[i],
        type: 'bar',
        data: getvalue[i],
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color1[i] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: color2[i] // 100% 处的颜色
                }], false),
                barBorderRadius: [3, 3, 0, 0],
            }
        },
    })
}

var option = {
    grid: {
        left: "45",
        right: "20",
        bottom: "80",
        top: "27",
    },

    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none'
        },
        formatter: '{a}<br />{b}: {c}<br />',
    },
    legend: {
        data: getxlmc,
        x: 'center',
        bottom: '15',
        textStyle: {
            color: "#666666",
            fontSize: 13
        },
        icon: 'roundRect',
        itemWidth: 15, // 设置宽度
        itemHeight: 15, // 设置高度
        itemGap: 30 // 设置间距
    },
    xAxis: [{
        data: getxnxq,
        axisLabel: {
            margin: 10,
            color: '#999',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#8E8E8E',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name: '人数',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, -8, 50]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#999',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#8E8E8E',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D8D8D8',
            }
        }
    }],
    animation: false,
    series: series
};