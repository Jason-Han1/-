option = {
    backgroundColor: "#fff",
    tooltip: {},
    grid: {
        top: '8%',
        left: '1%',
        right: '1%',
        bottom: '8%',
        containLabel: true,
    },
    legend: {
        itemGap: 50,
        data: ['注册总量' ,'最新注册量'],
        textStyle: {
            color: '#333',
            borderColor: '#333'
        },
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: '#333'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#333',
                margin: 15,
            },
        },
        axisTick: {
            show: false,
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', ],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 7,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#333',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        // smooth: true, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: "#FF8C37", // 线条颜色
            }
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#333',
            }
        },
        tooltip: {
            show: false
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,140,55,1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(255,140,55,0)'
                    }
                ], false),
                shadowColor: 'rgba(255,140,55,0.6)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [393, 438, 485, 631, 689, 824, 987]
    }, {
        name: '最新注册量',
        type: 'bar',
        barWidth: 20,
        tooltip: {
            show: false
        },
         label: {
            show: true,
            position: 'top',
            textStyle: {
                color: '#333',
            }
        },
        itemStyle: {
            normal: {
                color: '#3BAFFF'
            }
        },
        data: [200, 382, 102, 267, 186, 315, 316]
    }]
};