

alpha=2
///////////////////////////////////////////////////

xRange=[0.1,10]
yRange=[0.1,10]
isFrame=false;
xStep=0.05
yStep=0.05
theFunc1=function(x, y) {
    sg=Math.sign(alpha);
    return sg*Math.max(sg*x, sg*y) + Math.log(1 + Math.exp(-Math.abs(alpha*(x - y))))/alpha;
}
theFunc2=function(x, y) {
    return x+y;
}
theFunc3=function(x, y) {
    return x*y;
}
theFunc4=function(x, y) {
    return Math.pow(x,Math.log(y)/alpha);
}
theFunc=theFunc4
///////////////////////////////////////////////////

option = {
    tooltip: {},
    backgroundColor: '#fff',
    visualMap: {
        show: false,
        dimension: 2,
        min: -1,
        max: 1,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        viewControl: {
            // projection: 'orthographic'
        }
    },
    series: [{
        type: 'surface',
        wireframe: {
            show: isFrame
        },
        equation: {
            x: {
                step: xStep,
                min: xRange[0],
                max: xRange[1],
            },
            y: {
                step: yStep,
                min: yRange[0],
                max: yRange[1],
            },
            z: theFunc
        }
    }]
}