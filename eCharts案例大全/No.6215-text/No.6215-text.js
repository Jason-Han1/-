option = {
    legend: {
        data: ['预报', '实测']
    },
    xAxis: {

        data: ['1h', '2h', 'T1', 'now', 'T2', '3h', '4h'],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            interval: 3
        }

        // axisTick: { alignWithLabel: true},
    },
    yAxis: [{
            name: 'wO',
        },
        {
            name: 'P',
            inverse: true,
            nameLocation: 'start'
        }
    ],
    series: [{
        type: 'line',
        silent: true,
        data: [
            ['1h', '220'],
            ['T2', '20'],
        ],
        color:'black',
        //, 182, 191, 234, 290, 330, 310],
        markArea: {
            data: [
                [{
                    xAxis: '2h',
                    yAxis: 0,
                    itemStyle:{
                        color:'red'
                        
                    },
                    label: {
                        show: true,
                        position: ['50%', '50%'],
                        color: 'black',
                        fontStyle: 'oblique',
                        fontSize: 20,
                        rotate: 90,
                        formatter: "wwww"
                    }
                    
                }, {
                    xAxis: 'T2',
                    yAxis: '350',
                    itemStyle:{
                        color:''
                        
                    }
                   
                }]
            ],
            
           
        }
    }]
};
