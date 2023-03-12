option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {type: 'category'},
    yAxis: {},
    dataset: {
        source: [
            {NO: "E005", rentian: 2},
            {NO: "E028", rentian: 1},
            {NO: "E036", rentian: 2},
            {NO: "E044", rentian: 1},
            {NO: "E045", rentian: 4},
            {NO: "E1907", rentian: 3},
            {NO: "E2023", rentian: 3},
            {NO: "F1439", rentian: 1}    
        ]
    },
    series: [{
        type: 'bar',
        encode: {
            seriesName: ["NO", "rentian"],
            x: ["NO"],
        }
    }]
};