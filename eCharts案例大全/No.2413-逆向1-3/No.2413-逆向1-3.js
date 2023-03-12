var option;

let colors = ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#5470C6'];
    let mydata = [
        { name: 'L1', itemStyle: { color: colors[0] },   depth: 0 },
        { name: 'L1-1', itemStyle: { color: colors[0] }, depth: 0 },



        { name: 'L2', itemStyle: { color: colors[1] },   depth: 1 },
        { name: 'L2-1', itemStyle: { color: colors[1] }, depth: 1 },


        
        { name: 'L3', itemStyle: { color: colors[2] },   depth: 2 },




    ];
    // mydata.reverse()
    let mylinks = [
        // L1→L3	 4509
        { source: 'L1', target: 'L3', value: 4509 },
        // L2→L3	 12196
        { source: 'L2', target: 'L3', value: 12196 },
        // L1→L2→L3	 2404
        { source: 'L1-1', target: 'L2-1', value: 2404 },
        { source: 'L2-1', target: 'L3', value: 2404 },

        
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

