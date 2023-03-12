option = {
    color: ['#FF8352', '#E271DE', '#00FFFF', '#4AEAB0', '#31C5C0', '#1E9BD1', '#009D85'],
    title:{
        left:'center',
        top:'center'
    },
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b}: {c} ({d}%)"
        formatter: function(params){
            return `${params.marker}${params.seriesName}<br>${params.data.name}:${params.data.value}<br>百分比：${params.percent}%`;
        }
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
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
//ECharts 中的事件和行为
//https://www.echartsjs.com/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%92%8C%E8%A1%8C%E4%B8%BA
myChart.on('click', function(params) {
    console.log(params)
    myChart.setOption({
        title:{
            text:params.data.name,
            subtext: params.data.value,
            textStyle: {
                fontSize: 40
            },
            subtextStyle: {
                fontSize: 30
            }
        }
    });
    // 也可以用一个div定位，扩展多内容
});