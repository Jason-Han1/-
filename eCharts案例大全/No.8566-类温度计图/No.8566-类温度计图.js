var myData = [{
    name: '1',
    value: 18.9
},{
    name: '2',
    value: 38
},{
    name: '3',
    value: 72
},{
    name: '4',
    value: 0
},{
     name: '5',
    value: 25
},{
    name: '总体积',
    value: 167
}];

var xaxisData = {
    type: 'category',
    gridIndex: 0,
    axisTick:{
        show: false
    },
    axisLine:{
        show: false
    }
};
var yaxisData = {
    type: 'value',
    splitLine:{
       show: false  
    },
    axisTick:{
        inside: true,
        length : 18
    },
    axisLabel:{
        show: false,
        inside: true,
    }
};
var sData = {
    type: 'scatter',
    data:[0,20,40,60,80,100],
    itemStyle:{
        color: 'rgba(0,0,0,0)'
    },
    label:{
        show: true,
        color: '#2e57ac',
        fontSize: 16
    }
}
var barData = {
    data: [10],
    type: 'bar',
    itemStyle:{
        color: '#ff3232'
    },
    xAxisIndex: 0,
    yAxisIndex: 0,
    zlevel: -1
}
function getXData(node, gridIndex){
    var obj = JSON.parse(JSON.stringify(xaxisData));
    var val = node.value;
    obj.data = [node.name];
    obj.gridIndex = gridIndex;
    obj.axisLabel = {
        formatter: function(param){
            var s = [param,val].join('\n');
            if(param == '总体积'){
                s = '{t1|'+s+'}';
            }
            return s;
        },
        rich:{
            t1:{
                color: 'red'
            }
        }
    };
    return obj;
}
function getyData(gridIndex,position,ymax){
    var obj = JSON.parse(JSON.stringify(yaxisData));
    obj.gridIndex = gridIndex;
    if(position){
        obj.position = position;
    }
     obj.min = 0;
    if(ymax){
        if(ymax % 100 === 0){
            obj.max = ymax;
        }else{
            obj.max = (parseInt(ymax/100) + 1) * 100;
        }    
        obj.interval = obj.max/5;
    }else{
        obj.max = 100;
    }
    return obj;
}
function getScatterData(gridIndex,ymax){
     var obj = JSON.parse(JSON.stringify(sData));
     obj.xAxisIndex = gridIndex;
     obj.yAxisIndex = gridIndex;
     if(ymax){
        var max = 0;
        if(ymax % 100 === 0){
            max = ymax;
        }else{
            max = (parseInt(ymax/100) + 1) * 100;
        }    
        var step = max/5;
        obj.data = [step*0,step*1,step*2,step*3,step*4,step*5];
    }
     return obj;
}
function getBarData(node,gridIndex,color){
     var obj = JSON.parse(JSON.stringify(barData));
     obj.data = [node.value];
     obj.xAxisIndex = gridIndex;
     obj.yAxisIndex = gridIndex;
     if(color){
        obj.itemStyle.color = color;
     }
     return obj;
}

//console.log( getyData(5,'right',200));
option = {
    grid:[
        {left: '5%', width: '10%', },
        {left: '20%', width: '10%',},
        {left: '35%', width: '10%',},
        {left: '50%', width: '10%',},
        {left: '65%', width: '10%',},
        {left: '80%', width: '10%',}
    ],
    xAxis: [ 
        getXData(myData[0],0),
        getXData(myData[1],1),
        getXData(myData[2],2),
        getXData(myData[3],3),
        getXData(myData[4],4),
        getXData(myData[5],5),
    ],
    yAxis: [ 
         getyData(0),
         getyData(1),
         getyData(2),
         getyData(3),
         getyData(4),
         getyData(5, 'left', myData[5].value),
         getyData(0,'right'),
         getyData(1,'right'),
         getyData(2,'right'),
         getyData(3,'right'),
         getyData(4,'right'),
         getyData(5,'right', myData[5].value)
    ],
   series: [
        getScatterData(0),
        getScatterData(1),
        getScatterData(2),
        getScatterData(3),
        getScatterData(4),
        getScatterData(5, myData[5].value),
        getBarData(myData[0],0),
        getBarData(myData[1],1),
        getBarData(myData[2],2),
        getBarData(myData[3],3),
        getBarData(myData[4],4),
        getBarData(myData[5],5,'yellow'),
    ]
};