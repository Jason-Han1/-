app.title = '力引导布局';
var categories = ['服务器', '网络设备', '终端设备'];
var nodes = [];
var links = [];
for (var i = 1; i < 4; i++) {
	let pId = i + '';
	nodes.push({
		id: pId, 
		name: pId,
		category: 0, 
		symbolSize: 40,
		draggable: true,
// 		fixed: true,
		value: 50,
	});
	
	
	for (var j = 1; j < 3; j++) {
		let ppId = pId + '_' + j;
		nodes.push({
			id: ppId, 
			name: ppId,
			category: 1, 
			symbolSize: 25,
			draggable: true,
			value: 50,
		});
		links.push({
			id: pId + '_' + ppId,
			source: pId,
			target: ppId,
			value: 100
		});
		
		for (var k = 1; k < 6; k++) {
			let cId = ppId + '_' + k;
			nodes.push({
				id: cId, 
				name: cId,
				category: 2, 
				symbolSize: 10,
				draggable: true,
				value: 50,
			});
		
			links.push({
				id: ppId + '_' + cId,
				source: ppId,
				target: cId,
				value: 40
			});
		}
	
	}
}


option = {
    title: {
        text: 'Les Miserables',
        subtext: 'Default layout',
        top: 'bottom',
        left: 'right'
    },
    tooltip: {},
    legend: [{
        // selectedMode: 'single',
        data: categories
    }],
    animation: false,
    series : [
        {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            categories: categories,
            color: ['#f67da3', '#2d9fdb', '#939fd9'],
            roam: true,
            lineStyle: {
                width: 2,
                color: '#6c75a1'
            },
            label: {
                normal: {
                    position: 'right'
                }
            },
            force: {
                // initLayout: 'circular',
                repulsion: 200,
                edgeLength: 50,
                layoutAnimation: false,
            }
        }
    ]
};

myChart.setOption(option);
