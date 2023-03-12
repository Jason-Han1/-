option = {
  color:["#29CB97","#4072EE","#FDAC41"],
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  animation: false,
  series: [
    {
      type: 'sankey',
      bottom: '10%',
      nodeWidth: 25,
      nodeGap: 20,
      draggable:false,
      emphasis: {
        focus: 'adjacency'
      },
      data: [
        { name: 'ship' },
        { name: 'weather' },
        { name: 'dp_101' },
        { name: 'dp_101_1min_avg' },
        { name: 'dp_101_1min_sample' },
        { name: 'dp_101_10min_avg' },
        { name: 'dp_102' },
        { name: 'dp_102_1min_avg' },
        { name: 'dp_102_1min_sample' },
        { name: 'dp_102_10min_avg' },
        { name: 'machine_weather' },
        { name: 'cleaned_data' },
      ],
      links: [
        { source: 'ship', target: 'dp_101', value: 1 },
        { source: 'ship', target: 'dp_102', value: 1 },
        { source: 'dp_101', target: 'dp_101_1min_avg', value: 1 },
        { source: 'dp_101', target: 'dp_101_1min_sample', value: 1 },
        { source: 'dp_101', target: 'dp_101_10min_avg', value: 1 },
        { source: 'dp_102', target: 'dp_102_1min_avg', value: 1 },
        { source: 'dp_102', target: 'dp_102_1min_sample', value: 1 },
        { source: 'dp_102', target: 'dp_102_10min_avg', value: 1 },
        { source: 'dp_102_1min_sample', target: 'machine_weather', value: 1 },
        { source: 'weather', target: 'machine_weather', value: 1 },
        { source: 'dp_101_1min_avg', target: 'cleaned_data', value: 1 },
        { source: 'dp_102_1min_avg', target: 'cleaned_data', value: 1 },
      ],
      focusNodeAdjacency: 'allEdges',
      itemStyle: {
        borderWidth: 0,
      },
      label: {
        position: 'bottom',
        color:'#748AA1'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.5
      }
    }
  ]
};
console.log(JSON.stringify(option))