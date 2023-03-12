  option = {
      backgroundColor:'#03213E',
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)',
        },
        legend: {
          right: '5%',
          top: '40%',
          orient: 'vertical',
          itemGap: 20,
          itemWidth: 15,
          itemHeight: 15,
          textStyle: {
            color: '#fff',
            fontSize:14,
          },
          formatter: function (name) {
            let than = option.series[0].data //获取series中的data
            let total = 0
            let tarValue
            for (let i = 0, l = than.length; i < l; i++) {
              total += than[i].value
              if (than[i].name == name) {
                tarValue = than[i].value
              }
            }
            let p = (tarValue / total) * 100
            return ' ' + ' '+' '+name + ' ' + ' ' + ' ' + ' ' + ' '+tarValue + '次' + ' ' + ' ' + ' ' + p.toFixed(2) + '%'
          },
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '80%',
            center: ['30%', '60%'],

            color: ['#FEB813', '#44F0E9', '#2986FF'], //'#FBFE27','rgb(11,228,96)','#FE5050'
            data: [
              {
                value: 60,
                name: '环保志愿',
              },
              {
                value: 50,
                name: '纠纷调解',
              },
              {
                value: 50,
                name: '先锋服务',
              },
            ].sort(function (a, b) {
              return a.value - b.value
            }),
            roseType: 'area',
            label: {
              show: false,
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,
              },
            },
            itemStyle: {
              normal: {
                shadowColor: 'rgba(0,0,0,0.45); ',
                shadowBlur: 50,
              },
            },
          },
        ],
      }
