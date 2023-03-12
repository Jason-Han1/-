var uploadedDataURL = "/asset/get/s/data-1576205687024-qrBjXoL5.json";

// 点击的地图块
var clickMod = new Set()
// 点击的地图块的名字
var clickModName = []
var flyDataPushed = false

$.get(uploadedDataURL, function(geoJson) {
    echarts.registerMap('zhejiang', geoJson);
    // myChart.setOption(option);

    var geoCoordMap = {
        '杭州市': [119.553576, 29.987459],
        '湖州市': [120.102398, 30.667198],
        '嘉兴市': [120.750865, 30.462653],
        '绍兴市': [120.582112, 29.697117],
        '宁波市': [121.549792, 29.668388],
        '舟山市': [122.106863, 30.216028],
        '衢州市': [118.37263, 29.041708],
        '金华市': [120.149506, 29.089524],
        '台州市': [121.428599, 28.861378],
        '丽水市': [119.921786, 28.251993],
        '温州市': [120.672111, 28.200575],
    }
    var data = [{
            name: '杭州市',
            value: 99
        },
        {
            name: '湖州市',
            value: 39
        },
        {
            name: '嘉兴市',
            value: 52
        },
        {
            name: '绍兴市',
            value: 29
        },
        {
            name: '宁波市',
            value: 89
        },
        {
            name: '舟山市',
            value: 52
        },
        {
            name: '衢州市',
            value: 9
        },
        {
            name: '金华市',
            value: 32
        },
        {
            name: '台州市',
            value: 99
        },
        {
            name: '丽水市',
            value: 39
        },
        {
            name: '温州市',
            value: 80
        },
    ];
    var data11 = [{
            name: '杭州市',
            value: 5
        },
        {
            name: '湖州市',
            value: 5
        },
        {
            name: '嘉兴市',
            value: 5
        },
        {
            name: '绍兴市',
            value: 5
        },
        {
            name: '宁波市',
            value: 5
        },
        {
            name: '舟山市',
            value: 5
        },
        {
            name: '衢州市',
            value: 5
        },
        {
            name: '金华市',
            value: 5
        },
        {
            name: '台州市',
            value: 5
        },
        {
            name: '丽水市',
            value: 5
        },
        {
            name: '温州市',
            value: 5
        },
    ]
    var goData = [
        [{
            name: '杭州市'
        }, {
            id: 1,
            name: '温州市',
            value: 99
        }],
        // [{name: '济南市'},{id: 1,name: '青岛市',value: 160}],
        // [{name: '济南市'},{id: 1,name: '烟台市',value:300}]
        //  [{name:'蓟县'}, {name:'宁河',value:95}],
    ];
    //值控制圆点大小
    var backData = [
        [{
            name: '温州市'
        }, {
            id: 2,
            name: '杭州市',
            value: 200
        }],
        // [{name: '青岛市'}, { id: 2,name: '济南市',value: 200}],
        //[{name: '烟台市'}, { id: 2,name: '济南市',value: 100}]
    ];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    // var planePath = 'path://M15.1,15.00625 L7.6,15.00625 C3.4,15.00625 0.1,11.60625 0.1,7.50625 C0.1,3.40625 3.5,0.00625 7.6,0.00625 C11.7,0.00625 15.1,3.40625 15.1,7.50625 L15.1,15.00625 Z M7.5,1.90625 C4.5,1.90625 2,4.40625 2,7.40625 C2,10.40625 4.5,12.90625 7.5,12.90625 L13,12.90625 L13,7.40625 C13.1,4.40625 10.6,1.90625 7.5,1.90625 Z M24.5,15.00625 L17,15.00625 L17,7.50625 C17,3.30625 20.4,0.00625 24.5,0.00625 C28.6,0.00625 32,3.40625 32,7.50625 C32,11.60625 28.6,15.00625 24.5,15.00625 Z M7.5,31.90625 C3.3,31.90625 0,28.50625 0,24.40625 C0,20.30625 3.4,16.90625 7.5,16.90625 L15,16.90625 L15,24.40625 C15.1,28.50625 11.7,31.90625 7.5,31.90625 Z M24.5,31.90625 C20.3,31.90625 17,28.50625 17,24.40625 L17,16.90625 L24.5,16.90625 C28.7,16.90625 32,20.30625 32,24.40625 C32,28.50625 28.6,31.90625 24.5,31.90625 Z';
    var arcAngle = function(data) {
        var j, k;
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            if (dataItem[1].id == 1) {
                j = 0.2;
                return j;
            } else if (dataItem[1].id == 2) {
                k = -0.2;
                return k;
            }
        }
    }
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    visualMap: false
                });
            }
        }
        return res;
    };
    var convertData_line = function(data) {
        var res = [];
        for (let i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (dataItem[1].id == 1) {
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                    }, {
                        coord: toCoord,
                        value: dataItem[1].value //线条颜色
                    }]);
                }
            } else if (dataItem[1].id == 2) {
                if (fromCoord && toCoord) {
                    res.push([{
                        coord: fromCoord,
                    }, {
                        coord: toCoord
                    }]);
                }
            }
        }
        return res;
    };
    var series = [
        {
          // type: 'effectScatter',
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 9,
          //波纹效果
          // rippleEffect: {
          //   period: 2,
          //   brushType: 'stroke',
          //   scale: 3
          // },
          // label: {
          //   normal: {
          //     show: true,
          //     color: '#fff',
          //     position: 'right',
          //     formatter: '{b}'
          //   }
          // },
          //终点形象(散点图标)
          symbol: 'pin',
          // symbol: 'path://M15.1,15.00625 L7.6,15.00625 C3.4,15.00625 0.1,11.60625 0.1,7.50625 C0.1,3.40625 3.5,0.00625 7.6,0.00625 C11.7,0.00625 15.1,3.40625 15.1,7.50625 L15.1,15.00625 Z M7.5,1.90625 C4.5,1.90625 2,4.40625 2,7.40625 C2,10.40625 4.5,12.90625 7.5,12.90625 L13,12.90625 L13,7.40625 C13.1,4.40625 10.6,1.90625 7.5,1.90625 Z M24.5,15.00625 L17,15.00625 L17,7.50625 C17,3.30625 20.4,0.00625 24.5,0.00625 C28.6,0.00625 32,3.40625 32,7.50625 C32,11.60625 28.6,15.00625 24.5,15.00625 Z M7.5,31.90625 C3.3,31.90625 0,28.50625 0,24.40625 C0,20.30625 3.4,16.90625 7.5,16.90625 L15,16.90625 L15,24.40625 C15.1,28.50625 11.7,31.90625 7.5,31.90625 Z M24.5,31.90625 C20.3,31.90625 17,28.50625 17,24.40625 L17,16.90625 L24.5,16.90625 C28.7,16.90625 32,20.30625 32,24.40625 C32,28.50625 28.6,31.90625 24.5,31.90625 Z',
          //圆点大小
          symbolSize: function(val) {
            return val[2] / 2;
          },
          label: {
            normal: {
              show: true,
              // show: false,
              textStyle: {
                color: '#fff',
                fontSize: 9,
              },
              formatter: function(params) {
                return params.value[2]
              }
            }
          },
          itemStyle: {
            normal: {
              show: true,
              color: '#F62157'
            }
          },
          data: convertData(data)
        },
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 9,
          data: convertData(data),
          symbolSize: function (val) {
            return 0.1;
          },
          label: {
            normal: {
              formatter: '{b}',
              // formatter: 'b',
              position: 'right',
              show: true
            },
            emphasis: {
              show: true
            }
          },
          itemStyle: {
            normal: {
              color: '#05C3F9'
            }
          },
        },
        {
          type: 'map',
          map: 'zhejiang',
          data: data11,
          zlevel: 3,
          // aspectScale:1,//保持原始比例
          zoom: 1.24,
          roam: false,
          label: {
            show:true,
            normal: {
              show: false,
              color:"#fff",
            },
            emphasis: {
              show: true,
              fontSize:16,
              color:"#fff"
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {//鼠标移入高亮显颜色
              areaColor: '#f46d43'
            }
          }
        }
      ];
    // [
    //     ['1', goData],
    //     ['2', backData]
    // ].forEach(function(item, i) {
    //     series.push({
    //         name: item[0],
    //         type: 'lines',
    //         zlevel: 2,
    //         //线特效配置
    //         effect: {
    //             show: true,
    //             period: 6, // 运行时间（s）
    //             trailLength: 0, // 拖影
    //             symbol: planePath, //标记类型
    //             symbolSize: 10
    //         },
    //         lineStyle: {
    //             normal: {
    //                 width: 1,
    //                 opacity: 0.4,
    //                 // curveness: arcAngle(item[1]), //弧线角度
    //                 curveness: 0.2, //弧线角度
    //                 color: '#fff' // 迁移线颜色
    //             }
    //         },
    //         data: convertData_line(item[1])
    //     });
    // });
    option = {
        dataRange: {
            show: false,
            x: 'left',
            y: 'bottom',
            splitList: [{
                    start: 5,
                    end: 5,
                    color: 'rgba(255,255,255,0.1)'
                }, //当值为5时，区域背景
                {
                    start: 10,
                    end: 10,
                    color: '#ff6300'
                }, //当值为10时，区域背景
                {
                    start: 15,
                    end: 15,
                    color: '#ccc'
                }, //当值为15时，区域背景
            ],
        },
        backgroundColor: '#404a59', //#154e90
        //   title: {
        //   text: '迁徙',
        //   subtext: '路线',
        //   left: 'center',
        //   textStyle: {
        //     color: '#fff'
        //   },
        //   x: 'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{b}"
        },
        //线颜色及飞行轨道颜色
        visualMap: {
            show: false,
            min: 0,
            max: 300,
            color: ['#02e817', '#e80202', '#0233e8']
        },
        //地图相关设置
        geo: {
            map: 'zhejiang',
            //视角缩放比例
            zoom: 1.24,
            //显示文本样式
            label: {
                normal: {
                    show: false,
                    // formatter: '{b}',
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            //鼠标缩放和平移
            roam: true,
            // regions: [      //对不同的区块进行着色
            //   {
            //     name: '杭州市', //区块名称
            //     itemStyle: {
            //       normal: {
            //         areaColor: '#fbd8f3'
            //       }
            //     }
            //   },{
            //     name: '温州市',
            //     itemStyle: {
            //       normal: {
            //         areaColor: '#fcc8b8'
            //       }
            //     }
            // },{
            //   name: '宁波市',
            //   itemStyle: {
            //     normal: {
            //       areaColor: '#2b97df'
            //     }
            //   }
            // }],
            itemStyle: {
                normal: {
                    // color: '#ddd',
                    borderColor: 'rgba(147, 235, 248, 1)',
                    // borderColor: 'red',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.8,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(175,238,238, 0)', // 0% 处的颜色
                            // color: 'red',
                        }, {
                            offset: 1,
                            color: 'rgba(	47,79,79, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    // shadowColor: 'red',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    // areaColor: 'red',
                    borderWidth: 0
                }
            }
        },
        series: series
    };
    // let data = []
    // renderMap('zhejiang', data)
    //   console.log(option)
    // option.series.push({
    //     type: 'map',
    //     map: 'zhejiang'
    //   })
    myChart.setOption(option);

    myChart.on('click', (params) => {
        for (let i = 0; i < data11.length; i++) {
            if (params.name == data11[i].name) {
                data11[i].value = 10;
                clickMod.add(params.name)
            }
        }
        if (clickMod.size > 2) {
            for (let i = 0; i < data11.length; i++) {
                data11[i].value = 5;
                clickMod.clear()
            }
            if (flyDataPushed) {
                series.pop()
                flyDataPushed = false
            }
        }
        // console.log(this.clickMod)
        // console.log(this.clickMod)
        clickModName = []
        for (let item of clickMod.values()) {
            clickModName.push(item)
        }
        // series.push({
        //   name: item[0],
        //   type: 'lines',
        //   zlevel: 99,
        //   //线特效配置
        //   effect: {
        //     show: true,
        //     period: 6, // 运行时间（s）
        //     trailLength: 0, // 拖影
        //     symbol: planePath, //标记类型
        //     symbolSize: 10
        //   },
        //   lineStyle: {
        //     normal: {
        //       width: 1,
        //       opacity: 0.4,
        //       // curveness: arcAngle(item[1]), //弧线角度
        //       curveness: 0.2, //弧线角度
        //       color: '#fff' // 迁移线颜色
        //     }
        //   },
        //   data: convertData_line(item[1])
        // });
        var flyData = [
            []
        ]
        if (clickModName.length === 2 && !flyDataPushed) {
            flyData[0].push({
                name: clickModName[0]
            }, {
                id: 1,
                name: clickModName[1]
            })
            series.push({
                type: 'lines',
                zlevel: 99,
                //线特效配置
                effect: {
                    show: true,
                    period: 6, // 运行时间（s）
                    trailLength: 0, // 拖影
                    symbol: planePath, //标记类型
                    symbolSize: 10
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        opacity: 0.4,
                        // curveness: arcAngle(item[1]), //弧线角度
                        curveness: 0.2, //弧线角度
                        color: '#fff' // 迁移线颜色
                    }
                },
                data: convertData_line(flyData)
            })
            flyDataPushed = true
        }
        console.log(flyData)
        // console.log(this.clickMod.values())
        // params.data.value = '1'
        // console.log(this.clickMod)
        // console.log(this.clickModName)
        myChart.setOption(option)
    })
})