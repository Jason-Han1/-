
var  category= [{
        name: "完成",
        value: 612.5
    }]; // 类别
var total = 1000; // 数据总数
var  datas = [];
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor: '#071347',
    xAxis: {
        max: total,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    grid: {
        left: '15%',
        right: '10%',
    },
    yAxis: [{
        type: "category",
        inverse: false,
        stack: '1',
        data: category,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },


    }],
    series: [{
            // 内
            type: "bar",
                stack: '1',
            barWidth: 38,
            silent: true,
            itemStyle: {
                normal: {
                    color: '#28EAFD'
                }
            },
            label: {
                normal: {
                    show: true,
                    position:'right',
                    textStyle:{
                        fontSize:20,
                        color:'#fff',
                        rich:{
                            a:{
                                backgroundColor:{
                                    image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAUCAYAAAD/Rn+7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzJGQTUxMzFGQ0M3MTFFQjg4QUNBRTRFRDBDQ0RBODEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzJGQTUxMzJGQ0M3MTFFQjg4QUNBRTRFRDBDQ0RBODEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMjIzQzAzNEZDQzcxMUVCODhBQ0FFNEVEMENDREE4MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMkZBNTEzMEZDQzcxMUVCODhBQ0FFNEVEMENDREE4MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgnqNYIAAAHmSURBVHjaxJbLTsJQEIZnDmAxSsUNr+Fj4EKFjQuNQRMNKgroU5gYl6xELl633nYmujJx4wu48AnUWAzYcrHHOVqMIUBLgTLpnzbp9PTLnM4/xecad92W+dAwQhkAdGgeSOLgcLgBPO77CoeowsMBF0SIrtgmv0L6cpBP1jik3EEJv6Ij8Hih8bUAg0nHy9Riu951OM+M4xNyzqFIVIkC999U+JGMMD1IOFGggg7pfT/bnpKg9AMookyn1Q999K4MpyMIMzgAuBrpk0MmJWMy7MXSTzXrgPVYUnT5oQrHLoAZJ7dUE4Accnsybsx6Uf271wgoYuJFH6sCHNJlyAlA6lNRvfyOD9fnhlH7f481JoutpqMgikm67DecsAXyt9yuj8Ua4QyraRkKadm4DvWrITwIWfrm4iEJ1GY5zGSNN9IK6apPBcxIZCAhCT9bJTALi7ySFknXPYZLk5JUxVKtTRKzuJjY7vkeQmZI26SSWSLrYFExBhd6sN05UtwKXKeAIj5IkS66O0+KkVSrDzAbL7FrQTkDTuvkIWazEorR3VYhs6TNTirXLWC9u61YkGiIhBizdl7CuvzgzSzoQFiJ1YboB2A7CxKV2+oGruWoK/4Ob7BhQWekIOnEsBLVbNSZ/aJ/CzAAaE2fXTk9x2kAAAAASUVORK5CYII=',
                                },
                                
                            },
                            b:{
                                fontSize:26,
                                lineHeight:40,
                                
                            }
                        }
                    },
                    formatter:(params) => {
                        return '\n\n\n\n\n\n{a|}\n'+params.name+'  {b|'+ params.value +'}'
                    }
                }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal: {
                    color: "#0F2B57"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 20,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [3, 38],
            symbolPosition: "start",
            symbolOffset: [0, 0],
            symbolBoundingData: this.total,
            data: [total],
            z: 2,
            animationEasing: "elasticOut",


        },
        {
            // label
            type: "pictorialBar",
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            data: datas,
            z: 0,

        },
        {
            name: "外框",
            type: "bar",
            barGap: "-100%", 
            data: [total],
            barWidth: 38,
            itemStyle: {
                normal: {
                    color: "#144E76", 
                }
            },
            z: 0
        },
    ]
}