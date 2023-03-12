option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    visualMap : {
            orient:'horizontal',
            top: 10,
            right: 'center' ,
            pieces: [
              {
                lt: 15,
                color: '#7B7B7B',
                label:'过低'
              },
              {
                gte: 15,
                lte: 80,
                color: '#9AEAC0',
                label:'正常'
              }, {
                gt: 80,
                color: '#FB8383',
                label:'过高'
              },
            ],
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        areaStyle:{},
        
    }]
};