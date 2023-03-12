


app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
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
            data : ['201801','201901','201802','201902','201803','201903']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
     
        {
            name:'邮件营销',
            type:'bar',
            barGap: '10%',
            barWidth: '20%',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            label: {
                normal: {
                    show: true,
                    position: ['0%', '-60%'],
                    formatter: function (params) {
                        // let endStr = '';
                        // endStr += params[0].axisValue + '<br />';
                        // params.map( val => {
                        //     endStr += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + val.color + ';"></span>' + val.seriesName + ':' + val.value + '亿元'+ '<br />';
                        // });
                        // return endStr
                        console.log(params,'params')
                        if(params.name === '201901' || params.name === '201902'  || params.name === '201903'){
                            return params.data.tongBi
                        }else {
                            return ''
                        }
                    },
                }
            },
            data:[232, {value:150, tongBi: '10%'}, 201, {value:150, tongBi: '10%'}, 154, {value:150, tongBi: '10%'}]
        },
       
    ]
};
