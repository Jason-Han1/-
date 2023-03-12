const score=4
const unit='分'
option = {
        backgroundColor: 'RGBA(40, 44, 83, 1)',
        // title: [{
        //   text: '总体满意度',
        //   x: 'center',
        //   top: '50%',
        //   textStyle: {
        //     color: '#ffffff',
        //     fontSize: 15,
        //     fontWeight: '400',
        //   }
        // }, {
        //   text: '4',
        //   x: 'center',
        //   top: '45%',
        //   textStyle: {
        //     fontSize: '30',
        //     color: '#ffffff',
        //     fontFamily: 'Lato',
        //     foontWeight: '600',
        //   },
        // }, {
        //   text: '分',
        //   x: '51%',
        //   top: '46%',
        //   textStyle: {
        //     fontSize: '20',
        //     color: '#ffffff',
        //     fontFamily: 'Lato',
        //     foontWeight: '600',
        //   },
        // }],
        title:{
            text:`{score|${score}}{unit|${unit}}`,
            subtext:'总体满意度',
            left:'center',
            y:'center',
            // top:'midddle',
            textStyle:{
                rich:{
                    score:{
                        color:'#ffffff',
                        fontSize:'35',
                    },
                    unit:{
                        color:'#ffffff',
                        fontSize:'10',
                        align:'center',
                        verticalAlign:'bottom',
                    }
                }
            }
        },
        polar: {
          radius: ['45%', '55%'],
          center: ['50%', '50%'],
        },
        angleAxis: {
          max: 5,
          show: false,
        },
        radiusAxis: {
          type: 'category',
          show: true,
          axisLabel: {
            show: false,
          },
          axisLine: {
            show: false,

          },
          axisTick: {
            show: false
          },
        },
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
              color: 'RGBA(0, 91, 126, 1)',
            },
            data: [4],
            coordinateSystem: 'polar',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: '#38a700'
                }, {
                  offset: 1,
                  color: '#fdf914'
                }]),
              }
            }
          },
        ]
      };