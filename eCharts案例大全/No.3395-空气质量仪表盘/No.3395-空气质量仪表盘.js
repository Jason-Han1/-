var  colors = ['#00E400','#EDC24A','#FF7E00','#FF0000','#990000','7E0000'];
var  texts = ['优','良','轻度','中度','重度','严重'];
function getIdx(value){
     var p = value / 10,idx=0;
    if(p>0&&p<=50){
        idx=1;
    }else if(p>50&&p<=100){
        idx=2;
    }else if(p>150&&p<=200){
        idx=3;
    }else if(p>250&&p<=300){
        idx=4;
    }else if(p>300){
        idx=5;
    }
    return idx;
}
function getColor(value){
    return colors[getIdx(value)];
}
option = {
	tooltip: {
		formatter: '{a} : {c}'
	},
	series: [
		{
			name: '大气AQI指数',
			type: 'gauge',
			detail: {
				formatter: function(data){
					return data*30
				},
				fontSize:15,
				fontWeight:'bold'
			},
			data: [{value:  100/30, name:'良'}],
			min:0,
			max:10,
			title:{
				offsetCenter:[0,'-30%'],
				fontSize:12,
				color:getColor(0)
			},
			axisLine:{
				lineStyle:{
					width:10,
					color:[[0.166,colors[0]],[0.333,colors[1]],[0.5,colors[2]],[0.666,colors[3]],[0.833,colors[4]],[1,colors[5]]]
				}
			},
			axisTick:{
			    lineStyle: {
                    color: "#000",
                    //width: 1,
                    // length:10
                },
			},
			pointer:{
			    width:2
			},
			axisLabel:{
				show:false,
				fontSize:8,
				lineStyle:{
					color:'#000'
				},
				fontWeight:'bold'
			},
			splitLine:{
				show:false,
			}
		}
	],
};