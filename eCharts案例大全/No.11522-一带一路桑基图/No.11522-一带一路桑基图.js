var city = {
		    '新亚欧大陆经济走廊': '#B1D8F2',
		    '孟中印缅经济走廊': '#B1D8F2',
		    '中蒙经济走廊': '#B1D8F2',
		    '中巴经济走廊': '#B1D8F2',
		    '中亚-西亚经济走廊': '#B1D8F2',
		    '中南半岛经济走廊': '#B1D8F2',
		    '制造业': '#9B68EF',
		    '交通运输': '#31B1E6',
		    '房地产': '#6888EF',
		    '其他': '#F6B840',
		    '能源电力': '#40E3F6',
		    '农业': '#7C7FFE',
		    '新亚欧大陆经济走廊 ': '#B1D8F2',
		    '孟中印缅经济走廊 ': '#B1D8F2',
		    '中蒙经济走廊 ': '#B1D8F2',
		    '中巴经济走廊 ': '#B1D8F2',
		    '中亚-西亚经济走廊 ': '#B1D8F2',
		    '中南半岛经济走廊 ': '#B1D8F2',
		    
		};
		var population = [
		    {source: "新亚欧大陆经济走廊",target: "制造业",value: 1},
		    {source: "制造业",target: "新亚欧大陆经济走廊 ",value: 1},
		    {source: "孟中印缅经济走廊",target: "交通运输",value: 1},
		    {source: "交通运输",target: "孟中印缅经济走廊 ",value: 1},
		    {source: "中蒙经济走廊",target: "房地产",value: 1},
		    {source: "房地产",target: "中蒙经济走廊 ",value: 1},
		    {source: "中巴经济走廊",target: "其他",value: 1},
		    {source: "其他",target: "中巴经济走廊 ",value: 1},
		    {source: "中亚-西亚经济走廊",target: "能源电力",value: 1},
		    {source: "能源电力",target: "中亚-西亚经济走廊 ",value: 1},
		    {source: "中南半岛经济走廊",target: "农业",value: 1},
		    {source: "农业",target: "中南半岛经济走廊 ",value: 0.5},
		    {source: "农业",target: "中亚-西亚经济走廊 ",value: 0.5},
		];
		//定义一个数组
		var citylist = [];
		//遍历city
		for (var key in city) {
		    citylist.push({
		            name: key,
		            itemStyle: {
		                color: city[key]
		            }
		        } //构造节点对象，包括name和itemStyle
		    )
		}
		//定义一个数组
		var data = [];
		for (var i = 0; i < population.length; i++) {
		    var color = '#aaa'
		    data.push({
		        source: population[i].source,
		        target: population[i].target,
		        value: population[i].value,
		        lineStyle: { //添加样式配置
		            color: color
		        }
		    })
		}
		myChart.showLoading();
		myChart.hideLoading();
		myChart.setOption(option = {
		    tooltip: {
		        trigger: 'item',
		        triggerOn: 'mousemove'

		    },
		   
		    series: [{
		        type: 'sankey',
		        data: citylist,
		        links: data,
		        focusNodeAdjacency: 'allEdges', //鼠标悬停到节点或边上，相邻接的节点和边高亮显示
		        draggable: false,//禁止拖拽
		        itemStyle: {
		            borderWidth: 1,
		            borderColor: '#fff'
		        },
		        lineStyle: {
		            curveness: 0.5,
		            opacity: 0.5
		        }
		    }]
		});