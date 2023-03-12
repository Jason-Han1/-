option = {
    title: [{
        text: '100%',
        textStyle: {
            fontSize: 50,
            color: "black"
        },
        subtextStyle: {
            fontSize: 15,
            color: '#8C8C8C'
        },
        textAlign: "outside",
        x: '65%',
        /* y: '50%',*/
    }],
    tooltip: {},
    series: {
        type: 'pie',
        hoverAnimation: false,
        radius: ['0%', '90%'],
        name: '男',
        data: [{
            value: 100,
            label: {
                position: 'center',
                color: '#ccc',
                formatter: '男',
                fontSize: 60,

            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#60acfc'
            }
        }, {
            value: 0,
            tooltip: {
                show: false
            },
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#E6E6E6'
            },
            emphasis: {
                itemStyle: {
                    color: '#E6E6E6'
                }
            }
        }]
    }
};