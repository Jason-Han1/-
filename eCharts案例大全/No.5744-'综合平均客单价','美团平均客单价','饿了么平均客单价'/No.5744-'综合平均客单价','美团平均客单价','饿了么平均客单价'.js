

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
          data:['综合平均客单价','美团平均客单价','饿了么平均客单价'],
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

        series: [{
            name:'综合平均客单价',
            smooth:true,
            data: [12.25, 25.32, 15.25, 42.32, 22.2, 26.9, 32.25,31.25,14.52,65.22,18.6,25.3],
            type: 'line',
            areaStyle: {}
          },{
            name:'美团平均客单价',
            smooth:true,
            data: [12.25, 25.32, 12.25, 22.32, 22.2, 26.9, 33.25,31.25,12.52,12.22,22.6,25.3],
            type: 'line',
            areaStyle: {}
          },{
            name:'饿了么平均客单价',
            smooth:true,
            data: [22.25, 33.32, 33.25, 42.32, 22.2, 26.9, 32.25,31.25,44.52,65.22,44.6,33.3],
            type: 'line',
            areaStyle: {}
          },
        ]        
    
};