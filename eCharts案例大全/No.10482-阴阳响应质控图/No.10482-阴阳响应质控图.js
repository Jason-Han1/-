option = {
	tooltip:{
		formatter:function(params){
			
		}
	},
    xAxis: [{
    		name:'阴性质控品',
    		nameLocation:'start',
    		nameTextStyle:{
    		  color:'#87b6e7'  
    		},
            type: 'value',
            min:-6,
            max:6,
            axisLabel:{
                formatter:function(value,index){
                    // return Math.abs(value)
                    return value
                },
                 margin:-150,
                align:'left',
                interval:true
            },
            axisTick:{
              show:false,  
              alignWithLabel:true
            },
            scale:true,
            axisLine:{
                onZero:true,
                lineStyle:{
			//     color:'#f00'
                } 
            },
            position:'center',
            data:[
                    {
                        value:-6,
                    },
                    {
                        value:-5,
                    },
                    {
                        value:-4,
                    },
                    {
                        value:-3,
                    },
                    {
                        value:-2,
                    },
                    {
                        value:-1,
                    },
                    {
                        value:0,
                    }
                    ,
                    {
                        value:1,
                    },
                    {
                        value:2,
                    },
                    {
                        value:3,
                    }
                ]
        },{//用于显示区域名称
            name:'假阳性响应区',
            type: 'value',
            nameGap:-80,
            offset:-10,
            nameLocation:'end',
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#0ff'
                }
            }
        },{//用于显示区域名称
            name:'假阳性假阴性响应区',
            type: 'value',
            nameGap:-115,
            offset:-10,
            position:'bottom',
            nameLocation:'end',
            axisLine:{
                show:false
            }
        },
        {//用于显示区域名称
            name:'假阴性响应区',
            type: 'value',
            nameGap:-80,
            offset:-10,
            position:'bottom',
            nameLocation:'start',
            axisLine:{
                show:false
            }
        },
        {//用于显示区域名称
            name:'在控区',
            type: 'value',
            nameGap:-40,
            offset:-10,
            position:'top',
            nameLocation:'start',
            axisLine:{
                show:false
            }
        }],
    yAxis: {
            name:'阳性质控品',
            nameTextStyle:{
    		  color:'#ee9eff'  
    		},
            type: 'value',
            min:-6,
            max:6,
            axisLabel:{
                formatter:function(value,index){
                    if(value === 0){
                        return ''
                    }
                    return Math.abs(value)
                    return Math.abs(value)
                },
                 margin:-195
            },
             axisTick:{
              show:false
            },
            scale:true,
            axisLine:{
                onZero:true
            }
        },
    series: [{
        xAxisIndex:0,
        yAxisIndex:0,
        symbolSize: 20,
       data: [[-1,1,3,4],
          [2,2,5,6],
          [-3,-3,3,4],
          [4,-4,6,7]],
          /* data: [
          {
            "date": "2019-07-15",
            "name": '-1',
            "createUser": null,
            "time": "12:00:00",
            "value": 1
          },
          {
            "date": "2019-08-15",
            "name": 2,
            "createUser": null,
            "time": "04:08:20",
            "value": 2
          },
          {
            "date": "2019-08-15",
            "name": 2,
            "createUser": null,
            "time": "04:08:20",
            "value": 2
          }
        ],*/
        itemStyle:{
          color:function(params){
              console.log(params)
              if(params.value[0]>0 && params.value[01]>0){
                  return '#facd89'
              }else if(params.value[0]<0 && params.value[01]>0){
                  return '#1dae91'
              }else if(params.value[0]<0 && params.value[01]<0){
                  return '#87b6e7'
              }else if(params.value[0]>0 && params.value[01]<0){
                  return '#ff8686'
              }
          }  
        },
        type: 'scatter',
        tooltip:{
        	formatter:function(params){
        	    console.log(params)
        		var tipTxt = '次数:'+params.data[0] + '<br>'+
						'上报时间:'+params.data[2] + '<br>'+
						'上报人:'+params.data[4] + '<br>'
				return tipTxt;
        	}
        }
    }]
}