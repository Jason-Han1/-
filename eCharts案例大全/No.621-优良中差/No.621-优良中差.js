var option = {
   legend: {
     data:['优']
    },
    grid: {
        top: 100,
        bottom: 50,
        height:35
    },
    xAxis: [{
        show: false,
        type: 'category',
    }, {
        show: false,
        type: 'value',
        min: 0,
        max: 300,
    }],
    yAxis: {
        show: false,
        type: 'value'
    },
    
    series: [{
        type: 'bar',
        barWidth: '100%',
        silent: true,
        data: [
            { name: '优',value: 1,   itemStyle: {color: '#2CAF70'}, label: {show: true, formatter: `优`, fontSize: 14 ,color:'#fff' } },
            { name: '良',value: 1, itemStyle: {color: '#FFA23F '}, label: {show: true, formatter: '良', fontSize: 14,color:'#fff'}},
            {name: '差',value: 1,  itemStyle: {color: '#E2121C '}, label: {show: true, formatter: '差', fontSize: 14,color:'#fff'}},
        ],
    }, {
        type: 'scatter',
        symbol: 'diamond',
        symbolSize: [2, 60],
        silent: true,
        xAxisIndex: 1,
        markPoint: {
            symbol: 'triangle',
            symbolSize: 8,
            symbolRotate: 180,
            symbolOffset: [0, '-50%'],
            itemStyle: {color: '#43CE17 '},
            label: {
                position: 'top',
                backgroundColor: '#43CE17 ',
                color: '#fff',
                padding:[2,3],
                distance: 0,
                borderRadius: 50
            },
            data: [
                {value:'100', coord: [100, 1]}
            ]
        }
        
    }]
};