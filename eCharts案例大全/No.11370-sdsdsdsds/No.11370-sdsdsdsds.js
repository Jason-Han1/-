    var datas = [
      // { "id": "710000", "index": 0, "name": "台湾", "value": [121.509062, 25.044332] },
      { "id": "130000", "index": 11, "name": "河北", "value": [114.502461, 38.045474] },
      { "id": "140000", "index": 12, "name": "山西", "value": [112.549248, 37.857014] },
      { "id": "150000", "index": 13, "name": "内蒙古", "value": [111.670801, 40.818311] },
      { "id": "210000", "index": 14, "name": "辽宁", "value": [123.429096, 41.796767] },
      { "id": "220000", "index": 15, "name": "吉林", "value": [125.3245, 43.886841] },
      { "id": "230000", "index": 16, "name": "黑龙江", "value": [126.642464, 45.756967] },
      { "id": "320000", "index": 17, "name": "江苏", "value": [118.767413, 32.041544] },
      { "id": "330000", "index": 18, "name": "浙江", "value": [120.153576, 30.287459] },
      { "id": "340000", "index": 19, "name": "安徽", "value": [117.283042, 31.86119] },
      { "id": "350000", "index": 10, "name": "福建", "value": [119.306239, 26.075302] },
      { "id": "360000", "index": 11, "name": "江西", "value": [115.892151, 28.676493] },
      { "id": "370000", "index": 12, "name": "山东", "value": [117.000923, 36.675807] },
      { "id": "410000", "index": 13, "name": "河南", "value": [113.665412, 34.757975] },
      { "id": "420000", "index": 14, "name": "湖北", "value": [114.298572, 30.584355] },
      { "id": "430000", "index": 15, "name": "湖南", "value": [112.982279, 28.19409] },
      { "id": "440000", "index": 16, "name": "广东", "value": [113.280637, 23.125178] },
      { "id": "450000", "index": 17, "name": "广西", "value": [108.320004, 22.82402] },
      { "id": "460000", "index": 18, "name": "海南", "value": [110.33119, 20.031971] },
      { "id": "510000", "index": 19, "name": "四川", "value": [104.065735, 30.659462] },
      { "id": "520000", "index": 20, "name": "贵州", "value": [106.713478, 26.578343] },
      { "id": "530000", "index": 21, "name": "云南", "value": [102.712251, 25.040609] },
      { "id": "540000", "index": 22, "name": "西藏", "value": [91.132212, 29.660361] },
      { "id": "610000", "index": 23, "name": "陕西", "value": [108.948024, 34.263161] },
      { "id": "620000", "index": 24, "name": "甘肃", "value": [103.823557, 36.058039] },
      { "id": "630000", "index": 25, "name": "青海", "value": [101.778916, 36.623178] },
      { "id": "640000", "index": 26, "name": "宁夏", "value": [106.278179, 38.46637] },
      { "id": "650000", "index": 27, "name": "新疆", "value": [87.617733, 43.792818] },
      { "id": "110000", "index": 28, "name": "北京", "value": [116.405285, 39.904989] },
      { "id": "120000", "index": 29, "name": "天津", "value": [117.190182, 39.125596] },
      { "id": "310000", "index": 30, "name": "上海", "value": [121.472644, 31.231706] },
      { "id": "500000", "index": 31, "name": "重庆", "value": [106.504962, 29.533155] },
      // { "id": "810000", "index": 32, "name": "香港", "value": [114.173355, 22.320048] },
      // { "id": "820000", "index": 33, "name": "澳门", "value": [113.54909, 22.198951] }
    ]

    option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var aaa = '<div>热力值:</div class="tooltips_box">'+params.name + ' : ' + params.data.index;
          return aaa;
        //   params.name + ' : ' + params.data.index;
        }
      },
      geo: {
            map: 'china',
            roam:true,
            center: [103.73,36.03],
            zoom: 1,  // 默认缩放比例
            silent:true,
            scaleLimit:{  // 缩放 比例
              min: 1,
              max: 12,
            },
            label: {
                emphasis: { //是否显示 省会名字
                    show: false
                }
            },
            itemStyle: {// 定义样式
              normal: {					// 普通状态下的样式
                  areaColor: '#5F65E5',
                  borderColor: 'transparent',
                  borderWidth: 0,
              },
              emphasis: {					// 高亮状态下的样式
                  areaColor: '#5F65E5',
              }
          }
      },
      series: [
        {
          name: '热力值',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: datas, // series数据内容
          symbolSize: function (val, all) {
              return all.data.index;
          },
          label: {
              normal: {
                  show: false
              },
              emphasis: {  // 默认显示城市名
                  show: false
              }
          },
          itemStyle: { // 圆圈样式
            normal: {  // 默认样式
                  color: '#FFAAF2',
                  shadowBlur: 0,
                  shadowColor: '#333',
                  borderWidth:2,
                  borderColor: '#F74D8A',
            },
            emphasis: {   // 选中样式
              borderWidth:2,
              borderColor: '#F74D8A',
            }
          }
        },
        {
            name: 'Top 3 热力值',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: datas.sort(function (a, b) {
                return b.index - a.index;
            }).slice(0, 3),
            symbolSize: function (val, all) {
                return all.data.index;
            },
            // showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 圆圈样式
              normal: {  // 默认样式
                    color: '#FFEAAA',
                    // shadowBlur: 5,
                    // shadowColor: '#FFEE86',
                    borderWidth:2,
                    borderColor: '#F7B04D',
              },
              emphasis: {   // 选中样式
                borderWidth:2,
                borderColor: '#F7B04D',
              }
            }
        },
      ]
    }
    
    