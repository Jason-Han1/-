var warnImg = "https://cdn.questmobile.cn/img/icons/1347.png";
                      

option = {
    tooltip: {
        trigger: 'item',
    },
   
    series: {
        type: 'sankey',
        layout:'none',
        nodeWidth: 80,
        nodeGap: 50,
        focusNodeAdjacency: 'allEdges',
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ff0000',
                    opacity:1
                }
            },
        label:{
                normal: {
                  align: 'center',
                  padding: [0, 0, 0, -90],
                    fontSize:'14',
                    color: '#fff'
                }
            },
            lineStyle: {
                normal: {
                    curveness: 0.5,
                    opacity:0.5
                }
            },
        data: [{
            name: 'a',
            label:{
                normal: {
                    fontSize:'14',
                    color: '#000'
                },
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ff0000',
                    opacity:1,
                    color:'#fff',
                    shadowColor:'#ffcc03',
                    shadowOffsetY:44
                }
            },
        }, {
            name: 'a1'
        }, {
            name: 'a2'
        }, { 
            name: 'a3'
        }, {
            name: 'a4'
        }, {
            name: 'a5'
        }, {
            name: 'a6'
        }, {
            name: 'a7'
        }, {
            name: 'a8'
        }, {
            name: 'a9'
        }, {
            name: 'a10'
        }],
        links: [{
            source: 'a',
            target: 'a1',
            value: 5
        }, {
            source: 'a',
            target: 'a2',
            value: 3
        }, {
            source: 'a',
            target: 'a3',
            value: 8
        }, {
            source: 'a',
            target: 'a4',
            value: 3
        }, {
            source: 'a',
            target: 'a5',
            value: 1
        }, {
            source: 'a',
            target: 'a6',
            value: 2
        }, {
            source: 'a',
            target: 'a7',
            value: 2
        }, {
            source: 'a',
            target: 'a8',
            value: 2
        }, {
            source: 'a',
            target: 'a9',
            value: 2
        }, {
            source: 'a',
            target: 'a10',
            value: 2
        }],
     },
     

};
