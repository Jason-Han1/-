app.title = '嵌套环形图';
var placeHolderStyle = {
    normal : {
        color: 'rgba(0,0,0,0)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};

option = {
    tooltip: {
        trigger: 'item',
        formatter:function(obj){
	        	console.log(obj);
	        	if(obj.name=='invisible'){
	        		return null;
	        	}					
				else{
					
					return  obj.seriesName+"<br/>"+obj.name+": "+obj.value+" ("+obj.percent*2+"%)";
				}
	    },
    },
    legend: {
        top:'4%',
        data:['线上渠道','线下渠道']
    },
    series: [
        {
            name:'渠道分类',
            color: ['#86D560', '#AF89D6'],
            type:'pie',
            selectedMode: 'single',
            center:['50%','55%'],
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'线上渠道', selected:true},
                {value:679, name:'线下渠道'}
    
            ]
        },
        {
            clockWise:false,
            name:'线上渠道',
            color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
            type:'pie',
            startAngle:'80',
            radius: ['55%', '75%'],
            center : ['45%', '50%'],
            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
               {value:879, name:'invisible', itemStyle : placeHolderStyle},
            ]
        },
        {
            name:'线下渠道',
            color: ['#AF89D6', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],
            type:'pie',
            startAngle:'100',
            radius: ['55%', '75%'],
           center : ['55%', '50%'],
            data:[
                {value:335, name:'直达'},
                {value:335, name:'invisible', itemStyle : placeHolderStyle},
                
            ]
        }
    ]
};