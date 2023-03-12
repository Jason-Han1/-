// echarts 3
app.title = '环形图';
var $legendData = ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'];
var $legendSelected = {'直接访问':false};
var $seriesData = [
    {value:335, name:'直接访问'},
    {value:310, name:'邮件营销'},
    {value:234, name:'联盟广告'},
    {value:135, name:'视频广告'},
    {value:1548, name:'搜索引擎'}
];


var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:$legendData,
            selected:$legendSelected

        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:$seriesData
            }
        ]
    };
myChart.on('legendselectchanged', function (params) {
    if (!$seriesData || $seriesData.length <= 0) return
    var legendData = []
    var seriesData = []
    var selected = params.selected;
    var selectedMode = false;
    for (var i in params.selected) {
        if( params.selected[i] && (i != '其他' && i != '全部')){
            selectedMode = true;
        }
    }
    console.log('params');
    console.log(params);


    var v = null;
    for (var i = 0; i < $seriesData.length; i++) {
        var item = $seriesData[i]
        console.log(params.selected[item.name]);
        if( !params.selected[item.name] ){
            if( v === null ){
                v = item.value;
            }else{
                v += item.value;
            }
        }
        if(item.name == '其他' || item.name == '全部'){
            continue;
        }

        legendData.push(item.name)
        seriesData.push({ value: item.value, name: item.name, })
    }
    
    if( v !== null ){
        if( !selectedMode ){
            legendData.push('全部');
            selected['全部'] = true;
            seriesData.push({ value: v, name: '全部'})
        }else{
            legendData.push('其他');
            selected['其他'] = true;
            seriesData.push({ value: v, name: '其他'})
        }
    }
    console.log(legendData);
    console.log(seriesData);

    var $option = option
    $option.legend.data = legendData
    $option.legend.selected = selected
    //$option.legend.selectedMode = selectedMode
    $option.series[0].data = seriesData
    myChart.clear()

    console.log(option);
    myChart.setOption(option)

});