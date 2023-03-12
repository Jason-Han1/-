var colors = [{
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#27f7fa'
    }, {
        offset: 0.5,
        color: '#23c3e2dd'
    }, {
        offset: 1,
        color: '#23c3e2dd'
    }]
}, {
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#7153d3aa'
    }, {
        offset: 0.5,
        color: '#352a6b'
    }, {
        offset: 1,
        color: '#352a6b'
    }]
}];


var barWidth = 30;

var renderItem = function(params , api){
              
    var yValue = api.value(1);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();
    // 可以建泰定义
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length
    });

    var width = size[0] * 0.3;
    var x = start[0]  - width / 2 + barLayout[params.seriesIndex].offsetCenter;
    var y = start[1];
    var rectShape = {
        x: x,
        y: y,
        width: width,
        height: size[1]
    };
    
    var lineWidth = 2;
    
    var upPoints = [
        [x + lineWidth , start[1]],
        [x + width / 2  , y - width * 0.3 + lineWidth ],
        [x + width - lineWidth , y],
        [x + width / 2 , y + width * 0.3 - lineWidth]
    ];
    
    
    var bottomPoints = [
        [x  , size[1] + y],
        [x + width / 2  ,size[1] + y - width * 0.3  ],
        [x + width  , size[1] + y],
        [x + width / 2 , size[1] + y + width * 0.3]
        
    ];
    
    var group = {
        type : 'group',
        children : [{
            // 顶部
            z2: 3,
            type :'polygon',
            shape : {
                points : upPoints
            },
            style:{
                fill : style.fill.colorStops[2].color  ,
                stroke:style.fill.colorStops[0].color,
                lineWidth : lineWidth,
            }
        },{
            z2: 2,
            type: 'rect',
            shape:rectShape,
            style: style
        },{
            // 顶部
            z2: 3,
            type :'polygon',
            shape : {
                points : bottomPoints
            },
            style:style
        }],
    };
    

    return group; 
  
}




option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type : 'custom',
        itemStyle:{
            normal:{
                color:colors[0] ,
            }
        },
        data:[220, 182, 191, 234, 290, 330, 310],
        renderItem : renderItem
    },{
        type : 'custom',
        itemStyle:{
            normal:{
                color:colors[1],
            }
        },
        data:[220, 182, 191, 234, 290, 330, 310],
        renderItem:renderItem
    }]
      
};





























