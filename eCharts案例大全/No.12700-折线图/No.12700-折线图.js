var dataDate = ['2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04', '2018.05', '2018.06', '2018.07', '2018.08', '2018.09', '2018.10'];
			var areaBigColorList = ['rgba(81, 233, 178, 0.15)','rgba(0, 255, 255, 0.15)','rgba(158, 209, 86, 0.15)',
			'rgba(252, 141, 129, 0.15)','rgba(238, 225, 166, 0.15)','rgba(242, 155, 118, 0.15)'];
			var itemsytleBigColorList = ['#51e9b2','#00ffff','#9ed156','#fc8d81','#eee1a6','#dfc226'];
			
			const deliveryslist = [{
				name: '发言人1',
				value: [322, 420, 486, 556, 252, 623, 777, 557, 536, 554, 555, 432, 481]
			}, {
				name: '发言人2',
				value:  [242, 279, 387, 342, 187, 358, 485, 338, 307, 393, 294, 357, 306]
			}, {
				name: '发言人3',
				value: [301, 344, 481, 752, 173, 487, 536, 522, 415, 428, 429, 344, 378]
			}, {
				name: '发言人4',
				value: [70, 73, 253, 119, 42, 92, 155, 98, 84, 86, 102, 136, 102]
			}, {
				name: '发言人5',
				value: [171, 211, 750, 386, 199, 427, 439, 172, 219, 206, 196, 133, 167]
			}, {
				name: '发言人6',
				value: [52, 83, 77, 93, 23, 62, 114, 97, 47, 69, 85, 95, 80]
			}]
			var AllApplicationSixAreaList= [];//装折线
			for (let h=0;h<deliveryslist.length;h++) {
				let items = deliveryslist[h]
				AllApplicationSixAreaList.push({
					name: items.name,
					type: 'line',
					label:{
						normal:{
							show:false,
							color:'#fff',
							fontSize:14,
							formatter:function(a,b,c){
								var result = [ ], counter = 0;
								var num_array = a.data.split('.');
								var num = num_array[0];
								var newstr = '';
							    for (var i = num.length - 1; i >= 0; i--) {
							        counter++;
							        result.unshift(num[i]);
							        if (!(counter % 3) && i != 0) { result.unshift(','); }
							    }
							    if(num_array.length>1){
							    	newstr = result.join('');
							    	newstr += '.'+num_array[1];
							    	return newstr;
							    }else{
							     	return result.join('');
							    }
						  	},
						}
					},
					symbol:'circle',
					areaStyle: {
						normal: {
							color:areaBigColorList[h],
							shadowColor: 'rgba(0, 0, 0, 0.1)',
							shadowBlur: 10
						}
					},
					itemStyle: {
						normal: {
							color: itemsytleBigColorList[h]
						}
					},
					data: deliveryslist[h].value
				})
			}

			option = {
				grid: {
					right: '4%',
					left: '8%',
					top: '23%',
					bottom: '14%'
				},
				backgroundColor:"#013d5a",
				legend: {
					top:'6%',
					itemGap: 15,
					itemWidth: 18,
					itemHeight: 10,
					textStyle:{
						color:"#fff",
						fontSize:16
					},
					data: [{name:'发言人1',icon:"rect"}, {name:'发言人2',icon:"rect"}, {name:'发言人3',icon:"rect"},{name:'发言人3',icon:"rect"}, {name:'发言人4',icon:"rect"}, {name:'发言人5',icon:"rect"}, {name:'发言人6',icon:"rect"}]
				},
				xAxis: [{
					type: 'category',
					boundaryGap: false,
					data: dataDate,
					
					axisLabel:{
						color:'#fff',
						fontSize:16,
						rotate:20,
					},
					axisLine: {
						lineStyle: {
							color: '#0c526a'
						}
					},
					axisTick:{
						lineStyle:{
							color: '#0c526a'
						}
					},
					splitLine:{
						show:true,
						lineStyle:{
							color:'#0c526a'
						}
					}
				}],
				yAxis: [{
					type: 'value',
					axisLine: {
						lineStyle: {
							color: '#0c526a'
						}
					},
					axisLabel:{
						show:true,
						color:'#fff',
						fontSize:16
					},
					splitLine:{
						lineStyle:{
							color:'#0c526a'
						}
					}
				}],
				series: AllApplicationSixAreaList
			};
