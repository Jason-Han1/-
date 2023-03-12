var legendName=['名称一','名称二','名称三','名称四','名称五','名称六','名称七','名称八'];
var data = [100,200,150,80,67,240,122,187];
//以上是数据
var fucolor=['#bdd6e9','#ab98e8','#ffd7fd','#fffcc6','#bdf3ec','#d9dcf6','#ffe7d7','#d1f5d2','#cff0ff','#ffd8d8'];
var matData = function(){//格式化数据
    var mData = [];
    for(var i=0;i<legendName.length;i++){
        var x = {};
        x.value = data[i];
        x.name = legendName[i];
        mData.push(x);
    }
    return mData;
}
myChart.on('click',function(params){
    alert(params.dataIndex);
});
option = {
    title: {
        text: '知识点分布图',
        left: 'center',
        bottom: '30',
        textStyle: {
            color: '#333',
            align: 'center',
            fontSize: 16,
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        show: false,
        data: legendName,
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '50%',
            center: ['50%', '45%'],
            data: matData(),
            label: {
                normal: {
                    show: false
                }
            },
            color: fucolor,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
