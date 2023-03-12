configInterval = ['00:00','01:00','02:00','04:00','05:00','06:00','07:00'];

option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
          fontSize:20,
          // 第一种方法
          // 当interval使用函数的时候，showMaxLabel无效
          interval:(index,item)=>{
              return configInterval.includes(item);
          },
          
        //   第二种方法
        //   通过interval设置间隔数来实现
        //   interval:4,
        //   showMinLabel:true,
        //   showMaxLabel:true
        },
        data: ['00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00',
                '03:30', '04:00', '04:30', '05:00', '05:30', '06:00', '06:30','07:00'
        ]
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
    }]
};
