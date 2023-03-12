option = {
    title: {
        text: 'Draw Arrow Line（用鼠标画箭头）',
        left: 'center'
    }
};

setTimeout(function () {
    
    var zr = myChart.getZr();
    
    var Arrow = echarts.graphic.extendShape({

        type: 'arrow',

        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },

        buildPath: function (ctx, shape) {
            var height = shape.height;
            var width = shape.width;
            var x = shape.x;
            var y = shape.y;
            var dx = width / 3 * 2;
            ctx.moveTo(x, y);
            ctx.lineTo(x + dx, y + height);
            ctx.lineTo(x, y + height / 4 * 3);
            ctx.lineTo(x - dx, y + height);
            ctx.lineTo(x, y);
            ctx.closePath();
        }
    });
    
    var drawing;
    var points = [];
    var startPoint;
    var traceEl;
    var arrowEl;
    
    zr.on('mousedown', function (e) {
        drawing = true;
        startPoint = [e.offsetX, e.offsetY];

        // 如果需要清除箭头，用这个逻辑。
        // if (traceEl) {
        //     zr.remove(traceEl);
        // }
        // if (arrowEl) {
        //     zr.remove(arrowEl);
        // }
        
        traceEl = new echarts.graphic.Line({
            shape: {
                x1: 0, y1: 0, x2: 0, y2: 0
            },
            style: {
                stroke: 'red',
                lineWidth: 1
            }
        });
        arrowEl = new Arrow({
            ignore: true,
            shape: {
                x: 0, y: 0, width: 10, height: 20
            },
            style: {
                fill: 'red',
                stroke: null
            }
        });
        zr.add(traceEl);
        zr.add(arrowEl);
    });
    
    zr.on('mouseup', function (e) {
        drawing = false;
        points.length = 0;
        startPoint = null;
    })
    
    zr.on('mousemove', function (e) {
        if (!drawing) {
            return;
        }
        
        traceEl.attr('shape', {
            x1: startPoint[0],
            y1: startPoint[1],
            x2: e.offsetX,
            y2: e.offsetY
        });
        
        arrowEl.attr({
            ignore: false,
            position: [e.offsetX, e.offsetY],
            rotation: Math.atan(
                -(startPoint[1] - e.offsetY) / (startPoint[0] - e.offsetX)
            ) 
            + (startPoint[0] > e.offsetX ? 1 : -1) * Math.PI / 2
        })
    })
    
    
})