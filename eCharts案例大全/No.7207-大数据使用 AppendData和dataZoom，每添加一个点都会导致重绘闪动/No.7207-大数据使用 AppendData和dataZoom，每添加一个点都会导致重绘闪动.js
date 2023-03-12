function randomData(minNum,maxNum) {
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 

        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 

            default: 
                return 0; 

    }
   
}

option = {
        dataZoom: [{}],
        xAxis: {
            type: "value",
            name: 'x',
        },
        yAxis: {
            type: "value",
            name: 'y',
        },
    series: [{name:"test", type: 'scatter'}]
};
var i=0;
setInterval(function () {
    if(i===0)
    {
        var tp = [];
        for(var j=0;j<2998;j++){
            tp.push([randomData(0,3500),randomData(0,3500)]);
        }
        myChart.appendData({seriesIndex: "0",data: tp});
        i=2;
    }else{
        var t = [[randomData(0,3500),randomData(0,3500)]];
        myChart.appendData({seriesIndex: "0",data: t});
        //myChart.setOption({dataZoom:null});is still clear data
    }
}, 1000);