var baseName = "项目";
var chartData = {
	'人员' : [ '人员1', '人员2', '人员3' ],
	'机构' : [ '机构1', '机构2', '机构3' ],
	'文献' : [ '文献1', '文献2', '文献3' ]
};
var datas = [ {
	name : baseName || '',
	draggable : true
} ];
var lines = [];
var categoryIdx = 0;
var keyIndex = 0;
var dataIndex = 0;
$.each(chartData, function(key, values) {
	keyIndex = dataIndex;
	datas.push({name: key,category:categoryIdx,draggable: true});
	keyIndex ++ ;
	dataIndex ++ ;
	lines.push({
        source: 0,
        target: keyIndex,
        value :''
    });
	$(values).each(function(idx,val) {
		datas.push({name: val,category:categoryIdx,draggable: true});
		dataIndex ++ ;
		lines.push({
            source: keyIndex,
            target: dataIndex,
            value :''
        });
	});
	categoryIdx++;
});
var option = {
	title : {
		text : ''
	},
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
		edgeLabel : {
			normal : {
				show : true,
				textStyle : {
					fontSize : 10
				},
				formatter : "{c}"
			}
		},
		categories : [ {
			itemStyle : {
				normal : {
					color : "#BB8FCE",
				}
			}
		}, {
			itemStyle : {
				normal : {
					color : "#0099FF",
				}
			}
		}, {
			itemStyle : {
				normal : {
					color : "#5DADE2",
				}
			}
		} ],
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