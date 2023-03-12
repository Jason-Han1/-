var MyCubeRect = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
        width: 48, //柱宽        
        zWidth: 8, //阴影折角宽        
        zHeight: 4, //阴影折角高 
    },
    buildPath: function (ctx, shape) {
        const api = shape.api;
      
        const yAxisPoint = api.coord([shape.yValue, 0]);
        const p0 = [shape.y, shape.x];
        const p1 = [shape.y - 24, shape.x];
        const p4 = [shape.y + 24, shape.x];
        const p2 = [shape.y - 24, yAxisPoint[0]];
        const p3 = [shape.y + 24, yAxisPoint[0]];
        
    

        ctx.moveTo(p0[1],p0[0]);
        ctx.lineTo(p1[1], p1[0]); //1
        ctx.lineTo(p2[1], p2[0]); //2
        ctx.lineTo(p3[1], p3[0]); //3
        ctx.lineTo(p4[1], p4[0]); //4
        ctx.lineTo(p0[1], p0[0]); //0
        ctx.closePath();
    }
});
var MyCubeShadow = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
        width: 48,
        zWidth: 8,
        zHeight: 4,
    },
    buildPath: function (ctx, shape) {
        const api = shape.api;
        const yAxisPoint = api.coord([shape.yValue, 0]);
        const p0 = [shape.y, shape.x];
        const p1 = [shape.y - 24, shape.x];
        const p4 = [shape.y + 24, shape.x];
     
        const p6 = [shape.y + 24 - 8, shape.x + 4];
        const p7 = [shape.y - 24 - 8, shape.x + 4];
        const p3 = [shape.y - 24, yAxisPoint[0]];
        const p5 = [shape.y - 24 - 8, yAxisPoint[0] + 4];
       
        const p2 = [shape.y - 24, shape.x];
     
        const p8 = [shape.y - 24 - 8, shape.x + 4];
      
        ctx.moveTo(p2[1], p2[0]); //4
        ctx.lineTo(p3[1], p3[0]); //3
        ctx.lineTo(p5[1], p5[0]); //5
        ctx.lineTo(p8[1], p8[0]); //6
        ctx.lineTo(p2[1], p2[0]); //4
    
      
        ctx.moveTo(p4[1], p4[0]); //4
        ctx.lineTo(p6[1], p6[0]); //6
        ctx.lineTo(p7[1], p7[0]); //7
        ctx.lineTo(p1[1], p1[0]); //1
        ctx.lineTo(p4[1], p4[0]); //4
        ctx.closePath();
    }
});
echarts.graphic.registerShape('MyCubeRect', MyCubeRect);
echarts.graphic.registerShape('MyCubeShadow', MyCubeShadow);
option = {
    grid: {
        height: 300
    },
    xAxis: {
        // data: ['one', 'two']
        type: 'value'
    },
    yAxis: {
    //   type: 'value'
    
          data: ['one', 'two','three']
    },
    series: [{
        type: 'custom',
        renderItem: function (params, api) {
            let location = api.coord([api.value(0), api.value(1)]);
            // alert(api.value(0));
            // console.info(api.value(0));
            // console.info(api.value(1));
            //20,60
            return {
                type: 'group',
                children: [{
                    type: 'MyCubeRect',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1]
                    },
                    style: {
                        fill: '#5AD8A6'
                    }
                },{
                    type: 'MyCubeShadow',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1]
                    },
                    style: {
                        fill: '#1F986A'
                    }
                }]
            };
        },
        data: [100,200,3000]
    }]
};