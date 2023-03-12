option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        show: true,
        enterable:true,
        trigger: 'axis',
        showDelay: 0,//显示延时，添加显示延时可以避免频繁切换
        //hideDelay: 50,//隐藏延时
        alwaysShowContent: true,
        transitionDuration: 0,//动画变换时长
        backgroundColor: 'rgba(0,0,0,0.7)',//背景颜色（此时为默认色）
        borderRadius: 8,//边框圆角
        padding: 10,    // [5, 10, 15, 20] 内边距
        position: function (p) {
            // 位置回调
            return [p[0] + 10, p[1] - 10];
        },
        formatter: function (params, ticket, callback) {
            var res = "测试" + ' : ' + params[0].name + "<br/>";
            for (var i = 0, l = params.length; i < l; i++) {
               res += '<br/>' + params[i].seriesName + ' : ' + params[i].value;//鼠标悬浮显示的字符串内容
            }
            setTimeout(function () {
             // 仅为了模拟异步回调
                callback(ticket, res);
            }, 1000)
            return 'loading...';
        }               
    },
    legend: {
        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            barWidth:'50',
            data:[120, 132, 101, 134, 90, 230, 210],
            itemStyle: { 
                normal: {
                    barBorderColor:'red',
                    barBorderWidth: 2,
                    color:function (value){
                        return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
                    }
                }
            }
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            barWidth:'50',
            data:[220, 182, 191, 234, 290, 330, 310],
            itemStyle: { 
                normal: {
                    barBorderWidth: 2,
                    barBorderColor:'green',
                    normal: {
                        color:function (value){
                            return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
                        }
                    }
                }
            }
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            barWidth:'50',
            data:[150, 232, 201, 154, 190, 330, 410],
            itemStyle: { 
                normal: {
                    color:function (value){
                        return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
                    }
                }
            }
        },
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            barWidth:'50',
            data:[320, 332, 301, 334, 390, 330, 320],
            itemStyle: { 
                normal: {
                    color:function (value){
                        return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
                    }
                }
            }
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            barWidth:'50',
            data:[820, 932, 901, 934, 1290, 1330, 1320],
            itemStyle: { 
                normal: {
                    color:function (value){
                        return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6); 
                    }
                }
            }
        }
    ]
};
