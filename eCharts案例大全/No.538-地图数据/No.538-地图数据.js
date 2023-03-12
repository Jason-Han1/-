var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

let data = [
        {
          name: "湖北",
          value: [113.289984, 31.42,2000],
        },
        {
          name: "湖南",
          value: [112.03042, 27,200000],
        },

        {
          name: "四川",
          value: [102.112035, 30.630737,5000],
        },
        {
          name: "重庆",
          value: [108.112035, 30.630737,60000],
        },
        {
          name: "山东",
          value: [118.19, 36.22,20050],
        },
      ];

      let LableData = [
        {
          name: "湖北",
          value: [113.289984, 31.42,2000],
        },
        {
          name: "湖南",
          value: [112.03042, 27,200000],
        },
        {
          name: "四川",
          value: [102.112035, 30.630737,5000],
        },
        {
          name: "重庆",
          value: [108.112035, 30.630737,60000],
        },
        {
          name: "山东",
          value: [118.19, 36.22,20050],
        },
      ];
  var option = {
        backgroundColor:"#021640",
        geo: {
          map: 'china',
          aspectScale: 0.75, //长宽比
          zoom: 1,
          top:90,
          roam: false,
          itemStyle: {
            normal: {
              areaColor:"#d47e63",
              shadowColor:'#002666',
              shadowOffsetX: 12,
              shadowOffsetY: 16,
              // borderWidth:2,
              borderColor:"#d47e63"
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: true
              }
            }
          },
          regions: [{
            name: '南海诸岛',
            itemStyle: {
                areaColor: 'rgba(0, 10, 52, 1)',

                borderColor: 'rgba(0, 10, 52, 1)',
                normal: {
                    opacity: 0,
                    label: {
                        show: true,
                        color: "#009cc9",
                    }
                }
            },
         }],
        },
      
        visualMap: {
          //图例值控制
          min: 0,
          max: 10000,
          calculable: false,
          show: true,
          right: 50,
          // seriesIndex: 1,
          bottom: 50,
          color: ["#00eaff", "#fc9700", "#ffde00", "#ffde00", "red"],
          // inRange:{
          //   symbolSize: [10, 20]}, 
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          // 常规地图
          {
            type: 'map',
            roam: false,
            layoutSize: "90%",
            aspectScale:0.75,
            zoom: 1,
            roam: false,
            map: 'china', //使用
            top:90,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#1DE9B6'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(183,185,14)'
                    }
                }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgb(147, 235, 248,.8)',
                borderWidth: 0.2,
                
                areaColor: {
                        type: 'linear',
                        x: 0.2,
                        y: 0.8,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#002283' // 0% 处的颜色
                        },{
                            offset: 0.3,
                            color: '#011f6d' // 0% 处的颜色
                        },
                         {
                            offset: 1,
                            color: '#021640'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
              },
              emphasis: {
                    areaColor: {
                        type: 'radial',
                        x: 0.2,
                        y: 0.8,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#091739' // 0% 处的颜色
                        },
                         {
                            offset: 1,
                            color: '#0b1843'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
                    borderWidth: 1,
                    borderColor:"#f9bc90"
                }
            },
          },
          // 区域散点图
          {
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            symbolSize: 10,
            rippleEffect: {
              //坐标点动画
              period: 2,
              scale: 4,
              brushType: "fill",
            },
            label: {
              normal: {
                show: false,
                position: "right",
                formatter: "{b}",
                color: "#b3e2f2",
                fontWeight: "400",
                fontSize: 12,
              },
            },

            data: data,
            itemStyle: {
              //坐标点颜色
              normal: {
                show: false,
                color: "#ff3f3a",
                shadowBlur: 20,
                shadowColor: "#fff",
              },
              emphasis: {
                areaColor: "#f00",
              },
            },
          },
          {
            name: "lable",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin",
            symbolSize: [75, 70],
            hoverAnimation: true,
            zlevel: 2,
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#fff",
                  lineHeight: 15,
                },
                formatter(params) {
                  return params.data.value[2];
                },
              },
            },

            itemStyle: {
              normal: {
                color: "#6495ED", //标志颜色
                opacity: 0.8,
                borderColor: "#aee9fb",
                borderWidth: 0.6,
              },
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
            },
            data: LableData,
          },
        ],
      };
myChart.showLoading();
      let index = -1;
      
    $.getJSON(uploadedDataURL, function(geoJson) {
    
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    
    myChart.setOption(option,true);
});