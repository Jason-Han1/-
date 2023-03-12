 // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量1']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {
                min:0,
                max:4,
                axisLabel:{
                    formatter: function (value) {
var texts = [];
if(value==0){
texts.push('woo');
}
else if (value <=1) {
texts.push('好');
}
else if (value<= 2) {
texts.push('很好');
}
else if(value<= 3){
texts.push('非常好');
}
else{
texts.push('完美');
}
return texts;

                    }
                }
                },
            series: [{
                name: '销量1',
                type: 'bar',
                data: [1,4,2,3,2,0]
            }
            ]
        };