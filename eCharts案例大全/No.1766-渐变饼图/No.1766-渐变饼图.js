const color = [
  'rgb(79,173,175)',
  'rgb(78,170,248)',
  'rgb(238,143,83)',
  'rgb(237,113,75)' 
  ]
  // // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位位置
  const color1 = [{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0.8,
            colorStops: [{
                offset: 0, color: 'rgba(79,173,175, 0.2)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(79,173,175, 0.01)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0.8,
            colorStops: [{
                offset: 0, color: 'rgba(78,170,248, 0.2)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(78,170,248, 0.01)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0.8,
            colorStops: [{
                offset: 0, color: 'rgba(238,143,83, 0.2)' // 0% 处的颜色
            }, {
                offset: 1, color: 'rgba(238,143,83, 0.01)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },{
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0.8,
            colorStops: [{
                offset: 0, color: 'rgba(237,113,75, 0.2)' // 100% 处的颜色
            }, {
                offset: 1, color: 'rgba(237,113,75, 0.01)' // 0% 处的颜色
            }],
            global: false // 缺省为 false
        }]
const datas = [
    {name: '111', value: 30},
    {name: '222', value: 50},
    {name: '333', value: 70},
    {name: '444', value: 100},
  ]
option={
        backgroundColor:'#ffffff',
        tooltip: {
          show: true
        },
      legend: {
          right: '0',
          top: 'center',
          orient: 'vertical',
          itemWidth: 20,
          itemHeight: 20,
          icon: 'rect',
          data:datas
      },
        series: [
          {
            type: "pie",
            radius: ["40%", "45%"],
            center: ["30%", "50%"],
            hoverAnimation: true,
            z: 9,
            itemStyle: {
                color: function (params) {
                  return color[params.dataIndex]
                }
            },
            label: {
              show: false
            },
            data: datas,
            labelLine: {
              show: false
            }
          },
          {
            type: "pie",
            radius: ["0%", "45%"],
            center: ["30%", "50%"],
            hoverAnimation: true,
            z: 10,
            itemStyle: {
              normal: {
                borderWidth:5,
                borderColor: "#ffffff",
                color: function (params) {
                  return color1[params.dataIndex]
                }
              }
            },
            label: {
              show: false
            },
            data: datas,
            labelLine: {
              show: false
            }
          },
        ]
      }