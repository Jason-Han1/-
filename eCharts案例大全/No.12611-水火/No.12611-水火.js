option = {
   
    // "legend": {
    //     // x: '4%',
    //     // right:"right",
    //     top: '11%',
    //     // textStyle: {
    //     //     color: '#90979c',
    //     // },
    //     "data": ['三白托','黔东']
    // },
    xAxis: {
        data: [1,2,3,4,5,6,7,8,9],
         axisTick: {
               show:false
            },
    },
    yAxis: {
         type : 'value',
         axisTick: {
               show:false
            },
           
        splitLine: {
            show: false
        },
         
        axisLine: {
            lineStyle: {
               color: '#57617B'
            }
        }
    },
    series: [{
        type: 'line',
        name:'三白托',
        data:[8.3229915, 6.4320886, 8.086991,6.1883894, 8.2778068, 10.8430282, 7.6304018,4.1366945,1.5679725,1.1231477
]
    },{
        type: 'line',
         name:'黔东',
        data:[3.26216, 2.68983, 1.84404, 0, 0, 0, 1.61348,5.69646,4.94439]
    },{
        type: 'line',
        data:[11.5851515,9.1219186, 9.931031, 6.1883894,8.2778068, 10.8430282, 9.2438818,9.8331545,6.5123625
]
    }]
};