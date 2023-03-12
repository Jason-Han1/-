var walk = 'path://M29.902,23.275c1.86,0,3.368-1.506,3.368-3.365c0-1.859-1.508-3.365-3.368-3.365 c-1.857,0-3.365,1.506-3.365,3.365C26.537,21.769,28.045,23.275,29.902,23.275z M36.867,30.74c-1.666-0.467-3.799-1.6-4.732-4.199 c-0.932-2.6-3.131-2.998-4.797-2.998s-7.098,3.894-7.098,3.894c-1.133,1.001-2.1,6.502-0.967,6.769 c1.133,0.269,1.266-1.533,1.934-3.599c0.666-2.065,3.797-3.466,3.797-3.466s0.201,2.467-0.398,3.866 c-0.599,1.399-1.133,2.866-1.467,6.198s-1.6,3.665-3.799,6.266c-2.199,2.598-0.6,3.797,0.398,3.664 c1.002-0.133,5.865-5.598,6.398-6.998c0.533-1.397,0.668-3.732,0.668-3.732s0,0,2.199,1.867c2.199,1.865,2.332,4.6,2.998,7.73 s2.332,0.934,2.332-0.467c0-1.401,0.269-5.465-1-7.064c-1.265-1.6-3.73-3.465-3.73-5.265s1.199-3.732,1.199-3.732 c0.332,1.667,3.335,3.065,5.599,3.399C38.668,33.206,38.533,31.207,36.867,30.74z';

Date.prototype.Format = function (fmt) {  
    var o = {  
        "M+": this.getMonth() + 1, //月份   
        "d+": this.getDate(), //日   
        "h+": this.getHours(), //小时   
        "m+": this.getMinutes(), //分   
        "s+": this.getSeconds(), //秒   
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
        "S": this.getMilliseconds() //毫秒   
    };  
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    for (var k in o)  
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));  
    return fmt;  
}

function createTimeLineOption(){
    var dayNum = 30,
        dayArray = [],
        data = [],
        color = "rgba(255,255,255, 1)";

    for(var i = 29; i >= 0; i--){
        var today = new Date();
        today.setDate(today.getDate() - i);
        var dateStr = today.Format("yyyy-MM-dd");
        dayArray.push(dateStr);
        var barItem = {
            name: dateStr,
            value: 1,
            symbolPosition: 'center',
            itemStyle:{
                        normal:{
                            opacity: i == 0 ? 1 : 0
                        }
                    }
        };
        data.push(barItem);
    }

    var option = {
            backgroundColor:"#333",
            color: [color],
            tooltip : {
                show: false,
                formatter:function(params){
                    return params.data.name;
                }
            },
            grid: {
                left: "0.8%",
                right: "3%",
                top: "10%",
                bottom: "84%",
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : dayArray,
                    boundaryGap: false,
                    axisLine:{
                        lineStyle:{
                            color: color
                        }
                    },
                    axisTick: {
                        interval: 0, //显示所有标签
                        alignWithLabel: true,
                        inside: true,
                        lineStyle:{
                            color: color
                        }
                    },
                    axisLabel:{
                        formatter:function(params){
                            return params.substring(5);
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    max: 1,
                    axisLine:{
                        lineStyle:{
                            color: '#ccc'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        show:false
                    },
                    interval: 1,
                    splitLine:{
                        show:true
                    }
                },
                {
                    type : 'value',
                    max: 1,
                    axisLine:{
                        lineStyle:{
                            color: '#ccc'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    axisLabel:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            series : [
                {
                    type: 'pictorialBar',
                    name: 'pictorial element',
                    symbol: walk,
                    symbolSize: [10, 25],
                    z: 10,
                    data: data,
                }
            ]
    };
    return option;
}

var option = createTimeLineOption();

myChart.on("click", function(params){
    var selectedDate = params.data.name;
    var barData = option.series[0].data;
    for(var i in barData){
        if(barData[i].name == selectedDate){
            barData[i].itemStyle.normal.opacity = 1;
        }else {
            barData[i].itemStyle.normal.opacity = 0;
        }
    }
    myChart.setOption(option);

    //selectedDate位当前选中时间
})