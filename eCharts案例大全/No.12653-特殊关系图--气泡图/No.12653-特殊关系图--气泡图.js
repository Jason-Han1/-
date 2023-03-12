let demo = [
   
  {
    "z": "买房人数",
    "xz": 1000,
    "x":7086,
    "y": 10,
    "q":1556
    
  },
  
 
  {
    "z": "买房人数",
    "xz": 2000,
    "x":7686,
    "y":  52,
    "q":1956
   
  },
   {
    "z": "租房人数",
    "xz": 2000,
    "x":1986,
    "y": 102,
    "q":3556
  },
   {
    "z": "租房人数",
    "xz": 4000,
    "x":6786,
    "y": 384,
    "q":5556
  },
  {
    "z": "买房人数",
    "xz": 3000,
    "x":1586,
    "y":  200,
    "q":4556
    
  },
  {
    "z": "租房人数",
    "xz": 3000,
    "x":2886,
    "y": 250,
    "q":4856
  },
  {
    "z": "买房人数",
    "xz": 4000,
    "x":3686,
    "y": 334,
    "q":5056
   
  },
 
  {
    "z": "买房人数",
    "xz": 5000,
    "x":2186,
    "y": 390,
    "q":4056
  
  },
  {
    "z": "租房人数",
    "xz": 5000,
    "x":2956,
    "y": 540,
    "q":5156
  },
  {
    "z": "买房人数",
    "xz": 6000,
    "x":5486,
    "y":  330,
    "q":4056
    
  },
  {
    "z": "租房人数",
    "xz": 1000,
    "x":1686,
    "y": 60,
    "q":2556
  },
  {
    "z": "租房人数",
    "xz": 6000,
    "x":7586,
    "y": 380,
    "q":4756
  },
  {
    "z": "买房人数",
    "xz": 7000,
    "x":3486,
    "y": 220,
    "q":3256
  },
   {
    "z": "租房人数",
    "xz": 7000,
    "x":3816,
    "y": 270,
    "q":3856
  },
  {
    "z": "买房人数",
    "xz": 8000,
    "x":1486,
    "y": 110,
    "q":1056
   
  },
   {
    "z": "租房人数",
    "xz": 8000,
    "x":5656,
    "y": 160,
    "q":1956
  }
  
];
let colors = ['#63bef8'];
option = {	
	
	backgroundColor:"#071435",
	legend:{
		right: '4%',
		show:true,
		itemWidth: 10,
		itemHeight: 10,
		data: _ledgend(),
		textStyle:{
			color: '#fff',
			fontSize:14,
		}
	},
	grid:{
		right:'5%'
	},
	xAxis: [{
		type : 'value',
		//data : this._xAxisData(),
		min: _xDataMin(),
		axisTick: {
			show: false,
			alignWithLabel: true,   //对齐数据
		},
		axisLabel: { 
			color: 'rgba(255,255,255,0.8)',
			fontSize: 12,
			formatter:function(val){
			    return val
			},
			margin: 15,
			interval:0
		},
		splitLine:{
			show: true,
			alignWithLabel: true,   //对齐数据
			lineStyle:{
				color: 'rgba(255, 255, 255, 0.1)'
			}
		},
		axisLine: _axisLine()
	}

	],
	yAxis: [{
		type : 'value',
		position:'left',
		max:_allDataMax(),
		//scale:true,
		axisLabel: { 
			color: 'rgba(255,255,255,0.8)',
			fontSize: 12,
			formatter:function(val){
			    return val
			},
			margin: 15,
		},
		splitLine: { 
			show: true,
			lineStyle:{
				color: 'rgba(255, 255, 255, 0.1)'
			}
		},
		axisTick:{
			lineStyle:{
				color:'#63bef8',
				width:1
			}
		},
		axisLine: _axisLine()
	},{
		type : 'value',
		position:"right",
		max:_allDataMax(),
		//scale:true,
		axisLabel: { 
			show:false,
		},
		splitLine: { 
			show: false,
			lineStyle:{
				color: 'rgba(255, 255, 255, 0.1)'
			}
		},
		axisTick:{
			lineStyle:{
				color:'#63bef8',
				width:1
			}
		},
		axisLine: _axisLine()
	}

	
	],
	series : _seriesData()

};

function _ledgend(){
	let legendDt =  new Set(demo && demo.map(item=>item.z));
	let _data = [];
	if(legendDt){
		for (let x of legendDt) { 
			_data.push(x)
		}
	}
	
	return _data;
}
//x轴最小值
function _xDataMin(){
	let xData = _xAxisData(),
		tempArr = xData.concat();
		min =  tempArr.sort(_sortNumber).slice(0,1);  
	
	return min[0]
}

//数据最大值 
function _allDataMax(){
	let arr = [];
	let dataKinds = _ledgend(),
		kinds = dataKinds.length;  //数据种类数n
	demo && demo.map((item)=>{
		for(var n=0;n<kinds;n++){
			let v = n+1;
			arr.push(item.y);
		}
		
	})
	let max = arr.sort(_sortNumberMax).splice(0,1),
		lg = parseInt(max[0]).toString().length,
		lev = (parseInt(max[0]).toString()).split("")[0],
		x = parseInt(lev)+2;
	let _maxFinal = x*Math.pow(10, lg-1);  //按照数量级计算出合适的最大值
	
	return _maxFinal;
	
}
//排序不去重
function _sortNumber(a,b){
	return a-b
}
function _sortNumberMax(a,b){
	return b-a
}

function _seriesData(){
	let colorsArr = _colors(),
		colorSys = _colorSys();
	let dataKinds = _ledgend(),
		dataLg =demo.length,
		kinds = dataKinds.length;  
	let _xData = _xAxisData();
	let result = [];  
	
	let obj = {};
    demo.forEach((item, i) => {
		!obj[item.z] ? obj[item.z] = [item] : obj[item.z].push(item);
	})	
	
	//气泡item
	for(var i=0;i<kinds;i++){
		let _data = obj[dataKinds[i]],
			tempArr = [];
		for(var k=0;k<dataLg;k++){
			let _dt = _xData[k];
			
			_data.map((item)=>{
				if(item.xz === _dt){
					tempArr.push([item.x,item.y,item.q])
				}
			})				
		}
		result.push(tempArr)
		
	}

	//插入最大值数组，画T
	let _max = _allDataMax(),lineData = [];
	_xData && _xData.forEach((v)=>{
		lineData.push([v,_max]);
	})
	result.push(lineData);
	
	//计算气泡大小
	let lg = parseInt(_max).toString().length,
		itemRatio = Math.pow(10, lg-1);
	
	//创建series
	let seriesArr = [];
	let _svg = _svgIcon();
	result && result.map((item,ind)=>{
		if(ind === result.length-1){
			seriesArr.push({
				name: '固定T',
				type: 'scatter',
				yAxisIndex:1,
				symbol:_svg,
				symbolSize: 10,
				itemStyle:{
					normal:{
						color:"#63bef8"
					}
				},
				symbolOffset:[0,'40%'],
				data:item
			})
		}else{
			seriesArr.push({
				name: dataKinds[ind],
				type: 'scatter',
				symbolSize: function(data){
					//return Math.sqrt(data[2])/5e2;
					return data[2]/itemRatio
				},
				itemStyle:{
					normal:{
						shadowBlur: 20,
		                shadowColor: colorSys[ind],
		                opacity:0.6,
		                shadowOffsetY: 4,
		                color:colorsArr[ind]
					}
				},
				data: item
			})
		}
		
	})
	
	return seriesArr;
	
}

function _xAxisData() {
	let dt = new Set(demo && demo.map(item => item.xz));
	let _data = [];
	if(dt){
		for (let x of dt) { 
			_data.push(x)
		}
	}
	
	let tempArr = _data.concat();
		min =  tempArr.sort(_sortNumber);  
	
	//scatter横轴是value，需要排序，避免返回数据顺序错乱的bug
	return min
	
}
	
function _axisLine() {
	return {
		show: false,  //不显示
		lineStyle: {
			color: '#3398DB', //坐标轴线颜色
			width: 2
  		}
	}
}
function _svgIcon(){
	let src = "path://M851.968 167.936l0 109.568-281.6 0 0 587.776-116.736 0 0-587.776-281.6 0 0-109.568 679.936 0z";
	return src;
}

function _colorSys(){
	return ['#0ab484','#1355c7','#F5A559','#D62E56'];
}
function _colors(){
	return [
		new this.echarts.graphic.LinearGradient(0.4, 0.3,0, 1, 
		[
			{offset: 0,color: '#8ffdde'  }, // 0% 处的颜色 
			{offset: 1, color: '#0ab484' } // 100% 处的颜色
		], false),
		new this.echarts.graphic.LinearGradient(0.4, 0.3,0, 1, 
		[
			{offset: 0,color: '#5790f4'  }, // 0% 处的颜色 
			{offset: 1, color: '#1355c7' } // 100% 处的颜色
		], false),
		new this.echarts.graphic.LinearGradient(0.4, 0.3,0, 1, 
		[
			{offset: 0,color: '#f6973d'  }, // 0% 处的颜色 
			{offset: 1, color: '#F5A559' } // 100% 处的颜色
		], false),
		new this.echarts.graphic.LinearGradient(0.4, 0.3,0, 1, 
		[
			{offset: 0,color: '#e40036'  }, // 0% 处的颜色 
			{offset: 1, color: '#D62E56' } // 100% 处的颜色
		], false),
		
	]
}
