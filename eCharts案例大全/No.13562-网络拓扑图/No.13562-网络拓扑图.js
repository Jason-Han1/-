var nodes = [
    {"name":"10.10.58.0/27","x":778,"y":444,"devType":0,"nodeId":2728},
    {"name":"10.10.55.136/29","x":365,"y":631,"devType":0,"nodeId":2729},
    {"name":"10.10.55.72/29","x":512,"y":712,"devType":0,"nodeId":2730},
    {"name":"10.10.55.0/29","x":505,"y":104,"devType":0,"nodeId":2731},
    {"name":"10.10.51.4/30","x":439,"y":156,"devType":0,"nodeId":2732},
    {"name":"10.10.55.96/28","x":305,"y":796,"devType":0,"nodeId":2733},
    {"name":"10.10.55.8/29","x":579,"y":65,"devType":0,"nodeId":2734},
    {"name":"10.10.55.48/29","x":435,"y":678,"devType":0,"nodeId":2735},
    {"name":"10.10.58.40/29","x":1061,"y":289,"devType":0,"nodeId":2736},
    {"name":"10.10.55.56/29","x":305,"y":573,"devType":0,"nodeId":2737},
    {"name":"ShengHangA-Uplink-2","x":941,"y":437,"devType":1,"nodeId":2738},
    {"name":"ShengHangB-Uplink-1","x":636,"y":306,"devType":1,"nodeId":2739},
    {"name":"ShengHangB-Downlink-2","x":534,"y":456,"devType":1,"nodeId":2740},
    {"name":"ShengHangA_outband_sw-test1","x":916,"y":357,"devType":1,"nodeId":2741},
    {"name":"ShengHangB-Access-SW-2","x":389,"y":796,"devType":1,"nodeId":2742},
    {"name":"10.10.51.8/30","x":1090,"y":368,"devType":0,"nodeId":2744},
    {"name":"10.10.58.32/29","x":1105,"y":450,"devType":0,"nodeId":2745}
];

var lines = [
    {"dstNodeId":2740,"srcNodeId":2730},
    {"dstNodeId":2739,"srcNodeId":2732},
    {"dstNodeId":2742,"srcNodeId":2733},
    {"dstNodeId":2741,"srcNodeId":2728},
    {"dstNodeId":2744,"srcNodeId":2738},
    {"dstNodeId":2745,"srcNodeId":2738},
    {"dstNodeId":2740,"srcNodeId":2735},
    {"dstNodeId":2740,"srcNodeId":2729},
    {"dstNodeId":2739,"srcNodeId":2731},
    {"dstNodeId":2738,"srcNodeId":2728},
    {"dstNodeId":2740,"srcNodeId":2737},
    {"dstNodeId":2741,"srcNodeId":2736},
    {"dstNodeId":2739,"srcNodeId":2734}
];

var xPoints = [];
var yPoints = [];


var nodesCoord = {};
nodes.forEach(node => {
    nodesCoord[node.nodeId] = [node.x, node.y];
    xPoints.push(node.x);
    yPoints.push(node.y);
});

// 组合链路
var lineData = [];
lines.forEach(line => {
    lineData.push({
        coords: [
            nodesCoord[line.srcNodeId], // 起点
            nodesCoord[line.dstNodeId] // 终点
        ],
    })
});


option = {
    title: {
        text: '网络拓扑图'
    },


    xAxis: {
        min: Math.min(...xPoints) - 50,
        max: Math.max(...xPoints) + 50,
        //show: false,
    },
    yAxis: {
        min: Math.min(...yPoints) - 50,
        max: Math.max(...yPoints) + 50,
        //show: false,
    },

    series: [{
        type: 'lines',
        name: '网络拓扑图',
        coordinateSystem: 'cartesian2d',

        // 线特效的配置
        effect: {
            show: true,
            period: 2, //特效动画的时间，单位为 s。
            symbol: 'circle',
            trailLength: 0.5 // 特效尾迹的长度。0~1数值越大尾迹越长
        },

        lineStyle: {
            normal: {
                color: '#F00',
                width: 1,
                curveness: 0.2
            }
        },

        // 数据
        data: lineData,
    }]
};