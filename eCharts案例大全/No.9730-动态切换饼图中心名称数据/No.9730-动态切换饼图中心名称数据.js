var color = ["#8D7FEC", "#4E81EC", "#DA5AB8", "#F87BE2", "#FF7CA9"];
	var xdata = ['电网建设', "服务投诉", "供电质量", "停送电投诉", '营业投诉'];
	var ydata = [{
	        name: '电网建设',
	        value: 5
	    },
	    {
	        name: '服务投诉',
	        value: 4
	    },
	    {
	        name: '供电质量',
	        value: 14
	    },
	    {
	        name: '停送电投诉',
	        value: 8
	    },
	    {
	        name: '营业投诉',
	        value: 4
	    }
	];
	option = {
	    color: color,
	    backgroundColor:'#000',
		title:{
	        text:'总数\n300',
	        left:'center',
	        top:'41%',
	        textStyle:{
	            color:'#fff',
	            fontWeight:'normal',
	            fontSize:14
	        }
	    },
	    series: [{
	        name: '投诉类型分布',
	        type: 'pie',
	        itemStyle: {
	            normal: {
	                borderWidth: 2,
	                borderColor: '#0B1832',
	            }
	        },
	        clockwise: false, //饼图的扇区是否是顺时针排布
	        minAngle: 20, //最小的扇区角度（0 ~ 360）
	        radius: ["50%", "75%"],
	        center: ["50%", "45%"],
	        avoidLabelOverlap:false,
	        hoverOffset:7,
	        label: {
	            normal: {
	                show: false,
	                position: 'center',
	                formatter: function(data) { // 设置圆饼图中间文字排版
	                    return   data.name  + "\n{a|" + data.value +'}'  
	                }
	            },
	            emphasis: {
	                show: true, //文字至于中间时，这里需为true
	                textStyle: { //设置文字样式
	                    fontSize: '14',
	                    color: "#fff"
	                },
	                rich:{
	                    a:{
	                        fontSize:14,
	                    }
	                }
	            }
	
	        },
	
	        data: ydata
	    }]
	};
	myChart.dispatchAction({
	    type: 'downplay',
	    seriesIndex: 0,
	    dataIndex: 0
	});
	// 当鼠标移入时，如果不是第一项，则把当前项置为选中，如果是第一项，则设置第一项为当前项
	myChart.on('mouseover', function(e) {
	    myChart.dispatchAction({
	        type: 'downplay',
	        seriesIndex: 0,
	        dataIndex: 0
	    });
	     myChart.setOption({
	         title:{
	             show:false
	         }
	     });
	    if (e.dataIndex != index) {
	        myChart.dispatchAction({
	            type: 'downplay',
	            seriesIndex: 0,
	            dataIndex: index
	        });
	    }
	    if (e.dataIndex == 0) {
	        myChart.dispatchAction({
	            type: 'highlight',
	            seriesIndex: 0,
	            dataIndex: e.dataIndex
	        });
	    }
	});
	
	//当鼠标离开时，把当前项置为选中 
	myChart.on('mouseout', function(e) {
	    index = e.dataIndex;
	    myChart.dispatchAction({
	        type: 'downplay',
	        seriesIndex: 0,
	        dataIndex: e.dataIndex
	    });
	     myChart.setOption({
	         title:{
	             show:true
	         }
	     });
	});