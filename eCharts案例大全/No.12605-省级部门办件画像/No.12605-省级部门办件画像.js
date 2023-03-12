option = {
                title: {
                    text: '省级部门办件画像',
                    textStyle:{
                        color:'#fff', 
                    },
                },
                backgroundColor:'#141845',
   				tooltip: {},
			    radar: {
			    	 nameGap : 2, // 图中工艺等字距离图的距离
			        name: {
			            textStyle: {
			                color: '#fff',
			           }
			        },
			        indicator: [
			           { name: '四川省档案局', max: 150},
			           { name: '四川省粮食局', max: 150},
			           { name: '省安全监管局', max: 150},
			           { name: '省统计局', max: 150},
			           { name: '省地震局', max: 150},
			           { name: '省质检局', max: 150}
			        ]
			    },
			    grid: {
				    	top:'18%',
				        left: '3%',
				        right: '4%',
				        bottom: '6%',
				        containLabel: true
				    },
			    series: [{
			        name: ' ',
			        type: 'radar',
			        data : [
			            {
			                value : [134, 100, 80, 76, 60, 46, 37,28],
			                name : '',
			                itemStyle:{
			                        normal:{
			                            color:'#19DCFA'
			                        }
			                    },
			            }
			        ]
			    }]
};