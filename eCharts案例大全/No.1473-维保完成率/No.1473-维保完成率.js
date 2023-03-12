// 完整代码请参考人防项目
const data1 = [
        {name: '桐庐县', value: 90},
        {name: '淳安县', value: 92},
        {name: '临平区', value: 88},
        {name: '萧山区', value: 76},
        {name: '拱墅区', value: 65},
        {name: '滨江区', value: 60},
        {name: '上城区', value: 56},
        {name: '余杭区', value: 48},
        {name: '钱塘区', value: 46},
        {name: '临安区', value: 45},
        {name: '西湖区', value: 38},
        {name: '本市级', value: 29},
      ]
const name = data1.map(item => {
  return item.name
})
const img = 'https://avatar.csdnimg.cn/9/9/0/3_a_runner.jpg'
option = {
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    show: false,

  },
  yAxis: {
    type: 'category',
    data: name,
    axisLine: {
      color: 'rgba(138, 143, 169, 1)'
    },
    inverse: true,
    axisTick: {
      show: false
    },
    axisLabel: {
      formatter: (params, index) => {
        let _html = (index + 1) + ' ' + params
        if (index === 0 || index === 1 || index === 2){
          _html = '{img1|}' + params
        }
        return _html
      },
      rich: {
        img1: {
          width: 20,
          height: 20,
          align: 'center',
          backgroundColor: {
            image: img
          }
        },
        img2: {
          backgroundColor: {
            image: ''
          }
        },
        img3: {
          backgroundColor: {
            height: 10,
            align: 'center',
            backgroundColor: {
              image: ''
            }
          }
        }
      }
    }
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: data1,
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(20, 50, 89, 1)',
        borderRadius: [0, 50, 50, 0]
      },
      itemStyle: {
        borderRadius: [0, 50, 50, 0],
        color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: 'transparent' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#00A5FF' // 100% 处的颜色
                  }
                ],
              }
      },
      label: {
        show: true,
        position: 'right',
        color: 'white'
      }
    },
    
  ]
};