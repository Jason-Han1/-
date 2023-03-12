
// 动态改变折线图颜色， 点击圆点即可打开颜色选择器

var colors = ['#fad0e4','#55d6f3'];

option = {
    title: {
        text: '动态改变图表颜色'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        name:'销售量'
    },
    series: [{
        name:'超市A',
        id:'0',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310],
        lineStyle: {
            width: 5,
            color:colors[0],
        },
        itemStyle:{
            color:colors[0],
        },
        symbolSize: 12,
    },{
        name:'超市B',
        id:'1',
        type: 'line',
        data: [180, 150, 111, 150, 210, 200, 189],
        lineStyle: {
            width: 5,
            color:colors[1],
        },
        
        symbolSize: 12,
    }]
};
init();
function init() {
    
    //浏览器自带标签 color
    $("#chart-panel").append(" <input id='color_0' type='color' value='"+colors[0]+"' style='display: none' />");
    $("#chart-panel").append(" <input id='color_1' type='color' value='"+colors[1]+"' style='display: none' />");

    //添加点击事件
    myChart.on("click", function (params) {
        var id = params.seriesIndex;
        var inputId = 'color_'+id;
        $("#" + inputId).click();
        $("#" + inputId).change(function () {
            var cl = $(this).val();
            var series_n = myChart.getOption().series;
            console.info(series_n);
            $.each(series_n, function (i, v) {
                if (v.id == id) {
                    v.lineStyle.color = cl;
                }
            });
            myChart.setOption({
                series: series_n
            });
            $("#" + inputId).val(cl);
        });
    
    });
}