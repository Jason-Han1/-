var colors = ["#ededed","#f5dfa1","#f1d37c","#edc757","#eaba32","#dca917"];

function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(+ year + 1 + '-05-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        var dateStr = echarts.format.formatTime('yyyy-MM-dd', time);
        var v = Math.floor(Math.random() * 1000);
        var color = colors[0];
        if(0 < v && v <= 200){
            color = colors[1];
        }else if(200 < v && v <= 400){            
            color = colors[2];
        }else if(400 < v && v <= 600){
            color = colors[3];
        }else if(600 < v && v <= 800){       	
            color = colors[4];
        }else if(800 < v && v <= 1000){
            color = colors[5];
        }
        data.push({
            name: dateStr,
            value:[dateStr, v],
            itemStyle:{
                normal:{
                    color: color
                }
            }
        });
    }
    console.log(data);
    return data;
}

var option = {
	    tooltip: {
	        position: 'top',
	        formatter:function(params){
	            return params.name + ": " + params.value[1];
	        }
	    },
	    
	    calendar: [
	    {
	        range: '2017',
	        cellSize: 18,
	        splitLine:{
	            show:false
	        },
	        itemStyle:{
	            normal:{
	                color:"#ededed",
	                borderColor:"#fff",
	                borderWidth:"4"
	            }
	        },
	        monthLabel:{
	            formatter: "{M}月"
	        },
	        dayLabel:{
	           // nameMap: ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]
	           nameMap: "cn"
	        }
	    }],

	    series: [{
	        type: 'heatmap',
	        coordinateSystem: 'calendar',
	        calendarIndex: 0,
	        data: getVirtulData(2017)
	    }]
};