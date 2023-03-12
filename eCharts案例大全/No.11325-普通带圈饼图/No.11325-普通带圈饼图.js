var dotData = [];
var colors = ['#d41452', 'rgba(1,1,1,.01)'];
for (var i = 0; i < 360; i++) {
    var color = colors[i % 2];
    dotData.push({
        value: 1,
        itemStyle: {
            normal: {
                color: color
            }
        }
    });
}
var option = {
    title: {
        text: '120\n\n人员统计',
        x: 'center',
        y: 'center',
        textStyle: {
            color: 'white',
            fontSize: 40
        }
    },
    backgroundColor:'#f6f6f6',
    series: [{
        type: 'pie',
        data: [100],
        radius:'55%',
        label: {
            show: false,
        },
        itemStyle: {
            color: '#d41452',
        },
    },{
        type:'pie',
        data:dotData,
        radius:['60%','61%'],
        label:{
            show:false,
        },
    }],
};