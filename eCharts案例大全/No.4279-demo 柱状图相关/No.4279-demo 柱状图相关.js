var colorArr = ["#f6ab32", "#f57e46", "#e35857", "#ac58c2", "#4eb468", "#51c4d0", "#5aabe6", "#6f7fe7"],
colorArr = ['#1785ef','#2cb7ff','#fe9f2e','#ffc426','#f36119','#7c3ce6','#e63c90'];

var $data = [{
        name:'name1',
        value:'88',
    },{
        name:'name2',
        value:'99'
    },{
        name:'name3',
        value:'22'
    },{
        name:'name4',
        value:'88'
    },{
        name:'name5',
        value:'44'
    },{
        name:'name6',
        value:'33'
    },{
        name:'name7',
        value:'11'
}]
var xAxisData = [];
var seriesData = [];
for(var i=0;i<$data.length;i++){
    xAxisData.push($data[i].name)
    seriesData.push($data[i].value)
}
option = {
    color:colorArr,
    backgroundColor:'#fff',
    legend: {
        data: ['第一测试','第er测试','第er2测试','整体'],
    },
   tooltip: {
        trigger: 'axis',//鼠标滑过显示阴影和数据等
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        data:xAxisData,
        
	    
    },
    yAxis: {
        
    },
    series: [{
        type: 'bar',
        barMaxWidth:35,//柱状图的最大值
        name:'第一测试',
        stack: '总量',
       label: {
			normal: {
			    show: true,
				textStyle: {
					color: '#fff'
				},
				position: 'inside'//显示文字的颜色和位置
			}
		},
// 		itemStyle:{
// 	            normal:{
// 	                barBorderRadius: [5, 5, 0, 0],//圆角
// 	            }
// 	        },
	        
		
        data:seriesData,

    },
    {
        type: 'bar',
        barMaxWidth:35,//柱状图的最大值
        name:'第er测试',
        stack: '总量',
       label: {
			normal: {
			    show: true,
				textStyle: {
					color: '#fff'
				},
				position: 'inside'//显示文字的颜色和位置
			}
		},
        data:['',21,12,12,32,12,12],

    },{
        type: 'bar',
        barMaxWidth:35,//柱状图的最大值
        name:'第er2测试',
        stack: '总量',
       label: {
			normal: {
			    show: true,
				textStyle: {
					color: '#fff'
				},
				position: 'inside'//显示文字的颜色和位置
			}
		},
        data:[21,'','','','','',''],

    },{
        type: 'bar',
        barMaxWidth:35,//柱状图的最大值
        name:'整体',
        barGap: '-100%',
        z:1,
       label: {
			normal: {
			    show: true,
				textStyle: {
				// 	color: '#000'
				},
				position: 'top'//显示文字的颜色和位置
			}
		},
        data:[120,120,34,100,76,45,23],

    }]
};