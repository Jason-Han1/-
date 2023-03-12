option = {
    title: {
        text: '漏斗图',
        textStyle: {
            color: 'red',
            fontWeight: 'bold'
        },
        subtext: '仅供参考',
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'italic'
        },
        x: 'center'
    },
    legend: {
        left:'left',
        bottom:'5%',
        orient:'vertical'
    },
    series: [
        {
            type: 'funnel',
            name:'预期',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}{a}',
                },
                emphasis: {
                    formatter: '{b}: {c}({d}%)'
                }
            },
            labelLine:{
                normal:{
                    show:false
                }
            },
            itemStyle:{
                normal:{
                    opacity:0.8
                },
            },
            data: [
            {name:'展现', value:100},
            {name:'点击', value:80},
            {name:'访问', value:60},
            {name:'咨询', value:40},
            {name:'订单', value:20},
            ]
        },
        {
            type: 'funnel',
            name:'实际',
            top: '10%',
            left: '15%',
            width: '70%',
            height: '80%',
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}%',
                },
                emphasis: {
                    formatter: '{b}: {c}({d}%)'
                }
            },
            data: [
            {name:'展现', value:80},
            {name:'点击', value:50},
            {name:'访问', value:30},
            {name:'咨询', value:10},
            {name:'订单', value:5},
            ]
        }
    ]
};