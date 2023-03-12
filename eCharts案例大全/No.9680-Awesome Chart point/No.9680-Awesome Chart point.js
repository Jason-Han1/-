option = {
    title: {
        text: 'Awesome Chart'
    },
    color:['#5AB1EF','#26e8fe','#D87A80','#39c639'],
    legend:{
        icon: "circle",
        show:true,
        data:['普通折点','特殊点1','特殊点2','特殊点3'],
        itemWidth:10,//图例的宽度
        itemHeight:10,//图例的高度
    },
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    },
    yAxis: {},
    series: [{
        name:'普通折点',
        type: 'line',
        smooth:true,
        data:[{
                name:'普通折点',
                value:100,
                symbol:'circle',
                symbolSize: 4,
                itemStyle : {  
                    color:'#5AB1EF'
                },   
            },{
                name:'普通折点',
                value:40,
                symbol:'circle',
                symbolSize: 12,
                itemStyle : {  
                    color:'#26e8fe'
                },   
            },{
                name:'普通折点',
                value:70,
                symbol:'circle',
                symbolSize: 4,
                itemStyle : {  
                    color:'#5AB1EF'
                },   
            },{
                name:'普通折点',
                value:60,
                symbol:'circle',
                symbolSize: 4,
                itemStyle : {  
                    color:'#5AB1EF'
                },   
            },{
                name:'普通折点',
                value:100,
                symbol:'circle',
                symbolSize: 12,
                itemStyle : {  
                    color:'#D87A80'
                },   
            },{
                name:'普通折点',
                value:40,
                symbol:'circle',
                symbolSize: 12,
                itemStyle : {  
                    color:'#39c639'
                },   
            }]
    },{
        name:'特殊点1',
        type: 'line',
        data: [],
    },{
        name:'特殊点2',
        type: 'line',
        data: [],
    },{
        name:'特殊点3',
        type: 'line',
        data: [],
    }]
};