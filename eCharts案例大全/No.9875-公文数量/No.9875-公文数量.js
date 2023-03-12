option = {
    title: {
                  text: '公文数量',
                  left: 'center',
                  top: 10,
                  textStyle: {
                      color: '#ccc'
                  }
              },
              tooltip: {
                  trigger: 'axis'
              },
              // legend: {
              //     data: ['公文数量']
              // },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '60px',
                  containLabel: true
              },
              xAxis: {
                  type: 'category',
                  data: ['办理','归档','审批']
              },
              yAxis: {
                  type: 'value',
                  minInterval: 1,
                  scale: true
              },
              series: [
                  {
                      name: '公文数量',
                      type: 'bar',
                      lineStyle: {
                          normal: {
                              color: 'rgba(124,181,236)'
                          }
                      },
                      itemStyle: {
                          normal: {
                              color: 'rgba(124,181,236)'
                          }
                      },
                      symbol: 'circle',
                      symbolSize: 8,
                      data: [12,1,9]
                  }
              ]
};