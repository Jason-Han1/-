 var option = {
     backgroundColor:'#000',
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
        data: ['调整前', '调整后'],
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
          data: ['建设用地','非建设用地','居住用地','商服用地','工业用地','绿地广场用地','道路用地','公共设施用地','公共用地'],
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          },
          axisTick: {
            show:false
            }
        },

        yAxis: {
          type: 'value',
          max:'1200',
          axisLine: {
            show: true,
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
          axisTick: {
            show:false
            }
        },
        "dataZoom": [{
          "show": true,
          "height": 12,
          "xAxisIndex": [
            0
          ],
          bottom:'8%',
          "start": 10,
          "end": 90,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '110%',
          handleStyle:{
            color:"#d3dee5",

          },
          textStyle:{
            color:"#fff"},
          borderColor:"#90979c"
        }, {
          "type": "inside",
          "show": true,
          "height": 15,
          "start": 1,
          "end": 35
        }],
        series: [{
          name: '调整前',
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
                barBorderRadius: 12,
            },
          },
          data: [400, 400, 300, 300, 300, 400, 400, 400, 300,500]
        },
        {
          name: '调整后',
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
                barBorderRadius: 11,
            }
            
          },
          data: [400, 500, 500, 500, 500, 400,400, 500, 500, 600]
        }]
      };