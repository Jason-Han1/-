option = {
    title: {
        text: 'Sales Revenue 2016-2017'
    },
    
    tooltip: {                          // 提示框组件
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['2016', '2017'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        show: false                 // 网格边框是否显示，上和右边框 
    },
    toolbox: {  
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,          // 坐标轴两边留白
        splitLine: {                // 网格线 x轴对应的是否显示
            show: false
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    
    yAxis: [{
        type: 'value',
        splitLine: {                // 网格线 y轴对应的是否显示
            show: false
        },
        axisLabel: {
            formatter: '{value}'
        }
    }],
    
 //   visualMap: {                          # 旁边会有 视觉映射组件
   //     type: 'continuous',
     //   dimension: 1,
       // text: ['High', 'Low'],
//        inverse: true,
  //      itemHeight: 200,
    //    calculable: true,
      //  min: -2,
//        max: 6,
//        top: 60,
  //      left: 10,
    //    inRange: {
      //      colorLightness: [0.4, 0.8]
        //},
//        outOfRange: {
  //          color: '#bbb'
    //    },
      //  controller: {
        //    inRange: {
          //      color: '#01949B'
            //}
    //    }
    //},
    
    
    series: [
        {
            name:'2016',
            type:'bar',
            color:'#00BFFF',
            stack: '总量',              // 堆叠图
            data:[1741.9, 977, 1742.2, 1431.1, 1636.2, 1447, 1711.7, 1921.2, 2609.6, 3332.6, 3647.3, 2498.1]
        },
        {
            name:'2017',
            type:'bar',
            color: '#DC143C',
            stack: '总量',
            data:[2609, 1162.9, 2942.9, 5174.6, 5114.4, 5065.8, 3956.1, 3691.1, 4637.6, 4603.8, 6401.1, 4988.4]
        }
    ]
};

