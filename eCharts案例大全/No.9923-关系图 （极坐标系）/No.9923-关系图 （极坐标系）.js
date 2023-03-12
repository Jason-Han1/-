
        var imgicon = new Image(); imgicon.src='https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1571105690&di=b8f9e5e16c24ab45e1962461d6ba2406&src=http://images.phouses.com/news/20150928/1443419553519818.png'//图片ULR
        // var wayjson={
        //     m:{m1:0.18,
        //        m2:0.19,
        //        m3:0.21,
        //        m4:0.22,
        //        m5:0.31,
        //        m6:0.25,
        //        m7:0.215}
        // }
        //datas 里面的标识
        //,label:{normal:{show:true,backgroundColor:{ type: "pattern", repeat: "no-repeat", image: imgicon},color:'#37CFEB',formatter:function(){return "    ";}}}
        //links 里面的标志
        //,label:{normal:{show:true,verticalAlign: "top",backgroundColor:{ type: "pattern", repeat: "no-repeat", image: imgicon},color:'black', formatter:function(){return '    ';}}}
        var angledata=[
            "p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12",
            "p13","p12","p15","p16","p17","p18","p19","p20","p21","p22","p23","p24",
            "p25","p26","p27","p28","p29","p30","p31","p32","p33","p34","p35","p36",
            ];
        var datas = [
        {name: "中心",des:"中心",symbolSize:60,draggable: false,itemStyle: {normal: {color: "#E75FC3", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[0,0],label:{normal:{show:true,backgroundColor:{ type: "pattern", repeat: "no-repeat", image: imgicon},color:'#37CFEB',formatter:function(){return "    ";}}}},
        
        {name: "组织一_1",des:"组织一",symbolSize: 0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[1,'p33']},
        {name: "组织一_2",des:"组织一",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[2,'p33']},
        {name: "组织一_3",des:"组织一",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[3,'p33']},
        {name: "组织一_4",des:"组织一",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[4,'p33']},
        {name: "组织一_5",des:"组织一",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[5,'p33']},
        {name: "组织一_6",des:"组织一",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[6,'p33']},
        {name: "组织一_7",des:"组织一",symbolSize: 30,draggable: false,itemStyle: {normal: {color: "#37CFEB", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[7,'p33']},
        {name: "组织一_8",des:"组织一",symbolSize:  0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[8,'p33']},
        
        {name: "组织二_1",des:"组织二",symbolSize: 0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[1,'p1']},
        {name: "组织二_2",des:"组织二",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[2,'p1']},
        {name: "组织二_3",des:"组织二",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[3,'p1']},
        {name: "组织二_4",des:"组织二",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[4,'p1']},
        {name: "组织二_5",des:"组织二",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[5,'p1']},
        {name: "组织二_6",des:"组织二",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[6,'p1']},
        {name: "组织二_7",des:"组织二",symbolSize: 30,draggable: false,itemStyle: {normal: {color: "#37CFEB", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[7,'p1']},
        {name: "组织二_8",des:"组织二",symbolSize:  0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[8,'p1']},
        
        {name: "组织三_1",des:"组织三",symbolSize: 0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[1,'p5']},
        {name: "组织三_2",des:"组织三",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[2,'p5']},
        {name: "组织三_3",des:"组织三",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[3,'p5']},
        {name: "组织三_4",des:"组织三",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[4,'p5']},
        {name: "组织三_5",des:"组织三",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[5,'p5']},
        {name: "组织三_6",des:"组织三",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[6,'p5']},
        {name: "组织三_7",des:"组织三",symbolSize: 30,draggable: false,itemStyle: {normal: {color: "#37CFEB", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[7,'p5']},
        {name: "组织三_8",des:"组织三",symbolSize:  0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[8,'p5']},
        
        {name: "组织四_1",des:"组织四",symbolSize: 0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[1,'p10']},
        {name: "组织四_2",des:"组织四",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[2,'p10']},
        {name: "组织四_3",des:"组织四",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[3,'p10']},
        {name: "组织四_4",des:"组织四",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[4,'p10'],label:{normal:{show:true,backgroundColor:{ type: "pattern", repeat: "no-repeat", image: imgicon},color:'#37CFEB',formatter:function(){return "    ";}}}},
        {name: "组织四_5",des:"组织四",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[5,'p10']},
        {name: "组织四_6",des:"组织四",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[6,'p10']},
        {name: "组织四_7",des:"组织四",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[7,'p10']},
        {name: "组织四_8",des:"组织四",symbolSize: 30,draggable: false,itemStyle: {normal: {color: "#37CFEB", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[8,'p10']},
        
        {name: "组织五_1",des:"组织五",symbolSize: 0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[1,'p15']},
        {name: "组织五_2",des:"组织五",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[2,'p15']},
        {name: "组织五_3",des:"组织五",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[3,'p15']},
        {name: "组织五_4",des:"组织五",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[4,'p15']},
        {name: "组织五_5",des:"组织五",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[5,'p15']},
        {name: "组织五_6",des:"组织五",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[6,'p15']},
        {name: "组织五_7",des:"组织五",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[7,'p15']},
        {name: "组织五_8",des:"组织五",symbolSize: 30,draggable: false,itemStyle: {normal: {color: "#37CFEB", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[8,'p15']},
        
        {name: "组织六_1",des:"组织六",symbolSize: 0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[1,'p22']},
        {name: "组织六_2",des:"组织六",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[2,'p22']},
        {name: "组织六_3",des:"组织六",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[3,'p22']},
        {name: "组织六_4",des:"组织六",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[4,'p22']},
        {name: "组织六_5",des:"组织六",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[5,'p22']},
        {name: "组织六_6",des:"组织六",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[6,'p22']},
        {name: "组织六_7",des:"组织六",symbolSize: 30,draggable: false,itemStyle: {normal: {color: "#37CFEB", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[7,'p22']},
        {name: "组织六_8",des:"组织六",symbolSize:  0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[8,'p22']},
        
        
        {name: "组织七_1",des:"组织七",symbolSize: 0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[1,'p28']},
        {name: "组织七_2",des:"组织七",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[2,'p28']},
        {name: "组织七_3",des:"组织七",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[3,'p28']},
        {name: "组织七_4",des:"组织七",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[4,'p28']},
        {name: "组织七_5",des:"组织七",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[5,'p28']},
        {name: "组织七_6",des:"组织七",symbolSize: 7,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[6,'p28']},
        {name: "组织七_7",des:"组织七",symbolSize: 30,draggable: false,itemStyle: {normal: {color: "#37CFEB", borderColor: '#FFFFFF',borderWidth: 0,}},label:{show:false},value:[7,'p28'],label:{normal:{show:true,backgroundColor:{ type: "pattern", repeat: "no-repeat", image: imgicon},color:'#37CFEB',formatter:function(){return "    ";}}}},
        {name: "组织七_8",des:"组织七",symbolSize:  0,draggable: false,itemStyle: {normal: {color: "black", borderColor: '#FFFFFF',borderWidth: 3,}},label:{show:false},value:[8,'p28']}
        ]
        var links = [
        //从 中心点出发
        {source: "中心",target: "组织一_7",des:"指示线提示",value:"",lineStyle:{curveness:0,color:'#FFFFFF',width:4}},
            
            
        //第1块   // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        {source: "组织一_3",target: "组织二_3",des:"弧线提示",value:"",symbol:'none',lineStyle:{curveness:0.18,color:'#FFFFFF',width:4}},
        {source: "组织一_4",target: "组织二_4",des:"弧线提示",value:"",symbol:'none',lineStyle:{curveness:0.18,color:'#FFFFFF',width:4}},
        {source: "组织一_5",target: "组织二_5",des:"弧线提示",value:"",symbol:'none',lineStyle:{curveness:0.18,color:'#FFFFFF',width:4}},
        
        //第2块
        {source: "组织二_3",target: "组织三_3",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.19,color:'#FFFFFF',width:4}},
        {source: "组织二_4",target: "组织三_4",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.19,color:'#FFFFFF',width:4}},
        {source: "组织二_5",target: "组织三_5",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.19,color:'#FFFFFF',width:4}},
        
        //第3块
        {source: "组织三_3",target: "组织四_3",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.21,color:'#FFFFFF',width:4}},
        
        //第4块
        {source: "组织四_6",target: "组织五_6",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.22,color:'#FFFFFF',width:4},label:{normal:{show:true,verticalAlign: "top",backgroundColor:{ type: "pattern", repeat: "no-repeat", image: imgicon},color:'black', formatter:function(){return '    ';}}}},
        
        //第5块
        {source: "组织五_4",target: "组织六_4",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.31,color:'#FFFFFF',width:4}},
        {source: "组织五_5",target: "组织六_5",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.31,color:'#FFFFFF',width:4}},
        
        
        //第6块
        {source: "组织六_4",target: "组织七_4",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.25,color:'#FFFFFF',width:4},label:{normal:{show:true,verticalAlign: "top",backgroundColor:{ type: "pattern", repeat: "no-repeat", image: imgicon},color:'black', formatter:function(){return '    ';}}}},
        {source: "组织六_5",target: "组织七_5",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.25,color:'#FFFFFF',width:4}},
        
        //第6块
        {source: "组织七_3",target: "组织一_3",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.215,color:'#FFFFFF',width:4}},
        {source: "组织七_4",target: "组织一_4",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.215,color:'#FFFFFF',width:4}},
        {source: "组织七_5",target: "组织一_5",des:"弧线提示",symbol:'none',lineStyle:{curveness:0.215,color:'#FFFFFF',width:4}}
        ]
        
        var charts = {
            datas: datas,
            links: links
        }
        // var img = new Image(); img.src='XXXX.jpg'//图片ULR  可以自定义图片 嵌套美化图
        //也可以实现 点到中心圆的连线以及指定线的箭头方向（随便找个其他关系图参考一下，即可写出）
        option = {
            // backgroundColor:{ type: "pattern", repeat: "no-repeat", image: img },
            backgroundColor:"#4A4A4A",
            polar: {
        // 		"center": ["401px", "244px"],
        // 		"radius": "210px"
        center: ["50%", "50%"],
        		"radius": "80%"
            },
            tooltip: {
                show: true, // 默认显示
                showContent: true, // 是否显示提示框浮层
                trigger: 'item', // 触发类型，默认数据项触发
                formatter:function(obj){
                    return obj.data.des;
                },
            },
            radiusAxis: {
                // show: false,
                type: 'value',
                min: 0,
                max: 9
            },
            angleAxis: {
                // show:false,
                type: 'category',
                data:angledata,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLine: {
                show:true
                },
                
                
            },
            series: [{
                type: 'graph',
                layout: 'none',
                coordinateSystem: 'polar',
                focusNodeAdjacency:false,
                hoverAnimation:false,
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        color: '#12b5d0',
                        align: "left",
                        verticalAlign: "top",
                        
                    }
                },
                lineStyle: {
                    normal: {
                        width: 2,
                        shadowColor: 'black'
                    }
                },
                edgeSymbolSize: 8,
                data: charts.datas,
                links: charts.links,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: function(item) {
                                return item.data.name
                            }
                        }
                    }
                }
            }]
        }