var option;

let colors = ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#5470C6'];
    let mydata = [
        { name: 'L1', itemStyle: { color: colors[0] },   depth: 0 },
        { name: 'L1-1', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-2', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-3', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-4', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-5', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-6', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-7', itemStyle: { color: colors[0] }, depth: 0 },

        { name: 'L2', itemStyle: { color: colors[1] },   depth: 1 },
        { name: 'L2-1', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-2', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-3', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-4', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-5', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-6', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-7', itemStyle: { color: colors[1] }, depth: 1 },
        
        { name: 'L3', itemStyle: { color: colors[2] },   depth: 2 },
        { name: 'L3-1', itemStyle: { color: colors[2] }, depth: 2 },
        { name: 'L3-2', itemStyle: { color: colors[2] }, depth: 2 },
        { name: 'L3-3', itemStyle: { color: colors[2] }, depth: 2 },
        { name: 'L3-4', itemStyle: { color: colors[2] }, depth: 2 },
        { name: 'L3-5', itemStyle: { color: colors[2] }, depth: 2 },
        { name: 'L3-6', itemStyle: { color: colors[2] }, depth: 2 },
        { name: 'L3-7', itemStyle: { color: colors[2] }, depth: 2 },
        
        { name: 'L4', itemStyle: { color: colors[3] },   depth: 3 },
        { name: 'L4-1', itemStyle: { color: colors[3] }, depth: 3 },
        { name: 'L4-2', itemStyle: { color: colors[3] }, depth: 3 },
        { name: 'L4-3', itemStyle: { color: colors[3] }, depth: 3 },
        { name: 'L4-4', itemStyle: { color: colors[3] }, depth: 3 },
        { name: 'L4-5', itemStyle: { color: colors[3] }, depth: 3 },
        { name: 'L4-6', itemStyle: { color: colors[3] }, depth: 3 },
        { name: 'L4-7', itemStyle: { color: colors[3] }, depth: 3 },
        
        { name: 'L5', itemStyle: { color: colors[4] },   depth: 4 },


    ];
    // mydata.reverse()
    let mylinks = [
        // L1→L5	 364
        { source: 'L1', target: 'L5', value: 364 },
        // L2→L5	 1,006
        { source: 'L2', target: 'L5', value: 1006 },
        // L3→L5	 122
        { source: 'L3', target: 'L5', value: 122 },
        // L4→L5	 2,075
        { source: 'L4', target: 'L5', value: 2075 },
        // L1→L2→L3→L4→L5	 2
        { source: 'L1-1', target: 'L2-1', value: 2 },
        { source: 'L2-1', target: 'L3-1', value: 2 },
        { source: 'L3-1', target: 'L4-1', value: 2 },
        { source: 'L4-1', target: 'L5', value: 2 },
        // L1→L2→L3→L5	 33
        { source: 'L1-2', target: 'L2-2', value: 33 },
        { source: 'L2-2', target: 'L3-2', value: 33 },
        { source: 'L3-2', target: 'L5', value: 33 },
        // L1→L2→L4→L5	 152
        { source: 'L1-3', target: 'L2-3', value: 152 },
        { source: 'L2-3', target: 'L4-2', value: 152 },
        { source: 'L4-2', target: 'L5', value: 152 },
        // L1→L3→L4→L5	 3
        { source: 'L1-4', target: 'L3-3', value: 3 },
        { source: 'L3-3', target: 'L4-3', value: 3 },
        { source: 'L4-3', target: 'L5', value: 3 },
        // L1→L2→L5	 227
        { source: 'L1-5', target: 'L2-4', value: 227 },
        { source: 'L2-4', target: 'L5', value: 227 },
        // L1→L3→L5	 32
        { source: 'L1-6', target: 'L3-4', value: 32 },
        { source: 'L3-4', target: 'L5', value: 32 },
        // L1→L4→L5	 274
        { source: 'L1-7', target: 'L4-4', value: 274 },
        { source: 'L4-4', target: 'L5', value: 274 },

        // L2→L3→L5	 75
        { source: 'L2-5', target: 'L3-5', value: 75 },
        { source: 'L3-5', target: 'L5', value: 75 },
        // L2→L4→L5	 895
        { source: 'L2-6', target: 'L4-5', value: 895 },
        { source: 'L4-5', target: 'L5', value: 895 },
        // L2→L3→L4→L5	 11
        { source: 'L2-7', target: 'L3-6', value: 11 },
        { source: 'L3-6', target: 'L4-6', value: 11 },
        { source: 'L4-6', target: 'L5', value: 11 },

        // L3→L4→L5	 37
        { source: 'L3-7', target: 'L4-7', value: 37 },
        { source: 'L4-7', target: 'L5', value: 37 },
    ];
option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },
    series: {
        type: 'sankey',
        lineStyle: {
            opacity:0.3,
            color: 'gradient',
            curveness: 0.7,
        },
        // nodeAlign: 'left',
        nodeGap: 18,
        layoutIterations: 1,
        emphasis: {
            focus: 'adjacency',
        },
        data: mydata,
        links: mylinks,
    },
};

myChart.setOption(option);
