option = {
    title: {
        text: '',
    },
    tooltip: {
        
    },
    grid: {
        bottom: '15%'
    },

    xAxis: [{
        type: 'category',
        name: "",
        axisLabel: {
            rotate: -25,
 textStyle: {
                color: "#999999"
            },
        },
        axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#009688',
		            	width:2
		            }
				},
        
        data: ["清华大学","北京理工大学","天津大学","中国人民解放军国防科学技术大学","北京航空航天大学","中国人民解放军总医院","哈尔滨工业大学","武汉大学","华中科技大学","中国科学院自动化研究所"]
    }],
    yAxis: [{
        type: 'value',
        name: "",
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "#999999"
            },
        },
        splitArea:{
							show:true,
						},
						 axisLine:{
               		show:true,
               		lineStyle:{
		            	color:'#009688',
		            	width:2
		            }
				},
    }],
    color: '#009688',
    series: [{
        type: 'bar',
        data: [6,5, 3, 3, 3, 3, 3, 3, 2, 2],
    }]
};