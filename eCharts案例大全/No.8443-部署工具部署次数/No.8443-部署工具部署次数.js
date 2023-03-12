//2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823
option = {
    backgroundColor: '#1c2431',//地图背景色
    title: {
        text: '部署工具部署次数',
        x: 'center',
        top: "25",
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
   
    color: ["#ed9d3c",'#4fd7fd'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
      data:['测试环境', '线上'],
      textStyle: {
        fontSize: '14',
        color:'#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        data : ['4月','5月','6月','7月','8月'],
        axisLabel: {
          textStyle: {
            fontSize: '16',
            color:'#fff'
          }
        },
      }
    ],
    yAxis : [
      {
        type : 'value',
        name: "部署次数",
        nameTextStyle: {
            color: '#fff',
            fontSize: '16'
        },
        minInterval:20,//设置左侧Y轴最小刻度
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(135,140,147,0.8)'
          }
        },//设置横线样式
        axisLabel: {
          textStyle: {
            fontSize: '14',
            color:'#fff'
          }
        },
      }
    ],
    //2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823
    series : [
      {
        name:'测试环境',
        type:'bar',
        stack: '排名',
        data:[136, 153, 62, 117, 56],
        barWidth:38
      },
      {
        name:'线上',
        type:'bar',
        stack: '排名',
        data:[66, 50, 31, 24, 27],
        barWidth:38,
        itemStyle:{
          normal:{
            barBorderRadius: [0, 0, 0, 0],
          }
        }
      },
        ]
};

//2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823