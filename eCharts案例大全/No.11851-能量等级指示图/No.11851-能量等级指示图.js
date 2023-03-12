option = {
    title:[{
        text: 'Energy efficiency rating',
        x: '31%',
        textAlign: 'center'
    }, {
        text: 'Cunrent %',
        x: '71%',
        textAlign: 'center'
    }, {
        text: 'Potential %',
        x: '88%',
        textAlign: 'center'
    }],
    grid: [
        {x: '3%', y: '5%', width: '60%', height: '94%', containLabel: true},
        {x: '63%', y: '5%', width: '17%', height: '94%', containLabel: true},
        {x: '80%', y: '5%', width: '17%', height: '94%', containLabel: true},
    ],
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        min: 0,
        max: 110,
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
    }, {
        gridIndex: 1,
        type: 'value',
        min: 0,
        max: 10,
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
    }, {
        gridIndex: 2,
        type: 'value',
        min: 0,
        max: 10,
        boundaryGap: [0, 0.01],
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
    }],
    yAxis: [{
        gridIndex: 0,
        type: 'category',
        data: ['A','B','C','D'],
        inverse: true,
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
    }, {
        gridIndex: 1,
        data: ['A','B','C','D'],
        type: 'category',
        axisLabel: { show: false },
        axisTick: { show: false },
        // axisLine: { show: false }
    },
    {
        gridIndex: 2,
        data: ['A','B','C','D'],
        type: 'category',
        axisLabel: { show: false },
        axisTick: { show: false },
        // axisLine: { show: false }
    }],
    series: [
        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'bar',
            stack: 'level',
            label: { 
                show: true,
                position: 'insideLeft'
            },
            data: [
                { value: 70, label: { formatter: '1%-25%', fontSize: '20', padding: [0, 0, 0, 8] }, itemStyle: { color: '#337849' } },
                { value: 80, label: { formatter: '26%-50%', fontSize: '20', padding: [0, 0, 0, 8] }, itemStyle: { color: '#86bd45' } },
                { value: 90, label: { formatter: '51%-75%', fontSize: '20', padding: [0, 0, 0, 8] }, itemStyle: { color: '#fba92b' } },
                { value: 100, label: { formatter: '76%-100%', fontSize: '20', padding: [0, 0, 0, 8] }, itemStyle: { color: '#d2232a' } }
            ]
            
        },
        {
            name: '59 %',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'bar',
            data: [0, {
                value: 9,
                label: { show: true, formatter: '{a}', fontSize: '30', padding: [0, 0, 0, 8] }, 
                itemStyle: { color: '#fba92b' }
            }, 0, 0]
        },
        {
            name: '40 %',
            xAxisIndex: 2,
            yAxisIndex: 2,
            type: 'bar',
            data: [0, 0, {
                value: 9,
                label: { show: true, formatter: '{a}', fontSize: '30', padding: [0, 0, 0, 8] }, 
                itemStyle: { color: '#86bd45' }
            }, 0]
        },
        {
            type: 'bar',
            stack: 'level',
            label: { 
                show: true,
                position: 'insideLeft'
            },
            data: [
                { value: 0, label: { formatter: 'A', fontSize: '30', color: '#337849' } },
                { value: 0, label: { formatter: 'B', fontSize: '30', color: '#86bd45' } },
                { value: 0, label: { formatter: 'C', fontSize: '30', color: '#fba92b' } },
                { value: 0, label: { formatter: 'D', fontSize: '30', color: '#d2232a' } }
            ]
        }
    ]
};
