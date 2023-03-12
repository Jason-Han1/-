var uploadedDataURL = '/asset/get/s/data-1482909813213-Hy6u_kbrl.json';

var points = [
                  {value: [113.97946,30.435],itemStyle:{color:'#4ab2e5'}}
                  , {value: [114.665299, 30.862201]}
                  , {value: [114.361743, 31.250257]}
                  , {value: [114.34253,30.49984],itemStyle:{color:'#5abead'}}
                  , {value: [114.361743, 30.348966],itemStyle:{color:'#ffff00'}}
                   , {value: [114.324949, 30.16529],itemStyle:{color:'#f34e2b'}}
                  , {value: [114.738438,30.054312],itemStyle:{color:'#4ab2e5'}}
                  , {value: [115.1585,30.158806]}
                  , {value: [115.35488,29.79122]}
                  , {value: [114.981345,29.886518]}
  ];
myChart.showLoading();
      let index = -1;
      
$.getJSON(uploadedDataURL, function(geoJson) {
    
    echarts.registerMap('湖北', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#013954',
        geo: {
            map: '湖北',
          aspectScale: 0.75, /*长宽比*/
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
                            color: '#09132c' /* 0% 处的颜色*/
                        }, {
                            offset: 1,
                            color: '#274d68'  /* 100% 处的颜色*/
                        }],
                        globalCoord: true /* 缺省为 false*/
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
                            color: '#09132c' /* 0% 处的颜色*/
                        }, {
                            offset: 1,
                            color: '#274d68'  /* 100% 处的颜色*/
                        }],
                        globalCoord: true /* 缺省为 false*/
                    },
              },
              emphasis: {
                    areaColor: 'rgb(46,229,206)',
                /*    shadowColor: 'rgb(12,25,50)',*/
                    borderWidth: 0.1
                }
            },
            zoom: 1.1,
       /*     roam: false,*/
            map: '湖北' /*使用
            /* data: this.difficultData /*热力图数据   不同区域 不同的底色*/
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
                       color:'#1DE9B6'/* function (value){ 随机颜色
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                symbolSize: 4,
                data: points
            }, /*地图线的动画效果*/
          {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 3, /*箭头指向速度，值越小速度越快*/
                    trailLength: 0.2, /*特效尾迹长度[0,1]值越大，尾迹越长重*/
                    symbol: 'arrow', /*箭头图标*/
                    symbolSize: 2, /*图标大小*/
                },
                lineStyle: {
                    normal: {
                        color:'#1DE9B6',
                        width: 1, /*线条宽度*/
                        opacity: 0.1, /*尾迹线条透明度*/
                        curveness: .3 /*尾迹线条曲直度*/
                    }
                },
                data: [
                    {coords: [[113.97946,30.435],[114.34253,30.49984]]}
                  , {coords: [[113.97946,30.435],[114.665299, 30.862201]]}
                  , {coords: [[113.97946,30.435],[114.361743, 31.250257 ]]}
                  , {coords: [[113.97946,30.435],[114.361743, 30.348966 ]],lineStyle:{color:'#ffff00'}}
                  , {coords: [[113.97946,30.435],[114.324949, 30.16529 ]],lineStyle:{color:'#f34e2b'}}
                  , {coords: [[114.738438,30.054312],[115.1585,30.158806]]}
                  , {coords: [[114.738438,30.054312],[115.35488,29.79122]]}
                  , {coords: [[114.738438,30.054312],[114.981345,29.886518]]}
                ]
            }

        ]
    };
    myChart.setOption(option,true);
});