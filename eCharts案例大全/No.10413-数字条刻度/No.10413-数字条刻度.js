option = {
    backgroundColor: '#05288C',
 
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
          axisLabel: {
              textStyle: {
                  fontSize: 16,
                  color: '#D5CBE8'
              }
          },
          axisTick:{
              show:false,
          },
           axisLine: {
               show:false,
          
        },
        splitLine: {
            show:false,
           
        }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : [],
        
           axisLine: {
               show:false,
            lineStyle: {
                color: '#DDD'
            }
        },
        }
    ],
    series : [
        {
            name:'5月',
            type:'bar',
            barWidth: 0.1,
             itemStyle: {
            lable:{
                show:false
            },
          },
            data:[80,100,200],
        },
    ]
};
                    