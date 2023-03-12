option = {
            backgroundColor: '#152a5f',
            title: {
              text: '热词走势',
              x: '20',
              y: '20',
              textStyle: {
                color: '#6b8ffc',
                fontFamily: 'Microsoft YaHei',
                fontSize: '16'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{c}%'
            },
            legend: {
              data: ['Quantity' /* { name: 'Accumulative Share %', icon: 'circle' }*/],
              icon: 'roundRect',
              orient: 'vertical',
              right: '10%',
              bottom: '60%',
              textStyle: {
                color: '#6b8ffc',
                fontSize: 16
              }
            },
            xAxis: [
              {
                splitLine: {
                  show: false
                },
                type: 'category',
                      boundaryGap: true,
                      axisLine: {
                        show: false
                      },
                // 横坐标改变文字颜色
                axisLabel: {
                  margin: 20,
                  textStyle: {
                    color: '#5c72ac',
                    margin: 15
                  }
                },
                data: ['智能手机', '5G', '工业4.0', '公有云', '自主研发', '人工智能', '云计算', '大数据']// response.data.data.xData
              },
              {
                splitLine: {
                  show: false
                },
                boundaryGap: false,
                axisLabel: {
                  show: false
                },

                data:["智能手机", "5G", "工业4.0", "公有云", "自主研发", "人工智能", "云计算", "大数据", "total"]

              }
            ],
            yAxis: [
              {
                type: 'value',
                // max: 100,
                splitNumber: 5,
                // boundaryGap: [0.2, 0.2],
                axisLabel: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: false
                },
                // 纵坐标坐标轴颜色
                axisLine: {
                  show: true,
                  lineStyle: {
                    type: 'dash',
                    color: '#5c72ac'
                  },
                  type: 'dash'
                },
                axisLabel: {
                  margin: 20,
                  textStyle: {
                    color: '#5c72ac',
                    margin: 15
                  }
                }
              },
              {
                type: 'value',
                axisLabel: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: false
                }
              }
            ],
            series: [
              {
                //柱状图
                type: 'bar',
                xAxisIndex: 0,
                yAxisIndex: 0,
                barCategoryGap: '10%',
                silent: true,
                itemStyle: {
                  normal: {
                    color: '#28768d',
                    barBorderColor: '#49c9bf',
                    barBorderWidth: 2
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                      // fontWeight:'bold',
                      fontSize: 18
                    }
                  }
                },
                data: [145, 63, 47, 35, 20, 14, 10, 5]
              },
              {
                //折线图
                name: 'Accumulative Share %',
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                smooth: true,
                clipOverflow: false,
                symbolSize: 9,
                itemStyle: {
                  normal: {
                    borderColor: '#FD5916',
                    borderWidth: 3,
                    color: '#49c9bf'//折线点的颜色
                  }
                },
                lineStyle: {
                  normal: {
                    color: '#f60'//折线点的颜色
                    // barBorderWidth: 2,
                  }
                },
                data: [0, 42, 61, 75, 85, 91, 95, 98, 100]
              }
            ]
           };
