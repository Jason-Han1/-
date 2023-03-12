option = {
    title: {
        text: "叠加统计",
    },
    legend: {
        data: ['L1', 'L2', 'L3'],
    },
    xAxis: [{
        type: "category",
        name: '位置（m）',
        nameGap: 30,
        nameLocation: 'middle',
        //data: [0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,418],
    }],
    yAxis: [{
        splitNumber: 10,
        name: '放电次数',
        nameGap: 30,
        nameLocation: 'middle',
    }],
    series: [
        
        {
            name: "L1",
            type: "bar",
            stack: "总量",
            barWidth: 20,
            barGap: "10%",
            itemStyle: {
                color: 'rgba(255, 150, 47,1)'
            },
            data: [
                [232,18],
                [248,2],
            ],
        },{
            name: "L2",
            type: "bar",
            stack: "总量",
            itemStyle: {
                color: 'rgba(0, 255, 27,1)'
            },
            data: [
                [232,0],
                [248,0]
            ]
        }, {
            name: "L3",
            type: "bar",
            stack: "总量",
            itemStyle: {
                color: 'rgba(255, 20, 10,1)'
            },
            data: [
                [232,1],
                [248,1]
            ]
        }
    ]
}
