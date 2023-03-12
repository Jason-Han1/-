var dy = [
        -361363.453,
        -284805.14,
        3419536.21,
        1879019.76,
        188747.16,
        1863199.12,
        327007.32,
        485804.15,
        -18326.19,
        1799252.08,
        835435.97,
        490270.26
    ]
var zt = [];
var label =[];
for(var i = 0; i< dy.length; i++){
    var obj = [];
    if(i===0){
        var x  = parseFloat(dy[i]);
        if(x<0){
              label.push({value:dy[i],coord:[i,x],label:{position:'bottom',show:true,fontSize:10,color:'green'}});
        }else{
              label.push({value:dy[i],coord:[i,x]});
        }
       
        obj.push(0);
        obj.push(dy[i]);
        obj.push(dy[i]);
        obj.push(dy[i]);
        zt.push(obj);
    }else{
       
        var start = zt[i-1][1];
        var val = parseFloat(dy[i]);
        var end = start+val;
        if(dy[i]<0){
              label.push({value:dy[i],coord:[i,end],label:{position:'bottom',show:true,fontSize:10,color:'green'}});
        }else{
              label.push({value:dy[i],coord:[i,end]});
        }
      
        obj.push(start);
        obj.push(end);
        obj.push(end);
        obj.push(end);
        zt.push(obj);
    }
    
    
   
    
    
}


option = {
    title: {
        text: '阶梯瀑布图',
        textStyle: {
            color: 'blue',
            fontWeight: 'bold'
        },
        subtextStyle: {
            color: '#aaa',
            fontStyle: 'italic'
        },
        left: 'center',

    },
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月','9月','10月','11月','12月']
    },
    yAxis: {
        type:'value',
        scale: true
    },
    series: [{
        type: 'candlestick',
        //开始值、结束值、最大值、最小值
        //[[1,2,3,4]
        data: zt,
        itemStyle:{
            color:'red',
            color0:'green',
            borderWidth:0
        },
        markPoint: {
            symbol: 'rect',
            //图形上面的小头隐藏
            symbolSize: 0.000000000000001,
            label: {
                show: true,
                color: 'red',
                position: 'top',
                fontSize:10,
                formatter: function(res) {
                  
                    return res.data.value;
                }
            },
            data: label
                  
                
        },
        emphasis:{
            itemStyle:{
                // color:'yellow',
                // color0:'green',
                borderWidth:0
            }
        }
       
       
    }]
};