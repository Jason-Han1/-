const colors = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83','#000'];
option = {
    tooltip: {
          trigger: "item",
          formatter: "{b}: {c}",
        },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value'
    },
    // color:['red','blue','yellow','green','pink','blue','red'],
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
         showBackground: true,
        barMaxWidth:'30%',
        itemStyle:{
            normal:{
                color: function(params){
                        return colors[params.dataIndex]; 
                        // 取每条数据的 index 对应 colors 中的 index 返回这个颜色
                    }
            }
        }
    }]
};