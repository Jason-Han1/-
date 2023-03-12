option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        //left: 'left',
         x: '50%',
        align:'left',
        top:'middle',
        	        formatter:function(name){
	        	var oa = option.series[0].data;
	        	var num = oa[0].value + oa[1].value + oa[2].value;
	        	for(var i = 0; i < option.series[0].data.length; i++){
                    if(name==oa[i].name){
                    	return name + ': ' + (oa[i].value/num * 100).toFixed(2) + '%'  + '（' +oa[i].value+ '）';
                    }
	        	}
	        },
	    icon:'circle',
	    padding: 5,
        itemGap: 50,               // 各个item之间的间隔，单位px，默认为10， // 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 20,             // 图例图形宽度
        itemHeight: 14,            // 图例图形高度
        textStyle: {
            // padding:[0,0,50,0],
            fontSize:25,
            color: '#000'
        },
        data: ['直接访问','邮件营销','联盟广告']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '50%',
            center: ['25%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
            ],
            
            label: {
            normal: {
                show:false,
                
            }}
        }
    ]
};
