let resData = {
  nodes: [{
    name: '操作系统集团',
    category: 0
  }, {
    name: '浏览器有限公司',
    category: 0
  }, {
    name: 'HTML科技',
    category: 0
  }, {
    name: 'JavaScript科技',
    category: 0
  }, {
    name: 'CSS科技',
    category: 0
  }, {
    name: 'Chrome',
    category: 1
  }, {
    name: 'IE',
    category: 1
  }, {
    name: 'Firefox',
    category: 1
  }, {
    name: 'Safari',
    category: 1
  }],
  
  links: [{
    source: '浏览器有限公司',
    target: '操作系统集团',
    name: '参股'
  }, {
    source: 'HTML科技',
    target: '浏览器有限公司',
    name: '参股'
  }, {
    source: 'CSS科技',
    target: '浏览器有限公司',
    name: '参股'
  }, {
    source: 'JavaScript科技',
    target: '浏览器有限公司',
    name: '参股'
  }, {
    source: 'Chrome',
    target: '浏览器有限公司',
    name: '董事'
  }, {
    source: 'IE',
    target: '浏览器有限公司',
    name: '董事'
  }, {
    source: 'Firefox',
    target: '浏览器有限公司',
    name: '董事'
  }, {
    source: 'Safari',
    target: '浏览器有限公司',
    name: '董事'
  }, {
    source: 'Chrome',
    target: 'JavaScript科技',
    name: '法人'
  }]
}

const color1 = '#006acc';
const color2 = '#ff7d18';
const color3 = '#10a050';

resData.nodes.forEach(node => {
  if (node.category === 0) {
    node.symbolSize = 100;
    node.itemStyle = {
      color: color1
    };
  } else if (node.category === 1) {
    node.itemStyle = {
      color: color2
    };
  }
});

resData.links.forEach(link => {
  link.label = {
    align: 'center',
    fontSize: 12
  };
  
  if (link.name === '参股') {
    link.lineStyle = {
      color: color2
    }
  } else if (link.name === '董事') {
    link.lineStyle = {
      color: color1
    }
  } else if (link.name === '法人') {
    link.lineStyle = {
      color: color3
    }
  }
});

let categories = [{
    name: '公司',
    itemStyle: {
        color: color1
    }
  },
  {
    name: '董事',
    itemStyle: {
        color: color2
    }
}]

console.log(resData,'!!!!!!!!!!!!')

option = {
  title: {
    show: false,
    text: '关系图谱',
  },
  legend: [{
    show: false,
    // selectedMode: 'single',
    data: categories.map(x => x.name),
    icon: 'circle'
  }],
  series: [{
    type: 'graph',
    layout: 'force',
    symbolSize: 58, // 58
    draggable: false,
    roam: true,
    focusNodeAdjacency: true,
    categories: categories,
    // edgeSymbol: ['', 'arrow'], // 箭头
    // edgeSymbolSize: [80, 10],
    edgeLabel: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 20
        },
        formatter(x) {
          return x.data.name;
        }
      }
    },
    label: {
        show: true,
        // position: 'bottom',
        // textStyle: {
        //   fontSize: 12
        // }
    },
    force: {
      repulsion: 2000, // 2000
      edgeLength: [100, 120] // 120
    },
    data: resData.nodes,
    links: resData.links
  }]
}
