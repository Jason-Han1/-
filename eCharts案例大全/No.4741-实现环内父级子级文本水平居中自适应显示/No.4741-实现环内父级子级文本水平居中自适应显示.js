option = {
    title: {
        text: '新卡数',
        subtext: 7789,
        textStyle: {
            color: '#2F396C',
            fontSize: 20
        },
        subtextStyle: {
            fontSize: 40,
            color: '#8494A7',
        },
        top: '46%',
        left: "40%",
        textAlign: 'center',
        itemGap: 15,
        textVerticalAlign: 'middle'
        // 另一种方法只需下面两行代码
        // textAlign: 'center',
        // x: '30%',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color: ['#3190F6', '#FF5B5C', '#53c9c8', '#489ee5', '#436fce'],
    legend: { // 右侧注释
        show: true,
        top: "46%",
        left: '80%',
        data: ["新优人数 9(90.0%)", "新业人数 1(10.0%)"],
        itemWidth: 20,
        itemHeight: 20,
        icon: "circle",
        itemGap: 25,
        textStyle: {
            fontSize: 12,
            color: '#b0b9cb'
        },
        // formatter: function(name) {
        //     return name + ' ' + tarObj[name]
        //     // return "{title|" + name + "}\n{value|" + (objData[name].value) + "人}"
        // },
    },
    series: 
    [{
            name: '新卡数',
            type: 'pie',
            radius: ['50%', '70%'],
            center: ["40%", "50%"],
            data: [
                {"name": "新优人数 9(90.0%)", "value": "9"},
                {"name": "新业人数 1(10.0%)", "value": "1"}
            ],
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: { // 配置 白边
                normal: {
                    borderWidth: 1,
                    borderColor: '#FFF'
                }
            }
    } ]
};