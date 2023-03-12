let arr = [30, 60, 90, 300, 900]

option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (item) {
            return arr[item.dataIndex]
        }
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
                {value:20, name:'直接访问'},
                {value:20, name:'邮件营销'},
                {value:20, name:'联盟广告'},
                {value:20, name:'视频广告'},
                {value:20, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    formatter: function (item) {
                        return item.name + "：" + arr[item.dataIndex]
                    },
                }
            }
        }
    ]
};

