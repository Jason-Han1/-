
option = {
    "title": {
        "show": "true",
        "text": "我是标题",
        "x": "center",
        "y": "top",
        "textStyle": {
            "color": "black",
            "fontSize": "35"
        },
        "subtext": "我是副标题",
        "subtextStyle": {
            "color": "red",
            "fontSize": "20"
        }
    },
    legend: {
        show:"true",
        orient: "horizontal",
        x: "center",
        y: "bottom",
        textStyle:{
            color:"black",
            fontSize:"20"
        },
        data:["A","B","C"]
    },
    label:{
        show:"true",
        position:"outside",
        distance: "50",
        formatter:"{b}:{c}",
        color:"red",
        fontSize:"14",
    },
    xAxis : [
        {
            //show:false, //x轴名称是否显示
            show:true,
            type : 'category',
            position:"bottom", //显示的位置bottom、top
            name:"aaa",//X轴的名称，主要使用标记单位
            nameLocation:"middle",//名称'start','middle' 或者 'center' ,'end'
            nameTextStyle:{
              color:"green", //name颜色
              fontSize:50,  //name文本大小
              
            },
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],//x轴的数据
            axisLine:{ //坐标轴轴线相关设置。
                //show:false,
                show:true,
                lineStyle:{
                    color:"red", //轴线的颜色
                    width:"1",   //轴线的宽度
                    type:"dotted",//轴线的类型solid、dashed、dotted
                }
            },
            axisTick: { //坐标轴刻度相关设置。
                //show:false,
                show:true,
                alignWithLabel: true,//可以保证刻度线和标签对齐
                length:"5", //刻度的长度
                lineStyle:{
                    color:"blue", //刻度线的颜色
                    width:"1", //刻度线的宽度
                    type:"solid", //刻度线的类型
                }
            },
            axisLabel:{ //坐标轴刻度标签的相关设置。
                //show:false,
                show:true,
                color:"green",
                fontSize:"20",
                formatter:function(value){
                    return value.split("").join("\n")
                }
            },
            splitLine:{ //坐标轴在 grid 区域中的分隔线。
                 show:true,
                 lineStyle:{
                     color:"yellow",
                     width:"20",
                     type:"dotted"
                 }
            },
            splitArea:{ //分隔区域颜色
                show:true, 
                areaStyle:{
                    color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)',"red"] ,//分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
                }
            }
        },
      
    ],
    yAxis : [{
        show:true,
        type : 'value',
        position:"left",    //left 、right
        name:"bb",    
        nameLocation:"end",//名称位置'start','middle' 或者 'center' ,'end'
         nameTextStyle:{
              color:"green", //name颜色
              fontSize:50,  //name文本大小
              
            },
         axisLine:{ //坐标轴轴线相关设置。
                //show:false,
                show:true,
                lineStyle:{
                    color:"red", //轴线的颜色
                    width:"1",   //轴线的宽度
                    type:"dotted",//轴线的类型solid、dashed、dotted
                }
            },
            axisTick: { //坐标轴刻度相关设置。
                //show:false,
                show:true,
                alignWithLabel: true,//可以保证刻度线和标签对齐
                length:"5", //刻度的长度
                lineStyle:{
                    color:"blue", //刻度线的颜色
                    width:"1", //刻度线的宽度
                    type:"solid", //刻度线的类型
                }
            },
            axisLabel:{ //坐标轴刻度标签的相关设置。
                //show:false,
                show:true,
                color:"green",
                fontSize:"20",
                
            },
            splitLine:{ //坐标轴在 grid 区域中的分隔线。
                 show:true,
                 lineStyle:{
                     color:"yellow",
                     width:"20",
                     type:"dotted"
                 }
            },
            splitArea:{ //分隔区域颜色
                show:true, 
                areaStyle:{
                    color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)',"red"] ,//分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色
                }
            }
        }],
    series : [
        {
            name:'A',
            type:'line',
            barWidth: '20',
            stack:"a",
            data:[10, 52, 200, 334, 390, 330, 220],
            color: "green",
            smooth:true,  //平滑的曲线
            smoothMonotone:"x",
            symbol:"none",
            areaStyle: {
                color:""
            },
            lineStyle:{
                width:20,
                type:"solid",
            }
            
        },
         {
            name:'B',
            type:'bar',
            barWidth: '20',
            stack:"b",
            smooth:true,
            data:[10, 52, 200, 334, 390, 330, 220],
            color: "",
            smooth:true,  //平滑的曲线
            smoothMonotone:"x",
            areaStyle: {
            },
            lineStyle:{
                width:20,
                type:"solid",
            }
        },
         {
            name:'C',
            type:'bar',
            barWidth: '20',
            stack:"c",
            data:[10, 52, 200, 334, 390, 330, 220],
            color: "",
            smooth:true,  //平滑的曲线
            smoothMonotone:"x",
            areaStyle: {
            },
            lineStyle:{
                width:20,
                type:"solid",
            }
        }
    ]
};
