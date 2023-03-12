let data = {
  nodes: [{
    name: '新基建',
    category: 0
  },{
    name: '数字新基建',
    category: 1
  }, {
    name: '特高压',
    category: 1
  },{
    name: '充电桩',
    category: 1
  }],
  
  links: [ {
    source: '新基建',
    target: '特高压',
    name: ''
  }, {
    source: '新基建',
    target: '充电桩',
    name: ''
  },{
    source: '新基建',
    target: '数字新基建',
    name: ''
  }]
}

const color1 = '#006acc';
const color2 = '#ff7d18';
const color3 = '#10a050';

data.nodes.forEach(node => {
  if (node.category === 0) {
    node.symbolSize = 100;
    node.itemStyle = {
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                     offset: 0,
                     color: '#A2D1FA'
                 }, {
                     offset: 0.5,
                     color: '#0955AD'
                 }, {
                     offset: 1,
                     color: '#013E96'
                 }])
    };
  } else if (node.category === 1) {
    node.itemStyle = {
      color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                     offset: 0,
                     color: '#A2D1FA'
                 }, {
                     offset: 0.5,
                     color: '#0955AD'
                 }, {
                     offset: 1,
                     color: '#013E96'
                 }])
    };
  }
});

data.links.forEach(link => {
  link.label = {
    align: 'center',
    fontSize: 12
  };
  
  if (link.name === '参股') {
    link.lineStyle = {
      color: color2
    }
  } else if (link.name === '') {
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

option = {
  series: [{
    type: 'graph',
    layout: 'force',
    symbolSize: 58,
    draggable: true,
    roam: true,
    focusNodeAdjacency: true,
    categories: categories,
    edgeSymbol: ['', 'arrow'],
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
        show: true
    },
    circular:{
        rotateLabel:true
    },
    force: {
      repulsion: 1000,
      edgeLength: [100,140],
    //   layoutAnimation:false,
    },
    data: data.nodes,
    links: data.links
  }]
}

setInterval(function(){
    myChart.setOption({
    
    })
},10)