var data = [90, 95, 100, 120, 100, 122, 98, 115, 100, 98];
option = {
    backgroundColor: "#FFF",
    color: ['#ffffff'],
    tooltip: {},
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F4F4F4'
            }
        },
        axisTick: {
            show: false,
        },
        data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7', '6.8', '6.9', '6.10'],
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F4F4F4'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false
        },
    }],
    series: [{
        name: '异常流量',
        type: 'line',
        smooth: true, //是否平滑曲线显示
        symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
        showSymbol: true,
        symbolSize:8,
        lineStyle: {
            normal: {
                width: 3,
                color: "#727EF8" // 线条颜色
            }
        },
        label: {
            show: true,
            position: 'top',
            textStyle: {
                color: 'rgba(94, 182, 249, 1.00)',
                fontSize: 14,
                fontWeight: 'bold'
            },
            formatter: function(params) {
              if (data[params.dataIndex -1] < params.data && data[params.dataIndex +1] < params.data) {
                  return params.data;
              } else {
                  return '';
              }
            }
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(61,234,255, 0.9)'
                    },
                    {
                        offset: 0.7,
                        color: 'RGBA(104, 205, 253, 0)'
                    }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: data
    }]
};