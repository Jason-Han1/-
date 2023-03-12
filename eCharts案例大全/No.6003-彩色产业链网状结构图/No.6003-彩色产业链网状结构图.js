let data = {
  nodes: [{
    name: '化工产业',
    category: 0
  }, {
    name: '化工产业上游',
    category: 0
  },{
    name: '化工产业中游',
    category: 0
  },{
    name: '化工产业下游',
    category: 0
  },{
    name: '高端装备制造业',
    category: 1
  }, {
    name: '高端装备上游',
    category: 1
  },{
    name: '高端装备中游',
    category: 1
  },{
    name: '高端装备下游',
    category: 1
  },{
    name: '智能制造业',
    category: 2
  },  {
    name: '智能制造上游',
    category: 2
  },{
    name: '智能制造中游',
    category: 2
  },{
    name: '智能制造下游',
    category: 2
  },{
    name: '钢铁产业',
    category: 3
  },  {
    name: '钢铁上游',
    category: 3
  },{
    name: '钢铁中游',
    category: 3
  },{
    name: '钢铁下游',
    category: 3
  },{
    name: '新能源汽车制造业',
    category: 4
  },  {
    name: '新能源汽车上游',
    category: 4
  },{
    name: '新能源汽车中游',
    category: 4
  },{
    name: '新能源汽车下游',
    category: 4
  },{
    name: '大数据产业',
    category: 5
  },  {
    name: '大数据上游',
    category: 5
  },{
    name: '大数据中游',
    category: 5
  },{
    name: '大数据下游',
    category: 5
  },{
    name: '现代农林牧渔',
    category: 6
  },  {
    name: '农林牧渔上游',
    category: 6
  },{
    name: '农林牧渔中游',
    category: 6
  },{
    name: '农林牧渔下游',
    category: 6
  },{
    name: '生物医药制造业',
    category: 7
  }, {
    name: '生物医药上游',
    category: 7
  },{
    name: '生物医药中游',
    category: 7
  },{
    name: '生物医药下游',
    category: 7
  },],
  
  links: [
        {
    source: '化工产业',
    target: '化工产业上游',
    name: '化工'
  }, {
    source: '化工产业',
    target: '化工产业中游',
    name: '化工'
  }, {
    source: '化工产业',
    target: '化工产业下游',
    name: '化工'
  }, {
    source: '高端装备制造业',
    target: '高端装备上游',
    name: '高端'
  }, {
    source: '高端装备制造业',
    target: '高端装备中游',
    name: '高端'
  }, {
    source: '高端装备制造业',
    target: '高端装备下游',
    name: '高端'
  },{
    source: '智能制造业',
    target: '智能制造上游',
    name: '智能'
  }, {
    source: '智能制造业',
    target: '智能制造中游',
    name: '智能'
  }, {
    source: '智能制造业',
    target: '智能制造下游',
    name: '智能'
  },{
    source: '钢铁产业',
    target: '钢铁上游',
    name: '钢铁'
  }, {
    source: '钢铁产业',
    target: '钢铁中游',
    name: '钢铁'
  }, {
    source: '钢铁产业',
    target: '钢铁下游',
    name: '钢铁'
  },{
    source: '新能源汽车制造业',
    target: '新能源汽车上游',
    name: '新能源'
  }, {
    source: '新能源汽车制造业',
    target: '新能源汽车中游',
    name: '新能源'
  }, {
    source: '新能源汽车制造业',
    target: '新能源汽车下游',
    name: '新能源'
  },{
    source: '大数据产业',
    target: '大数据上游',
    name: '大数据'
  }, {
    source: '大数据产业',
    target: '大数据中游',
    name: '大数据'
  }, {
    source: '大数据产业',
    target: '大数据下游',
    name: '大数据'
  },{
    source: '现代农林牧渔',
    target: '农林牧渔上游',
    name: '农林'
  }, {
    source: '现代农林牧渔',
    target: '农林牧渔中游',
    name: '农林'
  }, {
    source: '现代农林牧渔',
    target: '农林牧渔下游',
    name: '农林'
  },{
    source: '生物医药制造业',
    target: '生物医药上游',
    name: '生物'
  }, {
    source: '生物医药制造业',
    target: '生物医药中游',
    name: '生物'
  }, {
    source: '生物医药制造业',
    target: '生物医药下游',
    name: '生物'
  },
  
      
      {
    source: '化工产业下游',
    target: '农林牧渔上游',
    name: '化工'
  }, {
    source: '化工产业下游',
    target: '新能源汽车上游',
    name: '化工'
  }, {
    source: '化工产业下游',
    target: '智能制造上游',
    name: '化工'
  }, {
    source: '化工产业下游',
    target: '高端装备上游',
    name: '化工'
  }, {
    source: '智能制造下游',
    target: '高端装备上游',
    name: '智能'
  }, {
    source: '智能制造下游',
    target: '大数据上游',
    name: '智能'
  }, {
    source: '智能制造下游',
    target: '新能源汽车上游',
    name: '智能'
  }, {
    source: '钢铁下游',
    target: '高端装备上游',
    name: '钢铁'
  }, {
    source: '钢铁下游',
    target: '智能制造上游',
    name: '钢铁'
  }, {
    source: '钢铁下游',
    target: '新能源汽车上游',
    name: '钢铁'
  }, {
    source: '大数据下游',
    target: '农林牧渔上游',
    name: '大数据'
  }, {
    source: '农林牧渔下游',
    target: '生物医药上游',
    name: '农林'
  }, {
    source: 'Safari',
    target: '浏览器有限公司',
    name: '生物'
  }, {
    source: 'Safari',
    target: '浏览器有限公司',
    name: '生物'
  }, {
    source: 'Safari',
    target: '浏览器有限公司',
    name: '生物'
  }, {
    source: 'Safari',
    target: '浏览器有限公司',
    name: '生物'
  }, {
    source: 'Safari',
    target: '浏览器有限公司',
    name: '生物'
  }]
}

const color1 = '#ff8400';
const color2 = '#666666';
const color3 = '#aa61b2';
const color4 = '#0a95e6';
const color5 = '#10a050';
const color6 = '#f06467';
const color7 = '#006acc';
const color8 = '#ff0000';

data.nodes.forEach(node => {
  if (node.category === 0) {
    node.symbolSize = 100;
    node.itemStyle = {
      color: color1
    };
  } else if (node.category === 1) {
    node.itemStyle = {
      color: color2
    };
  }else if (node.category === 2) {
    node.itemStyle = {
      color: color3
    };
  }else if (node.category === 3) {
    node.itemStyle = {
      color: color4
    };
  }else if (node.category === 4) {
    node.itemStyle = {
      color: color5
    };
  }else if (node.category === 5) {
    node.itemStyle = {
      color: color6
    };
  }else if (node.category === 6) {
    node.itemStyle = {
      color: color7
    };
  }else if (node.category === 7) {
    node.itemStyle = {
      color: color8
    };
  }
});

data.links.forEach(link => {
  link.label = {
    align: 'center',
    fontSize: 12,
    show:false
  };
  
  if (link.name === '化工') {
    link.lineStyle = {
      color: color1
    }
  } else if (link.name === '高端') {
    link.lineStyle = {
      color: color2
    }
  } else if (link.name === '智能') {
    link.lineStyle = {
      color: color3
    }
  }else if (link.name === '钢铁') {
    link.lineStyle = {
      color: color4
    }
  }else if (link.name === '新能源') {
    link.lineStyle = {
      color: color5
    }
  }else if (link.name === '大数据') {
    link.lineStyle = {
      color: color6
    }
  }else if (link.name === '农林') {
    link.lineStyle = {
      color: color7
    }
  }else if (link.name === '生物') {
    link.lineStyle = {
      color: color8
    }
  }
});

let categories = [{
    name: '化工产业',
    itemStyle: {
          "normal": {
                     
                     "color": color1
                 }
    }
  },
  {
    name: '高端装备制造业',
    itemStyle: {
       "normal": {
                    
                     "color": color2
                 }
    }
},
  {
    name: '智能制造业',
    itemStyle: {
         "normal": {
                    
                     "color": color3
                 }
    }
},
  {
    name: '钢铁产业',
    itemStyle: {
       "normal": {
                    
                     "color": color4
                 }
    }
},
  {
    name: '新能源汽车制造业',
    itemStyle: {
         "normal": {
                     
                     "color": color5
                 }
    }
},
  {
    name: '大数据产业',
    itemStyle: {
         "normal": {
                    
                     "color": color6
                 }
    }
},
  {
    name: '现代农林牧渔',
    itemStyle: {
       "normal": {
                     
                     "color": color7
                 }
    }
},
  {
    name: '生物医药制造业',
    itemStyle: {
        "normal": {
                     
                     "color": color8
                 }
    }
}]

option = {
  title: {
    text: '',
  },
  legend: [{
    // selectedMode: 'single',
    data: categories.map(x => x.name),
     textStyle: {
          color: "#ffffff"
        }
    // icon: 'circle'
  }],
  series: [{
    type: 'graph',
    layout: 'force',
    symbolSize: 100,
    draggable: true,
    roam: true,
    focusNodeAdjacency: true,
    categories: categories,
    edgeSymbol: ['', 'arrow'],
    // edgeSymbolSize: [80, 10],
    edgeLabel: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 20,
          color:'#ffffff'
        },
        formatter(x) {
          return x.data.name;
        }
      }
    },
 lineStyle: {
                normal: {
                   // opacity: 0.9,
                    width: 7,
                    //curveness: 0
                }
            },
    label: {
        show: true
    },
    force: {
      repulsion: 2000,
      edgeLength: 120
    },
    data: data.nodes,
    links: data.links
  }]
}