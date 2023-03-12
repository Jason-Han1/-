option = {
        color:['#384ee0','#ffb907', '#687bf1', '#636af9','#6e7fe0', '#6e7fe0', '#6e7fe0','#6e7fe0'],
        series: [
            {
                name:'数据详情',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '50%'],
                label: {
                    normal: {
                        formatter: '{b|{b}}\n{b|{c}万}',
                        position: 'inner',
                        fontSize: 12,
                        fontFamily:'思源黑体',
                        rich: {
                            b: {
                                color:'#fff',
                                fontSize: 12,
                                lineHeight: 14,
                                // padding: [0, 0],
                            },
                        }
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:500, name:'一'},
                    {value:80, name:'二',selected:true},
                    {value:100, name:'三'},
                    {value:300, name:'四'},
                ]
            },
            {
                name:'数据详情',
                type:'pie',
                radius: ['60%', '75%'],
                label:{
                    normal:{
                        formatter: '{b}{c}万',
                        fontSize: (12),
                        fontFamily:'思源黑体',
                    }
                },
                data:[
                    {value:500, name:'一'},
                    {value:80, name:'二'},
                    {value:25, name:'三一'},
                    {value:25, name:'三二'},
                    {value:25, name:'三三'},
                    {value:25, name:'三四'},
                    {value:300, name:'四'},
                ]
            }
        ]
    };