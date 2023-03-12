option = {
    color:['#0168b7','#1d83ce','#1d93eb','#009a44','#00bbfe','#fca886','#75e75b','#fe95ea','#fbdd65','#a586fd'].reverse(),
    legend:{
        
    },
    tooltip:{
        show:true
    },
    xAxis: {
        
    },
    label:{
        show:'true',
        position:'right'
    }
    ,
    yAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    series: [{
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        type: 'bar',
        barWidth:20,
        itemStyle:{
            normal:{
                color:function(param){
                    return option.color[param.dataIndex]
                }
            }
        }
    }]
};
