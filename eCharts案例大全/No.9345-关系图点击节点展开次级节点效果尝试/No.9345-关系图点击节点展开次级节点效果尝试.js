data = [{
    name: 'node0',
    category: 'node0',
    value: 64,
    x: 100,
    y: 20
}];
links = [];
categories = [];

// 生成 2 个子节点函数
function generateNodes(nodeName, nodeX, nodeY, nodeValue, times) {

    let children_0 = {
        name: nodeName + '_0',
        category: nodeName + '_childrens',
        value: nodeValue / 2,
        x: nodeX - 10 - times * 5,
        y: nodeY + 17.32
    };

    let children_1 = {
        name: nodeName + '_1',
        category: nodeName + '_childrens',
        value: nodeValue / 2,
        x: nodeX + 10 + times * 5,
        y: nodeY + 17.32
    };

    data.push(children_0, children_1);

    links.push({
        source: nodeName,
        target: nodeName + '_0'
    }, {
        source: nodeName,
        target: nodeName + '_1'
    });

    // 递归
    if (times - 1 > 0) {
        generateNodes(children_0.name, children_0.x, children_0.y, nodeValue / 2, times - 1);
        generateNodes(children_1.name, children_1.x, children_1.y, nodeValue / 2, times - 1);
    }
}

function getCategories(src) {
    tmp = {};
    ret = [];

    for (let i in src) {
        if (typeof tmp[src[i].category] === 'undefined') {
            tmp[src[i].category] = '';
            ret.push(src[i].category);
        }
    }

    return ret;
}

generateNodes(data[0].name, data[0].x, data[0].y, data[0].value, 3);

categories = getCategories(data);

categoryStatus = (function(){
    let ret = {};
    for (let i in categories){
        ret[categories[i]] = true;
    }
    return ret;
})();
//console.log(data);
//console.log(links);
//console.log(categories);
//console.log(categoryStatus);


data.forEach(function(node) {
    node.itemStyle = null;
    node.symbolSize = node.value;
    node.label = {
        normal: {
            show: node.value > 30
        }
    };
    node.label.normal.show = node.value > 30;
    node.category = categories.indexOf(node.category);
});


option = {
    title: {
        text: '关系图点击节点展开次级节点效果尝试'
    },
    tooltip: {},
    legend: {
        show:false,
        y: '8%',
        data: categories
    },
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: 'ECharts学习',
        type: 'graph',
        layout: 'none',
        data: data,
        links: links,
        categories: categories.map(function(a) {
            return {
                name: a
            };
        }),
        roam: true,
        focusNodeAdjacency: true,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
        },
        label: {
            position: 'right',
            formatter: '{b}'
        },
        lineStyle: {
            color: 'source',
            curveness: 0.3
        },
        emphasis: {
            lineStyle: {
                width: 10
            }
        }
    }]
};

myChart.on('click', function(params) {
    
    categoryName = params.name + '_childrens';

    // 如果 category 状态为显示，则通过一定规则隐藏所有 childres
    if (categoryStatus[categoryName]) {

        // 这里为了省事，直接通过字符串匹配判断了
        for (let i in categories) {
            if (categories[i].includes(params.name) && categories[i] != 'node0') {
                myChart.dispatchAction({
                    type: 'legendUnSelect',
                    // 图例名称
                    name: categories[i]
                });
            }
        }
        
        categoryStatus[categoryName] = false;
    
    // 如 category 状态为隐藏，则显示    
    } else {
        for (let i in categories) {
            if (categories[i].includes(params.name) && categoryStatus[categories[i]] || categories[i] === categoryName) {
                myChart.dispatchAction({
                    type: 'legendSelect',
                    // 图例名称
                    name: categories[i]
                });
            }
        }
        
        categoryStatus[categoryName] = true;
    }

});

/** 
【备注】
1、此处为了省事,没有按照层级结构做判断（毕竟只是示意），所以显示隐藏时会有些 bug。
  比如先点击 node0_1 隐藏，再点击 2 下 node0

2、也可以通过直接修改 legend.selected + myChart.setOption 的方式实现。

*/