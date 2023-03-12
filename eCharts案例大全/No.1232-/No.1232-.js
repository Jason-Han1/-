option ={
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
        boundaryGap: false,
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
         data:['0：00','4:00','8:00', '12:00','16:00','20:00','24:00' ]
    },
    ],
    yAxis: [{
        name: '万千瓦时',
        nameTextStyle: {
            color: "#fff",
            fontSize: 35,
            padding:[0,130,50,0]
        },
        min: 0,
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
        name: '可调负荷',
        type: 'line',
        showAllSymbol: true,
        symbolSize: 20,
        symbol :'circle',
        smooth: true,
        lineStyle: {
            normal: {
                width: 3,
                color: "#fb7b3c",
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "#fb7b3c",
        },
        tooltip: {
            show: true
        },
        data: ["5", "3", "2", "2", "1", "5",'4']
    }, 
    {
        name: '实时负荷',
        type: 'line',
        showAllSymbol: true,
        symbolSize: 20,
        symbol :'circle',
        smooth: true,
        lineStyle: {
            normal: {
                width: 3,
                color: "#34bff6",
            },
            borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: "#34bff6",
        },
        tooltip: {
            show: true
        },
        data: ["12", "15", "20", "17", "13", "10",'12']
    }, 

    ]
}