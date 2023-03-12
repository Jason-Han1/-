//2019-07-17 因结构不同 要实现 周月年动态切换数据功能
//请参考 https://blog.csdn.net/qq_42221334/article/details/96307823
option = {
    backgroundColor: '#002060',//地图背景色
    title: {
        //text: '因结构不同 要实现 周月年动态切换数据功能请访问左侧注释网址',
        x: 'center',
        top: "20",
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
  },
    color: ["#ed9d3c",'#4fd7fd','#FFFF00','#95F204','#EC808D'],
          tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          selectedMode:false,//取消图例上的点击事件
          data:['未开工','已开工','已完工','计划取消','计划延迟'],
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
            data:['成都','巴中','达州','德阳','广安','广元','泸州','眉山','绵阳','内江','南充','攀枝花','遂宁','雅安','宜宾','资阳','自贡','乐山','阿坝','甘孜','西昌','天府'],
           // data: ['甘孜','阿坝 ','成都','攀枝花','凉山','绵阳','达州','广元','雅安','宜宾','乐山','南充','巴中','泸州','资阳','眉山','广安','德阳','内江','遂宁','自贡'],
            axisLabel: {
              //rotate:45,//斜体字可不用
              textStyle: {
                fontSize: '8',
                color:'#fff'
              }
            },
          }
        ],
        yAxis : [
          {
            type : 'value',
            name:'单位：个',
            nameTextStyle:{
              color:'#ffffff'  
            },
            minInterval:10,//设置左侧Y轴最小刻度
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
            name:'未开工',
            type:'bar',
            stack: '排名',
            data:[10, 12, 15, 6, 9,11,7,13,14,4,18,5,10,11,4,15,2,13,11,15,10,4],
            barWidth:10
          },
          {
            name:'已开工',
            type:'bar',
            stack: '排名',
            data:[9, 4, 10, 11, 2,6,8,11,13,6,14,6,16,8,11,4,14,12,2,5,1,6],
            barWidth:8,
          },
          {
            name:'已完工',
            type:'bar',
            stack: '排名',
            data:[10, 12, 15, 6, 9,11,7,13,14,4,18,5,10,11,4,15,2,13,11,15,10,2],
            barWidth:8
          },
          {
            name:'计划取消',
            type:'bar',
            stack: '排名',
            data:[9, 4, 10, 11, 2,6,8,11,13,6,14,6,16,8,11,4,14,12,2,5,1,3],
            barWidth:8,
            
          },
          {
            name:'计划延迟',
            type:'bar',
            stack: '排名',
            data:[10, 12, 15, 6, 9,11,7,13,14,4,18,5,10,11,4,15,2,13,11,15,10,8],
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
