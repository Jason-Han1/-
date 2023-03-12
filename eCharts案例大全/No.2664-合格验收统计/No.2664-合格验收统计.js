option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        bottom: '20',
        x: 'center',
        itemWidth: 9,
        itemHeight: 9,
        itemGap: 12,
        textStyle: {
            color: 'rgba(255,255,255,.65)',
            fontSize: 12,
            padding: [0, 0, 0, 10],
        },
        formatter: function (name) {
            if(name=='合格率'){
                return name+ '50%'
            } else if(name=='验收数量') {
                return name + 10
            } else if(name=='不合格数量') {
                return name + 2
            }
        },
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '80%'],
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            data: [
                {
                    value: 8,
                    name: '合格率',
                    itemStyle: {
                        color: '#42fed1',
                    },
                },
                {
                    value: 2,
                    name: '',
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
            label: {
                show: false,
            },
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['70%', '80%'],
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            data: [
                {
                    value: 10,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    hoverAnimation: false,
                },
            ],
            label: {
                show: false,
            },
        },
        {
            name: '访问来源',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: ['55%', '65%'],
            data: [
                { value: 10, name: '验收数量', itemStyle: { color: '#4fb5f9' } },
                { value: 2, name: '不合格数量', itemStyle: { color: '#fe645d' } },
            ],
            label: {
                show: false,
            },
        },
    ],
};
