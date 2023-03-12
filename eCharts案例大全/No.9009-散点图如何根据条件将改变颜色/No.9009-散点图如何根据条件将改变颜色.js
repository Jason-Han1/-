//	var temp = new Array();
var temp=[];
	// 指定图表的配置项和数据
		temp = [ [ 1, 7,'a' ],
	[ 2, 8 ,'a'],
	[ 3, 9 ,'a'], 
	[ 4, 10 ,'a'], 
	[ 5, 8 ,'b'],
	[ 6, 7,'b' ],
	[ 7, 10,'b' ],
	[ 8, 9,'c' ], 
	[ 9, 9,'c' ], 
	[ 10, 10,'a' ],
	[ 11, 9,'a' ],
	[ 12, 7,'b' ],
	[ 13, 9,'b' ], 
	[ 14, 10,'b' ], 
	[ 15, 10,'c' ],
	[ 16, 9,'c' ],
	[ 17, 8 ,'b'],
	[ 18, 7 ,'c'], 
	[ 19, 7 ,'a'], 
	[ 20, 8 ,'c'],
	[ 21, 9 ,'c'],
	];


		//分别获取数组三列的值
		//获取第1列，根据temp中对应的数组进行调整
		var x1 = [];
		for (var i = 0; i < temp.length; i++) {
			x1[i] = temp[i][0];
		}

		//获取第二列，根据temp中对应的数组进行调整
		var x2 = [];
		for (var j = 0; j < temp.length; j++) {
			x2[j] = temp[j][1];
		} 
		//获取第三列，根据temp中对应的数组进行调整
     	var x3 = [];
		for (var j = 0; j < temp.length; j++) {
			x3[j] = temp[j][2];
		} 
    
var compare = function (x, y) {//比较函数
    if (x < y) {
        return -1;
    } else if (x > y) {
        return 1;
    } else {
        return 0;
    }
}
//X3中字符按升序排序
 x3.sort(compare);
 
//先不管排序后数据不对应问题,在系统里写函数解决。
// temp[2].sort(compare);
// alert(temp);

option = {
    xAxis: {
        data:x3
    },
    yAxis: {},
    series: [{
        symbolSize: 20,
        data:temp,
        type: 'scatter',
        
    	itemStyle : {
		normal : {

		color:function(x3,params){
	 var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)'];
          //    return colorList[params.dataIndex];//可循环使用 
          //！！！此处我想写个for循环，当后面的字符串和前面一个不一致时，换颜色
          //从图中可以看到，想让'a','b','c'三组数据显示不同的颜色
        	for(var k = 1; k < x3.length; k++) {
			if(x3[k] != x3[k-1])
			{ return colorList[params.dataIndex];}
		}
	
	
	
		}
			}
		},
    
    }]
};
