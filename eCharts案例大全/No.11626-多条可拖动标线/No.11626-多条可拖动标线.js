// 稍后添加注释

const CURSOR_COLOR = '#f80';
const CURSOR_COLOR2 = '#0cf';

function getData() {
  let t = Date.now();
  let v = Math.random() * 50 + 300;
  return Array(100).fill(0).map(() => [(t += 1e5), (v += Math.random() * 25 - 10)]);
}

function getTimeStr(t) {
  const d = new Date(t);
  return `${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()} ${`0${d.getHours()}`.slice(-2)}:${`0${d.getMinutes()}`.slice(-2)}:${`0${d.getSeconds()}`.slice(-2)}`
}

class Box {
  constructor(chart) {
    this.chart = chart;
    this.cursors = ['x1', 'x2', 'y1', 'y2'];
    this.box = null;
    this.value = null;
    this.yAxisIndex = 0;
  }

  update() {
    const w = this.chart.getWidth();
    const h = this.chart.getHeight();
    const { left, right, top, bottom } = this.chart.getOption().grid[0];
    const x1 = left === 'left' ? 0 : left === 'right' ? w : left === 'center' ? w * 0.5 : /%$/.test(left) ? w * 0.01 * parseFloat(left) : left;
    const x2 = /%$/.test(right) ? w * (1 - 0.01 * parseFloat(right)) : w - right;
    const y1 = top === 'top' ? 0 : top === 'bottom' ? h : top === 'middle' ? h * 0.5 : /%$/.test(top) ? h * 0.01 * parseFloat(top) : top;
    const y2 = /%$/.test(bottom) ? h * (1 - 0.01 * parseFloat(bottom)) : h - bottom;
    const width = x2 - x1;
    const height = y2 - y1;
    this.box = { width, height, x1, y1, x2, y2 };
    if (!this.value) this.value = [0.1 * width, 0.9 * width, 0.9 * height, 0.1 * height];
    this.chart.setOption({ graphic: [
      { id: 'box', left: x1, top: y1, width, height },
      ...this.cursors.map((id, i) => (id[0] === 'y'
        ? { id, position: [0, (this.value[i] = Math.max(1, Math.min(height - 1, this.value[i])))], width }
        : { id, position: [(this.value[i] = Math.max(1, Math.min(width - 1, this.value[i]))), 0], height })),
      ...this.cursors.map(id => (id[0] === 'y'
        ? { id: `${id}l`, info: id, shape: { x1: 0, x2: width, y1: 0, y2: 0 } }
        : { id: `${id}l`, shape: { x1: 0, x2: 0, y1: 0, y2: height } })),
    ] });
    setTimeout(() => this.displayCursor(), 500);
  }

  setCursor({ target: { position } = {} }, id) {
    const i = this.cursors.indexOf(id);
    if (i < 0) return;
    const { width, height } = this.box;
    this.chart.setOption(id[0] === 'y'
      ? { graphic: [{ id, position: [0, (this.value[i] = Math.max(1, Math.min(height - 1, this.value[i] + position[1])))] }, { id: `${id}l`, position: [0, 0] }] }
      : { graphic: [{ id, position: [(this.value[i] = Math.max(1, Math.min(width - 1, this.value[i] + position[0]))), 0] }, { id: `${id}l`, position: [0, 0] }] });
    this.displayCursor();
  }

  displayCursor() {
    const { x1, y1 } = this.box;
    const [va, vb, v1, v2] = this.value;
    const [a, b] = [va, vb].map(e => this.chart.convertFromPixel('xAxis', e + x1));
    const [c, d] = [v1, v2].map(e => this.chart.convertFromPixel({ yAxisIndex: this.yAxisIndex }, e + y1));
    dispVal({ a, b, '1': c, '2': d });
  }
}

let box;

function getText(id) {
return id[0] === 'y' 
  ? [{ type: 'text', silent: true, left: -16, top: 'middle', z: 99, style: { text: id[1], fill: '#fff', font: '0.8em sans-serif' } },
    { type: 'polygon', silent: true, left: -20, top: 'middle', cursor: 'default', z: 98, shape: { points: [[0, 0], [-8, 8], [-20, 8], [-20, -8], [-8, -8]] }, style: { fill: CURSOR_COLOR2 } }]
  : [{ type: 'text', silent: true, left: 'center', top: -18, z: 99, style: { text: ['a', 'b'][id[1] - 1], fill: '#fff', font: '0.8em sans-serif' } },
    { type: 'polygon', silent: true, cursor: 'default', z: 98, left: 'center', top: -20, shape: { points: [[0, 0], [8, -8], [8, -20], [-8, -20], [-8, -8]] }, style: { fill: CURSOR_COLOR } }];
}

function getCursor(id) {
  return {
    type: 'group', id, bounding: 'raw', position: [0, 0],
    children: id[0] === 'y'
      ? [{ id: `${id}l`, type: 'line', z: 99, draggable: true, cursor: 'row-resize', style: { stroke: CURSOR_COLOR2 } }, ...getText(id)]
      : [{ id: `${id}l`, type: 'line', z: 99, draggable: true, cursor: 'col-resize', style: { stroke: CURSOR_COLOR } }, ...getText(id)],
    ondrag: e => box.setCursor(e, id),
  };
}

const opt = {
  grid: {},
  xAxis: { type: 'time' },
  yAxis: { type: 'value' },
  series: [{ type: 'line', showSymbol: false, data: getData() }],
  graphic: {
    type: 'group',
    id: 'box',
    bounding: 'raw',
    children: ['x1', 'x2', 'y1', 'y2'].map(getCursor),
  },
};

myChart.setOption(opt);
box = new Box(myChart);
box.update();
window.addEventListener('resize', () => myChart.resize() + box.update());

document.head.appendChild(document.createElement('style')).innerHTML = '#x-result{font-size:13px}b.xtag{font-size:10px;display:inline-block;text-align:center;line-height:16px;width:16px;border-radius:10px;color:#fff;margin-left:5px}b.xdif{margin-left:5px}'
const div = document.body.appendChild(document.createElement('div'));
div.id = 'x-result';
div.style = 'position:absolute;bottom:16px;left:40px;right:200px;display:flex;justify-content:space-between';
const conf = [ { name: 'a', color: CURSOR_COLOR }, { name: 'b', color: CURSOR_COLOR }, { name: '1', color: CURSOR_COLOR2 }, { name: '2', color: CURSOR_COLOR2 }]
function dispVal(val = {}) {
  if (!div) return;
  const r = []
  if (val.a && val.b) r.push([...['a', 'b'].map(e => `<b class=xtag style=background:${CURSOR_COLOR}>${e}</b> ${getTimeStr(val[e])}`), `<b class="xdif" style="color:${CURSOR_COLOR}">∆</b> ${+((val.b - val.a) * 1e-3).toFixed(3)} 秒`].join(''));
  if (val['1'] && val['2']) r.push([...['1', '2'].map(e => `<b class=xtag style=background:${CURSOR_COLOR2}>${e}</b> ${+(val[e]).toFixed(3)}`), `<b class="xdif" style="color:${CURSOR_COLOR2}">∆</b> ${+(val['2'] - val['1']).toFixed(3)}`].join(''));
  div.innerHTML = `<span>${r.join('</span><span>')}</span>`;
}