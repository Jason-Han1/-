
const arr = []
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 100 - 50))
}
option = {
            title: {
            text: '正负值不同颜色'
        },
    xAxis: {
        type: 'category',
        data: arr
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: arr,
        type: 'line',
        areaStyle: {}
    }],
    visualMap: {
        show: false,
        pieces: [{
            gt: Math.min.apply(null, arr),
            lte: 0,
            color: 'green'
        }, {
            gt: 0,
            lte: Math.max.apply(null, arr),
            color: 'red'
        } ],
        outOfRange: {
            color: 'white'
        }
    }
};
