const data =[220, 182, 1091, 234, 290, 730, 810];
var j = 0; 
var max = Math.max.apply(Math, data); 

option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    visualMap: {
        show: false,
        dimension: 1,
        pieces: [],  
        outOfRange: {
            color: 'green'
        }
    },
    yAxis: {},
    series: [{
        type: 'line',
        data
    }]
};

option.series[0].data = data; 
option.visualMap.pieces[0] = {gte: 300, lte: max, color: 'red'}; 