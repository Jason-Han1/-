app.title = '坐标轴刻度与标签对齐';

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
            barWidth: '60%',
            itemStyle:{
              normal:{
                  color:function(params) { 
　//首先定义一个数组 
var colorList = [ 
'#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', 
'#B74AE5','#0AAF9F','#E89589' 
]; 
return colorList[params.dataIndex] 
}, 
              }  
            },
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
