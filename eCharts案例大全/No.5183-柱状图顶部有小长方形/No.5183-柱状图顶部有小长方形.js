option = {
    数据节点1: 30,
    数据节点2: 80,
    数据节点3: 50,
    backgroundColor: "#0a1216",
    color: ['rgba(218, 52, 110,', 'rgba(255, 234, 56,', 'rgba(63, 212, 255,'],
    dataset: {
        "source": [
            ["product", "data1"],
            ["休闲", "57"],
            ["运动", "23"],
            ["商务", "68"],
            ["户外", "50"],
            ["童装", "42"],
        ]
    },
     tooltip: {
         show:false,
    trigger: "axis",
    axisPointer: {
      type: 'line', //默认为line，line直线，cross十字准星，shadow阴影
		crossStyle: {
            color: '#fff'
		}
    },
    borderWidth: 1,
    borderColor: "rgba(63, 212, 255, 1)",
    backgroundColor:"#16244b",
    formatter: function formatter(params) {
        var colorList1 = "#fff";
        let num1 = option.数据节点1
        let num2 = option.数据节点2
        if(params[0].data[3] < num1){
            colorList1= "#da346e"
        }
        if(params[0].data[3] >= num1 && params[0].data[3] <= num2){
            colorList1= "#ffea38"
        }
        if(params[0].data[3] > num2){
            colorList1= "#3fd4ff"
        }
        let html=params[0].name + "<br/>";
         html+="<span>目标："+params[0].value[1].toLocaleString()+ "%</span><br/><span style=color:#3fd4ff>实际：" +params[0].value[2].toLocaleString()+ "%</span><br/><span style=color:"+colorList1+">完成率："+params[0].value[3].toLocaleString()+ "%</span>";
        return html;
        },
        textStyle: {
            rich: {
                word1: {
                    color: "#fff",
                    fontSize: 16,
                    padding: [0, 50]
                },
                word2: {
                    color: function(params) {
                       let color= option.color[0] + "1)"
                        
                    },
                    fontSize: 30,
                    fontFamily: "DIN"
                },
                word3: {
                    color: function(params) {
                       let color= option.color[1] + "1)"
                        
                    },
                    fontSize: 30,
                    fontFamily: "DIN"
                },
                word4: {
                    color: function(params) {
                       let color= option.color[2] + "1)"
                        
                    },
                    fontSize: 30,
                    fontFamily: "DIN"
                }
            }
        },
    extraCssText: "z-index:96"
  },
    xAxis: {
        type: "category",
        position: "top",
        show:false,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: "#fff",
            interval: "0",
            formatter: function(params) {
                return "{kuang|" + params + "}"
            },
            rich: {
                "kuang": {
                    color: "#fff",
                    align: "center",
                    verticalAlign: "middle",
                    width: "15",
                    height: "30",
                    backgroundColor: {
                        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAAAqCAYAAAB1EC0sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFFRUNDOThCRjYyNjExRUFBOUM4RkMzMDc1NjMyNUY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFFRUNDOThDRjYyNjExRUFBOUM4RkMzMDc1NjMyNUY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUVFQ0M5ODlGNjI2MTFFQUE5QzhGQzMwNzU2MzI1RjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUVFQ0M5OEFGNjI2MTFFQUE5QzhGQzMwNzU2MzI1RjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6TgdboAAAGDklEQVR42uyd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"
                    }
                }
            },
        }
    },
    yAxis: {
        type: "value",
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [
        {
            type: "bar",
            barWidth: "5%",
             barGap: '-100%',
            showBackground: true,
            backgroundStyle: {
                color: "rgba(14, 248, 254,.01)",
                borderColor: "rgba(14, 248, 254,.05)",
                borderWidth: 30,
            },
            itemStyle: {
                color: function(params) {
                    console.log(params)
                    var colorList = []
                    let num1 = option.数据节点1
                    let num2 = option.数据节点2
                    let avg=option.数据节点3;
                    if(params.data[1]<avg){
                        colorList[params.dataIndex] = option.color[0] + "1)"
                    }else{
                        
                    colorList[params.dataIndex] = option.color[1] + "1)"
                    }
                    return colorList[params.dataIndex];
                },
            },
            label: {
                show: true,
                distance: 20,
                position: "bottom",
                formatter: function(params) {
                return "{kuang|"+params.data[0]+"}"
                },
                rich: {
                    "kuang": {
                        width: "4",
                        height: "30",
                        fontSize: 12,
                       // color: "#da346e",
                        align: "center",
                        verticalAlign: "middle",
                        backgroundColor: {
                            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAzCAYAAAA94+4/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCMDVBOUZCRjYyNjExRUFCMjcyQjQ2MTM2RkE5REU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCMDVBOUZDRjYyNjExRUFCMjcyQjQ2MTM2RkE5REU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUIwNUE5RjlGNjI2MTFFQUIyNzJCNDYxMzZGQTlERTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUIwNUE5RkFGNjI2MTFFQUIyNzJCNDYxMzZGQTlERTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RDwxrAAAAYElEQVR42uzQMQ0AMAgAsLFnyfyrxAQ4IAhoJTR+1jusXQXChAkTJgxhwoQJE4YwYcKECROGMGHChAlDmDBhwoQJQ5gwYcKEIUyYMGHChCFMmDBhwhAmTJgwYcIYtAADAHPPAmCzcz3cAAAAAElFTkSuQmCC"
                        }
                    },
                },
            }, "encode": {
            "y": "data1"
          }
        },
        {
            type: "bar",
            barWidth: "5%",
            showBackground: true,
            backgroundStyle: {
                color: "rgba(14, 248, 254,.01)",
                borderColor: "rgba(14, 248, 254,.05)",
                borderWidth: 30,
            },
            itemStyle: {
                color: function(params) {
                    //console.log(params)
                    var colorList = []
                    let num1 = option.数据节点1
                    let num2 = option.数据节点2
                    colorList[params.dataIndex] = option.color[2] + "1)"
                    return colorList[params.dataIndex];
                },
            },
            label: {
                show: false,
                distance: 20,
                position: "bottom",
                formatter: function(params) {
                    return "{kuang|"+params.data[0]+"}"
                },
                rich: {
                    "kuang": {
                        width: "4",
                        height: "30",
                        fontSize: 12,
                        color: "#fff",
                        align: "center",
                        verticalAlign: "middle",
                        backgroundColor: {
                            image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAzCAYAAAA94+4/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVCMDVBOUZCRjYyNjExRUFCMjcyQjQ2MTM2RkE5REU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVCMDVBOUZDRjYyNjExRUFCMjcyQjQ2MTM2RkE5REU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUIwNUE5RjlGNjI2MTFFQUIyNzJCNDYxMzZGQTlERTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUIwNUE5RkFGNjI2MTFFQUIyNzJCNDYxMzZGQTlERTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6RDwxrAAAAYElEQVR42uzQMQ0AMAgAsLFnyfyrxAQ4IAhoJTR+1jusXQXChAkTJgxhwoQJE4YwYcKECROGMGHChAlDmDBhwoQJQ5gwYcKEIUyYMGHChCFMmDBhwhAmTJgwYcIYtAADAHPPAmCzcz3cAAAAAElFTkSuQmCC"
                        }
                    }
                },
            },
          "encode": {
            "y": "data1"
          }
        },
        {
            type: "pictorialBar",
            symbol:"rect",
            //symbol: "path://M341.3,682.7C152.8,682.7,0,529.8,0,341.3C0,152.8,152.8,0,341.3,0c188.5,0,341.3,152.8,341.3,341.3 C682.7,529.8,529.8,682.7,341.3,682.7L341.3,682.7z M341.3,51.2c-160.2,0-290.1,129.9-290.1,290.1c0,160.2,129.9,290.1,290.1,290.1 c160.2,0,290.1-129.9,290.1-290.1C631.5,181.1,501.6,51.2,341.3,51.2L341.3,51.2z M341.3,496.3c-85.6,0-155-69.4-155-155 c0-85.6,69.4-155,155-155c85.6,0,155,69.4,155,155c0,41.1-16.3,80.5-45.4,109.6C421.9,480,382.4,496.3,341.3,496.3L341.3,496.3z M341.3,496.3",
            symbolSize: ["25", "8"],
            symbolPosition: "end",
            symbolOffset: [0, -8],
            itemStyle: {
                color: function(params) {
                    var colorList = []
                    let num1 = option.数据节点1
                    let num2 = option.数据节点2
                    colorList[params.dataIndex] = "rgba(255,255,255,1)";
                    return colorList[params.dataIndex];
                },
                shadowColor: '#fff',
                    shadowBlur: 5,
            },
            label: {
                show: true,
                position: "top",
                formatter: function(params) {
                    return params.data[1] + "%"
                },
                  color: "#3fd4ff",
                fontFamily: "DIN",
                fontSize: 15
            }
        },
    ]
};