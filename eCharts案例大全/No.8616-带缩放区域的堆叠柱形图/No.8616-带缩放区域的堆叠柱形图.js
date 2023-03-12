option = {
    // color:['red','yellow','green'],// 手动指定柱状图颜色
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        // formatter:function(params){//悬浮提示窗
        //     var params0Value = params[0].value+"%";
        //     var params1Value = params[0].value+"%";
        //     var params2Value = params[0].value+"%";
        //     if(params[0].value<=0){params0Value = params[0].value}
        //     if(params[1].value<=0){params0Value = params[1].value}
        //     if(params[2].value<=0){params0Value = params[2].value}
        //     return params[0].axisValue+'<br />'+params[0].marker+"初始量："+params0Value+'<br />'+params[1].marker+"已确认量："+params1Value+'<br />'+params[2].marker+"草稿/待确认："+params2Value;
        // }
    },
    legend: {
        // selected:{// false时不显示对应的柱状图
        //     '初始量':true,
        //     '已确认量':true,
        //     '草稿/待确认':true
        // },
        selectedMode:false,//取消图例上的点击事件
        data: ['初始量', '已确认量','草稿/待确认']
    },
    grid: {
        left: '5px',
        right: '4%',
        bottom: '45px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisTick:false,// 不显示x轴的刻度
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日','周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        axisTick:false,// 不显示y轴的刻度
        axisLabel: {
            formatter: '{value}%'
        },
        // axisLine:{
        //     lineStyle:{
        //         color:'#f00',
        //         type:'dashed'
        //     }
        // },
    }],
    "dataZoom": [{
        "xAxisIndex": [0],
        type: 'slider',
        start:0,
        end:60, 
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
    }],
    series: [
        {
            name: '初始量',
            type: 'bar',
            stack: '饱和度',
            barWidth:30,
            itemStyle:{barBorderRadius: [0,0,30,30]},// 设置底部圆头
            data: [10, 13, 11, 13, 30, 23, 21,12, 13, 10, 13, 20, 20, 10]
        },
        {
            name: '已确认量',
            type: 'bar',
            stack: '饱和度',
            barWidth:30,
            data: [20, 18, 19, 23, 29, 33, 31,22, 12, 11, 24, 20, 33, 31]
        },
        {
            name: '草稿/待确认',
            type: 'bar',
            stack: '饱和度',
            //barMaxWidth:30,//柱子的宽度
            barWidth:30,
            itemStyle:{barBorderRadius: [30,30,0,0,]},// 设置顶部圆头
            data: [30, 18, 11, 23, 29, 33, 30,22, 12, 11, 23, 29, 30, 31]
        }
        
    ]
};

/*
以下是参考地址：
https://gallery.echartsjs.com/editor.html?c=xr1-r8UO0G 普通堆叠柱形图
https://gallery.echartsjs.com/editor.html?c=xSJJXiE1Wx 带缩放区域的堆叠柱形图
*/
/*
其它堆叠柱形图参考：
https://gallery.echartsjs.com/editor.html?c=xDP-XWH8Ic 0轴以下的堆叠柱形图
https://gallery.echartsjs.com/editor.html?c=xpPmoaa9rA 动态切换的堆叠柱形图
https://gallery.echartsjs.com/editor.html?c=x-bhPBAmp 原型的堆叠柱形图
https://gallery.echartsjs.com/editor.html?c=x-bhPBAmp 横向显示堆叠柱形图
https://gallery.echartsjs.com/editor.html?c=x-LqTZE4F 显示总数的堆叠柱形图
*/
/* 另一种缩放轴
"dataZoom": [{
    "show": true,
    "height": 30,
    "xAxisIndex": [
        0
    ],
    bottom: 5,
    "start": 10,
    "end": 80,
    handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    handleSize: '110%',
    handleStyle: {
        color: "#d3dee5",
    },
    textStyle: {
        color: "#000"
    },
    borderColor: "rgba(255,255,255,.3)"
}],
*/