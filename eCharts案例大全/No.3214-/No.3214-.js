// EUI.include("vfs/root/echarts/echarts2.js");
var xAxisData= ['图书馆', '后勤集团', '自助中心', '财务部','学工工作处','招生与就业中心','研究处'];
var data1=[62,60,65,63,62,61,64];
var data2=[24,38,20,21,22,24,26];
var data3=[42,38,41,42,45,46,44]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['未办理','已办理', '今日办理'],
        align: 'right',
        right: 10,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xAxisData,
        axisLine: {
            show: true,
            lineStyle: {
                color: "#063374",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
           show: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#FFFFFF",
            }
        },
    }],
        yAxis: {
            name:'办理率（%）',
            nameTextStyle:{
                color:'#FFFFFF',
            },
       
        type: 'value',
        axisLabel: {
            color: '#96A4F4'
        },
        axisLine: {
            show:false
            // lineStyle: {
            //     color: '#96A4F4'
            // },
            // width: 5
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: [{
        name: '已办理',
        type: 'bar',
        stack:'办理',
        data: data1,
        barWidth: 15, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color:  '#065ADA'
                }, {
                    offset: 1,
                    color: '#22CFF5'
                }]),
                opacity: 1,
            }
        }
    }, 
             {
        name: '未办理',
        type: 'bar',
        stack:'办理',
        data: data2,
        barWidth: 15, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color:  '#000000'
                }, {
                    offset: 1,
                    color: '#000000'
                }]),
                opacity: 0.2,
            }
        }
    },{
        name: '今日办理',
        type: 'bar',
        data: data3,
        barWidth: 15,
        barGap: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#70F3C2'
                }, {
                    offset: 1,
                    color: '#48D69E'
                }]),
                opacity: 1,
            }
        }
    
    }]
};
            return option;
