option = {
    title : {
        text: '饼图程序单击图例事件示例',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

app.currentIndex = -1;
myChart.on('legendselectchanged', function (params) {
    // 获取点击图例的选中状态
    var isSelected = params.selected[params.name];
    if(isSelected===false)
        myChart.dispatchAction({
            type: 'legendToggleSelect',
            name: params.name
        });
         myChart.dispatchAction({
            type: 'highlight',
            name: params.name
        });       
});
