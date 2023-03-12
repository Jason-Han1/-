var data = [
  { name: '1' },
  { name: '4' },
  { name: '5' },
  { name: '2' },
  { name: '3' },
  { name: '6' },
  { name: '7' },
  { name: '8' },
  { name: '9' },
  { name: '10' }
];
var links = [
  { source: '1', target: '4' },
  { source: '1', target: '5' },
  { source: '2', target: '3' },
  { source: '2', target: '5' },
  { source: '3', target: '6' },
  { source: '4', target: '5' },
  { source: '4', target: '7' },
  { source: '5', target: '6' },
  { source: '5', target: '8' },
  { source: '6', target: '9' },
  { source: '7', target: '8' },
  { source: '7', target: '10' },
  { source: '8', target: '9' },
  { source: '8', target: '10' },
  { source: '9', target: '10' }
];

option = {
  series: [
    {
      type: 'graph',
      layout: 'circular',
      force: {
        repulsion: 9999,
        friction: 0.2
      },
      symbolSize: 60,
      roam: true,
      label: {
        show: true
      },
      edgeLabel: {
        fontSize: 20
      },
      data: data,
      links: links,
      lineStyle: {
        width: 2,
        curveness: 0
      }
    }
  ]
};
