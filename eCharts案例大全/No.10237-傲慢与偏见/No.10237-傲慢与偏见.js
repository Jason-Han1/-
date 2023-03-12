option = { title: {
        text: '傲慢与偏见',
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 60,
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 15
                    },
                }
            },
            draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
		focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。

            categories: [{
                name: '一般'
            }],
               
        		force: {
			// 力引导图基本配置
			// initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
			repulsion: 500, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
			gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
			edgeLength: 200, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
			layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
			// 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
		},
                        edgeSymbol: ['circle', 'arrow'],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 14,
            color:"black"
                    },
            
                    formatter: "{c}"
                }
            },
            data: [ 
            {
                "name": "汤姆"
                
            },
            {
                "name": "尼克"
                
            },
            {
                "name": "黛西"
                
            }, {
                "name": "贝克"
                
            }, {
                "name": "盖茨比"
                
            },{
                "name": "凯瑟琳"
                
            },{
                "name": "默特尔"
                
            },
            ],
            links: [{
                "source": "尼克",
                "target": "黛西",
                "value": "表妹"
             },{
                "source": "黛西",
                "target": "汤姆",
                "value": "丈夫"
             },{
                "source": "黛西",
                "target": "贝克",
                "value": "朋友"
             },{
                "source": "尼克",
                "target": "盖茨比",
                "value": "邻居"
             },{
                "source": "汤姆",
                "target": "默特尔",
                "value": "情妇"
             },{
                "source": "默特尔",
                "target": "凯瑟琳",
                "value": "妹妹"
             },
             
             
            ],

        }
    ]
};