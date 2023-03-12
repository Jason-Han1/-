option = {
        title: {
            text: '多层系统占比饼图',
            textStyle: {
                align: 'center',
                fontSize: 20,
                color: '#f5f5f5'
            },
            left: 'center',
            top: '3%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}:({d}%)"
        },
        series: [{
            type: 'pie',
            data: [{
                name: 'CRM系统',
                value: 90,
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
            },
            radius: ['0%', '20%'],
            clockwise: true,
            animation: false
        }, {
            type: 'pie',
            data: [{
                name: '虚拟机',
                value: 40,
            },
                {
                    name: '物理机',
                    value: 50,
                }
            ],
            label: {
                position: 'inside',
            },
            radius: ['20%', '50%'],
            itemStyle: {
                borderWidth: 1,
                borderColor: '#FFFFFF',
            },
            clockwise: true,
            animation: false,
        }, {
            type: 'pie',
            data: [{
                name: 'linux',
                value: 10,
            },
                {
                    name: 'windows',
                    value: 10,
                },
                {
                    name: 'aix',
                    value: 10,
                },
                {
                    name: '其他',
                    value: 10,
                },
                {
                    name: 'linux',
                    value: 20,
                },
                {
                    name: 'windows',
                    value: 10,
                },
                {
                    name: 'aix',
                    value: 10,
                },
                {
                    name: '其他',
                    value: 10,
                },
            ],
            label: {
                position: 'inside',
            },
            radius: ['50%', '80%'],
            itemStyle: {
                borderWidth: 1,
                borderColor: '#FFFFFF',
            },
            clockwise: true,
            animation: false,
        }],
    };