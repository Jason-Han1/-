var custom=[{
    ids:[1,2],
    asdasd:1,
    value:5,
    itemStyle:{color:'black'}
},{
    ids:12,
    value:12
}];


// 指定图表的配置项和数据
var option = {
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data:custom
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// 处理点击事件并且跳转到相应的百度搜索页面
myChart.on('click', function (params) {
    alert(params.data["asdasd"]);
//    window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
});