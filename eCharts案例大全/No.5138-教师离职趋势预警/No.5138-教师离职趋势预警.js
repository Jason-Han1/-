var getname =  ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
var getvalue =[63,67,72,79,82,83,97,82,71,98];
var getbl = ['4','4','4','4','4','4','5','4','3','5'];
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


var max = Math.ceil(calMax([getvalue]) / 100) * 50;
var max1 = Math.ceil(calMax([getbl]) / 1) * 1;

var option = {
    grid: {
        top: 80,
        bottom: 40,
        left: 50,
        right: 50
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}年<br/>{a0}: {c0}人<br/>{a1}: {c1}%',
    },
    legend: {
        data: [{
            name: '离职人数',
        }, {
            name: '离职率',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACA0lEQVQ4T5WTT2uTQRDGnzFvoO8hiFgwhRbMIVfpQQWb9J9Uj/YTiKJS8Z7Wz1BTP4B3vXhSD6UkmFhovFiNInrx4KVI4kWrljTN7IzMvr7507QH97Kwu/PbmXmeIRy3qtUAIz/HgX1gP72D+Xk+6ikNHb5ZzxHJMglfBVxI4gB1LagrEXORZ27W+mN6AFXCu9IqQQpQR6RsgfAA8L9dFMJrnLt1H0RqoB7gbbkIkgKpAHFwF2CgCAhYRrrG+TvLPcDHl1Ng3Yp+NoADhJFOBoAIvh/seSh5gIBUVE9InqeWXkcZfKg8g7hFqF06jAVJPM5MYi416q83fzVx/UsNjYPfUVkqUOgLzi8tErYfJZHI7gISQhwIgkr2AuZSpwf6a5CFTxuI36hKi0OcJNSrZwH5aqlZBulEgG/nLvc1J+JYxya2n6LZ3gP5Pgg6LJkBAKniTCLxn4BuCS6Me1DNXsTs4RJ2m1j4vOF/9n2AtDojVoKteuU5INfi+saCAE8yk5hNjfpSXvkmbqHR/uMBVkKviQYYkjGSzNSw3xrtWMZIJUBUpTPNM/dqPSPVy0WoGclbN3rY3ftdKRb/kKdvFwadaFZ+X1ol6bdy5EoPE7a61QfnbqwMWzlWvb6eI3ErJO4KxIWRZH6YygR+wJeOG6bDY2nquFPj/jjxYwfn73aOGue/WuJU4CbFxoAAAAAASUVORK5CYII='
        }],
        type: "scroll",
        right: '15',
        top: '10',
        itemGap: 25,
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
            fontSize: '13',
            color: '#656565',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#656565',
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
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '单位：人',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 70]
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
            color: '#656565',
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
                color: 'rgba(209,209,209,.25)',
            }
        },
    }, {
        type: 'value',
        min: 0,
        max: max1, // 计算最大值
        interval: max1 / 5, //  平均分为5份
        splitNumber: 5,
        name: '离职率：%',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, -70]
        },
        axisLabel: {
            color: '#656565',
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
                color: 'rgba(209,209,209,.25)',
            }
        }
    }],
    series: [{
        name: "离职人数",
        type: 'bar',
        data: getvalue,
        barWidth: '25px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5CBFFF'
                }, {
                    offset: 1,
                    color: '#5997FF'
                }], false),
                barBorderRadius: [4, 4, 0, 0],
            }
        },
		markLine: {
            symbol:"none",
            data: [{
                silent: false,
                lineStyle: {
                    type: "solid",
                    color: "#FF4D4F",
					width:2
                },
                label: {
                    position: 'end',
                    formatter: "预警线",
                    padding:[-30,0,0,-50],
					color: "#FF4D4F",
					fontSize:13
                },
                yAxis: 90

            }]
		},
    },{
        name: "离职率",
        type: 'line',
        data: getbl,
        yAxisIndex:1,
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#00D0BF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#05C399' // 100% 处的颜色
                    }],
                },
                shadowColor: 'rgba(69, 218, 201, 0.38)',
                shadowBlur: 6,
                shadowOffsetY: 8,
            }
        },
        itemStyle: {
            normal: {
                color: '#FFF',
                borderColor: {
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#00D0BF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#05C399' // 100% 处的颜色
                    }],
                },
                borderWidth: 4
            },
        },
    }]
};