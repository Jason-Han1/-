const createColorStops = (rgbColorString) => {
    const opacity = [0.9,0.8,0.4,0.3,0.2,0.3,0.4,0.8,0.9];
    let colorStops = [];
    for(let i = 0; i < 9; i++) {
        colorStops.push({
            offset: i / 8,
            color: 'rgba(' + rgbColorString + ',' + opacity[i] + ')'
        })
    }
    return colorStops;
};
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        data: [220, 182, 191, 234, 290, 330, 310],
        type: 'bar',
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: createColorStops('60,136,198')
            }
        }
    }]
};