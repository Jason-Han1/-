app.title = '环形图';
var num = 80;
var num1 = 415298;
var num2 = 85000;
option = {
    title: {
        text: '80%',
        subtext: '目标完成',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize: 40,
            fontWeight: 'normal',
            color: '#FF8C00',
        },
        subtextStyle: {
            color: "#000000",
            fontSize: 25,
            fontWeight: 'normal'
        }
    },
    legend: {
        selectedMode: false,
        bottom: 100,
        icon: 'circle',
        data: ['已开票' + num1 + '万件', '总配额' + num2 + '万件']
    },
    series: [{
        type: 'pie',
        radius: ['50%', '60%'],
        // silent: true,
        labelLine: {
            show: false
        },
        data: [{
                name: '已开票' + num1 + '万件',
                hoverOffset: 1,
                value: 80,
                itemStyle: {
                    color: '#FFA500'
                },
                label: {
                    show: false
                }
            },
            {
                name: '总配额' + num2 + '万件',
                markArea: {
                    silent: true,
                },
                value: 20,
                itemStyle: {
                    color: '#aaa'
                },
                label: {
                    show: false
                }
            }
        ]
    }]
};