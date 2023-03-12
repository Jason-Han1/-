option = {
		title: {
		text: '各地数据量排名'
			
		},
		tooltip:{
			//formatter: '{c} 次',

		},
		grid:{
			top:10,
			width:"64%",
			height:"86%",
			left:"10%"
		},
		xAxis: {
			type: 'value',
			name: '(单位:次)',
			nameTextStyle:{
				align:'left',
				verticalAlign:'top'
			},
			splitLine:{
			   show:false
			},
			axisTick:{
				show:false
			},
			axisLine:{
                lineStyle:{
                    color:["#bababa"]
                },
            },
		},
		yAxis: [
			{
				data: ["北京","上海","哈尔滨","重庆","济南","青岛","威海","三亚","黑龙江","青海"],
				inverse:true,//反向
				axisLine:{
					show:false
				},
				axisTick:{
					show:false
				},
				axisLabel:{
					color: '#fff',
					fontSize: 12,
					align: "center",
					margin:18,
					formatter: function (value, index){
						var ind=index+1;
						if(ind==1){
							return '{a|'+ind +'}'
						}else if(ind==2){
							return '{b|'+ind +'}'
						}else if(ind==3){
							return '{c|'+ind +'}'
						}else{
							return '{d|'+ind +'}'
						}
					},
					rich: {
						a: {
							backgroundColor:"#f6593a",
							width:18,
							height:18,
							lineHeight:20,
							borderRadius:9,
						},
						b: {
							backgroundColor:"#f6a43a",
							width:18,
							height:18,
							lineHeight:20,
							borderRadius:9,
						},
						c:{
							backgroundColor:"#e2c818",
							width:18,
							height:18,
							lineHeight:20,
							borderRadius:9,
						},
						d:{
							backgroundColor:"#16b5ab",
							width:18,
							height:18,
							lineHeight:20,
							borderRadius:9,
						},
					}
				}
			},
			{	
				inverse:true,//反向
				position:'right',//坐标轴位置，移至右边
				axisLine:{
					show:false
				},
				axisTick:{
					show:false
				},
				show:true,
				data: ["北京","上海","哈尔滨","重庆","济南","青岛","威海","三亚","黑龙江","青海"],
				axisLabel:{
					color:"#333",
					formatter: function (value, index){
						if(value.length>7){
							return value.slice(0,6)+"..."
						}else{
							return value
						}
					}
				}
			}
		],
		series: [
			{ // For shadow
				type: 'bar',
				itemStyle: {
					normal: {
						color: 'rgba(0,0,0,0.05)',
						barBorderRadius:[30, 30, 30, 30],
					}
				},
				barWidth:20,
				barGap:'-100%',
				barCategoryGap:'40%',
				data: [100,100,100,100,100,100,100,100,100,100],
				animation: false,
				yAxisIndex:1,//使用右侧y轴
				tooltip:{
					show:false
				}
			},
			{
				name: "数据量",
				type: 'bar',
				barWidth:20,
				data: [90,80,70,60,50,45,40,30,20,10], //次数列表
				yAxisIndex:1,//使用右侧y轴
				color:{
					type: 'linear',
					x: 0,
					y: 0,
					x2: 1,
					y2: 0,
					colorStops: [{
						offset: 1, color: '#0fe5e3' // 0% 处的颜色
					}, {
						offset: 0, color: '#2ca1d6' // 100% 处的颜色
					}],
					global: false // 缺省为 false
				},
				itemStyle : {
					normal : {
						barBorderRadius:[30, 30, 30, 30],
					},
				}, 
				label:{
					show:false,
				}
			},
		]
	};