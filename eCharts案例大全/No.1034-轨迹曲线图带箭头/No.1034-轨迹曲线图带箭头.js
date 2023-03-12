option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [
                {
                    value: 200,
                    name: '中国',
                    label: {
                        show: true,
                        formatter: '{b}',
                        position: 'left',
                    },
                },
                {
                    symbol: 'arrow',
                    symbolSize: 30,
                    symbolRotate: -48,
                    value: 300,
                },
            ],
            type: 'line',
        },
        {
            data: [
                null,
                {
                    value: 300,
                    name: '日本',
                    label: {
                        show: true,
                        formatter: '{b}',
                        position: 'left',
                    },
                },
                {
                    symbol: 'arrow',
                    symbolSize: 30,
                    symbolRotate: -48,
                    value: 400,
                    itemStyle:{
                        color:'#ccc'
                    },
                    lineStyle:{
                        color:'#ccc'
                    }
                },
            ],
            type: 'line',
        },
        {
            data: [
            
                null,
                null,
                {
                    value: 400,
                    name: '韩国',
                    label: {
                        show: true,
                        formatter: '{b}',
                        position: 'left',
                    },
                },
                {
                    symbol: 'arrow',
                    symbolSize: 30,
                    symbolRotate: -150,
                    value: 250,
                },
            ],
            type: 'line',
        },
    ],
};
