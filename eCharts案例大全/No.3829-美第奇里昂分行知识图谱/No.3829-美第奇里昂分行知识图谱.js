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
                name: '教会人员'
            },
            {
                name: '世俗贵族'
            },
            {
                name: '公务人员'
            },
            {
                name: '其他人员'
            },
            {
                name: '银行'
            }
        ]
    },
    series: [{
        type: 'graph', // 关系图
        name: '间客人物:', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
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
                position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
                textStyle: { // 标签的字体样式
                    color: '#d3d7d4', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
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
                name: '教会人员'
            },
            {
                name: '世俗贵族'
            },
            {
                name: '公务人员'
            },
            {
                name: '其他人员'
            },
            {
                name: '银行'
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
                category: '教会人员',
                name: 'Geoffroy de Pompadour, Bishop of Angouléme',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Urbain Bonivard, Abbot of Pinerolo in Piedmont',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '银行',
                name: 'The Lyons Branch',
                value: 2000,
                symbolSize: 200
            },
            {
                category: '教会人员',
                name: 'Charles of Bourbon, Archbishop-elect of Lyons',
                value: 250,
                symbolSize: 25
            },
            {
                category: '教会人员',
                name: 'Jacques de Comborne, Bishop of Clermont-Ferrand',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Raynaud de Chauvigny de Blot, 34th Abbot of La Chaise-Dieu in Aucergne',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Toussaint de Villeneuve, Bishop of Cavaillon',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Jean de Mareuil, Bishop of Uzés',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Jean de Cambray, brother of the Archbishop of Bourges, Guillaume de Cambray',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Antoine Jacquet, servant of the priory of Saint-Victor',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Jean André, canon of Lausanne',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '世俗贵族',
                name: 'Amadeus IX,Duke of Savoy',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'JohnII, Duke of Bourbon',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'William III, Marquis of Montferrat',
                value: 250,
                symbolSize: 25
            },
            {
                category: '世俗贵族',
                name: 'Galeazzo Maria, Duke of Milan',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Yolande of Valois',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Louis XI of France',
                value: 1000,
                symbolSize: 100
            },
            {
                category: '世俗贵族',
                name: 'John Jacob, Marquis of Montferrat',
                value: 250,
                symbolSize: 25
            },
            {
                category: '世俗贵族',
                name: 'Fredrick III, Holy Roman Emperor',
                value: 1000,
                symbolSize: 100
            },
            {
                category: '世俗贵族',
                name: 'CharlesI of Bourbon',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Maximilian I',
                value: 1000,
                symbolSize: 100
            },
            {
                category: '世俗贵族',
                name: 'Ludovico Sforza',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Francesco I Sforza',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'John II Count of Vendome',
                value: 250,
                symbolSize: 25
            },
            {
                category: '世俗贵族',
                name: 'Charles VIII of France',
                value: 1000,
                symbolSize: 100
            },
            {
                category: '世俗贵族',
                name: 'Philip the Good, Duke of Burgundy',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'James I of Scotland',
                value: 1000,
                symbolSize: 100
            },
            {
                category: '世俗贵族',
                name: 'Charles I of Savoy',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Giovanni Benci',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '世俗贵族',
                name: 'Ridolfo Perruzi',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '世俗贵族',
                name: 'Philibert I Duke of Savoy',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Niccolo Machiavelli',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '世俗贵族',
                name: 'Cosimo de Medici',
                value: 1000,
                symbolSize: 100
            },
            {
                category: '教会人员',
                name: 'Roberto Folchi, Bishop of Fiesole',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '教会人员',
                name: 'Guillaume de Combray, Archbishop of Bourges',
                value: 250,
                symbolSize: 25
            },
            {
                category: '教会人员',
                name: 'Pope Sixtus IV',
                value: 1000,
                symbolSize: 100
            },
            {
                category: '教会人员',
                name: 'Archbishop Jean Byle',
                value: 250,
                symbolSize: 25
            },
            {
                category: '教会人员',
                name: 'Archbishop of Embrun',
                value: 250,
                symbolSize: 25
            },
               {
                category: '教会人员',
                name: 'Charles II of Bourbon',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'The Duchess of Bourbon',
                value: 500,
                symbolSize: 50
            },
               {
                category: '世俗贵族',
                name: 'Luigi, eldest son of the Marquis of Saluzzo',
                value: 250,
                symbolSize: 25
            },
            {
                category: '世俗贵族',
                name: 'Jacques d’Armagnac, Duke of Nemours',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Georges, lord of Hauterives (Dauphiné)',
                value: 500,
                symbolSize: 50
            },
            {
                category: '世俗贵族',
                name: 'Boniface of Challans, gentleman of Savoy',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '世俗贵族',
                name: 'Frangoise de Rossillon, lady of Thorens',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '公务人员',
                name: 'Galeotto Corbinelli, broker in Florence',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '公务人员',
                name: 'Claude Viennois, notary and clerk of the chdtelain of Geneva',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '公务人员',
                name: 'Francesco Sassetti',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '其他人员',
                name: 'Francesco di Berto (Roberto) Peruzzi',
                value: 250,
                symbolSize: 25
            },
            {
                category: '其他人员',
                name: 'Giuliano del Zaccheria',
                value: 250,
                symbolSize: 25
            },
            {
                category: '其他人员',
                name: 'Simone di Giovanni Folchi',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '其他人员',
                name: 'Guillaume Majeur, physician in Roanne',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '其他人员',
                name: 'Leonardo da Vinci',
                value: 125,
                symbolSize: 12.5
            },
            {
                category: '其他人员',
                name: 'Bartolomeo di Jacopo Del Zaccheria, Florentine magistracy',
                value: 250,
                symbolSize: 25
            },
            {
                category: '其他人员',
                name: 'Claude Bergerolles, barber-surgeon in Lyons',
                value: 125,
                symbolSize: 12.5
            },
        ],
        links: [ // 设置连线edges的数据
            {
                source: 'The Lyons Branch',
                target: 'Geoffroy de Pompadour, Bishop of Angouléme',
                value: 437
            },
            {
                source: 'The Lyons Branch',
                target: 'Urbain Bonivard, Abbot of Pinerolo in Piedmont',
                value: 29
            },
            {
                source: 'The Lyons Branch',
                target: 'Charles of Bourbon, Archbishop-elect of Lyons',
                value: 329
            },
            {
                source: 'The Lyons Branch',
                target: 'Jacques de Comborne, Bishop of Clermont-Ferrand',
                value: 24
            },
            {
                source: 'The Lyons Branch',
                target: 'Raynaud de Chauvigny de Blot, 34th Abbot of La Chaise-Dieu in Aucergne',
                value: 102
            },
            {
                source: 'The Lyons Branch',
                target: 'Toussaint de Villeneuve, Bishop of Cavaillon',
                value: 153
            },
            {
                source: 'The Lyons Branch',
                target: 'Jean de Mareuil, Bishop of Uzés',
                value: 18
            },
            {
                source: 'The Lyons Branch',
                target: 'Jean de Cambray, brother of the Archbishop of Bourges, Guillaume de Cambray',
                value: 405
            },
            {
                source: 'The Lyons Branch',
                target: 'Antoine Jacquet, servant of the priory of Saint-Victor',
                value: 11
            },
            {
                source: 'The Lyons Branch',
                target: 'Jean André, canon of Lausanne',
                value: 37
            },
            {
                source: 'The Lyons Branch',
                target: 'Amadeus IX,Duke of Savoy',
                value: 81
            },
            {
                source: 'The Lyons Branch',
                target: 'JohnII, Duke of Bourbon',
                value: 25
            },
            {
                source: 'The Lyons Branch',
                target: 'William III, Marquis of Montferrat',
                value: 267
            },
            {
                source: 'The Lyons Branch',
                target: 'Galeazzo Maria, Duke of Milan',
                value: 40
            },
            {
                source: 'The Lyons Branch',
                target: 'The Duchess of Bourbon',
                value: 201
            },
            {
                source: 'The Lyons Branch',
                target: 'Louis XI of France',
                value: 201
            },
            {
                source: 'The Lyons Branch',
                target: 'Luigi, eldest son of the Marquis of Saluzzo',
                value: 73
            },
            {
                source: 'The Lyons Branch',
                target: 'Jacques d’Armagnac, Duke of Nemours',
                value: 68
            },
            {
                source: 'The Lyons Branch',
                target: 'Georges, lord of Hauterives (Dauphiné)',
                value: 8
            },
            {
                source: 'The Lyons Branch',
                target: 'Boniface of Challans, gentleman of Savoy',
                value: 22
            },
            {
                source: 'The Lyons Branch',
                target: 'Frangoise de Rossillon, lady of Thorens',
                value: 149
            },
            {
                source: 'The Lyons Branch',
                target: 'Galeotto Corbinelli, broker in Florence',
                value: 72
            },
            {
                source: 'The Lyons Branch',
                target: 'Claude Viennois, notary and clerk of the chdtelain of Geneva',
                value: 225
            },
            {
                source: 'The Lyons Branch',
                target: 'Francesco di Berto (Roberto) Peruzzi',
                value: 33
            },
            {
                source: 'The Lyons Branch',
                target: 'Giuliano del Zaccheria',
                value: 188
            },
            {
                source: 'The Lyons Branch',
                target: 'Simone di Giovanni Folchi',
                value: 11
            },
            {
                source: 'The Lyons Branch',
                target: 'Guillaume Majeur, physician in Roanne',
                value: 10
            },
            {
                source: 'The Lyons Branch',
                target: 'Claude Bergerolles, barber-surgeon in Lyons',
                value: 37
            },
            {
                source: 'Geoffroy de Pompadour, Bishop of Angouléme',
                target: 'Pope Sixtus IV',
                value: 2
            },
            {
                source: 'Urbain Bonivard, Abbot of Pinerolo in Piedmont',
                target: 'Pope Sixtus IV',
                value: 3
            },
            {
                source: 'Charles of Bourbon, Archbishop-elect of Lyons',
                target: 'CharlesI of Bourbon',
                value: 10
            },
            {
                source: 'Charles of Bourbon, Archbishop-elect of Lyons',
                target: 'Louis XI of France',
                value: 8
            },
            {
                source: 'Charles of Bourbon, Archbishop-elect of Lyons',
                target: 'Pope Sixtus IV',
                value: 6
            },
            {
                source: 'Jacques de Comborne, Bishop of Clermont-Ferrand',
                target: 'Pope Sixtus IV',
                value: 5
            },
            {
                source: 'Raynaud de Chauvigny de Blot, 34th Abbot of La Chaise-Dieu in Aucergne',
                target: 'Pope Sixtus IV',
                value: 2
            },
            {
                source: 'Toussaint de Villeneuve, Bishop of Cavaillon',
                target: 'Archbishop Jean Byle',
                value: 4
            },
            {
                source: 'Toussaint de Villeneuve, Bishop of Cavaillon',
                target: 'Archbishop of Embrun',
                value: 4
            },
            {
                source: 'Jean de Mareuil, Bishop of Uzés',
                target: 'Pope Sixtus IV',
                value: 2
            },
            {
                source: 'Jean de Cambray, brother of the Archbishop of Bourges, Guillaume de Cambray',
                target: 'Guillaume de Combray, Archbishop of Bourges',
                value: 10
            },
            {
                source: 'Antoine Jacquet, servant of the priory of Saint-Victor',
                target: 'Pope Sixtus IV',
                value: 1
            },
            {
                source: 'Amadeus IX,Duke of Savoy',
                target: 'Yolande of Valois',
                value: 10
            },
            {
                source: 'Amadeus IX,Duke of Savoy',
                target: 'Louis XI of France',
                value: 9
            },
            {
                source: 'JohnII, Duke of Bourbon',
                target: 'Charles II of Bourbon',
                value: 9
            },
            {
                source: 'JohnII, Duke of Bourbon',
                target: 'Louis XI of France',
                value: 7
            },
            {
                source: 'William III, Marquis of Montferrat',
                target: 'John Jacob, Marquis of Montferrat',
                value: 10
            },
            {
                source: 'William III, Marquis of Montferrat',
                target: 'Fredrick III, Holy Roman Emperor',
                value: 5
            },
            {
                source: 'William III, Marquis of Montferrat',
                target: 'Galeazzo Maria Sforza',
                value: 5
            },
            {
                source: 'Galeazzo Maria, Duke of Milan',
                target: 'Francesco I Sforza',
                value: 10
            },
            {
                source: 'Galeazzo Maria, Duke of Milan',
                target: 'Ludovico Sforza',
                value: 10
            },
            {
                source: 'Galeazzo Maria, Duke of Milan',
                target: 'Maximilian I',
                value: 8
            },
            {
                source: 'Galeazzo Maria, Duke of Milan',
                target: 'Leonardo da Vinci',
                value: 5
            },
            {
                source: 'The Duchess of Bourbon',
                target: 'John II Count of Vendome',
                value: 10
            },
            {
                source: 'The Duchess of Bourbon',
                target: 'Charles VIII of France',
                value: 3
            },
            {
                source: 'Louis XI of France',
                target: 'James I of Scotland',
                value: 7
            },
            {
                source: 'Louis XI of France',
                target: 'Fredrick III, Holy Roman Emperor',
                value: 6
            },
            {
                source: 'Louis XI of France',
                target: 'Philip the Good, Duke of Burgundy',
                value: 6
            },
            {
                source: 'Luigi, eldest son of the Marquis of Saluzzo',
                target: 'William VIII, Marquess of Montferrat',
                value: 8
            },
            {
                source: 'Luigi, eldest son of the Marquis of Saluzzo',
                target: 'Charles VIII of France',
                value: 7
            },
            {
                source: 'Luigi, eldest son of the Marquis of Saluzzo',
                target: 'Charles I of Savoy',
                value: 7
            },
            {
                source: 'Jacques d’Armagnac, Duke of Nemours',
                target: 'Louis XI of France',
                value: 7
            },
            {
                source: 'Georges, lord of Hauterives (Dauphiné)',
                target: 'Louis XI of France',
                value: 5
            },
            {
                source: 'Boniface of Challans, gentleman of Savoy',
                target: 'Philibert I Duke of Savoy',
                value: 1
            },
            {
                source: 'Frangoise de Rossillon, lady of Thorens',
                target: 'Francesco Sassetti',
                value: 1
            },
            {
                source: 'Galeotto Corbinelli, broker in Florence',
                target: 'Cosimo de Medici',
                value: 1
            },
            {
                source: 'Claude Viennois, notary and clerk of the chdtelain of Geneva',
                target: 'Jean-Louis de Savoie, Bishop of Geneva',
                value: 1
            },
            {
                source: 'Francesco di Berto (Roberto) Peruzzi',
                target: 'Ridolfo Perruzi',
                value: 8
            },
            {
                source: 'Francesco di Berto (Roberto) Peruzzi',
                target: 'Giovanni Benci',
                value: 5
            },
            {
                source: 'Giuliano del Zaccheria',
                target: 'Bartolomeo di Jacopo Del Zaccheria, Florentine magistracy',
                value: 8
            },
            {
                source: 'Giuliano del Zaccheria',
                target: 'Pope Leo X',
                value: 5
            },
            {
                source: 'Simone di Giovanni Folchi',
                target: 'Francesco Sasseti',
                value: 3
            },
            {
                source: 'Simone di Giovanni Folchi',
                target: 'Roberto Folchi, Bishop of Fiesole',
                value: 9
            },
            {
                source: 'Simone di Giovanni Folchi',
                target: 'Niccolo Machiavelli',
                value: 3
            },
            {
                source: 'Simone di Giovanni Folchi',
                target: 'Leonardo da Vinci',
                value: 2
            },
            ]
    }]
}

