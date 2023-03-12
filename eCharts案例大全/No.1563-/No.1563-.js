
 let chartData=[
    {name:"9/01",value1:1,value2:33,value3:13},
    {name:"9/02",value1:33,value2:33,value3:13},
    {name:"9/03",value1:33,value2:33,value3:13},
    {name:"9/04",value1:33,value2:33,value3:13},
    {name:"9/05",value1:33,value2:33,value3:13},
    {name:"9/06",value1:33,value2:33,value3:13},
    {name:"9/07",value1:33,value2:33,value3:13},
    {name:"9/08",value1:33,value2:33,value3:13},
    {name:"9/09",value1:33,value2:33,value3:13},
    {name:"9/10",value1:33,value2:33,value3:13},
    {name:"9/11",value1:33,value2:33,value3:13},
    {name:"9/12",value1:33,value2:33,value3:13},
    {name:"9/13",value1:33,value2:33,value3:13},
    {name:"9/14",value1:33,value2:33,value3:13},
    {name:"9/15",value1:33,value2:33,value3:13},
]
let xData=chartData.map((it)=>{
     return it.name;
})
 option = {
        backgroundColor: '#11183c',
        legend: {
          data: ['热鲜猪肉', '冷鲜猪肉', '冷鲜分割'],
          right: 50,
          top: 20,
          itemWidth: 10,
          itemHeight:10,
          icon:"circle",
          type: 'plain',
          textStyle: {
            color: 'RGBA(154, 209, 253, 1)',
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            textStyle: {
              color: '#fff',
            },
          },
        },
        grid: {
          borderWidth: 0,
          top: 50,
          bottom: 40,
          left: 20,
          right: 45,
          containLabel:true,
          textStyle: {
            color: '#fff',
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.5)',
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitArea: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(255,255,255,0.7)',
              fontSize: 10,
            },
            data: xData,
          },
        ],
        yAxis: [
          {
            name: '',
            nameTextStyle: {
              color: '#FDFDFD',
              padding: [0, 0, 0, -50],
            },
            nameGap: 15,
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: 'RGBA(3, 75, 97, 1)',
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(255,255,255,0.5)',
              fontSize: 10,
            },
            splitArea: {
              show: false,
            },
          }
        ],
        series: [
          {
            name: '热鲜猪肉',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    }
                }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(211,92,108,1)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(211,92,108,1)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 1,
              },
            },
            data:chartData.map((it)=>{
                 return {name:it.name,value:it.value1}
            })
          },
          {
            name: '冷鲜猪肉',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    }
                }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(52,137,160,1)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(52,137,160,1)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.9,
                barBorderRadius: 0,
              },
            },
            data: chartData.map((it)=>{
                 return {name:it.name,value:it.value2}
            })
          },
          {
            name: '冷鲜分割',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    }
                }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(164,135,78,1)', // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(164,135,78,1)', // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 1,
              },
            },
            data: chartData.map((it)=>{
                 return {name:it.name,value:it.value3}
            })
          }
        ],
      }