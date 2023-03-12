option = {
    title: {
        text: 'Final Eeam'
    },
    tooltip: {},
    legend: {
        data: ['Class1', 'Class2','Class3','Class4']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: 'Math', max: 150},
           { name: 'Chinese', max: 150},
           { name: 'English', max: 150},
           { name: 'Physics', max: 100},
           { name: 'Chemisry', max: 100},
           { name: 'Biology', max: 100}
        ]
    },
    series: [{
        name: 'Average grades）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [110, 105, 130, 80, 87, 91],
                name : 'Class1'
            },
             {
                value : [112, 120, 127, 88, 86, 93],
                name : 'Class2'
            },
            {
                value : [120, 130, 123, 78, 77, 81],
                name : 'Class3'
            },
            {
                value : [103, 110, 143, 68, 87, 96],
                name : 'Class4'
            },
        ]
    }]
};