var Cdata = [
    {
        name: '人',
        symbol: 'circle', // 设置圆的样式，可直接填图片的url('image://url')或者'path://'设置矢量图
        // symbol: 'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
    },
    {name: '物证'},
    {name: '不明物体'},
    {name: '不明物体1'}
]
            
var Sdata = [
    { name: '张三1', category: 3 },
    { name: '张三', category: 0 },
    { name: '李四', category: 0 },
    { name: '赖子', category: 0 },
    { name: '毛发', category: 1 },
    { name: '刀', category: 1 },
    { name: '指纹', category: 1 },
    { name: '无名尸', category: 2 },
    { name: '无名尸1', category: 2 }
]

var linkData = [
   /* 
        source: 父节点
        target: 子节点
    */
    { source: '张三1', target: '无名尸1' },
    { source: '毛发', target: '刀' },
    { source: '毛发', target: '指纹' },
    { source: '毛发', target: '张三' },
    { source: '毛发', target: '李四' },
    { source: '刀', target: '无名尸'  },
    { source: '李四', target: '赖子' },
    { source: '赖子', target: '李四' },
    { source: '李四', target: '王五' }
]
var color = ['#82dffe','#04f2a7','#b457ff','rgba(242, 157, 11, 1)']
function solve_Sdata(val){
    for(var i=0; i<val.length; i++){
        val[i] = {
            name: val[i].name,
            symbolSize: 50, // 控制每个圆的大小
            draggable: true, // 控制是否可拖动
            category: val[i].category, // 对应工具显示隐藏
            itemStyle: {
                normal: {
                    borderColor: '#fff', //圆边框的颜色
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: 'rgba(98, 198, 248, 0.5)', //圆边框阴影的颜色
                    color: color[val[i].category], // 圆背景的颜色
                }
            }
        }
    }
    return val
}

function solve_linkData(val){
    for(var i=0; i<val.length; i++){
        val[i]['lineStyle'] = {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#7c785b' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#eda553' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        }
    }
   return val 
}

var series = [
    {
        type: 'graph',
        layout: 'force',
        force:{
            repulsion:1000,
            edgeLength:50
        },
        symbolSize: 50,
        roam: true, // 整个是否可拖动
        label: {
            normal: {// 配置圆内文字
                show: true, // 圆圈中文字是否显示
                // position: "bottom" // 设置为path时再开启文字在下方显示，避免挡住图片
            }
        },
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: { // 连线上的文字配置
                show: false, //是否显示
                textStyle: {
                    fontSize: 13,
                    color: "#fff"
                },
                formatter: "{c}"
            }
        },
        edgeSymbol: ['circle', 'arrow'], // 连接线的指向箭头
        data: solve_Sdata(Sdata),
        links: solve_linkData(linkData), //父-->子节点数据
        lineStyle: {
            normal: {
                opacity: 0.8,
                width: 3,
                curveness: 0.1 // 连接线的弯曲程度
            }
        },
        categories: Cdata //圆的类别组件数据
    }
]

option = {
        backgroundColor: '#0B1321',
        title: {
            text: 'Graph 可配置案例',
            textStyle:{
               color: '#fff' 
            }
        },
        tooltip: {},
        toolbox: { // 工具
            show: true,
            feature: {
                restore: { // 还原
                    show: true
                },
                saveAsImage: { // 图片下载
                    show: false
                }
            },
            iconStyle: { //设置工具的颜色
                borderColor: "#fff"
            },
            left: 'left',
            top: '5%'
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color: color,
        legend: { // 圆的类别组件配置
            show: true,
            textStyle: {
                color: "#fff"
            },
        },
        series: series
        
    }