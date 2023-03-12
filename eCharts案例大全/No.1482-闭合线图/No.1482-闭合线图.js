// 传入 需要计算的 x，返回 y
function getY(x, a, b) {
  return (b / a) * Math.sqrt(a * a - x * x);
}

/*** getCPoint函数，用于获取椭圆边坐标
 * a-椭圆的长半径
 * b-椭圆的短半径
 * px-边的x轴递进粒度
 * cx-圆心x轴坐标
 * cy-圆心y轴坐标
 ***/
function getCPoint({ a, b, px = 0.1, cx = 0, cy = 0 }) {
  const data = [];
  //const x0=-a+2<0?-a+2:-a+2
  //const x1=a-2>0?a-2:a-2
  //for (let x = -a; x <= x0; x = x + px) {
  //  let y = getY(Number(x.toFixed(1)), a, b)
  //  data.push([Number((cx + x).toFixed(1)) * 10, y + cy])
  //}
  for (let x = -a; x <= a + px; x = x + px) {
    let y = getY(Number(x.toFixed(1)), a, b);
    data.push([Number((cx + x).toFixed(1)) * 10, y + cy]);
  }
  //data.push(...data.map(x=>[x[0],-x[1]]))
  return data;
}
function getScenes(n = 40) {
  const data = [];
  for (let i = 1; i <= n; i = i + 0.1) {
    data.push(Number(i.toFixed(1)));
  }
  data.push(n);
  //console.log(data);
  return data;
}
function getEspScenes(n = 40) {
  const data = [];
  for (let i = 1; i <= 40; i = i + 1) {
    data.push(`1#${i}`);
    if (i !== n) {
      for (let j = 0; j < 9; j = j + 1) {
        data.push('');
      }
    }
  }
  //console.log(data);
  return data;
}
function getSeries() {
  const data = [];
  for (let i = 1; i <= 20; i = i + 1) {
    const rand = Math.random()
    a = Math.floor(Math.random() * 10);
    b = (a > 10 ? 10 : a)+rand;
    c = 10 + Math.floor(Math.random() * 20);
    data.push({
      type: 'line',
      showSymbol: false,
      smooth: true,
      clip: true,
      data: getCPoint({ a: a, b: b, cx: c, cy: 0 }),
    });
  }
  return data;
}

option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50,
  },
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross',
    },
  },
  xAxis: [
    {
      name: '',
      boundaryGap: false,
      minorTick: {
        show: true,
      },
      minorSplitLine: {
        show: true,
      },
      axisLabel: {
        interval: 9,
        rotate: 60,
      },
      data: getEspScenes(),
    },
    {
      name: '',
      boundaryGap: false,
      minorTick: {
        show: true,
      },
      minorSplitLine: {
        show: true,
      },
      axisLabel: {
        interval: 9,
      },
      data: getScenes(),
    },
  ],
  yAxis: {
    name: '',
    min: -30,
    max: 30,
    minorTick: {
      show: true,
    },
    minorSplitLine: {
      show: true,
    },
  },
  dataZoom: [
    {
      show: true,
      type: 'inside',
      filterMode: 'none',
      xAxisIndex: [0, 1],
    },
    {
      show: true,
      type: 'inside',
      filterMode: 'none',
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20,
    },
  ],
  series: [...getSeries()],
};
