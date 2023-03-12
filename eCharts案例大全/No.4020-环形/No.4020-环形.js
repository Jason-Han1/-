

option = {
     dataset: {
        source: [
            ["product", "data","data2"],
            ["面料", "100","30"],
            ["里料", "50","60"],
            ["尼龙拉链", "25","50"],
            ["主标", "60","70"],
            ["小类1", "77","44"],
            ["小类2", "87","50"],
            ["小类3", "45","85"],
            ["小类4", "67","66"],
            ["小类5", "89","50"],
            ["小类6", "24","78"]
        ]
    },
    backgroundColor:'#1A1D26',
    series: [{
        type: 'pie',
        radius: ['45%','54%'],
        center: ['50%', '50%'],
        startAngle:90,
        //data: data,
        animation: false,
        labelLine:{
            length:20,
            length2:20
        },
        itemStyle:{
        borderWidth:5,
        borderRadius:10,
        borderColor:'#1A1D26'
    },
        label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5
        },
        z:6,
    }]
};