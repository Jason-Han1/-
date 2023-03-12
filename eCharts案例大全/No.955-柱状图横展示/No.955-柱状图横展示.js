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
let barValueData =['15','156','157','152','122']
let color= ['#F56C50', '#5AD8A6', '#F0B814', '#6395FA', '#6395FA', '#6395FA', '#6395FA', '#6395FA', '#6395FA', '#6395FA']

option={
    backgroundColor:'white',
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
            formatter: `{b}</br>案件占比:{c}%<br/>`

          },
          grid: {
            borderWidth: 0,
            top: '1%',
            left: '1%',
            right: '15%',
            bottom: '3%'
          },
          color: color,
          yAxis: [{
            show:false,
            splitLine: {
              show: false
            },
            axisLine: { //y轴
              show: false
            },
            type: 'category',
            axisTick: {
              show: false
            },
            inverse: false,
            data: barLabelData
          },
          {
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              inside: false,
              textStyle: {
                color: '#303030',
                fontSize: '14',
              },
            },
            splitArea: {
              show: false
            },
            splitLine: {
              show: false
            },
            data: barValueData
          }
          ],
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
          // dataset:{
          //   dimensions:['caseType','caseNum'],
          //   source:arrs
          // },
          series: [

            {
              name: '',
              type: 'bar',
              barGap: '30px',
              barWidth: '24px',
              data: barYData,
              animationDuration: 1500,
              itemStyle: {
                normal: {
                  color: function (params) {
                    return color[params.dataIndex]
                  }
                }
              },
              label: {
                normal: {
                  color: '#606060',
                  show: true,
                  position: [0, '-20px'],
                  textStyle: {
                    fontSize: 14
                  },
                  formatter: function (a, b) {
                    return a.name
                  }
                }
              },
            },
            {
              // 辅助系列
              type: 'bar',
              barGap: '-100%',
              silent: true,
              barWidth: '24px',
              itemStyle: {
                color: 'rgba(224, 227, 236, .2)',
              },
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
            },
          ],
        }