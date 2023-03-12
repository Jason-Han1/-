var getsrlb = ['体育部', '中法核工程与技术学院', '国际翻译学院', '数据科学与计算机学院（软件学院）', '岭南学院', '生命科学学院', '马克思主义学院', '法学院（知识产权学院、中英国际海事法学院）', '药学院', '逸仙学院', '大气科学实验', '电子与通信工程学院', '地理科学与规划学院', '传播与设计学院']; //数据点名称
var getsrje = [2306, 1936, 1553, 1320, 998, 606, 566, 553, 420, 398, 365, 290, 222, 214];

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
var max = Math.ceil(calMax([getsrje]) / 100) * 100;

option = {
    backgroundColor: '#fff',
    grid: {
        left: "30",
        right: "15",
        bottom: "35",
        top: "60",
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br>开课门数: ' + params[0].value + '门'
        }
    },
    xAxis: {
        type: 'category',
        data: getsrlb,
        axisLabel: {
            //interval: 0,
            formatter: function(value) {
                var ret = ""; //拼接加\n返回的类目项  
                var maxLength = 6; //每项显示文字个数  
                var valLength = value.length; //X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                if (rowN > 1) //如果类目项的文字大于6,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串  
                        var start = i * maxLength; //开始截取的位置  
                        var end = start + maxLength; //结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return '{a|' + ret + '}';
                } else {
                    return value;
                }
            },
            rich: {
                a: {
                    lineHeight: 18,
                    fontSize: 13
                }
            },
            margin: 10,
            color: '#999999',
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
    },
    yAxis: {
        name: '门数(门)',
        nameTextStyle: {
            color: '#666666',
            fontSize: 13,
            padding: [0, 0, 0, 50]
        },
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
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
    },
    dataZoom: [{
        show: true,
        height: 8,
        xAxisIndex: [0],
        bottom: 10,
        startValue: 0,
        endValue: 8,
        handleIcon: "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
        handleSize: "100%",
        handleStyle: {
            color: "#ADADAD",
            //shadowColor: "#B1B5B9",
            //shadowBlur: 5,
        },
        backgroundColor: "transparent",
        fillerColor: "#ADADAD",
        dataBackground: {
            lineStyle: {
                color: "transparent",
            },
            areaStyle: {
                color: "transparent",
            },
        },
        borderColor: "transparent",
    }],
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        data: getsrje,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(24,144,255, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(24,144,255, 0)'
                }], false),

            },
        },
        lineStyle: {
            normal: {
                width: 3,
                color: '#1890FF', // 线条颜色
                shadowColor: 'rgba(29,90,182,0.36)',
                shadowBlur: 10,
                shadowOffsetY: 10,

            },
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor: '#1890FF',
                borderWidth: 3,
            }
        },

    }]
};