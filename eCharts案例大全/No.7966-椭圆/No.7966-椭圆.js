

var zr = myChart.getZr();
var w = zr.getWidth() * 0.7;//椭圆长
var h = zr.getHeight() * 0.5;//椭圆宽
var x = zr.getWidth() * 0.15;//起点x坐标
var y = zr.getHeight()/4;//起点y坐标

var kappa = 0.5522848; 
var ox =(w / 2)* kappa; //控制点偏移水平
var oy =(h / 2)* kappa;//控制点偏移垂直
var xe = x + w; // x-end 
var ye = y + h;// y-end 
var xm = x + w / 2;// x-middle 
var ym = y + h / 2;// y-middle 

option = {
    backgroundColor: 'white',
    grid:{
        show: true ,
        left:0,
        right: 0,
        top: 0,
        bottom: 0
    },
    xAxis: [{
        type: 'value',
        offset: -zr.getHeight()/2,
        min: -5,
        max: 5,
        interval: 1,
        splitLine:{
            show: true,
            interval: 0,
        },
        axisLabel:{
            show: false
        },
        axisTick:{
            show: false
        }
    }],
    yAxis: {
        type: 'value',
        offset: -zr.getWidth()/2,
        min: -4,
        max: 4,
        interval: 1,
        splitLine:{
            show: true,
            interval: 0,
        },
        axisLabel:{
            show: false
        },
        axisTick:{
            show: false
        }
    },
    graphic: [{
        type: 'bezierCurve',
        shape:{
            x1: x,
            y1: ym,
            cpx1: x,
            cpy1: ym - oy,
            cpx2: xm - ox,
            cpy2: y,
            x2: xm,
            y2: y
        },
        style:{
            stroke: '#15e315',
            lineWidth: 2
        }
    },{
        type: 'bezierCurve',
        shape:{
            x1: xm,
            y1: y,
            cpx1: xm + ox,
            cpy1: y,
            cpx2: xe,
            cpy2: ym - oy,
            x2: xe,
            y2: ym
        },
        style:{
            stroke: '#15e315',
            lineWidth: 2
        }
    },{
        type: 'bezierCurve',
        shape:{
            x1: xe,
            y1: ym,
            cpx1: xe,
            cpy1: ym + oy,
            cpx2: xm + ox,
            cpy2: ye,
            x2: xm,
            y2: ye
        },
        style:{
            stroke: '#15e315',
            lineWidth: 2
        }
    },{
        type: 'bezierCurve',
        shape:{
            x1: xm,
            y1: ye,
            cpx1: xm - ox,
            cpy1: ye,
            cpx2: x,
            cpy2: ym + oy,
            x2: x,
            y2: ym
        },
        style:{
            stroke: '#15e315',
            lineWidth: 2
        }
    }],
};