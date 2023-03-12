var linedead=8000;
var series = [];

option = {
    backgroundColor: '#404a59',
    tooltip: {
        trigger: 'item'
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#404a59'
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series
};
var randomstart=function(){
	return [25*Math.random()+100,20*Math.random()+21];
}
//本demo实现一个轨迹只走一次，自动timer添加新轨迹，并且老轨迹自动消失
//echarts巨坑，上面3点都实现，不能去删除series数组的索引，然后push，每一个轨迹都是根据索引来的
//比如series[0]是北京到上海,series[1]是广州到重庆,如果删除数组splice(0,2)，又push一条，会有大BUG
//这是由于setOption用了合并，如果不想用setOptions合并则更坑，虽然效果可以实现，但是地图cavase会被还原，
//影响用户拖拽体验
//目前缺陷是 series数组无线增大。
//觉得好的点个赞吧。坑死我了

setInterval(function(){
	var createtime=new Date().getTime();
	for(var ii=series.length-1;ii>=0;ii--){
		if(createtime>series[ii].createtime+linedead){
			series[ii].data=null;
			//series.splice(ii,1);  这里绝对禁用删除，改变索引会有bug
			//series[ii]={};    这样也无效
		}
		
	}
	series.push(
		    {
		        name: 'aa Top10',
		        type: 'lines',
		        zlevel: 2,
		        createtime:createtime,
		        symbol: ['none'],
		        symbolSize: 10,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0,
		            symbol: 'arrow',
		            symbolSize: 5,
		            loop:false
		        },
		        lineStyle: {
		            normal: {
		                color: '#46bee9',
		                width: 1,
		                opacity: 0.6,
		                curveness: 0.2
		            }
		        },
		        data: [{name:'aa',coords:[randomstart(),[106.687019,26.568304]]}]
		    });
		myChart.setOption({series:series},false);//合并数据
		//myChart.setOption(option,true);//全覆盖数据，可以解决series索引过大问题，但是每次地图都会redraw重画，你没法拖拽的！
},800);