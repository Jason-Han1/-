option = {
    color: [ '#FE655B', '#4DC94E'],
    legend: {
        
    },
    radar: [
         {
            indicator: [
                { text: '语文', max: 150,color: 'red' },
                { text: '数学', max: 150 },
                { text: '英语', max: 150 },
                { text: '物理', max: 120 },
                { text: '化学', max: 108 },
                { text: '生物', max: 72 }
            ],
            // center: ['75%', '50%'],
            radius: 120,
            splitNumber: 4,
            splitArea: {
                areaStyle: {
                    color: [
                new echarts.graphic.RadialGradient(0, 0, 1, [
                  {
                    color: '#FFD0BF',
                    offset: 0,
                  },
                  {
                    color: '#FFF0D5',
                    offset: 1,
                  },
                ]),
                new echarts.graphic.RadialGradient(0, 0, 1, [
                  {
                    color: '#FFF0D5',
                    offset: 0,
                  },
                  {
                    color: '#FFF7E3',
                    offset: 1,
                  },
                ]),
                new echarts.graphic.RadialGradient(0, 0, 1, [
                  {
                    color: '#FFF7E3',
                    offset: 0,
                  },
                  {
                    color: '#FFFCF4',
                    offset: 1,
                  },
                ]),
                new echarts.graphic.RadialGradient(0, 0, 1, [
                  {
                    color: '#FFFCF4',
                    offset: 0,
                  },
                  {
                    color: '#FFFCF4',
                    offset: 1,
                  },
                ]),
              ],
                }
            },
            axisLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.16)',
                },
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 0.16)',
                },
              },
            axisName: {
            color: 'rgba(19, 20, 28, 0.6)',
          },
        },
    ],
    series: [
        {
            name: '成绩单',
            type: 'radar',
            radarIndex: 0,
            data: [
                {
                    value: [120, 118, 130, 100, 99, 70],
                    name: '品牌',
                },
                {
                    value: [100, 93, 50, 90, 70, 60],
                    name: '行业',
                    areaStyle: {
                        color: 'rgba(254, 101, 91, 0.1)'
                    },
                    symbol: 'rect',
                    symbolSize: 12,
                    
                    lineStyle: {
                        type: 'dashed',
                    },
                }
            ]
        }
    ]
};