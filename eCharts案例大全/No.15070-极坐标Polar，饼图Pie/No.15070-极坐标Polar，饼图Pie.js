//本例基于极坐标和custom，代码不太规范。请谅解！

var innerPieRadius = 80;
var polarRadius = innerPieRadius * 1.2;
var outerPieRadius = innerPieRadius * 3;

var names = [];
var data = [];
for(var i = 0; i < 28; i++){
    var name = "name"+i;
    var value = Math.round(Math.random() * 30);
    names.push("name"+i);
    var group = 0;
    var showLine = 0;
    if(i > 13){
       group = 1;
    }
    if(Math.round(Math.random() * 20) % 2 == 0){
        showLine = 1;
    }
    data.push([1,name,value,group,showLine]);
}


function renderItem(params, api) {
    var centerPoint = params.coordSys;
    var values = [api.value(0), api.value(1)];
    var coord = api.coord(values);
    var size = api.size([1, 1], values);
    var cx = coord[0];
    var cy = coord[1];
    var r = size[0] / 20;
    var colors = ["#f7ab3a","#2cade9"];

    //compute circle point
    var nr = 40;
    cx = Math.cos(coord[3]) * nr + cx;
    cy = -Math.sin(coord[3]) * nr + cy;

    //compute text point
    tx = Math.cos(coord[3]) * nr / 3 + cx;
    ty = -Math.sin(coord[3]) * nr / 3 + cy;  

    //compute control point
    var angle = coord[3] /Math.PI * 180;
    var nAngle = angle - nr;
    var n = nAngle / 180 * Math.PI;
    var cpx = Math.cos(n) * nr * -1.5 + coord[0];
    var cpy = -Math.sin(n) * nr * -1.5 + coord[1];

    var color = colors[data[params.dataIndex][3]];
    var serie =  {
            type: 'group',
            children: [
                    {
                        type: 'circle',
                        shape: {
                            cx: cx,
                            cy: cy,
                            r: r
                        },
                        style: {
                            fill: color
                        },
                        zlevel:5,
                        z:5
                    },
                    {
                        type: 'text',
                        position: [tx, ty],
                        rotation: coord[3],   
                        style: {
                            text: data[params.dataIndex][1],
                            textVerticalAlign:'middle',
                            fill: '#939494'
                        },
                        zlevel:5,
                        z:5
                    },
            ]
        }
    if(data[params.dataIndex][4] == 1){
        var line = {
                        type: 'bezierCurve',
                        shape: {
                            x1: centerPoint.cx,
                            y1: centerPoint.cy,
                            x2: cx,
                            y2: cy,
                            cpx1: cpx,
                            cpy1: cpy
                        },
                        style: {
                            fill:'rgba(0,0,0,0)',
                            stroke:color,
                            lineWidth:1.5
                        },
                        zlevel:3,
                        z:3
            };
         serie.children.unshift(line);  
    }

    return serie;
}


var option = {
        color:["#f7ab3a","#2cade9"],
        tooltip:{
            formatter:function(params){
                return "Pie <br>" + params.data[1] + ": " + params.data[2];
            }
        },
        angleAxis: {
            type: 'category',
            data: names,
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd',
                    type: 'dashed'
                }
            },
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            }
        },
        radiusAxis: {
            type: 'value',
            data: [1],
            z: 100,
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            }
        },
        polar: {
            radius:polarRadius
        },
        series: [
            {
                name:'outerPie',
                type:'pie',
                radius: [outerPieRadius, outerPieRadius + 30],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                    }
                },
                data:[1,1],
                silent:true,
                zlevel:2,
                animation:false
            },
            {
                name:'innerPie',
                type:'pie',
                radius: [0, innerPieRadius],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                    }
                },
                data:[1],
                silent:true,
                zlevel:3,
                animation:false,
                itemStyle:{
                    normal:{
                        color:'#dfe3e5'
                    }
                }
            },
            {
                name: 'circle-line-text',
                type: 'custom',
                coordinateSystem: 'polar',
                itemStyle: {
                    normal: {
                        color: '#d14a61'
                    }
                },
                renderItem: renderItem,
                data: data,
                zlevel:4
            }
        ]
    };
