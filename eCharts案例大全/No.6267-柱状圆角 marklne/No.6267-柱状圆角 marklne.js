option = {
        tooltip: {
          trigger: 'item',
          backgroundColor: "#fff",
         
        padding: 12,
        extraCssText: "box-shadow: 0px 2px 8px 0px #cacaca;border-radius: 4px;opacity: 0.9;max-height: 100%;",
        textStyle: {
            "color": "#565656",
            "lineHeight": 28
         },
          
        },
        grid: {
          top: '70px',
          left: '36px',
          right: '36px',
          bottom: '70px',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            interval: 0,
            height: '13',
            fontSize: '10',
            fontFamily: 'Roboto-Regular,Roboto',
            fontWeight: '400',
            color: 'rgba(56,49,77,1)',
            lineHeight: '13'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: ['22', '33', '44', '55', '66', '77', '88', '99']
        }
        ],
        yAxis: {
          type: 'value',
        //   show: false,
          axisLabel: {
            inside: true,
            verticalAlign: 'bottom',
            height: '13',
            fontSize: '10',
            fontFamily: 'Roboto-Regular,Roboto',
            fontWeight: '400',
            color: 'rgba(56,49,77,1)',
            lineHeight: '13'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            // show: false,
            lineStyle: {
              color: 'rgba(235,237,244,1)'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '10px',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#82E5C9' },
                  { offset: 1, color: '#4EE5BA' }
                ]
              ),
              barBorderRadius: [50, 50, 0, 0]
            },
             markLine: {
                data: [
                    {
                    yAxis: 6,
                    name:'国际警戒线',
                    label:{show:true},
                    lineStyle:{
                        color:'#0ff'
                    }
                },
                 {
                    yAxis: 8,
                    lineStyle:{
                        color:'#c897f3'
                    }
                },
                    ],
                },
            data: [4, 3, 4, 4, 5, 6, 9, 8]
          }
          ]
      }