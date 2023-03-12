/*
https://www.makeapie.com/editor.html?c=xUWH8iTFwH 半环跑道占比图
*/

var getxsbl = [0, 26.5, 32.5, 27.5, 20]; //学士比例
var getssbl = [0, 42.5, 47.5, 42.5, 20]; //硕士比例
var getbsbl = [0, 30, 20, 30, 60]; //博士比例
var getjslb = ['', '校内专任', '校内兼课', '校外兼职', '校外兼课'];

// 对于颜色的处理
function getxsblFn(){
    return getxsbl.map((item,index) => {
        return {
            value:item,
            itemStyle:{
                //color:['red','green','purple','pink','blue'][index]
                color:'red'
            }
        }
    })
}

option = {
    polar: {
        //radius: ['50%', '100%'],
        radius: '100%', // 图形大小
        //center: ['100%', '50%'],// 移动位置可以显示在最右侧
    },
    angleAxis: {
        type: 'value',
        startAngle: -270,
        min: 0,
        max: 200,// 分组总和超过1/2的话，就不是半圆了！！！
        clockwise: false, // 逆时针
        axisLine: false,
        axisTick: false,
        splitLine: false,
        axisLabel: false,
    },
    radiusAxis: {
        show: false,
        data: getjslb,
    },
    color: ['#4E7BFE', '#26D080', '#F6C137'],
    series: [
        {
            name: '学士',
            type: 'bar',
            stack: '学位',
            roundCap: true,
            coordinateSystem: 'polar',
            barWidth: 17, //宽度
            z:3,
            data:getxsblFn()
        },
        {
            name: '硕士',
            type: 'bar',
            stack: '学位',
            roundCap: true,
            coordinateSystem: 'polar',
            barWidth: 17, //宽度
            data: getssbl,
            z:2,
        },
        {
            name: '博士',
            type: 'bar',
            stack: '学位',
            roundCap: true,
            coordinateSystem: 'polar',
            barWidth: 17, //宽度
            data: getbsbl,
            z:1,
        },
    ],
};

/*
dataIndex: 第几组数据
seriesIndex：组内的第几个数据
value：数值
*/
myChart.on('click', function (params) {
    console.log(params);
    console.log(params.dataIndex + '---' + params.seriesIndex);
});


/* 扩展阅读
https://echarts.apache.org/examples/zh/editor.html?c=bar-polar-stack 极坐标系下的堆叠(官方示例)
https://www.makeapie.com/editor.html?c=xOrP450pPo 消费行为
https://www.makeapie.com/editor.html?c=xXZrNfnDaX 带圆角的仪表盘
*/
