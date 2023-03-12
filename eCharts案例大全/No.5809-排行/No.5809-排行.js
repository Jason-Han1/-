var cityName = ['三元里街', '松洲街', '黄石街', '同和街', '新市街', '新市街', '新市街']
var cityValue = [90, 80, 70, 60, 50, 40, 40]

option = {

		tooltip:{
			//formatter: '{c} 次',
		},
		grid:{
			top:50,
			width:"64%",
			height:"86%",
			left:"20%"
		},
		xAxis: {
		    show: false,
			type: 'value',
			name: '(单位:次)',
			
		},
		yAxis: [
			{
				data: cityName,
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
					margin:80,
					formatter: function (value, index){
					
						var sureInd = cityName.map(item => item).indexOf(value) + 1
						console.log(sureInd)
						if(sureInd==1){
							return '{a|'+ sureInd +'}' + '{e|' + value + '}'
						}else if(sureInd==2){
							return '{b|'+sureInd +'}' + '{e|' + value + '}'
						}else if(sureInd==3){
							return '{c|'+sureInd +'}' + '{e|' + value + '}'
						}else{
							return '{d|'+sureInd +'}' + '{e|' + value + '}'
						}
					},
					rich: {
						a: {
							backgroundColor:"#F7B500",
							width:18,
							height:18,
							lineHeight:20,
							borderRadius:9,
						},
						e: {
						    color: '#666666',
						    width: 100,
						    textAlign: 'center'
						},
						b: {
							backgroundColor:"#B7B7B7",
							width:18,
							height:18,
							lineHeight:20,
							borderRadius:9,
						},
						c:{
							backgroundColor:"#F27C00",
							width:18,
							height:18,
							lineHeight:20,
							borderRadius:9,
						},
						d:{
							backgroundColor:"#0068DB",
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
				show:false,
				data: cityName,
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
// 			{ // For shadow
// 				type: 'bar',
// 				itemStyle: {
// 					normal: {
// 						color: 'rgba(0,0,0,0.05)',
// 						barBorderRadius:[30, 30, 30, 30],
// 					}
// 				},
// 				barWidth:20,
// 				barGap:'-100%',
// 				barCategoryGap:'40%',
// 				data: [100,100,100,100,100,100,100,100,100,100],
// 				animation: false,
// 				yAxisIndex:1,//使用右侧y轴
// 				tooltip:{
// 					show:false
// 				}
// 			},
			{
				name: "数据量",
				type: 'bar',
				barWidth:20,
				data: cityValue, //次数列表
				yAxisIndex:0,//使用右侧y轴
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
		],
		
		dataZoom: [

        {

         

        

            yAxisIndex: [0],

            right: '0%',
            
            
            
            show: true,
            realtime: true,
            y: 360,
            height: 80,
            start: 0,
            end: 80

        }

    ],
		
	};