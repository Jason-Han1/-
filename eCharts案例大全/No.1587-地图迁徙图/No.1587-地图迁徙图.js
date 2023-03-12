var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
var points = [
{value: [118.8062, 31.9208],itemStyle:{color:'red'}}
, {value: [119.4543, 25.9222]}
  ]
// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
      let index = -1;
      
$.getJSON(uploadedDataURL, function(geoJson) {
    
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#013954',
 
        geo: {
        map: 'china',
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#15e3c9',
              shadowColor:'rgba(0,243,255,0.6)',
              shadowOffsetX: 9,
              shadowOffsetY: 9
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
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
                        show: false,
                        color: "#009cc9",
                    }
                }
            },


        }],
        },
        series: [ {
            type: 'map',
            roam: false,
            label: {
                normal: {
                    show: false,
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
               borderColor: 'rgb(18 126 169 / 58%)',
                borderWidth: 1,
                areaColor: '#15e3c9',
              },
              emphasis: {
                    areaColor: 'rgb(46,229,206)',
                //    shadowColor: 'rgb(12,25,50)',
                    borderWidth: 0.1
                }
            },
            zoom: 1.1,
            map: 'china' //使用
          },{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel:1,
                rippleEffect: {
                    period: 15,
                    scale: 2,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#333',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                       color:'#1DE9B6',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                symbolSize: 12,
                data: points
            }, //地图线的动画效果
          {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 8, //箭头指向速度，值越小速度越快
                    trailLength:0.9, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 15, //图标大小
                },
                lineStyle: {
                    normal: {
                        color:'#1DE9B6',
                        width: 0, //线条宽度
                        opacity: 0, //尾迹线条透明度
                        curveness: -1 //尾迹线条曲直度
                    }
                },
                data: [
                    {coords: [[118.8062, 31.9208],[118.8062, 31.9208]],lineStyle:{color:'yellow'}}
                  , {coords: [[118.8062, 31.9208],[127.9688, 45.368]],lineStyle:{color:'yellow'}}
                  , {coords: [[118.8062, 31.9208],[102.9199, 25.46639]],lineStyle:{color:'yellow'}}
                ]
            }

        ]
    };
    myChart.setOption(option,true);
});