// let data= [
//         { unitname: '上海', nums: 15 },
//         { unitname: '西安', nums: 10 },
//         { unitname: '贵阳', nums: 9 },
//         { unitname: '武汉', nums: 8 },
//         { unitname: '义乌', nums: 7 },
//         { unitname: '温州', nums: 6 },
//         { unitname: '杭州', nums: 5 },
//         { unitname: '南京', nums: 4 },
//         { unitname: '苏州', nums: 3 }
//       ]
option = {
    backgroundColor: '#010429',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '10%',
          right: '3%',
          left: '5%',
          bottom: '12%',
          height: '80%'
        },
        xAxis: [
          {
            type: 'category',
            data:['上海','上海','上海','上海','上海'], //data.map(e => e.unitname),
            axisLine: {
              show: false, //柱子底部线段显示隐藏
              lineStyle: {
                // show:false,
                color: '#fff',
                type: 'dashed'
              }
            },
            axisLabel: {
              show: true,
              color: '#fff',
              fontSize: 14,
              formatter: function (val) {
                var strs = val.split('') //字符串数组
                var str = ''
                for (var i = 0, s; (s = strs[i++]); ) {
                  //遍历字符串数组
                  str += s
                  if (!(i % 4)) str += '\n' //按需要求余
                }
                return str
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            show: false
          }
        ],
        series: [
          {
            type: 'bar',
            data:[15,11,2,2,3,1,1],// data.map(e => e.nums),
            barWidth: '28px',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: '#9529FB' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#2D35EA' // 100% 处的颜色
                    }
                  ],
                  false
                )
                // shadowColor:  "rgba(0,160,221,1)",//border颜色边框
                // shadowBlur: 4
              }
            },
            label: {
              //柱子头部显示数字
              normal: {
                color: '#fff',
                show: true,
                formatter: '{c}',
                position: 'top'
              }
            }
          }
        ]
      }
