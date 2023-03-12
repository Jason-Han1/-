        var txt=81
        option = {
            backgroundColor:'#222',
            title: {
              text: txt+'%',
               subtext: '超单位的百度比',
              x: 'center',
              y: 'center',
              textStyle: {
                color: '#fff',
                fontSize: '36'
              },
        subtextStyle: {
            color: '#999',
            fontSize: 16
        }
            },
            color:'rgba(255,255,255,.3)',
         
            series: [{
              type: 'pie',
              clockWise: true,
              radius: ['60%', '70%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: txt,
                itemStyle: {
                  normal: {
                     color: { // 完成的圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: '#00cefc' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: '#367bec' // 100% 处的颜色
                      }]
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                value: 100-txt
              }]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });