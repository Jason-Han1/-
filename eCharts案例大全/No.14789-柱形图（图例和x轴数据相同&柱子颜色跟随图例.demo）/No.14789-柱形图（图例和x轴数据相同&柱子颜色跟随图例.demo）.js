var names = ['1', '2', '3', '4', '5'];
var values = [
    {
        value:220,
        itemStyle: {
            normal: {
                color:'#a2f2f2'
            }
        }
    },{
        value:220,
        itemStyle: {
            normal: {
                color:'#0aacff'
            }
        }
    },{
        value:220,
        itemStyle: {
            normal: {
                color:'#0ab120'
            }
        }
    },{
        value:220,
        itemStyle: {
            normal: {
                color:'#e50ee6'
            }
        }
    },{
        value:220,
        itemStyle: {
            normal: {
                color:'#e6cf1e'
            }
        }
    }];
var color=['pink','#a2f2f2','#0aacff','#0ab120','#e50ee6','#e6cf1e'];
option = {
    color:color,
    title: {
        text: '柱形图----\n--->图例和x轴数据相同&柱子颜色跟随图例.demo'
    },
    legend: {
        show: true,
        data: names
    },
    xAxis: {
        data: [1, 2, 3, 4, 5]
    },
    yAxis: {},
    series: [{
        type: 'bar',
        itemStyle:{
          color:'green'  
        },
        data: values
    }, {
        type: 'scatter',
        data: [],
        name: '1'
    }, {
        type: 'scatter',
        data: [],
        name: '2'
    }, {
        type: 'scatter',
        data: [],
        name: '3'
    }, {
        type: 'scatter',
        data: [],
        name: '4'
    }, {
        type: 'scatter',
        data: [],
        name: '5'
    }]
};
myChart.on('legendselectchanged', function(params) {
    var option = {};
    console.log(params);
    var newNames = [];
    var newValues = [];
    for(var i = 0; i < names.length ;i ++){
        if(params.selected[names[i]] == true){
            newNames.push(names[i]);
            newValues.push(values[i]);
        }
    }
    
    myChart.setOption({
        xAxis: {
        data: newNames
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: newValues
    }, {
        type: 'scatter',
        name: '1'
    }, {
        type: 'scatter',
        data: [],
        name: '2'
    }, {
        type: 'scatter',
        data: [],
        name: '3'
    }, {
        type: 'scatter',
        data: [],
        name: '4'
    }, {
        type: 'scatter',
        data: [],
        name: '5'
    }]
    })
});