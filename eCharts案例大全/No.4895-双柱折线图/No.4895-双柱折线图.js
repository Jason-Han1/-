option = {
    backgroundColor: '#000',
    数据节点1:80,
    数据节点2:90,
    dataset: {
        source: [
            ["product","DATA1","DATA2","DATA3"],
            ["华中\n(武汉)","85","94", "10"],
            ["华北","94","82", "-16"],
            ["西南","82","96", "8"],
            ["华东","96","75", "12"],
            ["西北","75","86", "-5"],
            ["东北","86","90", "6"],
            ["山东","90","78", "11"],
            ["新疆","78","86", "9"],
            ["北方","86","85", "12"]
        ]
    },
    "grid":{
        "top":"5%",
        "bottom":"15%",
        "left":"8%",
        "right":"8%"
    },
    legend:{
        show:true,
        right:20,
        itemWidth:4,
        itemHeight:12,
        textStyle:{
            color:"#0ae9ff"
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "line"
        },
        "backgroundColor": "#0F1225",
        "borderWidth": 1,
        "borderColor": "rgba(69, 159, 216, 1)",
        fontFamily:"DIN",
        formatter:function(datas){
            let html ="<span style=color:#fff>"+datas[0].name+"大区</span><br><span style=color:#3fd4ff>"+datas[0].seriesName+"："+datas[2].value[1]+"%</span><br><span style=color:#3ffeff>"+datas[1].seriesName+"："+datas[2].value[2]+"%</span><br><span style=color:#d5457f>"+datas[2].seriesName+"："+datas[2].value[3]+"%</span><br>"
            return html
        }
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval:0,
            margin:40,
            padding:[0,-40],
            color: '#fff'
        },
        axisTick: {
            show: false
        },
        splitLine:{
            show:true,
            lineStyle:{
                width:45,
                color:"rgba(10,233,255, 0.1)"
            }
        }
    },{
        type: "category",
        boundaryGap: false,
        position:"bottom",
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            interval:0,
            padding:[5,10],
            color: '#0ae9ff',
            fontFamily:"DIN",
            backgroundColor:"rgba(10,233,255, 0.1)",
            formatter:function(value){
                for(let i=0;i<option.dataset.source.length;i++){
                    if(value==option.dataset.source[i][0]){
                        let str = option.dataset.source[i][3]
                        let style=(str>0)?"c3":"c1"
                        return "{"+style+"|"+str+"%}"
                    }
                }
            },
            rich:{
                c1:{
                    color:"#d5457f"//红
                },
                c3:{
                    color:"#0ae9ff"//蓝
                }
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 3,
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
            show: true,
            lineStyle:{
                color:"rgba(10,233,255, 0.1)"
            }
        }
    },{
        type: 'value',
        splitNumber: 3,
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
    }],
    series: [{
        name:"整体补货可得率",
        type: 'bar',
        barWidth:"20%",
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#5ffdff' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(216,163,46,0.1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            barBorderRadius:[30,30,0,0]
        },
        label:{
            show:false
        },
        encode:{
            y:"DATA1"
        }
    },{
        name:"TOP60补货可得率",
        type: 'bar',
        barWidth:"20%",
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: '#0aeaff' // 0% 处的颜色
                }, {
                    offset: 1, color: 'rgba(89,207,217,0.1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            barBorderRadius:[30,30,0,0]
        },
        label:{
            show:false
        },
        encode:{
            y:"DATA2"
        }
    },{
        name:"日环比",
        type: 'line',
        xAxisIndex:1,
        yAxisIndex:1,
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkUxRkI2RTEwMTY1MjExRUE4MURDQjkxMkFEMEFFM0E1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkUxRkI2RTExMTY1MjExRUE4MURDQjkxMkFEMEFFM0E1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTFGQjZFMEUxNjUyMTFFQTgxRENCOTEyQUQwQUUzQTUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTFGQjZFMEYxNjUyMTFFQTgxRENCOTEyQUQwQUUzQTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5tMXL8AAAByklEQVR42rSWP0hCQRzHz0caQtbToVADXZKKWpSWlsJwzqkl2mp1jJagaIm29rbabLDVIGixpRwiynCJKIIoCw2kIez7g9+Ly/Tukc+DD7x37+77lbvfH12NRkMohh9MgREQBH3gC7yDCiiDC/DaTsDVxoCE58EoKIIb8ACqwA0GwCAYAwn+fgTe7BhMgkVwCk7Ap1CPXpAEM+AQnP/6SgYSs2ADhJvm7RACmyApz8sL4mALmP8QtzBZI95s4AfbINqBuEWUtUhTGHxSdKEFcCc6H6RxBtL0QgYBjoZj4dzIcwQGDA6zK1B30KDO+ZEggxi41GzwgF1OqAo/ezR7KDdiPZyh95rFOyAjvWf4V64p9lBiBg1O/6rGYKnF3IpmD2n6rChyiy4NMvgA/Zp1+y3m9jR7SLNGd/AEQuBZsXiV6pZ0VGS4rjEYJm0qdik8DIEDh09ngaqrweV4AngdFPdyfhUNju1bkHLQgLRKpG1FUQ5Mg4gD4hHWyllRJLgTZcEyMDsQN1kj+9PdutBw5uR5VcsscIWt27jQFB/Ln5apavppLrlUFa/Bo1RSKInCYJyjpcRnbqvpq/62+Hi+xgla5jB/aSfwLcAAR/OKgGLG68wAAAAASUVORK5CYII=',
        symbolSize: 15,
        itemStyle: {
            color: "#0ae9ff"
        },
        lineStyle:{
            width:1
        },
        encode:{
            y:"DATA3"
        }
    }]
};