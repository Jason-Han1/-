var xData =  ['A', 'B', 'C', 'D', 'E', 'F']

option = {
    backgroundColor: "#162c42",
 legend: {
        top: '10%',
        x: 'center',
        y: '1%',
        itemWidth: 15,
        itemHeight: 10,
        textStyle: {
          color: '#ffffff',
          fontSize: 14
        },
        data: ['实际', '计划', '计划完成率', '完成率']
      },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
            top: '20%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true // 防止标签溢出
      },
    "calculable": true,
    "xAxis": [{
        "type": "category",
       axisLabel: {
            margin: 20,
            "interval": 0,
            color: '#FFFFFF',
            textStyle: {
              fontSize: 14
            }
          },
          axisLine: {
            lineStyle: {
              color: '#4d5d6e'
            }
          },
   
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        
        "data": xData,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
       name: '（万KWh）',
      nameTextStyle: {
        color: '#FFFFFF',
        padding: [0, 32, 10, 0]
      },

              axisLabel: {
                formatter: '{value}',
                color: '#FFFFFF',
                textStyle: {
                  fontSize: 14
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,0.30)',
                  type: 'dashed'
                }
              },
        "splitArea": {
            "show": false
        },

    },{
        type: 'value',
              name: '（%）',
              nameTextStyle: {
                color: '#FFFFFF',
                padding: [0, -20, 0, 0]
              },
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                formatter: '{value}',
                color: '#FFFFFF',
                textStyle: {
                  fontSize: 14
                }
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255,255,255,0)',
                  type: 'dashed'
                }
              }
    }],
    "series": [{
            "name": '实际',
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 35,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": 
                    {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(47,194,91,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(47,194,91,0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                     barBorderRadius: [10, 10, 0, 0]
                }
            },
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433
            ],
        },

        {
            "name": '计划',
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(24,144,255,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(24,144,255,0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                     barBorderRadius: [10, 10, 0, 0]
                }
            },
            "data": [
                327,
                1776,
                507,
                1200,
                800,
                482
            ]
        },  {
            "name": '计划完成率',
           type: "line",
            smooth: false,
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(255,217,21,1)",
                    borderColor: "#fff",
                    borderWidth: 1
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            "data": [
                1036,
                3693,
                2962,
                3810,
                2519,
                1915
            ]
        },
        {
            "name": '完成率',
           type: "line",
            smooth: false,
            symbol: "circle",
            symbolSize: 10,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    color: "rgba(255,95,95,1)",
                    borderColor: "#fff",
                    borderWidth: 1
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            "data": [
               
                3810,
                2519,
                1915,
                 1036,
                3693,
                2962,
            ]
        },
    ]
}