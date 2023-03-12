app.title = '断线图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
          formatter: function (params) {
            var tar;
            var tar2;
            if ((params[0].value != '-')||(params[2].value != '-')) {
                tar = params[0];
                tar2=params[2];
            }
            else {
                tar = params[1];
            }
            return tar.name + '<br/>' + params[1].seriesName + ' : ' + tar.value
            +'<br/>' + tar2.seriesName + ' : ' + tar2.value;
        }
    },
    toolbox: {
        feature: {
            
            saveAsImage: {}
        }
    },
    // legend: {
    //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    // },
    legend: {
        data:['目标值','实际值'],
        itemHeight:4
       
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
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    barGap:0,
    series : [
        {
            name:'目标1值',
            type:'bar',
            barWidth:"100%",
            stack: '广告',
            data:[120, 120, 120, 140, 140, 140, 210],
            itemStyle:{
                color:"transparent"
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
        },
        {
            name:'目标值',
            type:'bar',
            barWidth:"100%",
            stack: '广告',
           
            data:[1, 1, 1, 1, 1, 1, 1]
        },
        {
            name:'实际值',
            type:'line',
            data:[60,30,79,100,200,300,100]
        }
    ]
};