option = {
    xAxis: {
        type: 'category',
        data:['杭州', '湖州', '苏州', '大理', '厦门', '丽江', '黄山', '北京', '上海', '广州'],
       
        
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data:['1843', '1416', '592', '495', '475', '448', '405', '331', '324', '312'],
         

        type: 'bar',
        itemStyle: {
					normal: {
						label: {
							show: true, //开启显示
							position: 'top', //在上方显示
							textStyle: { //数值样式
								color: 'black',
								fontSize: 16
							}
						}
					}
        }

    }]
};
