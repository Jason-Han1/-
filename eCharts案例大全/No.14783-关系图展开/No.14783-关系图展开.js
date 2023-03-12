option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 20,
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [{
            name: '0'
        }],
        links: [],
        force: {
            repulsion: 2000,
            initLayout:'circular',
            layoutAnimation:false
        }
    }]
};

myChart.on("click", function(a) {
    console.log(a);
    option = myChart.getOption();
    data = option.series[0].data;
    links = option.series[0].links;
    var isShow = true;
    for (var i = 0; i < links.length && isShow; i++) {
        isShow = links[i].source != a.data.name;
    }
    if (isShow) {
        var n = Math.random() * 10;
        for (var i = 0; i < n; i++) {
            data.push({
                name: a.name + i,
                itemStyle:{
                    normal:{
                        color:option.color[a.name.length%option.color.length]
                    }
                }
            });
            links.push({
                source: a.name,
                target: a.name + i
            });
        }
        myChart.clear();
        myChart.setOption(option);
    } else {

    }
});