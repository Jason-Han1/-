option = {
       backgroundColor: "#344b58",
    grid: {
        top: '18.5%',
        left: '15%',
        right: '5%',
        bottom: '20%',
    },
        legend: {
        align: "left",
        right: '5%',
        top:'14%',
        textStyle:{
            color:'#fff',
            fontSize:16
        },
        icon:'rect',
        itemGap:25,
        itemWidth:30,
         itemHeight:5,
        data: [
           '可调负荷', '实时负荷',
        ]
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
                fontSize: 36
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
         data:['1月','2月','3月', '4月','5月','6月', ]
    },
    ],
    yAxis: [{
        name: '',
        splitLine: {
            show: true,
            lineStyle: {
                color: '#424b5a',
                type:'dotted'
            },
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff',
                padding: 16,
fontSize: 35,
            },
        },
        axisTick: {
            show: false,
        },
    },
],
    series: [{
        name: '电',
        type: 'bar',
         stack: "总量",
          barWidth:20,
        showAllSymbol: true,
        symbolSize: 20,
        symbol :'circle',
        smooth: true,

        itemStyle: {
            color: "#89ee52",
        },

        data: ["5", "3", "2", "2", "1", "5",'4']
    }, 
    {
        name: '热',
        type: 'bar',
           stack: "总量",
        showAllSymbol: true,
        symbolSize: 20,
        symbol :'circle',
        smooth: true,
        itemStyle: {
            color: "#db972a",
        },

        data: ["12", "15", "20", "17", "13", "10",'12']
    }, 
        {
        name: '冷',
        type: 'bar',
           stack: "总量",
        showAllSymbol: true,
        symbolSize: 20,
        symbol :'circle',
        smooth: true,
        itemStyle: {
            color: "#00fffb",
        },

        data: ["12", "15", "20", "17", "13", "10",'12']
    }, 

    ]
}
