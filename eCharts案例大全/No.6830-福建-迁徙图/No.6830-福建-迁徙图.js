var uploadedDataURL = "/asset/get/s/data-1568010881871-0of0Mrx7V.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex
282 117.642193934,26.2708352794 福建省-三明市
283 118.181882949,26.6436264742 福建省-南平市
284 118.103886046,24.4892306125 福建省-厦门市
285 119.54208215,26.6565274192 福建省-宁德市
286 118.600362343,24.901652384 福建省-泉州市
287 117.676204679,24.5170647798 福建省-漳州市
288 119.330221107,26.0471254966 福建省-福州市
289 119.077730964,25.4484501367 福建省-莆田市
290 117.017996739,25.0786854335 福建省-龙岩市
并且加了pin气泡图标以示数值大小
*/
var points = [
                  {value: [117.642193934,26.2708352794],itemStyle:{color:'#4ab2e5'}}
                  , {value: [118.103886046,24.4892306125],itemStyle:{color:'#4fb6d2'}}
                  , {value: [119.54208215,26.6565274192],itemStyle:{color:'#52b9c7'}}
                  , {value: [118.600362343,24.901652384],itemStyle:{color:'#5abead'}}
                  , {value: [117.676204679,24.5170647798],itemStyle:{color:'#f34e2b'}}
                  , {value: [119.330221107,26.0471254966],itemStyle:{color:'#f56321'}}
                  , {value: [119.077730964,25.4484501367],itemStyle:{color:'#f56f1c'}}
                  , {value: [117.017996739,25.0786854335],itemStyle:{color:'#f58414'}}
                  , {value: [118.041661,27.760168]}
  ]
// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
      let index = -1;
      
$.getJSON(uploadedDataURL, function(geoJson) {
    
    echarts.registerMap('福建', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#013954',
        geo: {
            map: '福建',
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#09132c' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#274d68'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
              shadowColor:'rgb(58,115,192)',
              shadowOffsetX: 10,
              shadowOffsetY: 11
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
        },
        series: [ {
            type: 'map',
            roam: false,
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
               borderColor: 'rgb(147, 235, 248)',
                borderWidth: 1,
                areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#09132c' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#274d68'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
              },
              emphasis: {
                    areaColor: 'rgb(46,229,206)',
                //    shadowColor: 'rgb(12,25,50)',
                    borderWidth: 0.1
                }
            },
            zoom: 1.1,
       //     roam: false,
            map: '福建' //使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel:1,
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                       color:'#1DE9B6'/* function (value){ //随机颜色
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
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
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 7, //图标大小
                },
                lineStyle: {
                    normal: {
                        color:'#1DE9B6',
                        width: 1, //线条宽度
                        opacity: 0.1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: [
                    {coords: [[117.642193934,26.2708352794],[118.041661,27.760168]],lineStyle:{color:'#4ab2e5'}}
                  , {coords: [[118.103886046,24.4892306125],[118.041661,27.760168]],lineStyle:{color:'#4fb6d2'}}
                  , {coords: [[119.54208215,26.6565274192],[118.041661,27.760168]],lineStyle:{color:'#52b9c7'}}
                  , {coords: [[118.600362343,24.901652384],[118.041661,27.760168]],lineStyle:{color:'#5abead'}}
                  , {coords: [[117.676204679,24.5170647798],[118.041661,27.760168]],lineStyle:{color:'#f34e2b'}}
                  , {coords: [[119.330221107,26.0471254966],[118.041661,27.760168]],lineStyle:{color:'#f56321'}}
                  , {coords: [[119.077730964,25.4484501367],[118.041661,27.760168]],lineStyle:{color:'#f56f1c'}}
                  , {coords: [[117.017996739,25.0786854335],[118.041661,27.760168]],lineStyle:{color:'#f58414'}}
                ]
            }

        ]
    };
    myChart.setOption(option,true);
});