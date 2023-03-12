option = {
    title: {
        text: '堆叠柱状图label显示总数'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    legend:{
        
    },
    yAxis: {},
    series: [{
        name: 's1',
        type: 'bar',
        stack: '1',
        data:[220, 182, 191, 234, 290, 330, 310],
        label: {
            show: false,
            position: 'top',
            color: '#333',
            formatter: function(params){
                params.value
            }
        }
    },{
        name: 's2',
        type: 'bar',
        stack: '1',
        data:[220, 182, 191, 234, 290, 330, 310],
        label: {
            show: false,
            position: 'top',
            color: '#333',
            formatter: function(params){
                params.value
            }
        }
    }]
};

var series = option["series"];
var fun = function (params) {
    var datavalue = 0;
    for (var i = 0; i < series.length; i++) {
        datavalue += series[i].data[params.dataIndex]
    }
    return datavalue;
}

if (series[series.length - 1]) {
    series[series.length - 1]["label"]["show"] = true;
    series[series.length - 1]["label"]["formatter"] = fun;
}

myChart.on("legendselectchanged", function(obj){
    var b = obj.selected,//图例的选中情况，key是图例的name，value是true或false
        d=[];//选中的series的index列表
    for(var key in b){
        if(b[key]){//选中的图例
            for(var i = 0; i < series.length; i++){
                var changename = series[i]["name"];
                if(changename == key){
                    d.push(i);//选中的series的index列表
                }
            }
        }
    }
    
    var fn = function(params){
        var datavalue = 0;
        for(var i = 0; i < d.length; i++){
            for(var j =0; j < series.length; j++){
                if(d[i] == j){
                    datavalue += series[j].data[params.dataIndex];
                }
            }
        }
        return datavalue;
    }
    
    for(var i = 0; i < series.length; i++){
        series[i]["label"]["show"] = false;
    }
    
    var l_s = series[d[d.length-1]];//选中的series的最后一个
    l_s["label"]["show"] = true;//显示label
    l_s["label"]["formatter"] = fn;//绑定formatter
    
    myChart.setOption(option)
})



