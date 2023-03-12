option = {
    legend: {
        show:true,
        data: ['早高峰' , '晚高峰', '平峰']
    },
    xAxis: {
        type: 'category',
        data: ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"]
    },
    yAxis: {
        type: 'value'
    },
    visualMap: {
        show: true,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'green'
        }, {
            gt: 6,
            lte: 7,
            color: 'red'
        }, {
            gt: 7,
            lte: 18,
            color: 'green'
        }, {
            gt: 18,
            lte: 19,
            color: 'blue'
        }, {
            gt: 19,
            color: 'green'
        }]
    },
    series: [{
        name:'平峰',
        data: [
            100, 100,100, 100,
            100, 100,1500, 1500,
            100, 100,100, 100,
            100, 100,100, 100,
            100, 100,1500, 1500,
            100, 100,100, 100,
            ],
        type: 'line'
    },{
        name:'早高峰',
        data: [
            null, null, null, null,
            null, null, 1500, 1500,
            null, null, null, null,
            null, null, null, null, 
            null, null,null, null,
            null, null, null, null],
        type: 'line'
    },{
        name:'晚高峰',
        data: [
            null, null, null, null,
            null, null, null, null,
            null, null, null, null,
            null, null, null, null, 
            null, null,1500, 1500,
            null, null, null, null],
            type: 'line'
    }
    
    ]
};
