option = {
        xAxis: {
          type: 'category',
          data: ['桥梁1梁1梁1标', '梁1桥梁2标', '梁1桥梁3标', '桥梁4标'],
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
              color: 'rgba(0,0,0,0.75)', // X轴文字颜色
              padding: [0, 0, 0, 0],
              fontSize: 12
            }
          }
        }, 
        
        legend: {
         textStyle:{
           color: 'rgba(0,0,0,0.75)'
         },
          data:[
            {
              name: '合同金额',
              itemStyle: {
                color: '#1F94D4' ,
                borderWidth: 10
              }
            },
            {
              name: '累计完成',
              itemStyle: {
                color: '#43D5A0' ,
              }
            },
            {
              name: '完成百分比',
              itemStyle: {
                color: '#E6BB56' ,
              }
            }
          ]
        },
        // grid: {
        //   // containLabel: true,
        //   // // 显示数据的图表位于当前canvas的坐标轴
        //   // top: 30,
        //   // bottom: 40,
        //   // left: 50,
        //   // right: 50
        // },
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: function (params) {
            console.log(params, params.data)
            return (
              '<div><span style="color: #333;font-size: 14px; font-weight: 600;margin-right: 10px">合同金额: </span><span style="color: #5396b9;float: right;">' +
              params.data.total +
              '万元</span><br/>' +
              '<span style="color: #333;font-size: 14px; font-weight: 600;margin-right: 10px">累计完成: </span><span style="color: #5396b9;float: right;">' +
              params.data.completes +
              '万元</span><br/>' +
              '<span style="color: #333;font-size: 14px; font-weight: 600;margin-right: 10px">完成率: </span><span style="color: #5396b9;float: right;">' +
              params.data.percentage +
              '%</span><br/>' +
              '</div>'
            )
          }
        },
        yAxis: [
          {
            type: 'value',
            name: '(万元)',
            nameTextStyle: {
              color: 'rgba(255,255,255,0.40)',
              padding: [0, 0, 0, -25] // 四个数字分别为上右下左与原位置距离
            },
            splitLine: {
              // show: false // 不显示网格线
              lineStyle: {
                type: 'dashed',
                color: '#344a53'
              }
            },
            axisLabel: {
              formatter: '{value}',
              color: 'pink'
            }
          },
          {
            type: 'value',
            min: 0,
            axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value} %'
            },
            splitLine: {
              show: false // 不显示网格线
            },
            axisTick: {
              show: false // 不显示坐标轴刻度线
            }
          }
        ],
        series: [
          {
            name: '合同金额',
             barGap: '50px',
            // data: [120, 150, 80, 50, 70, 90, 120],
            data: [
              {
                value: 1000,
                total: 1000,
                completes: 500,
                percentage: 50
              },
              {
                value: 800,
                total: 800,
                completes: 200,
                percentage: 25
              },
              {
                value: 1000,
                total: 1000,
                completes: 300,
                percentage: 30
              },
              {
                value: 1000,
                total: 1000,
                completes: 600,
                percentage: 60
              },
              {
                value: 1000,
                total: 1000,
                completes: 700,
                percentage: 70
              }
            ],
            type: 'bar',
            yAxisIndex: 0,
            itemStyle: {
              // 柱子颜色渐变
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#1F94D4' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(31,148,212,.5)' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          },
          {
            name: '累计完成',
            barGap: '50px',
            data: [
              {
                value: 500,
                total: 1000,
                completes: 500,
                percentage: 50
              },
              {
                value: 200,
                total: 800,
                completes: 200,
                percentage: 25
              },
              {
                value: 300,
                total: 1000,
                completes: 300,
                percentage: 30
              },
              {
                value: 600,
                total: 1000,
                completes: 600,
                percentage: 60
              },
              {
                value: 700,
                total: 1000,
                completes: 700,
                percentage: 70
              }
            ],
            type: 'bar',
            yAxisIndex: 0,
            itemStyle: {
              // 柱子颜色渐变
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#43D5A0' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(67,213,160.5)' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          },
          {
            name: '完成百分比',
            barGap: '0px',
            data: [
              {
                value: 50,
                total: 1000,
                completes: 500,
                percentage: 50
              },
              {
                value: 25,
                total: 800,
                completes: 200,
                percentage: 25
              },
              {
                value: 30,
                total: 1000,
                completes: 300,
                percentage: 30
              },
              {
                value: 60,
                total: 1000,
                completes: 600,
                percentage: 60
              },
              {
                value: 70,
                total: 1000,
                completes: 700,
                percentage: 70
              }
            ],
            type: 'bar',
            yAxisIndex: 1,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            itemStyle: {
              // 柱子颜色渐变
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#E6BB56' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(230,187,86,.5)' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          }
        ]
      }