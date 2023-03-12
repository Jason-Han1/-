let barYData=[
        {name:'张安',
        value:'15'},
           {name:'张安2',
        value:'156'},
           {name:'张安3',
        value:'157'},
           {name:'张安4',
        value:'152'},
           {name:'张安5',
        value:'122'},
    ]
let barLabelData=['张安','张安2','张安3','张安4','张安5']    
let color= ['#F56C50', '#5AD8A6', '#F0B814', '#6395FA', '#6395FA', '#6395FA', '#6395FA', '#6395FA', '#6395FA', '#6395FA']
    
option = {
          title: {
            show: false
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, .8)',
            axisPointer: {
              type: 'none'
            },
            textStyle: {
              color: '#303030'
            },
            formatter:((parames)=>{
            return `${parames[1].name}<br/>年龄:${parames[1].value}`
            }),

          },
          grid: {
            borderWidth: 0,
            top: '1%',
            left: '1%',
            right: '15%',
            bottom: '3%'
          },
          color: color,
          yAxis: {
            show: false,
            inverse: true,
            type: 'category',
            axisLine: {
              show: false
            },
            data:barLabelData
          },
          xAxis: {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            }
          },
          series: [{
            name: 'label',
            type: 'bar',
            barWidth: 20,
            yAxisIndex: 0,
            label: {
              show: true,
              position: 2,
              color: '#262C41',
              fontSize: 15
            },
            data: barYData.map((item) => {
              return {
                value: 0,
                label: {
                  formatter() {
                    return item.name;
                  }
                }
              };
            })
          }, {
            name: 'value',
            type: 'bar',
            barWidth: 20,
            barMinHeight: 20, // 最小高度
            yAxisIndex: 0,
            data: barYData,
            label: {
              normal: {
                color: '#606060',
                show: true,
                fontSize: 22,
                offset: [10, 0],
                position: 'right',
                // position: 'right', // 位置
                textStyle: {
                  fontSize: 14
                },
                formatter: function (a, b) {
                  return a.value
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return color[params.dataIndex]
                }
              }
            },
          }
          ]
        }