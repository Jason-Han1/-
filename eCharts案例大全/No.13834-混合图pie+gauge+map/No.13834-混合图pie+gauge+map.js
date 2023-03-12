var labelData = [];
for (var i = 0; i < 200; ++i) {
    labelData.push({
        value: 1,
        name:i
    });
}
var dataStyle = { 
    normal: {
        color:'rgba(222,122,34,.6)',
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 500
        ,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var dataStyle2 = { 
    normal: {
        color:'#a68369',
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var dataStyle3 = { 
    normal: {
        color:'#a68369',
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
        borderColor:'#000',
        borderWidth:2
    }
};
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
var uploadedDataURL = "/asset/get/s/data-1469178154210-H1GNZvkO.json";

function randomData() {
	return Math.round(Math.random()*1000);
}
$.get(uploadedDataURL, function(d){
	echarts.registerMap('china', d);
option = {
   backgroundColor: '#000',
  //   color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
 //    color:['rgba(126,106,93,.6)'],
    tooltip : {
        show: false,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    series : [
         {
            name:'转速',
            type:'gauge',
        //    center : ['50%', '60%'],    // 默认全局居中
            radius : '65%',
            min:0,
            max:12,
           startAngle: 120,
        endAngle: -239.999999,
            splitNumber:12,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[1, '#000']],
                    width: 1,
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                distance: -25,
                formatter: function(e) {
                switch (e + "") {
                    case "0":
                        return "1月";
                    case "1":
                        return "2月";
                    case "2":
                        return "3月";
                    case "3":
                        return "4月";
                    case "4":
                        return "5月";
                    case "5":
                        return "6月";
                    case "6":
                        return "7月";
                    case "7":
                        return "8月";
                    case "8":
                        return "9月";
                    case "9":
                        return "10月";
                    case "10":
                        return "11月";
                    case "11":
                        return "12月";
                    case "12":
                        return '';
                    default:
                        return e;
                }
            },
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight:'' ,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10,    
                }
            },
            axisTick: {            // 坐标轴小标记
                length :2,        // 属性length控制线长
               splitNumber:30,
                lineStyle: {       // 属性lineStyle控制线条样式
                     color:'#a68369',
                }
            },
            splitLine: {           // 分隔线
                length :-8,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:1,
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:0,
                shadowColor : '#fff', //默认透明
                shadowBlur: 5
            },
            detail : {  
                   show : false  
               },  
               data:[{value: 400}]  
        },{
        type: 'gauge',
        radius: '61%',
        min:0,
            max:12,
           startAngle: 120,
        endAngle: -239.999999,
            splitNumber:12,
        axisLine: {
            show: false,
            lineStyle: {
                width: 1,
                shadowBlur: 0,
                color: [
                    [1, '#000']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#8f8f8f',
                width: 1
            },
            length: '-3%',
            splitNumber: 50
        },
        splitLine: {
            show: true,
            length: 5,
            lineStyle: {
                color: '#8f8f8f',
            }
        },
        axisLabel: {
            show: false
        },
        detail: {
            show: false
        }
    },{
        type: 'gauge',
        radius: '58%',
   //     min:0,
    //        max:12,
           startAngle: 120,
        endAngle: -239.999999,
            splitNumber:360,
        axisLine: {
            show: false,
            lineStyle: {
                width: 1,
                shadowBlur: 0,
                color: [
                    [1, '#000']
                ]
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            length: 1,
            lineStyle: {
                color: '#fff',
            }
        },
        axisLabel: {
            show: false
        },
        detail: {
            show: false
        }
    } 
       
    ]
};
if (option && typeof option === "object") 
	{
		var startTime = +new Date();
		myChart.setOption(option, true);
		var endTime = +new Date();
		var updateTime = endTime - startTime;
		console.log("Time used:", updateTime);
	}
});