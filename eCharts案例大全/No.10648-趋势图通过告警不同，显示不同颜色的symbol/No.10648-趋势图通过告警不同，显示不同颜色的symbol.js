option = {
    title: {
        text: '告警趋势图',
      
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        formatter:function(param){
            
            return param[0].name + "<br />" + param[0].seriesName + ":" + param[0].data
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
  
    series: [
          {
            name:'底层闲',
            type:'line',
            smooth: true,
            symbolSize:0,
            symbol:'circle',
            
            data: [100, 150, 250, 180],
           
        },
        {
            name:'告警一',
            type:'line',
            smooth: true,
            symbolSize:20,
            symbol:'circle',
             itemStyle:{
                color:'yellow'
            },
             lineStyle:{
                color:'rgb(0,0,0,0)'
            },
            data: [null, null, 250, null],
           
        },
         {
            name:'告警三',
            type:'line',
            smooth: true,
            itemStyle:{
                color:'green'
            },
            symbolSize:20,
            symbol:'circle',
             lineStyle:{
                color:'rgb(0,0,0,0)'
            },
            data: [null, 150, null, null],
           
        }
    ]
};
myChart.on('click',function(param){
   
    alert(param.seriesId)
})

