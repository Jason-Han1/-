
var  colors = ['#008b48','#64c128','#fadd1d','#ffaa01','#ff0101'];
var  texts = ['畅通','基本畅通','缓行','拥堵','严重拥堵'];
function getIdx(value){
     var p = value / 10,idx=0;
    if(p>0.2&&p<=0.4){
        idx=1;
    }else if(p>0.4&&p<=0.6){
        idx=2;
    }else if(p>0.6&&p<=0.8){
        idx=3;
    }else if(p>0.8&&p<=1){
        idx=4;
    }
    return idx;
}
function getColor(value){
    
    return colors[getIdx(value)];
}
function getText(value){
      return texts[getIdx(value)];
}

option = {
    tooltip: {
        formatter: '{a} : {c}'
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '实时交通指数',
            type: 'gauge',
            detail: {
                formatter: '{value}',
                fontSize:50,
                fontWeight:'bold'
                
            },
            data: [{value: 0, name:getText(0)}],
            min:0,
            max:10,
            title:{
                offsetCenter:[0,'20%'],
                fontSize:20,
                color:getColor(0)
            },
            axisLine:{
                lineStyle:{
                    width:25,
                    color:[[0.2,colors[0]],[0.4,colors[1]],[0.6,colors[2]],[0.8,colors[3]],[1,colors[4]]]
                }
            },
            axisLabel:{
                fontSize:16,
                fontWeight:'bold'
            }
        }
    ]};
    
setInterval(function () {
     var value =  Math.round((Math.random() * 10)*10)/10;
       option.series[0].data[0].value = value;
     option.series[0].data[0].name = getText(value);
     option.series[0].title.color = getColor(value);
     
    myChart.setOption(option, true);
},3000);
