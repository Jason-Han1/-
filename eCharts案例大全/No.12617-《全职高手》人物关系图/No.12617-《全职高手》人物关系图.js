option = {
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
        data: [ // name(类别名称)要同legend(图例）按次序一致
            {
                name: '兴欣'
            },
            {
                name: '微草'
            },
            {
                name: '蓝雨'
            },
            {
                name: '轮回'
            },
            {
                name: '霸图'
            },
            {
                name: '嘉世'
            },
            {
                name: '呼啸'
            },
            {
                name: '虚空'
            },
            {
                name: '百花'
            },
            {
                name: '义斩'
            },
            {
                name: '三零一'
            },
            {
                name: '神奇'
            },
            {
                name: 'UNK'
            }
        ]
    },
    series: [{
        type: 'graph', // 关系图
        name: '全职高手:', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        layout: 'force', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
        legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
        hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
        coordinateSystem: null, // 坐标系可选
        xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
        yAxisIndex: 0, // y轴坐标 
        force: { // 力引导图基本配置
            // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
            repulsion: 500, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
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
                borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                borderColor: 'rgba(205, 149, 12, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                opacity: 1 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5

            },
            emphasis: { // 高亮状态

            }
        },
        lineStyle: { // ========关系边的公用线条样式。
            normal: {
                color: 'rgba(255, 0, 255, 0.4)',
                width: '2', //线的粗细
                type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.3, // 线条的曲线程度，从0到1
                opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
            },
            emphasis: { // 高亮状态

            }
        },
        label: { // ========结点图形上的文本标签
            normal: {
                show: true, // 是否显示标签。
                position: ['65%', '50%'],//'inside', // 标签的位置。['50%', '50%'] [x,y]
                textStyle: { // 标签的字体样式
                    color: '#cde6c7', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                    fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
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
                name: '兴欣'
            },
            {
                name: '微草'
            },
            {
                name: '蓝雨'
            },
            {
                name: '轮回'
            },
            {
                name: '霸图'
            },
            {
                name: '嘉世'
            },
            {
                name: '呼啸'
            },
            {
                name: '虚空'
            },
            {
                name: '百花'
            },
            {
                name: '义斩'
            },
            {
                name: '三零一'
            },
            {
                name: '神奇'
            },
            {
                name: 'UNK'
            }
        ],

        // 设置结点node的数据
        // category: 类别序号，从0开始
        // name: 结点图形显示的文字
        // value: 鼠标点击结点，显示的数字
        // symbolSize: 结点图形的大小
        // symbol: 类目节点标记图形，默然为圆形
        // label: 标签样式
        data: [{
                'name': '陈果',
                'value': 2930,
                'symbolSize': 102.51400948757488,
                'category': '兴欣'
            },
            {
                'category': '兴欣',
                'name': '叶修',
                'value': 6634,
                'symbolSize': 164.67579584117203
            },
            {
                'category': '兴欣',
                'name': '唐柔',
                'value': 1899,
                'symbolSize': 79.71581297054192
            },
            {
                'category': '兴欣',
                'name': '苏沐橙',
                'value': 1590,
                'symbolSize': 71.91348441945787
            },
            {
                'category': '兴欣',
                'name': '魏琛',
                'value': 955,
                'symbolSize': 53.50593474050739
            },
            {
                'category': '兴欣',
                'name': '方锐',
                'value': 1078,
                'symbolSize': 57.40092371845161
            },
            {
                'category': '蓝雨',
                'name': '黄少天',
                'value': 735,
                'symbolSize': 45.96705248547117
            },
            {
                'category': '轮回',
                'name': '孙翔',
                'value': 890,
                'symbolSize': 51.36250586414219
            },
            {
                'category': '兴欣',
                'name': '田七',
                'value': 214,
                'symbolSize': 22.47191008770183
            },
            {
                'category': '兴欣',
                'name': '月中眠',
                'value': 164,
                'symbolSize': 19.257922377319897
            },
            {
                'category': '兴欣',
                'name': '莫凡',
                'value': 603,
                'symbolSize': 40.98114054217706
            },
            {
                'category': '蓝雨',
                'name': '喻文州',
                'value': 337,
                'symbolSize': 29.243230166900904
            },
            {
                'category': '霸图',
                'name': '李艺博',
                'value': 331,
                'symbolSize': 28.94011392297871
            },
            {
                'category': '霸图',
                'name': '韩文清',
                'value': 430,
                'symbolSize': 33.68307282263388
            },
            {
                'category': '嘉世',
                'name': '邱非',
                'value': 223,
                'symbolSize': 23.01530955792074
            },
            {
                'category': '雷霆',
                'name': '肖时钦',
                'value': 530,
                'symbolSize': 38.02594400711302
            },
            {
                'category': '霸图',
                'name': '张新杰',
                'value': 474,
                'symbolSize': 35.64112780931039
            },
            {
                'category': '霸图',
                'name': '张佳乐',
                'value': 381,
                'symbolSize': 31.400494386193323
            },
            {
                'category': '兴欣',
                'name': '乔一帆',
                'value': 581,
                'symbolSize': 40.10718274014148
            },
            {
                'category': '轮回',
                'name': '周泽楷',
                'value': 449,
                'symbolSize': 34.53845271767772
            },
            {
                'category': '轮回',
                'name': '江波涛',
                'value': 301,
                'symbolSize': 27.388520165929577
            },
            {
                'category': '霸图',
                'name': '林敬言',
                'value': 416,
                'symbolSize': 33.04259381775987
            },
            {
                'category': '微草',
                'name': '王杰希',
                'value': 313,
                'symbolSize': 28.016618459179927
            },
            {
                'category': '义斩',
                'name': '楼冠宁',
                'value': 121,
                'symbolSize': 16.144162293781683
            },
            {
                'category': '呼啸',
                'name': '刘皓',
                'value': 332,
                'symbolSize': 28.990792569545597
            },
            {
                'category': '微草',
                'name': '高英杰',
                'value': 219,
                'symbolSize': 22.77495809739897
            },
            {
                'category': '轮回',
                'name': '杜明',
                'value': 191,
                'symbolSize': 21.037753056352642
            },
            {
                'category': '兴欣',
                'name': '罗辑',
                'value': 248,
                'symbolSize': 24.478340682659635
            },
            {
                'category': '霸图',
                'name': '蒋游',
                'value': 151,
                'symbolSize': 18.35720802645015
            },
            {
                'category': '蓝雨',
                'name': '卢瀚文',
                'value': 210,
                'symbolSize': 22.227324554655535
            },
            {
                'category': '神奇',
                'name': '贺铭',
                'value': 96,
                'symbolSize': 14.116184147785269
            },
            {
                'category': '嘉世',
                'name': '崔立',
                'value': 155,
                'symbolSize': 18.637702921029156
            },
            {
                'category': '嘉世',
                'name': '陈夜辉',
                'value': 199,
                'symbolSize': 21.544418880421176
            },
            {
                'category': '兴欣',
                'name': '安文逸',
                'value': 249,
                'symbolSize': 24.535540031295163
            },
            {
                'category': '嘉世',
                'name': '陶轩',
                'value': 172,
                'symbolSize': 19.797324386052846
            },
            {
                'category': '呼啸',
                'name': '唐昊',
                'value': 205,
                'symbolSize': 21.91882349355882
            },
            {
                'category': '呼啸',
                'name': '赵禹哲',
                'value': 123,
                'symbolSize': 16.298399716904093
            },
            {
                'category': '兴欣',
                'name': '关榕飞',
                'value': 70,
                'symbolSize': 11.753219938743047
            },
            {
                'category': '蓝雨',
                'name': '郑轩',
                'value': 72,
                'symbolSize': 11.946834513622557
            },
            {
                'category': '霸图',
                'name': '夜度寒潭',
                'value': 106,
                'symbolSize': 14.951246504449914
            },
            {
                'category': '兴欣',
                'name': '伍晨',
                'value': 109,
                'symbolSize': 15.195233173989475
            },
            {
                'category': '义斩',
                'name': '孙哲平',
                'value': 127,
                'symbolSize': 16.603748948673946
            },
            {
                'category': '蓝雨',
                'name': '宋晓',
                'value': 87,
                'symbolSize': 13.332793922562537
            },
            {
                'category': '霸图',
                'name': '周光义',
                'value': 79,
                'symbolSize': 12.607347191244859
            },
            {
                'category': '霸图',
                'name': '季冷',
                'value': 32,
                'symbolSize': 7.464263932294459
            },
            {
                'category': '轮回',
                'name': '吴启',
                'value': 113,
                'symbolSize': 15.516204584082425
            },
            {
                'category': 'UNK',
                'name': '爱凑热闹',
                'value': 23,
                'symbolSize': 6.163141585820327
            },
            {
                'category': '霸图',
                'name': '秦牧云',
                'value': 91,
                'symbolSize': 13.684974974087266
            },
            {
                'category': 'UNK',
                'name': '夜未央',
                'value': 82,
                'symbolSize': 12.882852498274179
            },
            {
                'category': '烟雨',
                'name': '楚云秀',
                'value': 76,
                'symbolSize': 12.32741122074567
            },
            {
                'category': '轮回',
                'name': '吕泊远',
                'value': 126,
                'symbolSize': 16.527794949194778
            },
            {
                'category': '轮回',
                'name': '方明华',
                'value': 47,
                'symbolSize': 9.328606147384457
            },
            {
                'category': '百花',
                'name': '于锋',
                'value': 125,
                'symbolSize': 16.45158734405456
            },
            {
                'category': '百花',
                'name': '邹远',
                'value': 65,
                'symbolSize': 11.258738881130306
            },
            {
                'category': '兴欣',
                'name': '千成',
                'value': 34,
                'symbolSize': 7.731393393741314
            },
            {
                'category': '虚空',
                'name': '李轩',
                'value': 50,
                'symbolSize': 9.669468490323485
            },
            {
                'category': '虚空',
                'name': '吴羽策',
                'value': 37,
                'symbolSize': 8.12001814952
            },
            {
                'category': '神奇',
                'name': '王泽',
                'value': 64,
                'symbolSize': 11.157949330803245
            },
            {
                'category': '雷霆',
                'name': '张家兴',
                'value': 31,
                'symbolSize': 7.32807292297302
            },
            {
                'category': '嘉世',
                'name': '夏仲天',
                'value': 30,
                'symbolSize': 7.19002379628695
            },
            {
                'category': '微草',
                'name': '周烨柏',
                'value': 30,
                'symbolSize': 7.19002379628695
            },
            {
                'category': '微草',
                'name': '柳非',
                'value': 31,
                'symbolSize': 7.32807292297302
            },
            {
                'category': '嘉世',
                'name': '李睿',
                'value': 51,
                'symbolSize': 9.781167634784932
            },
            {
                'category': '神奇',
                'name': '申建',
                'value': 53,
                'symbolSize': 10.001842338351539
            },
            {
                'category': '烟雨',
                'name': '舒可怡',
                'value': 13,
                'symbolSize': 4.426771898405103
            },
            {
                'category': '烟雨',
                'name': '舒可欣',
                'value': 13,
                'symbolSize': 4.426771898405103
            },
            {
                'category': '霸图',
                'name': '宋奇英',
                'value': 78,
                'symbolSize': 12.514539388848307
            },
            {
                'category': '虚空',
                'name': '盖才捷',
                'value': 21,
                'symbolSize': 5.846382032158073
            },
            {
                'category': '蓝雨',
                'name': '李远',
                'value': 37,
                'symbolSize': 8.12001814952
            },
            {
                'category': '轮回',
                'name': '佟林',
                'value': 20,
                'symbolSize': 5.6832583342876175
            },
            {
                'category': '微草',
                'name': '刘小别',
                'value': 64,
                'symbolSize': 11.157949330803245
            },
            {
                'category': '微草',
                'name': '肖云',
                'value': 57,
                'symbolSize': 10.432956972917395
            },
            {
                'category': '微草',
                'name': '梁方',
                'value': 26,
                'symbolSize': 6.617356646209126
            },
            {
                'category': '微草（已退役）',
                'name': '邓复升',
                'value': 16,
                'symbolSize': 4.993322195606448
            },
            {
                'category': '微草',
                'name': '许斌',
                'value': 25,
                'symbolSize': 6.468524166669931
            },
            {
                'category': '百花',
                'name': '曾信然',
                'value': 32,
                'symbolSize': 7.464263932294459
            },
            {
                'category': '蓝雨',
                'name': '徐景熙',
                'value': 10,
                'symbolSize': 3.8018939632056123
            },
            {
                'category': '玄奇',
                'name': '张益玮',
                'value': 18,
                'symbolSize': 5.3463582039598885
            },
            {
                'category': '三零一',
                'name': '杨聪',
                'value': 15,
                'symbolSize': 4.809865478310079
            },
            {
                'category': '三零一',
                'name': '白庶',
                'value': 9,
                'symbolSize': 3.5765199794173617
            },
            {
                'category': '三零一',
                'name': '高杰',
                'value': 8,
                'symbolSize': 3.340351677713478
            },
            {
                'category': '雷霆',
                'name': '张奇',
                'value': 8,
                'symbolSize': 3.340351677713478
            },
            {
                'category': '微草',
                'name': '李济',
                'value': 7,
                'symbolSize': 3.091411820658244
            },
            {
                'category': '虚空',
                'name': '杨昊轩',
                'value': 7,
                'symbolSize': 3.091411820658244
            },
            {
                'category': '烟雨',
                'name': '李华',
                'value': 12,
                'symbolSize': 4.22595747686304
            },
            {
                'category': '雷霆',
                'name': '戴妍琦',
                'value': 6,
                'symbolSize': 2.8270124768247276
            }
        ],
        links: [{
                'source': '陈果',
                'target': '叶修',
                'value': 1809
            },
            {
                'source': '叶修',
                'target': '陈果',
                'value': 1809
            },
            {
                'source': '叶修',
                'target': '唐柔',
                'value': 761
            },
            {
                'source': '唐柔',
                'target': '叶修',
                'value': 761
            },
            {
                'source': '叶修',
                'target': '苏沐橙',
                'value': 545
            },
            {
                'source': '苏沐橙',
                'target': '叶修',
                'value': 545
            },
            {
                'source': '陈果',
                'target': '唐柔',
                'value': 495
            },
            {
                'source': '唐柔',
                'target': '陈果',
                'value': 495
            },
            {
                'source': '叶修',
                'target': '魏琛',
                'value': 483
            },
            {
                'source': '魏琛',
                'target': '叶修',
                'value': 483
            },
            {
                'source': '叶修',
                'target': '方锐',
                'value': 197
            },
            {
                'source': '方锐',
                'target': '叶修',
                'value': 197
            },
            {
                'source': '黄少天',
                'target': '叶修',
                'value': 204
            },
            {
                'source': '叶修',
                'target': '黄少天',
                'value': 204
            },
            {
                'source': '孙翔',
                'target': '叶修',
                'value': 197
            },
            {
                'source': '叶修',
                'target': '孙翔',
                'value': 197
            },
            {
                'source': '田七',
                'target': '月中眠',
                'value': 121
            },
            {
                'source': '月中眠',
                'target': '田七',
                'value': 121
            },
            {
                'source': '陈果',
                'target': '苏沐橙',
                'value': 172
            },
            {
                'source': '苏沐橙',
                'target': '陈果',
                'value': 172
            },
            {
                'source': '叶修',
                'target': '莫凡',
                'value': 167
            },
            {
                'source': '莫凡',
                'target': '叶修',
                'value': 167
            },
            {
                'source': '喻文州',
                'target': '黄少天',
                'value': 125
            },
            {
                'source': '黄少天',
                'target': '喻文州',
                'value': 125
            },
            {
                'source': '苏沐橙',
                'target': '方锐',
                'value': 124
            },
            {
                'source': '方锐',
                'target': '苏沐橙',
                'value': 124
            },
            {
                'source': '叶修',
                'target': '李艺博',
                'value': 118
            },
            {
                'source': '李艺博',
                'target': '叶修',
                'value': 118
            },
            {
                'source': '韩文清',
                'target': '叶修',
                'value': 131
            },
            {
                'source': '叶修',
                'target': '韩文清',
                'value': 131
            },
            {
                'source': '魏琛',
                'target': '陈果',
                'value': 126
            },
            {
                'source': '陈果',
                'target': '魏琛',
                'value': 126
            },
            {
                'source': '孙翔',
                'target': '邱非',
                'value': 78
            },
            {
                'source': '邱非',
                'target': '孙翔',
                'value': 78
            },
            {
                'source': '肖时钦',
                'target': '叶修',
                'value': 123
            },
            {
                'source': '叶修',
                'target': '肖时钦',
                'value': 123
            },
            {
                'source': '张新杰',
                'target': '叶修',
                'value': 116
            },
            {
                'source': '叶修',
                'target': '张新杰',
                'value': 116
            },
            {
                'source': '叶修',
                'target': '张佳乐',
                'value': 121
            },
            {
                'source': '张佳乐',
                'target': '叶修',
                'value': 121
            },
            {
                'source': '叶修',
                'target': '乔一帆',
                'value': 111
            },
            {
                'source': '乔一帆',
                'target': '叶修',
                'value': 111
            },
            {
                'source': '周泽楷',
                'target': '江波涛',
                'value': 89
            },
            {
                'source': '江波涛',
                'target': '周泽楷',
                'value': 89
            },
            {
                'source': '叶修',
                'target': '周泽楷',
                'value': 113
            },
            {
                'source': '周泽楷',
                'target': '叶修',
                'value': 113
            },
            {
                'source': '苏沐橙',
                'target': '唐柔',
                'value': 94
            },
            {
                'source': '唐柔',
                'target': '苏沐橙',
                'value': 94
            },
            {
                'source': '孙翔',
                'target': '肖时钦',
                'value': 89
            },
            {
                'source': '肖时钦',
                'target': '孙翔',
                'value': 89
            },
            {
                'source': '林敬言',
                'target': '叶修',
                'value': 97
            },
            {
                'source': '叶修',
                'target': '林敬言',
                'value': 97
            },
            {
                'source': '王杰希',
                'target': '叶修',
                'value': 86
            },
            {
                'source': '叶修',
                'target': '王杰希',
                'value': 86
            },
            {
                'source': '苏沐橙',
                'target': '乔一帆',
                'value': 67
            },
            {
                'source': '乔一帆',
                'target': '苏沐橙',
                'value': 67
            },
            {
                'source': '韩文清',
                'target': '张新杰',
                'value': 77
            },
            {
                'source': '张新杰',
                'target': '韩文清',
                'value': 77
            },
            {
                'source': '叶修',
                'target': '田七',
                'value': 86
            },
            {
                'source': '田七',
                'target': '叶修',
                'value': 86
            },
            {
                'source': '楼冠宁',
                'target': '叶修',
                'value': 74
            },
            {
                'source': '叶修',
                'target': '楼冠宁',
                'value': 74
            },
            {
                'source': '喻文州',
                'target': '叶修',
                'value': 73
            },
            {
                'source': '叶修',
                'target': '喻文州',
                'value': 73
            },
            {
                'source': '刘皓',
                'target': '叶修',
                'value': 70
            },
            {
                'source': '叶修',
                'target': '刘皓',
                'value': 70
            },
            {
                'source': '乔一帆',
                'target': '高英杰',
                'value': 84
            },
            {
                'source': '高英杰',
                'target': '乔一帆',
                'value': 84
            },
            {
                'source': '杜明',
                'target': '唐柔',
                'value': 79
            },
            {
                'source': '唐柔',
                'target': '杜明',
                'value': 79
            },
            {
                'source': '罗辑',
                'target': '叶修',
                'value': 84
            },
            {
                'source': '叶修',
                'target': '罗辑',
                'value': 84
            },
            {
                'source': '林敬言',
                'target': '张佳乐',
                'value': 79
            },
            {
                'source': '张佳乐',
                'target': '林敬言',
                'value': 79
            },
            {
                'source': '黄少天',
                'target': '苏沐橙',
                'value': 78
            },
            {
                'source': '苏沐橙',
                'target': '黄少天',
                'value': 78
            },
            {
                'source': '王杰希',
                'target': '高英杰',
                'value': 62
            },
            {
                'source': '高英杰',
                'target': '王杰希',
                'value': 62
            },
            {
                'source': '张新杰',
                'target': '林敬言',
                'value': 55
            },
            {
                'source': '林敬言',
                'target': '张新杰',
                'value': 55
            },
            {
                'source': '蒋游',
                'target': '张新杰',
                'value': 59
            },
            {
                'source': '张新杰',
                'target': '蒋游',
                'value': 59
            },
            {
                'source': '黄少天',
                'target': '卢瀚文',
                'value': 51
            },
            {
                'source': '卢瀚文',
                'target': '黄少天',
                'value': 51
            },
            {
                'source': '韩文清',
                'target': '林敬言',
                'value': 50
            },
            {
                'source': '林敬言',
                'target': '韩文清',
                'value': 50
            },
            {
                'source': '周泽楷',
                'target': '孙翔',
                'value': 68
            },
            {
                'source': '孙翔',
                'target': '周泽楷',
                'value': 68
            },
            {
                'source': '刘皓',
                'target': '贺铭',
                'value': 48
            },
            {
                'source': '贺铭',
                'target': '刘皓',
                'value': 48
            },
            {
                'source': '崔立',
                'target': '陈夜辉',
                'value': 57
            },
            {
                'source': '陈夜辉',
                'target': '崔立',
                'value': 57
            },
            {
                'source': '乔一帆',
                'target': '安文逸',
                'value': 47
            },
            {
                'source': '安文逸',
                'target': '乔一帆',
                'value': 47
            },
            {
                'source': '方锐',
                'target': '林敬言',
                'value': 67
            },
            {
                'source': '林敬言',
                'target': '方锐',
                'value': 67
            },
            {
                'source': '江波涛',
                'target': '孙翔',
                'value': 60
            },
            {
                'source': '孙翔',
                'target': '江波涛',
                'value': 60
            },
            {
                'source': '唐柔',
                'target': '乔一帆',
                'value': 55
            },
            {
                'source': '乔一帆',
                'target': '唐柔',
                'value': 55
            },
            {
                'source': '叶修',
                'target': '安文逸',
                'value': 65
            },
            {
                'source': '安文逸',
                'target': '叶修',
                'value': 65
            },
            {
                'source': '方锐',
                'target': '唐柔',
                'value': 60
            },
            {
                'source': '唐柔',
                'target': '方锐',
                'value': 60
            },
            {
                'source': '黄少天',
                'target': '周泽楷',
                'value': 55
            },
            {
                'source': '周泽楷',
                'target': '黄少天',
                'value': 55
            },
            {
                'source': '陶轩',
                'target': '崔立',
                'value': 44
            },
            {
                'source': '崔立',
                'target': '陶轩',
                'value': 44
            },
            {
                'source': '江波涛',
                'target': '叶修',
                'value': 56
            },
            {
                'source': '叶修',
                'target': '江波涛',
                'value': 56
            },
            {
                'source': '唐昊',
                'target': '赵禹哲',
                'value': 39
            },
            {
                'source': '赵禹哲',
                'target': '唐昊',
                'value': 39
            },
            {
                'source': '唐昊',
                'target': '林敬言',
                'value': 50
            },
            {
                'source': '林敬言',
                'target': '唐昊',
                'value': 50
            },
            {
                'source': '叶修',
                'target': '关榕飞',
                'value': 53
            },
            {
                'source': '关榕飞',
                'target': '叶修',
                'value': 53
            },
            {
                'source': '陈夜辉',
                'target': '刘皓',
                'value': 58
            },
            {
                'source': '刘皓',
                'target': '陈夜辉',
                'value': 58
            },
            {
                'source': '叶修',
                'target': '卢瀚文',
                'value': 59
            },
            {
                'source': '卢瀚文',
                'target': '叶修',
                'value': 59
            },
            {
                'source': '刘皓',
                'target': '孙翔',
                'value': 55
            },
            {
                'source': '孙翔',
                'target': '刘皓',
                'value': 55
            },
            {
                'source': '周泽楷',
                'target': '方锐',
                'value': 49
            },
            {
                'source': '方锐',
                'target': '周泽楷',
                'value': 49
            },
            {
                'source': '陈果',
                'target': '莫凡',
                'value': 45
            },
            {
                'source': '莫凡',
                'target': '陈果',
                'value': 45
            },
            {
                'source': '陈夜辉',
                'target': '邱非',
                'value': 45
            },
            {
                'source': '邱非',
                'target': '陈夜辉',
                'value': 45
            },
            {
                'source': '邱非',
                'target': '叶修',
                'value': 47
            },
            {
                'source': '叶修',
                'target': '邱非',
                'value': 47
            },
            {
                'source': '黄少天',
                'target': '郑轩',
                'value': 39
            },
            {
                'source': '郑轩',
                'target': '黄少天',
                'value': 39
            },
            {
                'source': '蒋游',
                'target': '夜度寒潭',
                'value': 51
            },
            {
                'source': '夜度寒潭',
                'target': '蒋游',
                'value': 51
            },
            {
                'source': '陶轩',
                'target': '叶修',
                'value': 50
            },
            {
                'source': '叶修',
                'target': '陶轩',
                'value': 50
            },
            {
                'source': '魏琛',
                'target': '唐柔',
                'value': 48
            },
            {
                'source': '唐柔',
                'target': '魏琛',
                'value': 48
            },
            {
                'source': '王杰希',
                'target': '唐柔',
                'value': 42
            },
            {
                'source': '唐柔',
                'target': '王杰希',
                'value': 42
            },
            {
                'source': '莫凡',
                'target': '苏沐橙',
                'value': 49
            },
            {
                'source': '苏沐橙',
                'target': '莫凡',
                'value': 49
            },
            {
                'source': '伍晨',
                'target': '叶修',
                'value': 50
            },
            {
                'source': '叶修',
                'target': '伍晨',
                'value': 50
            },
            {
                'source': '陈果',
                'target': '方锐',
                'value': 41
            },
            {
                'source': '方锐',
                'target': '陈果',
                'value': 41
            },
            {
                'source': '黄少天',
                'target': '王杰希',
                'value': 42
            },
            {
                'source': '王杰希',
                'target': '黄少天',
                'value': 42
            },
            {
                'source': '肖时钦',
                'target': '苏沐橙',
                'value': 41
            },
            {
                'source': '苏沐橙',
                'target': '肖时钦',
                'value': 41
            },
            {
                'source': '赵禹哲',
                'target': '方锐',
                'value': 38
            },
            {
                'source': '方锐',
                'target': '赵禹哲',
                'value': 38
            },
            {
                'source': '孙哲平',
                'target': '叶修',
                'value': 49
            },
            {
                'source': '叶修',
                'target': '孙哲平',
                'value': 49
            },
            {
                'source': '叶修',
                'target': '宋晓',
                'value': 50
            },
            {
                'source': '宋晓',
                'target': '叶修',
                'value': 50
            },
            {
                'source': '周光义',
                'target': '季冷',
                'value': 32
            },
            {
                'source': '季冷',
                'target': '周光义',
                'value': 32
            },
            {
                'source': '孙翔',
                'target': '方锐',
                'value': 47
            },
            {
                'source': '方锐',
                'target': '孙翔',
                'value': 47
            },
            {
                'source': '孙翔',
                'target': '吴启',
                'value': 32
            },
            {
                'source': '吴启',
                'target': '孙翔',
                'value': 32
            },
            {
                'source': '黄少天',
                'target': '唐柔',
                'value': 40
            },
            {
                'source': '唐柔',
                'target': '黄少天',
                'value': 40
            },
            {
                'source': '蒋游',
                'target': '爱凑热闹',
                'value': 23
            },
            {
                'source': '爱凑热闹',
                'target': '蒋游',
                'value': 23
            },
            {
                'source': '韩文清',
                'target': '张佳乐',
                'value': 36
            },
            {
                'source': '张佳乐',
                'target': '韩文清',
                'value': 36
            },
            {
                'source': '罗辑',
                'target': '安文逸',
                'value': 40
            },
            {
                'source': '安文逸',
                'target': '罗辑',
                'value': 40
            },
            {
                'source': '魏琛',
                'target': '罗辑',
                'value': 44
            },
            {
                'source': '罗辑',
                'target': '魏琛',
                'value': 44
            },
            {
                'source': '方锐',
                'target': '唐昊',
                'value': 40
            },
            {
                'source': '唐昊',
                'target': '方锐',
                'value': 40
            },
            {
                'source': '叶修',
                'target': '月中眠',
                'value': 43
            },
            {
                'source': '月中眠',
                'target': '叶修',
                'value': 43
            },
            {
                'source': '方锐',
                'target': '莫凡',
                'value': 40
            },
            {
                'source': '莫凡',
                'target': '方锐',
                'value': 40
            },
            {
                'source': '莫凡',
                'target': '秦牧云',
                'value': 37
            },
            {
                'source': '秦牧云',
                'target': '莫凡',
                'value': 37
            },
            {
                'source': '苏沐橙',
                'target': '刘皓',
                'value': 40
            },
            {
                'source': '刘皓',
                'target': '苏沐橙',
                'value': 40
            },
            {
                'source': '莫凡',
                'target': '孙翔',
                'value': 32
            },
            {
                'source': '孙翔',
                'target': '莫凡',
                'value': 32
            },
            {
                'source': '叶修',
                'target': '夜未央',
                'value': 26
            },
            {
                'source': '夜未央',
                'target': '叶修',
                'value': 26
            },
            {
                'source': '孙翔',
                'target': '苏沐橙',
                'value': 30
            },
            {
                'source': '苏沐橙',
                'target': '孙翔',
                'value': 30
            },
            {
                'source': '孙翔',
                'target': '韩文清',
                'value': 33
            },
            {
                'source': '韩文清',
                'target': '孙翔',
                'value': 33
            },
            {
                'source': '楚云秀',
                'target': '苏沐橙',
                'value': 32
            },
            {
                'source': '苏沐橙',
                'target': '楚云秀',
                'value': 32
            },
            {
                'source': '孙哲平',
                'target': '张佳乐',
                'value': 40
            },
            {
                'source': '张佳乐',
                'target': '孙哲平',
                'value': 40
            },
            {
                'source': '周光义',
                'target': '方锐',
                'value': 37
            },
            {
                'source': '方锐',
                'target': '周光义',
                'value': 37
            },
            {
                'source': '吕泊远',
                'target': '方明华',
                'value': 26
            },
            {
                'source': '方明华',
                'target': '吕泊远',
                'value': 26
            },
            {
                'source': '杜明',
                'target': '方锐',
                'value': 33
            },
            {
                'source': '方锐',
                'target': '杜明',
                'value': 33
            },
            {
                'source': '魏琛',
                'target': '乔一帆',
                'value': 33
            },
            {
                'source': '乔一帆',
                'target': '魏琛',
                'value': 33
            },
            {
                'source': '肖时钦',
                'target': '张新杰',
                'value': 31
            },
            {
                'source': '张新杰',
                'target': '肖时钦',
                'value': 31
            },
            {
                'source': '陈果',
                'target': '楼冠宁',
                'value': 29
            },
            {
                'source': '楼冠宁',
                'target': '陈果',
                'value': 29
            },
            {
                'source': '于锋',
                'target': '邹远',
                'value': 28
            },
            {
                'source': '邹远',
                'target': '于锋',
                'value': 28
            },
            {
                'source': '叶修',
                'target': '千成',
                'value': 34
            },
            {
                'source': '千成',
                'target': '叶修',
                'value': 34
            },
            {
                'source': '乔一帆',
                'target': '李轩',
                'value': 32
            },
            {
                'source': '李轩',
                'target': '乔一帆',
                'value': 32
            },
            {
                'source': '李轩',
                'target': '吴羽策',
                'value': 18
            },
            {
                'source': '吴羽策',
                'target': '李轩',
                'value': 18
            },
            {
                'source': '魏琛',
                'target': '喻文州',
                'value': 27
            },
            {
                'source': '喻文州',
                'target': '魏琛',
                'value': 27
            },
            {
                'source': '肖时钦',
                'target': '魏琛',
                'value': 33
            },
            {
                'source': '魏琛',
                'target': '肖时钦',
                'value': 33
            },
            {
                'source': '肖时钦',
                'target': '唐柔',
                'value': 29
            },
            {
                'source': '唐柔',
                'target': '肖时钦',
                'value': 29
            },
            {
                'source': '陈果',
                'target': '伍晨',
                'value': 34
            },
            {
                'source': '伍晨',
                'target': '陈果',
                'value': 34
            },
            {
                'source': '方锐',
                'target': '乔一帆',
                'value': 18
            },
            {
                'source': '乔一帆',
                'target': '方锐',
                'value': 18
            },
            {
                'source': '喻文州',
                'target': '卢瀚文',
                'value': 25
            },
            {
                'source': '卢瀚文',
                'target': '喻文州',
                'value': 25
            },
            {
                'source': '陈夜辉',
                'target': '叶修',
                'value': 17
            },
            {
                'source': '叶修',
                'target': '陈夜辉',
                'value': 17
            },
            {
                'source': '贺铭',
                'target': '王泽',
                'value': 17
            },
            {
                'source': '王泽',
                'target': '贺铭',
                'value': 17
            },
            {
                'source': '陶轩',
                'target': '孙翔',
                'value': 29
            },
            {
                'source': '孙翔',
                'target': '陶轩',
                'value': 29
            },
            {
                'source': '崔立',
                'target': '肖时钦',
                'value': 26
            },
            {
                'source': '肖时钦',
                'target': '崔立',
                'value': 26
            },
            {
                'source': '张佳乐',
                'target': '秦牧云',
                'value': 17
            },
            {
                'source': '秦牧云',
                'target': '张佳乐',
                'value': 17
            },
            {
                'source': '秦牧云',
                'target': '叶修',
                'value': 30
            },
            {
                'source': '叶修',
                'target': '秦牧云',
                'value': 30
            },
            {
                'source': '夜度寒潭',
                'target': '叶修',
                'value': 31
            },
            {
                'source': '叶修',
                'target': '夜度寒潭',
                'value': 31
            },
            {
                'source': '楚云秀',
                'target': '叶修',
                'value': 16
            },
            {
                'source': '叶修',
                'target': '楚云秀',
                'value': 16
            },
            {
                'source': '张新杰',
                'target': '夜未央',
                'value': 25
            },
            {
                'source': '夜未央',
                'target': '张新杰',
                'value': 25
            },
            {
                'source': '陈果',
                'target': '罗辑',
                'value': 27
            },
            {
                'source': '罗辑',
                'target': '陈果',
                'value': 27
            },
            {
                'source': '罗辑',
                'target': '莫凡',
                'value': 16
            },
            {
                'source': '莫凡',
                'target': '罗辑',
                'value': 16
            },
            {
                'source': '肖时钦',
                'target': '张家兴',
                'value': 16
            },
            {
                'source': '张家兴',
                'target': '肖时钦',
                'value': 16
            },
            {
                'source': '李艺博',
                'target': '莫凡',
                'value': 32
            },
            {
                'source': '莫凡',
                'target': '李艺博',
                'value': 32
            },
            {
                'source': '陈果',
                'target': '夏仲天',
                'value': 24
            },
            {
                'source': '夏仲天',
                'target': '陈果',
                'value': 24
            },
            {
                'source': '邹远',
                'target': '苏沐橙',
                'value': 29
            },
            {
                'source': '苏沐橙',
                'target': '邹远',
                'value': 29
            },
            {
                'source': '方锐',
                'target': '魏琛',
                'value': 31
            },
            {
                'source': '魏琛',
                'target': '方锐',
                'value': 31
            },
            {
                'source': '江波涛',
                'target': '吴启',
                'value': 25
            },
            {
                'source': '吴启',
                'target': '江波涛',
                'value': 25
            },
            {
                'source': '黄少天',
                'target': '莫凡',
                'value': 30
            },
            {
                'source': '莫凡',
                'target': '黄少天',
                'value': 30
            },
            {
                'source': '江波涛',
                'target': '唐柔',
                'value': 28
            },
            {
                'source': '唐柔',
                'target': '江波涛',
                'value': 28
            },
            {
                'source': '周烨柏',
                'target': '柳非',
                'value': 15
            },
            {
                'source': '柳非',
                'target': '周烨柏',
                'value': 15
            },
            {
                'source': '苏沐橙',
                'target': '周泽楷',
                'value': 15
            },
            {
                'source': '周泽楷',
                'target': '苏沐橙',
                'value': 15
            },
            {
                'source': '李睿',
                'target': '邱非',
                'value': 29
            },
            {
                'source': '邱非',
                'target': '李睿',
                'value': 29
            },
            {
                'source': '唐柔',
                'target': '莫凡',
                'value': 23
            },
            {
                'source': '莫凡',
                'target': '唐柔',
                'value': 23
            },
            {
                'source': '吕泊远',
                'target': '杜明',
                'value': 22
            },
            {
                'source': '杜明',
                'target': '吕泊远',
                'value': 22
            },
            {
                'source': '夜度寒潭',
                'target': '夜未央',
                'value': 24
            },
            {
                'source': '夜未央',
                'target': '夜度寒潭',
                'value': 24
            },
            {
                'source': '苏沐橙',
                'target': '魏琛',
                'value': 22
            },
            {
                'source': '魏琛',
                'target': '苏沐橙',
                'value': 22
            },
            {
                'source': '陶轩',
                'target': '肖时钦',
                'value': 25
            },
            {
                'source': '肖时钦',
                'target': '陶轩',
                'value': 25
            },
            {
                'source': '张新杰',
                'target': '张佳乐',
                'value': 25
            },
            {
                'source': '张佳乐',
                'target': '张新杰',
                'value': 25
            },
            {
                'source': '唐柔',
                'target': '罗辑',
                'value': 14
            },
            {
                'source': '罗辑',
                'target': '唐柔',
                'value': 14
            },
            {
                'source': '唐柔',
                'target': '李艺博',
                'value': 14
            },
            {
                'source': '李艺博',
                'target': '唐柔',
                'value': 14
            },
            {
                'source': '方锐',
                'target': '韩文清',
                'value': 25
            },
            {
                'source': '韩文清',
                'target': '方锐',
                'value': 25
            },
            {
                'source': '方锐',
                'target': '黄少天',
                'value': 20
            },
            {
                'source': '黄少天',
                'target': '方锐',
                'value': 20
            },
            {
                'source': '王泽',
                'target': '苏沐橙',
                'value': 23
            },
            {
                'source': '苏沐橙',
                'target': '王泽',
                'value': 23
            },
            {
                'source': '周泽楷',
                'target': '乔一帆',
                'value': 14
            },
            {
                'source': '乔一帆',
                'target': '周泽楷',
                'value': 14
            },
            {
                'source': '申建',
                'target': '王泽',
                'value': 13
            },
            {
                'source': '王泽',
                'target': '申建',
                'value': 13
            },
            {
                'source': '孙翔',
                'target': '唐昊',
                'value': 19
            },
            {
                'source': '唐昊',
                'target': '孙翔',
                'value': 19
            },
            {
                'source': '喻文州',
                'target': '张新杰',
                'value': 20
            },
            {
                'source': '张新杰',
                'target': '喻文州',
                'value': 20
            },
            {
                'source': '孙翔',
                'target': '陈果',
                'value': 21
            },
            {
                'source': '陈果',
                'target': '孙翔',
                'value': 21
            },
            {
                'source': '贺铭',
                'target': '申建',
                'value': 13
            },
            {
                'source': '申建',
                'target': '贺铭',
                'value': 13
            },
            {
                'source': '陶轩',
                'target': '苏沐橙',
                'value': 13
            },
            {
                'source': '苏沐橙',
                'target': '陶轩',
                'value': 13
            },
            {
                'source': '舒可怡',
                'target': '舒可欣',
                'value': 13
            },
            {
                'source': '舒可欣',
                'target': '舒可怡',
                'value': 13
            },
            {
                'source': '孙翔',
                'target': '唐柔',
                'value': 19
            },
            {
                'source': '唐柔',
                'target': '孙翔',
                'value': 19
            },
            {
                'source': '唐昊',
                'target': '叶修',
                'value': 21
            },
            {
                'source': '叶修',
                'target': '唐昊',
                'value': 21
            },
            {
                'source': '于锋',
                'target': '莫凡',
                'value': 13
            },
            {
                'source': '莫凡',
                'target': '于锋',
                'value': 13
            },
            {
                'source': '宋奇英',
                'target': '方锐',
                'value': 22
            },
            {
                'source': '方锐',
                'target': '宋奇英',
                'value': 22
            },
            {
                'source': '叶修',
                'target': '盖才捷',
                'value': 21
            },
            {
                'source': '盖才捷',
                'target': '叶修',
                'value': 21
            },
            {
                'source': '吕泊远',
                'target': '方锐',
                'value': 26
            },
            {
                'source': '方锐',
                'target': '吕泊远',
                'value': 26
            },
            {
                'source': '唐柔',
                'target': '周泽楷',
                'value': 23
            },
            {
                'source': '周泽楷',
                'target': '唐柔',
                'value': 23
            },
            {
                'source': '叶修',
                'target': '高英杰',
                'value': 23
            },
            {
                'source': '高英杰',
                'target': '叶修',
                'value': 23
            },
            {
                'source': '苏沐橙',
                'target': '李艺博',
                'value': 20
            },
            {
                'source': '李艺博',
                'target': '苏沐橙',
                'value': 20
            },
            {
                'source': '安文逸',
                'target': '唐柔',
                'value': 18
            },
            {
                'source': '唐柔',
                'target': '安文逸',
                'value': 18
            },
            {
                'source': '莫凡',
                'target': '魏琛',
                'value': 24
            },
            {
                'source': '魏琛',
                'target': '莫凡',
                'value': 24
            },
            {
                'source': '邱非',
                'target': '李艺博',
                'value': 12
            },
            {
                'source': '李艺博',
                'target': '邱非',
                'value': 12
            },
            {
                'source': '张佳乐',
                'target': '苏沐橙',
                'value': 22
            },
            {
                'source': '苏沐橙',
                'target': '张佳乐',
                'value': 22
            },
            {
                'source': '唐昊',
                'target': '刘皓',
                'value': 12
            },
            {
                'source': '刘皓',
                'target': '唐昊',
                'value': 12
            },
            {
                'source': '方锐',
                'target': '刘皓',
                'value': 24
            },
            {
                'source': '刘皓',
                'target': '方锐',
                'value': 24
            },
            {
                'source': '于锋',
                'target': '方锐',
                'value': 20
            },
            {
                'source': '方锐',
                'target': '于锋',
                'value': 20
            },
            {
                'source': '唐柔',
                'target': '于锋',
                'value': 12
            },
            {
                'source': '于锋',
                'target': '唐柔',
                'value': 12
            },
            {
                'source': '方锐',
                'target': '李艺博',
                'value': 19
            },
            {
                'source': '李艺博',
                'target': '方锐',
                'value': 19
            },
            {
                'source': '喻文州',
                'target': '李艺博',
                'value': 22
            },
            {
                'source': '李艺博',
                'target': '喻文州',
                'value': 22
            },
            {
                'source': '宋晓',
                'target': '李艺博',
                'value': 12
            },
            {
                'source': '李艺博',
                'target': '宋晓',
                'value': 12
            },
            {
                'source': '李远',
                'target': '李艺博',
                'value': 12
            },
            {
                'source': '李艺博',
                'target': '李远',
                'value': 12
            },
            {
                'source': '方锐',
                'target': '卢瀚文',
                'value': 12
            },
            {
                'source': '卢瀚文',
                'target': '方锐',
                'value': 12
            },
            {
                'source': '孙翔',
                'target': '李艺博',
                'value': 20
            },
            {
                'source': '李艺博',
                'target': '孙翔',
                'value': 20
            },
            {
                'source': '肖时钦',
                'target': '陈果',
                'value': 17
            },
            {
                'source': '陈果',
                'target': '肖时钦',
                'value': 17
            },
            {
                'source': '陈果',
                'target': '陶轩',
                'value': 11
            },
            {
                'source': '陶轩',
                'target': '陈果',
                'value': 11
            },
            {
                'source': '叶修',
                'target': '佟林',
                'value': 20
            },
            {
                'source': '佟林',
                'target': '叶修',
                'value': 20
            },
            {
                'source': '刘小别',
                'target': '卢瀚文',
                'value': 19
            },
            {
                'source': '卢瀚文',
                'target': '刘小别',
                'value': 19
            },
            {
                'source': '陈夜辉',
                'target': '李睿',
                'value': 22
            },
            {
                'source': '李睿',
                'target': '陈夜辉',
                'value': 22
            },
            {
                'source': '肖时钦',
                'target': '王泽',
                'value': 11
            },
            {
                'source': '王泽',
                'target': '肖时钦',
                'value': 11
            },
            {
                'source': '楚云秀',
                'target': '赵禹哲',
                'value': 22
            },
            {
                'source': '赵禹哲',
                'target': '楚云秀',
                'value': 22
            },
            {
                'source': '魏琛',
                'target': '孙哲平',
                'value': 11
            },
            {
                'source': '孙哲平',
                'target': '魏琛',
                'value': 11
            },
            {
                'source': '张佳乐',
                'target': '于锋',
                'value': 18
            },
            {
                'source': '于锋',
                'target': '张佳乐',
                'value': 18
            },
            {
                'source': '于锋',
                'target': '黄少天',
                'value': 17
            },
            {
                'source': '黄少天',
                'target': '于锋',
                'value': 17
            },
            {
                'source': '李艺博',
                'target': '肖时钦',
                'value': 22
            },
            {
                'source': '肖时钦',
                'target': '李艺博',
                'value': 22
            },
            {
                'source': '肖云',
                'target': '唐柔',
                'value': 21
            },
            {
                'source': '唐柔',
                'target': '肖云',
                'value': 21
            },
            {
                'source': '吴启',
                'target': '苏沐橙',
                'value': 19
            },
            {
                'source': '苏沐橙',
                'target': '吴启',
                'value': 19
            },
            {
                'source': '梁方',
                'target': '莫凡',
                'value': 11
            },
            {
                'source': '莫凡',
                'target': '梁方',
                'value': 11
            },
            {
                'source': '韩文清',
                'target': '安文逸',
                'value': 11
            },
            {
                'source': '安文逸',
                'target': '韩文清',
                'value': 11
            },
            {
                'source': '吕泊远',
                'target': '苏沐橙',
                'value': 22
            },
            {
                'source': '苏沐橙',
                'target': '吕泊远',
                'value': 22
            },
            {
                'source': '乔一帆',
                'target': '吴启',
                'value': 19
            },
            {
                'source': '吴启',
                'target': '乔一帆',
                'value': 19
            },
            {
                'source': '王杰希',
                'target': '乔一帆',
                'value': 10
            },
            {
                'source': '乔一帆',
                'target': '王杰希',
                'value': 10
            },
            {
                'source': '王杰希',
                'target': '邓复升',
                'value': 10
            },
            {
                'source': '邓复升',
                'target': '王杰希',
                'value': 10
            },
            {
                'source': '赵禹哲',
                'target': '叶修',
                'value': 18
            },
            {
                'source': '叶修',
                'target': '赵禹哲',
                'value': 18
            },
            {
                'source': '刘皓',
                'target': '肖时钦',
                'value': 19
            },
            {
                'source': '肖时钦',
                'target': '刘皓',
                'value': 19
            },
            {
                'source': '张新杰',
                'target': '苏沐橙',
                'value': 20
            },
            {
                'source': '苏沐橙',
                'target': '张新杰',
                'value': 20
            },
            {
                'source': '苏沐橙',
                'target': '林敬言',
                'value': 18
            },
            {
                'source': '林敬言',
                'target': '苏沐橙',
                'value': 18
            },
            {
                'source': '魏琛',
                'target': '伍晨',
                'value': 10
            },
            {
                'source': '伍晨',
                'target': '魏琛',
                'value': 10
            },
            {
                'source': '楼冠宁',
                'target': '孙哲平',
                'value': 18
            },
            {
                'source': '孙哲平',
                'target': '楼冠宁',
                'value': 18
            },
            {
                'source': '魏琛',
                'target': '李艺博',
                'value': 10
            },
            {
                'source': '李艺博',
                'target': '魏琛',
                'value': 10
            },
            {
                'source': '许斌',
                'target': '高英杰',
                'value': 10
            },
            {
                'source': '高英杰',
                'target': '许斌',
                'value': 10
            },
            {
                'source': '吴羽策',
                'target': '方锐',
                'value': 19
            },
            {
                'source': '方锐',
                'target': '吴羽策',
                'value': 19
            },
            {
                'source': '于锋',
                'target': '周光义',
                'value': 10
            },
            {
                'source': '周光义',
                'target': '于锋',
                'value': 10
            },
            {
                'source': '宋奇英',
                'target': '韩文清',
                'value': 16
            },
            {
                'source': '韩文清',
                'target': '宋奇英',
                'value': 16
            },
            {
                'source': '方锐',
                'target': '贺铭',
                'value': 18
            },
            {
                'source': '贺铭',
                'target': '方锐',
                'value': 18
            },
            {
                'source': '苏沐橙',
                'target': '安文逸',
                'value': 10
            },
            {
                'source': '安文逸',
                'target': '苏沐橙',
                'value': 10
            },
            {
                'source': '曾信然',
                'target': '宋奇英',
                'value': 20
            },
            {
                'source': '宋奇英',
                'target': '曾信然',
                'value': 20
            },
            {
                'source': '江波涛',
                'target': '吕泊远',
                'value': 10
            },
            {
                'source': '吕泊远',
                'target': '江波涛',
                'value': 10
            },
            {
                'source': '杜明',
                'target': '孙翔',
                'value': 19
            },
            {
                'source': '孙翔',
                'target': '杜明',
                'value': 19
            },
            {
                'source': '郑轩',
                'target': '徐景熙',
                'value': 10
            },
            {
                'source': '徐景熙',
                'target': '郑轩',
                'value': 10
            },
            {
                'source': '喻文州',
                'target': '郑轩',
                'value': 17
            },
            {
                'source': '郑轩',
                'target': '喻文州',
                'value': 17
            },
            {
                'source': '莫凡',
                'target': '宋晓',
                'value': 18
            },
            {
                'source': '宋晓',
                'target': '莫凡',
                'value': 18
            },
            {
                'source': '苏沐橙',
                'target': '江波涛',
                'value': 16
            },
            {
                'source': '江波涛',
                'target': '苏沐橙',
                'value': 16
            },
            {
                'source': '安文逸',
                'target': '周泽楷',
                'value': 10
            },
            {
                'source': '周泽楷',
                'target': '安文逸',
                'value': 10
            },
            {
                'source': '柳非',
                'target': '肖云',
                'value': 9
            },
            {
                'source': '肖云',
                'target': '柳非',
                'value': 9
            },
            {
                'source': '周烨柏',
                'target': '乔一帆',
                'value': 15
            },
            {
                'source': '乔一帆',
                'target': '周烨柏',
                'value': 15
            },
            {
                'source': '蒋游',
                'target': '韩文清',
                'value': 9
            },
            {
                'source': '韩文清',
                'target': '蒋游',
                'value': 9
            },
            {
                'source': '蒋游',
                'target': '叶修',
                'value': 9
            },
            {
                'source': '叶修',
                'target': '蒋游',
                'value': 9
            },
            {
                'source': '陈果',
                'target': '安文逸',
                'value': 18
            },
            {
                'source': '安文逸',
                'target': '陈果',
                'value': 18
            },
            {
                'source': '肖时钦',
                'target': '乔一帆',
                'value': 9
            },
            {
                'source': '乔一帆',
                'target': '肖时钦',
                'value': 9
            },
            {
                'source': '安文逸',
                'target': '魏琛',
                'value': 16
            },
            {
                'source': '魏琛',
                'target': '安文逸',
                'value': 16
            },
            {
                'source': '乔一帆',
                'target': '罗辑',
                'value': 16
            },
            {
                'source': '罗辑',
                'target': '乔一帆',
                'value': 16
            },
            {
                'source': '高英杰',
                'target': '卢瀚文',
                'value': 18
            },
            {
                'source': '卢瀚文',
                'target': '高英杰',
                'value': 18
            },
            {
                'source': '黄少天',
                'target': '魏琛',
                'value': 9
            },
            {
                'source': '魏琛',
                'target': '黄少天',
                'value': 9
            },
            {
                'source': '莫凡',
                'target': '伍晨',
                'value': 9
            },
            {
                'source': '伍晨',
                'target': '莫凡',
                'value': 9
            },
            {
                'source': '陈果',
                'target': '孙哲平',
                'value': 9
            },
            {
                'source': '孙哲平',
                'target': '陈果',
                'value': 9
            },
            {
                'source': '叶修',
                'target': '张益玮',
                'value': 18
            },
            {
                'source': '张益玮',
                'target': '叶修',
                'value': 18
            },
            {
                'source': '许斌',
                'target': '刘小别',
                'value': 9
            },
            {
                'source': '刘小别',
                'target': '许斌',
                'value': 9
            },
            {
                'source': '陈果',
                'target': '关榕飞',
                'value': 17
            },
            {
                'source': '关榕飞',
                'target': '陈果',
                'value': 17
            },
            {
                'source': '苏沐橙',
                'target': '韩文清',
                'value': 9
            },
            {
                'source': '韩文清',
                'target': '苏沐橙',
                'value': 9
            },
            {
                'source': '莫凡',
                'target': '张佳乐',
                'value': 17
            },
            {
                'source': '张佳乐',
                'target': '莫凡',
                'value': 17
            },
            {
                'source': '杨聪',
                'target': '白庶',
                'value': 9
            },
            {
                'source': '白庶',
                'target': '杨聪',
                'value': 9
            },
            {
                'source': '李艺博',
                'target': '黄少天',
                'value': 18
            },
            {
                'source': '黄少天',
                'target': '李艺博',
                'value': 18
            },
            {
                'source': '莫凡',
                'target': '李远',
                'value': 17
            },
            {
                'source': '李远',
                'target': '莫凡',
                'value': 17
            },
            {
                'source': '江波涛',
                'target': '莫凡',
                'value': 9
            },
            {
                'source': '莫凡',
                'target': '江波涛',
                'value': 9
            },
            {
                'source': '方锐',
                'target': '方明华',
                'value': 9
            },
            {
                'source': '方明华',
                'target': '方锐',
                'value': 9
            },
            {
                'source': '高杰',
                'target': '苏沐橙',
                'value': 8
            },
            {
                'source': '苏沐橙',
                'target': '高杰',
                'value': 8
            },
            {
                'source': '张家兴',
                'target': '申建',
                'value': 15
            },
            {
                'source': '申建',
                'target': '张家兴',
                'value': 15
            },
            {
                'source': '刘小别',
                'target': '梁方',
                'value': 15
            },
            {
                'source': '梁方',
                'target': '刘小别',
                'value': 15
            },
            {
                'source': '唐昊',
                'target': '王杰希',
                'value': 16
            },
            {
                'source': '王杰希',
                'target': '唐昊',
                'value': 16
            },
            {
                'source': '王杰希',
                'target': '陈果',
                'value': 14
            },
            {
                'source': '陈果',
                'target': '王杰希',
                'value': 14
            },
            {
                'source': '邹远',
                'target': '唐昊',
                'value': 8
            },
            {
                'source': '唐昊',
                'target': '邹远',
                'value': 8
            },
            {
                'source': '陈果',
                'target': '乔一帆',
                'value': 8
            },
            {
                'source': '乔一帆',
                'target': '陈果',
                'value': 8
            },
            {
                'source': '崔立',
                'target': '孙翔',
                'value': 8
            },
            {
                'source': '孙翔',
                'target': '崔立',
                'value': 8
            },
            {
                'source': '乔一帆',
                'target': '莫凡',
                'value': 8
            },
            {
                'source': '莫凡',
                'target': '乔一帆',
                'value': 8
            },
            {
                'source': '崔立',
                'target': '苏沐橙',
                'value': 14
            },
            {
                'source': '苏沐橙',
                'target': '崔立',
                'value': 14
            },
            {
                'source': '刘小别',
                'target': '高英杰',
                'value': 15
            },
            {
                'source': '高英杰',
                'target': '刘小别',
                'value': 15
            },
            {
                'source': '张奇',
                'target': '肖时钦',
                'value': 8
            },
            {
                'source': '肖时钦',
                'target': '张奇',
                'value': 8
            },
            {
                'source': '江波涛',
                'target': '杜明',
                'value': 8
            },
            {
                'source': '杜明',
                'target': '江波涛',
                'value': 8
            },
            {
                'source': '方锐',
                'target': '安文逸',
                'value': 8
            },
            {
                'source': '安文逸',
                'target': '方锐',
                'value': 8
            },
            {
                'source': '方锐',
                'target': '李远',
                'value': 8
            },
            {
                'source': '李远',
                'target': '方锐',
                'value': 8
            },
            {
                'source': '魏琛',
                'target': '韩文清',
                'value': 14
            },
            {
                'source': '韩文清',
                'target': '魏琛',
                'value': 14
            },
            {
                'source': '田七',
                'target': '夜未央',
                'value': 7
            },
            {
                'source': '夜未央',
                'target': '田七',
                'value': 7
            },
            {
                'source': '乔一帆',
                'target': '肖云',
                'value': 14
            },
            {
                'source': '肖云',
                'target': '乔一帆',
                'value': 14
            },
            {
                'source': '高英杰',
                'target': '肖云',
                'value': 7
            },
            {
                'source': '肖云',
                'target': '高英杰',
                'value': 7
            },
            {
                'source': '李济',
                'target': '柳非',
                'value': 7
            },
            {
                'source': '柳非',
                'target': '李济',
                'value': 7
            },
            {
                'source': '韩文清',
                'target': '黄少天',
                'value': 7
            },
            {
                'source': '黄少天',
                'target': '韩文清',
                'value': 7
            },
            {
                'source': '喻文州',
                'target': '王杰希',
                'value': 7
            },
            {
                'source': '王杰希',
                'target': '喻文州',
                'value': 7
            },
            {
                'source': '苏沐橙',
                'target': '喻文州',
                'value': 7
            },
            {
                'source': '喻文州',
                'target': '苏沐橙',
                'value': 7
            },
            {
                'source': '吕泊远',
                'target': '周泽楷',
                'value': 7
            },
            {
                'source': '周泽楷',
                'target': '吕泊远',
                'value': 7
            },
            {
                'source': '魏琛',
                'target': '孙翔',
                'value': 7
            },
            {
                'source': '孙翔',
                'target': '魏琛',
                'value': 7
            },
            {
                'source': '孙翔',
                'target': '乔一帆',
                'value': 14
            },
            {
                'source': '乔一帆',
                'target': '孙翔',
                'value': 14
            },
            {
                'source': '张新杰',
                'target': '卢瀚文',
                'value': 7
            },
            {
                'source': '卢瀚文',
                'target': '张新杰',
                'value': 7
            },
            {
                'source': '陈果',
                'target': '张新杰',
                'value': 7
            },
            {
                'source': '张新杰',
                'target': '陈果',
                'value': 7
            },
            {
                'source': '卢瀚文',
                'target': '魏琛',
                'value': 7
            },
            {
                'source': '魏琛',
                'target': '卢瀚文',
                'value': 7
            },
            {
                'source': '喻文州',
                'target': '肖时钦',
                'value': 7
            },
            {
                'source': '肖时钦',
                'target': '喻文州',
                'value': 7
            },
            {
                'source': '方锐',
                'target': '罗辑',
                'value': 7
            },
            {
                'source': '罗辑',
                'target': '方锐',
                'value': 7
            },
            {
                'source': '叶修',
                'target': '于锋',
                'value': 7
            },
            {
                'source': '于锋',
                'target': '叶修',
                'value': 7
            },
            {
                'source': '杨昊轩',
                'target': '苏沐橙',
                'value': 7
            },
            {
                'source': '苏沐橙',
                'target': '杨昊轩',
                'value': 7
            },
            {
                'source': '叶修',
                'target': '宋奇英',
                'value': 7
            },
            {
                'source': '宋奇英',
                'target': '叶修',
                'value': 7
            },
            {
                'source': '孙翔',
                'target': '吕泊远',
                'value': 7
            },
            {
                'source': '吕泊远',
                'target': '孙翔',
                'value': 7
            },
            {
                'source': '秦牧云',
                'target': '张新杰',
                'value': 7
            },
            {
                'source': '张新杰',
                'target': '秦牧云',
                'value': 7
            },
            {
                'source': '喻文州',
                'target': '宋晓',
                'value': 7
            },
            {
                'source': '宋晓',
                'target': '喻文州',
                'value': 7
            },
            {
                'source': '乔一帆',
                'target': '宋奇英',
                'value': 7
            },
            {
                'source': '宋奇英',
                'target': '乔一帆',
                'value': 7
            },
            {
                'source': '方锐',
                'target': '张新杰',
                'value': 7
            },
            {
                'source': '张新杰',
                'target': '方锐',
                'value': 7
            },
            {
                'source': '许斌',
                'target': '叶修',
                'value': 6
            },
            {
                'source': '叶修',
                'target': '许斌',
                'value': 6
            },
            {
                'source': '肖云',
                'target': '王杰希',
                'value': 6
            },
            {
                'source': '王杰希',
                'target': '肖云',
                'value': 6
            },
            {
                'source': '叶修',
                'target': '杜明',
                'value': 6
            },
            {
                'source': '杜明',
                'target': '叶修',
                'value': 6
            },
            {
                'source': '王杰希',
                'target': '张新杰',
                'value': 12
            },
            {
                'source': '张新杰',
                'target': '王杰希',
                'value': 12
            },
            {
                'source': '邓复升',
                'target': '张新杰',
                'value': 6
            },
            {
                'source': '张新杰',
                'target': '邓复升',
                'value': 6
            },
            {
                'source': '苏沐橙',
                'target': '王杰希',
                'value': 6
            },
            {
                'source': '王杰希',
                'target': '苏沐橙',
                'value': 6
            },
            {
                'source': '崔立',
                'target': '叶修',
                'value': 6
            },
            {
                'source': '叶修',
                'target': '崔立',
                'value': 6
            },
            {
                'source': '唐柔',
                'target': '伍晨',
                'value': 6
            },
            {
                'source': '伍晨',
                'target': '唐柔',
                'value': 6
            },
            {
                'source': '申建',
                'target': '叶修',
                'value': 6
            },
            {
                'source': '叶修',
                'target': '申建',
                'value': 6
            },
            {
                'source': '孙翔',
                'target': '申建',
                'value': 6
            },
            {
                'source': '申建',
                'target': '孙翔',
                'value': 6
            },
            {
                'source': '卢瀚文',
                'target': '唐柔',
                'value': 6
            },
            {
                'source': '唐柔',
                'target': '卢瀚文',
                'value': 6
            },
            {
                'source': '韩文清',
                'target': '唐柔',
                'value': 6
            },
            {
                'source': '唐柔',
                'target': '韩文清',
                'value': 6
            },
            {
                'source': '莫凡',
                'target': '肖时钦',
                'value': 6
            },
            {
                'source': '肖时钦',
                'target': '莫凡',
                'value': 6
            },
            {
                'source': '肖时钦',
                'target': '邱非',
                'value': 12
            },
            {
                'source': '邱非',
                'target': '肖时钦',
                'value': 12
            },
            {
                'source': '韩文清',
                'target': '陈果',
                'value': 6
            },
            {
                'source': '陈果',
                'target': '韩文清',
                'value': 6
            },
            {
                'source': '夏仲天',
                'target': '叶修',
                'value': 6
            },
            {
                'source': '叶修',
                'target': '夏仲天',
                'value': 6
            },
            {
                'source': '吕泊远',
                'target': '吴启',
                'value': 6
            },
            {
                'source': '吴启',
                'target': '吕泊远',
                'value': 6
            },
            {
                'source': '吴启',
                'target': '杜明',
                'value': 12
            },
            {
                'source': '杜明',
                'target': '吴启',
                'value': 12
            },
            {
                'source': '赵禹哲',
                'target': '刘皓',
                'value': 6
            },
            {
                'source': '刘皓',
                'target': '赵禹哲',
                'value': 6
            },
            {
                'source': '卢瀚文',
                'target': '郑轩',
                'value': 6
            },
            {
                'source': '郑轩',
                'target': '卢瀚文',
                'value': 6
            },
            {
                'source': '李华',
                'target': '叶修',
                'value': 6
            },
            {
                'source': '叶修',
                'target': '李华',
                'value': 6
            },
            {
                'source': '曾信然',
                'target': '叶修',
                'value': 12
            },
            {
                'source': '叶修',
                'target': '曾信然',
                'value': 12
            },
            {
                'source': '楚云秀',
                'target': '李华',
                'value': 6
            },
            {
                'source': '李华',
                'target': '楚云秀',
                'value': 6
            },
            {
                'source': '戴妍琦',
                'target': '肖时钦',
                'value': 6
            },
            {
                'source': '肖时钦',
                'target': '戴妍琦',
                'value': 6
            },
            {
                'source': '宋奇英',
                'target': '唐柔',
                'value': 6
            },
            {
                'source': '唐柔',
                'target': '宋奇英',
                'value': 6
            },
            {
                'source': '安文逸',
                'target': '方明华',
                'value': 6
            },
            {
                'source': '方明华',
                'target': '安文逸',
                'value': 6
            },
            {
                'source': '方锐',
                'target': '张佳乐',
                'value': 6
            },
            {
                'source': '张佳乐',
                'target': '方锐',
                'value': 6
            },
            {
                'source': '方锐',
                'target': '刘小别',
                'value': 6
            },
            {
                'source': '刘小别',
                'target': '方锐',
                'value': 6
            },
            {
                'source': '杨聪',
                'target': '苏沐橙',
                'value': 6
            },
            {
                'source': '苏沐橙',
                'target': '杨聪',
                'value': 6
            },
            {
                'source': '杜明',
                'target': '苏沐橙',
                'value': 12
            },
            {
                'source': '苏沐橙',
                'target': '杜明',
                'value': 12
            },
            {
                'source': '方明华',
                'target': '周泽楷',
                'value': 6
            },
            {
                'source': '周泽楷',
                'target': '方明华',
                'value': 6
            }
        ]
    }]
};