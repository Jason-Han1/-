var getmydmc = ['外地开会', '出国开会', '市内会议', '校内会议', '外地讲学', '市外培训', '校内培训', '病假', '军训', '实习']; //数据点名称
var getmyd = [86, 90, 77, 63, 55, 25, 98, 65, 55, 66]; //学生满意度
var getmydzd = [];
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(10000)
}
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


var max = Math.ceil(calMax([getmyd]) / 10) * 10;

option = {
    grid: {
        left: '170',
        right: '75',
        bottom: '30',
        top: '30',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '申请原因分布<br>' + params[0].name + ': ' + params[0].value + '个'
        }
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            margin: 5,
            color: '#999',
            textStyle: {
                fontSize: '13'
            },
        },
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {

                color: '#D8D8D8'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }, {
        type: 'value',
        axisLabel: {
            show: false,
        },
        min: 0,
        max: max, // 计算最大值
        interval: max / 10, //  平均分为5份
        splitNumber: 10,
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#D8D8D8'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            textStyle: {
                color: '#999',
                fontSize: '13'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#8E8E8E'
            }
        },
        data: getmydmc
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 5, 5, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#1890FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#63B4FF' // 100% 处的颜色
                    }], false),
                },
            },
            barWidth: 15,
            data: getmyd
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 15,
            barGap: '-100%',
            xAxisIndex: 1,
            data: getmydzd,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(24,144,255,0.3)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(99,180,255,0.3)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [0, 5, 5, 0],
                }
            },
        },
    ]
};