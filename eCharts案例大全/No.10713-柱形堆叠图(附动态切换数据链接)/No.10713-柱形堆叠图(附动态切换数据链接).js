//2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823
option = {
    backgroundColor: '#1c2431',//地图背景色
    title: {
        text: '因结构不同 要实现 周月年动态切换数据功能请访问左侧注释网址',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#fff',
            fontSize: 12
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
          selectedMode:false,//取消图例上的点击事件
          data:['系统外部','系统内部'],
          textStyle: {
            fontSize: '12',
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
            data : ['K4310','K43102','K52001','H2021','H2021'],
            axisLabel: {
              rotate:45,//斜体字可不用
              textStyle: {
                fontSize: '12',
                color:'#fff'
              }
            },
          }
        ],
        yAxis : [
          {
            type : 'value',
            minInterval:100,//设置左侧Y轴最小刻度
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color: 'rgba(135,140,147,0.8)'
              }
            },//设置横线样式
            axisLabel: {
              textStyle: {
                fontSize: '12',
                color:'#fff'
              }
            },
          }
        ],
        //2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823
        series : [
          {
            name:'系统外部',
            type:'bar',
            stack: '排名',
            data:[120, 132, 101, 134, 90],
            barWidth:8
          },
          {
            name:'系统内部',
            type:'bar',
            stack: '排名',
            data:[220, 182, 191, 234, 290],
            barWidth:8,
            itemStyle:{
              normal:{
                barBorderRadius: [30, 30, 0, 0],
              }
            }
          },
        ]
};

//2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823