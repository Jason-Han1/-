
var lines = [[[0,1,50],[0.5,0.4,50],[1,0.2,50],[1.5,0,50]]];

for(var i=0;i<10;i++){
    var ps = [];
    var b = 1;
    for(var j=0;j<lines[0].length;j++){
        ps.push([lines[0][j][0]*b,lines[0][j][1]*b,lines[0][j][2]*(i+2)]);
    }
    lines.push(ps);
}
console.log(lines);
var colors = ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026'];
var pieces = [];
var base = lines[0][0][2];
for(var i=0;i<lines.length-1;i++){
    var opt = {gt:base*i,lte:base*(i+1),color:colors[i]};
    pieces.push(opt);
}
var series = [];
lines.forEach(function(item,i){
    var opt = {
        type:'line',
        smooth:true,
        color:colors[i],
        stack:true,
        symbolSize:0,
        areaStyle:{
            color:colors[i]
        },
        data:item
    };
    series.push(opt);
});

option = {
    title: {
        text: 'Awesome Chart'
    },
    visualMap: {
        top: 10,
        right: 10,
        pieces: pieces,
        outOfRange: {
        }
    },
    xAxis: {
        type:'category',
        max:1
    },
    yAxis: {
        max:5,min:0
    },
    series: series
};