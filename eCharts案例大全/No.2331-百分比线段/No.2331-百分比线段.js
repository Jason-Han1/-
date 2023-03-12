
data = [
    {
      name: 'mt',
      color: '#242424',
      jf: 100
    },
    {
      name: 'dd',
      color: '#F9333F',
      jf: 80
    },
    {
      name: 'el',
      color: '#FF6452',
      jf: 20
    },
    {
      name: 'ee',
      color: '#FF6452',
      jf: 20
    }
]
const colors = data.map(val => val.color)

const series = data.map((val, index) => ({
     name: val.name,
    type: 'bar',
    stack: '积分',
    label: {
        normal: {
            show: true,
            position: index % 2 === 0 ? 'bottom' : 'top',
            formatter: '{a}：{c}',
            color: '#fff'
        },
    },
    barWidth: 6,
    data: [val.jf],
}))

option = {
    backgroundColor: '#666',
    color: colors,
    legend: {
        show: false,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        data: [''],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false
        }
    },
    series: series
};

