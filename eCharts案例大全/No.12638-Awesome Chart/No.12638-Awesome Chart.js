option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    grid: {
        left: '10%',
        top: 30,
        right: '20%',
        bottom: 30,
        width: 'auto',
        height: 'auto',
        containLabel: false,
        backgroundColor: 'transparent',
        borderColor: '#ccc',
        borderWidth: 1,
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310],
        enableMouseTracking: false,
        shadow: false,
        animation: false
    }]
};