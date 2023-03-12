option = {
    title: {
        text: 'Awesome Chartx'
    },
    backgroundColor: '#000',

    itemStyle: {
        color: '#fff'
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            color: '#fff'
        }
    },
    
    
    
    
    
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#fff'
        }
    },
    grid: {
        show: true
    },

    series: [{
        type: 'graph',
        coordinateSystem: 'cartesian2d',

        lineStyle: {
            width: 3,
            curveness: 0.3,
            opacity:0.1,
        },
        
        
        edgeSymbol: ['none', 'arrow'],
        data: [{
            name: 'a',
            // x: 10,
            // y: 10,
            value: [10, 10],
            symbolSize: 30,
            symbol: 'image://https://10.1.15.106:8080/images/server2.png'
        }, {
            name: 'b',
            // x: 20,
            // y: 10,
            value: [20, 20],
            symbolSize: 30,
            symbol: 'image://https://10.1.15.106:8080/images/server2.png'
        }, ],
        links: [{
            source: 'a',
            target: 'b'
        }]
    }, ]
};
let i=0;
setInterval(()=>{
    if(i%2===0){
        option.series.shift();
        myChart.setOption(option)
    }else{
        option.series.push({
        type: 'lines',
        lineStyle: {
            color: '#fff',
            width: 4,
            curveness: 1,
            opacity:0.1
        },
        z: 3,
        effect: {
            show:true,
            color: 'blue',
            loop: true,
            symbol: 'arrow',
            period: 2,
            symbolSize: 9,
        },
        coordinateSystem: 'cartesian2d',
        data: [{
            coords: [
                [10, 10],
                [20, 20]
            ]
        }, ]
    });
    myChart.setOption(option)
    }
    i++;
    option.series[1].data=[]
    console.log(myChart)
    myChart.setOption(option);
},1000)