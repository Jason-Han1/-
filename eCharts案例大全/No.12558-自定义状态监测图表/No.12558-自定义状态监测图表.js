let zeroTime = new Date(new Date(new Date().toLocaleDateString()).getTime());
let beforeSevenTime = new Date(zeroTime.getTime() - 7 * 24 * 60 * 60 * 1000);
const hourOfMs = 3600000;
let Chart = {
    Config: {
        y_font_color: '#60F194',
        x_font_color: '#fff',
        y_line_color: '#184483',
        x_line_color: '#184483',
        split_line_color: 'rgba(0,53,115,0.6)'
    },
    createRect(row) {
        let types = [{
                id: 'running',
                name: '正在运行',
                color: '#7FFFCA'
            }, //一个点数据
            {
                id: 'error',
                name: '发生故障',
                color: '#FFF59D'
            },
            {
                id: 'stop',
                name: '已经停止',
                color: '#FF7790'
            }
        ];

        //创建指定类型
        let typeItem = null;
        for (let i = 0; i < types.length; i++) {
            if (types[i].id === row.status) {
                typeItem = types[i];
                break;
            }
        }
        let start = row.readTime + row.duration;

        return {
            name: typeItem.name,
            value: [
                row.index,
                row.readTime,
                start,
                row.duration
            ],
            itemStyle: {
                normal: {
                    color: typeItem.color
                }
            }
        };
    },
    categories: ['3#出水泵', '2#出水泵', '1#出水泵', '4#提升泵', '3#提升泵', '2#提升泵', '1#提升泵', '2#细格栅机', '1#细格栅机', '2#粗格栅机', '1#粗格栅机']
};
let datas = [{
        index: 1,
        status: "stop",
        duration: hourOfMs * 8,
        readTime: beforeSevenTime.getTime() + hourOfMs * 3
    },
    {
        index: 1,
        status: "stop",
        duration: hourOfMs * 8,
        readTime: beforeSevenTime.getTime() + hourOfMs * 24
    },
    {
        index: 2,
        status: "stop",
        duration: hourOfMs * 2,
        readTime: beforeSevenTime.getTime() + hourOfMs * 4
    },
    {
        index: 3,
        status: "running",
        duration: hourOfMs * 5,
        readTime: beforeSevenTime.getTime() + hourOfMs * 5
    },
    {
        index: 4,
        status: "running",
        duration: hourOfMs * 12,
        readTime: beforeSevenTime.getTime() + hourOfMs * 16
    },
    {
        index: 4,
        status: "running",
        duration: hourOfMs * 8,
        readTime: beforeSevenTime.getTime() + hourOfMs * 72
    },
    {
        index: 4,
        status: "error",
        duration: hourOfMs * 8,
        readTime: beforeSevenTime.getTime() + hourOfMs * 80
    },
];
let series_data = [];
datas.forEach(row => {
    let rect = Chart.createRect(row);
    series_data.push(rect);
});

console.log(series_data);

option = {
    tooltip: {
        formatter: function(params) {
            return params.marker + params.name; // + ': ' + params.value[3] + ' ms';
        }
    },
    grid: {
        // height: 200,
        top: '5%',
        bottom: '15%',
        right: '5%',
        left: '13%'
    },
    xAxis: {
        //开始于7天之前
        min: beforeSevenTime.getTime(),
        //终止于今天0点
        max: zeroTime.getTime(),
        interval: 1000 * 60 * 60 * 12, //间隔是12小时
        axisLabel: {
            formatter: function(val, index) {
                //注意，val就是时间戳,是x轴的范围取值
                //从0点开始到7天
                let date = new Date(val);
                return (date.getMonth() + 1) + "/" + date.getDate() + "\n" + date.getHours() + ":" + date.getMinutes();
            },
            textStyle: {
                color: Chart.Config.x_font_color,
                fontSize: '70%'
            }
        },
        axisLine: {
            lineStyle: {
                color: Chart.Config.x_line_color
            }
        },
        splitLine: {
            lineStyle: {
                color: Chart.Config.split_line_color,
                width: 1,
                type: 'solid'
            }
        }
    },
    yAxis: {
        data: Chart.categories,
        axisLabel: {
            textStyle: {
                color: '#5EF0FE',
                fontSize: '70%'
            }
        },
        axisLine: {
            lineStyle: {
                color: Chart.Config.y_line_color
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: Chart.Config.split_line_color,
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        type: 'custom',
        //创建对象,每个data都会调用这个(发现是比较费时间的)
        renderItem: function(params, api) {

            //分类维度
            let categoryIndex = api.value(0);

            //转换获取到开始点坐标（x，y）;
            let start = api.coord([api.value(1), categoryIndex]);
            //转换获取终止点的坐标
            let end = api.coord([api.value(2), categoryIndex]);

            //获取一个高度调整值，具体的可以调整
            let height = api.size([0, 1])[1] * 0.9;

            console.log(api.value);
            //创建一个方块
            let rectShape = echarts.graphic.clipRectByRect({
                x: start[0],
                y: start[1] - height / 2,
                width: end[0] - start[0],
                height: height
            }, {
                x: params.coordSys.x,
                y: params.coordSys.y,
                width: params.coordSys.width,
                height: params.coordSys.height
            });

            return rectShape && {
                type: 'rect',
                shape: rectShape,
                style: api.style()
            };
        },

        //此处必须添加，否则方块显示不出来
        encode: {
            x: [1, 2],
            y: 0
        },
        //自定义的需要至少放一条数据进去，否则就会出现错误
        data: series_data
    }]
};