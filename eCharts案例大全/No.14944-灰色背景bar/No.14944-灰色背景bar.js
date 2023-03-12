
option = {
 
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            data : ['s1','s2','s3','s4','s5']
        },
        //辅助x轴
        {
            type : 'category',
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel: {show:false},
            splitArea: {show:false},
            splitLine: {show:false},
            data : ['s1','s2','s3','s4','s5']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{formatter:'{value} 分'}
        }
    ],
    series : [
          //背景
        {
            name:'成绩',
            type:'bar',
            xAxisIndex:1,
            itemStyle: {
                normal: {
                    color:'rgba(102, 102, 102,0.5)'
                }
            },
            data:[100,100,100,100,100]
        },
        {
            name:'成绩',
            type:'bar',
            itemStyle: {
              normal: {
                 color:'#aabea0',
              }
            },
            data:[70,80,50,90,100]
        },
      
    ]
};
