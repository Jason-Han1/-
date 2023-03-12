
//x轴-时间
var date = [];
//y轴-数据
var data = [];
//下标
var index = 0;
var allData = [
    {"time":"01:01:00","num":73},
    {"time":"01:02:00","num":42},
    {"time":"01:03:00","num":88},
    {"time":"01:04:00","num":50},
    {"time":"01:05:00","num":36},
    {"time":"01:06:00","num":81},
    {"time":"01:07:00","num":83},
    {"time":"01:08:00","num":29},
]
allData.map( (val,idx) => {
    data.push(val.num);
    date.push(val.time)
});

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '每分钟都更新数据--baiyf',
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        type: 'value',
        min:0,
        max:120
    },
    dataZoom: [{
        type: 'inside',
         xAxisIndex:0,
        startValue: "01:01:00",
        endValue: "01:08:00"
    }],
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:false,    //拐弯处变锋利
            symbol: 'none',//去除圆角
            sampling: 'average',
            animationDurationUpdate:1000,    //数据更新时的动画时长
            animationEasing:"bounceIn",
            animationDelayUpdate: function (idx) {
                // 越往后的数据延迟越大
                return idx * 10;
            },
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: data
        }
    ]
};

  setInterval(() => {
      data.push(20*1 + sum(10,30)*1);
      date.push(index+"天！");
      option.dataZoom[0].startValue = date[index];
      option.dataZoom[0].endValue = date[date.length-1];
      index+=1;
      option.xAxis.data = date;
      option.series[0].data = data;
      myChart.setOption(option);
      console.log(option.dataZoom[0]);
      console.log(date);
  }, 1000);

function sum (m,n){
　　var num = Math.floor(Math.random()*(m - n) + n);
    return num;
}
