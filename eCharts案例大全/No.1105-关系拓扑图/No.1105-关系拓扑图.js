var data = {
  children: [
    {
      children: [
        {
          ifend: '1',
          name: '节点二1',
          number: '.18',
        },
      ],
      name: '节点一1',
      number: '0',
    },
    {
      ifend: '1',
      name: '节点一2',
      number: '.87',
    },
    {
      ifend: '1',
      name: '节点一3',
      number: '.92',
    },
    {
      ifend: '1',
      name: '节点一4',
      number: '1.68',
    },
    {
      children: [
        {
          code: '2',
          ifend: '1',
          name: '节点二10',
          number: '10.01',
        },
        {
          ifend: '1',
          name: '节点二11',
          number: '0.31',
        },
        {
          code: '2',
          ifend: '1',
          name: '节点二12',
          number: '-.92',
        },
        {
          code: '2',
          name: '节点二2',
          number: '100',
        },
        {
          ifend: '1',
          name: '节点二3',
          number: '.05',
        },
        {
          ifend: '1',
          name: '节点二4',
          number: '1.53',
        },
        {
          ifend: '1',
          name: '节点二5',
          number: '1.14',
        },
        {
          ifend: '1',
          name: '节点二6',
          number: '1.98',
        },
        {
          ifend: '1',
          name: '节点二7',
          number: '.02',
        },
        {
          ifend: '1',
          name: '节点二8',
          number: '1.03',
        },
        {
          ifend: '1',
          name: '节点二9',
          number: '3.05',
        },
      ],
      name: '节点一5',
      number: '.16',
    },
    {
      ifend: '1',
      name: '节点一6',
      number: '2.33',
    },
  ],
  name: '节点',
  number: '.46',
};

function format(data) {
  data.x = 0;
  data.y = 0;
  if (!data.hasOwnProperty('children')) {
    data.len = [1, -1];
    data.leny = [1, 9];
    return data;
  }
  var l2 = data.children;
  var hi = parseInt(l2.length / 2);
  var xi = l2.length - hi;
  var his = getSum(l2, 0, hi);
  var xis = getSum(l2, xi - 1, l2.length);
  l2 = sortData(l2, hi, xi);
  data.children = l2;
  var jhi = hi > 9 || his === 0 ? 300 : 200;
  var jxi = xi > 9 || xis === 0 ? 300 : 200;
  var maxmin = [-100000, 100000];
  var maxminy = [-100000, 100000];
  for (var i = 0; i < l2.length; i++) {
    if (i < hi) {
      l2[i].x = getLoction(hi, data.x, i + 1);
      l2[i].y = data.y + jhi;
      l2[i].fx = getFX(hi, i, false);
    } else {
      l2[i].x = getLoction(xi, data.x, i - hi + 1);
      l2[i].y = data.y - jxi;
      l2[i].fx = getFX(xi, i - hi, true);
    }
    getMaxMin(maxmin, l2[i].x);
    getMaxMin(maxminy, l2[i].y);
    if (!l2[i].hasOwnProperty('children')) {
      continue;
    }
    var l3 = l2[i].children;
    for (var j = 0; j < l3.length; j++) {
      if (i < hi) {
        l3[j].x = getLoction(l3.length, l2[i].x, j + 1);
        l3[j].y = l2[i].y + 200;
        l3[j].fx = getFX(l3.length, j, false);
      } else {
        l3[j].x = getLoction(l3.length, l2[i].x, j + 1);
        l3[j].y = l2[i].y - 200;
        l3[j].fx = getFX(l3.length, j, true);
      }
      getMaxMin(maxmin, l3[j].x);
      getMaxMin(maxminy, l3[j].y);
    }
  }
  var c;
  if (hi % 2 === 0) {
    c = hi / 2;
    if (l2[c].hasOwnProperty('children')) {
      if (l2[c - 1].hasOwnProperty('children') && l2[c].children[0].x < l2[c].x - 50) {
        var tem = 50 - l2[c].children[0].x;
        for (var j = 0; j < l2[c].children.length; j++) {
          l2[c].children[j].x = l2[c].children[j].x + tem;
          getMaxMin(maxmin, l2[c].children[j].x);
        }
        l2[c].x = getLoction2(l2[c].children);
      }
    }
  } else {
    c = parseInt(hi / 2);
  }
  for (var i = c + 1; i < hi; i++) {
    if (l2[i].hasOwnProperty('children')) {
      if (
        l2[i - 1].hasOwnProperty('children') &&
        l2[i - 1].children[l2[i - 1].children.length - 1].x - l2[i].children[0].x > -100
      ) {
        var tem = l2[i - 1].children[l2[i - 1].children.length - 1].x + 100 - l2[i].children[0].x;
        for (var j = 0; j < l2[i].children.length; j++) {
          l2[i].children[j].x = l2[i].children[j].x + tem;
          getMaxMin(maxmin, l2[i].children[j].x);
        }
        l2[i].x = getLoction2(l2[i].children);
      }
    }
  }
  for (var i = c - 1; i >= 0; i--) {
    if (l2[i].hasOwnProperty('children')) {
      if (
        l2[i + 1].hasOwnProperty('children') &&
        l2[i + 1].children[0].x - l2[i].children[l2[i].children.length - 1].x < 100
      ) {
        var tem = l2[i].children[l2[i].children.length - 1].x - (l2[i + 1].children[0].x - 100);
        for (var j = 0; j < l2[i].children.length; j++) {
          l2[i].children[j].x = l2[i].children[j].x - tem;
          getMaxMin(maxmin, l2[i].children[j].x);
        }
        l2[i].x = getLoction2(l2[i].children);
      }
    }
  }

  if (xi % 2 === 0) {
    c = xi / 2 + hi;
    if (l2[c].hasOwnProperty('children')) {
      if (l2[c - 1].hasOwnProperty('children') && l2[c].children[0].x < l2[c].x - 50) {
        var tem = 50 - l2[c].children[0].x;
        for (var j = 0; j < l2[c].children.length; j++) {
          l2[c].children[j].x = l2[c].children[j].x + tem;
          getMaxMin(maxmin, l2[c].children[j].x);
        }
        l2[c].x = getLoction2(l2[c].children);
      }
    }
  } else {
    c = parseInt(xi / 2) + hi;
  }
  for (var i = c + 1; i < l2.length; i++) {
    if (l2[i].hasOwnProperty('children')) {
      if (
        l2[i - 1].hasOwnProperty('children') &&
        l2[i - 1].children[l2[i - 1].children.length - 1].x - l2[i].children[0].x > -100
      ) {
        var tem = l2[i - 1].children[l2[i - 1].children.length - 1].x + 100 - l2[i].children[0].x;
        for (var j = 0; j < l2[i].children.length; j++) {
          l2[i].children[j].x = l2[i].children[j].x + tem;
          getMaxMin(maxmin, l2[i].children[j].x);
        }
        l2[i].x = getLoction2(l2[i].children);
      }
    }
  }
  for (var i = c - 1; i >= hi; i--) {
    if (l2[i].hasOwnProperty('children')) {
      if (
        l2[i + 1].hasOwnProperty('children') &&
        l2[i + 1].children[0].x - l2[i].children[l2[i].children.length - 1].x < 100
      ) {
        var tem = l2[i].children[l2[i].children.length - 1].x - (l2[i + 1].children[0].x - 100);
        for (var j = 0; j < l2[i].children.length; j++) {
          l2[i].children[j].x = l2[i].children[j].x - tem;
          getMaxMin(maxmin, l2[i].children[j].x);
        }
        l2[i].x = getLoction2(l2[i].children);
      }
    }
  }
  // data.x = (maxmin[0] - maxmin[1]) / 2 + maxmin[1];
  if (maxmin[0] - maxmin[1] <= 400) {
    maxmin[0] = maxmin[0] + 100;
    maxmin[1] = maxmin[1] - 100;
  }
  data.len = maxmin;
  data.leny = maxminy;
  return data;
}

function format2(data) {
  if (!data.hasOwnProperty('children')) {
    return data;
  }
  var l2 = data.children;
  var hi = parseInt(l2.length / 2);
  var xi = l2.length - hi;
  var maxmin = data.len;
  for (var i = 0; i < l2.length; i++) {
    if (!l2[i].hasOwnProperty('children')) {
      if (i > 0 && i != hi && l2[i - 1].hasOwnProperty('children') && l2[i - 1].children.length > 5) {
        var tem = (l2[i - 1].children.length - 5) / 2;
        l2[i].x = l2[i].x + 100 * tem;
        var len,
          flag = false;
        if (i < hi) {
          len = hi;
        } else {
          len = l2.length;
        }
        for (var j = i + 1; j < len; j++) {
          flag = true;
          l2[j].x = l2[j].x + 100 * tem;
          if (l2[j].hasOwnProperty('children')) {
            var children = l2[j].children;
            for (var k = 0; k < children.length; k++) {
              children[k].x = children[k].x + 100 * tem;
              getMaxMin(maxmin, children[k].x);
            }
          }
          getMaxMin(maxmin, l2[j].x);
        }
        if (flag) {
          l2[i].x = l2[i].x > maxmin[0] ? maxmin[0] : l2[i].x;
        }
      } else if (i < l2.length - 1 && l2[i + 1].hasOwnProperty('children') && l2[i + 1].children.length > 5) {
        var tem = (l2[i + 1].children.length - 5) / 2;
        l2[i].x = l2[i].x - 100 * tem;
        var len,
          flag = false;
        if (i < hi) {
          len = 0;
        } else {
          len = hi;
        }
        for (var j = i - 1; j >= len; j--) {
          flag = true;
          l2[j].x = l2[j].x - 100 * tem;
          if (l2[j].hasOwnProperty('children')) {
            var children = l2[j].children;
            for (var k = 0; k < children.length; k++) {
              children[k].x = children[k].x - 100 * tem;
              getMaxMin(maxmin, children[k].x);
            }
          }
          getMaxMin(maxmin, l2[j].x);
        }
        if (flag) {
          l2[i].x = l2[i].x < maxmin[1] ? maxmin[1] : l2[i].x;
        }
      }
    }
  }
  // data.x = (maxmin[0] - maxmin[1]) / 2 + maxmin[1];
  if (maxmin[0] - maxmin[1] <= 400) {
    maxmin[0] = maxmin[0] + 100;
    maxmin[1] = maxmin[1] - 100;
  }
  data.len = maxmin;
  return data;
}

function getLoction(num, x, index) {
  if (num % 2 === 0) {
    var c = num / 2 - index;
    x = x - 50 - 100 * c;
  } else {
    var c = parseInt(num / 2 + 1) - index;
    x = x - 100 * c;
  }
  return x;
}

/*function getLoction2(data) {
	var len = data.length;
	var x;
	if (len % 2 === 0) {
		var c = len / 2;
		x = data[c - 1].x + 50;
	} else {
		var c = parseInt(len / 2 + 1);
		x = data[c - 1].x;
	}
	return x;
}*/

function getFX(len, index, fx) {
  var x, c;
  if (len < 1) {
    return 1;
  }
  c = len % 2 === 0 ? len / 2 : parseInt(len / 2) + 1;
  x = index < c ? 1 : -1;
  if (fx) {
    x = -x;
  }
  return x;
}

function getSum(data, st, ed) {
  if (ed > data.length) {
    ed = data.length;
  }
  var count = 0;
  for (var i = st; i < ed; i++) {
    if (!data[i].hasOwnProperty('children')) {
      continue;
    }
    var l3 = data[i].children;
    count = count + l3.length;
  }
  return count;
}

function sortData(data, hi, xi) {
  var res = [];
  var len = hi - 1;
  var pos = 0;
  for (var i = 0; i < hi - 1; i++) {
    var flag = 1;
    for (var j = 0; j < len; j++) {
      var dx = !data[j].hasOwnProperty('children') ? 0 : data[j].children.length,
        dx1 = !data[j + 1].hasOwnProperty('children') ? 0 : data[j + 1].children.length;
      if (dx > dx1) {
        var tem = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tem;
        flag = 0;
        pos = j;
      }
    }
    len = pos;
    if (flag === 1) {
      break;
    }
  }
  for (var i = 0; i < hi; i++) {
    if (i % 2 === 0) {
      res[i / 2] = data[i];
    } else {
      res[hi - (i + 1) / 2] = data[i];
    }
  }

  len = data.length - 1;
  pos = 0;
  for (var i = hi; i < data.length - 1; i++) {
    var flag = 1;
    for (var j = hi; j < len; j++) {
      var dx = !data[j].hasOwnProperty('children') ? 0 : data[j].children.length,
        dx1 = !data[j + 1].hasOwnProperty('children') ? 0 : data[j + 1].children.length;
      if (dx > dx1) {
        var tem = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tem;
        flag = 0;
        pos = j;
      }
    }
    len = pos;
    if (flag === 1) {
      break;
    }
  }
  for (var i = 0; i < xi; i++) {
    if (i % 2 === 0) {
      res[i / 2 + hi] = data[i + hi];
    } else {
      res[xi - (i + 1) / 2 + hi] = data[i + hi];
    }
  }
  return res;
}

function getMaxMin(maxmin, x) {
  if (maxmin[0] < x) {
    maxmin[0] = x;
  }
  if (maxmin[1] > x) {
    maxmin[1] = x;
  }
  return maxmin;
}

function initCharts(returninfo) {
  var res = {};
  var links = [];
  var lines = [];
  var yiji =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAgCAYAAABO6BuSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMzhFMDM4REEwQUYxMUVBQkY1NEIzNTg4MTM4RjIxOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMzhFMDM4RUEwQUYxMUVBQkY1NEIzNTg4MTM4RjIxOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUzOEUwMzhCQTBBRjExRUFCRjU0QjM1ODgxMzhGMjE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUzOEUwMzhDQTBBRjExRUFCRjU0QjM1ODgxMzhGMjE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZMccrwAACbZJREFUeNrkWUtvJFcV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';
  var erji = yiji;
  var sanji = erji;
  returninfo.number = returninfo.number === undefined ? '--' : returninfo.number + '%';
  returninfo.number = returninfo.number.startsWith('.') ? '0' + returninfo.number : returninfo.number;
  returninfo.number = returninfo.number.startsWith('-.') ? returninfo.number.replace('-.', '-0.') : returninfo.number;
  var url = '${pageContext.request.requestURL}'.replace('${pageContext.request.requestURI}', '');
  var data = [
    {
      name: returninfo.name + '：' + returninfo.number,
      tooltip: {
        formatter: '{b}',
      },
      symbol: yiji,
      symbolSize: [60, 40],
      value: [returninfo.x, returninfo.y],
      datadate: returninfo.datadate,
      spid: returninfo.id,
    },
  ];
  if ('children' in returninfo) {
    var l2 = returninfo.children;
    var curveness, colork, colorn, xs;
    for (var i = 0; i < l2.length; i++) {
      curveness = l2[i].fx === 1 ? 0.1 : -0.1;
      l2[i].number = l2[i].number === undefined ? '--' : l2[i].number + '%';
      l2[i].number = l2[i].number.startsWith('.') ? '0' + l2[i].number : l2[i].number;
      l2[i].number = l2[i].number.startsWith('-.') ? l2[i].number.replace('-.', '-0.') : l2[i].number;
      colork = l2[i].code === '2' || l2[i].code === 2 ? '#C75050' : '#53B5EA';
      var link = {
        source: returninfo.name + '：' + returninfo.number,
        target: l2[i].name + '：\n' + l2[i].number,
        lineStyle: {
          curveness: curveness,
          color: colork,
        },
      };
      links.push(link);
      colorn = l2[i].code === '2' || l2[i].code === 2 ? 'rgba(199,80,80,0.5)' : 'rgba(55,155,255,0.5)';
      var line = {
        coords: [
          [returninfo.x, returninfo.y],
          [l2[i].x, l2[i].y],
        ],
        lineStyle: {
          curveness: curveness,
          color: colorn,
        },
      };
      lines.push(line);
      var node = {
        name: l2[i].name + '：\n' + l2[i].number,
        tooltip: {
          formatter: '{b}',
        },
        symbol: erji,
        symbolSize: [60, 40],
        value: [l2[i].x, l2[i].y],
        datadate: l2[i].datadate,
        ifend: l2[i].ifend,
        spid: l2[i].id,
      };
      data.push(node);
      if ('children' in l2[i]) {
        var l3 = l2[i].children;
        for (var j = 0; j < l3.length; j++) {
          curveness = l3[j].fx === 1 ? 0.1 : -0.1;
          l3[j].number = l3[j].number === undefined ? '--' : l3[j].number + '%';
          l3[j].number = l3[j].number.startsWith('.') ? '0' + l3[j].number : l3[j].number;
          l3[j].number = l3[j].number.startsWith('-.') ? l3[j].number.replace('-.', '-0.') : l3[j].number;
          colork = l3[j].code === '2' || l3[j].code === 2 ? '#C75050' : '#53B5EA';
          var link = {
            source: l2[i].name + '：\n' + l2[i].number,
            target: l3[j].name + '：\n' + l3[j].number,
            lineStyle: {
              curveness: curveness,
              color: colork,
            },
          };
          links.push(link);
          colorn = l3[j].code === '2' || l3[j].code === 2 ? 'rgba(199,80,80,0.5)' : 'rgba(55,155,255,0.5)';
          var line = {
            coords: [
              [l2[i].x, l2[i].y],
              [l3[j].x, l3[j].y],
            ],
            lineStyle: {
              curveness: curveness,
              color: colorn,
            },
          };
          lines.push(line);
          node = {
            name: l3[j].name + '：\n' + l3[j].number,
            tooltip: {
              formatter: '{b}',
            },
            symbol: sanji,
            symbolSize: [60, 40],
            value: [l3[j].x, l3[j].y],
            datadate: l3[j].datadate,
            ifend: l3[j].ifend,
            spid: l3[j].id,
          };
          data.push(node);
        }
      }
    }
  }
  res.data = data;
  res.links = links;
  res.lines = lines;
  res.len = returninfo.len;
  res.leny = returninfo.leny;
  return res;
}
var jsons = format(data);
debugger;
jsons = format2(jsons);
var returninfo = initCharts(jsons);
option = {
  backgroundColor: '#f5f5f5',
  grid: {
    left: '5%',
    right: '5%',
  },
  xAxis: {
    show: false,
    type: 'value',
    max: returninfo.len[0],
    min: returninfo.len[1],
  },
  yAxis: {
    show: false,
    type: 'value',
    max: returninfo.leny[0],
    min: returninfo.leny[1] - 10,
  },
  tooltip: {},
  series: [
    {
      type: 'graph',
      zlevel: 5,
      draggable: false,
      coordinateSystem: 'cartesian2d', //使用二维的直角坐标系（也称笛卡尔坐标系）
      label: {
        show: true,
        color: '#000',
        position: 'bottom',
      },
      data: returninfo.data,
      links: returninfo.links,
      lineStyle: {
        opacity: 1,
        width: 2,
      },
    },
    {
      type: 'lines',
      coordinateSystem: 'cartesian2d',
      zlevel: 1,
      animation: false,
      effect: {
        show: true,
        period: 5,
        trailLength: 0.01,
        symbolSize: 12,
        symbol: 'pin',
        loop: true,
      },
      data: returninfo.lines,
      lineStyle: {
        width: 0,
      },
    },
    {
      type: 'lines',
      coordinateSystem: 'cartesian2d',
      zlevel: 1,
      animation: false,
      effect: {
        show: true,
        period: 6,
        trailLength: 0.01,
        symbolSize: 12,
        symbol: 'pin',
        loop: true,
      },
      data: returninfo.lines,
      lineStyle: {
        width: 0,
      },
    },
    {
      type: 'lines',
      coordinateSystem: 'cartesian2d',
      zlevel: 1,
      animation: false,
      effect: {
        show: true,
        period: 8,
        trailLength: 0.01,
        symbolSize: 12,
        symbol: 'pin',
        loop: true,
      },
      data: returninfo.lines,
      lineStyle: {
        width: 0,
      },
    },
  ],
};

/*myChart.on('click', function(params) {
            if (params.dataType === 'node') {
                var data = params.data;
                if (data.ifend === '1' || data.ifend === 1) {
                    var sp_id = data.spid;
                    var data_date = data.datadate;
                    var url = getUrlByParams("/branchLineLoss/getMeterJson?sp_id=" +
                        sp_id + "&data_date=" + data_date, null);
                    createRespone('楼层结构', url, null, null, '650px', '600px');
                }
            }
        }*/
