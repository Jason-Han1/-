    option = {
        color: [
            '#1aa1ff',
            '#31c17b',
            '#ff6535'
        ],
        backgroundColor:'#174179',
        title: {
            text: '',
            left: '5%',
            top: '6%'
        },
        legend: {
            data: ['总订单', '区域价订单', '非区域价订单'],
            textStyle: {
                color: '#fff',
                fontSize: '10'
            },
            // top: '25%',
            // itemHeight: 10,
            // itemWidth: 25
        },
        // grid: {
        //     left: '12%',
        //     right: '4%',
        //     bottom: '18%',
        //     containLabel: false
        // },
        xAxis: [{
            type: 'value',
            name: '',
            axisLabel: {
                color: '#fff'
                // formatter: '{value}'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#1d5eae'
                }
            }
        }],
        yAxis: [{
            type: 'category',
            axisLabel: {
                color: '#fff',
                fontSize: '10'
                // formatter: '{value}'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#1d5eae'
                }
            },
            data: ['总订单', '区域价订单', '非区域价订单']
        }],
        series: [{
                name: '总订单',
                type: 'bar',
                stack: '订单',
                data: [4100, 0, 0],
                barWidth: '40'
            },
            {
                name: '区域价订单',
                type: 'bar',
                stack: '订单',
                data: [0, 3600, 0]
            },
            {
                name: '非区域价订单',
                type: 'bar',
                stack: '订单',
                data: [0, 0, 500]
            }
        ]
    };