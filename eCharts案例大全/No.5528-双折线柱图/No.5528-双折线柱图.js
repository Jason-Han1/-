option = {
    "color": [
        "#1890ff",
        "#1f9"
    ],
    "grid": {
        top: "25%",
          right: "5%",
          left: "5%",
          bottom: "10%",
    },
    "legend": {
        top: 5,
          left: 250,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
              fontSize: 14,
              color: 'red',
              padding: [3, 8, 0, 2]
          },
          data:['增长率', '数值'],
    },
  
     xAxis: [
        {
          type: "category",
          data: [
            "桥北",
            "镜湖",
            "目澜",
            "山塘",
            "坛丘",
            "衡悦"
        
          ],
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            color: "red",
            interval: 0,
            textStyle: {
              fontSize: 10,
            },
            fontFamily: "LCDEF",
          },
        },
      ],
    "yAxis": [{
          name: '单位：家',
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#ccc'
              }
          },
          type: "value",
          axisTick: {
            show: false,
          },
          splitLine: {
            "show": true,
            lineStyle: {
                "color": "#384267",
            }
          },
          axisLabel: {
            color: "#cccccc",
            fontSize: "10",
          },
        },
        {
            "type": "value",
            "name": "合格率 (%)",
            "position": "right",
            "axisLabel": {
                "formatter": "{value} %",
                color: '#27719F'
            },
            "max": 100,
            "splitLine": {
                "show": false
            },
            "axisPointer": {
                "show": true
            },
            "axisTick": {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#27719F',
                }
            },
        }
    ],
    "series": [{
            "type": "bar",
            "name": "数值",
            "barWidth": "20",
            "data": [6, 9, 10, 5, 7],
            itemStyle: {
         
                normal: {
                  
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#42B7FD',
                        },
                        {
                            offset: 1,
                            color: '#3299FF',
                        },
                    ])
                }
                
            }
        },
        {
            "type": "line",
            "name": "增长率",
            "yAxisIndex": 1,
            itemStyle: {
                color: '#20C578',
            },
            symbolSize: 10,
            symbol: 'circle',
            "data": [89, 93, 95, 88, 90]
        }
    ]
};