option = {
    series: {
        type: 'sankey',
        data: [{
            name: 'a'
        }, {
            name: 'a1'
        }, {
            name: 'a2'
        }, {
            name: 'b1'
        }, {
            name: 'c'
        }],
        links: [{
            source: 'a',
            target: 'a1',
            value: 5
        }, {
            source: 'a',
            target: 'a2',
            value: 10
        }, {
            source: 'a',
            target: 'b1',
            value: 1
        }, {
            source: 'b1',
            target: 'c',
            value: 2
        }]
    }
};