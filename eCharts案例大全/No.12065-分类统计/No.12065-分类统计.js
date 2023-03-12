var hours = ['黄岛街道', '辛安街道', '薛家岛街道', '灵珠山街道', '长江路街道', '红石崖街道', '灵山卫街道', '珠海街道', '隐珠街道', '铁山街道', '滨海街道', '胶南街道', '王台镇', '张家楼镇'];
var days = ['研究生教育', '博士研究生毕业', '硕士研究生毕业', '大学本科教育', '大学专科教育','中等职业教育','职业高中毕业','技工学校毕业','高中以下','其他',];
var data1 = [];


for (var z = 0; z < hours.length; z++) {

    for (var i = 0; i < days.length; i++) {
        data1.push([i, z, 1 + Math.round(Math.random() * 50)]);
    }
}
data1 = data1.map(function(item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    dataZoom: [
	        
	        {
	            id: 'dataZoomY',
	            type: 'slider',
	            yAxisIndex: [0],
				startValue:0,
				endValue:10,
	            filterMode: 'empty'
	        }
	    ],
    tooltip: {
        position: 'top',
        formatter: function(params) {
	            return '学历：' + days[params.value[1]] + '<br/>' + '人数：' + params.data[2];
	        }
    },
    animation: false,
   grid: {
	        left: '3%',
	        right: '8%',
	        bottom: '8%',
	        containLabel: true
	    },
    xAxis: {
	        type: 'category',
	        data: hours,
			axisLine : {
						lineStyle : {
							color : '#000'
						}
					},
					axisLabel: {  
				   interval:0,  
				   rotate:40
				   
				} ,
	        splitArea: {
	            show: true
	        },
	        name: '镇街'
	    },
    yAxis: {
	        type: 'category',
	        data: days,
			axisLine : {
						lineStyle : {
							color : '#000'
						}
					},
					axisLabel: {  
				   interval:0,  
				   rotate:40
				   
				} ,
	        splitArea: {
	            show: true
	        },
	        name: '学历'
	    },
   visualMap: {
	        min: 1,
	        max: 50,
	        calculable: true,
	        orient: 'horizontal',
	        left: 'center',
	        bottom: '1%',
			text: ['50','1'],// 文本，默认为数值文本
	        //color:['#20a0ff','#D2EDFF'],
	        calculable: false,
			color: [
	        '#22DDDD', '#fec42c', '#80F1BE'
	    ]
	    },
    series: [{
	        name: 'Punch Card',
	        type: 'heatmap',
	        data: data1,
	        label: {
	            normal: {
	                show: true
	            }
	        },
	        itemStyle: {
	            emphasis: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(120, 0, 0, 0.5)'
	            }
	        }
	    }]
};