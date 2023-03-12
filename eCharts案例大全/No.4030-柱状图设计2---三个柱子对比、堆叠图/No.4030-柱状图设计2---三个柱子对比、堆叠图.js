//chunlynn个人备份柱状图参数设计

var colors = ['#3A85D3', '#5AD8A6', '#008000', '#5470c6', '#61a0a8'];

option = {
    color: colors, //下面这种直接配置演示也行
    //color: ['#3A85D3','#5AD8A6','#5470c6',  '#008000', '#61a0a8'], //依次选择颜色，默认为第一个颜色，多根柱子多个颜色

    title: {
        text: "油耗数据统计对比",
        subtext: "实时数据",
        left: "center" //title 组件离容器左侧的距离，也可以是像素，和百分比
    },

    tooltip: {
        trigger: 'axis', //触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据，
        axisPointer: {     // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow' | 'cross' , shadow表示阴影，cross为十字准星
        },
        
        formatter: function(params) {
            //params[0].marker,marker参数为提示语前面的小圆点
            return params[0].name +
                "<br>" +params[0].marker +"进油功率：" + params[0].value +   
                "<br>" + params[1].marker +"净功率："+  params[1].value+
                "<br>" + params[2].marker +"回油功率：" + -params[2].value;
        }
        
    },
    legend: {
        data: ['进油功率', '净功率', '回油功率'],
        left: "5%" //组件离容器左侧的距离，可以是left,center,right，也可以是像素px和百分比10%
    },
    //backgroundColor: '#00199',//整个绘图背景色
    grid: {
        left: '3%',
        right: '4%',
        bottom: '9%', //网格图（柱状图、折线图、气泡图等）离底部的距离，也可以用像素比如10px
        containLabel: true //grid 区域是否包含坐标轴的刻度标签。false可能溢出，默认为false
    },
    
    // 缩放组件
    dataZoom: {
        type: 'slider',
        start: 0,
        end: 80 //缩放组件显示70%的位置
    },
    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: { //让x轴左边的数显示为正数
            formatter: function(v) {
                return v > 0 ? v : -v;
            }
        }

    }],
    series: [{
            name: '进油功率',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [320, 302, 341, 374, 390, 450, 420]

        },
        {
            name: '净功率',
            type: 'bar',

            label: {
                show: true
            },
            data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
            name: '回油功率',
            type: 'bar',
            stack: '总量',
            label: {
                show: true, //控制柱状图是否显示数值
                // position: 'left',
                formatter: function(params) { //格式化柱状图里的数字
                    return -params.value
                }
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};