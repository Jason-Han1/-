option = {
    title: {
        text: '嵌套饼图'
    },
    series: [
        {
            type: 'pie',
            data: [
                {
                    name: '国内',
                    value: 60,
                },
                {
                    name: '国外',
                    value: 40,
                },
            ],
            label: {
                position: 'inside',  
            },
            radius: [0, 120],
            itemStyle: {
                borderWidth: 4,
                borderColor: '#FFFFFF',
            },
            clockwise: true,
            animation: false,
        },
        {
            type: 'pie',
            data: [
                {
                    name: '北京',
                    value: 20,
                },
                {
                    name: '天津',
                    value: 20,
                },
                {
                    name: '上海',
                    value: 20,
                },
                {
                    name: '美国',
                    value: 20,
                },
                {
                    name: '法国',
                    value: 20,
                },
            ],
            label: {
                position: 'inside',
            },
            radius: [122, 180],
            itemStyle: {
                borderWidth: 4,
                borderColor: '#FFFFFF',
            },
            animation: false,
        },
    ],
    backgroundColor: '#FFFFFF',
};