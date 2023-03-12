option = {
    legend: {
        data: ['办','让','做','用','作'],
        left: 'center',
        bottom: 'bottom'
    },
    xAxis: {
        type: 'category',
        data: ['1950s','1960s','1970s','1980s','1990s','2000s'],
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'办',
        data: [2.391, 2.6906, 2.5187, 3.2804, 1.4417, 0.7889],
        type: 'line'
    },
    {
        name:'让',
        data: [1.3388, 1.746, 1.1604, 0.7114, 0.5309, 0.6029],
        type: 'line'
        
    },
    {
        name:'做',
        data: [1.0905, 1.0067, 0.6755, 0.9054, 0.7948, 0.7786],
        type: 'line'
    },
    {
        name:'用',
        data: [0.6679, 0.895, 0.3043, 0.358, 0.4159, 0.5099],
        type: 'line'
        
    },
    {
        name:'作',
        data: [0.4982, 0.28, 0.1056, 0.2222, 0.1511, 0.1142],
        type: 'line'
        
    }]
};
