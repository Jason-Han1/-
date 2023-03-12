var jisuanmax = 6;

option = {
  color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
  grid: {
        left: '10%',
        right: '4%',
        bottom: '3%',
        top:'80',
        containLabel: true
    },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend:{
    data:['1000吨以下加油站站长','1000吨以下加油站员工','1000吨以下加油站站长平均','1000吨以下加油站员工平均','1000~2000吨加油站站长','1000~2000吨加油站员工','1000~2000吨加油站站长平均','1000~2000吨加油站员工平均','2000~3000吨加油站站长','2000~3000吨加油站员工','2000~3000吨加油站站长平均','2000~3000吨加油站员工平均']
  },
  xAxis: [
    {
      type: 'category',
      data: ['河南', '开封', '许昌', '平顶山', '开封', '周口'],
      nameTextStyle: {
        fontSize: '200',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: '收入',
      position: 'right',
      axisLabel: {
        formatter: '{value} 万元'
      }
    },
  ],
  series: [
    //这个区域单独拿出来是为了设置其它的折线zlevel
    //颜色区域划分
    /*主要配置start*/
    {
      type: 'line',
      markArea: {
        silent: true,
        data: [
          [
            {
              name: '1000吨以下',
              yAxis: 0,
              itemStyle: { color: 'rgba(128, 128, 128, 0.5)', opacity: 0.9 },
              label: { position: 'left', color: 'blue' },
            },
            { yAxis: 1 },
          ],
          [
            {
              name: '1000~2000吨',
              yAxis: 1,
              itemStyle: { color: 'blue', opacity: 0.3 },
              label: { position: 'left' },
            },
            { yAxis: 2 },
          ],
          [
            {
              name: '2000~3000吨',
              yAxis: 2,
              itemStyle: { color: 'yellow', opacity: 0.3 },
              label: { position: 'left' },
            },
            { yAxis: 3 },
          ],
          [
            {
              name: '3000~4000吨',
              yAxis: 3,
              itemStyle: { color: 'red', opacity: 0.3 },
              label: { position: 'left' },
            },
            {
              yAxis: jisuanmax, //这个需要计算出来
            },
          ],
        ],
      },
    },
    /*主要配置end*/
    // 折线图数据
  ],
};

var names = ['1000吨以下加油站站长','1000吨以下加油站员工','1000吨以下加油站站长平均','1000吨以下加油站员工平均']

for (var i = 0;i < names.length; i++ ) {
  option.series.push({
    name: names[i],
    type: 'line',
    data: [1.2+i*.1, 1.3+i*.1, 1.2+i*.1, 1.3+i*.1, 1.2+i*.1, 1.2+i*.1],
  });
}
var names2 = ['1000~2000吨加油站站长','1000~2000吨加油站员工','1000~2000吨加油站站长平均','1000~2000吨加油站员工平均']

for (var i = 0;i < names2.length; i++ ) {
  option.series.push({
    name: names2[i],
    type: 'line',
    data: [2.2+i*.1, 2.4+i*.1, 2.3+i*.1, 2.3+i*.1, 2.3+i*.1, 2.4+i*.1],
  });
}
var names3 = ['2000~3000吨加油站站长','2000~3000吨加油站员工','2000~3000吨加油站站长平均','2000~3000吨加油站员工平均']

for (var i = 0;i < names3.length; i++ ) {
  option.series.push({
    name: names3[i],
    type: 'line',
    data: [1.8+i*.1, 3.3+i*.1, 3.2+i*.1, 3.6+i*.1, 3.2+i*.1, 2.9+i*.1],
  });
}