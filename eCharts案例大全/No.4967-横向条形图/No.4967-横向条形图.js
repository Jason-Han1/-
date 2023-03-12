var getXY = ['学前教育系','初等教育系','语言文学系','音乐舞蹈系','经济管理系']; //数据点名称
var getRS = [255, 244, 233, 222, 211]; //学生满意度

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
            return '人均开课<br>' + params[0].name + ': ' + params[0].value + '个'
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
                color: '#6F84BD',
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
                color: '#6F84BD',
                fontSize: 14,
                offset: [10, 0]
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 10, 10, 10],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#6569FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#00C0F0' // 100% 处的颜色
                    }], false),
                },
            },
            barWidth: 15,
            data: getRS
        }
    ]
};