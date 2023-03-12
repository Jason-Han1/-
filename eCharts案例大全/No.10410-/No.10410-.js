 var option = {
     backgroundColor:'#030A12',
        tooltip: {
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '5%',
          top:'16%',
          containLabel: true
        },
         legend: {
        data: ['外部', '内部'],
        right: 10,
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
          data: ['贵宾楼','诺金酒店','东方广场','君悦酒店','新天地'],
          axisLine: {
            lineStyle: {
              color: '#425873'
              
            }
          },
          axisLabel: {
               margin:15,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              color:"#BBC4CD",
              fontSize:20,
            }
          },
           axisTick:{
               show:false
          }
        },

        yAxis: {
          type: 'value',
         
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {
              textStyle:{
                  color:"#BBC4CD",
                  fontSize:20
              }
          },
          axisTick:{
               show:false
          }
        },
        series: [{
          name: '外部',
          type: 'bar',
          barWidth: '35',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#20BAFF'
                }, {
                    offset: 1,
                    color: '#023B59'
                }]),
            },
          },
          data: [400, 400, 300, 300, 300]
        },
        {
          name: '内部',
          type: 'bar',
          barWidth: '35',
          itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#06FFC5'
                }, {
                    offset: 1,
                    color: '#02574F'
                }]),
            }
            
          },
          data: [400, 500, 500, 500, 500]
        }]
      };

  