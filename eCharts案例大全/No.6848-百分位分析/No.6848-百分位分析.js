option = {
    backgroundColor:'#fff',
    color:['#FCB618'],
    xAxis: {
        boundaryGap:0,
        gridIndex:0,
        data: ['10:00', '11:00', '12:00', '13:00','14:00', '15:00', '16:00', '17:00'],
   splitLine: {
            show: true,
            lineStyle: {
                color: "#EFF0F1"
            }

        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#EFF0F1"
            }

        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        },
    },
    legend:{
        itemWidth:10,
        itemHeight:10,
       data:[{
    name: '时段01',
    icon: 'roundRect',
    textStyle: {
        color: '#454545'
    }
    
}],
    },
    tooltip:{
         trigger: 'axis',
        formatter:function(p){
            if(p.seriesType==='line') return '';
            return `${p[0].name}<br/>${p[0].marker}中位数：${(p[0].value[1]+p[0].value[2])/2}次<br/>${p[0].marker}上四分位数：${p[0].value[1]}次<br/>${p[0].marker}下四分位数：${p[0].value[2]}次<br/>${p[0].marker}上极限：${p[0].value[4]}次<br/>${p[0].marker}下极限：${p[0].value[3]}次`
        }
    },
    yAxis: {
        max:140,
        min:0,
        splitNumber:7,
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000'
            }
        },
        splitLine: {
            show: true,
             lineStyle: {
                color: "#EFF0F1"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#EFF0F1"
            }
        },
    },
    series: [{
        type: 'candlestick',
        itemStyle:{
          color:'#FCB618' ,
          color0:'#FCB618',
          borderColor:'#FCB618',
          borderColor0:'#FCB618'
        },
        data: [
            [55, 45, 38, 60],
            [85, 65, 62, 90],
            [110, 90, 85, 120],
            [45, 75, 40, 80],
            [90, 105, 85, 110],
            [85, 65, 62, 90],
            [60, 75, 55, 80],
            [98, 110, 90, 120]
        ]
    },{
        name:'时段01',
        type: 'line',
        data: [
          50,75,100,60,97,75,67,104
        ], 
        symbolSize:0,
        lineStyle:{
          color:'#B07B00' , 
          width:1,
        },
        z:10
    }]
};
