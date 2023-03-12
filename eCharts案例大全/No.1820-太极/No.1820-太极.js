option = {
    backgroundColor: '#eee',
    series: [
        {
            type: 'pie',
            color: ['#fff', '#000'],
            center: ['50%', '250'],
            radius: [0, 140],
            label: {
                show:false
            },
            labelLine: {
                show: false
            },
            silent: true,
            data: [
                {
                    value: 50,
                    name: 'Chrome',
                },
                {
                    value: 50,
                    name: 'Firefox',
                }
            ],
        },
        {
            type: 'pie',
            color: ['#000'],
            center: ['50%', '180'],
            radius: [0, 70],
            label:{
                show: false
            },
            labelLine: {
                show: false
            },
            silent: true,
            data: [
                {
                    value: 50
                }]
        },
        {
            type: 'pie',
            center: ['50%', '320'],
            radius: [0, 70],
            label:{
                show: false
            },
            labelLine: {
                show: false
            },
            silent: true,
            data: [
                {
                   value: 100,
                   itemStyle: {
                       color: '#fff'
                   }
                }]
        },
        {
            type: 'pie',
            center: ['50%', '180'],
            radius: [0, 20],
            label:{
                show: false
            },
            labelLine: {
                show: false
            },
            silent: true,
            data: [
                {
                   value: 100,
                   itemStyle: {
                       color: '#fff'
                   }
                }]
        },
        {
            type: 'pie',
            center: ['50%', '320'],
            radius: [0, 20],
            label:{
                show: false
            },
            labelLine: {
                show: false
            },
            silent: true,
            data: [
                {
                   value: 100,
                   itemStyle: {
                       color: '#000'
                   }
                }]
        }
    ],
};
