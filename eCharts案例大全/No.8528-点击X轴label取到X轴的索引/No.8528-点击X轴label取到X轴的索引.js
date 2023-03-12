
var seriesData = [10, 52, 200, 334, 390, 330, 220];

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
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
            data : [1,2,3,4,5,6,7],
            triggerEvent: true,
            axisLabel:{
                formatter:function(params,index){
                    var a =['听单句','听长对话','听短文','阅读理解','完型选择','语法与阅读','书面表达'];
                    return a[index]
                }
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
myChart.setOption(option);
myChart.on('click',function(params){
    if(params.componentType == "xAxis"){
            console.log(params)
        }else{
            alert("单击了"+params.name+"柱状图");
        }
})
