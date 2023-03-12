var xAxisPanelQty =3; //xAxis panel qty
var yAxisPanelQty =6; //yAxis panel qty
var QpanelSplitX = 6; //panel split xAxis qty
var QpanelSplitY = 6; //panel split yAxis qty
var glassWidth = 2200;
var glassHeight = 2500;
var leftposition = 10; 
var topposition = 10;
var rightposition = 4;
var buttomposition = 6;
var visualMapMinValue = 0;
var visualMapMaxValue = 100;
var panelshow = true; //panel grid show
var grids = [];
var xAxes = [];
var yAxes = [];
var series = [];
var titles = [];

var xAxisIndexByZoom = []; //设置Zoom操作时关联的X坐标系
var yAxisIndexByZoom = []; //设置Zoom操作时关联的Y坐标系

var dataRect = [
        [1, 2, 2, 1],
        [7, 5, 8, 4], 
        [9,10,10, 9],
        [10,11,11,10]
    ];
    
// var colorRectEmphasis = {
//                         type: 'linear',
//                         x: 0,
//                         y: 0,
//                         x2: 1,
//                         y2: 1,
//                         colorStops: [{
//                             offset: 0, color: 'black' // 0% 处的颜色
//                         }, {
//                             offset: 0.5, color: 'red' // 50% 处的颜色
//                         }, {
//                             offset: 1, color: 'blue' // 100% 处的颜色
//                         }]

//                 };
// var colorRect = {
//     type: 'radial',
//     x: 0.5,
//     y: 0.5,
//     r: 0.5,
//     colorStops: [{
//                             offset: 0, color: 'red' // 0% 处的颜色
//                         }, {
//                         //     offset: 0.5, color: 'red' // 50% 处的颜色
//                         // }, {
//                             offset: 1, color: 'blue' // 100% 处的颜色
//                         }]

// };
var colorRect = 'rgba(255,0,0,0.3)';                
dataRect = echarts.util.map(dataRect, function (item) {
    return {
        value: [item[0]*glassWidth/xAxisPanelQty/QpanelSplitX,item[1]*glassHeight/yAxisPanelQty/QpanelSplitY,item[2]*glassWidth/xAxisPanelQty/QpanelSplitX,item[3]*glassHeight/yAxisPanelQty/QpanelSplitY],
        itemStyle: {

                color: colorRect

            
        },
        // emphasis :{
        //     itemStyle: {
        //         color: colorRectEmphasis
        //     }
        // }
       
    };
});

var data = [];

var random = function (max) {
    return (Math.random() * max).toFixed(3);
};
// random data
for (var i = 0; i < 50; i++) {
    data.push([random(glassWidth), random(glassHeight), random(visualMapMaxValue)]);
}

titles.push({
    text: "Product GlassMap (Width:"+glassWidth+"mm,Height:"+glassHeight+"mm)",
    left: 'center',
    textAlign:'left'
});
//第个Panel 再进行分割
var qpanelXAxisCoordData =[];
for(m=0;m<QpanelSplitX;m++){
    qpanelXAxisCoordData.push('');
}
var qpanelyAxisCoordData =[];
for(n=0;n<QpanelSplitY;n++){
    qpanelyAxisCoordData.push('');
}

//把整个glass 设置成第一个grid
//给玻璃设置外边沿
grids.push({
    left: (leftposition-1)+'%',
    show:true,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowBlur: 1,
    height: 100-(topposition-1)-(buttomposition-1)+'%',
    top: (topposition-1)+'%',
    width: 100-(rightposition-1)-(leftposition-1)+'%',
    right: rightposition-1 + '%'
});
//设置glass中实际使用面积的grid
grids.push({
    left: (leftposition)+'%',
    show:true,
    borderWidth: 0.5,
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowBlur: 1,
    height: 100-(topposition)-(buttomposition)+'%',
    top: (topposition)+'%',
    width: 100-(rightposition)-(leftposition)+'%',
    right: rightposition + '%'
});
//给第一个grid 添加坐标轴
var xAxisCoordData =[];
for(m=0;m<xAxisPanelQty;m++){
    xAxisCoordData.push((glassWidth/xAxisPanelQty*m).toFixed(0).toString());
}
var yAxisCoordData =[];
for(n=0;n<yAxisPanelQty;n++){
    yAxisCoordData.push('');
}
xAxes.push({
    // data: xAxisCoordData,
        name: '',  //该处虽然是设置第一个x轴，但当第一个不设置时，第二个的name 显示位置不正常
        nameLocation: 'center',
        min: 0,
        max: glassWidth,
        splitNumber: xAxisPanelQty,
        // interval:(2200/xAxisPanelQty).toFixed(2),
        interval:glassWidth/xAxisPanelQty,
        splitLine: {
            show:false
        } ,
        axisLine: {
                show: true
            },
        axisLabel : {
            show: false,
        },
        // offset: 500,
        axisTick : {
            // show: true,
            inside: true//该处虽然是设置第一个x轴，但当第一个不设置时,第二个的显示不正常
        },
        gridIndex: 1  //default is 0     
        
    });
xAxes.push({
        name: 'Width (mm)',
        nameLocation: 'center',
        nameGap:'30',
        min: 0,
        max: glassWidth,
        splitLine: {
            show:false
        },
        axisLine:{
          show : true  
        },
        splitNumber: xAxisPanelQty,
        // interval:(2200/xAxisPanelQty).toFixed(2),
        interval:glassWidth/xAxisPanelQty,
        axisLabel : {
            show: true,
            formatter:function(value,index){
                return value.toFixed(0).toString();
            }
        },
        axisTick: {
            // show: true
        },
        // offset:'100%',
        gridIndex: 1  //default is 0         
    });
xAxisIndexByZoom.push(1);
yAxes.push({
        name: 'Height (mm)',
        nameLocation: 'center',
        nameGap:'60',
        min: 0,
        inverse: true,
        max: glassHeight,
        splitNumber: yAxisPanelQty,
        // interval:(2500/yAxisPanelQty).toFixed(1),
        interval:glassHeight/yAxisPanelQty,
        splitLine: {
            show : false
        },
        axisLine: {
                show: true
            },
        axisLabel : {
            show: true,
            formatter: function(value,index){
                return value.toFixed(0).toString();
            }
        },
        axisTick : {
            show: true
        },
        gridIndex: 1  //default is 0            
    });
yAxes.push({
        axisLine: {
                show: true
            },
        gridIndex: 1  //default is 0
    });
yAxisIndexByZoom.push(0);
//每个panel 都对应成一个grid
for(var i=0 ; i < xAxisPanelQty ; i++) {
    for( var j =0 ; j < yAxisPanelQty ; j++ ) {
        if(panelshow) {
            titles.push({
                text: String.fromCharCode(65+i)+(j+1),
                top: topposition + (j)/yAxisPanelQty*(100-topposition-buttomposition)+1/yAxisPanelQty*(100-topposition-buttomposition)/2+'%',
                left: (leftposition) + (i)/xAxisPanelQty*(100-leftposition-rightposition)+1/xAxisPanelQty*(100-topposition-buttomposition)/2+ '%',
                textAlign: 'center',
                textBaseline: 'middle', //
                // textVeticalAlign: 'middle'
            });
        }
        
        
        if(i===0){
            if ( j===0 ) {
                grids.push({
    	            left:leftposition +'%',
    	            show: panelshow,
    	            borderWidth: 0,
    	            backgroundColor: '#fff',
    	            shadowColor: 'rgba(0, 0, 0, 0.3)',
    	            shadowBlur: 1,
    	            height:1/yAxisPanelQty*(100-topposition-buttomposition)+'%',
    	            top: topposition +'%',	            
    	            width: (1/xAxisPanelQty*(100-leftposition-rightposition))+'%',
    	            //右边距right的位置：左边100先减去第一个左移的leftposition%，再减去宽度 (1/xAxisPanelQty*(100-leftposition))+'%'
    	            right: ((100-leftposition)-(1/xAxisPanelQty*(100-leftposition-rightposition)))+'%' 
        	    });
        	    
        	}else{
        	    
                grids.push({
                    left:((leftposition)+(i)/xAxisPanelQty*(100-leftposition-rightposition))+'%',//除去第一个左边距的4%,剩余渐分都以96%进行分割
                    show: panelshow,
                    borderWidth: 0,
                    backgroundColor: '#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 1,
                    height: 1/yAxisPanelQty*(100-topposition-buttomposition)+'%',
                    // top: (100-topposition)-(j/yAxisPanelQty*(100-topposition-buttomposition))+ '%',
                    top: topposition + j/yAxisPanelQty*(100-topposition-buttomposition)+'%',
                    Width: (1/xAxisPanelQty*(100-leftposition-rightposition))+'%',
                    //右边距right的位置：左边100%先减去第一个左移的leftposition%，再减去(100-leftposition)%为起始的该grid的左边距(i/xAxisPanelQty*(100-leftposition))，再减去宽度 (1/xAxisPanelQty*(100-leftposition))+'%'
                    right:((100-leftposition)-(i/xAxisPanelQty*(100-leftposition-rightposition))-(1/xAxisPanelQty*(100-leftposition-rightposition)))+'%'
        	   });
        	   
        	}
        	
        }else {
            if ( j===0 ) {
                grids.push({
    	            left:((leftposition)+(i)/xAxisPanelQty*(100-leftposition-rightposition))+'%',
    	            show: panelshow,
    	            borderWidth: 0,
    	            backgroundColor: '#fff',
    	            shadowColor: 'rgba(0, 0, 0, 0.3)',
    	            shadowBlur: 1,
    	            height:1/yAxisPanelQty*(100-topposition-buttomposition)+'%',
    	            top: topposition +'%',	            
    	            width: (1/xAxisPanelQty*(100-leftposition-rightposition))+'%',
    	            //右边距right的位置：左边100先减去第一个左移的leftposition%，再减去宽度 (1/xAxisPanelQty*(100-leftposition))+'%'
    	            right: ((100-leftposition)-(1/xAxisPanelQty*(100-leftposition-rightposition)))-(1/xAxisPanelQty*(100-leftposition-rightposition))+'%' 
        	    });
        	}else{
        	    
                grids.push({
                    left:((leftposition)+(i)/xAxisPanelQty*(100-leftposition-rightposition))+'%',//除去第一个左边距的4%,剩余渐分都以96%进行分割
                    show: panelshow,
                    borderWidth: 0,
                    backgroundColor: '#fff',
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 1,
                    height: 1/yAxisPanelQty*(100-topposition-buttomposition)+'%',
                    top: topposition + j/yAxisPanelQty*(100-topposition-buttomposition)+'%',
                    Width: (1/xAxisPanelQty*(100-leftposition-rightposition))+'%',
                    //右边距right的位置：左边100%先减去第一个左移的leftposition%，再减去100-leftposition%为起始的该grid的左边距(i/xAxisPanelQty*(100-leftposition-rightposition))，再减去宽度 (1/xAxisPanelQty*(100-leftposition-rightposition))+'%'
                    right:((100-leftposition)-(i/xAxisPanelQty*(100-leftposition-rightposition))-(1/xAxisPanelQty*(100-leftposition-rightposition)))+'%'
        	   });
        	}
        }
        //给每一个panel对应的grid 添加坐标轴
        xAxes.push({
        	data: qpanelXAxisCoordData,
        	axisLine: {
                show: panelshow
            },
            splitLine: {
                show: true
                } ,
            axisLabel : {
                show: true
                },
            axisTick : {
                show: false
                },
            // axisLine: {
            //     show: true
            // },
            gridIndex: grids.length -1
        });
        xAxes.push({
            axisLine: {
                show: panelshow
            },
            gridIndex: grids.length -1 ,
            // axisLine: {
            //     show: false
            // }
        });
        xAxisIndexByZoom.push((grids.length-2)*2);
        yAxes.push({
            data:qpanelyAxisCoordData,
            axisLine: {
                show: panelshow
            },
            splitLine: {
                    show : true
                },
            axisLabel : {
                    show: false
                },
            axisTick : {
                    show: false
            },
            // axisLine: {
            //     show: false
            // },
            gridIndex: grids.length -1  
        });
        yAxes.push({
            axisLine: {
                show: panelshow
            },
            gridIndex: grids.length -1 ,
            // axisLine: {
            //     show: false
            // }
        });
        yAxisIndexByZoom.push((grids.length-2)*2);
    }
}
//设置series
series.push({
    //example data : [xAxisCoordData,yAxisCoordData,value]
    data:data,
    type:'scatter'
},{
    type:'custom',
    coordinateSystem: 'cartesian2d',
    xAxisIndex: 1,
    yAxisIndex: 0,
    renderItem: function (params, api) {
        var yValue = api.value(3);
        var start = api.coord([api.value(0),  api.value(3)]);
        var end = api.coord([api.value(2), api.value(1)]);
        // var size = api.size([api.value(2)-api.value(0),api.value(1)-api.value(3)]);
        var width = api.size([10, 100])[0] * ((api.value(2)-api.value(0))/10);
        var height = api.size([10, 100])[1] * ((api.value(1)-api.value(3))/100);
        var rectShape = echarts.graphic.clipRectByRect({
            x: start[0],
            y: start[1],
            width: width,
            height: height
        }, {
            x: params.coordSys.x,
            y: params.coordSys.y,
            width: params.coordSys.width,
            height: params.coordSys.height
        });
    
        return (
            rectShape && {
                type: 'rect',
                shape: rectShape,
                style: api.style()
            }
        );
            

    },
    

    dimensions: ['left', 'top', 'right','bottom'],
    encode: {
            x: [0, 2],      // 表示维度 0、2映射到 x 轴。
            y: [3, 1],              // 表示维度 1，3 映射到 y 轴。
            // tooltip: [0, 1, 2, 3] // 表示维度 0, 1, 2, 3 会在 tooltip 中显示。
        },
    data: dataRect
});

option = {
    grid: grids,
    title: titles,
    xAxis: xAxes,
    yAxis: yAxes,
    series: series,
    toolbox: {
        show: true,
        feature: {
            dataView: {readOnly: true},
            restore: {},
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if(params.value.length ===4){
                return "start["+params.value[0]+","+params.value[1]+"]"+"<br/>"+"end["+params.value[2]+","+params.value[1]+"]";
            }
            
            return params.name + ' position: ['+params.value[0]+','+params.value[1]+']'+'<br/>value:'+(params.value[2]);
        }
    },
    visualMap: {
        type: 'continuous',
        min: visualMapMinValue,
        top: 0,
        orient:'vertical',
        max: visualMapMaxValue,
        text:['High','Low'],
        realtime: false,
        calculable : true,
        color: ['orangered','yellow','blue'],
        seriesIndex : 0
    },
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: xAxisIndexByZoom,
            filterMode: 'filter',
            showDataShadow: false,
            height: 10,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            yAxisIndex: yAxisIndexByZoom,
            filterMode: 'filter',
            showDataShadow: false,
            width:10,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        },
        {
            id: 'dataZoomXinside',
            type: 'inside',
            xAxisIndex: xAxisIndexByZoom,
            filterMode: 'filter'
        },
        {
            id: 'dataZoomYinside',
            type: 'inside',
            yAxisIndex: yAxisIndexByZoom,
            filterMode: 'filter'
        }
    ],
};