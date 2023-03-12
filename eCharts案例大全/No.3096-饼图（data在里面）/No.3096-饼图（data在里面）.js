option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: [
      {
        type: "scroll",
        orient: 'vertical',
        left: '76%',
        align: 'auto',
        top: '45%',
        icon: "bar",
        itemWidth: 15,             // 图例图形宽度
        itemHeight: 15,
        itemGap: 20,
        textStyle: {
          color: "#333",
        },
        data: ['搜索引擎', '直达', '营销广告'],
        x: "left"
      },
      {
        type: "scroll",
        orient: 'vertical',
        left: '86%',
        align: 'auto',
        top: '45%',
        icon: "bar",
        itemWidth: 15,             // 图例图形宽度
        itemHeight: 15,
        itemGap: 20,
        textStyle: {
          color: "#333",
        },
        data: ['百度', '火狐', '邮件营销', '谷歌'],
        x: "right",
      }
    ],
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
                show: false,
                // position: 'inner',
                // fontSize: 14,
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return ["#2ec7c9", "#b6a2de", "#5ab1ef"][params.dataIndex]
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1548, name: '搜索引擎'},
                {value: 775, name: '直达'},
                {value: 679, name: '营销广告', selected: true}
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['45%', '60%'],
            labelLine: {
                show: false,
            },
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return ["#ffb980","#FFEA01", "#B8D07C",'#ff8f92'][params.dataIndex]
                    }
                }
            },
            data: [
                {value: 1048, name: '百度'},
                {value: 335, name: '火狐'},
                {value: 310, name: '邮件营销'},
                {value: 251, name: '谷歌'}
            ]
        }
    ]
};