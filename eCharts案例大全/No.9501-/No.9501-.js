option = {
    backgroundColor: '#06317C',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255,255,255,0)' // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: 'rgba(255,255,255,1)' // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255,255,255,0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
        },

    },
    grid: {
        top: '18%',
        left: '10%',
        right: '1%',
        bottom: '6%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.4)'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#d1e6eb',
                margin: 15,
                fontSize:16
            },
        },
        axisTick: {
            show: true,
        },
        data: ['瑞泉', '积成', '深仪兆业', '浙江华立'],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ccc'
                }
                  
        },
         axisLabel:{
            color:'#fff',
            textStyle:{
                fontSize:16
            }
        },
        axisTick: {
            show: true,
        },
    }],
    series: [{
        name: '注册总量',
        type: 'line',
         min:0,
         max:100,
         data: [78, 95, 67, 85],
        // smooth: true, //是否平滑曲线显示
        // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: "#53fdfe", // 线条颜色
            },
            borderColor: '#f0f'
        },
        label: {
            show: true,
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
            show: true
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
       
    }]
};