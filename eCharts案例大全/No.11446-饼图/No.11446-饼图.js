 option = {
        color: ['#e062ae', "#67e0e3","#37a2da","#ffdb5c","#ff9f7f"],
        title: {
            text: '总资产',
            subtext: '2685',
            textStyle: {
                color: '#4effff',
                fontSize: 14,
                align: 'center'
            },
            subtextStyle: {
                fontSize: 16,
                color: ['#85c7e3']
            },
            x: 'center',
            y: 'center',
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid:{
            left: '5px',   // 与容器左侧的距离
            right: '5px', // 与容器右侧的距离
            top: '5px',   // 与容器顶部的距离
            bottom: '5px', // 与容器底部的距离
        },
        legend: {
            // orient: 'vertical',
            itemWidth: 10,
            itemHeight: 10,
            bottom: '1%',
            data: ['机柜:60%','路由器:14%','交换机:13%','服务器:9%','PDU:4%'],
            textStyle: {
                color: '#89ccea',
                fontSize: 12,
            },
        },
        series : [
            {
                name: '资产设备统计',
                type: 'pie',
                radius: ['40%', '50%'],
                center: ['50%', '50%'],
                data:[
                    {value:934, name:'机柜:60%'},
                    {value:436, name:'路由器:14%'},
                    {value:620, name:'交换机:13%'},
                    {value:252, name:'服务器:9%'},
                    {value:312, name:'PDU:4%'},

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