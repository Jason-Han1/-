//const color = ['#E27471', '#00C8FF', '#E6AF15', '#00E3F3', '#CF83F4', '#6B81E1', '#00FBAE']
// 
option = {
   
    series: [{
        type: 'graph', // 关系图
        name: '黄金时段', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        layout: 'circular', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
        legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
        hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
        coordinateSystem: null, // 坐标系可选
        xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
        yAxisIndex: 0, // y轴坐标 
        circular: {
                rotateLabel: true
            },
        force: { // 力引导图基本配置
            // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
            repulsion: 5000, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength: 200, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
            layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
            // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
        },
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启，true 为都开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'
        nodeScaleRatio: 0.6, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
        draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
        focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
        // symbol:'roundRect', // 关系图节点标记的图形。
        // ECharts 提供的标记类型包括：'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）,
        // 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）
        // 也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
        // symbolSize: 10 , // 也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，
        // 可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
        // symbolRotate:, // 关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
        // symbolOffset:[0,0], // 关系图节点标记相对于原本位置的偏移。[0, '50%']
       // edgeSymbol: ['none', 'arrow'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
        // 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
        edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
        //symbolSize: 15,
        
///////////////////////////////////////////////////////////////////////
        itemStyle: { // ========图形样式，有 normal 和 emphasis 两个状态。
            // normal 是图形在默认状态下的样式；
            // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
            normal: { // 默认样式
                label: {
                    show: false 
                },
                borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                borderColor: 'rgba(205, 149, 12, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

            },
            emphasis: { // 高亮状态

            }
        },
        symbolSize:30,
        lineStyle: { // ========关系边的公用线条样式。
            normal: {
                color: 'source',
                width: '3', //线的粗细
                type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.2, // 线条的曲线程度，从0到1
                opacity: 0.7 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
            },
            emphasis: { // 高亮状态

            }
        },
   
     //  labelLine:'auto',
        edgeLabel: { // ========连接线上的文本标签 
            normal: {
                show: false // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
            },
            emphasis: { // 高亮状态

            }
        },
        categories: [
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4},
    {name: 5},
    {name: 6},
    {name: 7},
    {name: 8},
    {name: 9},
    {name: 10},
    {name: 11},
    {name: 12},
    {name: 13},
    {name: 14},
    {name: 15},
    {name: 16},
    {name: 17},
    {name: 18},
    {name: 19},
    {name: 20}
],

        // 设置结点node的数据
        // category: 类别序号，从0开始
        // name: 结点图形显示的文字
        // value: 鼠标点击结点，显示的数字
        // symbolSize: 结点图形的大小
        // symbol: 类目节点标记图形，默然为圆形
        // label: 标签样式
        data: [
    {name: 1, category: 1},
    {name: 2, category: 2},
    {name: 3, category: 3},
    {name: 4, category: 4},
    {name: 5, category: 5},
    {name: 6, category: 6},
    {name: 7, category: 7},
    {name: 8, category: 8},
    {name: 9, category: 9},
    {name: 10, category: 10},
    {name: 11, category: 11},
    {name: 12, category: 12},
    {name: 13, category: 13},
    {name: 14, category: 14},
    {name: 15, category: 15},
    {name: 16, category: 16},
    {name: 17, category: 17},
    {name: 18, category: 18},
    {name: 19, category: 19},
    {name: 20, category: 20}
],
        links:[
    {source: 1, target: 16},
    {source: 2, target: 8},
    {source: 3, target: 4},
    {source: 4, target: 7},
    {source: 5, target: 4},
    {source: 6, target: 15},
    {source: 7, target: 6},
    {source: 8, target: 16},
    {source: 9, target: 12},
    {source: 10, target: 17},
    {source: 11, target: 2},
    {source: 12, target: 19},
    {source: 13, target: 20},
    {source: 14, target: 5},
    {source: 15, target: 10},
    {source: 16, target: 4},
    {source: 17, target: 1},
    {source: 18, target: 3},
    {source: 19, target: 4},
    {source: 20, target: 5},
    {source: 1, target: 3},
    {source: 2, target: 6},
    {source: 3, target: 16},
    {source: 4, target: 13},
    {source: 5, target: 17},
    {source: 6, target: 19},
    {source: 7, target: 11},
    {source: 8, target: 5},
    {source: 9, target: 8},
    {source: 10, target: 4},
    {source: 11, target: 7},
    {source: 12, target: 4},
    {source: 13, target: 1},
    {source: 14, target: 19},
    {source: 15, target: 20},
    {source: 16, target: 5},
    {source: 17, target: 9},
    {source: 18, target: 14},
    {source: 19, target: 5},
    {source: 20, target: 18},
    {source: 0, target: 18},

]
        
    }]
};