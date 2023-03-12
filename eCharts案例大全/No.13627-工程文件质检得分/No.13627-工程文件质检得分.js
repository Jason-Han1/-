option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}分"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '文件质检',
            type: 'gauge',
            detail: {formatter:'{value}分'},
            data: [{value: 0, name: '文件\n\nchr_cat_mod_master_v0004.ma\n\n质检得分'}]
        }
    ]
};

setInterval(function () {
    if(option.series[0].data[0].value < 92){
        option.series[0].data[0].value = option.series[0].data[0].value+1;
        myChart.setOption(option, true);
    }
},100);
