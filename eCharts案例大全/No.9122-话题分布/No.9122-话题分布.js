option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'Top10话题'},
                {value:310, name:'Top10意外话题'},
                {value:234, name:'话题意外'}
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
