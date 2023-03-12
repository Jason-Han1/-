  var uploadedDataURL = "/asset/get/s/data-1483664927969-r1dX0P2Sl.json";

  myChart.showLoading();
  $.get(uploadedDataURL, function(chinaJson) {
      echarts.registerMap('河南', chinaJson);
      myChart.hideLoading();
      myChart.setOption(option = {

         backgroundColor:"#fff",
          visualMap: {
              y: 'center',
              x: '7%',
              min: 10,
              max: 50,
              text: ['High', 'Low'],

              inRange: {
                  color: ['#fff7fb', '#ece7f2', '#d0d1e6','#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858', ],
              },

          },
          series: [{
              type: 'map',
              map: '河南',
              selectedMode: 'single',
              left: '30%',
              right: '30%',
              top: '20%',
              itemStyle: {
                  normal: {

                      borderColor: "#000"
                  },
                  emphasis: {
                      label: {
                          show: true
                      }
                  }
              },
              data: [{
                  name: '郑州市',
                  value: 12
              }, {
                  name: '洛阳市',
                  value: 10
              }, {
                  name: '开封市',
                  value: 20
              }, {
                  name: '信阳市',
                  value: 30
              }, {
                  name: '驻马店市',
                  value: 20
              }, {
                  name: '南阳市',
                  value: 45
              }, {
                  name: '周口市',
                  value: 15
              }, {
                  name: '许昌市',
                  value: 25
              }, {
                  name: '平顶山市',
                  value: 22
              }, {
                  name: '新乡市',
                  value: 30
              }, {
                  name: '漯河市',
                  value: 5
              }, {
                  name: '商丘市',
                  value: 35
              }, {
                  name: '三门峡市',
                  value: 35
              }, {
                  name: '济源市',
                  value: 35
              }, {
                  name: '焦作市',
                  value: 23
              }, {
                  name: '安阳市',
                  value: 45
              }, {
                  name: '鹤壁市',
                  value: 35
              }, {
                  name: '濮阳市',
                  value: 50
              }, {
                  name: '开封市',
                  value: 24
              }]



          }]
      });
  });