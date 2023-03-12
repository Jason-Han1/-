let moduleDependencies = {
    admin: [],
    apush: [],
    article: ['xdevApi', 'lark2', 'atit', 'buc', 'zsearch'],
    atit: ['xdevApi', 'tagRelation', 'userStatistics', 'lark2', 'buc', 'category', 'socialSystem', 'notification', 'apush', 'admin', 'theme', 'themeRelation', 'pointFlow', 'draft'],
    bet: ['userStatistics', 'basement'],
    booth: ['boothRelation', 'userBehavior'],
    boothRelation: [],
    buc: [],
    cache_or_config: [], // cache、config是同一个模块功能
    category: [],
    college: ['cache_or_config', 'atit', 'xdevApi', 'themeRelation'],
    comment: ['interaction', 'feedback', 'buc', 'notification', 'dingtalk', 'theme', 'basement', 'xdevApi', 'question', 'peerBonus', 'admin'],
    converter: [],
    dingtalk: ['cache_or_config', 'epaas', 'theme', 'dingtalkMsgLog'],
    draft: ['xdevApi', 'converter', 'lark2'],
    epaas: [],
    feedback: ['buc', 'notification', 'theme', 'productCategory', 'pointFlow', 'userStatistics', 'xdevApi', 'product', 'dingtalk', 'basement', 'interaction', 'comment'],
    gift: ['userStatistics', 'pointFlow', 'basement'],
    interaction: [],
    // kbase: ['buc'],
    lark: [],
    lark2: ['product', 'lark', 'feedback'],
    linke: ['cache_or_config'],
    notification: ['atit', 'qa', 'basement', 'pointFlow', 'themeRelation', 'theme', 'apush', 'buc'],
    peerBonus: ['userBehavior', 'interaction', 'xdevApi', 'buc', 'epaas'],
    pointFlow: ['userStatistics', 'buc'],
    problemSources:['category'],
    product:['theme'],
    productCategory:['theme', 'product'],
    // qa:['kbase', 'userStatistics', 'product', 'basement', 'notification'],
    question:['category', 'tagRelation', 'userBehavior', 'admin', 'product', 'theme', 'interaction', 'comment', 'productCategory', 'cache_or_config', 'buc', 'zsearch'],
    // roadmap:['theme'],
    socialSystem: ['userStatistics'],
    tagRelation:[],
    task:[],
    theme:['productCategory','tagRelation','themeModule', 'themeRelation','product','category','userBehavior','atit','xdevApi', 'themeStudyGuideSection','buc','admin'],
    themeRelation:['buc', 'notification','pointFlow','userStatistics','theme', 'xdevApi','atit','dingtalk','qa'],
    themeStudyGuideSection:['category'],
    tool:['userTool'],
    userBehavior:[],
    userStatistics:['buc', 'gift', 'pointFlow', 'task', 'notification', 'themeRelation', 'feedback','bet','basement','atit','kbaseUgcStatistics','xdevApi','cache_or_config', 'socialSystem'],
    userTool:['tool'],
    // xbrickQuestionPersonalPush: [],
    xdevApi:['converter'],
    zsearch:['queryPlanStrategy','comment']
}


let data = {
    nodes: [],
    links: []
}

const defaultSymbolSize = 50;

const color1 = '#006acc';
const color2 = '#ff7d18';
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
                name: 'depend'
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
        fontSize: 12
    };

    if (link.name === 'depend') {
        link.lineStyle = {
            color: color1
        }
    }
});

let categories = [{
    name: '模块',
    itemStyle: {
        color: color1
    }
}]

option = {
    title: {
        text: '知识图谱',
    },
    legend: [{
        // selectedMode: 'single',
        data: categories.map(x => x.name),
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
        force: {
            repulsion: 2000,
            edgeLength: 120
        },
        data: data.nodes,
        links: data.links
    }]
}