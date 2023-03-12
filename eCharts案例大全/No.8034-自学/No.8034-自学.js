option = {
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['date','dept','amount'],
        source: [
            {date:'2015',dept:'A',amount:1,bmount:2},
            {date:'2015',dept:'B',amount:2.5, bmount:8.1},
            {date:'2015',dept:'C',amount:6.9,bmount:2.8},
            {date:'2015',dept:'D',amount:4.1, bmount:8.8},
            {date:'2016',dept:'A',amount:9,bmount:3.9},
            {date:'2016',dept:'B',amount:5.5, bmount:1.2},
            {date:'2016',dept:'C',amount:4.7,bmount:1.9},
            {date:'2016',dept:'D',amount:8.3, bmount:3.8},
        ]
    },
    xAxis: [
        {
            type: 'category',
        }
    ],
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {name:'A',type: 'line'},
        {name:'B',type: 'line'},
        {name:'C',type: 'line'},
        {name:'D',type: 'line'},
    ]
};
