option = {
                backgroundColor: '#FFFFFF',  
                tooltip : {  
                    trigger: 'item',
                    backgroundColor:'rgba(255,255,255,0)',
                    formatter:function(params){
                        var result = params;
                        result  = `<div style='width: 120px;font-size:12px;box-shadow:0 4px 12px rgba(0,0,0,.2);color:#000;background: #fff;border-radius: 4px;z-index: 9;'>
                            <div style='padding:8px 10px;border-bottom:1px solid #eee;'>${result.name}</div>
                            <div style='padding:8px 10px;color:#808492;'><i style='display:inline-block;width:6px;height:6px;background:#396fff;border-radius:50%; 
                                margin-right:5px; '></i>${result.seriesName}  ${result.value}</div>
                        </div>`;
                        if(params.value>0){
                            return result
                        }else{
                            return
                        }
                        
                    }
                },  
                visualMap: {  
                    min: 1,
                    max: 800,
                    itemWidth:10,
                    itemHeight:60,
                    borderColor:'#fff',
                    hoverLink:false,
                    show:true,
                    orient: 'horizontal',
                    inverse:true,
                    calculable: false,
                    realtime: false,
                    text:['高','低'], 
                    inRange: {
                        color: ['#eaefff','#4979fe']
                    }
                },
                //配置属性
                series: [{  
                    name: '数据',  
                    type: 'map',  
                    mapType: 'china',   
                    roam: false,  
                    zoom: 1,
                    itemStyle:{
                        normal:{
                            label:{show:false},
                            borderColor:'#fff',
                            borderWidth:1,
                            borderType:'solid',
                        },
                        emphasis:{label:{show:false},
                        areaColor:'#396fff'}
                    },
                    data:[  
                        {name: '北京',value: 100 },{name: '天津',value: 352 },  
                        {name: '上海',value: 521 },{name: '重庆',value: 252 },  
                        {name: '河北',value: 12 },{name: '河南',value: 152 },  
                        {name: '云南',value: 452 },{name: '辽宁',value: 252 },  
                        {name: '黑龙江',value: 0 },{name: '湖南',value: 222 },  
                        {name: '安徽',value: 52 },{name: '山东',value: 32 },  
                        {name: '新疆',value: 0 },{name: '江苏',value: 60 },  
                        {name: '浙江',value: 600 },{name: '江西',value: 599 },  
                        {name: '湖北',value: 400 },{name: '广西',value: 335 },  
                        {name: '甘肃',value: 400 },{name: '山西',value: 542 },  
                        {name: '内蒙古',value: 0 },{name: '陕西',value: 235 },  
                        {name: '吉林',value: 351 },{name: '福建',value: 111 },  
                        {name: '贵州',value: 420 },{name: '广东',value: 120 },  
                        {name: '青海',value: 456 },{name: '西藏',value: 130 },  
                        {name: '四川',value: 123 },{name: '宁夏',value: 140 },  
                        {name: '海南',value: 452 },{name: '台湾',value: 150 },  
                        {name: '香港',value: 543 },{name: '澳门',value: 200 }  
                    ]
                }]  
            };