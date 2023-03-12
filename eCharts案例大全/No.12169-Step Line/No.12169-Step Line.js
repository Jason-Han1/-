 option = {
        title: {
          text: 'Step Line'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 100,
          splitNumber: 10
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 50,
          splitNumber: 10
        },
        series: [
          {
            name: '节点',
            type: 'line',
            color: '#d9d9d9',
            markArea: {
              // silent: true,
              label: {
                normal: {
                  position: ['1%', '50%']
                }
              },
              data: [
                [{ name: '采购', label: { fontWeight: 'bold', color: '#000' }, yAxis: 50 }, { yAxis: 40 }],
                [{ name: '制造', label: { fontWeight: 'bold', color: '#000' }, yAxis: 13 }, { yAxis: 37 }],
                [{ name: '销售', label: { fontWeight: 'bold', color: '#000' }, yAxis: 0 }, { yAxis: 10 }]
              ]
            }
          },
          {
            name: '园区',
            type: 'line',
            markArea: {
              data: [
                [{ name: '中南园区', itemStyle: { color: '#9DC4FA' }, label: { position: 'bottom', fontWeight: 'bold', color: '#000' }, xAxis: '8', yAxis: '15' }, { xAxis: '27', yAxis: '35' }],
                [{ name: '青岛园区', itemStyle: { color: '#f2f2f2' }, label: { position: 'bottom', fontWeight: 'bold', color: '#000' }, xAxis: '28', yAxis: '15' }, { xAxis: '47', yAxis: '35' }],
                [{ name: 'XX园区', itemStyle: { color: '#9DC4FA' }, label: { position: 'bottom', fontWeight: 'bold', color: '#000' }, xAxis: '48', yAxis: '15' }, { xAxis: '67', yAxis: '35' }],
                [{ name: 'YY园区', itemStyle: { color: '#f2f2f2' }, label: { position: 'bottom', fontWeight: 'bold', color: '#000' }, xAxis: '68', yAxis: '15' }, { xAxis: '87', yAxis: '35' }]
              ]
            }
          }
        ]
      }