option = {
    title: {
        text: '嵌套饼图'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}:<br/> {c} ({d}%)"
    },
    series: [{
        type: 'pie',
        data: [{
            name: '国内',
            value: 60,
        }],
        label: {
            normal: {
                show: true,
                position: 'center',
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 14
            }
        },
        itemStyle: {
            borderWidth: 0,
            borderColor: '#FFFFFF',
            color: '#749f83'
        },
        radius: ['0%', '33%'],
        clockwise: true,
        animation: false
    }, {
        type: 'pie',
        data: [{
                name: '第一产业',
                value: 20,
            },
            {
                name: '第二产业',
                value: 30,
            },
            {
                name: '第三产业',
                value: 40,
            }
        ],
        label: {
            position: 'inside',
        },
        radius: ['33%', '66%'],
        itemStyle: {
            borderWidth: 1,
            borderColor: '#FFFFFF',
            color: '#91c7ae'
        },
        clockwise: true,
        animation: false,
    }, {
        type: 'pie',
        data: [{
                name: '北京',
                value: 5,
            },
            {
                name: '天津',
                value: 8,
            },
            {
                name: '上海',
                value: 7,
            },
            {
                name: '美国',
                value: 10,
            },
            {
                name: '法国',
                value: 10,
            },
            {
                name: '印度',
                value: 10,
            },
            {
                name: '蒙娜丽莎',
                value: 5,
            },
            {
                name: '亚历山大',
                value: 10,
            },
            {
                name: '哥伦布',
                value: 15,
            },
            {
                name: '霍金',
                value: 10,
            },
        ],
        label: {
            position: 'inside',
        },
        radius: ['66%', '100%'],
        itemStyle: {
            borderWidth: 1,
            borderColor: '#FFFFFF',
            color: '#61a0a8'
        },
        clockwise: true,
        animation: false,
    }],
    backgroundColor: '#134233',
};