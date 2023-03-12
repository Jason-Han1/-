option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        axisLabel:{
        },
        interval :1,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    tooltip:{
        trigger:'axis'
    },
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};
var i = 0;
setInterval(function(){
    if(i==7){
        i = 0;
    }
    showTip(i);
    i++;
}, 1000);

function showTip(i) {
    var j=i;
    myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: i
    })
}