option = {
    color:["#286AF7","#00BAE9","#3BD242","#DFDF01","#FD9802","#F9691A","#F14E4E","#AE0CE3","#6E11EC","#4911EC"],
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            label:{
                show:false
            },
            emphasis: {
                label:{
                    show:true
                },
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};