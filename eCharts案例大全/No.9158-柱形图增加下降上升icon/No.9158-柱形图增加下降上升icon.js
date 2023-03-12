app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
            
            
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 360, 330, 220],
            markPoint: {
        formatter: function(params){
            return '<img src="' 
                    + params.data.symbol.replace('image://', '')
                    + '"/>';
        },
        symbolSize:'30',
        data: [
            {coord: [0,10],symbolOffset:[0,-20],symbol:'image://http://pic.51yuansu.com/pic2/cover/00/44/03/5813a933373d4_610.jpg'},
            {coord: [1,10],symbolOffset:[0,-120],symbol:'image://http://pic.51yuansu.com/pic2/cover/00/44/03/5813a933373d4_610.jpg'},
            {coord: [2,20],symbolOffset:[0,-220],symbol:'image://http://pic.51yuansu.com/pic2/cover/00/44/03/5813a933373d4_610.jpg'},
            {coord: [3,20],symbolOffset:[0,-320],symbol:'image://http://pic.51yuansu.com/pic2/cover/00/44/03/5813a933373d4_610.jpg'},
            {coord: [4,20],symbolOffset:[0,-370],symbol:'image://../../../static/img/bottom.png'},
            {coord: [5,20],symbolOffset:[0,-370],symbol:'image://../../../static/img/top.png'},
            {coord: [6,20],symbolOffset:[0,-250],symbol:'image://../../../static/img/bottom.png'},
        ],
        label:{
            show:true,
            position:'middle'
        }
    }
        }
    ]
};
