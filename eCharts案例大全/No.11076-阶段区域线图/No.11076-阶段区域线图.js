let i = 0,
    len = 140,
    data = []
xData = []
while (i < len) {
    data.push(Math.ceil(Math.random() * 400))
    xData.push(1900 + i + '年')
    i++
}
console.log(data)
option = {
    title: {
        text: '阶段区域线图',
        show: false
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: xData
    },
    yAxis: {
        splitLine: {
            show: false
        }
    },
    dataZoom: [
        {
            type: 'slider'
        },
        {
            type: 'inside',
            // show: true
        }
    ],
    visualMap: {
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        bottom: 8,
        pieces: [{
                gt: 0,
                lte: 50,
                color: '#0068b7'
            },
            {
                gt: 50,
                lte: 100,
                color: '#00a0c1'
            },
            {
                gt: 100,
                lte: 150,
                color: '#8fc31f'
            },
            {
                gt: 150,
                lte: 200,
                color: '#fff100'
            },
            {
                gt: 200,
                lte: 300,
                color: '#f39800'
            },
            {
                gt: 300,
                color: '#e60012'
            }
        ]
    },
    series: [{
        type: 'line',
        data: data,
        markLine: {
            silent: true,
            data: [{
                    yAxis: 50
                },
                {
                    yAxis: 100
                },
                {
                    yAxis: 150
                },
                {
                    yAxis: 200
                },
                {
                    yAxis: 300
                }
            ]
        }
    }]
}