//数据定义区
var typeArr = ["鲜花","星星","香蕉","嫌弃"];
var typeIndex = 1;
var selectedRange = null;
var option = null;
var str = "";
var data = [];
var geoCoordMap = {};
var name = "虚拟地图区域饼图数据统计"
var mapName = 'china'
// 地图特征
var mapFeatures = echarts.getMap(mapName).geoJson.features;
mapFeatures.forEach(function(v){
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;
    data.push({
    	// 需要挨个处理各地区数据（不使用随机产生的数）：另外需要构造的数据是柱图数据
    	"name":name,
    	"value":[
    	{name:"鲜花",value:Math.round(Math.random() * 100 + 10)},
    	{name:"星星",value:Math.round(Math.random() * 100 + 10)},
    	{name:"香蕉",value:Math.round(Math.random() * 100 + 10)},
    	{name:"嫌弃",value:Math.round(Math.random() * 100 + 10)}
    	]
    })
});


/*变换地图数据（格式）：pie*/
function convertMapDta(type,data){
	var mapData = [];
	data.forEach(function(v){
		v.value.forEach(function(v1){
			if(String(v1.name) === String(type)){
                // 数据格式：data: [120, 200, 150, 80]
                mapData.push({
                	"name":v.name,"value":v1.value
                })
            }
        })
	});
	return mapData;
}




/*resetPie*/
function resetPie(myChart,params,geoCoordMap,typeIndex){
	var op = myChart.getOption();
	var ops = op.series;
	var gd=option.grid;

	myChart.setOption(op,true);
}

/*addPie*/
function addPie(chart,data) {
	var op = chart.getOption();
	var sd = option.series;
	var gd=option.grid;
	for (var i = 0; i < data.length; i++) {
		var randomValue = Math.round(Math.random() * 30);
		var radius = randomValue <= 10 ? 10 : randomValue;
		var geoCoord = geoCoordMap[data[i].name];
		if (geoCoord) {
			var vr = [];
			(data[i].value).map(function(v,j){
				vr.push({name:v.name,value:v.value});
			});
			var p = chart.convertToPixel({seriesIndex: 0}, geoCoord);
		
			gd.push({
			    width:20,height:20,
			    left:p[0],
			    top:p[1],z:5
			    
			});
			option.yAxis.push({
			    gridIndex:i,
			      type: 'value',
			      show:false,
			      axisLabel:{show:false},
			      z:5
			});
			option.xAxis.push({
			      type: 'category',
                data: ["1","2"],
                show:false,
			    gridIndex:i
			})
			sd.push(
			{
			
                data: [120, 200],
                type: 'bar',
                yAxisIndex :i,
                  xAxisIndex :i,
                z:5,
              //  zlevel:22,
                itemStyle:{
                    color:'red'
                }
            
			}
			);
		}
	}
  
	return option;
	
};



/* 指定图表的配置项和数据:pie*/
var option = {
    title: {
        text: name,
        left: 'center',
        textStyle: {
            color: '#03A89E'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params){
            if(params.value){
                return params.name + "<br/>"+ typeArr[typeIndex] +": "+ params.value;
            }
        }
    },
    grid:[],
    yAxis:[],
    xAxis:[],
    series : [{
        name: 'chinaMap',
        type: 'map',
        mapType: mapName,
        roam:true,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle:{
            normal:{
                areaColor:"#808A87"
            }
        },
        data:convertMapDta(typeArr[typeIndex],data),
        z:2
    }]
};



if (option && typeof option === "object") {
	myChart.setOption(option, true);
}
/*pie*/
addPie(myChart,data);
/*bar*/
// addBar(myChart,data);

myChart.setOption(option,true);

/*饼图跟着地图移动:pie*/
myChart.on('georoam', function (params) {
	resetPie(myChart,params,geoCoordMap,typeIndex);
});
myChart.on('datarangeselected', function (params) {
	resetPie(myChart,params,geoCoordMap,typeIndex);
});
window.addEventListener("resize",function(){
	myChart.resize();
	resetPie(myChart,0,geoCoordMap);
})


//myChart.setOption(option);






