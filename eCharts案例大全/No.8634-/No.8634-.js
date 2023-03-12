 var option = {
     backgroundColor:'#404a59',
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
         legend: {
        data: [ '信科','统计', '金融','大数据'],
        right: 30,
        top:25,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
    },
        xAxis: {
          type: 'category',
          data: ['16级','17级','18级','19级'],
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: {
          type: 'value',
          max:'20',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        series: [{
          name: '信科',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fccb05'
                }, {
                    offset: 1,
                    color: '#f5804d'
                }]),
                barBorderRadius: 1,
            },
          },
          data: [12,15,5,3]
        },
        {
          name: '统计',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8bd46e'
                }, {
                    offset: 1,
                    color: '#09bcb7'
                }]),
                barBorderRadius: 1,
            }
            
          },
          data: [12,10,10,8]
        },
        {
          name: '金融',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                }, {
                    offset: 1,
                    color: '#6851f1'
                }]),
            barBorderRadius: 1,
            }
          },
          data: [6,7,6,6]
        },
        {
          name: '大数据',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#F48ff7'
                }, {
                    offset: 1,
                    color: '#F851f1'
                }]),
            barBorderRadius: 1,
            }
          },
          data: [0,0,0,4]
        }]
      };

      var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;

      }, 1000);