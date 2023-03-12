option = {
    tooltip: {
        trigger: 'axis'
    },
    backgroundColor:'transparent',
    legend: {
        data: ['当日用水逐时变化阶梯图', '标准日用水逐时变化阶梯图']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick:{
            show:false,
        },
        axisLine:{
          lineStyle:{
              color:'rgba(31, 75, 123, 1)'
          }
        },
       axisLabel:{
         color:"rgba(164, 186, 206, 1)",
         fontSize:24,
        },
        data: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
    },
    yAxis: {
        type: 'value',
        min:'0',
        name:'m³',
        nameTextStyle:{
            color:'rgba(95, 179, 255, 1)',
            fontSize:26,
        },
        axisLine:{
          lineStyle:{
              color:'rgba(164, 186, 206, 1)'
          }
        },
        axisLabel:{
         color:"rgba(164, 186, 206, 1)",
         fontSize:24,
        },
        splitLine:{
        lineStyle:{
            color:'rgba(164, 186, 206, 0.3)',
            type:'dashed',
        }  
         },
        max:'60',
    },
    series: [
        {
            name: '当日用水逐时变化阶梯图',
            type: 'line',
            symbol:'',
            step: 'start',
            data: [20, 32, 11, 34, 40, 30, 20]
        },
        {
            name: '标准日用水逐时变化阶梯图',
            type: 'line',
            symbol:'',
            step: 'middle',
            data: [20, 22, 21, 34, 40, 30, 40]
        },
    ]
};