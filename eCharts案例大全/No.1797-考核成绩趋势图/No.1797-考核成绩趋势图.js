var monthData = [];
var lineData = [];
for (var i = 1; i <= 12; i++) {
    monthData.push(i + '月');
    var lineNumber = Math.floor(Math.random() * 10000);
    lineData.push(lineNumber);
}

option = {
    backgroundColor: '#200069',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        top: '18%',
        left: '15%',
        right: '5%',
        bottom: '25%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                show: true, //隐藏X轴轴线
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
            },
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#502297'],
                    type: 'dashed',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#FFFFFF', //X轴文字颜色
                    fontSize: 12,
                },
                margin: 12,
                interval: 0,
            },
            axisTick: {
                show: false,
            },
            data: monthData,
        },
    ],
    yAxis: [
        {
            splitNumber: 6,
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#502297'],
                    type: 'dashed',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                },
            },
        },
    ],
    series: [
        {
            name: '成绩',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true,
            smooth: true,
            symbolSize: 8,
            lineStyle: {
                normal: {
                    color: '#FE7B00', // 线条颜色
                },
                borderColor: '#ffffff',
            },
            itemStyle: {
                color: '#ffffff',
                borderColor: '#FE7B00',
                borderWidth: 2,
            },

            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(125, 14, 255, 0.4)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(116, 0, 216, 0.1)',
                            },
                        ],
                        false
                    ),
                },
            },
            data: lineData,
        },
    ],
};
