option = {
    series: [{
        type: 'treemap',
        data: [{
            name: 'nodeA', // First tree
            value: 10,
            customValue: 'nodeA value',
            children: [{
                name: 'nodeAa', // First leaf of first tree
                value: 4,
                customValue: 'nodeAa value',
            }, {
                name: 'nodeAb', // Second leaf of first tree
                value: 6,
                customValue: 'nodeAb value',
            }]
        }, {
            name: 'nodeB', // Second tree
            value: 20,
            customValue: 'nodeB value',
            children: [{
                name: 'nodeBa', // Son of first tree
                value: 20,
                customValue: 'nodeBa value',
                children: [{
                    name: 'nodeBa1', // Granson of first tree
                    value: 20,
                    customValue: 'nodeBa1 value',
                }]
            }]
        }]
    }]
};