option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        color: ["#F58080", "#47D8BE", "#F9A589"],
        data: ['新报', '流失', '续费'],
        left: 'center',
        bottom: 'bottom'
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [100,200,20,30,60,89],
        
    },
    yAxis: {
        type: 'value',

        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
       
        nameTextStyle: {
            color: "#999"
        },
         
    },
    series: [{
            name: '新报',
            type: 'line',
            data: [800,900,220,130,660,289],
            color: "#F58080",
            lineStyle: {
                normal: { 
                   
                    color: '#FFCAD4' 
                }
            },
            
            smooth: true
        },
        {
            name: '流失',
            type: 'line',
            data: [123,568,111,222,123,56],
            lineStyle: {
                normal: {
                    
                     color: '#AAF487' ,
                    
                }
            },
            
            smooth: true
        },
        {
            name: '续费',
            type: 'line',
            data: [125,568,25,36,784,56],
            lineStyle: {
                normal: {
                   
                     color: '#F6D06F'  ,
                    
                }
            },
            
            smooth: true
        }
    ]
};