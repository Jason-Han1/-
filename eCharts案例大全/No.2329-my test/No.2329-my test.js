var uploadedDataURL = '/asset/get/s/data-1528969700634-BkT1qn1WQ.json';
var nameMap = '广东省';

//  垃圾站
var gubageArr = [{
        name: 'JD_16794K_广东省广州市增城市新塘镇陈家林凤凰城园区（京东华南第三物流中心）进入园区门口直走第二个路口右转后再左转',
        value: [113.560225,23.128099, 120],
        type: 'laji'
    }
];



window.dataList = [
{ name: '东莞市', value: 15},
{ name: '广州市', value: 35},
{ name: '惠州市', value: 55},
{ name: '汕头市', value: 75},
{ name: '佛山市', value: 95},
{ name: '顺德市', value: 115},
{ name: '潮州市', value: 135},
{ name: '湛江市', value: 155},
{ name: '深圳市', value: 175},
{ name: '中山市', value: 195},
{ name: '茂名市', value: 215}
];
var geoCoordMap = {};
var convertData = function (data) {
  console.log('data', data);
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }
  console.log('res', res);
  return res;
};

$.get(uploadedDataURL, function (gdMap) {
  debugger;
  echarts.registerMap(nameMap, gdMap);
  /*获取地图数据*/
  myChart.showLoading();
  var mapFeatures = echarts.getMap(nameMap).geoJson.features;
  myChart.hideLoading();
  mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.center;
  });
  console.log(geoCoordMap);
  //GDP
  var optionMap = {
    title: {
      text: '地图',
      top: '1%',
      textStyle: {
        color: '#000',
        fontSize: 16,
      },
    },
    visualMap: [
      {
        min: 0,
        max: 1000,
        show: false,
        //   text: ['High', 'Low'],
        realtime: false,
        calculable: false,
        seriesIndex: [0],
        inRange: {
          color: [
            'rgb(202,249,130)',
            'rgb(129,211,248)',
            'rgb(255,255,128)',
            'rgb(128,255,255)',
            'rgb(0,255,255)',
            'rgb(128,128,255)',
            'rgb(236,128,141)',
            'rgb(194,128,255)',
            'rgb(245,154,35)',
            'rgb(112,182,3)',
            'rgb(0,182,128)',
            'rgb(99,0,191)',
          ],
        },
      },
      {
        min: 0,
        max: 1000,
        seriesIndex: 1,
        show: true,
        splitNumber: 3,
        right: '2%',
        inRange: {
          color: ['#FF6464', '#FFA85A', '#FFEC6F'].reverse(),
        },
        formatter: function (value) {
          return '';
        },
      },
    ],
            legend: {
            orient: 'vertical',
            id: 1,
            y: 'bottom',
            x: 'right',
            itemWidth: 15,
            data: [{
                    name: '垃圾',
                    icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9ElEQVRYR+2WPUwTYRjH/8/1DgygaUATYoiUxEGDCV0YjAO9DsboIMZ2MUZxcXBiYQAHyyAkLsqgiYmJuLC0URlcuTYmLgxqRCWRoRoGg3zUQMtHPx7z3pWmH8ddeyWBwSe55e593+f3/p+vIxyw0QH7x+EGcI+zx8Xpl0Kl8z3kfcRDUrO8JVup9mGnd/P59q3NLz94AeDEykjjNav1lgq4x9M+F7MmDrh0gTCxfRetyoZl1F6nLuJFdgCzc6yvy5LSlRim+F6bLAFaH26HiOhBfQCkJoaVqDOAsZ1JAm7vAijLvyBT1lKBpOsY1qitoAAzj67ebww5Amgb2xHkfWJz50lAlqvL2fUkY2nFcMnAq9WRhgGnAEYg67PYykiDryaAm+/TvlQKVxeXeLA+38bu06cohJw8PaXSp/LzTDW9EUtHKS/9fgDkQxGb6lMqlDi0AE+O8rqvA4s9+6HAdzobAxCd6lMqqmHPtGat381Q1uoGYPyV/GF3TUm4uzinBeuvAkZM8odrq4ICwEwwCjL6gKnJTcbrTMpCKJ6W1Ei/MwWsAFo8IE8QyCTB8TCw9cfUB4NHXWrEWSfMaoEQwZgFBZObQGfuGbcWj1BBbjZA5p9VQBBwh9TwpCMFWAsMMuhx8WY6NwRengV+l82Xdh+oxQNeKPVFYJXUiLNhxFrAxyB9HOsmZO+4bHpT8Zm8IfD805JwENJdpL51No5ZC3oZ+FgAaM8nc/nt8wtETnDiK5D4VtgiqWHLCWY73kpKUQBkkoAIgYlVADA+S/6w16JE7P8JczOBOIg69UOOnICeAyLryyFEDrT7SkNg0wP0sFnRiW+54lI83gvquAJefFcBoJekSMKiBGVgwqWGLSeqLUBWC0wSSP8r2jXdmbsbnJjTX5G7W4+7rkyR2fWAqhQw7QVip6j/Fo/hbiNu2g3tSrAqANau9zOkN3ahMk1Kmx5QJUBZL6iBxK4EqwRwOJaZf0r+SD5Ge1PbJmENF3a09D/APzM9MDBOoIkUAAAAAElFTkSuQmCC",
                }, {
                    name: '供水管道',
                    icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhklEQVRYR+2WT1KDMBTG3wt2ph3paBfitu5aNvYG6lE8gR7B3kBv4E3EG9ANdclWXJQZGHWmlecEJrUihIamxUWzySa875cv7w8IDS9sWB8wCoYOApACyMS0prcK56VHMQ5sFXEgoOeuNb3UBhC9DZSCIbHQtDxXG4AIFAfDewA4lwTWar3QWSZhlgt4UQag2/o9gBYHolf7jjGgwxNvXDcpN8oBUcKm5dVuaGsDAIBrYPKrAX0Rc/jNDUwqS7l98DnBnh/mnVIBqOvyynfkGC267vRefOUc0KCehiCA0Gy9nwk3duyAuAY9iHnSCMBqU/s/ANkswBtdby2LU+gAzfrH8bzjI+DRtiEKAbjox2zQX8zxUTaUdMCVAixzlLuxaI+qxJDYU1pamFytnkVi0tFeCVAl/PMPkf1N5Vuxymiv3cO5MB9GfO+eeuku1s4AypzaAzTuAG9qBFBaRQjg/pkF62a+7Fwc2CMDE6VGtlEV5GGqrC+C1wpQZf3WAeo8o1YH6gB8Axqb1zdNIMxTAAAAAElFTkSuQmCC",
                },
                {
                    name: '城市绿地',
                    icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSElEQVRYR+2XQXbTQAyGf+XlFXbNEZwTQE+Ai82a3qDNBic7cgLKCRJWjdkk3KBd49D0BIQTEE5Qd1leavEUx/a4ju0ZQx+beDsj6RtJv/RM+JvPd0dg7qA/7zV1Q00NMXGmIDrb2DPPmkI0A7h4fYZWa5qDbwhhDnBhW2i1f5ZkbggvGJtk1Rxg4l6DYO8OwiEOHrroLUJdCDOA6tfHMaOoh8G32dMA+O57AKNK54wr9IOTpwJYAHhV4/wGXlBSoqKlWQl8VwcA8AJtv9oXN+x6AP89A4YAE2cM0IusOrwC6BL94KpQMd89B/Chpgd2zwLfOQWLfMlSYv0g+M4tQJ2CU+YVCEN488v0TEuG6y4Gi1Vq4zsnYIxAauDklEOC77LRi6r6gPkT+nORavyp+6IkiADI1DqshIhwjEEgCgDiLCx32NzhYG2lU1CrXPxLAOqlJeV49nCUOv/85iWYvyvQdyCy8e6rgCWQZftCfeuNAOg0luzcL/Dm8frdBHFttBD3hxp8I1dnBtBpTWnleEjblOrQLuEFRzmnkgn5kpcnh2WN/ZgoWnfjQaQz4+WezoTTUYr42jZsNgl1ekFtRnGyKwNxaa5r0p8Oqwxgandw356B8LbUWAVQGzGnkjqAfC8Vd0E8OM5B6nTcIpUH+ggvkGYG5CG/27eFR8iaZoxTOW8vlC8jqSXaFhBZaFGIiEI8Xy9TKeZTnQEkClEJVLtHZGbbUDWuAtDQX3JlD7DPwD4D/yYDhj8jqkqbA2RLTJaU0f+gCvAHSKkI31OjatgAAAAASUVORK5CYII="
                },
                {
                    name: '天燃气',
                    icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZUlEQVRYR7WX300bQRDGfyPBc0gFMRWQVBBb8j2TDoAKAhUEVxCoAFJB4PlO4lxBnApiKgg829JEuz7b92f3dm9F7sWStTPzzezM980KCZ9OGSOcsWImJcsEFzsTSTHWMSMO+WNtlWspmKX4MTZJAGzcDK0FXQAXkmN+B31vBcBU4gVhMhREEgDN+Aj8cqS6YMVESl5iy5AGYMolwndPkB+Sc/5/AWT2rk+8QVYcx07H4ApUI/jUm6FyJQU3MVUYBEDHHHGICW56oO+bS8747QFk3ANnEY6XknMccS6eBzQ+uI0reZzv4BXYsh9wh/AlJqOKHZ+lYKQZNygqBVc+214A1bzfRdx52/8c7HUZW/PdS86FC4QXgO12+IlwFJ35/qARqFHLzlC1AdX4nAA0s0SyRZ8Q32vyqU3VHQC27MpTYub9YJVSCib1Q10AU5YIH4JpK88ID8DX4Nn6AWUiBeX2rwYA7ef4vRvlkTXnHFhN+DYIADS0og0gJvudg8ReaZDUDkBFs38D2TTQNzajIWVY8X4r2XsAmz3PLzLKK2tGba3XkDK6gNX6YAgAp8JVU1MivIsuQhKAWtnagYb2Ql0n4npAeZWinxEHgPgt+V7Om1Pgv88oedUpDwingatoUHIbgJeCY+Q1OBWORm4C2EjvwsOEHR53Nnj/VHQEyacF3a5WZlJwHep09VO5c1v2qaERpDaIYB94r6Cibtd7wb8PbN5/Rr8/77IObLueSbiVnEtf5cIr2WY3MA5O7PNrbXd+58unVf559XDdKd+gjchBNmYVty8eV0ZV9gaoCWhWsKiH6j/NPeohS8oR6gAAAABJRU5ErkJggg==",
                },
                {
                    name: '井盖',
                    icon: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEY0lEQVRYR8VXS3IaVxQ996EGT6zgWapiZDSJmlHQCoxWEGkFllYgeQXBKzBegdEKRFZgsgK3RiiZGINTlZlbaJL0C++m3q/7NSBAqlSZiarUzXvnnnvOuRfCN/7QN74fDwLwxw9RWwm8AtAGoQ5Q2xbACRgpgEQoXP74p0y2LWwrAKNGdEpEvwBobnnwmMDdg4m83PT+WgCm4greF5XqYvErExIoNSQhPpj6lTqCEB1iw8zPxaWciDnO1jFyL4DfG5VjJqEvrwN8y6Dek1nW208N1eZzs1dl/TeeZPk5n+qo/71bvSBAM6bhpcTq7GA6H6xiYyUAe3nlyn6fr2t3shNerJlhoZqKyYARxHUl50nrL4z9JaPv0aQoGoDoJ89S68u/w0UQSwAc7R905cx82ZrK0/zQQAvM/FtrKjv62agRDYnopRYjsXrjqzVsPI0G7lkq5jhabMcSgJtGlBjUzNfxVBqV64P+eRpdgchcaIkpwBUA8ofD2p080ay57w4tE5zEE3kYslAC4NT+Xve8NpPN/IDdSDNiwDDwBlnWD+l2LGimtFteOohJbSaP9BmmHdXqJwf8rDWVfQ+iDGCvOibghb6kNcm6C/TesuLjVX0MK7rZiy4AeutB+IpHe9WuE+Y4nmT7SwBs7+mjflCbZc808vAwbTV/uRPYuQkkAEQ0VFl26VkpmLSM6WJMK3arX41o53zotZAzcPM86kHQufZ5PM2OTfWekaDfZXuGtXPKjNee3ptGdWAzgdPaTO6bgvz/FL+Lv8gLAz5QuFGyRxxa0SMOWTKBxKpnGRAXPoBWvUs8P9HO8G0IHVQw4NTvqc57FrghryBgyRfgn5XcsaCp0fOdjk3Pwg0FAJdqTjwpZ/JwUek++UI95AwWh6fxRD4Lm2NdEH20qWo/Pj3vA3DLmWw/BEDYsjCajZYsgASg7+4H4FrgHVDYpqCrCCkM4ml2UrKfF1jQslzEzgl5C4J3lkXo7BZWxFm2r9koeZwxqDgRzq0IjXOY2QRNKNjtROht6CxifRuNNW1hMBX2Cut3ygnmQy5K4HNrkpk9Yq0NC8SciyhIr1J42P+zTjzX0/K4LgWRY2RjEIXBA/DreCKNx/O+g5emmRYXdnaaYTzby/HWTdNiYroo5oCRUhC53NfDRA+jPL3K08wkVzeMXd8IuyPgnIns+A72iK2HUali5mE8lUf6f+W5nvc73xUWdaGT7smdPF6apoH6PfD7FpKh7i8x9w+m8sy/bJwB0dWzfdVCoukFc9fPg/Iewbdijs7GhURfVlrJwAln8mRx3RJRpR2uZKTEODzchc9VvkcE0zT0z6altG+VzimBetVZ9m6bpTTbrZ4zYPYJs9Cu2SM2r+UCfb9Y2vMwINI/QNRwLoRZMitKdZQQHbZruQkkL0ShcPqotTykSVsLRHqjebEcPysCaUEL676z1S+j0GqKcMqENgH1nBnmawZSYiSC0f/ff5ptU/Vj33kQA4+9ZN33/gN9L0NOF3U7kQAAAABJRU5ErkJggg=="
                },
            ],
            textStyle: {
                color: '#fff'
            }
        },
        
        
    geo: {
      map: nameMap,
      show: false,
      roam: true,
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        },
      },
    },
    series: [
      {
        // 地图块的相关信息
        type: 'map',
        map: nameMap,
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
              fontWeight: 400,
              color: 'rgb(0,0,0) ',
            },
          },
        },
        data: window.dataList,
                    {
                name: '垃圾',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: gubageArr,
                symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9ElEQVRYR+2WPUwTYRjH/8/1DgygaUATYoiUxEGDCV0YjAO9DsboIMZ2MUZxcXBiYQAHyyAkLsqgiYmJuLC0URlcuTYmLgxqRCWRoRoGg3zUQMtHPx7z3pWmH8ddeyWBwSe55e593+f3/p+vIxyw0QH7x+EGcI+zx8Xpl0Kl8z3kfcRDUrO8JVup9mGnd/P59q3NLz94AeDEykjjNav1lgq4x9M+F7MmDrh0gTCxfRetyoZl1F6nLuJFdgCzc6yvy5LSlRim+F6bLAFaH26HiOhBfQCkJoaVqDOAsZ1JAm7vAijLvyBT1lKBpOsY1qitoAAzj67ebww5Amgb2xHkfWJz50lAlqvL2fUkY2nFcMnAq9WRhgGnAEYg67PYykiDryaAm+/TvlQKVxeXeLA+38bu06cohJw8PaXSp/LzTDW9EUtHKS/9fgDkQxGb6lMqlDi0AE+O8rqvA4s9+6HAdzobAxCd6lMqqmHPtGat381Q1uoGYPyV/GF3TUm4uzinBeuvAkZM8odrq4ICwEwwCjL6gKnJTcbrTMpCKJ6W1Ei/MwWsAFo8IE8QyCTB8TCw9cfUB4NHXWrEWSfMaoEQwZgFBZObQGfuGbcWj1BBbjZA5p9VQBBwh9TwpCMFWAsMMuhx8WY6NwRengV+l82Xdh+oxQNeKPVFYJXUiLNhxFrAxyB9HOsmZO+4bHpT8Zm8IfD805JwENJdpL51No5ZC3oZ+FgAaM8nc/nt8wtETnDiK5D4VtgiqWHLCWY73kpKUQBkkoAIgYlVADA+S/6w16JE7P8JczOBOIg69UOOnICeAyLryyFEDrT7SkNg0wP0sFnRiW+54lI83gvquAJefFcBoJekSMKiBGVgwqWGLSeqLUBWC0wSSP8r2jXdmbsbnJjTX5G7W4+7rkyR2fWAqhQw7QVip6j/Fo/hbiNu2g3tSrAqANau9zOkN3ahMk1Kmx5QJUBZL6iBxK4EqwRwOJaZf0r+SD5Ge1PbJmENF3a09D/APzM9MDBOoIkUAAAAAElFTkSuQmCC',
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd'
                    }
                }
            }
      },
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [40, 40],
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: 10,
              fontWeight: 600,
            },
            formatter(value) {
              return value.data.value[2];
            },
          },
        },
        hoverAnimation: true,
        itemStyle: {
          normal: {
            color: 'pink', // 标志颜色
          },
        },
        zlevel: 6,
        data: convertData(window.dataList),
      },
    ],
  };
  myChart.setOption(optionMap, true);
});



// 显示加载动画
myChart.showLoading();
$.getJSON(uploadedDataURL, null, function(data) {
    echarts.registerMap('guangdong', data);
    myChart.hideLoading();
    var geoCoordMap = {
        '广州市': [113.560225,23.128099],
        '皋兰县': [103.879893, 36.389661],
        '红古区': [103.110536, 36.277516],
        '西固区': [103.522302, 36.126722],
        '安宁区': [103.686572, 36.1243],
        '城关区': [103.876381, 36.07365],
        '七里河区': [103.771036, 35.965633],
        '榆中县': [104.232869, 35.993455]
    };
    var data1 = [{
            name: '广州市',
            value: 199
        },
        {
            name: '皋兰县',
            value: 39
        },
        {
            name: '红古区',
            value: 152
        },
        {
            name: '西固区',
            value: 152
        },
        {
            name: '安宁区',
            value: 152
        },
        {
            name: '城关区',
            value: 152
        },
        {
            name: '七里河区',
            value: 152
        },
        {
            name: '榆中县',
            value: 152
        },
        {
            name: '中建大厦',
            value: 152
        },

    ];
    var max = 480,
        min = 9;
    var maxSize4Pin = 100,
        minSize4Pin = 20;


    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };


    option = {
        backgroundColor: '#020933',
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (typeof(params.value)[2] == "undefined") {
                    return params.name + ' : ' + params.value;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            }
        },

        geo: {
            show: true,
            map: 'guangdong',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            zoom: 1.2,
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            }
        },
        series: [{
                type: 'map',
                map: 'guangdong',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data
            },
            // 图标的位置
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data1.sort(function(a, b) {
                    return b.value - a.value;
                })),
                symbolSize: 12,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#05C3F9',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 1
            },
            {
                name: '垃圾',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: gubageArr,
                symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC9ElEQVRYR+2WPUwTYRjH/8/1DgygaUATYoiUxEGDCV0YjAO9DsboIMZ2MUZxcXBiYQAHyyAkLsqgiYmJuLC0URlcuTYmLgxqRCWRoRoGg3zUQMtHPx7z3pWmH8ddeyWBwSe55e593+f3/p+vIxyw0QH7x+EGcI+zx8Xpl0Kl8z3kfcRDUrO8JVup9mGnd/P59q3NLz94AeDEykjjNav1lgq4x9M+F7MmDrh0gTCxfRetyoZl1F6nLuJFdgCzc6yvy5LSlRim+F6bLAFaH26HiOhBfQCkJoaVqDOAsZ1JAm7vAijLvyBT1lKBpOsY1qitoAAzj67ebww5Amgb2xHkfWJz50lAlqvL2fUkY2nFcMnAq9WRhgGnAEYg67PYykiDryaAm+/TvlQKVxeXeLA+38bu06cohJw8PaXSp/LzTDW9EUtHKS/9fgDkQxGb6lMqlDi0AE+O8rqvA4s9+6HAdzobAxCd6lMqqmHPtGat381Q1uoGYPyV/GF3TUm4uzinBeuvAkZM8odrq4ICwEwwCjL6gKnJTcbrTMpCKJ6W1Ei/MwWsAFo8IE8QyCTB8TCw9cfUB4NHXWrEWSfMaoEQwZgFBZObQGfuGbcWj1BBbjZA5p9VQBBwh9TwpCMFWAsMMuhx8WY6NwRengV+l82Xdh+oxQNeKPVFYJXUiLNhxFrAxyB9HOsmZO+4bHpT8Zm8IfD805JwENJdpL51No5ZC3oZ+FgAaM8nc/nt8wtETnDiK5D4VtgiqWHLCWY73kpKUQBkkoAIgYlVADA+S/6w16JE7P8JczOBOIg69UOOnICeAyLryyFEDrT7SkNg0wP0sFnRiW+54lI83gvquAJefFcBoJekSMKiBGVgwqWGLSeqLUBWC0wSSP8r2jXdmbsbnJjTX5G7W4+7rkyR2fWAqhQw7QVip6j/Fo/hbiNu2g3tSrAqANau9zOkN3ahMk1Kmx5QJUBZL6iBxK4EqwRwOJaZf0r+SD5Ge1PbJmENF3a09D/APzM9MDBOoIkUAAAAAElFTkSuQmCC',
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#4bbbb2',
                        borderWidth: 2,
                        borderColor: '#b4dccd'
                    }
                }
            },
            {
                name: '供水管道',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: guanwang,
                symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhklEQVRYR+2WT1KDMBTG3wt2ph3paBfitu5aNvYG6lE8gR7B3kBv4E3EG9ANdclWXJQZGHWmlecEJrUihIamxUWzySa875cv7w8IDS9sWB8wCoYOApACyMS0prcK56VHMQ5sFXEgoOeuNb3UBhC9DZSCIbHQtDxXG4AIFAfDewA4lwTWar3QWSZhlgt4UQag2/o9gBYHolf7jjGgwxNvXDcpN8oBUcKm5dVuaGsDAIBrYPKrAX0Rc/jNDUwqS7l98DnBnh/mnVIBqOvyynfkGC267vRefOUc0KCehiCA0Gy9nwk3duyAuAY9iHnSCMBqU/s/ANkswBtdby2LU+gAzfrH8bzjI+DRtiEKAbjox2zQX8zxUTaUdMCVAixzlLuxaI+qxJDYU1pamFytnkVi0tFeCVAl/PMPkf1N5Vuxymiv3cO5MB9GfO+eeuku1s4AypzaAzTuAG9qBFBaRQjg/pkF62a+7Fwc2CMDE6VGtlEV5GGqrC+C1wpQZf3WAeo8o1YH6gB8Axqb1zdNIMxTAAAAAElFTkSuQmCC",
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ea6347',
                        borderWidth: 2,
                        borderColor: '#f4b391'
                    }
                }
            },
            {
                name: '城市绿地',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: lvdi,
                symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSElEQVRYR+2XQXbTQAyGf+XlFXbNEZwTQE+Ai82a3qDNBic7cgLKCRJWjdkk3KBd49D0BIQTEE5Qd1leavEUx/a4ju0ZQx+beDsj6RtJv/RM+JvPd0dg7qA/7zV1Q00NMXGmIDrb2DPPmkI0A7h4fYZWa5qDbwhhDnBhW2i1f5ZkbggvGJtk1Rxg4l6DYO8OwiEOHrroLUJdCDOA6tfHMaOoh8G32dMA+O57AKNK54wr9IOTpwJYAHhV4/wGXlBSoqKlWQl8VwcA8AJtv9oXN+x6AP89A4YAE2cM0IusOrwC6BL94KpQMd89B/Chpgd2zwLfOQWLfMlSYv0g+M4tQJ2CU+YVCEN488v0TEuG6y4Gi1Vq4zsnYIxAauDklEOC77LRi6r6gPkT+nORavyp+6IkiADI1DqshIhwjEEgCgDiLCx32NzhYG2lU1CrXPxLAOqlJeV49nCUOv/85iWYvyvQdyCy8e6rgCWQZftCfeuNAOg0luzcL/Dm8frdBHFttBD3hxp8I1dnBtBpTWnleEjblOrQLuEFRzmnkgn5kpcnh2WN/ZgoWnfjQaQz4+WezoTTUYr42jZsNgl1ekFtRnGyKwNxaa5r0p8Oqwxgandw356B8LbUWAVQGzGnkjqAfC8Vd0E8OM5B6nTcIpUH+ggvkGYG5CG/27eFR8iaZoxTOW8vlC8jqSXaFhBZaFGIiEI8Xy9TKeZTnQEkClEJVLtHZGbbUDWuAtDQX3JlD7DPwD4D/yYDhj8jqkqbA2RLTJaU0f+gCvAHSKkI31OjatgAAAAASUVORK5CYII=',
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00ff00',
                        borderWidth: 2,
                        borderColor: '#55E355'
                    }
                }
            },
            {
                name: '天燃气',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: ranqi,
                symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACZUlEQVRYR7WX300bQRDGfyPBc0gFMRWQVBBb8j2TDoAKAhUEVxCoAFJB4PlO4lxBnApiKgg829JEuz7b92f3dm9F7sWStTPzzezM980KCZ9OGSOcsWImJcsEFzsTSTHWMSMO+WNtlWspmKX4MTZJAGzcDK0FXQAXkmN+B31vBcBU4gVhMhREEgDN+Aj8cqS6YMVESl5iy5AGYMolwndPkB+Sc/5/AWT2rk+8QVYcx07H4ApUI/jUm6FyJQU3MVUYBEDHHHGICW56oO+bS8747QFk3ANnEY6XknMccS6eBzQ+uI0reZzv4BXYsh9wh/AlJqOKHZ+lYKQZNygqBVc+214A1bzfRdx52/8c7HUZW/PdS86FC4QXgO12+IlwFJ35/qARqFHLzlC1AdX4nAA0s0SyRZ8Q32vyqU3VHQC27MpTYub9YJVSCib1Q10AU5YIH4JpK88ID8DX4Nn6AWUiBeX2rwYA7ef4vRvlkTXnHFhN+DYIADS0og0gJvudg8ReaZDUDkBFs38D2TTQNzajIWVY8X4r2XsAmz3PLzLKK2tGba3XkDK6gNX6YAgAp8JVU1MivIsuQhKAWtnagYb2Ql0n4npAeZWinxEHgPgt+V7Om1Pgv88oedUpDwingatoUHIbgJeCY+Q1OBWORm4C2EjvwsOEHR53Nnj/VHQEyacF3a5WZlJwHep09VO5c1v2qaERpDaIYB94r6Cibtd7wb8PbN5/Rr8/77IObLueSbiVnEtf5cIr2WY3MA5O7PNrbXd+58unVf559XDdKd+gjchBNmYVty8eV0ZV9gaoCWhWsKiH6j/NPeohS8oR6gAAAABJRU5ErkJggg==",
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FAFF1A',
                        borderWidth: 2,
                        borderColor: '#E3BC1F'
                    }
                }
            },
            {
                name: '井盖',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: jinggai,
                symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEY0lEQVRYR8VXS3IaVxQ996EGT6zgWapiZDSJmlHQCoxWEGkFllYgeQXBKzBegdEKRFZgsgK3RiiZGINTlZlbaJL0C++m3q/7NSBAqlSZiarUzXvnnnvOuRfCN/7QN74fDwLwxw9RWwm8AtAGoQ5Q2xbACRgpgEQoXP74p0y2LWwrAKNGdEpEvwBobnnwmMDdg4m83PT+WgCm4greF5XqYvErExIoNSQhPpj6lTqCEB1iw8zPxaWciDnO1jFyL4DfG5VjJqEvrwN8y6Dek1nW208N1eZzs1dl/TeeZPk5n+qo/71bvSBAM6bhpcTq7GA6H6xiYyUAe3nlyn6fr2t3shNerJlhoZqKyYARxHUl50nrL4z9JaPv0aQoGoDoJ89S68u/w0UQSwAc7R905cx82ZrK0/zQQAvM/FtrKjv62agRDYnopRYjsXrjqzVsPI0G7lkq5jhabMcSgJtGlBjUzNfxVBqV64P+eRpdgchcaIkpwBUA8ofD2p080ay57w4tE5zEE3kYslAC4NT+Xve8NpPN/IDdSDNiwDDwBlnWD+l2LGimtFteOohJbSaP9BmmHdXqJwf8rDWVfQ+iDGCvOibghb6kNcm6C/TesuLjVX0MK7rZiy4AeutB+IpHe9WuE+Y4nmT7SwBs7+mjflCbZc808vAwbTV/uRPYuQkkAEQ0VFl26VkpmLSM6WJMK3arX41o53zotZAzcPM86kHQufZ5PM2OTfWekaDfZXuGtXPKjNee3ptGdWAzgdPaTO6bgvz/FL+Lv8gLAz5QuFGyRxxa0SMOWTKBxKpnGRAXPoBWvUs8P9HO8G0IHVQw4NTvqc57FrghryBgyRfgn5XcsaCp0fOdjk3Pwg0FAJdqTjwpZ/JwUek++UI95AwWh6fxRD4Lm2NdEH20qWo/Pj3vA3DLmWw/BEDYsjCajZYsgASg7+4H4FrgHVDYpqCrCCkM4ml2UrKfF1jQslzEzgl5C4J3lkXo7BZWxFm2r9koeZwxqDgRzq0IjXOY2QRNKNjtROht6CxifRuNNW1hMBX2Cut3ygnmQy5K4HNrkpk9Yq0NC8SciyhIr1J42P+zTjzX0/K4LgWRY2RjEIXBA/DreCKNx/O+g5emmRYXdnaaYTzby/HWTdNiYroo5oCRUhC53NfDRA+jPL3K08wkVzeMXd8IuyPgnIns+A72iK2HUali5mE8lUf6f+W5nvc73xUWdaGT7smdPF6apoH6PfD7FpKh7i8x9w+m8sy/bJwB0dWzfdVCoukFc9fPg/Iewbdijs7GhURfVlrJwAln8mRx3RJRpR2uZKTEODzchc9VvkcE0zT0z6altG+VzimBetVZ9m6bpTTbrZ4zYPYJs9Cu2SM2r+UCfb9Y2vMwINI/QNRwLoRZMitKdZQQHbZruQkkL0ShcPqotTykSVsLRHqjebEcPysCaUEL676z1S+j0GqKcMqENgH1nBnmawZSYiSC0f/ff5ptU/Vj33kQA4+9ZN33/gN9L0NOF3U7kQAAAABJRU5ErkJggg==',
                symbolSize: function(val) {
                    return val[2] / 7.5;
                },
                label: {
                    normal: {
                        show: false,
                        formatter: function(params) {
                            // console.log(params);
                            return params.name;
                        },
                        position: 'right',
                        color: '#fff',
                        fontSize: '8'
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#FF00FF',
                        borderWidth: 2,
                        borderColor: '#D33BD3'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
});
   
         
         