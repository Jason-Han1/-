yData = ['哈哈哈5', '嚯哈哈4', '啦啦3', '啧啧', 'yiyi']
option = {
      grid: {
        top: '0%',
        right: '10%',
        left: '10%',
        bottom: '30%'
      },
      xAxis: [{
        // min: 0,
        // max: 10,
        axisLabel: {
          // formatter: '{value}%',
          color: '#A3C8F2',
          textStyle: {
            fontSize: 12
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(107,107,107,0.37)',
          },
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(131,101,101,0.2)',
            // type: 'dashed',
          }
        }

      }],
      yAxis: [{
        type: 'category',
        color: '#59588D',
        data: yData,
        axisLabel: {
          margin: 20,
          // color: '#999',
          textStyle: {
            fontSize: 12
          },
        },
        axisLine: {
          // lineStyle: {
          //     color: '#d2d2d2',
          // },
          show: false,
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          formatter: function (a, index) {
            let str = ''
            if (index === 0) {
              str = `{color1|${5 - index}}`
            } else if (index === 1) {
              str = `{color2|${5 - index}}`
            } else if (index === 2) {
              str = `{color3|${5 - index}}`
            } else if (index === 3) {
              str = `{color4|${5 - index}}`
            } else {
              str = `{color5|${5 - index}}`
            }
            // str = 5 - index
            return str;
          },
          rich: {
            color1: {
              color: '#FACC14',
            },
            color2: {
              color: '#F8B324',
            },
            color3: {
              color: '#F48341',
            },
            color4: {
              color: '#F0585A'
            },
            color5: {
              color: '#EF4864'
            }
          }
        }
      }],
      series: [{
        type: 'bar',
        data: [110, 120, 150, 180, 200],
        barWidth: '20px',
        itemStyle: {
          normal: {
            // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //     offset: 0,
            //     color: '#FF9A22' // 0% 处的颜色
            // }, {
            //     offset: 1,
            //     color: '#FFD56E' // 100% 处的颜色
            // }], false),
            color: '#3095FA',
            barBorderRadius: [0, 10, 10, 0],
          }
        },
        label: {
          show: true,
          fontSize: 12,
          // fontWeight: 'bold',
          position: 'inside',
          color: '#fff',
          // formatter: (params)=>{//单独对第一个label使用样式
          //     if (params.dataIndex === 0) {
          //         return '{a|'+params.value+'}'
          //     } 
          // },
          formatter: '{b}:{c}',
          rich: {//使用富文本编辑字体样式
            a: {
              color: 'red'
            }
          }
        }
      }]
    };