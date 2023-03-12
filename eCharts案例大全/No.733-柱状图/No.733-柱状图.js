var img = "/asset/get/s/data-1579066527025-wc4FnTXT.png";

option = {
    backgroundColor:'#011a33',
    tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'shadow'
          }
      },
      grid: {
        top: 20,
        x: 50,
        x2: 100,
        y2: 40
      },
      xAxis: [{
          type: 'category',
          data: ['部门1', '部门2', '部门3', '部门4', '部门5', '部门6', '部门7'],
          axisLine: {
              lineStyle: {
                  color: '#009cff',
                  width: 0.3
              }
          },
          axisLabel: {
              margin: 10,
              color: '#009cff',
              interval: 0, //横轴信息全部显示
              textStyle: {
                  fontSize: 15
              },
          },
            axisTick: {
              show: false
            },
      }],
      yAxis: [{
          axisLabel: {
              formatter: '{value}',
              color: '#009cff',
              textStyle: {
                fontSize: 14
            },
              
          },
          axisLine: {
            lineStyle: {
                color: "#009cff",
                width: 0.3
              }
          },
          splitLine: {
              lineStyle: {
                  color: '#009cff',
                  width: 0.3
              }
          },
          axisTick: {
              show: false
            },
            max:100
      }],
      series: [{
        type: 'pictorialBar',
        barCategoryGap: '0%',
        symbol:'image://'+img,
          data: [50,35,55,35,55,30,35],
          barWidth: '80px',
          itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                      offset: 0,
                      color: 'rgba(111, 111, 255, .8)' //  0%  处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(14, 34, 72, .1)' //  100%  处的颜色
                    }
                  ],
                  global: false //  缺省为  false
              }
          }
        }
      }]
};