var option = {
    legend: {
         icon: 'circle',
         itemWidth: 8,
         itemHeight: 8
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
        ]
    },
    series: [{
       type: 'pie',
       radius: ['14%', '20%'],
       center: ['20%', '30%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'center',
              formatter: [
              `{a|${'1.23万'}}`,
              '{b|这段文本式b}'
          ].join('\n'),
      
          rich: {
             a: {
              color: '#000000',
              fontSize: 20,
              lineHeight: 32,
              fontWeight: 'bold',
            },
            b: {
              color: '#1D2129',
              fontSize: 12,
            },
          }
        },
        emphasis: {
          label: {
            show: true,
          },
        },
        labelLine: {
          show: false,
        },
        // No encode specified, by default, it is '2012'.
    }, {
        type: 'pie',
        radius: ['14%', '20%'],
        center: ['40%', '30%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
    }, {
        type: 'pie',
        radius: ['14%', '20%'],
        center: ['60%', '30%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
    }, {
        type: 'pie',
        radius: ['14%', '20%'],
        center: ['80%', '30%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
          },
        },
        labelLine: {
          show: false,
        },
    }]
};