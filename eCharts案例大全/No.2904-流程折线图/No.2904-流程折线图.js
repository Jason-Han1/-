const cols = 6;
const links = [];
const edges = Array.from({ length: 32 }, (item, i) => {
  const row = Math.ceil((i + 1) / cols);
  const col = cols - Math.abs((i % (2 * cols)) - cols) + (row % 2);
  i &&
    links.push({
      source: i - 1 + '',
      target: i + '',
      value: i - 1 + ' ----->' + i,
      label: {
        show: true,
        formatter: '{c}',
      },
    });
  return {
    name: i + '',
    x: col * 100,
    y: row * 100,
  };
});
option = {
  series: [
    {
      type: 'graph',
      symbolSize: 50,
      data: edges,
      links,
      label: {
        show: true,
        position: 'bottom',
      },
      edgeSymbol: ['none', 'arrow'],
      lineStyle: {
        width: 1,
        show: true,
      },
    },
  ],
};
