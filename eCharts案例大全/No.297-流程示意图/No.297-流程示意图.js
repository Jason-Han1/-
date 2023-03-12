const nodes = [
  {
    id: 'illegal_node_sj2',
    name: '非立案核查',
    x: 250,
    y: 800,
    nexts: [
      { next: null, name: '同意' },
      { next: 'illegal_node_wfqr', name: '不同意' },
    ],
  },
  {
    id: 'illegal_0',
    name: '违法线索发现',
    x: 500,
    y: 1200,
    nexts: [
      { next: 'illegal_node_qx', name: '手动录入' },
      { next: 'illegal_sjpc', name: '自动录入' },
    ],
  },
  { id: 'illegal_node_fy', name: '法院强制执行', x: 350, y: 400, nexts: [{ next: null, name: '强制执行' }] },
  { id: 'illegal_node_ja', name: '结案', x: 500, y: 200, nexts: [{ next: null, name: null }] },
  {
    id: 'illegal_node_qx',
    name: '区县功能区核查',
    x: 500,
    y: 1000,
    nexts: [
      { next: null, name: '涉及其他部门' },
      { next: 'illegal_node_sj', name: '合法' },
      { next: 'illegal_node_wfqr', name: '不合法' },
    ],
  },
  {
    id: 'illegal_node_sj',
    name: '市级核查',
    x: 750,
    y: 800,
    nexts: [
      { next: null, name: '同意' },
      { next: 'illegal_node_qx', name: '不同意' },
    ],
  },
  {
    id: 'illegal_node_wfqr',
    name: '违法确认',
    x: 500,
    y: 800,
    nexts: [
      { next: 'illegal_node_xzcf', name: '立案' },
      { next: 'illegal_node_sj2', name: '非立案' },
    ],
  },
  {
    id: 'illegal_node_xzcf',
    name: '行政处罚决定书',
    x: 500,
    y: 600,
    nexts: [{ next: 'illegal_node_zx', name: '执行' }],
  },
  {
    id: 'illegal_node_zx',
    name: '执行情况',
    x: 500,
    y: 400,
    nexts: [
      { next: 'illegal_node_fy', name: '未执行到位' },
      { next: 'illegal_node_ja', name: '执行到位' },
    ],
  },
  {
    id: 'illegal_sjpc',
    name: '市级排查',
    x: 150,
    y: 1200,
    nexts: [
      { next: 'illegal_node_qx', name: '非误报' },
      { next: null, name: '误报' },
    ],
  },
  { id: null, name: '结束', x: 500, y: 0, nexts: [] },
];

const datas = [];

const lines = [];
var center = 500;
const offset = 50;
nodes.forEach((node) => {
  datas.push({
    name: node.name,
    value: [node.x, node.y],
    label: { position: 'bottom' },
  });

  node.nexts.forEach((line) => {
    const next = nodes.find((n) => n.id === line.next);
    if (!next) return;

    const coords = [];
    if (node.x === next.x || node.y === next.y) {
      coords.push([node.x, node.y]);
      coords.push([next.x, next.y]);
    } else {
      //竖线
      coords.push([node.x, node.y]);
      coords.push([node.x, next.y]);
      //横线
      coords.push([node.x, next.y]);
      coords.push([next.x, next.y]);
    }
    if (next.name === '非误报') {
      console.log(coords);
    }
    const list = coords.map((coord, index) => {
      const item = { coord };
      if (index === 0) {
        item.name = line.name;
        item.label = { position: 'middle' };
      }
      //如果是拐点
      if (coords.length > 2) {
        if (index === 1 || index === 2) {
          item.symbolSize = 0;
        }
      }
      return item;
    });

    let lineData = [];
    list.forEach((item, index) => {
      lineData.push(item);
      if ((index + 1) % 2 === 0 && lineData.length > 0) {
        lines.push(lineData);
        lineData = [];
      }
    });
  });
});

option = {
  xAxis: {
    //max: 1200,
    show: false,
    type: 'value',
  },
  yAxis: {
    // max: 1200,
    show: false,
    type: 'value',
  },
  series: [
    {
      type: 'graph',
      coordinateSystem: 'cartesian2d',
      symbolSize: 32,
      roam: true,
      label: {
        show: true,
        position: 'bottom',
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [1, 5],
      edgeLabel: {
        fontSize: 12,
      },
      data: datas,
    },
    {
      type: 'lines',
      coordinateSystem: 'cartesian2d',
      markLine: {
        //silent: true,
        data: lines,
      },
    },
  ],
};
