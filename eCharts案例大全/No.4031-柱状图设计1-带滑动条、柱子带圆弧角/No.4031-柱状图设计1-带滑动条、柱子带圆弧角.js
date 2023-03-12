//chunlynn个人备份柱状图参数设计

var colors = ['#3A85D3', '#5AD8A6', '#5470c6', '#008000', '#61a0a8'];

option = {
    title: { //图表的标题，注释掉就没有名称了
        text: '柱状图设计1-带滑动条、柱子带圆弧角'
    },
    color: colors, //下面这种直接配置演示也行
    //color: ['#3A85D3','#5AD8A6','#5470c6',  '#008000', '#61a0a8'], //依次选择颜色，默认为第一个颜色，多根柱子多个颜色
    tooltip: {
        trigger: 'axis', //触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据，
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '线下访问'], //这里设置柱状图上面的方块，名称跟series里的name保持一致
        align: 'right', //上面方块靠右还是居中的设置.不设置则居中
        right: 10
    },
    grid: {
        left: '3%', //柱状图距离左边的距离，也可以用像素px
        right: '4%', //柱状图距离右边的距离，也可以用像素px
        bottom: '8%', //网格图（柱状图、折线图、气泡图等）离底部的距离，也可以用像素比如10px
        containLabel: true //grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
    },
  
    // 缩放组件
    dataZoom: {
        type: 'slider',
        start:0,
        end:80  //缩放组件显示70%的位置
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue飞飞飞', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            rotate: 45 //控制柱状图X轴label是否倾斜显示
        },
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{ //柱状图-柱子1 
            name: '直接访问', //需要跟legend配置项对应
            type: 'bar',
            itemStyle: {
                barBorderRadius: [10, 10, 0, 0] //控制柱状图的圆角显示弧度，（顺时针左上，右上，右下，左下）
            },
            barWidth: '30%', //barWidth设置每根柱状图的宽度
            data: [10, 52, 200, 334, 390, 330, 220, 34, 67, 12, 123, 255]
        },
        { //柱状图-柱子2
            name: '线下访问',
            type: 'bar',
            //itemStyle: {
            //    barBorderRadius: [10, 10, 0, 0] //控制柱状图的圆角显示弧度，（顺时针左上，右上，右下，左下）
            //},
            barWidth: '30%',
            data: [10, 66, 98, 289, 370, 310, 200, 134, 67, 12, 123, 240]
        },



    ]
};