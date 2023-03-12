/*---------------------数据----------------------------*/
var echartData = [{
    value: 98,//时间
    name: '已使用'
}, {
    value: 50,
    name: '未使用'
}];


/*---------------------颜色变量----------------------------*/
//蓝色
var innerColor = 'red'; //内层颜色
var outColor = "white"; //外层边框色粗
var textColor = '#50e0ff'; //文字颜色
//绿色
// var innerColor = '#50e0ff'; //内层颜色
// var outColor = "#2bff8f"; //外层边框色粗
// var textColor = '#50e0ff'; //文字颜色
// var startColor = 'rgba(43,255,143,0.1)'; //中间饼图渐变开始颜色
// var endColor = 'rgba(43,255,143,0.8)'; //中间饼图渐变结束颜色


/*---------------------缩放----------------------------*/
var scale = 1;

/*---------------------富文本----------------------------*/
var rich = {
    time: {
        color: innerColor,
        fontSize: 32 * scale,
        padding: [0, 0],
        fontWeight:'bold'
    },
    unit:{
        color: innerColor,
        fontSize: 14 * scale,
        padding: [0,0,0, 0],
        verticalAlign:'bottom',
    }
}


option = {
    backgroundColor: '#ffff',
    title: [{
        text: '已使用',
        x: '50%',
        y: '55%',
        textAlign: 'center',
        textStyle: {
            color: 'yellow',
            textAlign: 'center',
            fontSize: 24 * scale,
            fontWeight: 'bold'
        },
    }],
    legend: {
        show: false,
        itemGap: 12,
        data: ['已使用', '未使用']
    },
    series: [
        //内圈圆环
        {
            name: 'Line',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['50%', '51.5%'],
            itemStyle: {
                normal: {
                    color: 'blue'
                }
            },
            data: [{
                value: 10,
                name: '',
            }],
            label: {
                normal: {
                    formatter: function(params) {
                        var time = echartData[0].value;
                        return '{time|' + time + '}{unit|min}';
                    },
                    position: 'center',
                    textStyle: {
                        fontSize: 38 * scale,
                        fontWeight: 'bold',
                        color: textColor
                    },
                    rich:rich
                }
            }
        },
        {
            name: 'pie',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['75%', '65%'],
            color:['red', 'green'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            data:echartData,
        }
    ],
};
