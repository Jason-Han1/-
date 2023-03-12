
  const colors = [
    {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#7BA9E5'
      },
      {
        offset: 1,
        color: '#4570C6'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#7EBEFF'
      },

      {
        offset: 1,
        color: '#0015FF'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#A7FC8C'
      },

      {
        offset: 1,
        color: '#4BC019'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#FCD18C'
      },
      {
        offset: 1,
        color: '#F7A453'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#99EBC9'
      },
      {
        offset: 1,
        color: '#60D298'
      }
      ]
    },
    {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#289DF5'
      },
      {
        offset: 1,
        color: '#17E9FD'
      }
      ]
    },
    {
      type: 'linear',
      x: 1,
      y: 0,
      x2: 0,
      y2: 0,
      colorStops: [{
        offset: 0,
        color: '#4FC3B2'
      },
      {
        offset: 1,
        color: '#5AD1BD'
      }
      ]
    }
  ];
let names = ["居住", "生产", "经营", "办公", "仓储", "其他"];
let data1 = [1114, 444, 501, 468, 478, 431]
//  var datas = [];
//   datas = names.map((item, index) => {
//     return {
//       name: item,
//       value: data[index]
//     };
//   });

let list = []
let total = 0
for (let i in data1) {
    total += data1[i]
}

let placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};

for (let i in data1) {
    list.push({
        value: data1[i],
        name: names[i],
        itemStyle: {
            normal: {
                borderWidth: 5,
                borderColor: colors[i],
                color: colors[i]
            }
        }
    }, {
        value: total/30,
        name: '',
        itemStyle: placeHolderStyle,
        tooltip:{
            show:false
        }
    })
}





option = {
    backgroundColor: '#04243E',
      legend: {
      top: '70%',
      width: '90%',
      height: 40,
      itemWidth: 12,
      itemHeight: 12,
      icon: 'path://M511.986407 0a511.971411 511.971411 0 1 0 511.971411 511.903904A511.903904 511.903904 0 0 0 511.986407 0z m0 898.987774a387.08387 387.08387 0 1 1 387.08387-387.08387 387.08387 387.08387 0 0 1-387.08387 387.08387z',
      orient: 'vertical',
      textStyle: {
        color: '#384259'
      },
    //   formatter: (parmas) => {
    //     for (let i = 0; i < datas.length; i++) {
    //       if (parmas === datas[i].name) {
    //         return parmas + datas[i].value;
    //       }
    //     }
    //   }

    },
       tooltip: {
      show: true,
      trigger: 'item',
      formatter: (parmas) => {
        console.log(parmas);
        return parmas.name + ' ' + (parmas.value / total * 100).toFixed(0) + '%' + ' ' + parmas.value;
      },
      backgroundColor: 'rgba(00,00,00,0.6)'
    },
    series: [
      {
        name: '',
        type: 'pie',
        clockWise: true,
        startAngle: '90',
        center: ['50%', '35%'],
        radius: ['50%', '52%'],
        hoverAnimation: true,
        label: {
          show: false

        },
        data: list,

        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
          return idx * 50;
        }

      },
      {
        name: '',
        type: 'pie',
        center: ['50%', '35%'],
        radius: ['49%', '49%'],
        itemStyle: {
          color: 'transparant'
        },
        tooltip: {
          show: false
        },
        startAngle: '90',
        // 中间数据
        data: [{
          value: total,
          name: '',
          label: {
            normal: {
              show: true,
              formatter: '{c|{c}}{b|总}',
              rich: {
                c: {
                  color: '#384259',
                  fontSize: 18,
                  lineHeight: 5
                },
                b: {
                  color: '#838DA3',
                  fontSize: 12,
                  lineHeight: 5
                }
              },
              textStyle: {
                fontSize: 10,
                fontWeight: 'bold'
              },
              position: 'center'
            }
          }
        }]
      }
    ]
};