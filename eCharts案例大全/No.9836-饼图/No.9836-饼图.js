var totalNum = 10;
var data = [{
        "name": "兰州",
        "value": 25
    },
    {
        "name": "嘉峪关",
        "value": 2
    },
    {
        "name": "金昌",
        "value": 44
    },
    {
        "name": "白银",
        "value": 6
    },
    {
        "name": "天水",
        "value": 8
    },
    {
        "name": "武威",
        "value": 57
    },
    {
        "name": "张掖",
        "value": 15
    },
    {
        "name": "酒泉",
        "value": 64
    },
    {
        "name": "平凉",
        "value": 24
    },
    {
        "name": "庆阳",
        "value": 16
    },
    {
        "name": "定西",
        "value": 23
    },
    {
        "name": "陇南",
        "value": 7
    }
].sort(function(a, b) {
    return a.value - b.value
})
option = {
    title: {
        x: '50%',
        y: '48%',
        text: '{a|' + totalNum + '}{b|元}',
        textStyle: {
            fontSize: 0,
            rich: {
                a: {
                    color: '#ff9f0e',
                    fontSize: 60,
                    lineHeight: 40,
                    padding: [0, 10, 0, 0]
                },
                b: {
                    color: '#999',
                    lineHeight: 40,
                    fontSize: 16,

                }
            }
        },
        textAlign: 'center',
        vetextVerticalAlign: 'bottom'

    },
    backgroundColor: '#fff',
    visualMap: {
        type: 'piecewise',
        right: '5%',
        y: 'middle',
        align: 'left',
        itemWidth: 35,
        itemHeight: 20,
        pieces: [{
                min: 50,
                label: '高',
                color: '#ee615f'
            },
            {
                min: 10,
                max: 50,
                label: '中',
                color: '#ffa029'
            },
            {
                max: 10,
                label: '低',
                color: '#6bbe52'
            }
        ]
    },
    series: [{
        name: '产品分析',
        type: 'pie',
        radius: ['40%', '80%'],
        center: ['50%', '50%'],
        minAngle: 30,
        data: data,
        label: {
            color: '#fff',
            position: 'inside',
            formatter(obj) {
                return obj.name
            }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 4
        }
    }]
}