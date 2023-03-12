option = {
    title: {
        left: 'center', //可以设置标题是否居中
        text: '柱形图学习',
        textStyle: {
            algin: 'left',
            color: 'red', //字体颜色
            fontSize: '30', //字体大小
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
        },
    },
    tooltip: {
        //提示框组件
        trigger: 'axis', //提示框类型，目前只知道这一个，等知道其他的再总结,
        textStyle: {
            //可以设置字体样式
            color: 'blue',
        },
        formatter: function (params) {
            console.log(params); //控制台输出后可以看到都有哪些值
            var 柱形图下方标题名字 = params[0].name;
            console.log('该方法 只要鼠标落在上面就会提示信息。');

            var re = '';
            re = "提示信息可以任意组合<br>还支持HTML代码<br><span style='color:red;'>当前值：</span>" + params[0].value;
            return re;
        },
        axisPointer: {
            type: 'shadow', //阴影指示器，鼠标放在上面会有阴影 还可以用line 是 线
            label: {
                backgroundColor: '#000',
            },
        },
        backgroundColor: '#000',
    },
    grid: {
        //整体表格的上下左右距离

        left: '2%',
        right: '4%',
        bottom: '6%',
        top: 55,
        padding: '0 0 0 0',
        containLabel: true,
    },
    legend: {
        //图例组件，颜色和名字
        //top:50,
        right: 10,
        top: 50,
        itemGap: 16,
        itemWidth: 18,
        itemHeight: 10,
        data: name,
        textStyle: {
            color: 'red',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 22,
        },
    },
    xAxis: {
        boundaryGap: true, //坐标轴两边留白
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        axisLine: {
            //坐标轴轴线相关设置
            show: true,
            lineStyle: {
                color: 'yellow',
                opacity: 0.9,
            },
        },
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310],
            label: {
                //图形上的文本标签
                normal: {
                    show: true,
                    position: 'top',
                    formatter: function (params) {
                        return params.value + '{a|我可以有}{b|单独颜色}'; //注意这里不支持html
                    },
                    textStyle: {
                        color: 'red',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 20,
                    },
                    rich: {
                        a: {
                            color: '#03adff',
                            fontSize: 18,
                            fontWeight: 'bold',
                        },
                        b: {
                            color: 'yellow',
                            fontSize: 16,
                            marginTop: 15,
                        },
                    },
                },
            },
        },
    ],
};
