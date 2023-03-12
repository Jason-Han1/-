option = {
    backgroundColor:'#010A31',
        color: [
          '#6ACF82',
          '#F48181',
          '#2E76E6',
        ],
        
        calculable: true,
        legend: {
          // orient: "vertical",
          // x: "70%",
          // y: "",
         orient: 'vertical',
          right: '8%',
          top: '20%',
          itemWidth: 15,
          itemHeight: 10,
          itemGap:30,
          textStyle: {
            color: '#',
            fontSize: 16
          },
          data: [
            '一级',
            '二级',
            '三级',
          ]
        },
        series: [
          {
            // name: '',
            type: 'pie',
            clockwise: false, //时针方向
            radius: ['50%', '85%'],
            center: ['40%', '50%'],
            itemStyle: {
              normal: {
                borderColor: '#031931',
                borderWidth: 3
              }
            },
            labelLine: {
              // normal: {
              //   length: 20,
              //   length2: 20
              // },
              lineStyle: {
                // color: '#fff'//线色
              }
            },
            label: {
              show: true,
              normal: {
                show: true,
                formatter: function (data) {
                  return data.value
                },
                // color: '#ffff',//字色
                fontSize: 14
              },
              emphasis: {
                show: true
              }
            },
            data: [
              {
                name: '一级',
                value: '300'
              },
              {
                name: '二级',
                value: '438'
              },
              {
                name: '三级',
                value: '83'
              }
            ]
          }
        ]
      }