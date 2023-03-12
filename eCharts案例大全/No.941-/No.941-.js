let total = 1000
option = {
   color: ['#22F1FA', '#DBAD3E', '#007AFF',
          ].reverse(),
          tooltip: {
            trigger: 'item',
            textStyle: {
              fontSize: 38,
            },
            formatter: '{b} : {c} ({d}%)',
          },
          series: [
            {
              type: 'pie',
              radius: ['0%', '50%'],
              center: ['50%', '50%'],
              // roseType: 'radius',
              label: {
                show: true,
                position: 'outer',
                alignTo: 'edge',
                margin: '15%',
                bleedMargin: 50,
                formatter: (params) => {
                  if (params.name !== '') {
                    return '{txt|' + params.name + '}\n\n' + '{san|' + ((params.value / total) * 100).toFixed(2) + '%}'
                  }
                },
                align: 'left',
                padding: [0, 0, 70, 0],
                rich: {
                  txt: {
                    color: '#D3E8FF',
                    fontSize: 24,
                  },
                  san: {
                    color: '#22F1FA',
                    fontSize: 24,
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                show: true,
                length: 30,
                length2: 140,
                lineStyle: {
                  color: 'red',
                  width: 2
                }
              },
              data:  [
  {
    name: 'Apples',
    value: 70
  },
  {
    name: 'Strawberries',
    value: 68
  },
  {
    name: 'Bananas',
    value: 48
  },
  {
    name: 'Oranges',
    value: 40
  },
  {
    name: 'Pears',
    value: 32
  },
  {
    name: 'Pineapples',
    value: 27
  },
  {
    name: 'Grapes',
    value: 18
  }
],
            },
          ],
};
