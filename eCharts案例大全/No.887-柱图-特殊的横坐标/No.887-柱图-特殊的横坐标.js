var XData=["甘肃", "青海", "内蒙古", "重庆", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "江西", "山东", "河南", "湖南", "湖北", "广东", "海南", "四川", "贵州", "云南"];
var yData=[];
XData.map(function(){
    yData.push((Math.random()*1000+100).toFixed(0))
})
var dataMin=parseInt(Math.min.apply(null, yData)/2);
for(var i=0;i<XData.length;i++){
    
}
option = {
    backgroundColor:"#080f15",
    xAxis: {
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        },
        data: XData,
        axisLabel: {
            formatter: function(value) {
                var ret = ""; //拼接加\n返回的类目项
                var maxLength = 1; //每项显示文字个数
                var valLength = value.length; //X轴类目项的文字个数
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1) //如果类目项的文字大于3,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串
                        var start = i * maxLength; //开始截取的位置
                        var end = start + maxLength; //结束截取的位置
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串
                    }
                    return ret;
                } else {
                    return value;
                }
            },
            interval: 0,
            fontSize: 16,
            fontWeight: 100,
            textStyle: {
                color: '#9faeb5',

            }
        },
        axisLine: {
            lineStyle: {
                color: '#4d4d4d'
            }
        }
    },
    yAxis: {
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        },
        min: dataMin,
        axisLabel: {
            textStyle: {
                color: '#9faeb5',
                fontSize: 16,
            }
        },
        axisLine: {
            lineStyle: {
                color: '#4d4d4d'
            }
        }
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    series: {
        type:"bar",
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#00d386' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0076fc' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                barBorderRadius: 15,
            }
        },
        // barWidth: 7,
        data: yData
    }
};