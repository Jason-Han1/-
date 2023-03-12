//const color = ['#E27471', '#00C8FF', '#E6AF15', '#00E3F3', '#CF83F4', '#6B81E1', '#00FBAE']
// 
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
        data: [{
                name: '专题类'
            },
            {
                name: '青少类'
            },
            {
                name: '体育类'
            },
            {
                name: '电影类'
            },
            {
                name: '其它类'
            },
            {
                name: '电视剧类'
            },
            {
                name: '法治类'
            },
            {
                name: '生活服务类'
            },
            {
                name: '音乐类'
            },
            {
                name: '综艺类'
            },
            {
                name: '新闻/时事类'
            },
            {
                name: '财经类'
            },
            {
                name: '戏剧类'
            }
        ]
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        right: '2%',
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
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
        edgeSymbol: ['none', 'arrow'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
        // 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
        edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
        //symbolSize: 15,
        
///////////////////////////////////////////////////////////////////////
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
                color: '#ffa022',
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
                show: true, // 是否显示标签。
                //show: data.value > 2,
                position: 'right', //'inside', // 标签的位置。['50%', '50%'] [x,y]
                
                textStyle: { // 标签的字体样式
                    color: '#FF7853', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                    fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                    fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
                    fontFamily: 'sans-serif', // 文字的字体系列
                    fontSize: 10, // 字体大小
                }
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
        categories: [{
                name: '专题类'
            },
            {
                name: '青少类'
            },
            {
                name: '体育类'
            },
            {
                name: '电影类'
            },
            {
                name: '其它类'
            },
            {
                name: '电视剧类'
            },
            {
                name: '法治类'
            },
            {
                name: '生活服务类'
            },
            {
                name: '音乐类'
            },
            {
                name: '综艺类'
            },
            {
                name: '新闻/时事类'
            },
            {
                name: '财经类'
            },
            {
                name: '戏剧类'
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
                name: 'CCTV音乐厅',
                category: '生活服务类',
                value: 8
            },
            {
                name: 'ET和孩子们的假期',
                category: '青少类',
                value: 3
            },
            {
                name: 'NBA',
                category: '体育类',
                value: 9
            },
            {
                name: 'TOPTEN系列',
                category: '体育类',
                value: 5
            },
            {
                name: '爱情公寓第三部',
                category: '电视剧类',
                value: 3
            },
            {
                name: '爱情悠悠药草香',
                category: '电视剧类',
                value: 15
            },
            {
                name: '草根王',
                category: '专题类',
                value: 2
            },
            {
                name: '忏悔录',
                category: '法治类',
                value: 6
            },
            {
                name: '春天的十七个瞬间前传',
                category: '电视剧类',
                value: 3
            },
            {
                name: '璀璨人生',
                category: '电视剧类',
                value: 9
            },
            {
                name: '大魔术师',
                category: '电影类',
                value: 5
            },
            {
                name: '大真探',
                category: '专题类',
                value: 22
            },
            {
                name: '道德观察',
                category: '专题类',
                value: 2
            },
            {
                name: '德甲联赛',
                category: '其它类',
                value: 2
            },
            {
                name: '东方时空',
                category: '新闻/时事类',
                value: 7
            },
            {
                name: '法律讲堂',
                category: '法治类',
                value: 1
            },
            {
                name: '法制编辑部',
                category: '法治类',
                value: 1
            },
            {
                name: '防务精英',
                category: '专题类',
                value: 8
            },
            {
                name: '非常聚精彩',
                category: '综艺类',
                value: 1
            },
            {
                name: '非诚勿扰',
                category: '综艺类',
                value: 19
            },
            {
                name: '共同关注',
                category: '新闻/时事类',
                value: 8
            },
            {
                name: '购时尚',
                category: '生活服务类',
                value: 8
            },
            {
                name: '光影星播客',
                category: '电影类',
                value: 1
            },
            {
                name: '广告',
                category: '其它类',
                value: 292,
              //  symbolSize:30
            },
            {
                name: '海峡两岸',
                category: '新闻/时事类',
                value: 15
            },
            {
                name: '葫芦小金刚',
                category: '青少类',
                value: 12
            },
            {
                name: '蝴蝶行动',
                category: '电视剧类',
                value: 1
            },
            {
                name: '华夏微电影',
                category: '电影类',
                value: 2
            },
            {
                name: '寰宇视野',
                category: '专题类',
                value: 14
            },
            {
                name: '黄金100秒',
                category: '其它类',
                value: 1
            },
            {
                name: '火线三兄弟',
                category: '电视剧类',
                value: 6
            },
            {
                name: '家事',
                category: '专题类',
                value: 2
            },
            {
                name: '假如生活欺骗了你',
                category: '电视剧类',
                value: 7
            },
            {
                name: '健康之路',
                category: '生活服务类',
                value: 2
            },
            {
                name: '焦点访谈',
                category: '新闻/时事类',
                value: 20
            },
            {
                name: '节目预告',
                category: '生活服务类',
                value: 79
            },
            {
                name: '今日关注',
                category: '体育类',
                value: 7
            },
            {
                name: '经济半小时',
                category: '电影类',
                value: 3
            },
            {
                name: '经济信息联播',
                category: '财经类',
                value: 4
            },
            {
                name: '精彩纪录',
                category: '专题类',
                value: 8
            },
            {
                name: '精彩音乐汇',
                category: '音乐类',
                value: 5
            },
            {
                name: '精忠岳飞',
                category: '电视剧类',
                value: 3
            },
            {
                name: '狙击生死线',
                category: '体育类',
                value: 1
            },
            {
                name: '军事报道',
                category: '专题类',
                value: 2
            },
            {
                name: '开心麻花街',
                category: '其它类',
                value: 2
            },
            {
                name: '开学第一课',
                category: '青少类',
                value: 28
            },
            {
                name: '快乐酷宝',
                category: '电视剧类',
                value: 5
            },
            {
                name: '兰陵王',
                category: '电影类',
                value: 1
            },
            {
                name: '老梁故事汇',
                category: '专题类',
                value: 2
            },
            {
                name: '梨园春',
                category: '戏剧类',
                value: 8
            },
            {
                name: '刘三姐',
                category: '电影类',
                value: 3
            },
            {
                name: '面对面',
                category: '新闻/时事类',
                value: 2
            },
            {
                name: '魔术师',
                category: '电影类',
                value: 1
            },
            {
                name: '农广天地',
                category: '专题类',
                value: 1
            },
            {
                name: '频道包装',
                category: '其它类',
                value: 1
            },
            {
                name: '普法栏目剧',
                category: '其它类',
                value: 6
            },
            {
                name: '枪王之王',
                category: '电影类',
                value: 4
            },
            {
                name: '青盲',
                category: '电视剧类',
                value: 1
            },
            {
                name: '全运会射击',
                category: '体育类',
                value: 3
            },
            {
                name: '全运会特别报道',
                category: '体育类',
                value: 20
            },
            {
                name: '全运会跳水',
                category: '体育类',
                value: 57
            },
            {
                name: '山东新闻联播',
                category: '新闻/时事类',
                value: 1
            },
            {
                name: '陕西新闻联播',
                category: '新闻/时事类',
                value: 1
            },
            {
                name: '时代',
                category: '专题类',
                value: 7
            },
            {
                name: '首席夜话',
                category: '电影类',
                value: 2
            },
            {
                name: '首映庆典',
                category: '新闻/时事类',
                value: 1
            },
            {
                name: '探索发现',
                category: '专题类',
                value: 2
            },
            {
                name: '唐宫燕',
                category: '综艺类',
                value: 1
            },
            {
                name: '体育世界',
                category: '体育类',
                value: 3
            },
            {
                name: '体育新闻',
                category: '体育类',
                value: 2
            },
            {
                name: '天气预报',
                category: '生活服务类',
                value: 30
            },
            {
                name: '铁血兄弟',
                category: '电视剧类',
                value: 23
            },
            {
                name: '万象',
                category: '专题类',
                value: 16
            },
            {
                name: '我是传奇',
                category: '电视剧类',
                value: 1
            },
            {
                name: '我要上春晚',
                category: '综艺类',
                value: 27
            },
            {
                name: '武松',
                category: '电视剧类',
                value: 8
            },
            {
                name: '舞蹈世界',
                category: '综艺类',
                value: 2
            },
            {
                name: '喜羊羊与灰太狼开心方程式',
                category: '青少类',
                value: 2
            },
            {
                name: '喜羊羊与灰太狼开心日记',
                category: '青少类',
                value: 8
            },
            {
                name: '香瓜七兄弟',
                category: '新闻/时事类',
                value: 1
            },
            {
                name: '消失的子弹',
                category: '电影类',
                value: 27
            },
            {
                name: '小时代',
                category: '电影类',
                value: 10
            },
            {
                name: '心连心慰问演出',
                category: '综艺类',
                value: 1
            },
            {
                name: '新恋爱时代',
                category: '电视剧类',
                value: 3
            },
            {
                name: '新闻地图',
                category: '新闻/时事类',
                value: 1
            },
            {
                name: '新闻联播',
                category: '新闻/时事类',
                value: 40
            },
            {
                name: '熊出没',
                category: '电视剧类',
                value: 9
            },
            {
                name: '阳光大道',
                category: '专题类',
                value: 1
            },
            {
                name: '阳光路上',
                category: '电视剧类',
                value: 14
            },
            {
                name: '一槌定音',
                category: '财经类',
                value: 12
            },
            {
                name: '一路欢笑优秀曲艺作品展播',
                category: '戏剧类',
                value: 1
            },
            {
                name: '一线',
                category: '法治类',
                value: 6
            },
            {
                name: '音乐现场',
                category: '体育类',
                value: 1
            },
            {
                name: '原来如此',
                category: '专题类',
                value: 7
            },
            {
                name: '战火中的花蕾',
                category: '财经类',
                value: 1
            },
            {
                name: '真相',
                category: '专题类',
                value: 7
            },
            {
                name: '甄嬛传',
                category: '电视剧类',
                value: 2
            },
            {
                name: '直播港澳台',
                category: '电视剧类',
                value: 2
            },
            {
                name: '中国汉字听写大会',
                category: '电影类',
                value: 1
            },
            {
                name: '中国好声音',
                category: '青少类',
                value: 2
            },
            {
                name: '中国文艺',
                category: '生活服务类',
                value: 3
            },
            {
                name: '中国新闻',
                category: '新闻/时事类',
                value: 10
            },
            {
                name: '妯娌的三国时代',
                category: '电视剧类',
                value: 2
            },
            {
                name: '转播中央台新闻联播',
                category: '新闻/时事类',
                value: 2
            },
            {
                name: '自然',
                category: '专题类',
                value: 1
            },
            {
                name: '自然传奇',
                category: '专题类',
                value: 10
            },
            {
                name: '走遍中国',
                category: '专题类',
                symbolSize: 6,
                value: 6
            }
        ],
        links: [{
                source: '新闻联播',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '战火中的花蕾'
            },
            {
                source: '一槌定音',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '一槌定音'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '走遍中国'
            },
            {
                source: '走遍中国',
                target: '大魔术师'
            },
            {
                source: '大魔术师',
                target: '广告'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '广告'
            },
            {
                source: '广告',
                target: '今日关注'
            },
            {
                source: '全运会射击',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '新闻联播'
            },
            {
                source: '阳光路上',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '走遍中国'
            },
            {
                source: '走遍中国',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '广告'
            },
            {
                source: '广告',
                target: '普法栏目剧'
            },
            {
                source: '广告',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '广告'
            },
            {
                source: '广告',
                target: '健康之路'
            },
            {
                source: '健康之路',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '喜羊羊与灰太狼开心方程式'
            },
            {
                source: '喜羊羊与灰太狼开心方程式',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '铁血兄弟',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '春天的十七个瞬间前传'
            },
            {
                source: '春天的十七个瞬间前传',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '普法栏目剧'
            },
            {
                source: '普法栏目剧',
                target: '道德观察'
            },
            {
                source: '道德观察',
                target: '频道包装'
            },
            {
                source: '频道包装',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '一线'
            },
            {
                source: '一线',
                target: '广告'
            },
            {
                source: '广告',
                target: '法律讲堂'
            },
            {
                source: '法律讲堂',
                target: '忏悔录'
            },
            {
                source: '忏悔录',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '武松',
                target: '音乐现场'
            },
            {
                source: '全运会跳水',
                target: '万象'
            },
            {
                source: '万象',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '精彩音乐汇'
            },
            {
                source: '精彩音乐汇',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '广告'
            },
            {
                source: '广告',
                target: '假如生活欺骗了你'
            },
            {
                source: '假如生活欺骗了你',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '璀璨人生'
            },
            {
                source: '焦点访谈',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '普法栏目剧',
                target: '唐宫燕'
            },
            {
                source: '舞蹈世界',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '小时代'
            },
            {
                source: '小时代',
                target: '铁血兄弟'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '万象'
            },
            {
                source: '万象',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '爱情公寓第三部'
            },
            {
                source: '爱情公寓第三部',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '精彩音乐汇'
            },
            {
                source: '精彩音乐汇',
                target: '小时代'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '节目预告'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '体育世界'
            },
            {
                source: '体育世界',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '战火中的花蕾',
                target: '武松'
            },
            {
                source: '武松',
                target: '铁血兄弟'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '真相'
            },
            {
                source: '真相',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '探索发现'
            },
            {
                source: '探索发现',
                target: '大真探'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '爱情悠悠药草香',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '广告'
            },
            {
                source: '广告',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '大魔术师'
            },
            {
                source: '大魔术师',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '普法栏目剧'
            },
            {
                source: '普法栏目剧',
                target: '广告'
            },
            {
                source: '广告',
                target: '普法栏目剧'
            },
            {
                source: '普法栏目剧',
                target: '广告'
            },
            {
                source: '广告',
                target: '普法栏目剧'
            },
            {
                source: '广告',
                target: '道德观察'
            },
            {
                source: '道德观察',
                target: '广告'
            },
            {
                source: '广告',
                target: '普法栏目剧'
            },
            {
                source: '普法栏目剧',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '万象'
            },
            {
                source: '万象',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '新恋爱时代'
            },
            {
                source: '新恋爱时代',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '防务精英'
            },
            {
                source: '防务精英',
                target: 'CCTV音乐厅'
            },
            {
                source: '天气预报',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '梨园春'
            },
            {
                source: '梨园春',
                target: '梨园春'
            },
            {
                source: '梨园春',
                target: '梨园春'
            },
            {
                source: '梨园春',
                target: '梨园春'
            },
            {
                source: '大魔术师',
                target: '枪王之王'
            },
            {
                source: '枪王之王',
                target: '精忠岳飞'
            },
            {
                source: '精忠岳飞',
                target: '假如生活欺骗了你'
            },
            {
                source: '假如生活欺骗了你',
                target: '假如生活欺骗了你'
            },
            {
                source: '假如生活欺骗了你',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '精忠岳飞'
            },
            {
                source: '精忠岳飞',
                target: '广告'
            },
            {
                source: '广告',
                target: '时代'
            },
            {
                source: '时代',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '广告'
            },
            {
                source: '广告',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '自然'
            },
            {
                source: '自然',
                target: '广告'
            },
            {
                source: '广告',
                target: '真相'
            },
            {
                source: '真相',
                target: '万象'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '时代'
            },
            {
                source: '时代',
                target: '真相'
            },
            {
                source: '真相',
                target: '万象'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '万象'
            },
            {
                source: '新闻联播',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '转播中央台新闻联播',
                target: '兰陵王'
            },
            {
                source: '小时代',
                target: '小时代'
            },
            {
                source: '广告',
                target: '体育新闻'
            },
            {
                source: '体育新闻',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '一路欢笑优秀曲艺作品展播'
            },
            {
                source: '一路欢笑优秀曲艺作品展播',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: 'CCTV音乐厅'
            },
            {
                source: 'CCTV音乐厅',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '非诚勿扰'
            },
            {
                source: '陕西新闻联播',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '刘三姐'
            },
            {
                source: '刘三姐',
                target: '广告'
            },
            {
                source: '广告',
                target: 'CCTV音乐厅'
            },
            {
                source: '广告',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '舞蹈世界'
            },
            {
                source: '舞蹈世界',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '广告'
            },
            {
                source: '广告',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '直播港澳台'
            },
            {
                source: '铁血兄弟',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '中国文艺'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '非诚勿扰'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '喜羊羊与灰太狼开心方程式'
            },
            {
                source: '喜羊羊与灰太狼开心方程式',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '新闻联播'
            },
            {
                source: '开学第一课',
                target: '精彩音乐汇'
            },
            {
                source: '精彩音乐汇',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '非诚勿扰'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '转播中央台新闻联播'
            },
            {
                source: '转播中央台新闻联播',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '广告'
            },
            {
                source: '广告',
                target: '走遍中国'
            },
            {
                source: '购时尚',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '开学第一课'
            },
            {
                source: '一槌定音',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '走遍中国'
            },
            {
                source: '走遍中国',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: 'CCTV音乐厅'
            },
            {
                source: 'CCTV音乐厅',
                target: '新恋爱时代'
            },
            {
                source: '新恋爱时代',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '广告'
            },
            {
                source: '旅游天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '陕西新闻联播'
            },
            {
                source: '陕西新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '转播中央台新闻联播'
            },
            {
                source: '转播中央台新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '武松'
            },
            {
                source: '武松',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '非常聚精彩'
            },
            {
                source: '非常聚精彩',
                target: '武松'
            },
            {
                source: '武松',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '德甲联赛'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '一路欢笑优秀曲艺作品展播',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '我是传奇',
                target: '我是传奇'
            },
            {
                source: '我是传奇',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '广告'
            },
            {
                source: '全运会跳水',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '我要上春晚'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '华夏微电影'
            },
            {
                source: '华夏微电影',
                target: '首映庆典'
            },
            {
                source: '新闻联播',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '走遍中国'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '河北新闻联播',
                target: '全运会射击'
            },
            {
                source: '全运会射击',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '军事报道'
            },
            {
                source: '军事报道',
                target: '万象'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '一线'
            },
            {
                source: '一线',
                target: '忏悔录'
            },
            {
                source: '忏悔录',
                target: '东方时空'
            },
            {
                source: '东方时空',
                target: '春天的十七个瞬间前传'
            },
            {
                source: '我要上春晚',
                target: '精彩音乐汇'
            },
            {
                source: '精彩音乐汇',
                target: '广告'
            },
            {
                source: '广告',
                target: '假如生活欺骗了你'
            },
            {
                source: '假如生活欺骗了你',
                target: '甄嬛传'
            },
            {
                source: '甄嬛传',
                target: '假如生活欺骗了你'
            },
            {
                source: '原来如此',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '广告'
            },
            {
                source: '广告',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '爱情公寓第三部'
            },
            {
                source: '爱情公寓第三部',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '时代'
            },
            {
                source: '时代',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '防务精英'
            },
            {
                source: '防务精英',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '小时代'
            },
            {
                source: '小时代',
                target: '小时代'
            },
            {
                source: '小时代',
                target: '广告'
            },
            {
                source: '广告',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '一线'
            },
            {
                source: '消失的子弹',
                target: '光影星播客'
            },
            {
                source: '光影星播客',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '魔术师'
            },
            {
                source: '魔术师',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '小时代'
            },
            {
                source: '小时代',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '全运会射击',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '体育新闻'
            },
            {
                source: '体育新闻',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '防务精英'
            },
            {
                source: '防务精英',
                target: '广告'
            },
            {
                source: '广告',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '防务精英'
            },
            {
                source: '防务精英',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '春天的十七个瞬间前传'
            },
            {
                source: '春天的十七个瞬间前传',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '广告'
            },
            {
                source: '购时尚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '爱情悠悠药草香'
            },
            {
                source: '广告',
                target: '健康之路'
            },
            {
                source: '健康之路',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '时代'
            },
            {
                source: '时代',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '防务精英'
            },
            {
                source: '非诚勿扰',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '熊出没'
            },
            {
                source: '铁血兄弟',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: 'ET和孩子们的假期'
            },
            {
                source: 'ET和孩子们的假期',
                target: '广告'
            },
            {
                source: '广告',
                target: 'ET和孩子们的假期'
            },
            {
                source: 'ET和孩子们的假期',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '熊出没'
            },
            {
                source: '熊出没',
                target: '熊出没'
            },
            {
                source: '熊出没',
                target: '快乐酷宝'
            },
            {
                source: '快乐酷宝',
                target: '熊出没'
            },
            {
                source: '熊出没',
                target: '熊出没'
            },
            {
                source: '江苏新时空',
                target: '山东新闻联播'
            },
            {
                source: '山东新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: 'TOPTEN系列'
            },
            {
                source: 'TOPTEN系列',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'TOPTEN系列'
            },
            {
                source: 'TOPTEN系列',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'TOPTEN系列'
            },
            {
                source: 'TOPTEN系列',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'TOPTEN系列'
            },
            {
                source: 'TOPTEN系列',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'NBA'
            },
            {
                source: 'NBA',
                target: 'TOPTEN系列'
            },
            {
                source: 'TOPTEN系列',
                target: '寰宇视野'
            },
            {
                source: '普法栏目剧',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '农广天地'
            },
            {
                source: '农广天地',
                target: '广告'
            },
            {
                source: '广告',
                target: '舞蹈世界'
            },
            {
                source: '舞蹈世界',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '熊出没'
            },
            {
                source: '熊出没',
                target: '熊出没'
            },
            {
                source: '熊出没',
                target: '熊出没'
            },
            {
                source: '熊出没',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '熊出没'
            },
            {
                source: '熊出没',
                target: '今日关注'
            },
            {
                source: '今日关注',
                target: '天气预报'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '东方时空'
            },
            {
                source: '东方时空',
                target: '火线三兄弟'
            },
            {
                source: '火线三兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '精忠岳飞'
            },
            {
                source: '精忠岳飞',
                target: '枪王之王'
            },
            {
                source: '枪王之王',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '全运会跳水'
            },
            {
                source: '大真探',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '大真探'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '面对面'
            },
            {
                source: '面对面',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '首席夜话'
            },
            {
                source: '消失的子弹',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '中国文艺'
            },
            {
                source: '节目预告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '德甲联赛'
            },
            {
                source: '寰宇视野',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '防务精英'
            },
            {
                source: '防务精英',
                target: '一线'
            },
            {
                source: '一线',
                target: '东方时空'
            },
            {
                source: '东方时空',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '广告'
            },
            {
                source: '广告',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '今日关注'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '大魔术师'
            },
            {
                source: '大魔术师',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '璀璨人生'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '全运会射击'
            },
            {
                source: '全运会射击',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '黄金100秒'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '小时代'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '梨园春'
            },
            {
                source: '梨园春',
                target: '梨园春'
            },
            {
                source: '梨园春',
                target: '广告'
            },
            {
                source: '广告',
                target: '武松'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '经济半小时'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '武松'
            },
            {
                source: '武松',
                target: '大魔术师'
            },
            {
                source: '大魔术师',
                target: '枪王之王'
            },
            {
                source: '枪王之王',
                target: '璀璨人生'
            },
            {
                source: '广告',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '广告'
            },
            {
                source: '广告',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '枪王之王'
            },
            {
                source: '枪王之王',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '中国好声音'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '广告'
            },
            {
                source: '广告',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '广告'
            },
            {
                source: '广告',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '广告'
            },
            {
                source: '广告',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '广告'
            },
            {
                source: '广告',
                target: '快乐酷宝'
            },
            {
                source: '快乐酷宝',
                target: '快乐酷宝'
            },
            {
                source: '快乐酷宝',
                target: '快乐酷宝'
            },
            {
                source: '快乐酷宝',
                target: '快乐酷宝'
            },
            {
                source: '快乐酷宝',
                target: '节目预告'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '东方时空'
            },
            {
                source: '东方时空',
                target: '新闻地图'
            },
            {
                source: '新闻地图',
                target: '广告'
            },
            {
                source: '广告',
                target: '东方时空'
            },
            {
                source: '东方时空',
                target: '广告'
            },
            {
                source: '广告',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '经济半小时'
            },
            {
                source: '经济半小时',
                target: '今日关注'
            },
            {
                source: '新闻联播',
                target: '万象'
            },
            {
                source: '万象',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '万象'
            },
            {
                source: '万象',
                target: '万象'
            },
            {
                source: '万象',
                target: '时代'
            },
            {
                source: '时代',
                target: '东方时空'
            },
            {
                source: '东方时空',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '真相'
            },
            {
                source: '真相',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '真相'
            },
            {
                source: '真相',
                target: '广告'
            },
            {
                source: '广告',
                target: '小时代'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '走遍中国'
            },
            {
                source: '走遍中国',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '防务精英'
            },
            {
                source: '防务精英',
                target: '忏悔录'
            },
            {
                source: '忏悔录',
                target: 'CCTV音乐厅'
            },
            {
                source: 'CCTV音乐厅',
                target: '心连心慰问演出'
            },
            {
                source: '心连心慰问演出',
                target: '刘三姐'
            },
            {
                source: '刘三姐',
                target: '面对面'
            },
            {
                source: '面对面',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '节目预告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '东方时空'
            },
            {
                source: '东方时空',
                target: '忏悔录'
            },
            {
                source: '忏悔录',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '探索发现'
            },
            {
                source: '探索发现',
                target: '广告'
            },
            {
                source: '广告',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '广告'
            },
            {
                source: '广告',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '广告'
            },
            {
                source: '爱情悠悠药草香',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '爱情悠悠药草香'
            },
            {
                source: '陕西新闻联播',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '非诚勿扰'
            },
            {
                source: '广告',
                target: '老梁故事汇'
            },
            {
                source: '老梁故事汇',
                target: '老梁故事汇'
            },
            {
                source: '老梁故事汇',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '武松'
            },
            {
                source: '武松',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '狙击生死线'
            },
            {
                source: '德甲联赛',
                target: '中国汉字听写大会'
            },
            {
                source: '大魔术师',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: 'CCTV音乐厅'
            },
            {
                source: 'CCTV音乐厅',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: 'CCTV音乐厅'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '天气预报'
            },
            {
                source: '节目预告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '开心麻花街'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '全运会跳水'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '广告',
                target: '梨园春'
            },
            {
                source: '梨园春',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '广告'
            },
            {
                source: '广告',
                target: '今日关注'
            },
            {
                source: '广告',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '体育世界'
            },
            {
                source: '体育世界',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '全运会跳水'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '共同关注'
            },
            {
                source: '共同关注',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '广告'
            },
            {
                source: '广告',
                target: '法制编辑部'
            },
            {
                source: '法制编辑部',
                target: '广告'
            },
            {
                source: '一路欢笑优秀曲艺作品展播',
                target: '喜羊羊与灰太狼开心日记'
            },
            {
                source: '喜羊羊与灰太狼开心日记',
                target: '蝴蝶行动'
            },
            {
                source: '蝴蝶行动',
                target: '广告'
            },
            {
                source: '广告',
                target: '家事'
            },
            {
                source: '家事',
                target: '节目预告'
            },
            {
                source: '广告',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '假如生活欺骗了你'
            },
            {
                source: '假如生活欺骗了你',
                target: '假如生活欺骗了你'
            },
            {
                source: '假如生活欺骗了你',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '小时代'
            },
            {
                source: '梨园春',
                target: '青盲'
            },
            {
                source: '青盲',
                target: '火线三兄弟'
            },
            {
                source: '火线三兄弟',
                target: '火线三兄弟'
            },
            {
                source: '火线三兄弟',
                target: '武松'
            },
            {
                source: '武松',
                target: '火线三兄弟'
            },
            {
                source: '火线三兄弟',
                target: '草根王'
            },
            {
                source: '军事报道',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '防务精英'
            },
            {
                source: '防务精英',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: 'CCTV音乐厅'
            },
            {
                source: 'CCTV音乐厅',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '寰宇视野'
            },
            {
                source: '寰宇视野',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '寰宇视野'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '中国文艺'
            },
            {
                source: '中国文艺',
                target: '今日关注'
            },
            {
                source: '梨园春',
                target: '广告'
            },
            {
                source: '广告',
                target: '梨园春'
            },
            {
                source: '梨园春',
                target: '甄嬛传'
            },
            {
                source: '甄嬛传',
                target: '妯娌的三国时代'
            },
            {
                source: '妯娌的三国时代',
                target: '妯娌的三国时代'
            },
            {
                source: '一槌定音',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '广告'
            },
            {
                source: '广告',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '广告'
            },
            {
                source: '广告',
                target: '中国新闻'
            },
            {
                source: '广告',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '精彩音乐汇'
            },
            {
                source: '精彩音乐汇',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '大魔术师'
            },
            {
                source: '大魔术师',
                target: '草根王'
            },
            {
                source: '草根王',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '真相'
            },
            {
                source: '真相',
                target: '忏悔录'
            },
            {
                source: '忏悔录',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '华夏微电影'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '焦点访谈'
            },
            {
                source: '广告',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '体育世界'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '新闻联播'
            },
            {
                source: '广告',
                target: '全运会射击'
            },
            {
                source: '全运会射击',
                target: '阳光大道'
            },
            {
                source: '阳光大道',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '首席夜话'
            },
            {
                source: '熊出没',
                target: 'ET和孩子们的假期'
            },
            {
                source: 'ET和孩子们的假期',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '军事报道'
            },
            {
                source: '军事报道',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '开学第一课'
            },
            {
                source: '广告',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '万象'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '万象'
            },
            {
                source: '万象',
                target: '万象'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '一线'
            },
            {
                source: '一线',
                target: '广告'
            },
            {
                source: '广告',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '小时代'
            },
            {
                source: '小时代',
                target: '忏悔录'
            },
            {
                source: '忏悔录',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '香瓜七兄弟'
            },
            {
                source: '新闻联播',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '时代'
            },
            {
                source: '时代',
                target: '一线'
            },
            {
                source: '一线',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '今日关注'
            },
            {
                source: '今日关注',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '广告'
            },
            {
                source: '广告',
                target: '中国新闻'
            },
            {
                source: '我要上春晚',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '开心麻花街'
            },
            {
                source: '广告',
                target: '开学第一课'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '经济半小时'
            },
            {
                source: '经济半小时',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '经济信息联播'
            },
            {
                source: '经济信息联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '经济信息联播'
            },
            {
                source: '经济信息联播',
                target: '购时尚'
            },
            {
                source: '购时尚',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '经济信息联播'
            },
            {
                source: '经济信息联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '经济信息联播'
            },
            {
                source: '经济信息联播',
                target: '刘三姐'
            },
            {
                source: '刘三姐',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '直播港澳台'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '武松'
            },
            {
                source: '武松',
                target: '火线三兄弟'
            },
            {
                source: '火线三兄弟',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '火线三兄弟'
            },
            {
                source: '火线三兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '节目预告',
                target: '家事'
            },
            {
                source: '节目预告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '广告'
            },
            {
                source: '广告',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '阳光路上'
            },
            {
                source: '阳光路上',
                target: '新恋爱时代'
            },
            {
                source: '新恋爱时代',
                target: '爱情公寓第三部'
            },
            {
                source: '原来如此',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '时代'
            },
            {
                source: '时代',
                target: '万象'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '万象'
            },
            {
                source: '万象',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '万象'
            },
            {
                source: '万象',
                target: '精彩纪录'
            },
            {
                source: '精彩纪录',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '爱情悠悠药草香'
            },
            {
                source: '爱情悠悠药草香',
                target: '真相'
            },
            {
                source: '节目名称',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '战火中的花蕾'
            },
            {
                source: '一槌定音',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '一槌定音'
            },
            {
                source: '一槌定音',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '一槌定音'
            },
            {
                source: '我要上春晚',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '走遍中国'
            },
            {
                source: '走遍中国',
                target: '大魔术师'
            },
            {
                source: '大魔术师',
                target: '广告'
            },
            {
                source: '广告',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '非诚勿扰'
            },
            {
                source: '非诚勿扰',
                target: '广告'
            },
            {
                source: '广告',
                target: '今日关注'
            },
            {
                source: '全运会射击',
                target: '全运会特别报道'
            },
            {
                source: '全运会特别报道',
                target: '广告'
            },
            {
                source: '广告',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '新闻联播'
            },
            {
                source: '阳光路上',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '海峡两岸'
            },
            {
                source: '海峡两岸',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '走遍中国'
            },
            {
                source: '走遍中国',
                target: '中国新闻'
            },
            {
                source: '中国新闻',
                target: '广告'
            },
            {
                source: '广告',
                target: '普法栏目剧'
            },
            {
                source: '广告',
                target: '原来如此'
            },
            {
                source: '原来如此',
                target: '广告'
            },
            {
                source: '广告',
                target: '健康之路'
            },
            {
                source: '健康之路',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '新闻联播'
            },
            {
                source: '新闻联播',
                target: '天气预报'
            },
            {
                source: '天气预报',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '喜羊羊与灰太狼开心方程式'
            },
            {
                source: '喜羊羊与灰太狼开心方程式',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '焦点访谈'
            },
            {
                source: '焦点访谈',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '开学第一课'
            },
            {
                source: '开学第一课',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '铁血兄弟',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '铁血兄弟'
            },
            {
                source: '铁血兄弟',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '春天的十七个瞬间前传'
            },
            {
                source: '春天的十七个瞬间前传',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '普法栏目剧'
            },
            {
                source: '普法栏目剧',
                target: '道德观察'
            },
            {
                source: '道德观察',
                target: '频道包装'
            },
            {
                source: '频道包装',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '一线'
            },
            {
                source: '一线',
                target: '广告'
            },
            {
                source: '广告',
                target: '法律讲堂'
            },
            {
                source: '法律讲堂',
                target: '忏悔录'
            },
            {
                source: '忏悔录',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '大真探'
            },
            {
                source: '大真探',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '武松',
                target: '音乐现场'
            },
            {
                source: '全运会跳水',
                target: '万象'
            },
            {
                source: '万象',
                target: '我要上春晚'
            },
            {
                source: '我要上春晚',
                target: '自然传奇'
            },
            {
                source: '自然传奇',
                target: '葫芦小金刚'
            },
            {
                source: '葫芦小金刚',
                target: '精彩音乐汇'
            },
            {
                source: '精彩音乐汇',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '广告'
            },
            {
                source: '广告',
                target: '假如生活欺骗了你'
            },
            {
                source: '假如生活欺骗了你',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '广告'
            },
            {
                source: '广告',
                target: '广告'
            },
            {
                source: '广告',
                target: '璀璨人生'
            },
            {
                source: '焦点访谈',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '普法栏目剧',
                target: '唐宫燕'
            },
            {
                source: '舞蹈世界',
                target: '节目预告'
            },
            {
                source: '节目预告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '广告'
            },
            {
                source: '广告',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '广告'
            },
            {
                source: '广告',
                target: '璀璨人生'
            },
            {
                source: '璀璨人生',
                target: '小时代'
            },
            {
                source: '小时代',
                target: '铁血兄弟'
            },
            {
                source: '万象',
                target: '广告'
            },
            {
                source: '广告',
                target: '万象'
            },
            {
                source: '万象',
                target: '全运会跳水'
            },
            {
                source: '全运会跳水',
                target: '消失的子弹'
            },
            {
                source: '消失的子弹',
                target: '广告'
            },
            {
                source: '广告',
                target: '爱情公寓第三部'
            }
        ]
        
    }]
};