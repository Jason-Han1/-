option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['新店', '存量店']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2020', '2021']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '新店',
            type: 'bar',
            stack: '广告',
            // markLine: {
            //     symbol: ['none', 'arrow'], //['none']表示是一条横线；['arrow', 'none']表示线的左边是箭头，右边没右箭头；['none','arrow']表示线的左边没有箭头，右边有箭头
            //     label: {
            //         position: "start" //将警示值放在哪个位置，三个值“start”,"middle","end" 开始 中点 结束
            //     },
            //     // data: [{
            //     //     silent: false, //鼠标悬停事件 true没有，false有
            //     //     lineStyle: { //警戒线的样式 ，虚实 颜色
            //     //         type: "dotted", //样式  ‘solid’和'dotted'
            //     //         color: "#fbb8ac",
            //     //         width: 3 //宽度
            //     //     },
            //     //     yAxis: 302 // 警戒线的标注值，可以有多个yAxis,多条警示线 或者采用 {type : 'average', name: '平均值'}，type值有 max min average，分为最大，最小，平均值
            //     // }]
            //     data : [
            //         {type : 'min',
            //              name: '预警线'
            //         },
            //         {type : 'max',
            //              name: '预警线'
            //         }
            //     ]

            // },
            data: [120, 132]
        },
        {
            name: '存量店',
            type: 'bar',
            stack: '广告',
            markLine: {
                symbol: ['none', 'arrow'], //['none']表示是一条横线；['arrow', 'none']表示线的左边是箭头，右边没右箭头；['none','arrow']表示线的左边没有箭头，右边有箭头
                label: {
                    position: "start" //将警示值放在哪个位置，三个值“start”,"middle","end" 开始 中点 结束
                },
                // data: [{
                //     silent: false, //鼠标悬停事件 true没有，false有
                //     lineStyle: { //警戒线的样式 ，虚实 颜色
                //         type: "dotted", //样式  ‘solid’和'dotted'
                //         color: "#fbb8ac",
                //         width: 3 //宽度
                //     },
                //     yAxis: 302 // 警戒线的标注值，可以有多个yAxis,多条警示线 或者采用 {type : 'average', name: '平均值'}，type值有 max min average，分为最大，最小，平均值
                // }]
                data : [
                    {type : 'min',
                         name: '预警线'
                    },
                    {type : 'max',
                         name: '预警线'
                    }
                ]

            },
            data: [182, 220]
        }
    ]
};