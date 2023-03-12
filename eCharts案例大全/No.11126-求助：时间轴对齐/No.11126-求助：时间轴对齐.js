now = +new Date();
day = 86400*1000;
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        type:'time',
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[[now,80],[now+day*1,100],[now+day*2,100],[now+day*3,260],[now+day*4,130],[now+day*5,300],[now+day*6,180]]
    }]
};