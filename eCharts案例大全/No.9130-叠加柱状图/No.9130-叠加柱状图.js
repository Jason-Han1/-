//2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823
option = {
    backgroundColor: '#1c2431',//地图背景色
    title: {
        text: '保费分析（分渠道）',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#fff',
            fontSize: 22
        }
  },
    color: ["#ed9d3c",'#4fd7fd','#33CC66','#E4E4E4','#CC00FF','#169BD5'],
          tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          selectedMode:false,//取消图例上的点击事件
          data:['运营部','新媒体部','市场部','在线销售部','BD部','其他'],
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
            data : ['转化用户数','转化新保用户数','转化续保用户数','转化订单数','转化新保订单数','转化续保订单数'],
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
            name:'运营部',
            type:'bar',
            stack: '排名',
            data:[345, 132, 288, 342, 132, 288],
            barWidth:50
          },
           {
            name:'新媒体部',
            type:'bar',
            stack: '排名',
            data:[299, 132, 288, 432, 132, 288],
            barWidth:50
          },
           {
            name:'市场部',
            type:'bar',
            stack:[399, 132, 288, 232, 132, 288],
            barWidth:50
          },
           {
            name:'在线销售部',
            type:'bar',
            stack: '排名',
            data:[329, 132, 288, 232, 132, 288],
            barWidth:50
          },
           {
            name:'BD部',
            type:'bar',
            stack: '排名',
            data:[279, 132, 288, 282, 132, 288],
            barWidth:50
          },
          {
            name:'其他',
            type:'bar',
            stack: '排名',
            data:[299, 132, 288, 342, 132, 288],
            barWidth:12,
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

