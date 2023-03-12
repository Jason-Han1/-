
let label = [1.15, 1.16, 1.17, 1.18, 1.19, 1.20, 1.21]
let value = [30000, 45000, 34500, 55000, 41000, 48900, 44500]

option = {
    backgroundColor:"#061125",
    grid: {
        top: 100,
        containLabel: true
    },
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
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}',
            fontSize:14,
            margin:20,
            textStyle: {
                color: "#e1e5f2"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#1e314a"
            }
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: "#1e314a"
            }
        },
        axisTick:{
            show:false
        },
        data: label
    }],
    yAxis: [
        {
            boundaryGap:false,
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "#e1e5f2"
                }
            },
            nameTextStyle: {
                color: "#fff",
                fontSize: 12,
                lineHeight: 40
            },
            splitLine: {
              
                lineStyle: {
                    color: "#1e314a"
                }
            },
            axisLine: {
                show: false,
                lineStyle:{
                    color:"#1e314a"
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
        name: "销量趋势",
        type: "line",
        smooth: true,
        showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        itemStyle:{
            color:'#ff8e2e',
            borderColor:"#ff8e2e"
        },
        lineStyle: {
            normal: {
                width:2,
                color: "#ff8e2e",
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(255,142,46,1)"
                        },
                        {
                            offset: 0.8,
                            color: "rgba(255,142,46,0)"
                        }
                    ],
                    false
                ),
            }
        },
        data: value
    }]
};
