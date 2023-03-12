option = {
    title: {
        text: 'Awesome Chart'
    },
    legend:{
        data:['legend1','legend2']
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
    },
    series: [{
        type: 'line',
        name:'legend1',
        data:[125, 112, 56, 316, 205, 190, 188],
        lineStyle:{
			normal:{
				color:'#FF6600',//颜色
				//width: 15,//线宽
				type: 'solid',//线型
				opacity:10//透明度0～10,0不显示
			}
		},
		itemStyle:{
		    normal:{
		        //borderWidth:4,
                color:'#fffff'
            },//
            emphasis:{
                color:'#FFF',
                borderWidth: 30,
            }//鼠标悬停样式
		},
        smooth:true
    },{
        type:'line',
        name:'legend2',
        smooth:true,
        data:[211, 188, 159, 88, 288, 159, 222],
        markLine:{
            lineStyle:{
                    normal:{
                        type: 'solid',
                        color:'#ff9900'
                    },
                    emphasis:{
                        type: 'solid',
                        color:'#fff'
                    }
            }
        }
    }]
};