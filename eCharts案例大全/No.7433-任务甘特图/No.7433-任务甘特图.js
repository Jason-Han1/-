option = {
    title: {
        text: '筹开任务全景计划--冠寓成都时代店',
        x:'center',
        y:'top',
        textAlign:'left'
    },

    xAxis: {
        type: 'time' 
    },

    yAxis: {

        data: [
            'CO/CS到岗铺排',
            '地图上线',
            '营业执照办理',
            '样板间开放',
            '调研分析',
            'KA计划铺排',
            '营销费用计划',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            'CO/CS到岗铺排',
            '地图上线',
            '营业执照办理',
            '样板间开放',
            '调研分析',
            'KA计划铺排',
            '营销费用计划',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
            '任务xxxxxx',
        ]

    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            var res = params[0].name + "</br>"
            var date0 = params[0].data;
            var date1 = params[1].data;
            date0 = date0.getFullYear() + "-" + (date0.getMonth() + 1) + "-" + date0.getDate();
            date1 = date1.getFullYear() + "-" + (date1.getMonth() + 1) + "-" + date1.getDate();
            res += params[0].seriesName + "~" + params[1].seriesName + ":</br>" + date0 + "~" + date1 + "</br>"
            console.log(params[0]);
            return res;
        }
    },
    series: [{
            name: '开始时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [
                new Date("2020/09/2"),
                new Date("2020/09/3"),
                new Date("2020/09/4"),
                new Date("2020/09/5"),
                new Date("2020/09/6"),
                new Date("2020/09/7"),
                new Date("2020/09/8"),
                new Date("2020/09/9"),
                new Date("2020/09/10"),
                new Date("2020/09/11"),
                new Date("2020/09/12"),
                new Date("2020/09/13"),
                new Date("2020/09/14"),
                new Date("2020/09/15"),
                new Date("2020/09/16"),
                new Date("2020/09/17"),
                new Date("2020/09/18"),
                new Date("2020/09/19"),
                new Date("2020/09/20"),
                new Date("2020/09/21"),
                new Date("2020/09/22"),
                new Date("2020/09/23"),
                new Date("2020/09/24"),
                new Date("2020/09/25"),
                new Date("2020/09/26"),
                new Date("2020/09/27"),
                new Date("2020/09/28"),
                new Date("2020/09/29"),
            ]
        },

        {
            name: '结束时间',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    color: '#20B2AA'
                }
            },
            data: [
                new Date("2020/09/12"),
                new Date("2020/09/13"),
                new Date("2020/09/14"),
                new Date("2020/09/15"),
                new Date("2020/09/16"),
                new Date("2020/09/17"),
                new Date("2020/09/18"),
                new Date("2020/09/19"),
                new Date("2020/09/20"),
                new Date("2020/09/21"),
                new Date("2020/09/22"),
                new Date("2020/09/23"),
                new Date("2020/09/24"),
                new Date("2020/09/25"),
                new Date("2020/09/26"),
                new Date("2020/09/27"),
                new Date("2020/09/28"),
                new Date("2020/09/29"),
                new Date("2020/09/30"),
                new Date("2020/10/01"),
                new Date("2020/10/02"),
                new Date("2020/10/03"),
                new Date("2020/10/04"),
                new Date("2020/10/05"),
                new Date("2020/10/06"),
                new Date("2020/10/07"),
                new Date("2020/10/08"),
                new Date("2020/10/09"),
            ]
        }
    ]
};