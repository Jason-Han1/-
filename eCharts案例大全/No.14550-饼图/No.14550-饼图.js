option = {
    title: {
        text: '饼图'
    },
    legend:{
        data:['legend1','legend2','legend3']
    },
    tooltip: {},
    series: [
        {
			type:'pie',
			name:'饼图名称',
			center: ['50%', '50%'],//中心点位置
			radius: ['50%', '75%'],//饼图内外半径
			selectedMode:'single',
			label:{
				normal: {
				    show:'true',
                    position: 'inner'//显示在中心位置,inner显示在各个区域中间inside
                },
                emphasis:{
                    show:true,
                    color: '#ff6600'
                }//鼠标悬停设置
			},
			tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },//提示设置{a}:饼图名称、{b}:区域名称、{c}:区域值、{d}:区域所占百分比
			data:[
				{
					name:'legend1',//与legend中data向对应
					value:50,//值
					selected:false//是否选中
				},{
				    name:'legend2',//与legend中data向对应
					value:50,//值
				},{
				    name:'legend3',//与legend中data向对应
					value:50,//值
				}
				
			]
		}
	]
};