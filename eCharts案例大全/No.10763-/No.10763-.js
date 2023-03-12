		var colors=['#1785ef','#2cb7ff','#fe9f2e','#ffc426','#f36119','#7c3ce6','#e63c90']

option = {
    color:colors,
    tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'

        },
    series: {
        type: 'sankey',
        layout:'none',
         focusNodeAdjacency: true,
          itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: '#aaa'
                    }
                },
                lineStyle: {
                    normal: {
                        curveness: 0.5
                    }
                },
        data: [{
            name:'公众号'
        },{
            name:'官网'
        },{
            name:'地面推广'
        },{
            name:'统一营销'
        },{
            name:'线索池'
        },{
            name:'公海'
        },{
            name:'客户'
        },{
            name:'项目'
        },{
            name:'成单'
        },{
            name:'进行中'
        },{
            name:'暂缓'
        },{
            name:'丢单'
        }],
        links: [{
            source: '公众号',
            target: '线索池',
            value: 10
        },{
            source: '官网',
            target: '线索池',
            value: 20
        },{
            source: '地面推广',
            target: '线索池',
            value: 5
        },{
            source: '统一营销',
            target: '线索池',
            value: 5
        },{
            source: '线索池',
            target: '公海',
            value: 20
        },{
            source: '线索池',
            target: '客户',
            value: 20
        },{
            source: '公海',
            target: '客户',
            value: 20
        },{
            source: '客户',
            target: '项目',
            value: 20
        },{
            source: '项目',
            target: '成单',
            value: 5
        },{
            source: '项目',
            target: '进行中',
            value: 5
        },{
            source: '项目',
            target: '暂缓',
            value: 5
        },{
            source: '项目',
            target: '丢单',
            value: 5
        }],
        label: {
					normal: {
						color: "#000",
						fontSize: 20,
						rich: {
							white: {
								fontSize: 20,
								padding: [10, 0, 0, 0]
							}
						}
					}
				},
				lineStyle: {
					normal: {
						color: "source",
						curveness: 0.5
					}
				},
				itemStyle: {
					normal: {
						borderWidth: 1,
						borderColor: "transparent"
					}
				}
    }
};


























