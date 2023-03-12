option = {
    legend: {
        data: ['A','B','C','D']
    },
    tooltip: {
        formatter: function(param){
            var array = [
                param.data.date,
                param.data.dept,
                param.data.a,
                param.data.b,
            ];
            return array.join('\n');
        }
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value'
    },
    dataset: [{
        dimensions:['date','a'],
        source: [
            {date: '2015',dept:'A',a: 15,b: 20},
            {date: '2016',dept:'A',a: 15,b: 20}
        ]
    },{
        dimensions:['date','a'],
        source: [
            {date: '2015',dept:'B',a: 30,b: 20},
            {date: '2016',dept:'B',a: 30,b: 20}
        ]
    },{
        dimensions:['date','a'],
        source: [
            {date: '2015',dept:'C',a: 45,b: 20},
            {date: '2016',dept:'C',a: 45,b: 20}
        ]
    },{
        dimensions:['date','a'],
       source: [
            {date: '2015',dept:'D',a: 15,b: 20},
            {date: '2016',dept:'D',a: 15,b: 20}
        ]
    }],
    series: [{
        name: 'A',
        type: 'bar',
        datasetIndex: 0,
    },{
        name: 'B',
        type: 'bar',
        datasetIndex: 1
    },{
        name: 'C',
        type: 'bar',
        datasetIndex: 2
    },{
        name: 'D',
        type: 'bar',
        datasetIndex: 3
    }]
};