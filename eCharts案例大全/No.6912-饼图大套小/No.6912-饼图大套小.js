option = {
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{a} <br/>{b}: {c} ({d}%)'
    // },
    legend: {
        //y : '90%',
        orient: 'vertical',
        left: 'center',
        bottom:'10',
        data: ['已访问', '未访问']
    },
    series: [{
            name: '已访问',
            itemStyle: {
                color: "#f9b459",
                borderWidth: 0
            },
            type: 'pie',
            clockWise: true,
            z: 2,
            hoverAnimation: false,
            radius: ['75%', '68%'],
            center: ["50%", "45%"],
            label: {
                show: true,
                formatter: '{d}%',
                color: 'RGB(246,175,101)',
                fontSize: 25,
            },

            data: [{
                value: 20,
                name: '未访问',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                },
            }, {
                value: 5,
                name: '已访问',
                itemStyle: {
                    color: "#f9b459",
                },
                hoverAnimation: false
            }]
        },
        {
            name: '未访问',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            radius: ['73%', '69%'],
            center: ["50%", "45%"],
            itemStyle: {
                color: "#47ace7",
            },
            data: [{
                value: 20,
                itemStyle: {
                    color: "#47ace7",
                },

            }]
        },
    ]
};