option = {
        title: [{
          text: '可售面积占比',
          x: '20%',
          y: '25%',
          textStyle: {
            fontSize: 16
          }
        },
        {
          text: '已售面积占比',
          x: '70%',
          y: '25%',
          textStyle: {
            fontSize: 16
          }
        }],
        color: ['#4c98dc', '#ea717a', '#6dcbb3'],
        legend: {
          orient: 'vertical',
          x: 'right'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} :  ({d}%)'
        },
        dataset: {
          source: [
            ['group', '可售面积占比', '已售面积占比'],
            ['普通住宅', 57.02, 48.55],
            ['非普通住宅', 27.09, 16.03],
            ['其他类型房产', 15.89, 35.42]
          ]
        },
        series: [
          {
            type: 'pie',
            radius: [60, 90],
            center: ['25%', '50%'],
            encode: {
              itemName: 'group',
              value: '可售面积占比'
            },
            label: {
              show: true,
              formatter: '{b}: {d}%'
            }
          },
          {
            type: 'pie',
            radius: [60, 90],
            center: ['75%', '50%'],
            encode: {
              itemName: 'group',
              value: '已售面积占比'
            },
            label: {
              show: true,
              formatter: '{b}: {d}%'
            }
          }
        ]
      }
