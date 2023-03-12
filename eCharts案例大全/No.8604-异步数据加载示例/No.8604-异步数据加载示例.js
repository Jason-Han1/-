  var categories = ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
 var data = [5, 20, 36, 10, 10, 20]
 var times = 0
function fetchData(cb) {
    // 通过 setTimeout 模拟异步加载
    setInterval(function () {
        categories.push('name'+times++)
        data.push(20+Math.random()*5)
         categories.shift()
         data.shift()
       
        cb({
            categories: categories,
            data: data
        });

    }, 3000);
}

// 初始 option
option = {
    title: {
        text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        type: 'category',
        data: categories
    },
    yAxis: {},
    series: [{
        //  markPoint: {
               
        //         //  valueDim: 'x',
        //         data: [
        //             {type: 'max', name: '最大值',  valueIndex :0},
            
        //         ]
        //     },
        name: '销量',
        type: 'line',
        data: data
    }],
    animationEasingUpdate: 'linear',
    animationDurationUpdate:3000
};

fetchData(function (data) { 
    myChart.setOption({
        xAxis: {
            data: data.categories
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            data: data.data
        }]
    });
});