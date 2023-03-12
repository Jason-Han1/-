xData=['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
data1=['24','23','43','13','42','53','23','42','32','53','53','42'],
data2=['54','73','32','53','41','15','74','14','82','86','93','54'],
option = {
   backgroundColor: 'rgba(7, 29, 29,1)',
   timeline: {
            show: false,
            top: 0,
            data: []
          },
          tooltip: {
            show: true
          },
          title: {
             text: 'XXXX完成项目数',
             textStyle: {
                color: '#FFFFFF',
                fontWeight: '800',
                fontSize: '20',
              },
             left: 'center',
             top: '2%',
         },
          legend: {
            show: true,
            top: '7%',
            textStyle: {
              color: '#CDD7D7'
            },
            data: ['部门一', '部门二']
          },
          grid: [
            // 左边柱子
            {
              show: false,
              left: '10%',
              top: '10%',
              bottom: '20',
              containLabel: true,
              width: '33%'
            },
            // 中间
            {
              show: false,
              left: '51%',
              top: '10%',
              bottom: '20',
              width: '0%'
            },
            // 右边柱子
            {
              show: false,
              right: '10%',
              top: '10%',
              bottom: '20',
              containLabel: true,
              width: '33%'
            }
          ],
          xAxis: [
            {
              type: 'value',
              inverse: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              gridIndex: 2,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              splitLine: {
                show: false
              }
            }
          ],
          yAxis: [
            {
              type: 'category',
              inverse: true,
              position: 'right',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: xData
            },
            {
              gridIndex: 1,
              type: 'category',
              inverse: true,
              position: 'center',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: true,
                align: 'center',
                color: '#CDD7D7',
                fontSize: 14
              },
              data: xData
            },
            {
              gridIndex: 2,
              type: 'category',
              inverse: true,
              position: 'left',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              data: xData
            }
          ],
          series: [
            {
              name: '部门一',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              barWidth: 15,
              showBackground: true,
              itemStyle: {
                borderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#3A6ECD'
                  },
                  {
                    offset: 1,
                    color: '#4BE6E6'
                  }
                ])
              },
              label: {
                show: true,
                position: 'left',
                color: '#4BE6E6'
              },
              data:data1
            },
            {
              name: '部门二',
              type: 'bar',
              xAxisIndex: 2,
              yAxisIndex: 2,
              barWidth: 15,
              showBackground: true,
              itemStyle: {
                borderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#F9DD46'
                  },
                  {
                    offset: 1,
                    color: '#F29740'
                  }
                ])
              },
              label: {
                show: true,
                position: 'right',
                color: '#F29740'
              },
              data: data2
            }
          ]
};
