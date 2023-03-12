option ={
    legend: {
        data:['规划', '开业', '营建', '选址']
    },
    xAxis: {
        type: 'category',
        data: ['规划', '开业', '营建', '选址']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name:'规划',
        barGap:'-100%', //设置-100%为重叠
        // stack: 'a',  //stack相同可以堆叠
        data: [120,'-','-','-'],
        type: 'bar'
    },{
        name:'开业',
        // stack: 'a',
        data: ['-',50,'-','-'],
        type: 'bar'
    },{
        name:'营建',
        // stack: 'a',
        data: ['-','-',30,'-'],
        type: 'bar'
    },{
        name:'选址',
        // stack: 'a',
        data: ['-','-','-',80],
        type: 'bar'
    }]
};