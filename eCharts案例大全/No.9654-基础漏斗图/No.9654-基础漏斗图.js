option = {
    title: {
        text: '基础漏斗图',
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
        top:'2%',
        orient:'vertical'
    },
    series: [{
            type: 'funnel',
            width: '40%',
            height: '40%',
            top: '10%',
            left: '30%',
            sort: 'ascending',
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}',
                },
                emphasis: {
                    formatter: '{b}: {c}({d}%)'
                }
            },
            // funnelAlign: 'center',  // 漏斗对齐方向
            data: [
            {name:'学生数量', value:260},
            {name:'及格数量', value:216},
            {name:'>=75数量', value:160},
            {name:'>=85数量', value:120},
            {name:'>=90数量', value:060},
            {name:'>=95数量', value:010},
            ]
        },
        {
            type: 'funnel',
            width: '40%',
            height: '40%',
            top: '50%',
            left: '30%',
            sort: 'dascending',
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}',
                },
                emphasis: {
                    formatter: '{b}: {c}({d}%)'
                }
            },
            // funnelAlign: 'left',  // 漏斗对齐方向
            data: [
            {name:'学生数量', value:260},
            {name:'及格数量', value:216},
            {name:'>=75数量', value:160},
            {name:'>=85数量', value:120},
            {name:'>=90数量', value:060},
            {name:'>=95数量', value:010},
            ]
        }
    ]
};