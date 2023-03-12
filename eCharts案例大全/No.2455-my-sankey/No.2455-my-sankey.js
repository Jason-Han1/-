var option;

let colors = ['#FBB4AE', '#B3CDE3', '#CCEBC5', '#DECBE4', '#5470C6'];
let mydata = [
    { name: 'L1', itemStyle: { color: colors[0] }, depth: 0 },
    { name: 'L2', itemStyle: { color: colors[1] }, depth: 1 },
    { name: 'L2-1', itemStyle: { color: colors[1] }, depth: 1 },
    { name: 'L2-2', itemStyle: { color: colors[1] }, depth: 1 },
    { name: 'L2-3', itemStyle: { color: colors[1] }, depth: 1 },
    { name: 'L2-4', itemStyle: { color: colors[1] }, depth: 1 },
    { name: 'L2-5', itemStyle: { color: colors[1] }, depth: 1 },
    { name: 'L2-6', itemStyle: { color: colors[1] }, depth: 1 },
    { name: 'L3', itemStyle: { color: colors[2] }, depth: 2 },
    { name: 'L3-1', itemStyle: { color: colors[2] }, depth: 2 },
    { name: 'L3-2', itemStyle: { color: colors[2] }, depth: 2 },
    { name: 'L3-3', itemStyle: { color: colors[2] }, depth: 2 },
    { name: 'L3-4', itemStyle: { color: colors[2] }, depth: 2 },
    { name: 'L3-5', itemStyle: { color: colors[2] }, depth: 2 },
    { name: 'L4', itemStyle: { color: colors[3] }, depth: 3 },
    { name: 'L4-1', itemStyle: { color: colors[3] }, depth: 3 },
    { name: 'L4-2', itemStyle: { color: colors[3] }, depth: 3 },
    { name: 'L4-3', itemStyle: { color: colors[3] }, depth: 3 },
    { name: 'L4-4', itemStyle: { color: colors[3] }, depth: 3 },
    { name: 'L5-1', itemStyle: { color: colors[4] }, depth: 4 },
    { name: 'L5-2', itemStyle: { color: colors[4] }, depth: 4 },
    { name: 'L5-3', itemStyle: { color: colors[4] }, depth: 4 },
    { name: 'L5-4', itemStyle: { color: colors[4] }, depth: 4 },
    { name: 'L5-5', itemStyle: { color: colors[4] }, depth: 4 },
    { name: 'L5', itemStyle: { color: colors[4] }, depth: 4 },
];
let mylinks = [
    // L1→L2: 10321
    { source: 'L1', target: 'L2', value: 10321 },
    // L1→L3: 896
    { source: 'L1', target: 'L3', value: 896 },
    // L1→L4: 3191
    { source: 'L1', target: 'L4', value: 3191 },
    // L1→L5: 28
    { source: 'L1', target: 'L5', value: 28 },
    // L1→L2→L3: 491
    { source: 'L1', target: 'L2-1', value: 491 },
    { source: 'L2-1', target: 'L3-1', value: 491 },
    // L1→L2→L3→L4: 30
    { source: 'L1', target: 'L2-2', value: 30 },
    { source: 'L2-2', target: 'L3-2', value: 30 },
    { source: 'L3-2', target: 'L4-1', value: 30 },
    // L1→L2→L3→L5: 8
    { source: 'L1', target: 'L2-3', value: 8 },
    { source: 'L2-3', target: 'L3-3', value: 8 },
    { source: 'L3-3', target: 'L5-1', value: 8 },
    // L1→L2→L4: 1144
    { source: 'L1', target: 'L2-4', value: 1144 },
    { source: 'L2-4', target: 'L4-2', value: 1144 },
    // L1→L2→L4→L5: 21
    { source: 'L1', target: 'L2-5', value: 21 },
    { source: 'L2-5', target: 'L4-3', value: 21 },
    { source: 'L4-3', target: 'L5-2', value: 21 },
    // L1→L2→L5: 61
    { source: 'L1', target: 'L2-6', value: 61 },
    { source: 'L2-6', target: 'L5-3', value: 61 },
    // L1→L3→L4: 50
    { source: 'L1', target: 'L3-4', value: 50 },
    { source: 'L3-4', target: 'L4-4', value: 50 },
    // L1→L3→L5: 5
    { source: 'L1', target: 'L3-5', value: 5 },
    { source: 'L3-5', target: 'L5-4', value: 5 },
    // L1→L4→L5: 57
    { source: 'L1', target: 'L4-5', value: 57 },
    { source: 'L4-5', target: 'L5-5', value: 57 },
];
option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
    },
    series: {
        type: 'sankey',
        lineStyle: {
            opacity:0.7,
            color: 'gradient',
            curveness: 0.5,
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
