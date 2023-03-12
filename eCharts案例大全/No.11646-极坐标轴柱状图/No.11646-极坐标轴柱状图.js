option = {
    backgroundColor: '#f4f2e3',
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
        ]
    },
    polar: {
        radius: [300]
        // radius: [300, 50], // 这里我想控制内半径大小
   },
  angleAxis: {
    show: false,
    min: function (value) {
      return value.min >= 1 ? value.min - value.max / 3 : 0
    },
    max: function (value) {
      return value.max * 4 / 3;
    }
  },
  radiusAxis: {
    type: 'category',
    axisLabel: {
        show: true,
      interval: 0,
      color: "#333",
      fontSize: 14
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false,
      alignWithLabel: true
    },
    splitLine: {
      show: true,
      color: 'red'
    }
  },
    series: [
        {
            type: 'bar',
            barWidth: 10,
            barGap: '50%',
            barCategoryGap: '60%',
            coordinateSystem: 'polar',
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
                color: function(params) {
                    return ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'][params.dataIndex]
                }
            },
            encode: {
                radius: 'product',
                angle: '2016'
            }
            
        }
    ]
};
