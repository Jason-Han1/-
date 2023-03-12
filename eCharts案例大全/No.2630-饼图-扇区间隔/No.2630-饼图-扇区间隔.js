option = {
        color: ['#fd7f0e', '#04f9fa', '#16bd87', '#1aa3ff', '#ff633c', '#ffc722'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}：{c} ({d}%)',
        },
        legend: {
          bottom: '20%', 
          itemWidth: 10, 
          itemHeight: 10, 
          textStyle: {
            color: '#fff',
            fontSize: '14',
          },
        },
        series: [
          {
            name: '专题资源',
            type: 'pie',
            center: ['50%', '40%'],
            radius: ['35%', '50%'],
            label: {
              normal: {
                formatter: params => {
                  return '{icon|■}{value|' + params.value + '}'
                },
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  value: {
                    fontSize: 16,
                    color: '#04F9FA',
                    padding: [4, 0, 0, 4],
                  },
                },
              },
            },
            data: [
              {
                value: 4544,
                name: '评审评定',
              },
              {
                value: 3362,
                name: '古诗词介绍',
              },
              {
                value: 3130,
                name: '英语',
              },
              {
                value: 2341,
                name: '数学竞赛',
              },
              {
                value: 1986,
                name: '思想品德',
              },
              {
                value: 1874,
                name: '新建专题',
              },
            ],
            itemStyle: {
              borderWidth: 6,  //扇区间隔大小
              borderColor: '#061416',  //和背景色保持一致
            },
          },
        ],
      }
