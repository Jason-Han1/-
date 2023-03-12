  var imgs = [
      'http://pic43.nipic.com/20140714/1741729_203904425226_2.jpg',
      'http://i1.mhimg.com/kl688file/2012-2/2012022913021647170.jpg',
      'http://www.tianshui.com.cn/Files/RoUpFiles/4192533128.jpg'
  ];

  var currentIndex = 0;
  var timer;

  function menuFormater(params, label) {
      let obj = null;
      if (params instanceof Array) {
          obj = params[0]
      } else {
          obj = params;
      }
      return obj.dataIndex !== 0 ? '' : label;
  }

  var currentMenu;


  var option = {
      title: {
          text: 'echarts 小程序 - 图片查看器'
      },
      xAxis: {
          position: 'top',
          type: 'value',
          axisTick: {
              show: false
          },
          axisLabel: {
              show: false
          },
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          }

      },
      yAxis: {
          type: 'category',
          data: ['', '', '', '', '', '', '', '', '', '', '', ''],
          axisTick: {
              show: false
          },
          axisLabel: {
              show: false
          },
          axisLine: {
              show: false
          },
          splitLine: {
              show: false
          }

      },
      series: [{
          name: 'all',
          type: 'pictorialBar',
          symbol: 'image://' + imgs[currentIndex],
          symbolSize: [300, 300],
          symbolRepeat: true,
          data: [0, 0, 0, 0, 0, 0, 1],
          animationEasing: 'elasticOut',
          symbolPosition: 'center'
      }, {
          name: 'previous',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  formatter: function(params) {
                      return menuFormater(params, '')
                  },
                  textStyle: {
                      fontSize: 14,
                      color: '#000'
                  },
                  itemStyle: {
                      color: '#fff'
                  },
                  show: true,
                  position: [10, 10]
              }
          },
          data: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          itemStyle: {
              normal: {
                  color: '#99a9bf'
              }
          }
      }, {
          name: 'previous',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  formatter: function(params) {
                      return menuFormater(params, '上一张')
                  },
                  textStyle: {
                      fontSize: 14,
                      color: '#000'
                  },
                  show: true,
                  position: [10, 10]
              }
          },
          data: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          itemStyle: {
              normal: {
                  color: '#99a9bf'
              }
          }
      }, {
          name: 'play',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  formatter: function(params) {
                      return menuFormater(params, '播放/停止')
                  },
                  textStyle: {
                      fontSize: 14,
                      color: '#000'
                  },
                  show: true,
                  position: [10, 10]
              }
          },
          data: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          itemStyle: {
              normal: {
                  color: '#99a9bf'
              }
          }
      }, {
          name: 'next',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  formatter: function(params) {
                      return menuFormater(params, '下一张')
                  },
                  textStyle: {
                      fontSize: 14,
                      color: '#000'
                  },
                  show: true,
                  position: [10, 10]
              }
          },
          data: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          itemStyle: {
              normal: {
                  color: '#99a9bf'
              }
          }
      }, {
          name: 'about',
          type: 'bar',
          stack: '总量',
          label: {
              normal: {
                  formatter: function(params) {
                      return menuFormater(params, '')
                  },
                  textStyle: {
                      fontSize: 14,
                      color: '#000'
                  },
                  show: true,
                  position: [10, 10]
              }
          },
          data: [300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          itemStyle: {
              normal: {
                  color: '#99a9bf'
              }
          },
          barGap: '1%',
      }]
  };

  myChart.on('click', function(params) {
      if (params.seriesName === 'previous') { //上一张
          if (timer !== null) {
              clearInterval(timer);
              timer = null;
          }
          currentIndex--;
          if (currentIndex < 0) {
              currentIndex = imgs.length - 1;
          }
          option.series[0].symbol = 'image://' + imgs[currentIndex];
          myChart.setOption(option)
          return;
      }
      if (params.seriesName === 'play') { //上一张
          if (timer !== null) {
              clearInterval(timer);
              timer = null;
              return ;
          }
          timer = setInterval(function() {
              currentIndex--;
              if (currentIndex < 0) {
                  currentIndex = imgs.length - 1;
              }
              option.series[0].symbol = 'image://' + imgs[currentIndex];
              myChart.setOption(option)
          }, 1000);
      }
      if (params.seriesName === 'next') { //上一张
          if (timer !== null) {
              clearInterval(timer);
              timer = null;
          }
          currentIndex++;
          if (currentIndex >= imgs.length) {
              currentIndex = 0;
          }
          option.series[0].symbol = 'image://' + imgs[currentIndex];
          myChart.setOption(option)
          return;
      }

  });