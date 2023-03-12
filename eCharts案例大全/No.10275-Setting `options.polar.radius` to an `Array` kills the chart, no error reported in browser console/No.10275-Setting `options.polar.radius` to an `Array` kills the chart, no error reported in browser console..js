option = {
    title: {
        text: 'Set polar.radius to an array kills the chart'
    },
    'angleAxis': {
        type: 'category',
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    radiusAxis: {
    },
    polar: {
        // radius: 80 // works
        // radius: '80%' // works
        
        // radius: ['80%'], // fail
        // radius: [80], // works     
        
        radius: ['10%', '80%'], // fail
    },
    series: [{
        type: 'bar',
        coordinateSystem: 'polar',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};