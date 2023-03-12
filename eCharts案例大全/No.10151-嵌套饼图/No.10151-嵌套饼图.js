// var colors = ['red', 'green', 'blue'];
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
                {
                    name: '国中',
                    value: 40,
                },
            ],
            // color: colors,
            label: {
                position: 'inside',  
            },
            radius: ['30%', '52%'],
            itemStyle: {
                borderWidth: 1,
                borderColor: '#FFFFFF',
            },
            clockwise: true,
            // animation: false,
        },
        {
            type: 'pie',
            // color: colors,
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
                {
                    name: '美国1',
                    value: 20,
                },
                {
                    name: '法国1',
                    value: 20,
                },
            ],
            label: {
                position: 'inside',
            },
            radius: ['45%', '60%'],
            itemStyle: {
                borderWidth: 1,
                borderColor: '#FFFFFF',
            },
            // animation: false,
        },
    ],
    backgroundColor: '#FFFFFF',
};