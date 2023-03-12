option = {
    title: {
      
    },
    tooltip: {
    	formatter:(params)=>{
    		if(params.dataType=='node'){
    			if(params.name=='底部数据'){
    				return params.data.name1+'&nbsp;'+params.data.value1+'<br>DOD: '+params.data.dod+'%<br>WOW: '+params.data.wow+'%<br>'+params.data.name2+': '+params.data.value2+'%'
    			}else{
    				return params.data.name1+'&nbsp;'+params.data.value+'<br>DOD:'+params.data.dod+'%<br>WOW:'+params.data.wow+'%'
    			}
    		}
    		if(params.dataType=='edge'){
    			return '转化率:'+params.data.data+'%'
    		}
    	}
    },
    series : [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: [70,40],
            left:'2%',
            right:'2%',
            top:'5%',
            bottom:'5%',
            roam: false,
            label: {
                normal: {
                    show: true,
                    color:'black',
                    fontSize:10,
                    formatter:(params)=>{
                        if(params.name=='底部数据'){
                            return params.data.name1+' '+params.data.value1+'    '+params.data.name2+' '+params.data.value2+'%'
                        }else{
                            return params.data.name1+' '+params.value
                        }
                        
                    }
                }
            },
            
            data: [
                {
                name: '左边定点',
                symbol:'none',
                x: 95,
                y: 150
            }, {
                name: '左边定点1',
                symbol:'none',
                x: 10,
                y: 150
            }, {
                name: '顶部定点',
                symbol:'none',
                x: 570,
                y: 75
            }, {
                name: '右边定点',
                symbol:'none',
                x: 900,
                y: 150
            },
             {
                name: '底部定点',
                symbol:'none',
                x: 570,
                y: 540
            },
                {
                name: '节点1',
                name1:'首页',
                value:'1,000',
                symbolSize:[400,15],
                symbol:'rect',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#5E9CD3',
                    },
                x: 570,
                y: 75
            }, {
                name: '首页1',
                symbol:'none',
                x: 270,
                y: 90
            }, {
                name: '首页2',
                 symbol:'none',
                x: 570,
                y: 90
            },  {
                name: '首页3',
                symbol:'none',
                x: 850,
                y: 90
            },{
                name: '节点2',
                symbol:'none',
                x: 750,
                y: 150
            }, {
                name: '节点3',
                symbol:'none',
                x: 570,
                y: 75
            }, {
                name: '节点4',
                symbol:'none',
                x: 570,
                y: 540
            },
             {
                name: '常买',
                name1:'常买',
                value:'2,000',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#00B0F0',
                    },
                symbolSize:[75,15],
                symbol:'rect',
                x: 270,
                y: 200
            },
            {
                name: '常买1',
               symbol:'none',
                x: 270,
                y: 190
            },
            {
                name: '常买2',
               symbol:'none',
                x: 220,
                y: 188
            },
             {
                name: '常看',
                name1:'常看',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#00B0F0',
                    },
                value:'2,000',
                 symbolSize:[75,15],
                symbol:'rect',
                x: 570,
                y: 200
            },
             {
                name: '常看1',
               symbol:'none',
                x: 570,
                y: 190
            },
            {
                name: '常看2',
               symbol:'none',
                x: 510,
                y: 188
            },
             {
                name: '热销',
                name1:'热销',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#00B0F0',
                    },
                value:'2,000',
                 symbolSize:[75,15],
                symbol:'rect',
                x: 850,
                y: 200
            },
             {
                name: '热销1',
               symbol:'none',
                x: 850,
                y: 190
            },
            {
                name: '热销2',
               symbol:'none',
                x: 790,
                y: 188
            },
            {
                name: '商详1',
                name1:'商详',
                value:'2,000',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#92D050',
                    },
                symbolSize:[75,15],
                symbol:'rect',
                x: 270,
                y: 330
            },
            {
                name: '商详11',
                symbol:'none',
                x: 270,
                y: 330
            },
             {
                name: '商详15',
                symbol:'none',
                x: 570,
                y: 330
            },
             {
                name: '商详13',
                symbol:'none',
                x: 850,
                y: 330
            },
            {
                name: '常买列表加车',
                name1:'常买列表加车',
                value:'23,455',
                itemStyle:{
                    borderColor:'#FBE5D6',
                    color:'#FBE5D6',
                    },
                symbolSize:[75,15],
                label: {
                normal: {
                    show: true,
                    color:'black',
                    fontSize:10,
                    formatter:(params)=>{
                  
                            return params.data.name1
                        
                    }
                }
            },
                symbol:'roundRect',
                x: 75,
                y: 330
            },
            {
                name: '常买列表加车1',
                symbol:'none',
                x: 65,
                y: 330
            },
             {
                name: '商详2',
                name1:'商详',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#92D050',
                    },
                value:'2,000',
                 symbolSize:[75,15],
                symbol:'rect',
                x: 570,
                y: 330
            },
            {
                name: '常看列表加车',
                name1:'常看列表加车',
                value:'22354',
                itemStyle:{
                    borderColor:'#FBE5D6',
                    color:'#FBE5D6',
                    },
                symbolSize:[75,15],
                label: {
                normal: {
                    show: true,
                    color:'black',
                    fontSize:10,
                    formatter:(params)=>{
                  
                            return params.data.name1
                        
                    }
                }
            },
                symbol:'roundRect',
                x: 415,
                y: 330
            },
            {
                name: '常看列表加车1',
                symbol:'none',
                x: 405,
                y: 330
            },
            {
                name: '热销列表加车',
                name1:'热销列表加车',
                value:'4356',
                itemStyle:{
                    borderColor:'#FBE5D6',
                    color:'#FBE5D6',
                    },
                symbolSize:[75,15],
                label: {
                normal: {
                    show: true,
                    color:'black',
                    fontSize:10,
                    formatter:(params)=>{
                  
                            return params.data.name1
                        
                    }
                }
            },
                symbol:'roundRect',
                x: 715,
                y: 330
            },
            {
                name: '热销列表加车1',
                symbol:'none',
                x: 705,
                y: 330
            },
             {
                name: '商详3',
                name1:'商详',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#92D050',
                    },
                value:'1,215,000',
                 symbolSize:[75,15],
                symbol:'rect',
                x: 850,
                y: 330
            },
            {
                name: '加车1',
                name1:'加车',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#FFE699',
                    },
                value:'2,000',
                symbolSize:[75,15],
                symbol:'rect',
                x: 270,
                y: 450
            },
             {
                name: '加车11',
                symbol:'none',
                x: 270,
                y: 450
            },
            {
                name: '加车15',
                symbol:'none',
                x: 570,
                y: 450
            },
            {
                name: '加车13',
                symbol:'none',
                x: 850,
                y: 450
            },
             {
                name: '加车2',
              itemStyle:{
                    borderColor:'#fff',
                    color:'#FFE699',
                    },
                name1:'加车',
                value:'2,000',
                id:'加车2',
                 symbolSize:[75,15],
                symbol:'rect',
                x: 570,
                y:450
            },
             {
                name: '加车3',
                name1:'加车',
                itemStyle:{
                    borderColor:'#fff',
                    color:'#FFE699',
                    },
                value:'2,000',
                 symbolSize:[75,15],
                symbol:'rect',
                x: 850,
                y: 450
            },
             {
                name: '底部数据',
                name1:'常购清单订单数',
                value1:'2,000',
                name2:'总订单转化率',
                value2:'5',
                symbolSize:[400,15],
                symbol:'rect',
                itemStyle:{
                  borderColor:'#fff',
                  color:'#FBE5D6',
                      },
                x: 570,
                y: 540
            },
             {
                name: '底部数据1',
               symbol:'none',
                x: 270,
                y: 580
            },
            {
                name: '底部数据11',
               symbol:'none',
                x: 260,
                y: 570
            },
             {
                name: '底部数据2',
               symbol:'none',
                x: 570,
                y: 580
            },
            {
                name: '底部数据12',
               symbol:'none',
                x: 560,
                y: 570
            },
             {
                name: '底部数据3',
               symbol:'none',
                x: 850,
                y: 580
            },
            {
                name: '底部数据13',
               symbol:'none',
                x: 840,
                y: 570
            },
            
            ],
            // links: [],
            links: [{
                source: '首页1',
                 data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#5E9CD3',
                },
                 label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '常买'
            },
            {
                source: '首页2',
                 data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#5E9CD3',
                },
                 label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                         
                            return params.data.data
                        }
                    }
                },
                target: '常看'
            }, 
            {
                source: '首页3',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#5E9CD3',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '热销'
            }, 
            {
                source: '常买1',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '商详1'
            }, 
            {
                source: '常买2',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '常买列表加车'
            }, 
            {
                source: '常买列表加车1',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '底部数据11'
            }, 
            {
                source: '常看1',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '商详2'
            }, 
            {
                source: '常看2',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '常看列表加车'
            }, 
            {
                source: '常看列表加车1',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '底部数据12'
            }, 
            {
                source: '热销1',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '商详3'
            }, 
            {
                source: '热销2',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '热销列表加车'
            }, 
            {
                source: '热销列表加车1',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#00B0F0',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '底部数据13'
            }, 
            {
                source: '商详11',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#92D050',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '加车1'
            }, 
            {
                source: '商详15',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#92D050',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '加车2'
            }, 
            {
                source: '商详13',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#92D050',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '加车3'
            }, 
            {
                source: '加车11',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#FFE699',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:8,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '底部数据1'
            }, 
            {
                source: '加车15',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#FFE699',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '底部数据2'
            }, 
            {
                source: '加车13',
                data:'45.45%',
                symbol:['','arrow'],
                lineStyle:{
                    color:'#FFE699',
                },
                label: {
                    normal: {
                        show: true,
                        color:'black',
                        fontSize:7,
                        formatter:(params)=>{
                           
                            return params.data.data
                        }
                    }
                },
                target: '底部数据3'
            }, 
           ],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            }
        }
    ]
};