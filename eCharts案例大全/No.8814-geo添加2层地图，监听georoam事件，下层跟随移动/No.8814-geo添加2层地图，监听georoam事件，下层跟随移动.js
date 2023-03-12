option = {
    animation: false,
    title: {
        text: "图标名字",
        subtext: "副标题名字"
    },
    tooltip: {
        trigger: "item"
    },
    geo: [{
        map: "china",
        type: "map",
        zoom: 1,
        layoutCenter: ["50%", "50%"],
        layoutSize: "100%",
        roam: true,
        itemStyle: {
            normal: {
                color: "#a6c84c",
                borderColor: "rgba(67 ,109 ,180, 1)",
                borderWidth: 0.5,
                areaColor: "rgba(15 ,59 ,111, 1)",
                shadowColor: "rgba(0, 10, 26,0.6)",
                //shadowOffsetX: -39,
               // shadowBlur: 65
            },
            emphasis: {
                areaColor: "rgba(15 ,59 ,111, 1)",
                borderWidth: 0
            }
        },
        label: {
            show: false,
            emphasis: {
                show: false
            }
        },
        regions: [{
            name: "南海诸岛",
            value: 0,
            itemStyle: {
                normal: {
                    opacity: 0,
                    label: {
                        show: false
                    }
                }
            }
        }, {
            name: "台湾",
            value: 0,
            itemStyle: {
                normal: {
                    opacity: 0,
                    label: {
                        show: false
                    }
                }
            }
        }]
    }, {
        type: "map",
        map: "china",
        tooltip: {
            show: false
        },
        layoutCenter: ["49%", "51%"],
        layoutSize: "100%",
        zoom: 1,
        label: {
            emphasis: {
                show: false
            }
        },
        zlevel: -1,
        roam: true,
        itemStyle: {
            normal: {
                color: "#a6c84c",
                borderColor: "rgba(67 ,109 ,180, 0.1)",
                borderWidth: 0.5,
                areaColor: "rgba(15 ,59 ,111, 0.6)",
                shadowColor: "rgba(0, 10, 26,0.6)",
               // shadowOffsetX: -39,
                //shadowBlur: 65
            },
            emphasis: {
                areaColor: "rgba(15 ,59 ,111, 1)",
                borderWidth: 0
            }
        }
    }]
}
myChart.on("georoam",params=>{
                    //console.log(params)
                    let option = myChart.getOption();
                    //console.log(option)
                    if(params.zoom!=null&&params.zoom!=undefined){ //捕捉到缩放时
                        option.geo[1].zoom=option.geo[0].zoom;//下层geo的缩放等级跟着上层的geo一起改变
                        option.geo[1].center=option.geo[0].center;//下层的geo的中心位置随着上层geo一起改变
                    }else{//捕捉到拖曳时                       
                        option.geo[1].center=option.geo[0].center;//下层的geo的中心位置随着上层geo一起改变
                    }
                    
                    myChart.setOption(option,true);//设置option
                    //this.myChart.resize();
                    
            })