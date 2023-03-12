let police = [],
    policeman = [],
    data = {},
    arr= [];
data.help = [{
        name: "武汉市",
        value: 3776
    },
    {
        name: "黄石市",
        value: 689
    },
    {
        name: "十堰市",
        value: 771
    },
    {
        name: "荆州市",
        value: 1120
    },
    {
        name: "宜昌市",
        value: 887
    },
    {
        name: "襄阳市",
        value: 543
    },
    {
        name: "鄂州市",
        value: 320
    },
    {
        name: "荆门市",
        value: 422
    },
    {
        name: "黄冈市",
        value: 330
    },
    {
        name: "孝感市",
        value: 572
    },
    {
        name: "咸宁市",
        value: 569
    },
    {
        name: "恩施州",
        value: 657
    },
    {
        name: "随州市",
        value: 205
    },
    {
        name: "仙桃市",
        value: 39
    },
    {
        name: "潜江市",
        value: 138
    },
    {
        name: "天门市",
        value: 21
    },
    {
        name: "林区",
        value: 8
    },
    {
        name: "油田",
        value: 25
    }
]
data.police = [{
        name: "武汉市",
        value: 5162
    },
    {
        name: "黄石市",
        value: 1558
    },
    {
        name: "十堰市",
        value: 932
    },
    {
        name: "荆州市",
        value: 1212
    },
    {
        name: "宜昌市",
        value: 1333
    },
    {
        name: "襄阳市",
        value: 1065
    },
    {
        name: "鄂州市",
        value: 246
    },
    {
        name: "荆门市",
        value: 703
    },
    {
        name: "黄冈市",
        value: 706
    },
    {
        name: "孝感市",
        value: 972
    },
    {
        name: "咸宁市",
        value: 468
    },
    {
        name: "恩施州",
        value: 667
    },
    {
        name: "随州市",
        value: 380
    },
    {
        name: "仙桃市",
        value: 272
    },
    {
        name: "潜江市",
        value: 189
    },
    {
        name: "天门市",
        value: 42
    },
    {
        name: "林区",
        value: 46
    },
    {
        name: "油田",
        value: 58
    },
    {
        name: "机场",
        value: 35
    }
]
data['police'].map(item => {
    item.name = item.name.split('');
    item.name = item.name.join('\n')
    arr.push(item.name);
    police.push(item.value);
})
data['help'].map(item => {
    policeman.push(item.value);
})
console.log(arr)
option = {

    title: {
			text: '全省公安派出所 民警/辅警 数',
			left: 'center',
			top: '10',
			textStyle: {
				color: 'white'
			}
		},
		 title: {
      text: 'sdsd',
      left: 'center',
      top: '10',
      textStyle: {
        color: 'white'
      }
    },
    backgroundColor: 'rgb(1, 31, 67)',
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: ['民警', '辅警'],
      x: 'right',
      itemGap: 40,
      right: 10,
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: arr,
      axisLine: {
        lineStyle: {
          color: '#00478b'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 12
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 71, 139, .2)'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      name: '人',
      nameTextStyle: {
        color: 'white'
      },
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        lineStyle: {
          color: '#00478b'
        }
      },
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
        fontSize: 14
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 71, 139, .2)'
        }
      }
    }],
    series: [{
      name: '民警',
      type: 'bar',
      data: police,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'RGB(254,122,79)'
          }, {
            offset: 0.8,
            color: 'RGB(225,41,69)'
          }], false)
        }
      }
    }, {
      name: '辅警',
      type: 'bar',
      data: policeman,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#00b0ff'
          }, {
            offset: 0.8,
            color: '#7052f4'
          }], false)
        }
      }
    }]
};