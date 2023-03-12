demo = [
  {
    "x": "北京",
    "y": 40,
    "z":"租房人数"
  },
 
  {
    "x": "广州",
    "y":  100,
    "z":"租房人数"
  },
  {
    "x": "上海",
    "y":  152,
    "z":"买房人数"
    
  },
  {
    "x": "深圳",
    "y": 280,
    "z":"租房人数"
  },
  {
    "x": "杭州",
    "y": 350,
    "z":"租房人数"
  },
  {
    "x": "成都",
    "y":  270,
    "z":"租房人数"
   
  },
  {
    "x": "重庆",
    "y": 220,
    "z":"租房人数"
    
  },
   {
    "x": "重庆",
    "y": 105,
    "z":"买房人数"
    
  },
  {
    "x": "北京",
    "y": 140,
    "z":"买房人数"
  },
 
  {
    "x": "广州",
    "y":  167,
    "z":"买房人数"
  },
  {
    "x": "深圳",
    "y": 204,
    "z":"买房人数"
  },
  {
    "x": "杭州",
    "y": 50,
    "z":"买房人数"
  },
  {
    "x": "上海",
    "y":  62,
    "z":"租房人数"
    
  },
  {
    "x": "南京",
    "y": 90,
    "z":"租房人数"
  },
  {
    "x": "成都",
    "y":  179,
    "z":"买房人数"
   
  },
 
  {
    "x": "南京",
    "y": 119,
    "z":"买房人数"
  }
];

let colorArr = _colors();
let legData = _ledgData();
option = {
		backgroundColor:"#0C1D38",
		color: colorArr,
		legend: {				
			right:'4%',
			show:true,
			itemWidth:8,
			itemHeight:8,
			data:legData
		},
		grid:{
			right:'5%'
			
		},
		xAxis: [{
			type : 'category',
			data : _xAxisData(),
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			axisLabel: { 
				color: 'rgba(255,255,255,0.8)',
				fontSize: 12,
				formatter:function(val){
				    return val
				},
				margin: 15,
			},
			axisLine: _axisLine()
		}],
		yAxis: [{
			type : 'value',
			axisLabel: { 
				color: 'rgba(255,255,255,0.8)',
				fontSize: 12,
				formatter:function(val){
				    return val
				},
				margin: 15,
			},
			axisTick: {
				show: false,
				alignWithLabel: true
			},
			splitLine: { 
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.2)', //坐标轴线颜色
					width: 1
      			}
			},
			axisLine: _axisLine()
		}],
		series : _setSeriesArray()
	
}

function _ledgend(){
		
	let legendDt =  new Set(demo && demo.map(item=>item.z));
	let _data = [];
	if(legendDt){
		for (let x of legendDt) { // 遍历Set
			_data.push(x)
		}
	}
	return _data;
	
}

function _ledgData(){
		
	let legendDt =  new Set(demo && demo.map(item=>item.z));
	let _lgdata = [],lgDt=[];
	if(legendDt){
		for (let x of legendDt) { // 遍历Set
			_lgdata.push(x)
		}
	}
	//console.log(_lgdata);
	_lgdata && _lgdata.forEach((item)=>{  
		
		lgDt.push({
			name: item,
			icon: 'circle',
			textStyle: {
				color: '#fff',
				fontSize:14
			}
		})
	});

	return lgDt;

}

function _setSeriesArray() {
		
	let _point = _icon(),
		areaSty = _areaStyleColor(),
		colors = _colors();
	let dataKinds = _ledgend(),
		dataLg = demo.length,
		kinds = dataKinds.length;  //数据种类数n
	let _xData = _xAxisData();
	let result = [];  //n个数组
		
	let obj = {};
    demo.forEach((item, i) => {
		!obj[item.z] ? obj[item.z] = [item] : obj[item.z].push(item);
	})	
	
	for(var i=0;i<kinds;i++){
		let _data = obj[dataKinds[i]],
			tempArr = [];
		for(var k=0;k<dataLg;k++){
			let _dt = _xData[k];
			_data.map((item)=>{
				if(item.x === _dt){
					tempArr.push(item.y)
				}
			})				
		}
		result.push(tempArr)
		
	}
	//console.log(result);

	//最大值组合
	let	maxArr = [];
	result && result.map((item)=>{
		let tempArr = item.concat(),
			max =  tempArr.sort(_sortNumber).slice(0,1)+'';  //深拷贝
		maxArr.push(max);
	})
	
	//创建series
	let seriesArr = [];
	let _markPoint = _markPointData();
	result && result.map((item,ind)=>{
		
		seriesArr.push({
			name: dataKinds[ind],
			type:'line',
			data:item,
			symbolSize:0,
			markPoint:{
				symbol: `image://${_point[ind]}`,
				symbolSize:(value,params)=>{
					let val = params.data.coord[1] +'';
					let ratio = (maxArr.indexOf(val) === params.seriesIndex)? 40: 25;
					return ratio
				},
				label:{
					normal:{
						show:false
					}
				},
				data:_markPoint[ind]
			},
			lineStyle:{
				normal:{
					color: colors[ind],
					shadowColor:colors[ind],
					shadowBlur: 20,
					shadowOffsetX: 1,
					shadowOffsetY: 0,
					opacity:1
				}
				
			},
			areaStyle: {
				normal:{						
					color: {
						type: 'linear',
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [{
							offset: 0, color:areaSty[ind][0]  // 0% 处的颜色
						},{
							offset: 1, color: areaSty[ind][1] // 100% 处的颜色
						}],
						globalCoord: false // 缺省为 false
					}
				}
			}
		})
	})
	
	//console.log("seriesArr",seriesArr);
	return seriesArr;
	
}
	
//数组排序不去重
function _sortNumber(a,b){
	return b-a;
}

function  _markPointData(){
	let dataKinds = _ledgend(),
		dataLg =demo.length,
		kinds = dataKinds.length,
		_xData =_xAxisData(); //数据种类数n
	let arr = [],obj = {},result=[];
	
    demo.forEach((item, i) => {
		!obj[item.z] ? obj[item.z] = [item] : obj[item.z].push(item);
	})	
	
	for(var i=0;i<kinds;i++){
		let _data = obj[dataKinds[i]],
			tempArr = [];
		for(var k=0;k<dataLg;k++){
			let _dt = _xData[k];
			_data.map((item)=>{
				if(item.x === _dt){
					tempArr.push({
						x:item.x,
						y:item.y
					})
				}
			})				
		}
		result.push(tempArr)
		
	}

	for(var n=0;n<kinds;n++){
		let temp = [];
		result[n] && result[n].map((item)=>{
			
		 	temp.push({
		 		name:'p',
		 		coord:[item.x,item.y]
		 	})
		})
		arr.push(temp);
	}
	
	return arr
	
}
	
function _xAxisData() {
	let xData =  new Set(demo &&demo.map(item=>item.x));
	let _data = [];
	if(xData){
		for (let x of xData) { // 遍历Set
			_data.push(x)
		}
	}
	//console.log(_data);
	return _data;
	
}
	
function _axisLine() {
	return {
		show: false,
		lineStyle: {
			color: 'rgba(255,255,255,0.2)', //坐标轴线颜色
			width: 2
			
  		}
	}
}

function _icon(){
	const orange = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0U5NkQ3RUVBNzgxMUU4QUEzOEYwOTU1N0NFQzBDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQ0U5NkQ3RkVBNzgxMUU4QUEzOEYwOTU1N0NFQzBDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFMDk3ODdGRUExMTExRThBQTM4RjA5NTU3Q0VDMENBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFMDk3ODgwRUExMTExRThBQTM4RjA5NTU3Q0VDMENBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Gqs57QAABoVJREFU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';
    const blue = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQ0U5NkQ4MkVBNzgxMUU4QUEzOEYwOTU1N0NFQzBDQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQ0U5NkQ4M0VBNzgxMUU4QUEzOEYwOTU1N0NFQzBDQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNDRTk2RDgwRUE3ODExRThBQTM4RjA5NTU3Q0VDMENBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNDRTk2RDgxRUE3ODExRThBQTM4RjA5NTU3Q0VDMENBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ck4nigAACINJREFU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';
	const orRed = 'data:image/png;base64,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';
	const green = 'data:image/png;base64,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';
	
	return [orange,blue,orRed,green]
}
function _colors(){
	return ['#f3972f','#327bfa','#f85b2c','#70e8c2']
}
function _areaStyleColor(){
		
	return [ 
		['rgba(243,151,47,0.3)','rgba(243,151,47,0.1)'],
		['rgba(50,123,250,0.3)','rgba(50,123,250,0.1)'],
		['rgba(248,91,44,0.3)','rgba(248,91,44,0.1)'],
		['rgba(112,232,194,0.3)','rgba(112,232,194,0.1)']
	];
}
