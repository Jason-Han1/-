var uploadedDataURL = "/asset/get/s/data-1528971808162-BkOXf61WX.json";

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
var points = [
                  {value: [118.8062, 31.9208],itemStyle:{color:'#e5761d'}}
                  , {value: [127.9688, 45.368],itemStyle:{color:'#e5761d'}}
                  , {value: [110.3467, 41.4899],itemStyle:{color:'#e5761d'}}
                  , {value: [125.8154, 44.2584],itemStyle:{color:'#e5761d'}}
                  , {value: [116.4551, 40.2539],itemStyle:{color:'#e5761d'}}
                  , {value: [123.1238, 42.1216],itemStyle:{color:'#e5761d'}}
                  , {value: [114.4995, 38.1006],itemStyle:{color:'#f56f1c'}}
                  , {value: [117.4219, 39.4189],itemStyle:{color:'#f58414'}}
                  , {value: [112.3352, 37.9413],itemStyle:{color:'#f58f0e'}}
                  , {value: [109.1162, 34.2004],itemStyle:{color:'#f5a305'}}
                  , {value: [103.5901, 36.3043],itemStyle:{color:'#e7ab0b'}}
                  , {value: [106.3586, 38.1775],itemStyle:{color:'#dfae10'}}
                  , {value: [101.4038, 36.8207],itemStyle:{color:'#d5b314'}}
                  , {value: [103.9526, 30.7617],itemStyle:{color:'#c1bb1f'}}
                  , {value: [108.384366, 30.439702],itemStyle:{color:'#b9be23'}}
                  , {value: [113.0823, 28.2568],itemStyle:{color:'#a6c62c'}}
                  , {value: [102.9199, 25.46639],itemStyle:{color:'#96cc34'}}
                  , {value: [119.4543, 25.9222]}
  ]
// var uploadedDataURL = "/asset/get/s/data-1482909892121-BJ3auk-Se.json";
myChart.showLoading();
      let index = -1;
      
      let fillColor='rgba(4,20,73,0.7)'//'rgba(4,20,73,0.35)';
let innerGrow='rgba(20,255,197,0.33)';
let strokeColor='#1b60fb';
let provincialColor='rgba(31,20,252,0.2)';
      
$.getJSON(uploadedDataURL, function(geoJson) {
    
    echarts.registerMap('china', geoJson);
    myChart.hideLoading();
    option = {
    backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [ {
        offset: 0, color: '#19365a' // 100% 处的颜色
    }, {
        offset: 1, color: '#112341' // 100% 处的颜色
    }
    ],
    global: false // 缺省为 false
},
 geo: {
        show: true,
        map: 'china',
        label: {
            normal: {
                // show: true,
                // color:'#fff'
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                // color:'red',
                // areaColor: '#fff',
                 areaColor: 'transparent',
                    // areaColor: '#fff',
                borderWidth: 3,//设置外层边框
                borderColor:strokeColor,
                //   borderColor:'transparent',
                shadowColor: 'rgba(56,192,255,0.3)',
                shadowBlur: 50
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
            roam: true,
            geoIndex: 1,
            aspectScale: 0.75, //长宽比
            label: {
                normal: {
                    // show: false,
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                     show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },

            itemStyle: {
              normal: {
              borderColor: provincialColor,
            // borderColor:'transparent',
                borderWidth: 1,
                areaColor: fillColor,

              },
              emphasis: {
                    areaColor: '#2165f0',
                //    shadowColor: 'rgb(12,25,50)',
                    borderWidth: 1,
                    borderColor:'#fff'
                }
            },
            zoom: 1,
       //     roam: false,
            map: 'china', //使用
            data: [{selected:true,name:"四川"}] //热力图数据   不同区域 不同的底色
          },{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel:1,
                rippleEffect: {
                    period: 5,
                    scale: 6,
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                    },
                },
                itemStyle: {
                    normal: {
                        color:"transparent",
                    //   color:'#e5761d'/* function (value){ //随机颜色
//  return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
//  }*/,
                        shadowBlur: 10,
                        shadowColor: '#fff'
                    }
                },
                symbolSize: 6,
                data: points
            }, //地图线的动画效果
          {
                type: 'lines',
                zlevel: 3,
                effect: {//飞行的箭头
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.7, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 3, //图标大小
                    color: 'red',
                },
                lineStyle: {
                    normal: {
                        width: 0,//隐藏线条
                        curveness: 0.2//尾迹线条曲直度
                    }
                },
                data: [
                    {coords: [[118.8062, 31.9208],[119.4543, 25.9222]]}
                  , {coords: [[127.9688, 45.368],[119.4543, 25.9222]]}
                  , {coords: [[110.3467, 41.4899],[119.4543, 25.9222]],}
                  , {coords: [[125.8154, 44.2584],[119.4543, 25.9222]]}
                  , {coords: [[116.4551, 40.2539],[119.4543, 25.9222]]}
                  , {coords: [[123.1238, 42.1216],[119.4543, 25.9222]]}
                  , {coords: [[114.4995, 38.1006],[119.4543, 25.9222]]}
                  , {coords: [[117.4219, 39.4189],[119.4543, 25.9222]]}
                  , {coords: [[112.3352, 37.9413],[119.4543, 25.9222]]}
                  , {coords: [[109.1162, 34.2004],[119.4543, 25.9222]]}
                  , {coords: [[103.5901, 36.3043],[119.4543, 25.9222]]}
                  , {coords: [[106.3586, 38.1775],[119.4543, 25.9222]]}
                  , {coords: [[101.4038, 36.8207],[119.4543, 25.9222]]}
                  , {coords: [[103.9526, 30.7617],[119.4543, 25.9222]]}
                  , {coords: [[108.384366, 30.439702],[119.4543, 25.9222]]}
                  , {coords: [[113.0823, 28.2568],[119.4543, 25.9222]]}
                  , {coords: [[102.9199, 25.46639],[119.4543, 25.9222]]}
                ]
            },
                {
        name: ' Top10',
        type: 'lines',
        zlevel: 2,
        symbolSize: 10,
        effect: {//禁止动态效果
            show: false,
            period: 6,
            trailLength: 0,
        },
        //蓝色线条
        lineStyle: {
            color: "rgba(31,20,252,1)",
            width: 1,
            opacity: 0.8,
            curveness: 0.2
        },
        data:[
                    {coords: [[118.8062, 31.9208],[119.4543, 25.9222]]}
                  , {coords: [[127.9688, 45.368],[119.4543, 25.9222]]}
                  , {coords: [[110.3467, 41.4899],[119.4543, 25.9222]],}
                  , {coords: [[125.8154, 44.2584],[119.4543, 25.9222]]}
                  , {coords: [[116.4551, 40.2539],[119.4543, 25.9222]]}
                  , {coords: [[123.1238, 42.1216],[119.4543, 25.9222]]}
                  , {coords: [[114.4995, 38.1006],[119.4543, 25.9222]]}
                  , {coords: [[117.4219, 39.4189],[119.4543, 25.9222]]}
                  , {coords: [[112.3352, 37.9413],[119.4543, 25.9222]]}
                  , {coords: [[109.1162, 34.2004],[119.4543, 25.9222]]}
                  , {coords: [[103.5901, 36.3043],[119.4543, 25.9222]]}
                  , {coords: [[106.3586, 38.1775],[119.4543, 25.9222]]}
                  , {coords: [[101.4038, 36.8207],[119.4543, 25.9222]]}
                  , {coords: [[103.9526, 30.7617],[119.4543, 25.9222]]}
                  , {coords: [[108.384366, 30.439702],[119.4543, 25.9222]]}
                  , {coords: [[113.0823, 28.2568],[119.4543, 25.9222]]}
                  , {coords: [[102.9199, 25.46639],[119.4543, 25.9222]]}
                ]
    },

        ]
    };
    myChart.setOption(option,true);
    
        //捕捉georoam事件，使下层的geo随着上层的geo一起缩放拖曳
myChart.on('georoam',function(params){
    var option = myChart.getOption();//获得option对象
	if(params.zoom!=null&&params.zoom!=undefined){ //捕捉到缩放时
	    option.geo[0].zoom=option.series[0].zoom;//下层geo的缩放等级跟着上层的geo一起改变
	    option.geo[0].center=option.series[0].center;//下层的geo的中心位置随着上层geo一起改变
	}else{//捕捉到拖曳时

	    option.geo[0].center=option.series[0].center;//下层的geo的中心位置随着上层geo一起改变
	}
	myChart.setOption(option);//设置option
});


});