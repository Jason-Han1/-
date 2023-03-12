let datas= [
        { unitname: '上海', nums: 15 },
        { unitname: '西安', nums: 10 },
        { unitname: '贵阳', nums: 9 },
        { unitname: '武汉', nums: 8 },
        { unitname: '义乌', nums: 7 },
        { unitname: '温州', nums: 6 },
        { unitname: '杭州', nums: 5 },
        { unitname: '南京', nums: 4 },
        { unitname: '苏州', nums: 3 }
      ]
option = {
    backgroundColor:'#010A31',
        title: {
          text: '数量',
          left: '1.7%',
          top: '-1%',
          textStyle: {
            color: '#fff'
            //  type: 'dashed',
          }
        },
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
            data: datas.map(e => e.unitname),
            axisLine: {
              lineStyle: {
                color: '#3A67A1'
                //  type: 'dashed',
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
            type: 'value',
            // name: "单位：人",
            nameTextStyle: {
              color: '#fff',
              fontSize: 16
            },
            axisLabel: {
              formatter: '{value}',
              color: '#fff'
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                // type: 'dashed',
                width: 1,
                color: '#203C6D'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#3A67A1' // "rgba(0,186,255,.6)"
              }
            }
          }
        ],
        series: [
          {
            type: 'bar',
            data: datas.map(e => e.nums),
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
                      color: '#FFBD81' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#EF9545' // 100% 处的颜色
                    }
                  ],
                  false
                )
                // shadowColor:  "rgba(0,160,221,1)",
                // shadowBlur: 4
              }
            },
            label: {
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
