var size = 100;
var yy = 200;
var yy1 = 250;
option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),
    title: {
        subtext: "长沙-浏阳市-羊角湾小区",
        text: "告警统计",
        top: "top",
        left: "left"
    },
    tooltip: {},
    legend: [{
        /*formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },*/
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        top: 60,
        //left:60,
        //width:"90%",
        data: ['节目源', '省中心CDN', 'BRAS', 'BRAS下联口', 'OLT', 'PON口',]
    }],
    toolbox: {
        show: true,
        feature: {
            
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '告警统计',
        type: 'graph',
        layout: 'force',
force: {
//initLayout: ...,
repulsion: 500,
gravity: 0.1,
edgeLength: 100,
layoutAnimation: true,
},


        data: [{
            "name": "节目源",
            x: 100,
            y: yy,
            "symbolSize": size,
            "category": "节目源",
            "draggable": "true",
            "value": 100

        }, {
            "name": "省中心CDN",
            "value": 200,
            x: 200,
            y: yy1,
            "symbolSize": size,
            "category": "省中心CDN",
            "draggable": "true"
        }, {
            x: 300,
            y: yy,
            "name": "BRAS",
            "symbolSize": size,
            "category": "BRAS",
            "draggable": "true",
            "value": 1
        },{
            x: 300,
            y: 300,
            "name": "BRAS1",
            "symbolSize": 30,
            "category": "BRAS",
            "draggable": "true",
            "value": 1
        },{
            x: 300,
            y: 300,
            "name": "BRAS2",
            "symbolSize": 30,
            "category": "BRAS",
            "draggable": "true",
            "value": 1
        }, {
            x: 400,
            y: yy1,
            "name": "BRAS下联口",
            "symbolSize": size,
            "category": "BRAS下联口",
            "draggable": "true",
            "value": 1
        }, {
            x: 500,
            y: yy,
            "name": "OLT",
            "symbolSize": size,
            "category": "OLT",
            "draggable": "true",
            "value": 1
        }, {
            x: 600,
            y: yy1,
            "name": "PON口",
            "symbolSize": size,
            "category": "PON口",
            "draggable": "true",
            "value": 1
        }, ],
        links: [{
            "source": "节目源",
            "target": "省中心CDN"
        }, {
            "source": "省中心CDN",
            "target": "BRAS"
        }, {
            "source": "BRAS",
            "target": "BRAS下联口"
        }, {
            "source": "BRAS",
            "target": "BRAS1"
        }, {
            "source": "BRAS",
            "target": "BRAS2"
        }, {
            "source": "BRAS下联口",
            "target": "OLT"
        }, {
            "source": "OLT",
            "target": "PON口"
        }, ],
        categories: [{
            'name': '节目源'
        }, {
            'name': 'BRAS'
        }, {
            'name': 'BRAS下联口'
        }, {
            'name': 'OLT'
        }, {
            'name': 'PON口'
        }, {
            'name': '省中心CDN'
        }],
        //focusNodeAdjacency: true,
        roam: false,
        label: {
            normal: {

                show: true,
                position: 'inside',
                formatter: '{b}\n告警：{c}',
                fontSize: 16,
                fontStyle: '600',

            }
        },
        /*
        markPoint: {
            symbol: 'rect', //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 5,
            show:false,
            //symbolRotate: ...,
            symbolOffset: [0, 0],
            silent: false,
            label: {
                normal: {

                    show: true,
                    position: 'right',
                    formatter: '{b}：{c}'

                }
            },
            //itemStyle: {...},
            data: [{
                name: '告警',
                value: 100,
                x: 100,
                y: 200
            }],
        },*/
        lineStyle: {
            normal: {
                width:6,
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};