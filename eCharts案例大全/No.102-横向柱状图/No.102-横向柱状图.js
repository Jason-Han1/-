/**
 * series.stack值改成一致，则变成堆叠效果
 * 
**/
option = {
     tooltip: {
         trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
    },
    grid: {
        left: "5%", //距离dom间距
        right: "4%",
        top: "10%",
        bottom: "5%"
    },
	legend:{
        data:['文件系统','数据库'],
        textStyle:{
            color:'black',
        },
        x:'center',
        y: '5%',
    },
    xAxis: [
        {
        type: 'value',
        boundaryGap: true,
        axisPointer: {
            type: "shadow"
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
        }
    ],
    yAxis: [
         {
            type: "category",
            inverse: true,
            axisLabel: {
              verticalAlign: "bottom",
              align: "left",
              padding: [0, 10, 10, 6],
              textStyle: {
                fontSize: 12,
                color: "black",
                fontFamily: "SourceHanSansCN-Regular"
              }
            },
            // 纵坐标数据
            data: [
              "数据中心",
              "网运部",
              "IT中心",
              "创新部",
            ],
            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            }
          },
          {
            type: "category",
            inverse: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              inside: false,
              verticalAlign: "bottom",
              // 位置 上右下左
              padding: [0, 10, 10, -40],
            //   lineHeight: "40",
              textStyle: {
                fontSize: 12,
                color: "black",
                fontFamily: "SourceHanSansCN-Regular"
              }
            },
            // 统计的总量 用纵坐标模拟
            data: [34, 58, 53, 63]
          }
    ],
    series: [
        {
        name: '文件系统',
        type: 'bar',
        // 宽度
        barWidth: "10",
        // 堆叠
        stack: "总量1",
        showBackground: true,
        // 全部背景
        backgroundStyle: {
            color: 'rgba(255,255,255,0)'
        },
        data: [21, 14,19,32],
        itemStyle: {
            normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                1,
                0,
                [
                {
                    offset: 0,
                    color: "#28C785"
                },
                {
                    offset: 1,
                    color: "#28C785"
                }
                ],
                false
            )
            }
        }
        }, {
            name: '数据库',
            type: 'bar',
            // 宽度
            barWidth: "10",
            // 堆叠
            stack: "总量2",
            showBackground: true,
            // 全部背景
            backgroundStyle: {
                color: 'rgba(255,255,255,0)'
            },
            data: [41, 34,13,44],
            itemStyle: {
                normal: {
                show: true,
                textStyle: {
                    fontSize: 12
                },
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                    {
                        offset: 0,
                        color: "#12AAE8"
                    },
                    {
                        offset: 1,
                        color: "#12AAE8"
                    }
                    ],
                    false
                )
                }
            }
        }
    ]
};