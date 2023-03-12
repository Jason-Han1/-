const outBg = 'rgba(32, 46, 92,1)'; // 外圈背景
var percent = 90;//百分数
option = {
    backgroundColor: 'rgb(5,27,73)',
    series: [
      // 外层圆环背景
      {
        "name": '',
        "type": 'pie',
        "radius": ['70%', '90%'],
        "avoidLabelOverlap": false,
        "startAngle": 225,
        color: [outBg, 'none'], // 背景底色
        "hoverAnimation": false, // 是否开启 hover 在扇区上的放大动画效果。
        "legendHoverLink": false, // 是否启用图例 hover 时的联动高亮。
        "label": {
          "normal": {
            "show": false,
            "position": 'center'
          },
          "emphasis": {
            "show": true,
            "textStyle": {
              "fontSize": '30',
              "fontWeight": 'bold'
            }
          }
        },
        "labelLine": {
          "normal": {
            "show": false
          }
        },
        "data": [{
          "value": 75,
          "name": '1',
          itemStyle: {
            borderWidth: 2, // 边框
            borderColor: "rgb(5,118,164)",
            // color: 'rgb(32,46,92)'
          }
        }, {
          "value": 25,
          "name": '2'
        }]
      },
      // 内层圆环
      {
        "name": ' ',
        "type": 'pie',
        "radius": ['55%', '54%'],
        "avoidLabelOverlap": false, // 是否启用防止标签重叠策略
        "startAngle": 225,
        "hoverAnimation": false,
        "legendHoverLink": false,
        "label": {
          "normal": {
            "show": false,
            "position": 'center'
          },
          "emphasis": {
            "show": true,
            "textStyle": {
              "fontSize": '30',
              "fontWeight": 'bold'
            }
          }
        },
        "labelLine": {
          "normal": {
            "show": false
          }
        },
        "data": [{
          "value": 75,
          "name": '1',
          itemStyle: {
            borderWidth: 0,
            color: 'rgba(1, 168, 233, 1)'
          }
        }, {
          "value": 25,
          "name": '2'
        }]
      },
      // 外层数据圆环
      {
        "name": '',
        "type": 'pie',
        "radius": ['70%', '90%'],
        "avoidLabelOverlap": false,
        "startAngle": 315,
        "color": ['transparent', "red", "transparent"],
        "hoverAnimation": false,
        "legendHoverLink": false,
        "clockwise": false, // 饼图的扇区是否是顺时针排布。
        "itemStyle": {
          "normal": {
            "borderColor": "transparent",
            "borderWidth": "20"
          },
          "emphasis": {
            "borderColor": "transparent",
            "borderWidth": "20"
          }
        },
        "z": 10,
        "label": {
          "normal": {
            "show": false,
            "position": 'center'
          }
        },
        "labelLine": {
          "normal": {
            "show": false
          }
        },
        "data": [{ // 无占比
          "value": (100 - percent) * 270 / 360,
          "label": {
            normal: {
              formatter: percent + '%',
              position: 'center',
              show: true,
              textStyle: {
                fontSize: '60',
                fontWeight: 'normal',
                color: '#fff'
              }
            }
          },
          "name": ''
        }, { // 占比圆环高亮
          "value": 1,
          "name": '',
          itemStyle: {
            color: 'rgb(1,223,243)'
          }
        }, { // 占比
          "value": 100 - (100 - percent) * 270 / 360,
          "name": '',
          itemStyle: {
            color: { // 外层圆环底色
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0.75, // 设置成1下面也会显示
                color: 'rgba(71, 123, 242,0)' // 0% 处的颜色
              }, {
                offset: 0,
                color: 'rgba(71, 123, 242,1)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            }
          }
        }]
      },
      // 内部实心圆
      {
        type: 'pie',
        radius: '43%',
        center: ['50%', '50%'],
        z: 1,
        itemStyle: {
          normal: {
            color: new echarts.graphic.RadialGradient(.5, .5, .4, [{
              offset: 0,
              // color: 'rgb(25,46,106)',
              color: 'rgba(31,60,146,0)'
            },
            {
              offset: .7,
              color: 'rgba(31,60,146,0.5)'
            },
            {
              offset: 1,
              // color: 'rgb(3,16,53)'
              color: 'rgba(3,16,53, 1)'
            }], false),
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
        },
        hoverAnimation: false,
        label: {
          show: false,
        },
        tooltip: {
          show: false
        },
        data: [100]
      }
    ]
};
