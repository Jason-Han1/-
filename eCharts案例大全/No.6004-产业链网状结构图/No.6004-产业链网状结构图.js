let moduleDependencies = {
    化工产业: ['化工上游', '化工中游',  '化工下游'],
    化工上游:[],
    化工中游:[],
    化工下游:['农林牧渔上游', '智能制造上游', '高端装备上游', '新能源汽车上游'],
    
    高端装备制造业: ['高端装备上游', '高端装备中游',  '高端装备下游'],
    高端装备上游:[],
    高端装备中游:[],
    高端装备下游:[],
    
    智能制造业: ['智能制造上游', '智能制造中游', '智能制造下游'],
    智能制造上游:[],
    智能制造中游:[],
    智能制造下游:['大数据产业上游', '新能源汽车上游', '高端装备上游'],
    
    钢铁产业: ['钢铁上游', '钢铁中游', '钢铁下游'],
    钢铁上游:[],
    钢铁中游:[],
    钢铁下游:['高端装备上游', '智能制造上游', '新能源汽车上游'],
    
    新能源汽车制造业:['新能源汽车上游', '新能源汽车中游', '新能源汽车下游'],
    新能源汽车上游:[],
    新能源汽车中游:[],
    新能源汽车下游:[],
    
    大数据产业: ['大数据产业上游', '大数据产业中游', '大数据产业下游'],
    大数据产业上游:[],
    大数据产业中游:[],
    大数据产业下游:['农林牧渔上游'],
    
    现代农林牧渔: ['农林牧渔上游', '农林牧渔中游', '农林牧渔下游'],
    农林牧渔上游:[],
    农林牧渔中游:[],
    农林牧渔下游:['生物医药上游'],
    
    生物医药制造业:['生物医药上游', '生物医药中游', '生物医药下游'],
    生物医药上游:[],
    生物医药中游:[],
    生物医药下游:[],
    
    
  
}


let data = {
    nodes: [],
    links: []
}

const defaultSymbolSize = 110;

const color1 = '#006acc';
const color2 = '#ffffff';
const color3 = '#10a050';

for (var [key, modules] of Object.entries(moduleDependencies)) {
    data.nodes.push({
        name: key,
        symbolSize: defaultSymbolSize,
        category: 0
    });
}

for (var [key, modules] of Object.entries(moduleDependencies)) {
    if (modules.length > 0) {
        modules.forEach(module => {
            data.links.push({
                source: key,
                target: module,
                name: ''
            });
            data.nodes.forEach(node => {
                if (node.name === module) {
                    node.symbolSize += 8;
                }
            })
        });
    }
}

data.nodes.forEach(node => {
    if (node.category === 0) {
        node.itemStyle = {
            color: color1
        };
    }
    if (node.symbolSize === 0) {
        node.symbolSize = defaultSymbolSize
    }
});

data.links.forEach(link => {
    link.label = {
        align: 'center',
        fontSize: 8
    };

   // if (link.name === '') {
        link.lineStyle = {
            color: color2,
            lineWidth:20
          
        }
          
  //  }
    
});

let categories = [{
    name: '产业链',
   
    itemStyle: {
       // color: color1
       "normal": {
"borderColor": "#00fff7",
                     "borderWidth": 4,
                     "shadowBlur": 20,
                     "shadowColor": "#00fff7",
                     "color": "#11213b"
                 }
    }
}]

option = {
    title: {
        text: '新经济产业链网状结构图',
        
        textStyle:{color:'#fff',fontSize:21}
    },
    legend: [{
        // selectedMode: 'single',
        data: categories.map(x => x.name),
        
        textStyle: {
          color: "#fff"
        }
        // icon: 'circle'
    }],
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: defaultSymbolSize,
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
                    fontSize: 50
                },
                formatter(x) {
                    return x.data.name;
                }
            }
        },
lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 7,
                    curveness: 0
                }
            },
        label: {
            show: true
        },
        force: {
            repulsion: 2000,
            edgeLength: 130
        },
        data: data.nodes,
        links: data.links
    }]
}