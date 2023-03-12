
option = {
    //backgroundColor: '#1c2431',//地图背景色
    color: ["#F16188",'#FDC118','#28A1FF'],
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
    grid: {
        top:60,
        left:50,
        bottom:60,
        right:60
    },
        legend: {
          data:['实收金额','美团','饿了么'],
          textStyle: {
            fontSize: '12',
            color:'#1c2431'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2020/08/15', '2020/08/16', '2020/08/17', '2020/08/18', '2020/08/19', '2020/08/20', '2020/08/21','2020/08/22','2020/08/23','2020/08/24','2020/08/25','2020/08/26'],
          axisLabel: {
            textStyle: {
              fontSize: '12',
              color:'#1c2431'
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: '12',
              color:'#1c2431'
            }
          },
        },
// 因结构不同 vue版echarts请查看https://blog.csdn.net/qq_42221334/article/details/96315748
        series: [{
            name:'实收金额',
            smooth:true,
            data: [0, 180, 400, 300, 130, 150, 400,200,100,300,200,100],

            type: 'line',
            areaStyle: {}
          },
            {
            name:'美团',
            smooth:true,
               data: [0, 80, 300, 100, 100, 100, 200,100,50,150,120,80],
            type: 'line',
            areaStyle: {}
          },
            {
            name:'饿了么',
            smooth:true,
               data: [0, 100, 100, 200, 30, 50, 200,100,50,150,80,20],

            type: 'line',
            areaStyle: {}
          }
        ]        
    
};