 data = [{
        value: 71341,
        name: '其他部门（林业、应急）'
      }, {
        value: 38368,
        name: '农业技术推广总站'
      }, {
        value: 7616,
        name: '质量安全监管处'
      },
      {
        value: 4389,
        name: '政策与改革处'
      },
      {
        value: 1132,
        name: '信息中心'
      }].sort((a, b) => b.value - a.value);

       maxNum = Math.max.apply(Math, data.map(item => { return item.value }))
       maxNumArr = [];
      data.forEach(() => maxNumArr.push(maxNum))
      console.log(maxNum)
       option = {
        tooltip: {
          trigger: "axis",
          formatter: '{b0}: {c0}'
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: [
          //左侧name
          {
            type: 'category',

            inverse: true,
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              show: false,
              inside: false
            },
            data: data
          },
          // 右侧value
          {
            type: 'category',

            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {

              padding: [0, 0, 0, -80],
              verticalAlign: "bottom",
              lineHeight: 40,
              textStyle: {
                fontSize: 20,
                color: '#666666'
              },

            },
            data: data
          }
        ],
        series: [

          {
            name: 'value',
            type: 'bar',
            barWidth: 20,
            data: data,
            showBackground: true,
            backgroundStyle: {
              borderRadius: 30
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                  offset: 0,
                  color: '#BEDE0F'
                }, {
                  offset: 1,
                  color: '#F7C018'
                }]),

                barBorderRadius: 30,
              }
            },
            label: {
              normal: {
                color: '#666666',
                fontSize: 20,
                show: true,
                position: [0, '-24px'],
                textStyle: {
                  fontSize: 16
                },
                formatter: function (a, b) {
                  return a.name
                }
              }
            }
          },

        ]
      };