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
    let sourceNodes = [];
    let getNodes = (links) => {
        let empty = true;
        links.forEach(link => {
            if (sourceNodes.includes(link.source)&&!sourceNodes.includes(link.target)) {
                empty = false
                sourceNodes.push(link.target);
            }
        })
        if (empty) return;
        else getNodes(links);
    }
    
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
        sourceNodes = [name];
        getNodes(links);
        if(!isSelected){
            let selectedNodes = [],selectedLinks = [];
            selectedNodes = links.filter(item => {
                return sourceNodes.includes(item.source);
            }).map(item => {
                return [{
                    name: item.source,
                    itemStyle: {
                        // color: '#1DFA7C',
                        opacity: 1
                    },
                    label: {
                        fontSize: 12,
                    }
                },{
                    name: item.target,
                    itemStyle: {
                        // color: '#1DFA7C',
                        opacity: 1
                    },
                    label: {
                        fontSize: 12,
                    }
                }];
            }).flat();
            nodes = _.unionBy(selectedNodes, nodes, 'name').map(item => {
                if(!item.itemStyle){
                    item.itemStyle = {
                        opacity: 0.3
                    };
                    item.label = {
                        show: false
                    };
                }
                return item;
            });
            selectedLinks = links.map(item => {
                if(sourceNodes.includes(item.source)){
                    return {
                        ...item,
                        lineStyle: {
                            // color: '#FFD700',
                            opacity: .8
                        }
                    }
                }else{
                    return {
                        ...item,
                        lineStyle: {
                            color: 'transparent',
                            opacity: 0.3
                        }
                    }
                }
            });
            options.series[0].data = nodes;
            options.series[0].links = selectedLinks;
            isSelected = true;
        }else{
            options.series[0].data = nodes;
            options.series[0].links = links;
            isSelected = false;
        }
        myChart.setOption(options);
    })
    
});
