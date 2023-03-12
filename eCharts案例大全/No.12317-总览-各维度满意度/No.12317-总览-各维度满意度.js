option = {
    title: {
        text: '总览-各维度满意度'
    },
    xAxis: {
        show: false,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        show: false
    },
    color: ['#637bda', '#f3f3f3'],
    label: {
      fontSize: 30,
      color: '#000',
    },
    series: [{
        type: 'pie',
        center: ['20%', '50%'],
        radius: [100,65],
        clockwise: false,
        label: {
            position: 'center',
            fontSize: 30,
            color: '#000',
            formatter: function (param) {
                console.log(param)
                if (param.name) return param.value
            }
        },
        labelLine: {
            show: false
        },
        data:[
            {
            name: '1xvc',
            value: 4.21
            },
            {
                name: '',
                value: 3.2
            },
            
        ]
        
    },
    {
        type: 'pie',
        center: ['50%', '50%'],
        radius: [100,65],
        clockwise: false,
        label: {
            position: 'center',
            fontSize: 20,
            formatter: function (param) {
                console.log(param)
                if (param.name) return param.value
            }
        },
        labelLine: {
            show: false
        },
        data:[
            {
            name: '1xvc',
            value: 2.68
            },
            {
                name: '',
                value: 5
            },
            
        ]
        
    },
    {
        type: 'pie',
        center: ['80%', '50%'],
        radius: [100,65],
        clockwise: false,
        label: {
            position: 'center',
            fontSize: 20,
            formatter: function (param) {
                console.log(param)
                if (param.name) return param.value
            }
        },
        labelLine: {
            show: false
        },
        data:[
            {
            name: '1xvc',
            value: 3.46
            },
            {
                name: '',
                value: 3.2
            },
            
        ]
        
    }
    ]
};