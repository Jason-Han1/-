
demo = [
  {
    "x": "支付宝支出",
    "y": 90000,
    "s":"个人爱好支出金额总数"
  },
  {
    "x": "支付宝支出",
    "y": 26000.00,
    "s":"日常用品支出金额总数"
  },
  {
    "x": "微信支出",
    "y":  50000.12,
    "s":"个人爱好支出金额总数"
  },
  {
    "x": "微信支出",
    "y":  18000,
    "s":"日常用品支出金额总数"
  },
  {
    "x": "现金支出",
    "y":  41000.00,
    "s":"个人爱好支出金额总数"
  },
  {
    "x": "现金支出",
    "y":  13000.00,
    "s":"日常用品支出金额总数"
  }
]

let data = _yAxisData();
option = {
    backgroundColor:"#001121",
    title: {
			text:'当月个人支出详情',
			textStyle: {
				color: '#fff'
			},
		
	},
	color:colors(),
	tooltip:{
        show: true,
        trigger: 'item'
	},
	grid:{
	    left:"10%",
	    top:"10%",
	},
	legend:{
		show:true,
 		type: 'scroll',
		icon: 'rect',
		left:'70%',
		top:"4%",
		width:'50%',
		itemWidth:20,
		itemHeight:20,
// 		data: getVal(),
		formatter: function(val){
			let str1 = val.substring(0,6);
			let str2 = val.substring(6,val.length);					
			return str1+'\n'+str2;
		},
		itemGap: 10,
		textStyle:{
			color:"rgba(255,255,255,0.8)",
			fontSize:14,
		}
	},
   xAxis: [{
		type: 'category',
		data: _xAxisData(),
		axisTick: {
			show:false,
		},
		axisLabel: {
			interval:0,
			rotate:0,
			fontSize: 12,
			formatter:function(prarms){
			     let str1 = prarms.split('\n')[0];
			     let str2 = prarms.split('\n')[1];
			     console.log(str1,str2);
			     return [`{a|${str1}}\n`,`{b|${str2}}`]
			},
			rich:{
				a:{
					color:'rgba(255,255,255,0.8)'
				},
				b:{
					color:'#f4b741'
				}
			}
		},
		axisLine: {
			show: false
		},
		
	}],
    yAxis: [{
		name: '（万元）',
		nameTextStyle:{
			color: "rgba(255,255,255,0.8)",
			fontSize: 12
		},
		type: 'value',
		axisLabel: {
			color: "rgba(255,255,255,0.8)",
			fontSize: 12
		},
		splitLine: {
			lineStyle: {
				// 使用深浅的间隔色
				color: ['#82909b', '#8b949d']
			}
		},
		axisLine: {
			show: false
		}
	}],
   series: [{
			name: '个人爱好支出金额总数',
			type: 'bar',
			barWidth: '30%',
			itemStyle: {
	            normal: {
	            	label: {
						show: true,
						position: 'top',
						color:'#fff',
						fontSize:12,
						formatter: function (params) {						
							let str = params.value +'';
							let val = _formatNum(str);
							return val
							
						}						
					},
	            }
	        },
			
			data: data[0]
		},
		{
			name: '日常用品支出金额总数',
			type: 'bar',
			barWidth: '30%',
			itemStyle: {
	            normal: {
	            	label: {
						show: true,
						position: 'top',
						color:'#fff',
						fontSize:12,
						formatter: function (params) {
							let str = params.value +'';
							let val = _formatNum(str);
							return val
						}
					},
	            }
	        },
			
			data:data[1]
		}
	]
};
// function getVal(){
// 	let xData = new Set(demo.map(item => item.s));
// 	let _data = [];
// 	if (this.dataset) {
// 		for (let x of xData) { // 遍历Set
// 			_data.push(x)
// 		}
// 	}
// 	return _data;
// }
function colors() {
		return [
			new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#91b9d7'
					}, // 0% 处的颜色 
					{
						offset: 1,
						color: '#5b90c6'
					} // 100% 处的颜色
				],
				false),
			new this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#ddc094'
					}, // 0% 处的颜色
					{
						offset: 1,
						color: '#d5a770'
					} // 100% 处的颜色
				],
				false),
		];
}

function _xAxisData() {
	let xData = new Set(demo.map(item => item.x));
	let _data = [];
	let datay1=0,datay2=0,datay3=0;
	
	if (demo) {
		for (let x of xData) { // 遍历Set
			_data.push(x)
		}
		
		demo.map((item,i)=>{
			//console.log("case",_data)
			switch(item.x){
				case _data[0]:
					 datay1 += Number(item.y);					
				break;
				case _data[1]:
					 datay2 += Number(item.y);					
				break;
				case _data[2]:
					 datay3 += Number(item.y);				
				break;
				default:
				break;
				
			}
			
		})					
		
	}
	//console.log("ydata",datay1,datay2,datay3);
	let datay = [datay1,datay2,datay3];
	let dataAll = [];
	for(var i=0;i<_data.length;i++){
		var str = _data[i]+"\n（共"+_formatNum(datay[i]+'')+"万元）";
		dataAll.push(str);
	}
	//console.log("str",str)
	return dataAll
	
}

function _yAxisData() {
	var data1 = [],
		data2 = [];
	demo && demo.map(item => {
		if (item.s == '个人爱好支出金额总数') {
			data1.push(item.y)

		} else if (item.s == '日常用品支出金额总数') {
			data2.push(item.y)
		}
	})
	let _data=[];
	_data=[data1,data2]
	return _data
}
	
function  _formatNum(str){
	var newStr = "";
	var count = 0;
	 
	if(str.indexOf(".")==-1){
	    for(var i=str.length-1;i>=0;i--){
			if(count % 3 === 0 && count !== 0){
			   newStr = str.charAt(i) + "," + newStr;
			}else{
			   newStr = str.charAt(i) + newStr;
			}
			count++;
	    }
	   str = newStr+'.00'; //自动补小数点后两位
	   //str = newStr;
	   return str;
	}else{
	   for(var k = str.indexOf(".")-1;k>=0;k--){
			if(count % 3 === 0 && count !== 0){
			   newStr = str.charAt(k) + "," + newStr;
			}else{
			   newStr = str.charAt(k) + newStr; //逐个字符相接起来
			}
			count++;
	   }
	   str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
	   return str
	}
}	
	
	
	
	
	
	
	