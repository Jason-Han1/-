borediameter = 115,
    boredepth = 15,
    L1 = 5,
    L2 = 0.45,
    option = {
        xAxis: {
            type: 'category',
            data: ['连续装药', ]
        },
        yAxis: {
            type: 'value'
        },
        grid: [{
            show: true,
            width: 300,
            left: 'center',
            backgroundColor: "rgba(0,0,0,0.5)",
        }],
        series: [

            {
                name: '炮孔深度',
                data: [boredepth],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(255, 255, 255, 1)'
                },
                itemStyle: {
                    color: "rgba(0, 225, 225, 0.5)",
                },
                barWidth: 115,
                barGap: "-100%",
            },
            {
                name: '耦合装药长度',
                data: [L1],
                type: 'bar',
                barWidth: 115,
                itemStyle: {
                    color: "rgba(225, 0, 0, 1)",
                },
            },
            {
                name: '耦合装药长度透明',
                stack: '炮孔',
                data: [L1],
                type: 'bar',
                barWidth: 80,
                itemStyle: {
                    color: "rgba(255, 255, 255, 0)",
                    borderWidth: 0,
                    borderColor: "rgba(255, 255, 255, 0)",
                    barBorderRadius: [50, 50, 50, 50],

                },
            },
            {
                name: 'J1',
                stack: '炮孔',
                data: [4.05],
                type: 'bar',
                barWidth: 80,
                itemStyle: {
                    color: "rgba(255,127,80,1)",
                    borderWidth: 2,
                    borderColor: "rgba(255, 255, 255, 1)",
                    barBorderRadius: [30, 30, 30, 30],

                },

            },

            {
                name: '堵塞段透明',
                stack: '堵塞段',
                data: [9.05],
                type: 'bar',
                barWidth: 115,
                itemStyle: {
                    color: "rgba(255,127,80,0)",
                    borderWidth: 0,
                    borderColor: "rgba(255, 255, 255, 1)",


                },

            },
            {
                name: '空气间隔',
                stack: '堵塞段',
                data: [3],
                type: 'bar',
                barWidth: 115,
                itemStyle: {
                    color: "rgba(255,255,255,1)",
                    borderWidth: 0,
                    borderColor: "rgba(255, 255, 255, 1)",
                },

            },
            {
                name: '堵塞长度',
                stack: '堵塞段',
                data: [2.9],
                type: 'bar',
                barWidth: 115,
                itemStyle: {
                    color: "rgba(0,0,0,1)",
                    borderWidth: 0,
                    borderColor: "rgba(255, 255, 255, 1)",
                },

            },
        ]

    };