var captions = ['1111', '22222', '33333', '444444']
var values = [123,456,789,159]

console.log(captions)
console.log(values);
var maxLength = 0,leftYWidth=0;
for(var i =0;i < captions.length;i ++){
    let width = getWidth(captions[i]);
    if(width > leftYWidth){
    	maxLength = captions[i].length;
        leftYWidth = width;
    }
}
maxLength = 0,rightYWidth = 0;
for(var i =0;i < values.length;i ++){
    let width = getWidth(values[i]);
    if(width > rightYWidth){
    	maxLength = values[i].length;
        rightYWidth = width;
    }
}

function getWidth(text){
	var lsdom = document.createElement("span");
    lsdom.className = "lsdom";
    lsdom.innerHTML = text;
    document.documentElement.append(lsdom);
    var width = lsdom.offsetWidth;
    document.documentElement.removeChild(lsdom);
    return width;
}
var dis = 60;
var option = {
    backgroundColor: '#FFFFFF',
    "color": ["#63caff", "#3608FE"],
    "grid": {
        // "containLabel": true,
        "left": leftYWidth + dis + 10,
        "right": rightYWidth + dis + 10,
        "bottom": 39 * (5 - values.length),
        "top": 40
    },
    "xAxis": {
        "show": false
    },
    "yAxis": [
    	{
            "type": "category",
            "data": captions,
            name: "名称",
            nameGap: 10,
            nameTextStyle: {
                color: "#666",
                align: "left",
                padding: [0, 0, 0, -leftYWidth * 2]
            },
            "axisLabel": {
                show: true,
              	align: 'left',
                margin: leftYWidth + dis,
                formatter: function (value, index) {
                    let tag = values.length - index;
                    if(tag == 1){
                        return '{firstTag|' + tag + '}  '
                            + '{name|' + value + '}';
                    } else {
                        return '{tag|' + tag + '}  '
                            + '{name|' + value + '}';
                    }
                },
                rich: {
                    firstTag: {
                        color: '#fff',
                        backgroundColor: "#ff6711",
                        width: 24,
                        align: "center",
                        height: 24,
                        lineHeight: 24,
                        borderRadius: 12,
                        fontSize: 14
                    },
                    tag: {
                        color: '#333',
                        backgroundColor: "#cbcedd",
                        width: 24,
                        align: "center",
                        height: 24,
                        lineHeight: 24,
                        borderRadius: 12,
                        fontSize: 14
                    },
                    name: {
                        color: '#333'
                    }
                }
            },
            "show": true,
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": "#eff0f5",
                    "type": "solid"
                }
            },
            "axisLine": {
                "lineStyle": {
                    "color": "#eff0f5",
                    "width": 1,
                    "type": "solid"
                },
                "show": false
            },
        },{
            "data": values,
            name: "价值",
            nameGap: 10,
            nameTextStyle: {
                color: "#666",
                align: "left",
                padding: [0, 0, 0, 0]
            },
            "axisLine":{
                show: false
            },
            axisTick: {
              show: false
            },
            "axisLabel": {
                show: true,
              	align: 'left',
                margin: 0,
                formatter: function (value, index) {
                    let tag = values.length - index;
                    if(tag == 1){
                        return '{firstName|' + value + '}';
                    } else {
                        return '{name|' + value + '}';
                    }
                },
                rich: {
                    firstName: {
                        color: '#ff6711',
                        fontSize: 14
                    },
                    name: {
                        color: '#333',
                        fontSize: 14
                    }
                }
            },
        }
    ],
    "series": [
        {
        type: 'bar',
        barWidth: 5,
        itemStyle: {
            normal: {
                color: function(params){
                    var color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: "#17b4d5" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#6d44f8" // 100% 处的颜色
                    }], false)
                    if(params.dataIndex == values.length-1){
                        color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: "#fee157" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#fa9c5f" // 100% 处的颜色
                        }], false)
                    }
                    return color
                },
            }
        },
        barGap: 0,
        data: values
    },{
        //name: 'a',
        tooltip: {
            show: true
        },
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: function(params){
                    var color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: "#009ab2" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#6124ec" // 100% 处的颜色
                    }], false)
                    if(params.dataIndex == values.length-1){
                        color = new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                            offset: 0,
                            color: "#ffd300" // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: "#ff680f" // 100% 处的颜色
                        }], false)
                    }
                    return color
                },
            }
        },
        data: values,
        barGap: 0
    },  {
        //name: 'b',
        tooltip: {
            show: true
        },
        type: 'pictorialBar',
        itemStyle: {
            borderWidth: 1,
            borderColor: function(params){
                    var color = '#99e5f5'
                    if(params.dataIndex == values.length-1){
                        color = '#ffe97c'
                    }
                    return color
                },
            color: function(params){
                    var color = '#99e5f5'
                    if(params.dataIndex == values.length-1){
                        color = '#ffe97c'
                    }
                    return color
                },
        },
        symbol: 'path://M 0,0 l -30,30 l 0,-60 l 30 -30   z',
        symbolSize: ['4','15'],
        symbolOffset: ['0', '0'],
        symbolRotate: 0,
        symbolPosition: 'end',
        data: values,
        z: 4
    }, {
        //name: 'c',
        tooltip: {
            show: true
        },
        type: 'pictorialBar',
        itemStyle: {
        	borderWidth: 1,
            borderColor: '#fff',
            color: '#fff'
        },
        symbol: 'path://M 0,0 l -30,30 l 0,-60 l 30 -30   z',
        symbolSize: ['4','12'],
        symbolOffset: ['1', '8'],
        symbolRotate: 0,
        symbolPosition: 'end',
        data: values,
        z: 3
    }],
    "tooltip": {
        "show": true
    }
};
return option;