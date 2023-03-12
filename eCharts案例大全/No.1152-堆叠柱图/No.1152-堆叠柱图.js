option ={
         backgroundColor: '#0e1c47',
    color: ['#6adaff', '#ff5a00', '#6a88ff', '#00ff00', '#00ff00', '#00ff00'],
    legend: {
        top: 10,
        left: 200,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: 14,
            color: '#fff',
            padding: [3, 0, 0, 0]
        },
        data:['煤炭','石油','天然气','水风电']
    },
    grid: {
        left: '3%',
        right: '4%',
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
    yAxis: {
        type: 'value',
         name: '%',
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
    },
    series: [
        {      
        type: 'bar',
        name:'煤炭',
        stack: '总量',
        barWidth:60,

        label: {
            show: false,
            position: 'insideRight'
        },
       data:[60,60,60], 
    },
       {      
        type: 'bar',
        stack: '总量',
            name:'石油',
        label: {
            show: false,
            position: 'insideRight'
        },
       data:[10,10,10], 
    },
       {      
        type: 'bar',
        stack: '总量',
            name:'天然气',
        label: {
            show: false,
            position: 'insideRight'
        },
       data:[10,10,10], 
    },
       {      
        type: 'bar',
        stack: '总量',
            name:'水风电',
        label: {
            show: false,
            position: 'insideRight'
        },
       data:[20,20,20], 
    },
    {      
        type: 'line',
         stack: '线',
         showAllSymbol: false,
                    symbolSize: 0,
                    smooth: true,
        label: {
            show: false,
            position: 'insideRight'
        },
       data:[80,80,80], 
    },
       { 
        type: 'line',
         stack: '线',
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
       data:[20,20,20], 
    },
     
  
    ]
}
