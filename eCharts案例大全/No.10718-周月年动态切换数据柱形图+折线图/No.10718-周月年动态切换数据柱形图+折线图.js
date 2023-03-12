//2019-07-17 因结构限制，动态切换数据周，月，年
//   vue完整版请看https://blog.csdn.net/qq_42221334/article/details/96307823

option = {
    backgroundColor: '#1c2431',//地图背景色
    color: ['#4fd7fd',"#b2f567"],
    legend: {
      data:['诊断数量'],
      textStyle: {
        fontSize: '12',
        color:'#fff'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: 'red'
        }
      }
    },
    //2019-07-17 因结构限制，动态切换数据周，月，年
//   vue完整版请看https://blog.csdn.net/qq_42221334/article/details/96307823
    xAxis: [
      {
        type: 'category',
        data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        axisLabel: {
          textStyle: {
            fontSize: '12',
            color:'#fff'
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            fontSize: '12',
            color:'#fff'
          }
        },
      }
    ],
    series: [
      {
        name:'诊断数量',
        type:'bar',
        data:[200, 300,500, 200, 152, 320, 214, 162, 480, 200, 100, 23],
        barWidth:8
      },
      {
        name:'平均值',
        type:'line',
        symbol: 'circle',//折线点设置为实心点
        symbolSize: 10,   //折线点的大小
        data:[200, 300,500, 200, 152, 320, 214, 162, 480, 200, 100, 23]
      }
    ]
};

//2019-07-17 因结构限制，动态切换数据周，月，年
//   vue完整版请看https://blog.csdn.net/qq_42221334/article/details/96307823