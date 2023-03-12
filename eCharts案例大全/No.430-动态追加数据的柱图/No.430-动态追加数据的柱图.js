
let data1 = [];
for (let i = 0; i < 27; i++) {
    data1.push([Math.floor(Math.random() * 1000), String.fromCodePoint(65+i)]);
    
}   

data1.sort(function(a,b){
    return b[0] -a[0];
});

    
option = {
    title: {
        text: '动态追加数据的柱图'
    },
    xAxis: {
        
    },
    yAxis: {
        type:'category'
    },
    series: [{
        type: 'bar',
        label: {
            show: true,
            position: 'right'
        },
        data: []
    }]
};

let interval = setInterval(function(){
    if (data1.length === 0) {
        return clearInterval(interval);
    }
    option.series[0].data.push(data1.pop());
    myChart.setOption(option);
},1000);