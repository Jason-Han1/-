var colorArr = ["#f6ab32", "#f57e46", "#e35857", "#ac58c2", "#4eb468", "#51c4d0", "#5aabe6", "#6f7fe7"],
colorArr = ['#1785ef','#2cb7ff','#fe9f2e','#ffc426','#f36119','#7c3ce6','#e63c90'];

var $data = [{
        name:'name1',
        value:'122',
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
    backgroundColor:'#fff',
    legend: {
        data: ['第一测试','第er测试','整体'],
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
          visualMap: [
         {
                show: false,
                pieces: [{
                    lte: 44,    //小于等于
                    color: 'yellow'  
                }, {
                    gt: 44,   //大于3 小于等于6
                    lte: 99,
                    color: 'red'
                }, {
                    gt: 99,  //大于6
                    color: 'blue'
                }],
                seriesIndex: 0  //0表示第一条线 第二条线依次累加
            }
         
         ],
    yAxis: {
  
    },
    series: [{
        type: 'line',
                    symbol: 'circle',
            symbolSize: 13,

        name:'第一测试',
       label: {
			normal: {
			    show: true
			}
		},
// 		itemStyle:{
// 	            normal:{
// 	                barBorderRadius: [5, 5, 0, 0],//圆角
// 	            }
// 	        },
	        
		
        data:seriesData,

    },
    ]
};