const seriesLayoutBy = 'row';
const seriesType = 'scatter';
const baseConfig = {
  moveSpeed: 1,
  childThreshold: 200,
  maxAge: 200,

  childCost: 60,
  illLost: 30,
  clearCost: 0.05,
  selfRecoveryIncrease: 10,
  balancePopulation: 1000,
  illPR: 0.3,
  distance: 1,
  baseCount: 200,
  rateA: 1,
  rateB: 1,
  rateC: 0.001,
};

function init(rateA, rateB, rateC) {
  const baseCount = baseConfig.baseCount;

  let ret = {
    A: [],
    B: [],
    C: [],
  };
  let planA = {
    clear: true,
    ill: false,
    child: 0,
    age: 0,
  };
  let planB = {
    clear: false,
    ill: false,
    child: 0,
    age: 0,
  };
  let planC = {
    clear: true,
    ill: false,
    child: 0,
    age: 0,
    except: {},
  };

  for (let i = 0; i < baseCount * rateA; i++) {
    ret.A.push(['傻瓜', Math.random() * 10, Math.random() * 10, 100, 'A' + i, Object.assign({}, planA)]);
  }
  for (let i = 0; i < baseCount * rateB; i++) {
    ret.B.push(['骗子', Math.random() * 10, Math.random() * 10, 100, 'B' + i, Object.assign({}, planB)]);
  }
  for (let i = 0; i < baseCount * rateC; i++) {
    ret.C.push(['斤斤计较者', Math.random() * 10, Math.random() * 10, 100, 'C' + i, Object.assign({}, planC)]);
  }
  // console.log(ret);
  return ret;
}

function emulate(src) {
  let dst = {
    A: [],
    B: [],
    C: [],
  };

  let srcArr = src.A.concat(src.B).concat(src.C);

  // console.log(srcArr.length);

  for (let i = srcArr.length - 1; i >= 0; i--) {
    // 随机移动
    srcArr[i][1] += (Math.random() - 0.5) * 2 * baseConfig.moveSpeed;
    srcArr[i][2] += (Math.random() - 0.5) * 2 * baseConfig.moveSpeed;

    // 移动超出范围则折返
    srcArr[i][1] < 0
      ? (srcArr[i][1] = 0 - srcArr[i][1])
      : srcArr[i][1] > 10
      ? (srcArr[i][1] = 20 - srcArr[i][1])
      : null;
    srcArr[i][2] < 0
      ? (srcArr[i][2] = 0 - srcArr[i][2])
      : srcArr[i][2] > 10
      ? (srcArr[i][2] = 20 - srcArr[i][2])
      : null;

    // 随机生病
    if (Math.random() <= baseConfig.illPR) {
      // console.log('some one ill');
      srcArr[i][5].ill = true;
    }

    // 生病减少生命值
    if (srcArr[i][5].ill) {
      tmpHealth = srcArr[i][3];
      srcArr[i][3] -= baseConfig.illLost;
      // console.log(`some one illcost: ${tmpHealth} -> ${srcArr[i][3]}(${baseConfig.illLost})`);
    }

    //寿命计算
    srcArr[i][5].age < baseConfig.maxAge ? srcArr[i][5].age++ : (srcArr[i][3] = 0);

    // 生命值归零则丢弃去掉
    if (srcArr[i][3] <= 0) {
      srcArr.splice(i, 1);

      // 生命值大于阈值，则生育
    } else if (srcArr[i][3] > baseConfig.childThreshold) {
      srcArr[i][3] -= baseConfig.childCost;
      srcArr[i][5].child += 1;
      tmpPlan = Object.assign({}, srcArr[i][5]);
      tmpPlan.ill = false;
      tmpPlan.child = 0;
      tmpPlan.age = 0;
      tmpPlan.except ? (tmpPlan.except = {}) : null;
      srcArr.push([srcArr[i][0], srcArr[i][1], srcArr[i][2], 100, `${srcArr[i][4]}_${srcArr[i][5].child}`, tmpPlan]);
    }
  }
  // console.log(srcArr.length);
  for (let i = 0; i < srcArr.length; i++) {
    for (let j = i + 1; j < srcArr.length; j++) {
      let dx = srcArr[i][1] - srcArr[j][1] > 0 ? srcArr[i][1] - srcArr[j][1] : srcArr[j][1] - srcArr[i][1];
      let dy = srcArr[i][2] - srcArr[j][2] > 0 ? srcArr[i][2] - srcArr[j][2] : srcArr[j][2] - srcArr[i][2];

      if (dx + dy > baseConfig.distance) {
        continue; // 未达到相互作用距离（为了简化运算，未使用平方和来判断）
      }

      // 判断、清理、消耗、记仇（斤斤计较者未被清理）
      srcArr[i][5].clear && !(srcArr[i][5].except && srcArr[i][5].except[srcArr[j][4]] > 0)
        ? ((srcArr[j][5].ill = false), (srcArr[i][3] -= baseConfig.clearCost))
        : typeof srcArr[j][5].except === 'undefined'
        ? null
        : (srcArr[j][5].except[srcArr[i][4]] = 1);

      srcArr[j][5].clear && !(srcArr[j][5].except && srcArr[j][5].except[srcArr[i][4]] > 0)
        ? ((srcArr[i][5].ill = false), (srcArr[j][3] -= baseConfig.clearCost))
        : typeof srcArr[i][5].except === 'undefined'
        ? null
        : (srcArr[i][5].except[srcArr[j][4]] = 1);
    }

    // 正常恢复（个体数量超过平衡数量后，恢复值将与个体数量呈反比）
    srcArr[i][3] +=
      srcArr.length < baseConfig.balancePopulation
        ? baseConfig.selfRecoveryIncrease
        : Math.round((baseConfig.selfRecoveryIncrease * baseConfig.balancePopulation) / srcArr.length);

    // 计算完毕，存入 dst
    srcArr[i][4].startsWith('A')
      ? dst.A.push(srcArr[i])
      : srcArr[i][4].startsWith('B')
      ? dst.B.push(srcArr[i])
      : dst.C.push(srcArr[i]);
  }
  // console.log(dst);
  return dst;
}

let dataAll = init(baseConfig.rateA, baseConfig.rateB, baseConfig.rateC);

option = {
  title: {
    show: true,
    text: '仿《自私的基因》，傻瓜、斤斤计较者、骗子策略模拟',
    subtext:
      '假设有一种非常令人厌恶的蜱寄生在某种小鸟身上，而这种蜱又带有某种危险的病菌，所以必须尽早消灭这些蜱。\n一般说来，小鸟用嘴梳理自己的羽毛时能够把蜱剔除掉，可是有一个鸟嘴达不到的地方——它的头顶。\n\nA.傻瓜策略：无论如何都帮助对方清理蜱\nB.骗子策略：无论如何都不帮助对方清理蜱\nC.斤斤计较策略：只帮助从未欺骗过自己的小鸟清理蜱',
  },
  dataset: [
    {
      sourceHeader: true,
      // dimensions: ['seriesName', 'x', 'y', 'value', 'idx', 'obj'],
      source: dataAll.A,
    },
    {
      sourceHeader: true,
      // dimensions: ['seriesName', 'x', 'y', 'value', 'idx', 'obj'],
      source: dataAll.B,
    },
    {
      sourceHeader: true,
      // dimensions: ['seriesName', 'x', 'y', 'value', 'idx', 'obj'],
      source: dataAll.C,
    },
    {
      // dimensions: ['seriesName', 'count'],
      source: (function () {
        let sourceStats = [];
        for (let key in dataAll) {
          sourceStats.push([dataAll[key][0][0], dataAll[key].length]);
        }
        return sourceStats;
      })(),
    },
  ],
  grid: {
    top: '20%',
    bottom: '30%',
  },
  tooltip: {
    formatter: (params) => {
      if (params.seriesIndex === 3) {
        return params.name + '：' + params.data[1];
      }
      // console.log(params);
      return `${params.seriesName}<br />${params.data[4]}(${params.data[3]})<br />蜱：${params.data[5].ill}${
        typeof params.data[5].except === 'undefined' || true
          ? ''
          : '<br />黑名单：' + Object.keys(params.data[5].except).join('<br/>')
      }`;
    },
  },
  legend: {
    right: '5%',
    top: '5%',
  },
  xAxis: {
    max: 10,
  },
  yAxis: {
    max: 10,
  },
  animation: false,
  series: (function () {
    let seriesList = [];
    for (let i = 0; i < 3; i++) {
      seriesList.push({
        type: seriesType,
        datasetIndex: i,
        encode: {
          seriesName: 0,
          x: 1,
          y: 2,
          value: 3,
        },
      });
    }
    seriesList.push({
      type: 'pie',
      datasetIndex: 3,
      xAxisIndex: 1,
      yAxisIndex: 1,
      seriesLayoutBy: 'column',
      center: ['50%', '85%'],
      startAngle: 0,
      radius: [0, '20%'],
      itemStyle: {
        color: (params) => {
          return params.name === '傻瓜' ? '#5470c6' : params.name === '骗子' ? '#91cc75' : '#fac858';
        },
      },
      label: {
        formatter: '{b}：{d}%',
        alignTo: 'edge',
      },
      labelLayout: {
        alignTo: 'edge',
        draggable: true,
      },
    });
    return seriesList;
  })(),
};

let timer = setInterval(function () {
  // console.log(dataAll);
  dataAll = emulate(dataAll);
  console.log('emulate');

  myChart.setOption({
    dataset: [
      {
        source: dataAll.A,
      },
      {
        source: dataAll.B,
      },
      {
        source: dataAll.C,
      },
      {
        source: (function () {
          let sourceStats = [];
          for (let key in dataAll) {
            if (dataAll[key].length > 0) {
              sourceStats.push([dataAll[key][0][0], dataAll[key].length]);
            }
          }
          return sourceStats;
        })(),
      },
    ],
  });
  if (dataAll.A.length === 0 && dataAll.B.length === 0 && dataAll.C.length === 0) {
    clearInterval(timer);
  }
}, 100);

// clearInterval(timer);
