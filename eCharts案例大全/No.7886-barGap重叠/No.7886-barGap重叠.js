option = {
    title: {
        text: "ALL-放电次数",//barGap重叠
    },
    legend: {
        top: 50,
        // right:30,
        orient: 'vertical',
        left: 'right',
        data: ['L1', 'L2', 'L3'],
    },
    xAxis: [{
        type: "value",
        name: '位置（m）',
        nameGap: 30,
        nameLocation: 'middle',
        min:0,
        max:418,
        // splitNumber:20,
        interval:25,
        // axisLine:{
        //     show:false
        // }
    }],
    yAxis: [{
        splitNumber: 10,
        name: '放电次数',
        nameGap: 30,
        nameLocation: 'middle',
        axisTick:{
            show:false
        }
    }],
    series: [ {
            name: "L1",
            type: "bar",
            barWidth: 20,
            itemStyle: {
                color: 'rgba(255, 150, 47,1)'
            },
            z:8,
            data: [
                [232,18],
                [248,2],
            ],
        },{
            name: "L2",
            type: "bar",
            barWidth: 20,
            itemStyle: {
                color: 'rgba(0, 255, 27,1)'
            },
            z:10,
            data: [
                [232,0],
                [248,0]
            ]
        },{
            name: "L3",
            type: "bar",
            barWidth: 20,
            barGap: "-100%",
            itemStyle: {
                color: 'rgba(255, 20, 10,1)'
            },
            data: [
                [232,19],
                [248,3]
            ]
        }
    ]
}