option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [
        {
            name: '访问来源',
            color:['#83CB9D','#3598F1','#FEC756',],
            type: 'pie',
            selectedMode: 'single',
            radius: ['20%', '40%'],

            label: {
                position: 'inner',
                formatter: '{d}%',
            },
            labelLine: {
                show: false
            },
             borderWidth:3,
             itemStyle: { //图形样式
                normal: {
                    borderColor: '#ffffff',
                    borderWidth: 2,
                },
            },
            data: [
                {value: 30, name: '直达'},
                {value: 20, name: '营销广告'},
                {value: 50, name: '搜索引擎'}
            ]
        },
        {
            name: '访问来源',
            color:['#90D6FF','#3FA2E8','#85C3FE','#5EBADE','#E6AA40','#FDC572','#EEC75E','#E6AA40'],
            type: 'pie',
            radius: ['40%', '55%'],
              labelLine: {
                show: false
            },
           
            label: {
                show: false,
                position: 'center'
            },
             itemStyle: { //图形样式
                normal: {
                    borderColor: '#ffffff',
                    borderWidth: 2,
                },
            },
            data: [
                {value: 30, name: '直达'},
                {value: 8, name: '邮件营销'},
                {value: 5, name: '联盟广告'},
                {value: 5, name: '视频广告'},
                {value: 2, name: '百度'},
                {value: 20, name: '谷歌'},
                {value: 15, name: '必应'},
                {value: 15, name: '其他'}
            ]
        }
    ]
};