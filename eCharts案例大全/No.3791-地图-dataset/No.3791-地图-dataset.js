const mapData = [
    {
        "name": "北京",
        "value": "88",
        "selected": false
    },
    {
        "name": "上海",
        "value": "78",
        "selected": false
    },
    {
        "name": "重庆",
        "value": "55",
        "selected": false
    },
    {
        "name": "河北",
        "value": "22",
        "selected": false
    },
    {
        "name": "山西",
        "value": "67",
        "selected": false
    },
    {
        "name": "辽宁",
        "value": "87",
        "selected": false
    },
    {
        "name": "吉林",
        "value": "99",
        "selected": false
    },
    {
        "name": "黑龙江",
        "value": "54",
        "selected": false
    },
    {
        "name": "江苏",
        "value": "33",
        "selected": false
    },
    {
        "name": "浙江",
        "value": "66",
        "selected": false
    },
    {
        "name": "安徽",
        "value": "11",
        "selected": false
    },
    {
        "name": "福建",
        "value": "77",
        "selected": false
    },
    {
        "name": "江西",
        "value": "35",
        "selected": false
    },
    {
        "name": "山东",
        "value": "76",
        "selected": false
    },
    {
        "name": "河南",
        "value": "83",
        "selected": false
    },
    {
        "name": "湖北",
        "value": "44",
        "selected": false
    },
    {
        "name": "湖南",
        "value": "86",
        "selected": false
    },
    {
        "name": "广东",
        "value": "45",
        "selected": false
    },
    {
        "name": "海南",
        "value": "67",
        "selected": false
    },
    {
        "name": "四川",
        "value": "54",
        "selected": false
    },
    {
        "name": "贵州",
        "value": "66",
        "selected": false
    },
    {
        "name": "云南",
        "value": "78",
        "selected": false
    },
    {
        "name": "陕西",
        "value": "99",
        "selected": false
    },
    {
        "name": "甘肃",
        "value": "94",
        "selected": false
    },
    {
        "name": "青海",
        "value": "44",
        "selected": false
    },
    {
        "name": "台湾",
        "value": "86",
        "selected": false
    },
    {
        "name": "内蒙古",
        "value": "45",
        "selected": false
    },
    {
        "name": "广西",
        "value": "33",
        "selected": false
    },
    {
        "name": "西藏",
        "value": "66",
        "selected": false
    },
    {
        "name": "宁夏",
        "value": "77",
        "selected": false
    },
    {
        "name": "新疆",
        "value": "45",
        "selected": false
    },
    {
        "name": "香港",
        "value": "84",
        "selected": false
    },
    {
        "name": "澳门",
        "value": "65",
        "selected": false
    },
    {
        "name": "天津",
        "value": "75",
        "selected": false
    },
    {
        "name": "南海诸岛",
        "value": "99",
        "selected": false
    }
]

option = {
        dataset:{
            source:[
                ['lng','lat','position','val',],
                [117.4219,39.4189,'天津',42,],
                [0,0,'天津',42,]
            ]
        },
        backgroundColor: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 1,
          y2: 1,
          colorStops: [{
            offset: 0, color: '#0f378f' // 0% 处的颜色
          }, {
            offset: 1, color: '#00091a' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
        },
        title: {
          top: 20,
          text: '“会员活跃度” - 山东省',
          subtext: '',
          x: 'center',
          textStyle: {
            color: '#ccc'
          }
        },
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['pm2.5'],
          textStyle: {
            color: '#fff'
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 500,
          left: 'left',
          top: 'bottom',
          text: ['高', '低'], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {

          }
        },
        geo: {
          map: 'china',
          show: true,
          roam: true,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#3a7fd5',
              borderColor: '#0a53e9', // 线
              shadowColor: '#092f8f', // 外发光
              shadowBlur: 20
            },
            emphasis: {
              areaColor: '#0a2dae' // 悬浮区背景
            }
          }
        },
        series: [
           {
             symbolSize: 1,
             label: {
               normal: {
                 formatter: '{b}',
                 position: 'right',
                 show: true
               },
               emphasis: {
                 show: true
               }
             },
             itemStyle: {
               normal: {
                 color: '#fff'
               }
             },
             encode: {
              itemName:2,
              value: 3,
              lng: 0,
              lat: 1

            },
             name: 'light',
             type: 'scatter',
             coordinateSystem: 'geo'
             // data: convertData(data)
           },
          {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: [50, 50],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 9
                },
                // formatter (value) {
                    // console.log(value)
                //   return value.value[3]
                // }
                formatter:"{@val}"
              }
            },
            itemStyle: {
              normal: {
                color: '#D8BC37' // 标志颜色
              }
            },
            encode: {
              itemName: 2,
              value: 3,
              lng: 0,
              lat: 1

            },
            // data: [{ name: '天津', value: [117.4219, 39.4189, 42] }],
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
          }
        ]
};