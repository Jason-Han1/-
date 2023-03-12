var num = 90;
option = {
    title: {
        text: '80%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 100,
            fontWeight: 'normal',
            color: '#666666',
        },
        subtextStyle: {
            color: "#000000",
            fontSize: 25,
            fontWeight: 'normal'
        }
    },

    series: [{
        type: 'pie',
        radius: ['50%', '60%'],
        // silent: true,
        labelLine: {
            show: false
        },
        data: [{
                hoverOffset: 1,
                value: num,
                itemStyle: {
                    color: '#1EB475'
                },
                label: {
                    show: false
                }
            },
            {
                markArea: {
                    silent: true,
                },
                value: 100-num,
                itemStyle: {
                    color: '#DDDDDD'
                },
                label: {
                    show: false
                }
            }
        ]
    }]
};