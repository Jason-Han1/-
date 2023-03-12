option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    tooltip:{
        trigger:'item'
    },
    series: [{
        type:'custom',
        renderItem : function(params , api){
            
            var yValue = api.value(1);
            var start = api.coord([api.value(0), yValue]);
            var size = api.size([api.value(1) - api.value(0), yValue]);
            var style = api.style();
            console.log(style)
            
            //  Y轴上单位长度所对应的像素大小
            
            // 需要得到Y轴上的长度，计算出高度
            
            var x = start[0] + 1 - (size[0] - 2) /2;
            var y = start[1];
            var width = size[0] - 2;
            var height = size[1];
            
            
            var barColor = '#14b1eb';
            var fillColor = '#1286b2';
            
            
            var children = [{
                // 上部分的圆圈
                type : 'path',
                z2: 3,
                shape:{
                    pathData: 'm10,200c0,-104.97238 125.30387,-190 280,-190c154.69613,0 280,85.02762 280,190c0,104.97238 -125.30387,190 -280,190c-154.69613,0 -280,-85.02762 -280,-190z'
                   , x: x + 2.5 ,
                    y: y - width * 0.3,
                    width: width - 5 ,
                    height: width * 0.6 - 5,
                    layout:'cover'
                },
                 style:  $.extend( {} ,style , true ,{
                    fill: fillColor,
                    lineWidth: 5,
                    stroke:barColor
                }), 
                 silent: true 
                
            },{
                type : 'rect',
                shape : {
                    x: x,
                    y: y,
                    width: width,
                    height: height
                },
                style: $.extend( {} ,style , true ,{
                    fill: barColor ,
                    opacity: .7
                }),
                styleEmphasis:$.extend( {} ,style , true ,{
                    fill: barColor ,
                    opacity: .7
                }),
            },{
                // 上部分的圆圈
                type : 'path',
                z2: 3,
                shape:{
                    pathData: 'm10,200c0,-104.97238 125.30387,-190 280,-190c154.69613,0 280,85.02762 280,190c0,104.97238 -125.30387,190 -280,190c-154.69613,0 -280,-85.02762 -280,-190z'
                   , x: x ,
                    y: height + y - width * 0.3,
                    width: width  ,
                    height: width * 0.6,
                    layout:'cover'
                    
                },
                 style:  $.extend( {} ,style , true ,{
                    fill: barColor,
                }), 
                styleEmphasis : {
                    fill:barColor
                },
                silent: true 
                
            }];
            
        
            return {
                type: 'group',
                children:children
            };
            
            
            
        },
        
        
        
        data:[12, 44, 55, 60 , 40 , 30,50],
            
        
        
    }]
};