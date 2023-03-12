option = {
    // 图表标题
    title: {
        show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '#赫兹中国回应申请破产# 情感图谱',//主标题文本，'\n'指定换行
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
            color: '#ddd'        // 主标题文字颜色
        },
        subtextStyle: {
            color: '#ddd'        // 副标题文字颜色
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
    backgroundColor: '#000',
    legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
        show: true,
        data: [
            {
                name: '积极',
                textStyle: {
                    color: '#ccc'
                },
            },
            {
                name: '中立',
                textStyle: {
                    color: '#ccc'
                },
            },
            {
                name: '消极',
                textStyle: {
                    color: '#ccc'
                },
            }
        ]
    },
    series: [{
        type: 'graph', // 关系图
        name: '#赫兹中国回应申请破产#', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        layout: 'force', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
        legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
        hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
        coordinateSystem: null, // 坐标系可选
        xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
        yAxisIndex: 0, // y轴坐标 
        force: { // 力引导图基本配置
            // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
            repulsion: 50, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            edgeLength: 50, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
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
                    show: true,
                    color: '#666'
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
                color: 'rgba(255, 0, 255, 0.4)',
                width: '1', //线的粗细
                type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.3, // 线条的曲线程度，从0到1
                opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
            },
            emphasis: { // 高亮状态

            }
        },
        label: { // ========结点图形上的文本标签
            normal: {
                show: false, // 是否显示标签。
                position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
                textStyle: { // 标签的字体样式
                    color: '#ccc', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
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
                name: '积极',
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            {
                name: '中立',
                itemStyle: {
                    normal: {
                        color: 'gray'
                    }
                }
            },
            {
                name: '消极',
                itemStyle: {
                    normal: {
                        color: 'green'
                    }
                }
            }
        ],
        // 设置结点node的数据
        // category: 类别序号，从0开始
        // name: 结点图形显示的文字
        // value: 鼠标点击结点，显示的数字
        // symbolSize: 结点图形的大小
        // symbol: 类目节点标记图形，默然为圆形
        // label: 标签样式
        data: [
           { category: '消极', name: '头条新闻', value: 79163, symbolSize: 80, label: { show: true, color: "#ccc" } }, { category: '消极', name: '环球网', value: 28792, symbolSize: 75, label: { show: true, color: "#ccc" } }, { category: '消极', name: '环球时报', value: 1426, symbolSize: 50, label: { show: true, color: "#ccc" } }, { category: '消极', name: '观察者网', value: 181, symbolSize: 40 }, { category: '消极', name: '南方日报', value: 372, symbolSize: 45, label: { show: true, color: "#ccc" } }, { category: '消极', name: '中国网', value: 16, symbolSize: 20 }, { category: '中立', name: '北京青年报', value: 69, symbolSize: 30 }, { category: '消极', name: '爱吐槽的刘战神', value: 3059, symbolSize: 60, label: { show: true, color: "#ccc" } }, { category: '消极', name: '新浪视频', value: 62, symbolSize: 30 }, { category: '消极', name: '上帝之鹰_5zn', value: 108, symbolSize: 35 }, { category: '积极', name: '知警君', value: 92, symbolSize: 35 }, { category: '中立', name: '华商报', value: 80, symbolSize: 30 }, { category: '消极', name: '中国经营报', value: 27, symbolSize: 25 }, { category: '消极', name: '天津股侠', value: 149, symbolSize: 35 }, { category: '消极', name: '半月谈', value: 147, symbolSize: 35 }, { category: '积极', name: '军机不可泄露', value: 417, symbolSize: 45, label: { show: true, color: "#ccc" } }, { category: '消极', name: '刘亦菲今天更博了吗', value: 106, symbolSize: 35 }, { category: '消极', name: '香港商報網', value: 60, symbolSize: 30 }, { category: '消极', name: '科技探索队长', value: 21, symbolSize: 25 }, { category: '消极', name: '帝吧管理员', value: 50, symbolSize: 30 }, { category: '消极', name: '深圳网警', value: 116, symbolSize: 35 }, { category: '消极', name: '香港文匯網', value: 92, symbolSize: 35 }, { category: '中立', name: '雷大哥', value: 74, symbolSize: 30 }, { category: '积极', name: '海客新闻', value: 26, symbolSize: 25 }, { category: '消极', name: '炙热Mike_', value: 0, symbolSize: 5 }, { category: '消极', name: '吃瓜不可错过', value: 92, symbolSize: 35 }, { category: '消极', name: '人民日报海外版-海外网', value: 59, symbolSize: 30 }, { category: '积极', name: '燃新闻', value: 33, symbolSize: 25 }, { category: '中立', name: '马奕谦', value: 74, symbolSize: 30 }, { category: '消极', name: '习五一', value: 49, symbolSize: 30 }, { category: '消极', name: '我就是会飞啊', value: 103, symbolSize: 35 }, { category: '积极', name: '朱衣点头', value: 15, symbolSize: 20 }, { category: '积极', name: '指尖盐城', value: 10, symbolSize: 20 }, { category: '消极', name: '青春伊9', value: 27, symbolSize: 25 }, { category: '消极', name: '耿向顺', value: 23, symbolSize: 25 }, { category: '消极', name: '金陵上空的鹰', value: 12, symbolSize: 20 }, { category: '消极', name: '深圳小天', value: 102, symbolSize: 35 }, { category: '消极', name: 'EC品牌全案', value: 30, symbolSize: 25 }, { category: '积极', name: '综艺情报', value: 11, symbolSize: 20 }, { category: '消极', name: '每日球新闻', value: 354, symbolSize: 40 }, { category: '消极', name: '畘渡', value: 1, symbolSize: 10 }, { category: '消极', name: '共城居士', value: 15, symbolSize: 20 }, { category: '消极', name: '胖子陈越', value: 45, symbolSize: 30 }, { category: '消极', name: '浪羁·', value: 30, symbolSize: 25 }, { category: '积极', name: '樊哈儿', value: 20, symbolSize: 20 }, { category: '消极', name: '津门玄竹', value: 16, symbolSize: 20 }, { category: '消极', name: '贼叉', value: 34, symbolSize: 25 }, { category: '消极', name: '军粉菌粉', value: 6, symbolSize: 15 }, { category: '消极', name: '高大拙', value: 3, symbolSize: 10 }, { category: '积极', name: '浊酒纵欢', value: 7, symbolSize: 15 }, { category: '消极', name: '__江小乐', value: 33, symbolSize: 25 }, { category: '消极', name: '北京昌平', value: 5, symbolSize: 15 }, { category: '消极', name: '国琴不可乱弹', value: 33, symbolSize: 25 }, { category: '消极', name: '科普中国', value: 19, symbolSize: 20 }, { category: '消极', name: '阿宁很优秀_', value: 54, symbolSize: 30 }, { category: '消极', name: '嘎嘣脆武大郎', value: 50, symbolSize: 30 }, { category: '消极', name: '网易财经', value: 32, symbolSize: 25 }, { category: '消极', name: '追昊仙女201501', value: 0, symbolSize: 5 }, { category: '消极', name: '青春达州', value: 4, symbolSize: 15 }, { category: '消极', name: '宿迁之声', value: 8, symbolSize: 15 }, { category: '消极', name: '热门表哥', value: 12, symbolSize: 20 }, { category: '消极', name: '说诉', value: 58, symbolSize: 30 }, { category: '消极', name: '共青团大连市委', value: 24, symbolSize: 25 }, { category: '消极', name: '重回大唐爱', value: 8, symbolSize: 15 }, { category: '积极', name: '宽窄有度', value: 45, symbolSize: 30 }, { category: '消极', name: 'MrWong先森', value: 11, symbolSize: 20 }, { category: '消极', name: '一夜清风_', value: 12, symbolSize: 20 }, { category: '消极', name: '易佳笺香', value: 23, symbolSize: 25 }, { category: '积极', name: '每日经济学', value: 6, symbolSize: 15 }, { category: '消极', name: '自种天然', value: 0, symbolSize: 5 }, { category: '消极', name: 'zfw平安浦城', value: 9, symbolSize: 15 }, { category: '消极', name: '久别重逢喝几杯', value: 0, symbolSize: 5 }, { category: '消极', name: '山峤姐姐', value: 0, symbolSize: 5 }, { category: '消极', name: '全球影视通缉令', value: 60, symbolSize: 30 }, { category: '消极', name: '·十安·', value: 0, symbolSize: 5 }, { category: '消极', name: '创新二哥', value: 5, symbolSize: 15 }, { category: '中立', name: '兵味er', value: 2, symbolSize: 10 }, { category: '消极', name: 'Snowboard_KVK', value: 0, symbolSize: 5 }, { category: '消极', name: '施罗德大叔', value: 5, symbolSize: 15 }, { category: '消极', name: '女神的尾巴', value: 6, symbolSize: 15 }, { category: '消极', name: '稷下公子', value: 6, symbolSize: 15 }, { category: '消极', name: '剧透小迷妹', value: 0, symbolSize: 5 }, { category: '消极', name: '方依森', value: 9, symbolSize: 15 }, { category: '消极', name: '曾经是波妞·', value: 0, symbolSize: 5 }, { category: '消极', name: '故顾孤', value: 0, symbolSize: 5 }, { category: '消极', name: '陈天哲', value: 6, symbolSize: 15 }, { category: '消极', name: '花燃山色晚', value: 0, symbolSize: 5 }, { category: '消极', name: '橙九的甜stin_', value: 0, symbolSize: 5 }, { category: '消极', name: '四川监狱', value: 0, symbolSize: 5 }, { category: '消极', name: '哦我的太子殿下', value: 0, symbolSize: 5 }, { category: '消极', name: '史上热门新闻', value: 102, symbolSize: 35 }, { category: '消极', name: '春桃甜記', value: 4, symbolSize: 15 }, { category: '消极', name: '那年那夏·', value: 1, symbolSize: 10 }, { category: '消极', name: '是阿pat啊', value: 0, symbolSize: 5 }, { category: '消极', name: '十九画的猫', value: 0, symbolSize: 5 }, { category: '消极', name: 'zz平淡如水zz', value: 4, symbolSize: 15 }, { category: '消极', name: '长岛鱼鱼子', value: 0, symbolSize: 5 }, { category: '积极', name: '桭娭', value: 0, symbolSize: 5 }, { category: '消极', name: '捞乜都掂·', value: 0, symbolSize: 5 }, { category: '消极', name: '互联网放屁选手·', value: 0, symbolSize: 5 }, { category: '消极', name: '葵花少女妙飞鱼', value: 0, symbolSize: 5 }, { category: '积极', name: '紫米家的星星', value: 5, symbolSize: 15 }, { category: '消极', name: '·元气小阿姨·Ryannn', value: 0, symbolSize: 5 }, { category: '消极', name: 'ahanmmm', value: 0, symbolSize: 5 }, { category: '消极', name: '娱乐圈扒酱', value: 100, symbolSize: 35 }, { category: '消极', name: '大连潮生活', value: 1, symbolSize: 10 }, { category: '消极', name: '藤沃雏野', value: 2, symbolSize: 10 }, { category: '中立', name: '糖炒栗子以', value: 1, symbolSize: 10 }, { category: '消极', name: '三千里海岸X-Light', value: 0, symbolSize: 5 }, { category: '消极', name: '-Cingzijancze-', value: 0, symbolSize: 5 }, { category: '消极', name: '贾兔憨憨', value: 0, symbolSize: 5 }, { category: '消极', name: '鲱鱼罐头爱好者', value: 1, symbolSize: 10 }, { category: '消极', name: '芝士乳酪·', value: 0, symbolSize: 5 }, { category: '积极', name: '心动嘉宾黄米糕糕糕糕_', value: 0, symbolSize: 5 }, { category: '积极', name: '春卷蘸奶', value: 0, symbolSize: 5 }, { category: '消极', name: '啊布灬血雨探花', value: 2, symbolSize: 10 }, { category: '消极', name: '·甜久吃胖辣·', value: 0, symbolSize: 5 }, { category: '消极', name: '减肥了嘛-', value: 1, symbolSize: 10 }, { category: '消极', name: '蟹老板快跑', value: 0, symbolSize: 5 }, { category: '消极', name: '善良小魔女-pitton', value: 18, symbolSize: 20 },

            
            ],
        links: [ // 设置连线edges的数据
            
        ]
    }]
};