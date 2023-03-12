let _token = null;
let _taskId = null;
let _index1 = 20;
let _index2 = 40;
let _index3 = 60;
let _links = [];
let _hlinks = [];

let _index4 = 15;
let _index5 = 35;
let _index6 = 55;

var ldata = [{}];

var tips = 0;
var m = 0;
var mm = 1;
let startAngle = 70; // 初始旋转角度
let dolitData = generateData(100, 25, 20, 'rgb(126,190,255)');
let threeData = generateData(6, 40, 10, '#2dc0c9');
let dataArr = [];



start();

function start() {
    


     option = getOption();
         
     setInterval(function fun(){
        // console.log(option)
        console.log(11111)
         _links = new Array();
        _(0);
     }, 2000);
}

function getOption() {
   let opt = {
        grid: {
            // top: 100,
            // bottom: 100,
            // left: 100,
            // right: 100,
             top: '120',
                left: '215',
                width: '300',
                height: '300',
        },
        yAxis: {
            show: false,
            type: 'value',
            max: 1,
            min: -1,
        },
        xAxis: {
            show: false,
            type: 'value',
            max: 1,
            min: -1,
        },
        animation: true,
        series: [
            {
                name: '节点',
                type: 'graph',
                roam: true,
                draggable: true,
                itemStyle: {
                    normal: {
                        color: '#694d9f',
                    },
                },
                lineStyle: {
                    normal: {
                        color: '#694d9f',
                        curveness: 0.1,
                        opacity: 0.2,
                        width: 3,
                    },
                },
                effect: {
                    show: true,
                    period: 4,
                    trailLength: 0.02,
                    symbol: 'circle',
                    symbolSize: 15,
                    color: '#fff',
                },

                symbol: 'circle',
                symbolSize: 5,
                top: '120',
                left: '215',
                width: '300',
                height: '300',
                data: roundDatas1(1),
                //links: linkDatas(12)
            },
            {
                name: 10000,
                type: 'graph',
                roam: false,
                draggable: false,
                itemStyle: {
                    normal: {
                        color: '#694d9f',
                    },
                },
                lineStyle: {
                    normal: {
                        color: '#694d9f',
                        curveness: 1,
                        opacity: 0.2,
                    },
                },
                symbol: 'circle',
                symbolSize: 0,
                top: '400',
                left: '400',
                width: '10',
                height: '10',
                // symbol: 'image://images/wb1.png',
                data: roundDatasroot(1),
            },
            {
                animation: false,
                animationThreshold: 100,
                animationDurationUpdate: function (idx) {
                    // 越往后的数据延迟越大
                    return idx * 1000;
                },

                name: 'loading',
                type: 'pie',
                radius: ['48%', '52%'],
                center: ['50%', '50%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        show: false,
                    },
                },
                data: [],
            },
            {
                type: 'pie',
                name: '旋转圆',
                zlevel: 20,
                silent: true,
                radius: ['50%', '48%'],
                hoverAnimation: false,
                startAngle: startAngle,
                data: threeData,
                label: {
                    normal: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                    },
                },
            },
            {
                name: '线图',
                type: 'lines',
                hoverAnimation: false,
                silent: false,
                cursor: 'default',
                coordinateSystem: 'cartesian2d',
                polyline: false, // 多线段
                z: 1,
                lineStyle: {
                    width: 1,
                    // type: 'dashed',
                    curveness: 0.2,
                },
                effect: {
                    show: true,
                    period: 8, //箭头指向速度，值越小速度越快
                    // trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
                    // symbol: 'arrow', //箭头图标
                    symbolSize: 10,
                    trailLength: 0.3,
                    smooth: true,
                },
                emphasis: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                data: dataArr,
            },
            {
                name: '环线线图',
                type: 'lines',
                hoverAnimation: false,
                silent: false,
                cursor: 'default',
                coordinateSystem: 'cartesian2d',
                polyline: false, // 多线段
                z: 1,
                symbol: ['none', 'arrow'],
                label: {
                    show: true,
                    position: 'middle',
                    fontSize: 20,
                },
                lineStyle: {
                    width: 1,
                    // type: 'dashed',
                    curveness: 0.3,
                },
                effect: {
                    show: true,
                    period: 8, //箭头指向速度，值越小速度越快
                    // trailLength: 0.5, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 10,
                    trailLength: 0.4,
                    smooth: true,
                },
                emphasis: {
                    lineStyle: {
                        type: 'dashed',
                    },
                },
                data: dataArr,
            },
        ],
    };
    return opt;
}

function _(index) {
    var dt = new Date();
    let _links = new Array();
    let _hlinks = new Array();

    var s1,
        s2,
        s3 = 0;
    s1 = _index1 + 1;
    _index1 = s1;
    s2 = _index2 + 1;
    _index2 = s2;
    s3 = _index3 + 1;
    _index3 = s3;

    var xs1 = Math.cos((6 * s1 * Math.PI) / 180);
    var xs2 = Math.cos((6 * s2 * Math.PI) / 180);
    var xs3 = Math.cos((6 * s3 * Math.PI) / 180);

    var ys1 = Math.sin((6 * s1 * Math.PI) / 180);
    var ys2 = Math.sin((6 * s2 * Math.PI) / 180);
    var ys3 = Math.sin((6 * s3 * Math.PI) / 180);

    option.series[index].data = new Array();

    for (var j = 0; j < 360; j++) {
        var x1 = Math.cos((6 * j * Math.PI) / 180);
        var y1 = Math.sin((6 * j * Math.PI) / 180);
        option.series[index].data[j] = {
            name: j,
            symbolSize: 0,
            x: y1,
            y: -x1,
        };
    }
    for (var j = 59; j > 360; j--) {
        var x1 = Math.cos((6 * j * Math.PI) / 180);
        var y1 = Math.sin((6 * j * Math.PI) / 180);
        option.series[index].data[j] = {
            name: j,
            symbolSize: 0,
            x: y1,
            y: -x1,
        };
    }

    option.series[index].data[1] = {
        name: 1000,
        symbolSize: 10,
        x: 0.04,
        y: 0.04,
    };

    option.series[index].data[s1] = {
        // symbol: 'image://images/wb3.png',
        symbolSize: 50,
        x: ys1,
        y: -xs1,
    };

    option.series[index].data[s2] = {
        // symbol: 'image://images/wb3.png',
        symbolSize: 50,
        x: ys2,
        y: -xs2,
    };

    option.series[index].data[s3] = {
        // symbol: 'image://images/wb3.png',
        symbolSize: 50,
        x: ys3,
        y: -xs3,
    };

    let ldatas = new Array();
    ldatas.push(
        {
            source: s1,
            target: 1,
        },
        {
            source: s2,
            target: 1,
        },
        {
            source: s3,
            target: 1,
        }
    );

    s1 = _index4 + 1;
    _index4 = s1;
    s2 = _index5 + 1;
    _index5 = s2;
    s3 = _index6 + 1;
    _index6 = s3;

    xs1 = Math.cos((6 * s1 * Math.PI) / 180);
    xs2 = Math.cos((6 * s2 * Math.PI) / 180);
    xs3 = Math.cos((6 * s3 * Math.PI) / 180);

    ys1 = Math.sin((6 * s1 * Math.PI) / 180);
    ys2 = Math.sin((6 * s2 * Math.PI) / 180);
    ys3 = Math.sin((6 * s3 * Math.PI) / 180);

    _hlinks.push(getLink2(-xs1, ys1, -xs2, ys2, '深入溯源'));
    _hlinks.push(getLink2(-xs2, ys2, -xs3, ys3, '关联'));
    _hlinks.push(getLink2(-xs3, ys3, -xs1, ys1, '提示服务质量'));

    let ls = getLink(0, 0, -xs1, ys1);
    _links.push(ls);

    ls = getLink(0, 0, -xs2, ys2);
    _links.push(ls);

    ls = getLink(0, 0, -xs3, ys3);
    _links.push(ls);

    option.series[4].data = _links;
    option.series[5].data = _hlinks;

    // tlog('option.series[index].data:' + JSON.stringify(option.series[index].data[s1]))

    if (tips == 100) {
        tips = 0;
        m = 0;
    } else if (tips <= 10) {
        ++tips;
        ++m;
    } else {
        tips = tips + 1.85;
    }
    // option.series[2].data = loading();

    //旋转圆
    startAngle = startAngle - 6;
    option.series[3].startAngle = startAngle;
    option.series[3].data = generateData(6, 20, 10, '#2dc0c9');

    myChart.setOption(option, true);
}

function getLink(x1, y1, x2, y2) {
    let coords = new Array();
    coords.push([x1, y1]);
    coords.push([x2, y2]);
    return coords;
}

/**
 * 增加名称
 * @param {Object} x1
 * @param {Object} y1
 * @param {Object} x2
 * @param {Object} y2
 * @param {Object} name
 */
function getLink2(x1, y1, x2, y2, name) {
    let coords = new Array();
    coords.push([x1, y1]);
    coords.push([x2, y2]);
    let info = {};
    info.coords = coords;
    info.name = name;
    return info;
}

function loading() {
    return [
        {
            value: tips,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        },
        {
            value: m,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 4,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(255,255,255,0.7)', // 0% 处的颜色
                            },
                            {
                                offset: 0.3,
                                color: 'rgba(255,255,255,1)', // 0% 处的颜色
                            },
                            {
                                offset: 0.6,
                                color: 'rgba(255,255,255,1)', // 0% 处的颜色
                            },
                            {
                                offset: 0.8,
                                color: 'rgba(255,255,255,1)', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(255,255,255,1)', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false,
                    },
                    color: 'rgba(255,255,255,0)',
                    shadowBlur: 30,
                    shadowColor: 'rgba(255,255,255,1)',
                },
            },
        },
        {
            value: 100 - tips,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                },
            },
        },
    ];
}

function roundDatas1(num) {
    var datas = [];
    for (var i = 0; i < num; i++) {
        var x = Math.cos((6 * i * Math.PI) / 180);
        var y = Math.sin((6 * i * Math.PI) / 180);
        datas.push({
            name: i,
            x: y,
            y: -x,
        });
    }
    return datas;
}

function roundDatasroot(num) {
    var datas = [];
    for (var i = 0; i < num; i++) {
        var x = Math.cos((6 * i * Math.PI) / 180);
        var y = Math.sin((6 * i * Math.PI) / 180);
        datas.push({
            name: 'rootnode',
            x: y,
            y: -x,
        });
    }
    return datas;
}
function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                    },
                },
            });
        }
    }
    return dataArr;
}
