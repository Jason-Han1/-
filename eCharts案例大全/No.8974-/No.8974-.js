var data1 = [123,456,123,45,678,456];
var data2 = [234,451,356,234,566,342];
var color = ['#3398DB',"#eded12"];
option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis :[ 
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },{
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: false
    }],
    yAxis : [
        {
            type : 'value',
             show: false,
        },
        {
            type : 'value',
            show: false,
        },
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '10%',
            data:data1,
            yAxisIndex: 1,
            xAxisIndex: 1,
            itemStyle: {
                color: color[0]
            },
            z:3
        },{
            name:'直接访问',
            type:'bar',
            barWidth: '10%',
            data:[1,1,1,1,1,1],
            itemStyle: {
                color:"#ddd"
            }
        },
        {
            name:'直接访问',
            type:'bar',
            barWidth: '10%',
            data:data2,
            yAxisIndex: 1,
            xAxisIndex: 1,
            itemStyle: {
                color: color[1]
            },
            z:3
        },{
            name:'直接访问',
            type:'bar',
            barWidth: '10%',
            data:[1,1,1,1,1,1],
            itemStyle: {
                color:"#ddd"
            }
        }
    ]
};