option ={
  tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
  },
  legend: [{
      icon: "square",
      itemGap: 10,
      itemWidth: 10,
      padding: 15,
      orient: 'vertical',
      right: '10%',
      top:'20%',
      textStyle: {
        color: '#fff',
        fontSize: 12
      },
      data: ['配套','办公','食堂','住宿','汽修']
  },{
      icon: "square",
      itemGap: 10,
      itemWidth: 10,
      padding: 15,
      orient: 'vertical',
      right: '30%',
      top: '20%',
      textStyle: {
       color: '#fff',
       fontSize: 12
      },
      data: ['仓库','月台','库区','雨棚']
  }],
  series: [
      {
          type: 'pie',
          radius: [0, '35%'],
          center: ['20%','55%'],
          label: {
              position: 'inner'
          },
          labelLine: {
              show: false
          },
          data: [
              {value: 1600, name: '配套'},
              {value: 1200, name: '仓库'}
          ],
          itemStyle: {
            color: function(params) {
              var colorList = ['#320b5a', '#7b6bac', '#54338e', '#442078'];
              return colorList[params.dataIndex]  
            }
          }
      },
      {
          type: 'pie',
          radius: ['45%', '60%'],
          center: ['20%','55%'],
          label: {
              position: 'inner',
              show: false
          },
          data: [
              {value: 400, name: '办公'},
              {value: 400, name: '食堂'},
              {value: 400, name: '住宿'},
              {value: 400, name: '汽修'},
              {value: 400, name: '月台'},
              {value: 400, name: '库区'},
              {value: 400, name: '雨棚'},
          ],
          itemStyle: {
              color: function(params) {
                var colorList = ['#a96f2f', '#d76a32', '#b32c7b', '#4f5091', '#673d87', '#3b96b3', '#3f8b5c', '#f4e451', '#e5903d'];
                return colorList[params.dataIndex]  
              }
          }
      }
  ]
}