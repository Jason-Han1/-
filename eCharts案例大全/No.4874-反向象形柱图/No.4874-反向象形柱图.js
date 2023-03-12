option = {
    数据节点:70,
    backgroundColor:"#000",
    color:["rgba(255,247,119,","rgba(18,183,234,"],
    dataset:{
        source:[
            ["product","DATA","DATA1"],
            ["羽绒","76",100],
            ["拉链","82",100],
            ["基础面料","64",100],
            ["高端面料","0",100],
            ["基础毛皮","78",100],
            ["高端毛皮","65",100]
        ]  
    },
    grid:{
        top:"5%",
        bottom:"5%",
        left:"10%",
        right:"0%"
    },
    yAxis: {
        type:"category",
        inverse:true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color:"#fff"
        }
    },
    xAxis: {
        splitNumber:4,
        type: "value",
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        type: "pictorialBar",
        barWidth:"40",
        symbol:"image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW0AAAAhCAYAAAAS7PqBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM5OEY1QjYxMzhGMTExRUJCN0E4QUEzMzY0QkMyMTlDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM5OEY1QjYyMzhGMTExRUJCN0E4QUEzMzY0QkMyMTlDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mzk4RjVCNUYzOEYxMTFFQkI3QThBQTMzNjRCQzIxOUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk4RjVCNjAzOEYxMTFFQkI3QThBQTMzNjRCQzIxOUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7IvFCOAAAAv0lEQVR42uzWsQkCQRCG0ZkDkevAFszMLMDM0m1BoyvA0NB1tgaTOXgPfth4go/NGOMQEbcAoLOl9sqK9rUez9rbTQBau89yr4INsAufxQ0A9kO0AUQbANEGEG0ARBsA0QYQbQBEGwDRBhBtAEQbANEGEG0ARBsA0QYQbQBEGwDRBhBtAEQbANEGEG0ARBsA0QYQbQBEG4B/oz1q6RQA7eWM9la7uAVAa8famjHmRzvOtVPt6y4APX/ZtcdPgAEAmsQPxDrc4pwAAAAASUVORK5CYII=",
        symbolSize:["102%","150%"],
        symbolRepeat:false,
        symbolMargin:"30%",
        itemStyle:{
            color:function(params){
                let colors=[option.color[0]+"1)", option.color[1]+"1)"]
                let data1=option.数据节点
                if(params.value[1]<data1){
                    return colors[0]
                }else{
                    return colors[1]
                }
            }  
        },
        label:{
          show:true,
          position:"right",
          formatter:function(datas){
              if(datas.data[1]=="0") return ""
              return datas.data[1]+"%"
          },
          fontSize:15,
          fontFamily:"DIN"
        },
        encode:{
            x:"DATA1"
        },
        z:40
    },{
        type: "pictorialBar",
        barWidth:"40",
        symbol:"rect",
        symbolSize:["8%","100%"],
        symbolRepeat:true,
        symbolMargin:"30%",
        itemStyle:{
            color:"#000"
        },
        encode:{
            x:"DATA"
        },
        z:10
    },{
        type: "bar",
        barWidth:"40",
        itemStyle:{
            color:function(params){
                let colors=[{
                    type: "linear",
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: option.color[0]+"1)"
                    }, {
                        offset: 1, color: option.color[0]+"0)"
                    }],
                    global: false
                },{
                    type: "linear",
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: option.color[1]+"1)"
                    }, {
                        offset: 1, color: option.color[1]+"0)"
                    }],
                    global: false
                }]
                let data1=option.数据节点
                if(params.value[1]<data1){
                    return colors[0]
                }else{
                    return colors[1]
                }
            }  
        },
        encode:{
            x:"DATA"
        }
    },
    {
        type: "pictorialBar",
        barWidth:"40",
        symbol:"rect",
        symbolSize:["8%","100%"],
        symbolRepeat:true,
        symbolMargin:"30%",
        itemStyle:{
            color:"#459fd8",
            opacity:0.2
        },
        encode:{
            x:"DATA1"
        }
    }
    ]
};