var colors = [{
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: '#21bddf80'
    }, {
        offset: 0.5,
        color: '#21bddf80'
    }, {
        offset: 0.5,
        
        color: '#21bddf'
    }, {
        offset: 1,
        color: '#21bddf'
    }]
}];


var barWidth = 30;


var getCrossPoint = function( point1 , point2 , x  ){
    return (x - point1[0] ) * ( point2[1] - point1[1] ) / (point2[0] - point1[0]) + point1[1];
}






var renderItem = function(params , api){
              
    var yValue = api.value(1);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();
    // 可以建泰定义


    // 最右边的点坐标

    var width = size[0] * 1.2 ;
    var x = start[0]  - width  / 2;
    var y = start[1];

    var bottomHeight = 20;

    var leftpoints = [
        [ x + width / 2 , y],
    ];
    var rightpoints = [
        [ x + width / 2 , y],
    ];
    
    
    
    // 左边的坐标点
    if( params.dataIndex == 0 ){
        leftpoints.push( [ x , size[1] + y  ] );
    }else {
        leftpoints.push(
            [ x + ( width / 2 - width / 1.2 / 2 ), 
            getCrossPoint( 
                [ x , size[1] + y],
                [ x + width / 2 , y  ],
                x + ( width / 2 - width / 1.2 / 2 )
            ) ]
        );
        leftpoints.push(
            [ x + ( width / 2 - width / 1.2 / 2 ), 
            getCrossPoint( 
                [ x , size[1] + y],
                [ x + width / 2 , size[1] + y + bottomHeight  ],
                x + ( width / 2 - width / 1.2 / 2 )
            ) ]
        );
        
    }
    
    leftpoints.push( [ x + width / 2 , size[1] + y + bottomHeight] );
    rightpoints.push( [ x + width / 2 , size[1] + y + bottomHeight] );
    
    
    // 右边的坐标点
    if( params.dataIndex == params.dataInsideLength - 1 ){
        rightpoints.push( [ x + width  , size[1] + y ]  );
    }else{
        rightpoints.push(
            [ x + width / 2 + width / 1.2 / 2 , 
            getCrossPoint( 
                [ x + width / 2 , size[1] + y + bottomHeight],
                [ x + width , size[1] + y  ],
                x + width / 2 + width / 1.2 / 2
            ) ]    
        );
        
        rightpoints.push(
            [ x + width / 2 + width / 1.2 / 2 , 
            getCrossPoint( 
                [ x + width / 2 , y],
                [ x + width , size[1] + y  ],
                x + width / 2 + width / 1.2 / 2
            ) ] 
        );
        
    }
   
   style.stroke = '#98e3f5';
   style.lineWidth = 2;
    
    var group = {
        type : 'group',
        children : [{
            // 左边
            z2: 3,
            type :'polygon',
            shape : {
                points : leftpoints
            },
            style:{
                fill: style.fill.colorStops[0].color,
                stroke : style.stroke,
                lineWidth:style.lineWidth,
                
            },
             styleEmphasis:{
                 fill: style.fill.colorStops[0].color,
                stroke : style.stroke,
                lineWidth:style.lineWidth,
             }
        },{
            // 右边
            z2: 3,
            type :'polygon',
            shape : {
                points : rightpoints
            },
             style:{
                fill: style.fill.colorStops[3].color,
                stroke : style.stroke,
                lineWidth:style.lineWidth,
             },
             styleEmphasis:{
                 fill: style.fill.colorStops[3].color,
                stroke : style.stroke,
                lineWidth:style.lineWidth,
             }
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
    tooltip:{
        show:true,
        trigger:'item',
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
        type :'line',
        lineStyle:{
            color:'white'
        },
        symbol:'circle',
        symbolSize:10,
         itemStyle:{
            color:'#25dafd',
        },
        data:[220, 182, 191, 234, 290, 330, 310],
        label:{
            show:true ,
            textStyle:{
                color:'white'
            },
            formatter:function(params){
                console.log(params)
            }
        },
    }]
      
};





























