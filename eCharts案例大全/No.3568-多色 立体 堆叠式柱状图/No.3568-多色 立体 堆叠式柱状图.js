option = {
    backgroundColor: '#0B0D13',
    color: ['#F7B502', '#148AC5', '#34D7D1', '#F53D55', '#265CA5', '#62499D', '#6DCFDD', '#3E7500'],
    title: {
        text: '全市关怀人员',
        left: '9%',
        top: '4%',
        textStyle: {
            color: '#fff',
            fontSize: '22',
        },
    },
    legend: {
        orient: 'horizontal',
        itemWidth: 15,
        itemHeight: 10,
        data: [
            {
                name: '重残',
                icon: 'roundRect',
            },
            {
                name: '低保',
                icon: 'roundRect',
            },
            {
                name: '退休',
                icon: 'roundRect',
            },
        ],
        top: '4%',
        textStyle: {
            color: '#DFDFDF',
        },
    },
    grid: {
        left: '4%',
        right: '8%',
        bottom: '10%',
        top: '14%',
        containLabel: true,
    },
    // tooltip: {
    //     trigger: "axis",
    //     axisPointer: {
    //         type: "shadow"
    //     },
    //     textStyle: {
    //         align: 'left'
    //     }
    // },

    xAxis: [
        {
            type: 'category',
            data: ['克拉玛依区', '独山子区', '白碱滩区', '乌尔禾区'],
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#DFDFDF',
                    fontSize: 14,
                },
                formatter: '{value}',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#676C7B',
                },
            },
            offset: 10,
        },
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            name: '人数（人）',
            nameTextStyle: {
                color: '#fff',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#676C7B',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#DFDFDF',
                    fontSize: 14,
                },
            },
            splitLine: {
                //网格线
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                },
            },
        },
    ],
    series: [
          // 重残
          {
            name: '重残', // Bar图的底部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, 0],
            z: 12,
            itemStyle: {
              normal: {
                color: 'rgba(0, 168, 255, 0.7)',
              },
            },
            data: [132, 112, 72, 82],
          },
          {
            name: '重残',
            type: 'bar',
            stack: '总量',
            barWidth: 26,
            data: [110, 70, 90, 140],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(0, 168, 255,0.8)', // 0% 处的颜色
                    },
                    {
                      offset: 0.35,
                      color: 'rgba(0, 102, 171, 0.42)', // 35% 处的颜色
                    },
                    {
                      offset: 0.65,
                      color: 'rgba(0, 102, 171, 0.42)', // 65% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(0, 168, 255,0.8)', // 100% 处的颜色
                    }
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.8,
              },
            },
          },
          {
            name: '重残', // bar图的顶部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
              normal: {
                color: 'rgba(0, 168, 255, 0.7)',
              },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [110, 70, 90, 140],
          },

          // 低保
          {
            name: '低保', // bar图的底部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, -5],
            z: 13,
            itemStyle: {
              normal: {
                color: 'rgba(0,255,182, 0.7)',
              },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [110, 70, 90, 140],
          },
          {
            name: '低保',
            type: 'bar',
            stack: '总量',
            barWidth: 26,
            data: [120, 140, 160, 130],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(0,255,182)', // 0% 处的颜色
                    },
                    {
                      offset: 0.35,
                      color: 'rgba(0,255,182, 0.42)', // 35% 处的颜色
                    },
                    {
                      offset: 0.65,
                      color: 'rgba(0,255,182, 0.42)', // 65% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(0,255,182)', // 100% 处的颜色
                    }
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.8,
              },
            },
          },
          {
            name: '低保', // bar图的顶部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
              normal: {
                color: 'rgba(0,255,182, 0.7)',
              },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [230, 210, 250, 270],
          },

          // 退休
          {
            name: '退休', // bar图的底部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, -5],
            z: 14,
            itemStyle: {
              normal: {
                color: 'rgba(240, 208, 60, 0.8)',
              },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [230, 210, 250, 270],
          },
          {
            name: '退休',
            type: 'bar',
            stack: '总量',
            barWidth: 26,
            data: [90, 160, 70, 110],
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 1,
                  y2: 0,
                  colorStops: [
                    {
                      offset: 0,
                      color: 'rgba(240, 208, 60, 0.9)', // 0% 处的颜色
                    },
                    {
                      offset: 0.35,
                      color: 'rgba(240, 208, 60, 0.42)', // 35% 处的颜色
                    },
                    {
                      offset: 0.65,
                      color: 'rgba(240, 208, 60, 0.42)', // 65% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(240, 208, 60, 0.9)', // 100% 处的颜色
                    }
                  ],
                  global: false, // 缺省为 false
                },
                opacity: 0.8,
              },
            },
          },
          {
            name: '退休', // bar图的顶部
            type: 'pictorialBar',
            symbolSize: [26, 10],
            symbolOffset: [0, -5],
            z: 12,
            itemStyle: {
              normal: {
                color: 'rgba(240, 208, 60, 0.8)',
              },
            },
            // label: {
            //     show: true,
            //     position: 'top',
            //     fontSize: 16,
            // },
            symbolPosition: 'end',
            data: [320, 370, 320, 380],
          }
        ],
};
