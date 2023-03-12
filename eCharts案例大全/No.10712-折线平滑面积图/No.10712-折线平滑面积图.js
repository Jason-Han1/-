//2019-07-17 因结构不同 vue版echarts请查看https://blog.csdn.net/qq_42221334/article/details/96315748
option = {
    backgroundColor: '#1c2431',//地图背景色
    color: ["#fcc550",'#4fd7fd'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:['普通用户','租户用户'],
          textStyle: {
            fontSize: '12',
            color:'#fff'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11','12'],
          axisLabel: {
            textStyle: {
              fontSize: '12',
              color:'#fff'
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: '12',
              color:'#fff'
            }
          },
        },
// 因结构不同 vue版echarts请查看https://blog.csdn.net/qq_42221334/article/details/96315748
        series: [{
            name:'普通用户',
            smooth:true,
            data: [0, 180, 400, 300, 130, 150, 400,200,100,300,200,100],
            type: 'line',
            areaStyle: {}
          },
          {
            name:'租户用户',
            smooth:true,
            data: [0, 150, 350, 200, 400, 500, 280,180,150,300,200,0],
            type: 'line',
            areaStyle: {}
          }
        ]        
    
};
//2019-07-17 因结构不同 vue版echarts请查看https://blog.csdn.net/qq_42221334/article/details/96315748