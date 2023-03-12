option = {
    title: {
        text: '解决个别值异常问题'
    },

    xAxis: {
        data: ['02.09', '02.10', '02.11', '02.12', '02.13', '02.14', '02.15']
    },
    series: [
        {
          name: "新增确诊",
          type:'line',
          data: [2656, 3062, 2478, null, 2450, 2277, 1918],
          label: {
            show:true
          }
          
        },
        {
          name: "新增确诊",
          type:'line',
          //为了拉低点位将异常值的显示点位值拉低到 4000，同时使用 except 记录真实值，方便 label 中使用
          data: [
            null, null, 2478, 
            {value: 6000, except: 15153}, 
            2450, null, null
          ],
          itemStyle: {
            normal: {
              lineStyle: {type: 'dotted'}
            }
          },
          label: {
            show:true,
            formatter(param) {
              if(param.data && param.data.except) {
                return param.data.except;
              }
            }
          },
        }
    ],
    yAxis: {
        axisLabel: {
          showMaxLabel: false,
        },
    },
    

};