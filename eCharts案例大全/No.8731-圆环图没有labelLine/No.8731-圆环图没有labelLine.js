
option = {
    backgroundColor: 'rgba(0,0,0,1)',
    // tooltip: {
    //     trigger: 'item',
    //     formatter: "{b} : {d}% <br/> {c}"
    // },
    title: {
        text: '8',
        subtext: '万吨',
        x: 'center',
        y: '43%',
        textStyle: {
            fontSize: 80,
            fontWeight: 'bolder',
            color: 'orange',
        },
        subtextStyle: {
            fontSize: 28,
            fontWeight: 'normal',
            align:"center",
            color:'white'
        },
    },
    series: [{
        type: 'pie',
        radius: ['140', '180'],
        center: ['50%', '50%'],
        // 实际代码中写在这里不会触发,要写入 itemStyle 中
        color:function(params){
            console.log(params.value);
            var colorList = ['#1ed5ed', '#1ea8ed', '#1e80ed', '#ffe100','#1eede2'];
            return (params.value)?colorList[params.dataIndex]:"white";
        },
        // color: ['#1ed5ed', '#1ea8ed', '#1e80ed', '#ffe100','#1eede2','#1eede2','#1eede2'],
        data: [
            {
                value: 25,
                name: '5G智慧医疗'
            },
            {
                value: 25,
                name: '人工智能医疗'
            },
            {
                value: 33,
                name: '远程医疗'
            },
            {
                value: 17,
                name: '医疗云计算'
            },
            {
                value: 0,
                name: '移动健康应用'
            },
            {
                value: 0,
                name: '移动健康应用1'
            },
            {
                value: 0,
                name: '移动健康应用1'
            }
        ],
        labelLine: {
            normal: {
                length: 10,
                length2: 230,
                show: true,
                lineStyle: {
                    width: 1,
                }
            },
            emphasis: {
                show: false,
            }
        },
        label: {
            // 有两种状态,一种是normal,一种高亮 emphasis
            normal: {
                padding: [0, -220, 0, -220],
                // 备注一下,b是数据项名称也就 data.name, c是数据项数值也就是data.value, d是数据项百分比
                // formatter: '{b|{b}}\n{hr|}\n{c|{c}%}',
                // hr是下底线
                // formatter:'{d|{d}%}\n{b|{b}}',
                formatter:'{b|{b}} {d|{d}%}\n\n\n\n',
                // 值得注意下, 不在这里设定 color, 系统也会自动将色环颜色
                // 赋值给文本,不需要额外指定.
                // 额外指定之后 emphasis 就会出现问题
                rich: {
                    b: {
                        fontSize: 32,
                        color: 'white',
                        align: 'center',
                        padding: 0,
                    },
                    // hr: {
                    //     borderColor: function(){
                    //         return "red";
                    //     },
                    //     width: '100%',
                    //     borderWidth: 4,
                    //     height: 1,
                    // },
                    d: {
                        fontSize: 32,
                        align: 'left',
                        padding: 0,
                    }
                },
            },
            emphasis: {
                formatter:'{d|{d}%}\n{b|{b}}\n\n{hr|}',
                rich: {
                    b: {
                        fontSize: 32,
                        color: 'white',
                        align: 'center',
                        padding: 0,
                    },
                    hr: {
                        borderColor: 'yellow',
                        width: '100%',
                        borderWidth: 4,
                        height: 1
                    },
                    d: {
                        fontSize: 32,
                        align: 'left',
                        padding: 0,
                    }
                }
            }
        }
    }
    
    ]
};

