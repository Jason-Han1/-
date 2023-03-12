app.title = '坐标轴刻度与标签对齐';
var seriesData = [
            {
                value: 52,
                itemStyle: {
                    normal : {
                      color: "#4478FC",
                      barBorderRadius: [5, 5, 0, 0] //圆角
                    } 
                }
                
            }, {
                "value": 50,
                "itemStyle": {
                    normal : {
                      color: "#28b6f6",
                      barBorderRadius: [5, 5, 0, 0] //圆角
                    } 
                }
            },{
                "value": 45,
                "itemStyle": {
                    normal : {
                      color: "#3ecfc1",
                      barBorderRadius: [5, 5, 0, 0] //圆角
                    } 
                }
            }]
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top:'5%'
    },
    xAxis : [
        {
            type : 'category',
            data : [2019,'去年同期','考核要求'],
            axisTick: {
                show:false,
            },
            axisLabel: {
                color : '#fff',
                fontSize:16
            },
            axisLine : {
                show : true,
                lineStyle : {
                    color : '#5e99c6'
                }
            }
        }
    ],
    yAxis : [{
            type : 'value',
            axisLabel: {
                show: false
            },
            axisTick: { //刻度值线
                 show: false
            },
            splitLine: { //网格线
                 show: false
            },
            axisLine: {
                show: false,
            },
            splitArea: {
    			show: false
    		}
        }
    ],
    series : [{
            type:'bar',
            barWidth: '40',
            "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
            data:seriesData
        }
    ]
};
