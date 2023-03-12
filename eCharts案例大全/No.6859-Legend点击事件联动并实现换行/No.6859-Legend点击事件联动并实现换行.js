var suffix_bar = '_bar';
var suffix_line = '_line';
var dataSource = [
    ['x','first_bar','first_line','second_bar','second_line','third_bar','third_line'],
    ['Mon',150,180,200,100,30,230],
    ['Tue',250,80,120,140,50,170],
    ['Wed',100,60,210,200,70,180],
    ['Thu',120,70,310,400,50,190],
    ['Fri',110,50,40,70,80,240],
    ['Sat',130,160,80,20,120,130],
    ['Sun',200,140,130,70,200,440],
    
];
var selected = {
    'first_bar':true,
    'first_line':true,
    'second_bar':true,
    'second_line':true,
    'third_bar':false,
    'third_line':false
};
//监听legend改变事件
myChart.on('legendselectchanged', function (params) {
    var another = '';
    var name = params.name;
    if(name.slice(-suffix_bar.length)==suffix_bar){
        another = name.slice(0,name.length-suffix_bar.length);
        another += suffix_line;
    }else if(name.slice(-suffix_line.length)==suffix_line){
        another = name.slice(0,name.length-suffix_line.length);
        another += suffix_bar;
    }
    //派发联动legend改变action
    if(selected[another]){
        selected[name]=false;
        selected[another]=false;
        myChart.dispatchAction({
            type: 'legendUnSelect',
            // 图例名称
            name: another
        })
    }else{
        selected[name]=true;
        selected[another]=true;
        myChart.dispatchAction({
            type: 'legendSelect',
            // 图例名称
            name: another
        })
    }
});
option = {
    title: {
        text: 'Legend点击事件联动并实现换行'
    },
    legend:{
        selected:selected,
        //换行
        orient:'vertical',
        height:'40px',
        padding:[0,0,20,0],
    },
    xAxis: {
        type: 'category',
    },
    dataset:{
        source:dataSource
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {   
            name:'first_bar',
            type: 'bar',
            color:'#5bc0ee'
        },
        {   
            name:'first_line',
            type: 'line',
            color:'#5bc0ee'
        },
        {   
            name:'second_bar',
            type: 'bar',
            color:'#f5a074'
        },
        {   
            name:'second_line',
            type: 'line',
            color:'#f5a074'
        },
        {   
            name:'third_bar',
            type: 'bar',
            color:'#b981f2'
        },
        {   
            name:'third_line',
            type: 'line',
            color:'#b981f2'
        }
    ]
};