  // 基于准备好的dom，初始化echarts实例
  var unitVH = document.body.clientHeight / 100;
  var color = ['#54c5ed', '#e4c27d']
  var moneyValue = [700, 300, 500, 800, 300, 400, 400]
  var countValue = [70, 30, 50, 80, 30, 60, 50]
  var dataMax = []
  //右边坐标轴的值
  var rightValue = (_.zip(moneyValue, countValue))
  var maxValue = (_.max(_.union(moneyValue, countValue)))
  moneyValue.map((item) => {
      dataMax.push(maxValue)
  })
  // option
  option = {

      tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(param) {
              // console.log(param);
              var relVal = "";
              relVal = param[0].name + "<br/>";
              relVal += param[0].seriesName + ":" + param[0].value + "万<br/>";
              relVal += param[1].seriesName + ":" + param[1].value + "笔";
              return relVal;
          }
      },
      grid: { //设置网格属性
          left: '12%',
          right: '10%',
          bottom: '4%',
          top: '4%',
          //            containLabel: true
      },
      xAxis: {
          type: 'value',
          show: false,
      },
      yAxis: [{
              type: 'category',
              axisTick: {
                  //去掉刻度
                  show: false
              },
              axisLabel: {
                  interval: 0,
                  textStyle: {
                      color: '#638bba',
                    
                  },
              },
              axisLine: {
                  show: false
              },
              data: ['阳光', '汤沐', '张寨', '朱寨', '朱寨2', '朱寨3', '朱寨4']
          },
          {
              type: 'category',
              data: rightValue,
              axisTick: {
                  show: false
              },
              axisLine: {
                  show: false
              },
              axisLabel: {
                  interval: 0,
                  textStyle: {
                      color: '#638bba',
                    lineHeight: 20
                  },
                  formatter: function(params) {
                      var res = "";
                      res = '{white|' + params.split(',')[0] + '}' + '\n' + '{green|' + params.split(',')[1] + '}'
                      return res
                  },
                  rich: {
                      white: {
                          color: 'red',
                         
                      },
                      green: {
                          color: '#638bba',
                         
                      }
                  }
              },

          }
      ],
      series: [{
              type: 'bar',
              yAxisIndex: 1,
              barWidth: 20,
              itemStyle: {
                  normal: {
                      barBorderRadius: 2,
                      color: '#355574'
                  }
              },
              label: {
                  normal: {
                      show: false,
                  }
              },
              data: dataMax
          },
          {
              type: 'bar',
              yAxisIndex: 1,
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                  normal: {
                      barBorderRadius: 2,
                      color: '#355574'
                  }
              },
              label: {
                  normal: {
                      show: false,
                      position: 'right',
                      formatter: '{c}笔',
                      textStyle: {
                          color: '#638bba',
                          fontSize: 10
                      }
                  }
              },
              data: dataMax
          },
          {
              name: '金额',
              type: 'bar',
              barWidth: 20,
              itemStyle: {
                  normal: {
                      barBorderRadius: 4,
                      color: new echarts.graphic.LinearGradient(
                          0, 0, 1, 0, [{
                                  offset: 0,
                                  color: '#807ffa'
                              },
                              {
                                  offset: 1,
                                  color: '#33d9fa'
                              }
                          ]
                      )
                  }
              },
              label: {
                  normal: {
                      show: false,
                  }
              },
              data: moneyValue
          },
          {
              name: '笔数',
              type: 'bar',
              barWidth: 10,
              itemStyle: {
                  normal: {
                      barBorderRadius: 2,
                      color: '#24a695',
                  }
              },
              label: {
                  normal: {
                      show: false,
                  }
              },
              data: countValue
          }

      ]
  };