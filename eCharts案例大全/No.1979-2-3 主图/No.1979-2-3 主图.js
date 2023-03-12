 var option = {
     backgroundColor:'#323a5e',
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //   }
        // },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top:'16%',
          containLabel: true
        },
         legend: {
        data: ['1', '2', '3'],
        right: 60,
        top:12,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
        xAxis: {
          type: 'category',
          data: ['2012','2013','2014','2015','2016','2017','2018','2019'],
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisTick: {
            show: false
        },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
        },

        yAxis: {
          type: 'value',
          max:'1200',
          axisTick: {
            show: false
        },
          axisLine: {
            // show: false,
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
          name: '1',
          type: 'bar',
          barWidth: '15%',
           label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#5BFCF4',
                },
            },
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3399cc'
                }, {
                    offset: 1,
                    color: '#3399cc'
                }]),
                // barBorderRadius: 12,
            },
          },
          data: [400, 800, 100, 300, 300, 400, 400, 400, 300]
        },
        {
          name: '2',
          type: 'bar',
          barWidth: '15%',
           label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#5BFCF4',
                },
            },
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f58700'
                }, {
                    offset: 1,
                    color: '#f58700'
                }]),
                // barBorderRadius: 11,
            }
            
          },
          data: [900, 500, 500, 500, 500, 400,400, 500, 500]
        },
        {
          name: '3',
          type: 'bar',
          barWidth: '15%',
           label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#5BFCF4',
                },
            },
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#4bb44b'
                }, {
                    offset: 1,
                    color: '#4bb44b'
                }]),
            // barBorderRadius: 11,
            }
          },
          data: [400, 600, 700, 700, 1000, 400, 400, 600, 700]
        }]
      };

      var app = {
        currentIndex: -1,
      };
      setInterval(function () {
        var dataLen = option.series[0].data.length;

        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        //console.log(app.currentIndex);
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: app.currentIndex,
        });
        // 显示 tooltip
        // myChart.dispatchAction({
        //   type: 'showTip',
        //   seriesIndex: 0,
        //   dataIndex: app.currentIndex
        // });


      }, 1000);