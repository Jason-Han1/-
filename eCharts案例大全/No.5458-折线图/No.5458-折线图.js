option = {
  
    tooltip: {
        trigger: 'axis',
    },
    legend: {
            top: "0%",
             fontSize: "12",
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
          left: "10",
      top: "30",
      right: "10",
      bottom: "10",
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
              // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
               axisLabel: {
          textStyle: {
            fontSize: 12
          }
               },
                 axisLine: {
          lineStyle: {
            color: "rgba(#ed3f35)"
          }
        },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: { show: false },
                axisLine: {
          lineStyle: {
            color: "rgba(#ed3f35)"
          }
        },
          axisLabel: {
          textStyle: {
            color: "rgba(#ed3f35)",
            fontSize: 12
          }
        },
         splitLine: {
          lineStyle: {
            color: "rgba(#ed3f35)"
          }
        }
        }
    ],
    series: [
        {
            
            name: '邮件营销',
            type: 'line',
            smooth:true,
            lineStyle: {
            color: "red",
            width: 3 
        },
            areaStyle: {},
            data: [30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
             // 填充区域
        areaStyle: {
              // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0.5,
                  color: "blue"   // 渐变色的起始颜色
                },
                {
                  offset: 1,
                  color: "rgba(1, 132, 213, 0.9)"   // 渐变线的结束颜色
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
       itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        },
        {
           name: "转发量",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
         },
         areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
         itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
            data: [130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20]
        },
    ]
};
