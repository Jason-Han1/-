var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";
var points = [
{value: [118.8062, 31.9208],itemStyle:{color:'red'},name:"浙江能源"}
, {value: [119.09648,40.058726],itemStyle:{color:'red'},name:"北方港"},
{value: [100.846362,55.254671],itemStyle:{color:'red'},name:"俄罗斯"}
];

var data =  [
            {coords: [[118.8062, 31.9208],[119.09648,40.058726]],lineStyle:{color:'yellow'}}
          , {coords: [[118.8062, 31.9208],[100.846362,55.254671]],lineStyle:{color:'yellow'}}
         ]
      let index = -1;
var imgPath = 'image://https://s4.aconvert.com/convert/p3r68-cdx67/asn8w-thtcm.svg';     
$.getJSON(uploadedDataURL, function(geoJson) {
  
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    option = {

       backgroundColor:'#031439',
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
                    period: 6,
                    scale: 3,
                    // brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                            formatter: function(params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 16,
                    position: 'right',
                    offset: [15, 0],
                    color: '#fff',
                    show: true
                    },
                },
                itemStyle: {
                    normal: {
                       color:'#fff',
                        shadowBlur: 20,
                 
                    }
                },
                symbolSize: 10,
                data: points
            }, //地图线的动画效果
          {
                type: 'lines',
                zlevel: 2,
                
                effect: {
                    show: true,
                    period: 8, //箭头指向速度，值越小速度越快
                    trailLength:0, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'triangle', //箭头图标
                    symbolSize: [30,30] //图标大小
                },
                lineStyle: {
                    normal: {
                        color:'#1DE9B6',
                        width: 0, //线条宽度
                        opacity: 0, //尾迹线条透明度
                        curveness: -2 //尾迹线条曲直度
                    }
                },
                data:data
            },       {
                type: 'lines',
                zlevel: 3,
                effect: {

                    show: true,
                    period: 8, //箭头指向速度，值越小速度越快
                    trailLength:0.7, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolOffset: ['34%', '-50%'],
                    symbolSize:[10,10] //图标大小
                },
                lineStyle: {
                    normal: {
                        color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255 255 0 ,1)'
                        },{
                            offset: 0.5,
                            color: 'rgba(255 255 0 ,0.2)'
                        }, {
                            offset:1,
                            color: 'rgba(255 255 0 ,0)'
                        }]),
                        width: 0.3, //线条宽度
                        opacity: 0.3, //尾迹线条透明度
                        curveness: -2 //尾迹线条曲直度
                    }
                },
                data:data
            },

        ]
    };
    myChart.setOption(option,true);
});