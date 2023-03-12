var data = [
  {
    name: '发展',
    value: 21.5,
  },
  {
    name: '生态',
    value: 28
  },
  {
    name: '开放',
    value: 45
  },
  {
    name: '结构',
    value: 78
  },
  {
    name: '创新',
    value: 84
  }
];
option = {
  tooltip: {},
  title: {
    text: 'Awesome Chart',
  },
  dataset: {
    source: data
  },
  series: [
    {
      type: 'pie',
      radius: ['40%', '80%'],
      encode: {
        tooltip: ['name', 'value'],
        value: 'value'
      },
      label: {
        show: true,
        formatter: function(params) {
          console.log('label', params)
          return params.value.name
        }
      }
    },
  ],
  graphic: {
    elements: [
      {
        type: 'group',
        left: 'center',
        top: 'center',
        children: [
          {
            type: 'text',
            id: 'text1',
            // y: 15,
            // left: 'center',
            // top: 'center',
            style: {
              text: '发展',
              font: '30px bolder',
              textAlign: 'center'
            }
          },
          {
            type: 'text',
            id: 'text2',
            // left: 'center',
            // top: 'center',
            y: 35,
            // x: -5,
            style: {
              text: '21.5',
              font: '40px bolder',
              textAlign: 'center'
            }
          } 
        ]
      }
    ]
  }
};

myChart.on('highlight', function(params) {
  console.log('高亮事件', params)
  const itemData = data[params.dataIndex]
  const { name, value } = itemData
  
  myChart.setOption({
    graphic: {
      elements: [
        {
          id: 'text1',
          style: {
            text: name,
            font: '30px bolder',
            textAlign: 'center'
          }
        },
        {
          id: 'text2',
          style: {
            text: value,
            font: '40px bolder',
            textAlign: 'center'
          }
        }
      ]
    }
  })
})
let dataIndex = 0
myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex
  })
setInterval(function() {
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex
  })
  dataIndex = dataIndex >= data.length - 1 ? 0 : (dataIndex + 1)
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex
  })
}, 2000)
