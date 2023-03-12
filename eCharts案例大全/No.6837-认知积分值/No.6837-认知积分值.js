//负数的柱子，圆头朝下的样例见本人其他作品
var data1=[2000,2400,2600,3000]
var data2=[100,50,150,200]
var data3=[50,150,200,100]
var data4=[150,200,100,50]
var data5=[200,100,50,150]
option = {
    backgroundColor: '#fff',
    title:{
        text:'中考认知指数图谱',
        left:'center',
        top:'30'
    },
    
    grid: {
        top: '15%',
        right: '10%',
        left: '10%',
        bottom: '32%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
        formatter:function(params){
            console.log(params)
            var nText = []
            for(var i=1;i<params.length;i++){
                if(params[i].data >= 0){
                    nText.push('增加')
                }else{
                    nText.push('减少')
                }
            }
            return params[0].axisValue+'：'+params[0].data+'<br />第一周'+nText[0]+'：'+params[1].data+'<br />第二周'+nText[1]+'：'+params[2].data+'<br />第三周'+nText[2]+'：'+params[3].data+'<br />第四周'+nText[3]+'：'+params[4].data;
        }
    },
    xAxis: [{
        type: 'category',
        color: '#59588D',
        data: ['一月', '二月', '三月', '四月'],
        axisLabel: {
            margin: 20,
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        name:'分数',
        nameTextStyle:{
              fontSize:20,
              color:'#333'
        },
        axisLabel: {
            formatter: '{value}',
            color: '#999',
            textStyle: {
                fontSize: 18
            },
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(107,107,107,0.37)',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(131,101,101,0.2)',
                type: 'dashed',
            }
        }
    }],
    series: [{
        type: 'bar',
        data: data1,
        itemStyle: {
            normal: {
                color: '#ff622b',
                barBorderRadius: [0, 0, 0, 0]
            },
        },
        label: {
            normal: {
                show: true,
                fontSize: 18,
                color: '#333',
                position: 'top',
            }
        }
    },{
        type:'bar',
        data:data2,
        itemStyle:{
          normal:{
              color:'#009900'
          }  
        },
        label: {
            normal: {
                show: true,
                fontSize: 12,
                color: '#333',
                position: 'top',
            }
        }
    },{
        type:'bar',
        data:data3,
        itemStyle:{
          normal:{
              color:'#1A92FF'
          }  
        },
        label: {
            normal: {
                show: true,
                fontSize: 12,
                color: '#333',
                position: 'top',
            }
        }
    },{
        type:'bar',
        data:data4,
        itemStyle:{
          normal:{
              color:'#FF9A22'
          }  
        },
        label: {
            normal: {
                show: true,
                fontSize: 12,
                color: '#333',
                position: 'top',
            }
        }
    },{
        type:'bar',
        data:data5,
        itemStyle:{
          normal:{
              color:'#009900'
          }  
        },
        label: {
            normal: {
                show: true,
                fontSize: 12,
                color: '#333',
                position: 'top',
            }
        }
    }
]
};