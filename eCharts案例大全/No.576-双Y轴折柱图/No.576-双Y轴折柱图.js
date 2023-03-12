option ={
         backgroundColor: '#0e1c47',
    color: ['#00b1f1', '#39d05f', '#3677b7', '#1dad3c'],
    legend: {
        top: 10,
        left: 200,
        itemWidth: 10,
        itemHeight: 10,
        icon:'rect',
        textStyle: {
            fontSize: 14,
            color: '#fff',
            padding: [3, 0, 0, 0]
        },
        data:['统调座数','统调装机容量','非统调座数','非统调装机容量']
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '13%',
        top:'18%',
        containLabel: true
    },
  xAxis: [{
        type: 'category',
        axisLine: { 
            show: true,
            lineStyle: {
                color: '#fff',
width:3,
            },
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                padding: [10,0,0,0],
                fontSize: 36,
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
         data:['2019','2020','2021' ]
    },
    ],
    yAxis: [{
        type: 'value',
         name: '座',
        nameTextStyle: {
            color: "#fff",
            fontSize: 35,
            padding:[0,130,50,0],
            fontFamily:'siyuan',
        },
        axisLabel: {
             textStyle: {
                color: '#fff',
                padding: [0,0,0,0],
                fontSize: 36
            },
        },
        axisLine: {
             show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#7e99aa',
                type:'dashed',
            }
        },
    } ,{
      type: 'value',
      name: 'HZ',
      nameTextStyle: {
         color: '#fff',
         fontSize: 30,
         padding: [0,0,25,20]
      },
      axisLine: { show: false },
      axisTick: {show: false },
      axisLabel: {
        show: true,
        color: '#fff',
        fontSize: 30,
        padding: [10,0,0,0],
      },
      splitLine: { show: false }
    }],
    series: [
        {      
        type: 'bar',
        name:'统调座数',
        barWidth:60,

        label: {
            show: false,
            position: 'insideRight'
        },
       data:[60,60,60], 
    },
       {      
        type: 'bar',
            name:'统调装机容量',
        label: {
            show: false,
            position: 'insideRight'
        },
       data:[10,10,10], 
    },
    {   name:'非统调座数',   
        type: 'line',
        yAxisIndex: 1,
         showAllSymbol: false,
                    symbolSize: 0,
                    smooth: true,
        label: {
            show: false,
            position: 'insideRight'
        },
          areaStyle: {
             color:'#3778b8 '
         },
       data:[80,50,80], 
    },
       { 
           name:'非统调装机容量',
        type: 'line',
        yAxisIndex: 1,
         showAllSymbol: false,
                    symbolSize: 0,
                    smooth: true,
        label: {
            show: false,
            position: 'insideRight'
        },
         areaStyle: {
             color:'#00FF007F '
         },
       data:[20,80,20], 
    },
     
  
    ]
}
