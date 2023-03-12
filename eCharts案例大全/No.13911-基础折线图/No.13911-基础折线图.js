
var data = {
  title: '折线图堆叠MOCK',
  xAxisData: ['周一','周二','周三','周四','周五','周六','周日'],
  series: [
    {
      "name":"新增事件",
      "type":"line",
      "stack":"总量",
      "data":[120,132,101,134,90,230,210],
      smooth: false
    }
  ]
}

option = {
    title: {
        text: data.title
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        data: data.xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: data.series
};