var getname = ['2017-1', '2017-2', '2018-1', '2018-2', '2019-1', '2019-2'];
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
        bottom: '100'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}<br/>{a0}: {c0}门<br/>{a1}: {c1}%',
    },
    legend: {
        data: [{
            name: '开课门数',
        }, {
            name: '开课占比',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5klEQVQ4jXWTvU9UQRTFf3d5Ccr6QSzWHhPtjJWFWmqiFAa35r9YtQAbLXAFtrEkMWqIHb0frULMmhAIFRhj7SYg4iKue2eumXlvfQ93ucWbN8k5Z879EjNjYCxPJaZaEaeY15Zcf6qDYP0CzYdXcK6G15vmdERUwekvc/oGrw0ZX1gZLLD6RDCdjWSnglcI5N6ZOjGce4zpA7n9MhJLBal5g7vxL9wz3Z5+OAQRxKYw5g47WJu7ivn36csOc4p4xYaOIeqw399zNy6c3jB3TSYWV5KoLtTEwgOZ6vBJGKsio+fS+84Wtv4cDrYJJhATLLqtiq3PJ+b9rpgv4xyYwvlJOD12uLg7m9jHRuYg4Pw+3o+GGpwVoRyzDNknJ/rJIc5cgOFTmcX4LQOVUj/y6Aj6aZ7yr8hB4BvGPlkx6LZh72u/yPYmdPawwExbEjitEhdrasLbvFnA5yX48aWQ/xa28SLqx9clQt9J9ZUmaS+pA3eCvyj+pw0bzyA5Dq6LHezG4qU8i703oZEP0qV7nzDqYSR6oJhm5yd02vlQZQYMqcvE4vJ/k8g0MJNVIm1KvOQjmRmcAQvYwiQWo/noMk7v4/SWeR0J25gt02uczsr4QrMIP3qdP0wn+G4ljrVqixsD1hn4CzNJF4RMLbJ7AAAAAElFTkSuQmCC'
        }],
        type: "scroll",
        //icon: 'ret',
        height: '88%',
        left: 'center',
        bottom: '30',
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
            color: '#656565',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#999999',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#8D8D8D',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '门数(门)',
        nameTextStyle: {
            color: '#656565',
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
            color: '#999999',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#8D8D8D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D7D7D7',
            }
        }
    }, {
        type: 'value',
        min: 0,
        max: 100, // 计算最大值
        interval: 20, //  平均分为5份
        splitNumber: 5,
        name: '占比(%)',
        nameTextStyle: {
            color: '#656565',
            fontSize: 13,
            padding: [0, 0, -8, -50]
        },
        axisLabel: {
            color: '#999999',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#8D8D8D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D7D7D7',
            }
        }
    }],
    animation: false,
    series: [{
        name: "开课门数",
        type: 'bar',
        data: getvalue,
        barWidth: '10px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#63B4FF'
                }, {
                    offset: 1,
                    color: '#178FFF'
                }], false),
                barBorderRadius: [3, 3, 0, 0],
            }
        },
    }, {
        name: "开课占比",
        type: 'line',
        data: getvalue1,
        symbol: 'circle',
        yAxisIndex: 1,
        symbolSize: 8,
        lineStyle: {
            normal: {
                width: 3,
                color: '#F7AF5B',
                shadowColor: 'rgba(247,175,91,0.17)',
                shadowBlur: 6,
                shadowOffsetY: 8,
            }
        },
        itemStyle: {
            normal: {
                color: '#FFF',
                borderColor: '#F7AF5B',
                borderWidth: 3
            },
        },
        //smooth: true,
    }]
};