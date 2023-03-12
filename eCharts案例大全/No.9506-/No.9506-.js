var data = [10,20, 30, 40, 50]
var titlename = ['太原市民政局', '太原市运输局', '太原市残联', '太原市报社', '太原市司法局'];
var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
var num=['55','66','77','88','99'];
option = {
  tooltip:{
    show:true
},
    xAxis: {
        show: false
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#000',
            align:"left",
            margin:110,
            formatter: (value,index) => {
			        	var val="";
			        	if(value.length>10){
			                val=value.substring(0,10)+"..."
						}else{
			                val=value;
						}
						switch (index) {
							case 0:
			                    return `{lg0|${index+1}}   ${value}`;
			                    break;
							case 1:
			                    return `{lg1|${index+1}}  ${value}`  ;
			                    break;
							case 2:
			                    return `{lg2|${index+1}}   ${value} `
			                    break;
			                case 3:
			                    return `{lg3|${index+1}} ${value} ` 
			                    break;
			                case 4:
			                    return `{lg4|${index+1}} ${value} `
			                    break;
			            }
			        },
            rich: {
			            lg0: {
			                color: '#fff',
			                backgroundColor : '#c03933',
			                lineHeight : 10,
			                borderRadius : 5,
			                padding : [ 3, 4 ]
			            },
			            lg1: {
			                color: '#fff',
			                backgroundColor: '#446761',
			                lineHeight : 10,
			                borderRadius : 5,
			                padding : [ 3, 4 ]
			            },
			            lg2: {
			                backgroundColor: '#cf6712',
			                color: '#fff',
			                lineHeight : 10,
			                borderRadius : 5,
			                padding : [ 3, 4 ]
			            },
			            lg3: {
			                backgroundColor: '#238af1',
			                color: '#fff',
			                lineHeight : 10,
			                borderRadius : 5,
			                padding : [ 3, 4 ]
			            },
			            lg4: {
			                backgroundColor: '#6ab4e5',
			                color: '#fff',
			                lineHeight : 10,
			                borderRadius : 5,
			                padding : [ 3, 4 ]
			            },
			        }
        },


    }, {
        show: true,
        inverse: true,
        data: titlename,
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#fff',
            },
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    series: [{
                name: '条',
                yAxisIndex: 0,
                z:3,
                type: 'bar',
                data: data,
                barWidth: "40%",
                itemStyle: {
                    normal: {
                        barBorderRadius: 15,
                        color:"rgba(129,186,229,1)" //"#bddbfd"
                    },
                },
    }, {
               name: '框',
                z:2,
                type: 'bar',
                yAxisIndex: 1,
                data: [100,100,100,100,100],
                barWidth: "40%",
                itemStyle: {
                    normal: {
                        barBorderRadius: 15,
                        color:"#25476d"
                    }
                },
    }, 
     {
                name: '背景',
                z:1,
                type: 'bar',
                label:{
                    show:true,
                    position:"right",
                    color:"#333"
                },
                yAxisIndex: 1,
                barGap:"-100%",
                data: [100,100,100,100,100],
                barWidth: "40%",
                itemStyle: {
                    normal: {
                        barBorderRadius: 15,
                        color:"#fff"
                    }
                },
    }]
};