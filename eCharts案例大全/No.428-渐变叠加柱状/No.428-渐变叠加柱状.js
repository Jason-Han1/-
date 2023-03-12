option = {
          title: {
            text: '',
            subtext: ''
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            icon:'circle',
            left: 'center',
            top:'5',
            
            show: true,
          },
    
          grid: {
            
            containLabel: true
          },
          xAxis: {

            type: 'category',
            
            data: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],


          },
          yAxis: {
            type: 'value',
           
          },
          series: [
            {
              name: '生活',
              type: 'bar',
              barWidth: 30,
              stack: '数量',
              data: [11,20,30,26,53,24,19],
              itemStyle: {
                normal: {
                  //颜色渐变
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FC915A'
                  }, {
                    offset: 1,
                    color: '#FBDD76'
                  }])
                }
              }
            },
            {
              name: '工业',
              type: 'bar',
              barWidth:30,
              stack: '数量',
              data:  [11,20,30,26,53,24,19],
              itemStyle: {
                normal: {
                  //颜色渐变
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#317EEA'
                  }, {
                    offset: 1,
                    color: '#4DB9F6'
                  }])
                }
              }
            },
            {
              name: '农业',
              type: 'bar',
              barWidth: 30,
              stack: '数量',
              data:  [11,20,30,26,53,24,19],
              itemStyle: {
                normal: {
                  //颜色渐变
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#44F1B6'
                  }, {
                    offset: 1,
                    color: '#30DBE9'
                  }])
                }
              }
            },

          ]
        };
