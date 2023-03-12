var data1 = [100, 60, 50, 40, 20];
var data2 = ['', '', '', '', 20, 60];
var dataX = ['01','01', '02', '01','01', '02'];
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {
        type: 'value',
    },
    series: [
      {
          data: data1,
          type: 'line',
          z: 999999,
          smooth: false,
          symbol: 'emptyCircle',
          symbolSize: 10,
          showSymbol: true,
          itemStyle : { 
            normal: {
              label : {
                show: true // 顶端内容显示
              },
              color: "#25a4fb",
              lineStyle: {
                color: "#25a4fb"
              }
            }
          },
          areaStyle: {
            normal: {      
              origin: 'start',
              color: new echarts.graphic.LinearGradient(     
                  0, 0, 0, 1,
                  [
                    {
                      offset: 0, 
                      color: '#e6f5fe'
                    },
                    {
                      offset: 0.5, 
                      color: '#f5fbff'
                    },
                    {
                      offset: 1, 
                      color: '#fff'
                    }   
                  ]                  
              )                            
            }
          }
      },
      {
        name: '',
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 10, // 圆点大小
        itemStyle:{
            normal:{
              label : {
                show: true // 顶端内容显示
              },
              color: "#ffa422",
              lineStyle:{
                  width:2,
                  color: '#ffa422',
                  type:'dashed' 
              }
            }
        },
        data: data2,
        areaStyle: {
          normal: {      
            origin: 'start',
            color: new echarts.graphic.LinearGradient(     
                0, 0, 0, 1,
                [
                  {
                    offset: 0, 
                    color: '#eee9da'
                  },
                  {
                    offset: 0.5,
                    color: '#fff6e8'
                  },
                  {
                    offset: 1, 
                    color: '#fff'
                  }
                ]                  
            )                            
          }
        }
      },
    ],
};