var getXY = ['副教授','教授','讲师','研究员','工程师']; //数据点名称
var getRS = [26.43, 17.91, 12.3, 10.7, 8.55]; //学生满意度

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
var max = Math.ceil(calMax([getRS]) / 10) * 10;

option = {
    backgroundColor: '#000000',
    grid: {
        left: '150',
        right: '80',
        bottom: '30',
        top: '30',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return '项目投入<br/>' + params[0].name + ': ' + params[0].value + '%'
        }
    },
    xAxis: [{
        type: 'value',
        show:false,
        axisLabel: {
            margin: 5,
            color: '#666666',
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
                color: '#D1D1D1'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#333333'
            }
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
                color: '#FFFFFF',
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
            show:false,
            lineStyle: {
                color: '#333333'
            }
        },
        data: getXY
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            xAxisIndex: 0,
            label: {
                show: true,
                position: 'right',
                color: '#FFFFFF',
                fontSize: 14,
                offset: [10, 0],
                formatter:'{c}%'
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'transparent' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#ED11AC' // 100% 处的颜色
                    }], false),
                },
            },
            barWidth: 15,
            data: getRS
        }
    ]
};