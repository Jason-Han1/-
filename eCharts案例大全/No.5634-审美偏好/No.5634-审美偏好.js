option =
{
    // 图表标题
    title: {
        show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '审美偏好',//主标题文本，'\n'指定换行
        x: 'center',        // 水平安放位置，默认为左对齐，可选为：
                          // 'center' ¦ 'left' ¦ 'right'
                          // ¦ {number}（x坐标，单位px）
        y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
                          // 'top' ¦ 'bottom' ¦ 'center'
                          // ¦ {number}（y坐标，单位px）
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: '#ccc',    // 标题边框颜色
        borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                // 接受数组分别设定上右下左边距，同css
        itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333'        // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa'        // 副标题文字颜色
        }
    },
    tooltip: {
        show: true, // 默认显示
        showContent: true, // 是否显示提示框浮层
        trigger: 'item', // 触发类型，默认数据项触发
        triggerOn: 'mousemove', // 提示触发条件，mousemove鼠标移至触发，还有click点击触发
        alwaysShowContent: false, // 默认离开提示框区域隐藏，true为一直显示
        showDelay: 100, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
        hideDelay: 2000, // 浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
        enterable: false, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
        position: 'right', // 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。只在 trigger 为'item'的时候有效。
        confine: false, // 是否将 tooltip 框限制在图表的区域内。
        // 外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。
        transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是秒，设置为 0 的时候会紧跟着鼠标移动。
    },
    legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
        show: true,
        data: [
            {
                name: '感受'
            },
            {
                name: '客观'
            },
        ]
    },
    series: [{
        type: 'graph', // 关系图
        name: '因素', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        layout: 'force', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
        legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
        hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
        coordinateSystem: null, // 坐标系可选
        xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
        yAxisIndex: 0, // y轴坐标 
        force: { // 力引导图基本配置
            // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
            repulsion: 1000, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            gravity: 0.05, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength:500, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
            layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
            // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
        },
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启，true 为都开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'
        nodeScaleRatio: 1, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
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
        edgeSymbol: ['none', 'none'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
        // 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
        edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

        itemStyle: { // ========图形样式，有 normal 和 emphasis 两个状态。
            // normal 是图形在默认状态下的样式；
            // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
            normal: { // 默认样式
                label: {
                    show: true
                },
                // borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                // borderColor: 'rgba(205, 149, 12, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                // borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

            },
            emphasis: { // 高亮状态

            }
        },
        lineStyle: { // ========关系边的公用线条样式。
            normal: {
                color: 'rgba(1, 1, 1, 0.5)',
                width: '0.5', //线的粗细
                type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.3, // 线条的曲线程度，从0到1
                opacity: 0.2 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
            },
            emphasis: { // 高亮状态

            }
        },
        label: { // ========结点图形上的文本标签
            normal: {
                show: false, // 是否显示标签。
                position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
                textStyle: { // 标签的字体样式
                    color: '#000000', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                    fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight: 'normal', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
                    fontFamily: 'sans-serif', // 文字的字体系列
                    fontSize: 12, // 字体大小
                }
            },
            emphasis: { // 高亮状态

            }
        },
        edgeLabel: { // ========连接线上的文本标签 
            normal: {
                show: false // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
            },
            emphasis: { // 高亮状态

            }
        },
        categories: [ // name(类别名称)要同legend(图例）按次序一致
            {
                name: '感受',
                itemStyle: {
                    normal: {
                        color: '#EA5514'
                    }
                }
            },
            {
                name: '客观',
                itemStyle: {
                    normal: {
                        color: '#036EB8'
                    }
                }
            },
           
        ],
        // 设置结点node的数据
        // category: 类别序号，从0开始
        // name: 结点图形显示的文字
        // value: 鼠标点击结点，显示的数字
        // symbolSize: 结点图形的大小
        // symbol: 类目节点标记图形，默然为圆形
        // label: 标签样式
        data: [
{ category: '感受', name: '粗旷', value: 14, symbolSize: 14*2},
{ category: '感受', name: '整齐有序', value: 34, symbolSize: 34*2},
{ category: '感受', name: '完美', value: 8, symbolSize: 8*2},
{ category: '感受', name: '柔和', value: 28, symbolSize: 28*2},
{ category: '感受', name: '视觉冲击', value: 51, symbolSize: 51*2},
{ category: '感受', name: '精致', value: 38, symbolSize: 38*2},
{ category: '感受', name: '故事性', value: 37, symbolSize: 37*2},
{ category: '感受', name: '细腻', value: 22, symbolSize: 22*2},
{ category: '感受', name: '可爱', value: 21, symbolSize: 21*2},
{ category: '感受', name: '有创意', value: 14, symbolSize: 14*2},
{ category: '感受', name: '生命力', value: 11, symbolSize: 14*2},
{ category: '感受', name: '新奇', value: 14, symbolSize: 14*2},
{ category: '感受', name: '幽默', value: 14, symbolSize: 14*2},
{ category: '感受', name: '明快活力', value: 14, symbolSize: 14*2},
{ category: '感受', name: '抽象', value: 14, symbolSize: 14*2},
{ category: '感受', name: '浊', value: 14, symbolSize: 14*2},
{ category: '客观', name: '鱼眼', value: 1, symbolSize: 1*2},
{ category: '客观', name: '渐变', value: 12, symbolSize: 12*2},
{ category: '客观', name: '曲线', value: 11, symbolSize: 11*2},
{ category: '客观', name: '颗粒渐变', value: 8, symbolSize: 8*2},
{ category: '客观', name: '反光材质', value: 11, symbolSize: 11*2},
{ category: '客观', name: '光影柔和', value: 40, symbolSize: 40*2},
{ category: '客观', name: '排版', value: 41, symbolSize: 41*2},
{ category: '客观', name: '光影强烈', value: 18, symbolSize: 18*2},
{ category: '客观', name: '透光材质', value: 18, symbolSize: 18*2},
{ category: '客观', name: '自然', value: 16, symbolSize: 16*2},
{ category: '客观', name: '矢量', value: 13, symbolSize: 13*2},
{ category: '客观', name: '动物', value: 11, symbolSize: 11*2},
{ category: '客观', name: '拼贴', value: 9, symbolSize: 9*2},
{ category: '客观', name: '聚焦', value: 4, symbolSize: 4*2},
{ category: '客观', name: '拟人', value: 7, symbolSize: 7*2},
{ category: '客观', name: '插画', value: 7, symbolSize: 7*2},
{ category: '客观', name: '超现实', value: 7, symbolSize: 7*2},
{ category: '客观', name: '未来', value: 7, symbolSize: 7*2},
{ category: '客观', name: '笔触', value: 4, symbolSize: 4*2},
{ category: '客观', name: '复古', value: 6, symbolSize: 6*2},
{ category: '客观', name: '科技', value: 3, symbolSize: 3*2},
{ category: '客观', name: '图章', value: 2, symbolSize: 2},
                     ],
        links: [ // 设置连线edges的数据
{ source:'自然', target:'透光材质', value: 1 },
{ source:'自然', target:'曲线', value: 1 },
{ source:'自然', target:'光影柔和', value: 1 },
{ source:'自然', target:'反光材质', value: 1 },
{ source:'浊', target:'视觉冲击', value: 1 },
{ source:'浊', target:'故事性', value: 1 },
{ source:'浊', target:'粗旷', value: 1 },
{ source:'浊', target:'插画', value: 1 },
{ source:'浊', target:'笔触', value: 1 },
{ source:'质感', target:'自然', value: 1 },
{ source:'质感', target:'整齐有序', value: 1 },
{ source:'质感', target:'细腻', value: 1 },
{ source:'质感', target:'未来', value: 1 },
{ source:'质感', target:'透光材质', value: 1 },
{ source:'质感', target:'舒服', value: 1 },
{ source:'质感', target:'矢量', value: 1 },
{ source:'质感', target:'生命力', value: 1 },
{ source:'质感', target:'柔和', value: 1 },
{ source:'质感', target:'曲线', value: 1 },
{ source:'质感', target:'拼贴', value: 1 },
{ source:'质感', target:'排版', value: 1 },
{ source:'质感', target:'聚焦', value: 1 },
{ source:'质感', target:'精致', value: 1 },
{ source:'质感', target:'光影柔和', value: 1 },
{ source:'质感', target:'光影强烈', value: 1 },
{ source:'质感', target:'复古', value: 1 },
{ source:'质感', target:'反光材质', value: 1 },
{ source:'整齐有序', target:'自然', value: 1 },
{ source:'整齐有序', target:'质感', value: 1 },
{ source:'整齐有序', target:'整齐有序', value: 1 },
{ source:'整齐有序', target:'有创意', value: 1 },
{ source:'整齐有序', target:'细腻', value: 1 },
{ source:'整齐有序', target:'透光材质', value: 1 },
{ source:'整齐有序', target:'舒服', value: 1 },
{ source:'整齐有序', target:'视觉冲击', value: 1 },
{ source:'整齐有序', target:'矢量', value: 1 },
{ source:'整齐有序', target:'柔和', value: 1 },
{ source:'整齐有序', target:'曲线', value: 1 },
{ source:'整齐有序', target:'拼贴', value: 1 },
{ source:'整齐有序', target:'排版', value: 1 },
{ source:'整齐有序', target:'拟人', value: 1 },
{ source:'整齐有序', target:'颗粒渐变', value: 1 },
{ source:'整齐有序', target:'聚焦', value: 1 },
{ source:'整齐有序', target:'精致', value: 1 },
{ source:'整齐有序', target:'光影柔和', value: 1 },
{ source:'整齐有序', target:'光影强烈', value: 1 },
{ source:'整齐有序', target:'故事性', value: 1 },
{ source:'整齐有序', target:'反光材质', value: 1 },
{ source:'整齐有序', target:'动物', value: 1 },
{ source:'整齐有序', target:'抽象', value: 1 },
{ source:'整齐有序', target:'超现实', value: 1 },
{ source:'整齐有序', target:'笔触', value: 1 },
{ source:'有创意', target:'质感', value: 1 },
{ source:'有创意', target:'整齐有序', value: 1 },
{ source:'有创意', target:'新奇', value: 1 },
{ source:'有创意', target:'透光材质', value: 1 },
{ source:'有创意', target:'视觉冲击', value: 1 },
{ source:'有创意', target:'矢量', value: 1 },
{ source:'有创意', target:'柔和', value: 1 },
{ source:'有创意', target:'曲线', value: 1 },
{ source:'有创意', target:'拼贴', value: 1 },
{ source:'有创意', target:'排版', value: 1 },
{ source:'有创意', target:'可爱', value: 1 },
{ source:'有创意', target:'聚焦', value: 1 },
{ source:'有创意', target:'精致', value: 1 },
{ source:'有创意', target:'光影柔和', value: 1 },
{ source:'有创意', target:'光影强烈', value: 1 },
{ source:'有创意', target:'故事性', value: 1 },
{ source:'有创意', target:'复古', value: 1 },
{ source:'有创意', target:'动物', value: 1 },
{ source:'有创意', target:'抽象', value: 1 },
{ source:'有创意', target:'超现实', value: 1 },
{ source:'幽默', target:'自然', value: 1 },
{ source:'幽默', target:'浊', value: 1 },
{ source:'幽默', target:'排版', value: 1 },
{ source:'幽默', target:'拟人', value: 1 },
{ source:'幽默', target:'光影柔和', value: 1 },
{ source:'幽默', target:'故事性', value: 1 },
{ source:'幽默', target:'动物', value: 1 },
{ source:'幽默', target:'插画', value: 1 },
{ source:'幽默', target:'笔触', value: 1 },
{ source:'新奇', target:'透光材质', value: 1 },
{ source:'新奇', target:'视觉冲击', value: 1 },
{ source:'新奇', target:'矢量', value: 1 },
{ source:'新奇', target:'生命力', value: 1 },
{ source:'新奇', target:'曲线', value: 1 },
{ source:'新奇', target:'拼贴', value: 1 },
{ source:'新奇', target:'排版', value: 1 },
{ source:'新奇', target:'明快活力', value: 1 },
{ source:'新奇', target:'颗粒渐变', value: 1 },
{ source:'新奇', target:'精致', value: 1 },
{ source:'新奇', target:'渐变', value: 1 },
{ source:'新奇', target:'光影柔和', value: 1 },
{ source:'新奇', target:'反光材质', value: 1 },
{ source:'新奇', target:'超现实', value: 1 },
{ source:'细腻', target:'自然', value: 1 },
{ source:'细腻', target:'整齐有序', value: 1 },
{ source:'细腻', target:'图章', value: 1 },
{ source:'细腻', target:'透光材质', value: 1 },
{ source:'细腻', target:'矢量', value: 1 },
{ source:'细腻', target:'柔和', value: 1 },
{ source:'细腻', target:'柔和 ', value: 1 },
{ source:'细腻', target:'曲线', value: 1 },
{ source:'细腻', target:'拼贴', value: 1 },
{ source:'细腻', target:'排版', value: 1 },
{ source:'细腻', target:'拟人', value: 1 },
{ source:'细腻', target:'颗粒渐变', value: 1 },
{ source:'细腻', target:'精致', value: 1 },
{ source:'细腻', target:'光影柔和', value: 1 },
{ source:'细腻', target:'复古', value: 1 },
{ source:'细腻', target:'动物', value: 1 },
{ source:'细腻', target:'插画', value: 1 },
{ source:'细腻', target:'笔触', value: 1 },
{ source:'完美', target:'质感', value: 1 },
{ source:'完美', target:'整齐有序', value: 1 },
{ source:'完美', target:'新奇', value: 1 },
{ source:'完美', target:'完美', value: 1 },
{ source:'完美', target:'透光材质', value: 1 },
{ source:'完美', target:'视觉冲击', value: 1 },
{ source:'完美', target:'矢量', value: 1 },
{ source:'完美', target:'柔和', value: 1 },
{ source:'完美', target:'曲线', value: 1 },
{ source:'完美', target:'排版', value: 1 },
{ source:'完美', target:'精致', value: 1 },
{ source:'完美', target:'渐变', value: 1 },
{ source:'完美', target:'光影柔和', value: 1 },
{ source:'完美', target:'光影强烈', value: 1 },
{ source:'完美', target:'反光材质', value: 1 },
{ source:'完美', target:'抽象', value: 1 },
{ source:'图章', target:'光影柔和', value: 1 },
{ source:'透光材质', target:'光影柔和', value: 1 },
{ source:'透光材质', target:'光影强烈', value: 1 },
{ source:'舒服', target:'自然', value: 1 },
{ source:'舒服', target:'质感', value: 1 },
{ source:'舒服', target:'整齐有序', value: 1 },
{ source:'舒服', target:'细腻', value: 1 },
{ source:'舒服', target:'透光材质', value: 1 },
{ source:'舒服', target:'舒服', value: 1 },
{ source:'舒服', target:'视觉冲击', value: 1 },
{ source:'舒服', target:'生命力', value: 1 },
{ source:'舒服', target:'柔和', value: 1 },
{ source:'舒服', target:'柔和 ', value: 1 },
{ source:'舒服', target:'曲线', value: 1 },
{ source:'舒服', target:'拼贴', value: 1 },
{ source:'舒服', target:'排版', value: 1 },
{ source:'舒服', target:'精致', value: 1 },
{ source:'舒服', target:'光影柔和', value: 1 },
{ source:'舒服', target:'光影强烈', value: 1 },
{ source:'舒服', target:'反光材质', value: 1 },
{ source:'舒服', target:'超现实', value: 1 },
{ source:'舒服', target:'插画', value: 1 },
{ source:'视觉冲击', target:'自然', value: 1 },
{ source:'视觉冲击', target:'质感', value: 1 },
{ source:'视觉冲击', target:'整齐有序', value: 1 },
{ source:'视觉冲击', target:'鱼眼', value: 1 },
{ source:'视觉冲击', target:'有创意', value: 1 },
{ source:'视觉冲击', target:'新奇', value: 1 },
{ source:'视觉冲击', target:'未来', value: 1 },
{ source:'视觉冲击', target:'完美', value: 1 },
{ source:'视觉冲击', target:'图章', value: 1 },
{ source:'视觉冲击', target:'透光材质', value: 1 },
{ source:'视觉冲击', target:'视觉冲击', value: 1 },
{ source:'视觉冲击', target:'矢量', value: 1 },
{ source:'视觉冲击', target:'生命力', value: 1 },
{ source:'视觉冲击', target:'柔和', value: 1 },
{ source:'视觉冲击', target:'曲线', value: 1 },
{ source:'视觉冲击', target:'拼贴', value: 1 },
{ source:'视觉冲击', target:'排版', value: 1 },
{ source:'视觉冲击', target:'明快活力', value: 1 },
{ source:'视觉冲击', target:'可爱', value: 1 },
{ source:'视觉冲击', target:'颗粒渐变', value: 1 },
{ source:'视觉冲击', target:'科技', value: 1 },
{ source:'视觉冲击', target:'聚焦', value: 1 },
{ source:'视觉冲击', target:'精致', value: 1 },
{ source:'视觉冲击', target:'渐变', value: 1 },
{ source:'视觉冲击', target:'光影柔和', value: 1 },
{ source:'视觉冲击', target:'光影强烈', value: 1 },
{ source:'视觉冲击', target:'故事性', value: 1 },
{ source:'视觉冲击', target:'反光材质', value: 1 },
{ source:'视觉冲击', target:'动物', value: 1 },
{ source:'视觉冲击', target:'抽象', value: 1 },
{ source:'视觉冲击', target:'超现实', value: 1 },
{ source:'视觉冲击', target:'插画', value: 1 },
{ source:'视觉冲击', target:'笔触', value: 1 },
{ source:'矢量', target:'图章', value: 1 },
{ source:'矢量', target:'透光材质', value: 1 },
{ source:'矢量', target:'曲线', value: 1 },
{ source:'矢量', target:'拼贴', value: 1 },
{ source:'矢量', target:'排版', value: 1 },
{ source:'矢量', target:'颗粒渐变', value: 1 },
{ source:'矢量', target:'插画', value: 1 },
{ source:'生命力', target:'自然', value: 1 },
{ source:'生命力', target:'透光材质', value: 1 },
{ source:'生命力', target:'柔和', value: 1 },
{ source:'生命力', target:'排版', value: 1 },
{ source:'生命力', target:'明快活力', value: 1 },
{ source:'生命力', target:'光影柔和', value: 1 },
{ source:'生命力', target:'光影强烈', value: 1 },
{ source:'生命力', target:'故事性', value: 1 },
{ source:'生命力', target:'动物', value: 1 },
{ source:'柔和', target:'自然', value: 1 },
{ source:'柔和', target:'整齐有序', value: 1 },
{ source:'柔和', target:'新奇', value: 1 },
{ source:'柔和', target:'细腻', value: 1 },
{ source:'柔和', target:'未来', value: 1 },
{ source:'柔和', target:'图章', value: 1 },
{ source:'柔和', target:'透光材质', value: 1 },
{ source:'柔和', target:'舒服', value: 1 },
{ source:'柔和', target:'矢量', value: 1 },
{ source:'柔和', target:'柔和', value: 1 },
{ source:'柔和', target:'曲线', value: 1 },
{ source:'柔和', target:'拼贴', value: 1 },
{ source:'柔和', target:'排版', value: 1 },
{ source:'柔和', target:'拟人', value: 1 },
{ source:'柔和', target:'颗粒渐变', value: 1 },
{ source:'柔和', target:'聚焦', value: 1 },
{ source:'柔和', target:'精致', value: 1 },
{ source:'柔和', target:'渐变', value: 1 },
{ source:'柔和', target:'光影柔和', value: 1 },
{ source:'柔和', target:'插画', value: 1 },
{ source:'柔和 ', target:'自然', value: 1 },
{ source:'柔和 ', target:'光影柔和', value: 1 },
{ source:'曲线', target:'未来', value: 1 },
{ source:'曲线', target:'透光材质', value: 1 },
{ source:'曲线', target:'排版', value: 1 },
{ source:'曲线', target:'光影柔和', value: 1 },
{ source:'曲线', target:'光影强烈', value: 1 },
{ source:'拼贴', target:'排版', value: 1 },
{ source:'拼贴', target:'复古', value: 1 },
{ source:'拼贴', target:'插画', value: 1 },
{ source:'排版', target:'未来', value: 1 },
{ source:'排版', target:'矢量', value: 1 },
{ source:'排版', target:'拼贴', value: 1 },
{ source:'排版', target:'颗粒渐变', value: 1 },
{ source:'排版', target:'聚焦', value: 1 },
{ source:'排版', target:'光影柔和', value: 1 },
{ source:'排版', target:'复古', value: 1 },
{ source:'排版', target:'反光材质', value: 1 },
{ source:'排版', target:'插画', value: 1 },
{ source:'拟人', target:'矢量', value: 1 },
{ source:'拟人', target:'排版', value: 1 },
{ source:'拟人', target:'颗粒渐变', value: 1 },
{ source:'拟人', target:'动物', value: 1 },
{ source:'拟人', target:'插画', value: 1 },
{ source:'明快活力', target:'新奇', value: 1 },
{ source:'明快活力', target:'完美', value: 1 },
{ source:'明快活力', target:'图章', value: 1 },
{ source:'明快活力', target:'透光材质', value: 1 },
{ source:'明快活力', target:'视觉冲击', value: 1 },
{ source:'明快活力', target:'矢量', value: 1 },
{ source:'明快活力', target:'柔和', value: 1 },
{ source:'明快活力', target:'曲线', value: 1 },
{ source:'明快活力', target:'排版', value: 1 },
{ source:'明快活力', target:'可爱', value: 1 },
{ source:'明快活力', target:'渐变', value: 1 },
{ source:'明快活力', target:'光影柔和', value: 1 },
{ source:'可爱', target:'自然', value: 1 },
{ source:'可爱', target:'质感', value: 1 },
{ source:'可爱', target:'整齐有序', value: 1 },
{ source:'可爱', target:'鱼眼', value: 1 },
{ source:'可爱', target:'有创意', value: 1 },
{ source:'可爱', target:'幽默', value: 1 },
{ source:'可爱', target:'新奇', value: 1 },
{ source:'可爱', target:'细腻', value: 1 },
{ source:'可爱', target:'完美', value: 1 },
{ source:'可爱', target:'图章', value: 1 },
{ source:'可爱', target:'透光材质', value: 1 },
{ source:'可爱', target:'视觉冲击', value: 1 },
{ source:'可爱', target:'矢量', value: 1 },
{ source:'可爱', target:'柔和', value: 1 },
{ source:'可爱', target:'曲线', value: 1 },
{ source:'可爱', target:'排版', value: 1 },
{ source:'可爱', target:'拟人', value: 1 },
{ source:'可爱', target:'明快活力', value: 1 },
{ source:'可爱', target:'颗粒渐变', value: 1 },
{ source:'可爱', target:'精致', value: 1 },
{ source:'可爱', target:'渐变', value: 1 },
{ source:'可爱', target:'光影柔和', value: 1 },
{ source:'可爱', target:'光影强烈', value: 1 },
{ source:'可爱', target:'故事性', value: 1 },
{ source:'可爱', target:'动物', value: 1 },
{ source:'可爱', target:'插画', value: 1 },
{ source:'可爱', target:'笔触', value: 1 },
{ source:'颗粒渐变', target:'矢量', value: 1 },
{ source:'颗粒渐变', target:'排版', value: 1 },
{ source:'颗粒渐变', target:'插画', value: 1 },
{ source:'颗粒渐变', target:'笔触', value: 1 },
{ source:'科技', target:'未来', value: 1 },
{ source:'聚焦', target:'曲线', value: 1 },
{ source:'聚焦', target:'光影柔和', value: 1 },
{ source:'精致', target:'质感', value: 1 },
{ source:'精致', target:'整齐有序', value: 1 },
{ source:'精致', target:'新奇', value: 1 },
{ source:'精致', target:'细腻', value: 1 },
{ source:'精致', target:'未来', value: 1 },
{ source:'精致', target:'透光材质', value: 1 },
{ source:'精致', target:'舒服', value: 1 },
{ source:'精致', target:'矢量', value: 1 },
{ source:'精致', target:'生命力', value: 1 },
{ source:'精致', target:'柔和', value: 1 },
{ source:'精致', target:'曲线', value: 1 },
{ source:'精致', target:'拼贴', value: 1 },
{ source:'精致', target:'排版', value: 1 },
{ source:'精致', target:'拟人', value: 1 },
{ source:'精致', target:'明快活力', value: 1 },
{ source:'精致', target:'颗粒渐变', value: 1 },
{ source:'精致', target:'科技', value: 1 },
{ source:'精致', target:'聚焦', value: 1 },
{ source:'精致', target:'光影柔和', value: 1 },
{ source:'精致', target:'光影强烈', value: 1 },
{ source:'精致', target:'复古', value: 1 },
{ source:'精致', target:'反光材质', value: 1 },
{ source:'精致', target:'动物', value: 1 },
{ source:'精致', target:'插画', value: 1 },
{ source:'精致', target:'笔触', value: 1 },
{ source:'渐变', target:'透光材质', value: 1 },
{ source:'渐变', target:'矢量', value: 1 },
{ source:'渐变', target:'曲线', value: 1 },
{ source:'光影柔和', target:'自然', value: 1 },
{ source:'光影柔和', target:'未来', value: 1 },
{ source:'光影柔和', target:'透光材质', value: 1 },
{ source:'光影柔和', target:'曲线', value: 1 },
{ source:'光影柔和', target:'排版', value: 1 },
{ source:'光影柔和', target:'聚焦', value: 1 },
{ source:'光影强烈', target:'自然', value: 1 },
{ source:'光影强烈', target:'未来', value: 1 },
{ source:'光影强烈', target:'透光材质', value: 1 },
{ source:'光影强烈', target:'排版', value: 1 },
{ source:'光影强烈', target:'聚焦', value: 1 },
{ source:'光影强烈', target:'反光材质', value: 1 },
{ source:'故事性', target:'自然', value: 1 },
{ source:'故事性', target:'浊', value: 1 },
{ source:'故事性', target:'质感', value: 1 },
{ source:'故事性', target:'幽默', value: 1 },
{ source:'故事性', target:'新奇', value: 1 },
{ source:'故事性', target:'细腻', value: 1 },
{ source:'故事性', target:'透光材质', value: 1 },
{ source:'故事性', target:'舒服', value: 1 },
{ source:'故事性', target:'视觉冲击', value: 1 },
{ source:'故事性', target:'矢量', value: 1 },
{ source:'故事性', target:'生命力', value: 1 },
{ source:'故事性', target:'柔和', value: 1 },
{ source:'故事性', target:'拼贴', value: 1 },
{ source:'故事性', target:'排版', value: 1 },
{ source:'故事性', target:'拟人', value: 1 },
{ source:'故事性', target:'颗粒渐变', value: 1 },
{ source:'故事性', target:'光影柔和', value: 1 },
{ source:'故事性', target:'光影强烈', value: 1 },
{ source:'故事性', target:'复古', value: 1 },
{ source:'故事性', target:'动物', value: 1 },
{ source:'故事性', target:'粗旷', value: 1 },
{ source:'故事性', target:'抽象', value: 1 },
{ source:'故事性', target:'超现实', value: 1 },
{ source:'故事性', target:'插画', value: 1 },
{ source:'故事性', target:'笔触', value: 1 },
{ source:'复古', target:'矢量', value: 1 },
{ source:'复古', target:'排版', value: 1 },
{ source:'反光材质', target:'未来', value: 1 },
{ source:'反光材质', target:'排版', value: 1 },
{ source:'反光材质', target:'光影强烈', value: 1 },
{ source:'动物', target:'鱼眼', value: 1 },
{ source:'动物', target:'排版', value: 1 },
{ source:'动物', target:'拟人', value: 1 },
{ source:'动物', target:'插画', value: 1 },
{ source:'粗旷', target:'视觉冲击', value: 1 },
{ source:'粗旷', target:'插画', value: 1 },
{ source:'粗旷', target:'笔触', value: 1 },
{ source:'抽象', target:'整齐有序', value: 1 },
{ source:'抽象', target:'新奇', value: 1 },
{ source:'抽象', target:'透光材质', value: 1 },
{ source:'抽象', target:'视觉冲击', value: 1 },
{ source:'抽象', target:'曲线', value: 1 },
{ source:'抽象', target:'拼贴', value: 1 },
{ source:'抽象', target:'排版', value: 1 },
{ source:'抽象', target:'光影柔和', value: 1 },
{ source:'抽象', target:'故事性', value: 1 },
{ source:'抽象', target:'反光材质', value: 1 },
{ source:'抽象', target:'超现实', value: 1 },
{ source:'超现实', target:'拼贴', value: 1 },
{ source:'超现实', target:'光影强烈', value: 1 },
{ source:'插画', target:'排版', value: 1 },
{ source:'笔触', target:'排版', value: 1 },
{ source:'笔触', target:'插画', value: 1 },
{ source: '质感', target: '曲线', value: 1 },
{ source: '质感', target: '颗粒渐变', value: 1 },
{ source: '质感', target: '反光材质', value: 1 },
{ source: '整齐有序', target: '质感', value: 1 },
{ source: '整齐有序', target: '完美', value: 1 },
{ source: '整齐有序', target: '柔和', value: 1 },
{ source: '整齐有序', target: '曲线', value: 1 },
{ source: '整齐有序', target: '颗粒渐变', value: 1 },
{ source: '整齐有序', target: '反光材质', value: 1 },
{ source: '完美', target: '质感', value: 1 },
{ source: '完美', target: '柔和', value: 1 },
{ source: '完美', target: '曲线', value: 1 },
{ source: '完美', target: '颗粒渐变', value: 1 },
{ source: '柔和', target: '质感', value: 1 },
{ source: '柔和', target: '曲线', value: 1 },
{ source: '柔和', target: '颗粒渐变', value: 1 },
{ source: '柔和', target: '反光材质', value: 1 },
{ source: '曲线', target: '颗粒渐变', value: 1 },
{ source: '曲线', target: '反光材质', value: 1 },
{ source: '颗粒渐变', target: '反光材质', value: 1 },
        ]
    }]
};