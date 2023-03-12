 
  var data = [{
      name: '邮件营销',
      data: [800, 300, 500, 800, 300, 600, 500]
  }, {
      name: '视频广告',
      data: [500, 400, 50, 80, 30, 60, 50],
  }, {
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  }]
  var catg = [data[0].name, data[1].name]
  var xdata = data[2].data
  var color = ['#56d6ba', '#4085df']
  // option
  option = {
      title: {
          subtext: '单位(万)',
          subtextStyle: {
              fontWeight: 'normal'
          },
          padding: [0, 10]
      },
      backgroundColor: 'rgb(128,128,128,0)',
      tooltip: {
          trigger: 'axis',
      },
      legend: {
          data: catg,
          textStyle: {
              color: '#badafc',


          },

          padding: 10
      },
      grid: {
          containLabel: true
      },
      xAxis: {
          data: xdata,
          axisTick: {
              show: false
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#6c96b7',
                 
              },
          },
          axisLabel: { //坐标轴刻度标签的相关设置。

             
          }
      },
      yAxis: {
          axisTick: {
              show: false
          },
          axisLine: {
              show: false,
              lineStyle: {
                  color: '#6c96b7'
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#1a3962',

              }
          },

      },
      series: [{
          name: data[0].name,
          type: 'line',
          color: color[0],
          symbol: 'circle',
          symbolSize: 0,
          smooth: true,
          areaStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgb(86,214,186,0.4)'
                  }, {
                      offset: 1,
                      color: 'rgb(128,128,128,0.1)'
                  }])
              }
          },

          data: data[0].data,
      }, {
          name: data[1].name,
          type: 'line',
          color: color[1],
          symbol: 'circle',
          symbolSize: 0,
          smooth: true,
          areaStyle: {
              normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgb(64,133,223,0.5)'
                  }, {
                      offset: 1,
                      color: 'rgb(128,128,128,0.1)'
                  }])
              }
          },

          data: data[1].data,
      }]
  };