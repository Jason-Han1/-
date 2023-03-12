      let shandian = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAOCAMAAADKSsaaAAAAclBMVEUAAACAAADMAAC2AAC/AADIAADMAADRAADKAADMCAjPCAjJBwfMBgbLBgbNBgbLBQXLBQXNCQnMCAjOCQnMCAjNCQnMCQnPCgrNCgrOCQnOCwvNCgrOCgrOCgrOCgrNCgrOCwvOCgrNCgrOCgrOCgrOCwto2NwFAAAAJXRSTlMAAgUHCA4UFhgeICYoLC4xNjhBVHmKjZmvvcLO3+Hj7O/4+/3+bk5NRAAAAE5JREFUCB0FwQkCgQAABMBBFHIU5Qqh/f8XzQDzI8C9AfRTDZx+qcAhSQHrMXnB8pEkyUU3DJ8ktwW8k2cJRfLdglXSApvpDNhfZ4Ad8AeiCgXoDXM13gAAAABJRU5ErkJggg==';
      let path = ["", shandian, "", shandian, "", shandian];
      let todayData = [502.84, 205.97, 332.79, 281.55, 398.35, 214.02];
      let markProfile = todayData.map((item, index) => {
          return {
              coord: [index, item]
          }
      });
      option = {
          backgroundColor: '#080b30',
          title: {
              show: false,
              text: '多线图',
              textStyle: {
                  align: 'center',
                  color: '#fff',
                  fontSize: 20,
              },
              top: '5%',
              left: 'center',
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
                              color: 'rgba(0, 255, 233,0)'
                          }, {
                              offset: 0.5,
                              color: 'rgba(255, 255, 255,1)',
                          }, {
                              offset: 1,
                              color: 'rgba(0, 255, 233,0)'
                          }],
                          global: false
                      }
                  },
              },
          },
          grid: {
              top: '5%',
              left: '5%',
              right: '5%',
              bottom: '5%',
              containLabel: true
          },
          xAxis: [{
              type: 'category',
              axisLine: {
                  show: true
              },
              splitArea: {
                  // show: true,
                  color: '#f00',
                  lineStyle: {
                      color: '#f00'
                  },
              },
              axisLabel: {
                  color: '#fff'
              },
              splitLine: {
                  show: false
              },
              boundaryGap: false,
              data: ['8：00', '9:00', '10:00', '11:00', '12:00', '13:00'],

          }],

          yAxis: [{
              type: 'value',
              min: 0,
              // max: 140,
              splitNumber: 4,
              splitLine: {
                  show: true,
                  lineStyle: {
                      color: ['#fff'],
                      opacity: 0.06
                  }
              },
              axisLine: {
                  show: false,
              },
              axisLabel: {
                  show: true,
                  margin: 20,
                  textStyle: {
                      fontSize: 20,
                      color: 'rgba(255,255,255,0.5)'
                  }
              },
              axisTick: {
                  show: false,
              },
          }],
          series: [{
                  name: '今日',
                  type: 'line',
                  smooth: true, //是否平滑
                  showAllSymbol: true,
                  // symbol: 'image://./static/images/guang-circle.png',
                  symbol: 'circle',
                  symbolSize: 10,
                  lineStyle: {
                      normal: {
                          color: "#FFBC0D",
                          shadowColor: 'rgba(0, 0, 0, 0)',
                          shadowBlur: 0,
                          shadowOffsetY: 5,
                          shadowOffsetX: 5,
                      },
                  },
                  markPoint: {
                      //   symbol: shandian,
                      symbolSize: [6, 16],
                      symbolOffset: [30, -27],
                      label: {
                          show: false,
                          // padding:50,
                      },
                      itemStyle: {
                          color: "red",
                          borderColor: "rgb(108,78,0)",
                          borderWidth: 0,
                          shadowColor: 'rgba(0, 0, 0, 0)',
                          shadowBlur: 0,
                          shadowOffsetY: 0,
                          shadowOffsetX: 0,
                      },
                      symbol: "arrow",
                      data: markProfile
                  },
                  label: {
                      show: true,
                      position: 'top',
                      textStyle: {
                          color: '#FFF',
                          fontSize: 14
                      }
                  },
                  itemStyle: {
                      color: "#FFBC0D",
                      borderColor: "rgb(108,78,0)",
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0)',
                      shadowBlur: 0,
                      shadowOffsetY: 0,
                      shadowOffsetX: 0,
                  },
                  tooltip: {
                      show: true
                  },
                  areaStyle: {
                      color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                                  offset: 0,
                                  color: 'rgba(255,188,13, 0.4)'
                              },
                              {
                                  offset: 1,
                                  color: 'rgba(255,188,13, 0)'
                              }
                          ],
                          global: false // 缺省为 false
                      }
                  },
                  data: todayData
              },
              {
                  name: '昨日',
                  type: 'line',
                  smooth: true, //是否平滑
                  showAllSymbol: true,
                  // symbol: 'image://./static/images/guang-circle.png',
                  symbol: 'circle',
                  symbolSize: 10,
                  lineStyle: {
                      normal: {
                          color: "#41B5FF",
                          shadowColor: 'rgba(0, 0, 0, 0)',
                          shadowBlur: 0,
                          shadowOffsetY: 5,
                          shadowOffsetX: 5,
                      },
                  },
                  label: {
                      show: false,
                      position: 'top',
                      textStyle: {
                          color: '#fff',
                          fontSize: 14
                      }
                  },
                  itemStyle: {
                      color: "#00DAFF",
                      borderColor: "rgb(0,115,100)",
                      borderWidth: 0,
                      shadowColor: 'rgba(0, 0, 0, 0)',
                      shadowBlur: 0,
                      shadowOffsetY: 0,
                      shadowOffsetX: 0,
                  },
                  tooltip: {
                      show: true
                  },
                  data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
              },
          ]
      };