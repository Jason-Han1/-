option = {
  color: ['#4B8BFF', '#974BFF',],
      title: {
	        text: '磁盘占用情况',
	        textStyle: {
	        	 align: 'center',
	            color: '#333333',
	            fontSize: 18,
	        },
	        top: '2%',
	        left: '2%',
	    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        data:['主体数据','中间数据'],
        bottom: 60,
         itemWidth: 20,
        itemHeight: 10,
        itemGap: 160
    },
    series: [
        {
            name:'磁盘占用',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '50%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
          
            data:[
                {value:335, name:'主体数据', selected:true},
                {value:1548, name:'中间数据'}
            ]
        },
    
    ]
};