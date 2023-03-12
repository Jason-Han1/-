let xLabel = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

var lineData1 = []; //折线图数据
var lineData2 = []; //折线图数据
for (var i = 0; i < 12; i++) {
    var lineNumber1 = Math.floor(Math.random() * 1000);
    var lineNumber2 = Math.floor(Math.random() * 1000);
    lineData1.push(lineNumber1);
    lineData2.push(lineNumber2);
}
option = {
    backgroundColor: '#0e1c47',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
            label: {
                show: true,
            },
        },
    },
    legend: {
        show: true,
        align: 'left',
        right: '5%',
        top: '14%',
        type: 'plain',
        textStyle: {
            color: '#ffffff',
            fontSize: 16,
        },

        data: ['历年总成绩', '今年总成绩'],
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
                lineStyle: {
                    color: '#502297',
                    width: 1,
                    type: 'dashed',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#ffffff',
                    padding: 4,
                    fontSize: 12,
                },
                formatter: function (data) {
                    return data;
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
            axisTick: {
                show: false,
            },
            data: xLabel,
        },
    ],
    yAxis: [
        {
            name: '',
            splitNumber:8,
            nameTextStyle: {
                color: '#ffffff',
                fontSize: 16,
                padding: 10,
            },
            min: 0,
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#502297'],
                    type: 'dashed',
                },
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
                    padding: 16,
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '历年总成绩',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //显示所有图形。
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: '#ffffff',
                borderColor: '#FC5962',
                width: 2,
                shadowColor: '#0E9CFF',
                shadowBlur: 2,
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#FC5962', // 线条颜色
                },
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
                                color: 'rgba(252, 89, 98, 0.82)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(252, 89, 98, 0.2)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: lineData1,
        },
        {
            name: '今年总成绩',
            type: 'line',
            symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
            showAllSymbol: true, //显示所有图形。
            symbolSize: 8, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: '#ffffff',
                borderColor: '#FEC200',
                width: 2,
                shadowColor: '#0E9CFF',
                shadowBlur: 2,
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#FEC200', // 线条颜色
                },
                borderColor: 'rgba(0,0,0,.4)',
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
                                color: 'rgba(254, 194, 0, 0.82)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(254, 194, 0, 0.1)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: lineData2,
        },
    ],
};
