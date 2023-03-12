var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

myChart.showLoading();
$.get(ROOT_PATH + '/data/asset/data/energy.json', function (data) {
    myChart.hideLoading();

    myChart.setOption(option = {
        title: {
            text: 'Sankey Diagram'
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                data: data.nodes,
                links: data.links,
                emphasis: {
                    focus: 'adjacency'
                },
                lineStyle: {
                    color: 'source',
                    curveness: 0.5
                }
            }
        ]
    });
    
    
    let isSelected = false, cacheName = '';
    myChart.on('click',(e) => {
        // console.log(e,drawData)
        if(e.data.source) return;
        let {name} = e;
        let {links,nodes} = _.cloneDeep(data);
        let options = myChart.getOption();
        if(cacheName !== name){
            isSelected = false;
        }
        cacheName = name;
        if(!isSelected){
            let selectedNodesParent = [];
            let selectedNodesChilds = [];
            let allSelectedNodes = []
            let allSelectedLinks = []
            let allParentsNames = [name]
            let allChildsNames = []
            
            function findParentNodes(nm){
                selectedNodesParent = links.filter(item => {
                    return item.target === nm;
                }).map(item=>{
                    allParentsNames.push(item.source)
                    return [{
                        name: item.source,
                        itemStyle: {
                            // color: '#1DFA7C',
                            opacity: 1
                        },
                        label: {
                            fontSize: 12,
                        }
                    }];
                }).flat()
            }
            
            function findChildrenNodes(nm){
                let tempAry = links.filter(item => {
                    return item.source === nm;
                }).map(item=>{
                    allChildsNames.push(item.source)
                    return [{
                        name: item.target,
                        itemStyle: {
                            // color: '#1DFA7C',
                            opacity: 1
                        },
                        label: {
                            fontSize: 12,
                        }
                    }];
                }).flat()
                if (tempAry.length) {
                    tempAry.forEach(item=>{
                        findChildrenNodes(item.name)
                    })
                }
                selectedNodesChilds = selectedNodesChilds.concat(tempAry)
            }
            
            findParentNodes(name)
            findChildrenNodes(name)
            allSelectedNodes = _.unionBy([...selectedNodesParent, ...selectedNodesChilds, {name, itemStyle: {opacity:1}, label: {fontSize: 12}}], nodes, 'name').map(item=>{
                if(!item.itemStyle){
                    item.itemStyle = {
                        opacity: 0.3
                    };
                    item.label = {
                        show: false
                    };
                }
                return item;
            })
            
            let childrenLinks = links.map(item=>{
                if (allChildsNames.includes(item.source)){
                    return {
                        ...item,
                        lineStyle: {
                            // color: '#FFD700',
                            opacity: .8
                        }
                    }
                } else {
                    return {
                        ...item,
                        lineStyle: {
                            color: 'transparent',
                            opacity: 0.3
                        }
                    }
                }
            })
            
            let parentsLinks = links.map(item=>{
                if (allParentsNames.includes(item.target)){
                    return {
                        ...item,
                        lineStyle: {
                            // color: '#FFD700',
                            opacity: .8
                        }
                    }
                } else {
                    return {
                        ...item,
                        lineStyle: {
                            color: 'transparent',
                            opacity: 0.3
                        }
                    }
                }
            })
            
            allSelectedLinks = [...parentsLinks, ...childrenLinks]
            options.series[0].data = allSelectedNodes;
            options.series[0].links = allSelectedLinks;
            isSelected = true;
        }else{
            options.series[0].data = nodes;
            options.series[0].links = links;
            isSelected = false;
        }
        myChart.setOption(options);
    })
    
});
