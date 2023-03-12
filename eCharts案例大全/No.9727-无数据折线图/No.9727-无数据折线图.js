var time= [];
for (let i = 5; i >=0; i--) {
     time.push(GetDateStr(i));
 }
function GetDateStr(AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()-AddDayCount);//获取AddDayCount天后的日期
        var y = dd.getFullYear();
        var m = dd.getMonth()+1;//获取当前月份的日期
        var d = dd.getDate();
        return y+"/"+m+"/"+d;
    }
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['事件', '告警', '故障申报'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: function(param) {
                if (param.name == "事件") {
                    return "#00f0ff";
                } else if (param.name == "告警") {
                    return "#C0504D";
                } else if (param.name == "故障申报") {
                    return "#A8D24F";
                }
            }
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        top: '15%',
        bottom: '6%',
        containLabel: true
    },
    textStyle: {
        fontSize: '14',
        fontWeight: 'normal',
        color: '#ffffff'
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: 'rgba(53,153,196,0.6)',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fbc52c',
            fontSize: 12,
            padding: [0, 5, 0, 0]
        },
        data: time,
    },
    yAxis: {
        max:100,
        min:0,
        nameTextStyle: {
            color: '#fbc52c',
            fontSize: 12,
            padding: [0, 40, 10, 0]
        },
        show: true,
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(53,153,196,0.6)',
            }
        },
        axisLabel: {
            color: '#fbc52c',
            fontSize: 12,
            padding: [0, 5, 0, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: 'rgba(251, 197, 44, 0.3)',
            }
        }
    },
    series: [{
        name: '事件',
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: '#00f0ff',
                width: 3,
            }
        },
        itemStyle: {
            normal: {
                color: "#00f0ff",
                borderColor: 'rgba(0, 240, 255, 0.2)', //rgba(255, 199, 43, .3)
                borderWidth: 10,
                shadowColor: '#00f0ff',
                shadowBlur: 30,
            }
        },
           data: [],
        animationDuration: 3000
    }, {

        name: '故障申报',
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: '#A8D24F',
                width: 3,
            }
        },
        itemStyle: {
            normal: {
                color: "#A8D24F",
                borderColor: 'rgba(0, 240, 255, 0.2)', //rgba(255, 199, 43, .3)
                borderWidth: 10,
                shadowColor: '#A8D24F',
                shadowBlur: 30,
            }
        },
          data: [],
        animationDuration: 3000
    }, {

        name: '告警',
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: '#C0504D',
                width: 3,
            }
        },
        itemStyle: {
            normal: {
                color: "#C0504D",
                borderColor: 'rgba(0, 240, 255, 0.2)', //rgba(255, 199, 43, .3)
                borderWidth: 10,
                shadowColor: '#C0504D',
                shadowBlur: 30,
            }
        },
        data: [],
        animationDuration: 3000
    }],
};