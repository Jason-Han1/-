var data = [
[0, 10, 23, '定额'], 
[12, 22, 12, '定额'],
[24, 34, 7, '定额'],
];

var data1 = [
[2, 8, 15, '实际'], 
 [14, 20, 22, '实际'], 
[26,32, 17, '实际'],
];

data1 = echarts.util.map(data1, function (item, index) {
    if(data1[index][2] > data[index][2]) {
        return {
            value: item,
            itemStyle: {
                normal: {
                    color: "red",
                    opacity:0.8,
                }
            }
        };
    }else{
        return {
            value: item,
            itemStyle: {
                normal: {
                    color: "#74c6e1",
                    opacity:0.8,
                }
            }
        };
        
    }
    
});

data = echarts.util.map(data, function (item, index) {
    return {
        value: item,
        itemStyle: {
            normal: {
               color: "#3b87ed",
               opacity:0.2,
            }
        }
    };
});



function renderItem(params, api) {
    var yValue = api.value(2);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();

    return {
        type: 'rect',
        shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
        },
        style: style
    };
}

option = {
    title: {
        text: '定额&实际',
        left: 'center'
    },
    grid:{
        show:true,
        backgroundColor: '#948a8a20',
    },
    
    tooltip: {
    },
    legend: { 
        icon:'roundRect',
        left:'right'
    },
    xAxis: [{
        scale: true,
        splitLine: {
            show:false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        }
      
    },{
        scale: true,
         data: ['Mon', 'Tue', 'Wed']
    }],
    yAxis: {
        
    },
    series: [{
        name:'实际',
        z:20,
        type: 'custom',
        renderItem: renderItem,
        dimensions: ['from', 'to', 'profit'],
        encode: {
            x: [0, 1],
            y: 2,
            tooltip: [2],
            itemName: 3
        },
        data: data1
    },{
        name:'定额',
        type: 'custom',
        renderItem: renderItem,
        dimensions: ['from', 'to', 'profit'],
        encode: {
            x: [0, 1],
            y: 2,
            tooltip: [2],
            itemName: 3
        },
        data: data
    },]
};

