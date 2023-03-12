
option = {
    backgroundColor:'#EFEFEF',
    title: {
        text: 'Shape Example'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Example']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'category',
        data:[120, 132, 101, 134, 90, 230, 210]
    },
    visualMap:{
        show:false,
        categories:[1,2,3,4,5,6,7],
        selected:{
            2:false,
            3:false,
            4:false,
        },
        inRange:{
            symbolSize:10,
            color:{
                1:'#3BAFFF',
                '':'#3199ee',
            },
            symbol:{
                1:'circle',
                2:'triangle',
            }
        },
        outOfRange:{
            symbolSize:10,
            color:'red',
            symbol:{
                2:'triangle',
                3:'diamond',
                4:'emptyCircle'
            },
        },
    },
    series: [
        {
            name:'Example',
            type:'line',
            color:'#3BAFFF',
            symbol:'rect',
            symbolSize:10,
            data:[[0,1,1],[1,1,2],[2,1,3],[3,1,4],[4,1,5],[5,1,6],[6,1,7]]
        },
       
    ]
};
