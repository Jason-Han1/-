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
    var rightPoint = [
        [ x + width , size[1] + y ],
    ];






debugger;
    var width = size[0] * 1.2 ;
    var x = start[0]  - width  / 2;
    var y = start[1];

    var bottomHeight = 20;

    var points = [
        [ x + width / 2 , y],
    ];
    
    
    
    // 左边的坐标点
    if( params.dataIndex == 0 ){
        points.push( [ x , size[1] + y  ] );
    }else {
        points.push(
            [ x + ( width / 2 - width / 1.2 / 2 ), 
            getCrossPoint( 
                [ x , size[1] + y],
                [ x + width / 2 , y  ],
                x + ( width / 2 - width / 1.2 / 2 )
            ) ]
        );
        points.push(
            [ x + ( width / 2 - width / 1.2 / 2 ), 
            getCrossPoint( 
                [ x , size[1] + y],
                [ x + width / 2 , size[1] + y + bottomHeight  ],
                x + ( width / 2 - width / 1.2 / 2 )
            ) ]
        );
        
    }
    
    
    points.push( [ x + width / 2 , size[1] + y + bottomHeight] );
    
    
    // 右边的坐标点
    if( params.dataIndex == params.dataInsideLength - 1 ){
        points.push( [ x + width  , size[1] + y ]  );
    }else{
        points.push(
            [ x + width / 2 + width / 1.2 / 2 , 
            getCrossPoint( 
                [ x + width / 2 , size[1] + y + bottomHeight],
                [ x + width , size[1] + y  ],
                x + width / 2 + width / 1.2 / 2
            ) ]    
        );
        
        points.push(
            [ x + width / 2 + width / 1.2 / 2 , 
            getCrossPoint( 
                [ x + width / 2 , y],
                [ x + width , size[1] + y  ],
                x + width / 2 + width / 1.2 / 2
            ) ] 
        );
        
    }
    
    

    
    
    
    
   
   style.stroke = '#25dafd';
   style.lineWidth = 2;
    
    var group = {
        type : 'group',
        children : [{
            // 顶部
            z2: 3,
            type :'polygon',
            shape : {
                points : points
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
    }]
      
};





























