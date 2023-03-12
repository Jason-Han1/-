var datas = [
           {name: '母基金'},
           {name: '子基金1', category: 0},
           {name: '项目1', category: 0},
           {name: '项目2', category: 0},
           {name: '项目3', category: 0},
           {name: '子基金2', category: 1},
           {name: '项目4', category: 1},
           {name: '项目5', category: 1},
           {name: '项目6', category: 1},
           {name: '子基金3', category: 2},
           {name: '项目7', category: 2},
           {name: '项目8', category: 2},
           {name: '项目9', category: 2}
         ];
var lines = [{
                    source: 0,
                    target: 1
                }, {
                    source: 1,
                    target: 2 
                }, {
                    source: 1,
                    target: 3 
                }, {
                    source: 1,
                    target: 4 
                }, {
                    source: 0,
                    target: 5 
                }, {
                    source: 5,
                    target: 6 
                }, {
                    source: 5,
                    target: 7 
                }, {
                    source: 5,
                    target: 8 
                }, {
                    source: 0,
                    target: 9 
                }, {
                    source: 9,
                    target: 10 
                }, {
                    source: 9,
                    target: 11 
                }, {
                    source: 9,
                    target: 12 
                }];
var option = {
	tooltip : {},
	animationDurationUpdate : 1500,
	label : {
		normal : {
			show : true,
			textStyle : {
				fontSize : 12
			},
		}
	},
	series : [ {
		type : 'graph',
		layout : 'force',//采用力引导布局
		symbolSize : 45,
		legendHoverLink : true,//启用图例 hover 时的联动高亮。
		focusNodeAdjacency : true,//在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
		roam : true,
		label : {
			normal : {
				show : true,
				position : 'inside',
				textStyle : {
					fontSize : 12
				},
			}
		},
		force : {
			repulsion : 1000
		},
		edgeSymbolSize : [ 4, 50 ],
		data :datas,
		links : lines,
		lineStyle : {
			normal : {
				opacity : 0.9,
				width : 1,
				curveness : 0
			}
		}
	} ]
};