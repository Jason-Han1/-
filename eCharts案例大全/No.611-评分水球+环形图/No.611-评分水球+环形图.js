var max = 500; //满刻度大小
var scroe = 56,scroePer=scroe/100;
var data = max * scroePer;
option = {
    backgroundColor:'#fff',
    title: {
              top: '47%',
              left: 'center',
              text: scroe + ' 分',
              textStyle: {
                  color: '#fff',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: 32
              }
          },
          series: [{
                  type: 'liquidFill',
                  itemStyle: {
                        opacity:0.8,//波浪的透明度
                        shadowBlur: 10,//波浪的阴影范围
                        shadowColor:'#FFB931'//阴影颜色
                    },
                  radius:'80%',
                  //水波
                  color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: "#FE8704"
                      },
                      {
                          offset: 1,
                          color: '#FFB931'
                      }
                  ])],
                  data: [{
                      value: scroePer,
                  }],
                  // background: '#000',
                  center: ['50%', '50%'],
                  backgroundStyle: {
                      color: '#fff'
                  },
                  label: {
                      normal: {
                          formatter: '',
                          textStyle: {
                              fontSize: 12
                          }
                      }
                  },
                  outline: {
                      itemStyle: {
                          borderColor: 'transparent',
                          borderWidth: 5
                      },
                      borderDistance: 0
                  }
              },
              //外环线
              {
                  "color": ['#FF8B00', 'transparent'],
                  "type": "pie",
                  "center": ["50%", "50%"],
                  "radius": ["80%", "82%"],
                  "hoverAnimation": false,
                  "data": [{
                          "name": "",
                          "value": data,
                          "label": {
                              "show": false,
                              "position": "center",
                              "color": "#fff",
                              "fontSize": 38,
                              "fontWeight": "bold",
                              "formatter": function(o) {
                                  return data
                              }
                          }
                      },
                       { //画剩余的刻度圆环
                          "name": "",
                          "value": max - data,
                          "label": {
                              show: false
                          },
                          labelLine: {
                              show: false
                          }
                      }
                  ]
              }
          ]
};