var list = [
    {
        date: '1953年6月30日',
        title: '第一次全国人口普查',
        total: 601912371
    },
    {
        date: '1964年7月1日',
        title: '第二次全国人口普查',
        total: 694580000
    },
    {
        date: '1982年7月1日',
        title: '第三次全国人口普查',
        total: 1008180000
    },
    {
        date: '1989年7月1日',
        title: '第四次全国人口普查',
        total: 1133680000
    },
    {
        date: '2000年7月1日',
        title: '第五次全国人口普查',
        total: 1242600000
    },
    {
        date: '2010年11月1日',
        title: '第六次全国人口普查',
        total: 1339724852
    }
]
var min = 0, xarr = [], yarr = [], linearr = []
list.map(item => {
    linearr.push(0)
    xarr.push(item.total)
    yarr.push(`${item.date}\n${item.title}`)
    if (min < item.total) min = item.total
})
min = parseInt(min / 8)
linearr.fill(-min)
var linev = { value: -min, symbol: 'none' }
var barv = { value: 0, label: { show: false } }
option = {
    grid: {
      top: 0,
      left: 0,
      right: 0,
      bottom: '20%'
    },
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        padding: [2, 0, 0, 0]
      }
    },
    yAxis: {
      axisLine: {show: false},
      axisTick: {show: false},
      axisLabel: {show: false},
      splitLine: {show: false},
      min: -min
    },
    xAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false,
        alignWithLabel: true
      },
      axisLabel: {
        margin: 30,
        alignWithLabel: true
      },
      data: ['', ...yarr, '']
    },
    color: ['#F5222D'],
    series: [{
      name: '人口数量',
      type: 'bar',
      barWidth: 30,
      label: {
        show: true,
        position: 'right',
        formatter(val) {
            console.log(val.value)
            return (val.value/100000000).toFixed(2) + '亿人'
        }
      },
      data: [barv, ...xarr, barv]
    },
    {
      type: 'line',
      symbolSize: 8,
      itemStyle: {
        borderColor: "#F5222D",
        borderWidth: 2,
      },
      hoverAnimation: false,
      legendHoverLink: false,
      data: [linev, ...linearr, linev],
      lineStyle: {
          color: '#F5222D'
      }
    }],
}