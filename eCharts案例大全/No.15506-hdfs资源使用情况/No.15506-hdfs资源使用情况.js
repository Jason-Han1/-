var uploadedDataURL = "/asset/get/s/data-1490602888744-Bkb5iBU3g.png";


var hdfs_stack_bar_data = {
    "namelist": ["3G4G固网日志", "上网轨迹", "数据源", "标签", "大数据实验室", "BML", "storm", "NOC智能网管", "无线CDR话单", "其他 "],
    "dataArr_bar": {
        "3G4G固网日志": [883.97, 896.18, 906.39, 922.20, 929.44, 941.16, 951.90],
        "上网轨迹": [53.54, 53.65, 53.70, 53.77, 53.84, 53.90, 53.97],
        "数据源": [698.59, 696.31, 696.40, 696.58, 699.57, 702.37, 701.41],
        "标签": [535.76, 536.07, 536.96, 538.39, 539.12, 539.96, 539.17],
        "大数据实验室": [10.46, 10.46, 10.46, 10.46, 10.46, 10.46, 10.46],
        "BML": [204.81, 204.41, 204.46, 204.87, 204.68, 204.77, 203.29],
        "storm": [0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04],
        "NOC智能网管": [95.09, 96.51, 97.62, 99.46, 101.27, 102.01, 102.58],
        "无线CDR话单": [4.04, 4.04, 4.04, 4.04, 4.04, 4.04, 4.06],
        "其他": [301.53, 307.28, 308.99, 311.60, 316.25, 317.57, 319.98]
    },
    "dataArr_line": {
        "3G4G固网日志": [1.15, 1.38, 1.13, 1.74, 0.78, 1.26, 1.14],
        "上网轨迹": [0.1, 0.20, 0.10, 0.12, 0.12, 0.12, 0.12],
        "数据源": [0.01, -0.320, 0.01, 0.02, 0.42, 0.40, -0.13],
        "标签": [0.05, 0.05, 0.16, 0.26, 0.13, 0.15, -0.14],
        "大数据实验室": [0, 0, 0, 0, 0, 0, 0],
        "BML": [0.06, -0.19, 0.02, 0.19, -0.09, 0.04, -0.72],
        "storm": [0, 0, 0, 0, 0, 0, 0],
        "NOC智能网管": [0.62, 1.49, 1.14, 1.88, 1.81, 0.72, 0.55],
        "无线CDR话单": [0, 0, 0, 0, 0, 0, 0],
        "其他": [0.00, 0.64, 0.85, 0.78, 1.93, 0.72, 1.19]
    }
};
var x_line = ["2017-03-10", "2017-03-11", "2017-03-12", "2017-03-13", "2017-03-14", "2017-03-15", "2017-03-16"];
var colorConsArr_hdfs = ["#ffca67", "#ff60a2", "#bf64ff", "#6c65fb", "#93dffc", "#fb915f", "#4fc277", "#3e94fe", "#ff9cc5", "#c46100", "#9de369"];
var option = {
    animation: false,
    backgroundColor: 'rgba(7,14,28,1)', //设置背景色
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        backgroundColor: 'rgba(7,14,28,0.9)',
        // position: function(point, params, dom) {
        //     // 固定在顶部
        //     return [point[0], '10%'];
        // },
        formatter:function(value,index){
            var tooltip='';
            var contentsDiv="";
            var barSum=0,lineSum=0;
            for(var i=0;i<value.length;i++){
            	if(i%2===0){
            		var barValue,lineValue;
            		value[i].hasOwnProperty("value")?barValue=value[i].value:barValue="暂无数据";
            		value[i+1].hasOwnProperty("value")?lineValue=value[i+1].value:lineValue="暂无数据";
            	    barValue.toString().indexOf("暂无数据")<0?barSum+=~~barValue:barSum+=0;
            		lineValue.toString().indexOf("暂无数据")<0?lineSum+=~~lineValue:lineSum+=0;
            		contentsDiv+="<div style='width:270px;height:13px;padding:5px 10px 6px 10px;font-size:14px;color:"+value[i].color+"'>"+"<span style='display:inline-block;margin-bottom:5px;width:12px;height:12px;border-radius:6px;background:"+value[i].color+"'>"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+value[i].seriesName+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+barValue+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:85px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+lineValue+"</span>"+"</div>";
            	}
            }
        	contentsDiv+="<div style='width:270px;height:13px;padding:5px 10px 6px 10px;font-size:14px;color:#6c65fb'>"+"<span style='display:inline-block;margin-bottom:5px;width:12px;height:12px;border-radius:6px;background:url(/asset/get/s/data-1490602888744-Bkb5iBU3g.png) no-repeat center center'>"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:95px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:45px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+barSum+"</span>"+"<span style='display:inline-block;padding:0 5px 0 5px;width:85px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+"增长率"+lineSum+"</span>"+"</div>";
            tooltip="<div style='width:290px;height:100%;border-radius:8px;padding 10px 5px 10px 5px;margin-bottom:15px;'>"+"<span style='display:block;padding:16px 10px 0 10px;font-size:14px;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>"+value[0].axisValue+"资源使用情况"+"</span>"+contentsDiv+"<span style='display:block'>"+"</div>";
            return tooltip;
            
        }
    },
    grid: {
        left: '3%',
        right: '1%',
        bottom: '3%',
        top: "17%",
        containLabel: true,
        borderColor: '#1d203b'
    },
    legend: {
        itemGap: 14,
        right: '16%',
        top: '2%',
        //padding:[40,10,0,10],
        data: [] //ToDo
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: x_line,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        //坐标轴刻度标签
        axisLabel: {
            textStyle: {
                color: "#454e72"
            },
            formatter: function(value, index) {
                var xName = value.substring(value.indexOf("-") + 1);
                return xName.replace(/-/g, ".");
            },
            margin: 20
        },
        splitLine: {
            lineStyle: {
                color: "#1d203b"
            }
        },

    }],
    yAxis: [{
        name: '单位（T）',
        nameGap:20,
        nameTextStyle:{
            color:'#454e72',
            fontSize: 12,
            },
        type: 'value',
        nameGap: 15,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        scale: true,
        axisLabel: {
            // formatter: function(value, idx) {
            //     if (idx === 0) {
            //         return value + "T";
            //     } else {
            //         return value;
            //     }
            // },
            textStyle: {
                color: '#454e72'
            },
            margin: 20
        },
        boundaryGap: [0.2, 0.2],
        splitLine: {
            lineStyle: {
                color: ["#1d203b"]
            }
        }
    }, {
        name: '单位（%）',
        nameGap:20,
        nameTextStyle:{
            color:'#454e72',
            fontSize: 12,
            },
        type: 'value',
        nameGap: 15,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        scale: true,
        axisLabel: {
            // formatter: function(value, idx) {
            //     if (idx === 0) {
            //         return value + "%";
            //     } else {
            //         return value;
            //     }
            // },
            textStyle: {
                color: '#454e72'
            },
            margin: 20
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ["#1d203b"]
            }
        },
        boundaryGap: [0.2, 0.2]
    }],
    series: []
};
for (var i = 0; i < hdfs_stack_bar_data["namelist"].length + 1; i++) {
    var namelist = hdfs_stack_bar_data["namelist"];
    var series = [];
    if (i < hdfs_stack_bar_data["namelist"].length) {
        option.series.push({
            name: namelist[i],
            type: 'bar',
            stack: '广告',
            barWidth: "50%",
            data: hdfs_stack_bar_data['dataArr_bar'][namelist[i]],
            itemStyle: {
                normal: {
                    color: colorConsArr_hdfs[i]
                }
            }
        });
        option.series.push({
            name: namelist[i],
            type: 'line',
            yAxisIndex: 1,
            data: hdfs_stack_bar_data['dataArr_line'][namelist[i]],
            symbol: 'none',
            smooth: true,
            lineStyle: {
                normal: {
                    barBorderRadius: 0,
                    width: 2.5, //连线粗细
                    color: colorConsArr_hdfs[i] //连线颜色
                }
            },
        });
        option.legend.data.push({
            name: namelist[i],
            icon: "circle",
            textStyle: {
                color: []
            }
        });
    } else {
        option.series.push({
            name: "增长率",
            type: 'bar',
            stack: '广告',
            barWidth: "52%",
            data: [],
        });
        option.series.push({
            name: "增长率",
            type: 'line',
            yAxisIndex: 1,
            data: [],
            symbol: 'none',
        });
        option.legend.data.push({
            name: "增长率",
            icon:'image:///asset/get/s/data-1490602888744-Bkb5iBU3g.png',
            selectedMode:false,
            textStyle: {
                color: '#6c65fb',
                fontSize:14,
                
            }
        });
    }

};

myChart.setOption(option);