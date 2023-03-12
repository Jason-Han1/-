      option = {
          title: {
              show: false
          },
          legend: {
              show: false
          },
          series: [{
              top: 0,
              width: '100%',
              height: '100%',
              nodeClick: false,
              roam: false,
              type: 'treemap',
              visibleMin: 300,
              itemStyle: {
                  normal: {
                      borderColor: '#fff',
                      gapWidth: 2
                  }
              },
              data: [{
                  name: "a",
                  value: 10,
                  itemStyle: {
                      color: '#C33631'
                  },
                  children:[{
                      name: "huluwa",
                      value: 5
                  },{
                      name: "huluwa22222",
                      value: 5
                  }]
              }],
              breadcrumb: {
                  show: false
              }
          }]
      }
      myChart.on('mouseover', (params) => {
        console.log(params)          
      })