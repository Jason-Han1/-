
var seriesData = [10, 52, 200, 334, 390, 330, 220];

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:seriesData
        }
    ]
};

myChart.on('click',function(params){
    console.log(params);
    var index = params.dataIndex;
    for(var i = 0 ; i < seriesData.length ; i++){
      	if(seriesData[i].value){
                seriesData[i] = seriesData[i].value;
            }
        if(index == i){
            seriesData[i] = {
                value : seriesData[i],
                itemStyle:{
                    normal:{
                        color : 'red'
                    }
                }
            }
        }
    }
    console.log(seriesData);
    
    option.series[0].data=seriesData
    myChart.setOption(option,true);
})
