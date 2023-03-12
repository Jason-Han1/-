option = {
    backgroundColor:"#fff",
    dataset: {
        source: [
            ["value", "首笔土地类资金流出10%", "首次开盘", "回款30%", "现金流回正", "销售95%", "梭备", "结利", "交房"],
            ["首开奖", null, 3, 0, 0, 0, null, null, null],
            ["周转奖", null, null, 200000, 200000, 500000, null, null, null],
            ["利润奖", null, null, 100000, 100000, null, null, null, null],
            ["目前节点", 201810, 201811, 201812, 201901, 201810, 201904, 201905, 201906],
            ["与预计偏差", null, -1, 1, 0, null, 1, null, null],
            ["启动会节点", 201810, 201812, 201811, 201901, 201903, 201903, 201905, 201906]
        ]
    },
    series: {
        "type": "custom",
        "coordinateSystem": "none",
        "seriesLayoutBy": "row",
        "label": {
            "show":true,
            "formatter": function(arg) {
                return arg.value[0]
            }
        },
        "renderItem": function a(params, api) {
            var left = 100,right=20,bp=50,diff=api.value(5)>0;
            var style = api.style(),
                cw = api.getWidth(),
                ch = api.getHeight(),
                w = (cw-left-right)/8,
                text = style.text,
                v = api.value(1),
                index = params.dataIndex,
                date = new Date(),
                now = date.getFullYear()*100+date.getMonth()+1,
                before = now-api.value(4)>0;
                if(params.context.now==1){
                    params.context.now=2
                }else if(before){
                    params.context.now = 0;
                }else if(params.context.now!=2){
                    params.context.now = 1;
                }
                console.log(params.context.now);
            var result={
                type:'group',
                position:[left+w*index+w/2,ch*2/5],
                children:[
                    {
                        type:'text',
                        style:{
                            text:text,
                            fill:params.context.now==0?'#999':'#333',
                            textAlign:'center',
                            textVerticalAlign:'middle'
                        },
                        position:[0,-30]
                    },{
                        type:'text',
                        style:{
                            text:api.value(4)?(api.value(4).toString().substring(0,4)+'.'+api.value(4).toString().substring(4,6)):'',
                            fill:params.context.now==0?'#999':'#2872eb',
                            textAlign:'center',
                            textVerticalAlign:'middle'
                        },
                        position:[0,30]
                    },{
                        type:'line',
                        style:{
                            stroke:params.context.now==0?'#e3eaf6':'#2872eb',
                            lineWidth:2
                        },
                        styleEmphasis:{
                            stroke:params.context.now==0?'#e3eaf6':'#2872eb'
                        },
                        shape:{
                            x1:-w/2,x2:w/2,y1:0,y2:0
                        }
                    },{
                        type:'ring',
                        style:{
                            fill:'#fff',
                        },
                        shape:{
                            r:8,r0:0
                        }
                    },{
                        type:'ring',
                        style:{
                            fill:params.context.now==0?'#e3eaf6':'#2872eb',
                        },
                        styleEmphasis:{
                            fill:params.context.now==0?'#e3eaf6':'#2872eb'
                        },
                        shape:{
                            r:8,r0:params.context.now==0?6:0
                        }
                    }]
            }
            if(api.value(1)||api.value(2)||api.value(3)){
                var t1='';
                if(api.value(1)){
                    t1='奖\n';
                    for(var i=0;i<api.value(1);i++){
                        t1+='★'
                    }
                }else{
                    if(api.value(2)){
                        t1+='周转奖'+Math.round(api.value(2)/10000)+'万';
                        if(api.value(3)){
                            t1+='\n';
                        }
                    }
                    if(api.value(3)){
                        t1+='利润奖'+Math.round(api.value(3)/10000)+'万';
                    }
                }
                var obj = {
                    type:'rect',
                    shape:{
                        x:-50,y:-30,width:100,height:50
                    },
                    style:{
                        text:t1,
                        fill:params.context.now==0?'#fff':'#2872eb',
                        textFill:params.context.now==0?'#333':'#fff',
                        shadowBlur:10,
                        shadowColor:'rgba(0,0,0,.2)'
                    },
                    position:[0,-ch/5-15]
                };
                result.children.push(obj);
            }
            if(api.value(5)){
                result.children.push({
                    type: 'polygon',
                    shape: {
                        points: params.context.now==0?[
                            [-50, -15],
                            [40,-15],
                            [50,0],
                            [40,15],
                            [-50,15],
                            [-40,0]
                        ]:[
                            [-55, -15],
                            [45,-15],
                            [55,0],
                            [45,15],
                            [-55,15],
                            [-45,0]
                        ]
                    },
                    style: {
                        text:(params.context.now==0?'':'预计')+(diff?'延迟':'提前')+Math.abs(api.value(5))+'个月',
                        stroke:diff?'#ff9498':'#16c3ca',
                        textFill:diff?'#ff9498':'#16c3ca',
                        fill:'#fff'
                    },
                    position:[0,ch/5+15]
                })
            }
            if(api.value(6)){
                result.children.push({
                    type: 'polygon',
                    shape: {
                        points: [
                            [-50, -15],
                            [40,-15],
                            [50,0],
                            [40,15],
                            [-50,15],
                            [-40,0]
                        ]
                    },
                    style: {
                        text:api.value(6).toString().substring(0,4)+'.'+api.value(6).toString().substring(4,6),
                        stroke:'#999',
                        textFill:'#999',
                        fill:'#fff'
                    },
                    position:[0,ch*2/5+15]
                })
            }
            if(params.context.now==1){
                result.children.push({
                    type:'group',
                    position:[-w/2,0],
                    children:[{
                        type:'text',
                        style:{
                            text:'▼',
                            fill:'#2872eb',
                            textAlign:'center',
                            textVerticalAlign:'bottom'
                        },
                        position:[0,-10]
                    },{
                        type:'text',
                        style:{
                            text:'现在',
                            fill:'#2872eb',
                            textAlign:'center',
                            textVerticalAlign:'top'
                        },
                        position:[0,10]
                    }]
                })
            }
            if(index==0){
                result.children.push({
                    type:'group',
                    position:[-w/2-20,0],
                    children:[{
                        type:'text',
                        style:{
                            text:'目前节点',
                            fill:'#999',
                            textAlign:'right',
                            textVerticalAlign:'middle'
                        },
                        position:[0,0]
                    },{
                        type:'text',
                        style:{
                            text:'与预计偏差',
                            fill:'#999',
                            textAlign:'right',
                            textVerticalAlign:'middle'
                        },
                        position:[0,ch/5+15]
                    },{
                        type:'text',
                        style:{
                            text:'启动会节点',
                            fill:'#999',
                            textAlign:'right',
                            textVerticalAlign:'middle'
                        },
                        position:[0,ch*2/5+15]
                    }]
                })
            }
            return result;
        }
    }
};



// option = {
//     backgroundColor:"#f7f9fd",
//     // title:{
//     //     show:true,
//     //     text:'项目考核节点预告{a|(未来半年)}',
//     //     textStyle:{
//     //         color:'#3677eb',
//     //         rich:{
//     //             a:{
//     //                 fontSize:14,
//     //                 fontWeight:'bold',
//     //             }
//     //         }
//     //     },
//     //     textAlign:'center',
//     //     textVerticalAlign:'middle',
//     //     left:'50%',
//     //     top:'10%',
        
        
//     // },
//     dataset:{
//         source:[
//             ["V","月度运维时间节点"],
//             ["春森彼岸_回款30%节点","2015-01-04"],
//             ["春森彼岸2_回款30%节点","2015-01-03"],
//             ["春森彼岸3_回款30%节点","2015-01-02"],
//         ]
//     },
//     "tooltip": {
//         "show": false
//     },
//     "series":{
//             "type": "custom",
//             "coordinateSystem": "none",
//             "renderItem":function(params, api) {
//                 var ih=50,count=3;
//                 var style = api.style(),cw = api.getWidth(),ch = api.getHeight(),index = params.dataIndex+1;
//                 var mh=ih*(count+1),sy=(ch-mh)/2;
                
//                 var text = style.text.split('_')[0]+style.text.split('_')[1]+'节点：'+api.value(1);
//                 var item = {
//                         type: 'group',
//                         position:[0,sy],
//                         children: [{
//                             type: 'text',
//                             style: {
//                                 // fill: '#747475',
//                                 textFill:'#747475',
//                                 textVerticalAlign:'middle',
//                                 fontSize:16,
//                                 text:'{a|●}'+text,
//                                 rich:{
//                                     a:{
//                                         fontSize:14,
//                                         fontWeight:'bold',
//                                         textFill:'#3677eb'
//                                     }
//                                 }
//                             },
//                             styleEmphasis:{
//                                 fill: '#f6f8fc'
//                             },
//                             position:[cw/2-150,(index+0.5)*ih]
//                         }]
//                     }
//                 if(index==1){
//                     item.children.unshift({
//                         type: 'text',
//                         style: {
//                             textAlign:'center',
//                             textFill:'#3677eb',
//                             textVerticalAlign:'bottom',
//                             fontSize:20,
//                             text:'项目考核节点预告{a|(未来半年)}',
//                             rich:{
//                                 a:{
//                                     fontSize:16,
//                                     fontWeight:'bold',
//                                 }
//                             }
//                         },
//                         styleEmphasis:{
//                             fill: '#f6f8fc'
//                         },
//                         position:[cw/2,ih/2]
//                     })
//                 }    
//                 return item;
//             },
//             json:"function render(params, api) {\n                var ih=50,count=3;\n                var style = api.style(),cw = api.getWidth(),ch = api.getHeight(),index = params.dataIndex+1;\n                var mh=ih*(count+1),sy=(ch-mh)/2;\n                \n                var text = style.text.split('_')[0]+style.text.split('_')[1]+'节点：'+api.value(1);\n                var item = {\n                        type: 'group',\n                        position:[0,sy],\n                        children: [{\n                            type: 'text',\n                            style: {\n                                // fill: '#747475',\n                                textFill:'#747475',\n                                textVerticalAlign:'middle',\n                                fontSize:16,\n                                text:'{a|●}'+text,\n                                rich:{\n                                    a:{\n                                        fontSize:14,\n                                        fontWeight:'bold',\n                                        textFill:'#3677eb'\n                                    }\n                                }\n                            },\n                            styleEmphasis:{\n                                fill: '#f6f8fc'\n                            },\n                            position:[cw/2-150,(index+0.5)*ih]\n                        }]\n                    }\n                if(index==1){\n                    item.children.unshift({\n                        type: 'text',\n                        style: {\n                            textAlign:'center',\n                            textFill:'#3677eb',\n                            textVerticalAlign:'bottom',\n                            fontSize:20,\n                            text:'项目考核节点预告{a|(未来半年)}',\n                            rich:{\n                                a:{\n                                    fontSize:16,\n                                    fontWeight:'bold',\n                                }\n                            }\n                        },\n                        styleEmphasis:{\n                            fill: '#f6f8fc'\n                        },\n                        position:[cw/2,ih/2]\n                    })\n                }    \n                return item;\n            }",
//             "label": {
//                 "normal": {
//                     "show": true,
//                     "formatter": function(v){return v.value[0]}
//                 }
//             }
//         }
// };

