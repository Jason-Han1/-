var legendes = ["事件产品", "事件人物", "事件主题", "背景事件", "事件品牌"];
var texts = [{"name":"事件产品","itemStyle":{"normal":{"color":"#2ca4bf"}}},{"name":"事件人物","itemStyle":{"normal":{"color":"#aacf44"}}},{"name":"事件主题","itemStyle":{"normal":{"color":"#ff9945"}}},{"name":"背景事件","itemStyle":{"normal":{"color":"#3ad1c5"}}},{"name":"事件品牌","itemStyle":{"normal":{"color":"#f7cb4a"}}}];
var listdata = [{"name":"视频内容分析","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"云服务器BBC","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"理解与交互技术UNIT","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"文字识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"人脸识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"智能推荐BRS","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频内容分析VCA","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频内容审核 VCR","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"语音识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频内容审核","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频封面选图","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"图像识别","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"百度深度学习","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"视频封面选图VCS","category":0,"label":{"normal":{"show":true,"textStyle":{"color":"#2ca4bf"}}}},{"name":"张亚勤","category":1,"label":{"normal":{"show":true,"textStyle":{"color":"#aacf44"}}}},{"name":"百度与银联商务正式达成战略合作协议","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云高级产品专家黄锋视频AI产品发布","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"Ruff成为百度云生态合作伙伴","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"华数传媒网络有限公司亮相2017百度云智峰会","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"未来域，南京度房与百度云合作","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云北京沙龙","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度公司总裁张亚勤百度云智峰会聊云计算","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云CDN流量包1折闪促","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云与传媒行业战略合作签约视频时代","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"百度云总经理尹世明云智峰会展示黑科技","category":2,"label":{"normal":{"show":true,"textStyle":{"color":"#ff9945"}}}},{"name":"2017百度云智峰会","category":3,"label":{"normal":{"show":true,"textStyle":{"color":"#3ad1c5"}}}},{"name":"百度云","category":4,"label":{"normal":{"show":true,"textStyle":{"color":"#f7cb4a"}}}}];
var links = [{"source":"Ruff成为百度云生态合作伙伴","target":"百度云"},{"source":"百度与银联商务正式达成战略合作协议","target":"百度云"},{"source":"百度云","target":"人脸识别"},{"source":"百度云","target":"百度深度学习"},{"source":"百度云北京沙龙","target":"百度云"},{"source":"2017百度云智峰会","target":"百度云总经理尹世明云智峰会展示黑科技"},{"source":"百度云总经理尹世明云智峰会展示黑科技","target":"百度云"},{"source":"百度云","target":"图像识别"},{"source":"2017百度云智峰会","target":"百度云与传媒行业战略合作签约视频时代"},{"source":"百度云与传媒行业战略合作签约视频时代","target":"百度云"},{"source":"百度云","target":"视频封面选图VCS"},{"source":"百度云","target":"视频内容分析"},{"source":"百度云","target":"语音识别"},{"source":"百度云","target":"视频内容审核"},{"source":"百度云","target":"理解与交互技术UNIT"},{"source":"百度云","target":"视频封面选图"},{"source":"百度云","target":"视频内容分析VCA"},{"source":"百度云","target":"视频内容审核 VCR"},{"source":"2017百度云智峰会","target":"百度云高级产品专家黄锋视频AI产品发布"},{"source":"百度云高级产品专家黄锋视频AI产品发布","target":"百度云"},{"source":"百度云","target":"文字识别"},{"source":"2017百度云智峰会","target":"华数传媒网络有限公司亮相2017百度云智峰会"},{"source":"华数传媒网络有限公司亮相2017百度云智峰会","target":"百度云"},{"source":"百度云","target":"智能推荐BRS"},{"source":"2017百度云智峰会","target":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代"},{"source":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","target":"百度云"},{"source":"百度云ABC技术标识——ABC Inspire发布，进入Cloud2.0时代","target":"张亚勤"},{"source":"2017百度云智峰会","target":"百度公司总裁张亚勤百度云智峰会聊云计算"},{"source":"百度公司总裁张亚勤百度云智峰会聊云计算","target":"百度云"},{"source":"百度云","target":"云服务器BBC"},{"source":"百度公司总裁张亚勤百度云智峰会聊云计算","target":"张亚勤"},{"source":"未来域，南京度房与百度云合作","target":"百度云"},{"source":"百度云CDN流量包1折闪促","target":"百度云"}];

var option = {
        title: {
            text: ''
        },
        legend: {
            data: legendes
        },
        tooltip: {
            formatter: function (parmes) {
                if(parmes.data.name){
                    return legendes[parmes.data.category] +": " + parmes.name;
                }
            }
        },
        animationDurationUpdate: 300,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout:'force',
                symbol:'circle',
                symbolSize:15,
                roam: true,
                focusNodeAdjacency:false,
                legendHoverLink:true,
                draggable:true,
                force : {
                    repulsion :240,
                    gravity : 0.03,
                    edgeLength :80,
                    layoutAnimation : true
                },
                categories: texts,
                label: {
                    normal: {
                        show: true,
                        position:"left",
                        textStyle:{
                            color:'#000',
                            fontSize:'12'
                        }

                    }
                },
                data: listdata,
                links:links,
                lineStyle: {
                    normal: {
                        width: 1,
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            globalCoord: false 
                        }

                    }
                }
            }
        ]
    };