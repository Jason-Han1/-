let seriesData = [5, 20, 36, 10, 10, 20,15];

function getSum(a, b) { //计算数组元素相加后的总和，reduce()方法
    return a + b;
};
let color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //1,0,0,0左右渐变   0,0,0,1上下渐变
        offset: 0,
        color: '#188df0'
    },
    {
        offset: 0.5,
        color: '#00ffff'
    },
    {
        offset: 1,
        color: '#188df0'
    }
]);
let hoverColor = new echarts.graphic.LinearGradient(0, 0, 0, 1,
    [{
            offset: 0,
            color: '#3397ea'
        },
        {
            offset: 0.7,
            color: '#1cc6fa'
        },
        {
            offset: 1,
            color: '#40E0D0'
        }
    ]);
let colorList = ['#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'];
let newColor = []
for (let item in colorList) {
    newColor.push(new echarts.graphic.LinearGradient(1, 0, 0, 0,
        [{
                offset: 0,
                color: colorList[item]
            },
            {
                offset: 0.5,
                color: '#fff'
            },
            {
                offset: 1,
                color: colorList[item]
            }
        ]));
}
var option = {
    title: {
        text: '柱状图基本配置',
        textStyle: {
            fontSize: 14, //字体大小
            color: '#ffffff', //字体颜色						
        },
        // 文字对齐方式需要设置 X/Y轴值
        x: '50%',
        y: '2%',
        textAlign: 'center' //可选值left、right、center
    },
    tooltip: {
        trigger: 'item',
        //鼠标移动显示 需要显示百分比可打开注释
        formatter: function(params) { //params 返回值
            //console.log(params)
            let i = params.dataIndex
            return '销量:' + (seriesData[i] / seriesData.reduce(getSum) * 100).toFixed(2) + '%';
        }
    },
    legend: {
        show:false,
        data: ['销量'],
        textStyle: {
            fontSize: 14, //字体大小
            color: '#ffffff' //字体颜色
        }
    },
    grid: { //生成图表距容器的距离
        left: '2%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick: { //不显示坐标轴刻度线
            show: false,
        },
        axisLine: { //X轴线粗细颜色
            show: false, //不显示坐标轴线
            lineStyle: {
                color: '#fff', // 颜色
                width: 3 // 粗细
            }
        },
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子","风衣"],
        show: true,
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 12, //字体大小
                color: '#ffffff',
            },
            align: 'center',
            interval: 0, //坐标轴刻度标签的显示间隔  
            // rotate:10,//倾斜角度
            // formatter:function(value){//竖列排序  
            // 	return value.split("").join("\n");  
            // } 
        },
    },
    yAxis: {
        show: false, //不显示Y轴
        axisLabel: {
            textStyle: {
                fontSize: 14, //字体大小
                color: '#ffffff'
            }
        },
        axisLine: { //Y轴线粗细颜色
            show: false, //不显示坐标轴线
            lineStyle: {
                color: '#fff', // 颜色
                width: 1 // 粗细
            }
        },
    },
    series: [{
        name: '销量',
        type: 'bar',
        data: seriesData,
        barWidth: '30', //柱宽度	
        label: { //文字提示位置						
            normal: {
                show: true,
                color: 'red',
                position: 'inside', //top、left等柱状外部显示 inside 柱状内部显示 可4个位置显示 例：insideTop 驼峰命名方式
                // a显示的series下的name值 b显示名字 c显示值
                formatter: '{c}',
                //如需要显示百分比可打开注释
                // formatter: function (params) {//params 返回值
                //  //console.log(params)
                //  let i = params.dataIndex
                //  return (seriesData[i] / seriesData.reduce(getSum) * 100).toFixed(2)+'%';
                // },
                textStyle: { //提示文字大小、颜色
                    fontSize: 12,
                    color: '#000'
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0], //柱形图圆角，初始化效果
                //柱状体颜色
                //color:color,
                // 随机显示
                //color:function(d){return "#"+Math.floor(Math.random()*(256*256*256-1)).toString(16)},
                color: function(params) { //设置每个柱的颜色
                    return newColor[params.dataIndex];
                },
                borderWidth: 3, //边框宽度
                shadowBlur: 10, //阴影范围
                borderColor: color, //边框颜色							
                //shadowColor: 'red', //阴影颜色 默认黑色							
            },
            emphasis: { //鼠标移到柱状图背景色
                color: hoverColor,
            }
        }
    }]
};
myChart.setOption(option);