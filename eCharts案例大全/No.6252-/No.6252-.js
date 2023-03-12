setTimeout(function () {

    option = {
        legend: {},
        
       
         tooltip: { 
              //trigger: 'axis',
         },
      
        xAxis: {
            type: 'category',
            data:['2012', '2013', '2014', '2015', '2016', '2017']
            
        },
         yAxis: {
        type: 'value'
    },
        grid: {top: '60%'},
         polar: {
            
                splitNumber: 4,
         shape: "circle",
        
                radius:100,
                indicator: [
                    { name: '销售', max: 6500},
                    { name: '管理', max: 16000},
                    { name: '信息', max: 30000},
                    { name: '客服', max: 38000},
                    { name: '研发', max: 52000},
                    { name: '市场', max: 25000}
                ],
                center:['50%','30%']
        },
    
        series: [
            {type: 'line',name:'荆州', smooth: true, data:[41.1, 30.4, 65.1, 53.3, 83.8, 98.7]},
            {type: 'line',name:'兖州', smooth: true, data:[86.5, 92.1, 85.7, 83.1, 73.4, 55.1]},
         
        {
            type: 'radar',
             
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '荆州'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: '兖州'
                }
            ]
        }
        
        
        
         
         
        ]
    };

    myChart.setOption(option);

});