var getname =[1,2,11];
var getvalue =[4,5,6] ;


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


var max = Math.ceil((calMax([getvalue])) / 100) * 100;

var option = {
    grid: {
        top: 40,
        bottom: 40,
        left: 60,
        right: 20
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}年: {c0}千瓦时/亩',
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
        interval: max/5 ,//  平均分为5份
        splitNumber: 5,
        name: '用电量（千瓦时/亩）',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 110]
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
                color: 'rgba(209,209,209,0.5)',
            }
        }
    }],
    series: [{
        type: 'line',
        data: getvalue,
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
                        color: '#FFCA59' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF9500' // 100% 处的颜色
                    }],
                },
                shadowColor: 'rgba(255, 158, 16, 0.38)',
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
                        color: '#FFCA59' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF9500' // 100% 处的颜色
                    }],
                },
                borderWidth: 4
            },
        },
		markLine: {
            symbol:"none",
            data: [{

                silent: false,
                lineStyle: {
                    type: "solid",
                    color: "#FEC67C",
                },
                label: {
                    position: 'end',
                    formatter: "标准(10500)",
                    padding:[-30,0,0,-60],
					color: "#666",
					fontSize:12
                },
                yAxis: 10500

            }]
        },
		areaStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(254, 198, 124, .3)'
                    }, {
                        offset: 1,
                        color: 'rgba(254, 198, 124, 0)'
                    }],
                },
            },
        },
    }]
};
//return option;