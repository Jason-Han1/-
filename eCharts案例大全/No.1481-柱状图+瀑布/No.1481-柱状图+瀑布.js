option = {
  tooltip: {
        // trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
        
    },
   
    
    xAxis: [        {
            type: 'category',
            data: ['', '试题', '试卷', '课题', '录播', '','试题', '试卷', '课题', '录播',  '','试题', '试卷', '课题', '录播',  '','试题', '试卷', '课题', '录播'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],


yAxis: [        {
            type: 'value',
            max:1000,
            interval: 100,
            axisLabel: {
                formatter: '{value}'
            },
        },
        {
    max:800,
    axisLabel: {
         show: false,
          },
            
        
         
        }
    ],
    
    series: [     
        {
            name: '增长总数',
            type: 'bar',
            data: [350, 0, 0, 0,0, 400, 0, 0, 0, 0, 450, 0, 0, 0, 0,  500, 0, 0, 0, 0, ]
        },
        
        {
            // name: '平均温度',
            type: 'line',
            yAxisIndex: 1,
            connectNulls: true,
            label : {show: true},   //顶部显示数值
            data: [350,"","","","",400,"","","","",450,"","","","",500,"","","","",]
        
        },
        {
            // name: '辅助',
            type: 'bar',
            stack: '增减',
            itemStyle: {
                barBorderColor: 'rgba(0,0,0,0)',
                color: 'rgba(0,0,0,0)'
            },
            emphasis: {
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: ['', 360, 340, 360,340, '', 410, 390, 410,390,'', 460, 440, 460,450,'', 510, 490, 510,490,]
        },
        {
            // name: '支出',
            type: 'bar',
            stack: '增减',
            label: {
                show: true,
                position: 'top'
            },
            data: ['', 10,10 , 10,10,'', 10,10 , 10,10,'', 10,10 , 10,10,'', 10,10 , 10,10,],
             
        },
        
    ]
};
