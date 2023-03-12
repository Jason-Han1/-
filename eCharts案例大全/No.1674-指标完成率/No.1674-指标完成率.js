let titles = ['安徽','江苏','湖北','上海','广东','浙江','北京','厦门','深圳'];
let dataV = [30,20.4,50,70.2,80.8,40,60.7,90.5,79.2], defDate = [];
      for (let i = 0; i < dataV.length; i++) {
        defDate.push(100)
      }
option = {
        xAxis: {
          show: false
        },
        grid: {
          top: 30,
          left: 70,
          right: 30,
          bottom: '10%',
        },
        legend: {
          data: ['实际完成率', '目标率'],
          bottom: 25,
          textStyle: {
            fontSize: 12,
            color: '#333'
          },
          itemWidth: 12,
          itemHeight: 12,
        },
        yAxis: [{
          show: true,
          data: titles,
          inverse: true,
          axisLine: {show: false},
          splitLine: {show: false},
          axisTick: {show: false},
          axisLabel: {
            color: '#333',
            fontSize: 12
          },
        }, {
          show: true,
          data: [],
          axisLine: {show: false},
          splitLine: {show: false},
          axisTick: {show: false}
        }],
        series: [{
          name: '实际完成率',
          type: 'bar',
          yAxisIndex: 0,
          barCategoryGap: '10%',/*多个并排柱子设置柱子之间的间距*/
          data: dataV,
          barWidth: 30,
          z: 10,
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{c}%',
              fontSize: 12,
              fontWeight: 'bold',
              color: '#333'
            },
          },
          color: '#397898'
        }, {
          name: '目标率',
          type: 'bar',
          yAxisIndex: 1,
          color: '#aabfcc',
          data: defDate,
          barWidth: 31,
          itemStyle: {
            normal: {
              borderColor: '#87a5b7',
              borderWidth: 1,
            }
          }
        }]
      };