var option;

let colors = ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#5470C6'];
    let mydata = [
        { name: 'L1', itemStyle: { color: colors[0] },   depth: 0 },
        { name: 'L1-1', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-2', itemStyle: { color: colors[0] }, depth: 0 },
        { name: 'L1-3', itemStyle: { color: colors[0] }, depth: 0 },


        { name: 'L2', itemStyle: { color: colors[1] },   depth: 1 },
        { name: 'L2-1', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-2', itemStyle: { color: colors[1] }, depth: 1 },
        { name: 'L2-3', itemStyle: { color: colors[1] }, depth: 1 },

        
        { name: 'L3', itemStyle: { color: colors[2] },   depth: 2 },
        { name: 'L3-1', itemStyle: { color: colors[2] }, depth: 2 },
        { name: 'L3-2', itemStyle: { color: colors[2] }, depth: 2 },

        
        { name: 'L4', itemStyle: { color: colors[3] },   depth: 3 },



    ];
    // mydata.reverse()
    let mylinks = [
        // L1→L4	 9720
        { source: 'L1', target: 'L4', value: 9720 },
        // L2→L4	 24396
        { source: 'L2', target: 'L4', value: 24396 },
        // L3→L4	 1462
        { source: 'L3', target: 'L4', value: 1462 },

        // L1→L2→L3→L4	 215
        { source: 'L1-1', target: 'L2-1', value: 215 },
        { source: 'L2-1', target: 'L3-1', value: 215 },
        { source: 'L3-1', target: 'L4', value: 215 },

        // L1→L2→L4	 4518
        { source: 'L1-2', target: 'L2-2', value: 4518 },
        { source: 'L2-2', target: 'L4', value: 4518 },
        // L1→L3→L4	 217
        { source: 'L1-3', target: 'L3-2', value: 217 },
        { source: 'L3-2', target: 'L4', value: 217 },

        // L2→L3→L4	 893
        { source: 'L2-3', target: 'L3-3', value: 893 },
        { source: 'L3-3', target: 'L4', value: 893 },
        
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

