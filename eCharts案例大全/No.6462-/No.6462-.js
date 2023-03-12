data = [{
        name: "工程进度",
        value: 57.87
    },
    {
        name: "支付进度",
        value: 14.18
    },

];


option = {
    backgroundColor: 'RGB(8,20,67)',
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            //color: 'rgba(10,31,95,1)'
            color:'#414865'
        }, {
            offset: 1,
            //color: 'rgba(1,232,254,1)'
            color:'#CD66FF'
        }],
        global: false
    }],
    grid: {
        top: '16%',
        bottom: '54%',
        left: "50%",
        containLabel: false
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        z: 3,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            inside: false,
            textStyle: {
                color:'#4EB8FC',
                fontSize: 25,
            },
            show: false
        },
        data: ['工程进度', '支付进度']
    }],
    xAxis: [{
        show: false
    }],
    series: [{
            name: '进度',
            type: 'pie',
            z: 2,
            hoverAnimation: false,
            radius: ['38%', '30%'],
            center: ["50%", "55%"],
            label: {
                show: true,
                formatter: '{d}%',
                color:'#F6AF65',
                fontSize: 20,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            data: [{
                value: 57.87,
                name: '工程进度'
            }, {
                value: 100 - 57.87,
                itemStyle: {
                    color: "rgba(65,72,101,0.1)",
                    //color:'#414865',
                    borderWidth: 50,
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        },
        
    ],
};