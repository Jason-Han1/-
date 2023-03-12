var week = [];
var stand = [];
function get_week(){
    var i = 0;
    while(i<40){
        stand.push(60+0.2*i);
        i += 1;
        week.push('周'+i);
        
    }
}
get_week();
console.log(week);
console.log(stand);

var real = {1:60, 2:58};


option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
    label:{
        show:true,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: week,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: stand
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: Object.values(real),
        },
      
    ]
};
