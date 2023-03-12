option = {
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    legend:{
       data:['中位线'] 
    },
    tooltip:{
         trigger: 'axis',
        formatter:function(p){
            // console.log(p)
            if(p.seriesType==='line') return '';
            return `${p[0].name}<br/>${p[0].marker}中位数：${(p[0].value[1]+p[0].value[2])/2}次<br/>${p[0].marker}上四分位数：${p[0].value[1]}次<br/>${p[0].marker}下四分位数：${p[0].value[2]}次<br/>${p[0].marker}上极限：${p[0].value[4]}次<br/>${p[0].marker}下极限：${p[0].value[3]}次`
        }
    },
    yAxis: {},
    series: [{
        type: 'candlestick',
        itemStyle:{
          color:'#23a4f5' ,
          color0:'#23a4f5',
          borderColor:'#23a4f5',
          borderColor0:'#23a4f5'
        },
        data: [
            [50, 30, 25, 55],
            [45, 35, 30, 55],
            [33, 38, 33, 40],
            [40, 40, 32, 42]
        ]
    },{
        name:'中位线',
        type: 'line',
        smooth:true,
        data: [
          40,40,20,30
        ],
        itemStyle:{
            color:'#878bdb'
        },
        lineStyle:{
          color:'#878bdb'  
        },
        z:10
    }]
};
