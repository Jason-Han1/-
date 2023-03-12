
option = {
     backgroundColor: '#0e1c47',
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
             lineStyle: {
             color: '#000',
             },
        },
              axisLabel:{
            show: true,
            textStyle: {
                fontSize:30,
                color:'#ccc'
            }
            
        },
       axisTick: {
                    show: false,
                },
        data: ['00', '01', '02', '03', '04', '05', '06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23']
    },
    yAxis: {
        type: 'value',
                 axisLabel:{
            show: true,
            textStyle: {
                fontSize:30,
                color:'#ccc'
            }
            
        },
               axisLine: {
            show: true,
             lineStyle: {
             color: '#000',
             },
        },
    },
    series: [{
        data: [23, 40, 50, 55, 40, 60, 40,0,-10,-20,-50,-55,-30,-10,0,10,20,30,40,55,30,20,10,0,-10,-20],
        type: 'line',
        symbol:'none',
        
smooth:true,
       lineStyle: {
                normal: {
                    width: 3,
                    color: '#1494f7',
                },
            },
         areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(21, 143, 252, 0.6)',
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(21, 143, 252, 0.6)',
                            },
                        ],
                        false
                    ),
                },
            },
    }]
};

