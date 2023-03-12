option = {
    backgroundColor: '#FDF1E5',
    animation: false,
  series: [{
    type: "pie",
    data: [{
        value: 10,
        name: "37万\n保障缺口",
        itemStyle: {
          color: '#FFD260'
      }
    }, {
      value: 50,
      name: "37万\n保障缺口",
      itemStyle: {
          color: '#5AC2EF'
      },
    }],
    radius: ["50%", "75%"],
    itemStyle: {
        normal: {
            color: 'transparent',
            label: {
                padding: [-30, 0, 0, 0],
            },
            labelLine: {
                showAbove: true,
                length: 30,
                length2: 0,
                show: true,
                lineStyle: {
                    color: 'rgba(102, 121, 157, 1)'
                }
            }
        }
    }
  },
  {
    type: 'pie',
    center: ['50%', '50%'],
    radius: ['58%', '50%'],
    hoverAnimation: false,
    data: [
        {
            name: '',
            value: 0,
            label: {
                normal: {
                    formatter: function (params) {
                        return '理想保障\n60万';
                    },
                    position: 'center',
                    show: true,
                    textStyle: {
                        fontSize: '28',
                        fontWeight: '600',
                        color: '#333',
                    },
                },
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                color: '#333',
                opacity: 0.33,
            },
            emphasis: {
                labelLine: {
                    show: false,
                },
                itemStyle: {
                    color: '#CCAC5D',
                },
            },
        }
    ],
    },
  ]
}