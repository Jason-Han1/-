option = {
   xAxis: {
          type: 'value',
          data: ['received', 'accountsReceivable'],
          show: false,
        },
        yAxis: {
          type: 'category',
          show: false,
        },
        grid: {
          bottom: 0,
          right: 16,
          left: 16,
        },
        series: [
          {
            name: '已收',
            type: 'bar',
            stack: '总量',
            data: [138798],
            barWidth: 20,
            itemStyle: {
              color: '#35B0FF',
              borderRadius: [24, 24, 24, 24]
            },
            label: {
              show: true,
              formatter: '{value| {c} }\n{name| {a} }',
              align: 'left',
              position: [-4, -80],
              rich: {
                value: {
                  color: '#35B0FF',
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 30,
                },
                name: {
                  color: '#95A4B3',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 30,
                },
              },
            },
          },
          {
            name: '应收',
            type: 'bar',
            stack: '总量',
            data: [286300],
            itemStyle: {
              color: 'red',
              borderRadius: [24, 24, 24, 24]
            },
            label: {
              show: true,
              formatter: '{value| {c} }\n{name| {a} }',
              align: 'right',
              position: ['100%', -80],
              rich: {
                value: {
                  color: '#6B7885',
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 30,
                },
                name: {
                  color: '#95A4B3',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 30,
                },
              },
            },
          },
        ],
};