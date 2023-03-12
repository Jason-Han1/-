 var option = {
        title : {
            text: 'A公司员工吃水果统计表',
            subtext: '多吃水果有益身体健康'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b}: {c}"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : false,
        series : [
            {
                name:'矩形图',
                type:'treemap',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: "{b}"
                        },
                        borderWidth: 1
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },
                data:[
                    {
                        name: '苹果',
                        value: 6
                    },
                    {
                        name: '香蕉',
                        value: 4
                    },
                    {
                        name: '猕猴桃',
                        value: 4
                    },
                    {
                        name: '梨',
                        value: 2
                    },
                    {
                        name: '橙子',
                        value: 2
                    },
                    {
                        name: '桔子',
                        value: 1
                    },
                    {
                        name: '西瓜',
                        value: 1
                    }
                ]
            }
        ]
    };