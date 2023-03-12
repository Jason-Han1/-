option = {
    xAxis: {
        type:'category',
        data:["CO","NO2","O3","PM2.5","PM10","SO2"],
        splitLine:{
            show:true
        },
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
    },
    yAxis: {
         type:'category',
        data:["优","良", "轻度污染", "中度污染", "重度污染", "严重污染"],
        splitLine:{
            show:true
        },
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
    },
    series: [{
        symbolSize: function(d){
            return d[2]
        },
        data: [
            ["CO",0,31],
            ["CO",1,0],
            [0,2,0],
            [0,3,0],
            [0,4,0],
            [0,5,0],
            [1,0,31],
            [1,1,0],
            [1,2,0],
            [1,3,0],
            [1,4,0],
            [1,5,0],
            [2,0,31],
            [2,1,0],
            [2,2,0],
            [2,3,0],
            [2,4,0],
            [2,5,0],
            [3,0,0],
            [3,1,7],
            [3,2,22],
            [3,2,2],
            [3,3,0],
            [3,4,0],
            [3,5,0],
            [4,0,0],
            [4,1,28],
            [4,2,3],
            [4,3,0],
            [4,4,0],
            [4,5,0],
            [5,0,31],
            [5,1,0],
            [5,2,0],
            [5,3,0],
            [5,4,0],
            [5,5,0],
        ],
        type: 'scatter'
    }]
};