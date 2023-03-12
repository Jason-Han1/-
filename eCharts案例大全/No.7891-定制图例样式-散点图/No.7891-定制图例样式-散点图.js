option = {
    title: {
        text: 'ALL-放电量'
    },
    legend: {
        top: 50,
        // right:30,
        orient: 'vertical',
        left: 'right',
        data: ['L1', 'L2','L3']
    },
    xAxis: {
        scale: true,
        min:0,
        max:418,
        //splitNumber:20,
        interval:25, 
        name:'位置（m）',
        nameGap: 30,
        nameLocation: 'middle',
    },
    yAxis: {
        scale: true,
        // splitNumber:10,
        name:'放电量pC',
        nameGap: 40,
        nameLocation: 'middle',
        interval:200,
        axisTick:{
            show:false
        }
    },
    series: [{
        name:'L1',
        type: 'scatter',
        symbol:'roundRect',
        itemStyle:{
          color: 'rgba(255, 150, 47,1)'
        },
        data: [
            [236.2, 1123.8],
            [232.7, 1105.2],
            [231.4, 842],
            [238.7, 665.2],
            [233.4, 722],
            [237.7, 1185.2],
            [231.4, 1152],
            [239.7, 925.2],
            [236.4, 312],
        ]
    }, {
        name:'L2',
        type: 'scatter',
        symbol:'roundRect',
        itemStyle:{
            color:'rgba(0, 255, 27,1)'
        },
        data: [[231.2, 1141.6], [237.5, 1359.0], [239.5, 149.2], [237.0, 163.0], [235.8, 353.6],
        [234.2, 1121.6], [242.5, 389.0], [238.5, 19.2], [245.0, 433.0], [236.8, 743.6],
        ],
    }, {
        name:'L3',
        type: 'scatter',
        symbol:'roundRect',
        itemStyle:{
            color:'rgba(255, 20, 10,1)'
        },
        data: [[231.6, 841.6], [237.5, 479.0], [239.5, 662.2], [237.0, 1115.0], [235.8, 327.6],
        ],
    }]
};