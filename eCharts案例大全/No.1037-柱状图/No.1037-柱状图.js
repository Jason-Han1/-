option = {
    backgroundColor: '#00000000',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '12%',
        right: '0%',
        left: '6%',
        bottom: '6%'
    },
    xAxis: [{
        type: 'category',
        data: ['1-3年', '2017年', '3-5年', '5-8年', '8年以上'],
        axisLine: {
            lineStyle: {
                color: '#BAE7FF'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [
        {
        name: '资产数量',
        nameTextStyle: {
            color: "#e2e9ff",
            fontSize: 14,
            padding: 20
        },
            
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(0,186,255,.6)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        }
    }],
    series: [{
        type: 'line',
        data: [22, 26, 33, 45, 66],
        barWidth: '28px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
            }
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
        label: {
            normal: {
                show: true,
                lineHeight: 30,
                formatter: '{c}',
                position: 'top',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 20
                }

            }
        }
    }]
};