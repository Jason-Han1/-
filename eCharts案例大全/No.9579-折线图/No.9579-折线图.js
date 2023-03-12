option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#62aef6'
            },
        },

    },
    grid: {
        top: '18%',
        left: '10%',
        right: '1%',
        bottom: '25%'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                margin: 15,
            },
        },
        axisTick: {
            show: false,
        },
        data: ['2014', '2015', '2016', '2017', '2018', '2019'],
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        symbol:'none',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: false,
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: "#62aef6", // 线条颜色
            },
            borderColor: '#62aef6'
        },
        label: {
            show: false,
            position: 'top',
            textStyle: {
                color: '#fff',
            }
        },
        itemStyle: {
            normal: {
                color: "rgba(255,255,255,1)",
            }
        },
        tooltip: {
            show:true,
            backgroundColor:'white'
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,150,239,0.3)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,253,252,0)'
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: [150, 200, 259, 360, 378, 450]
    }]
};