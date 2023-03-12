function getRandomNumberByRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start)
}

function getData(){
    var list=[];
    for(var i=0;i<300;i++){
        let item=[];
        var a = getRandomNumberByRange(0,30)+Math.random();
        var b =0;
        if(a>1&&a<2){
          b = getRandomNumberByRange(0,800);  
        }else if(a>4&&a<8){
          b = getRandomNumberByRange(0,200); 
        }else if(a>9&&a<12){
          b = getRandomNumberByRange(0,50); 
        }else{
          b = getRandomNumberByRange(0,20); 
        }
        item[0]=a;
        item[1]=b;
        list.push(item);
        console.log(item);
    }
    return list;
}
option = {
    legend: {},
    tooltip: {},
    xAxis: [
        {
            type: 'value', 
            gridIndex: 0,
            name: '时间',
            nameGap: 30,
            nameLocation: 'middle',
            min:0,
            max:30,
            interval:5,
            axisLabel: {
                formatter: '{value}m'
            },
            axisLine:{
                // show:false,
                onZero:false
            },
            minorTick:{
                show:false,
                splitNumber:10,
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd'
                }
            },
            position:'bottom',
        },
        {
            type: 'value', 
            gridIndex: 1,
            name: '时间',
            nameGap: 36,
            nameLocation: 'middle',
            //min:0,
            max:30,
            interval:5,
            axisLine: {
                // show:false,
                onZero: false
            },
            axisLabel: {
                formatter: '{value}m'
            },
            minorTick:{
                show:false,
                splitNumber:10,
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: '#ddd'
                }
            },
            position:'bottom',
            boundaryGap:[0,0],
        }
    ],
    yAxis: [
        {
            gridIndex: 0,
            name: '电压KV',
            nameGap: 30,
            nameLocation: 'middle',
        },
        {
            gridIndex: 1,
            name: '放电量pC',
            nameGap: 30,
            nameLocation: 'middle',
        }
    ],
    grid: [
        {bottom: '55%'},
        {top: '55%'}
    ],
    series: [
        // These series are in the first grid.
        {
            type: 'line', 
            xAxisIndex:0, 
            smooth:true,
            symbol:'none',
            lineStyle: {
                color: 'rgb(43, 122, 186)',
            },
            data:[
                [0,0],[1,-15],[2,15],[3,-14.5],[4,14.5],[5,-14],[6,14],[7,-13.5],[8,13.5],[9,-13],
                [10,13],[11,-12.5],[12,12.5],[13,-12],[14,12],[15,-11.5],[16,11.5],[17,-11],[18,11],[19,-10.5],
                [20,10.5],[21,-10],[22,10],[23,-9.5],[24,9.5],[25,-9],[26,9],[27,-8.5],[28,8.5],[29,-8],[30,8]
            ]
            
        },
        // These series are in the second grid.
        {
            type: 'bar', 
            xAxisIndex: 1, 
            yAxisIndex: 1,
            barMinWidth:3,
            barMaxWidth:5,
            itemStyle: {
                color: 'rgb(43, 122, 186)',
            },
            data:getData(),
            
        },
    ]
};