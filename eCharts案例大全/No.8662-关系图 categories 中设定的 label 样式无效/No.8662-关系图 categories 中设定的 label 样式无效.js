var nodes = [
    { name: 'node-1', category: 'red' },
    { name: 'node-2', category: 'blue', label: { show: false } }
];
var edges = [
    { source: 'node-1', target: 'node-2' }
];

option = {
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 40,
            force: {
              repulsion: 100,
              edgeLength: 40
            },
            label: {
              show: true,
              color: '#00ff00'
            },
            categories: [
              {
                name: 'red',
                itemStyle: {
                  color: '#ff0000'
                },
                label: {
                  show: false
                }
              },
              {
                name: 'blue',
                itemStyle: {
                  color: '#0000ff'
                }
              }
            ],
            nodes: nodes,
            edges: edges      
        }
    ]
};
