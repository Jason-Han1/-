option = {
    backgroundColor: '#4ba4ba',
    title: {
        text: 'top5专业的需求和薪酬',
        x: 'left',
        textStyle: {
            color: '#fff',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        //                  data:['平均薪酬', '需求量(人数)']
        data: [{
                name: '平均薪酬',
                textStyle: {
                    color: '#fff'
                }
            },
            {
                name: '需求量(人数)',
                textStyle: {
                    color: '#fff'
                }
            },
        ],
    },
    //                 toolbox: {
    //                     show: true,
    //                     feature: {
    //                         dataView: {readOnly: false},
    //                         restore: {},
    //                         saveAsImage: {}
    //                     }
    //                 },
    grid: {
        y2: 100
    },
    dataZoom: [{
            type: 'inside',
            show: true,
            start: 1,
            end: 35,
            minValueSpan: 10
        },
        {
            type: 'slider',
            show: true,
            start: 1,
            end: 35,
            minValueSpan: 10
        }
    ],
    xAxis: [{
        type: 'category',
        //			                    data: ['高分子科学与工程学院','生命科学学院','网络空间安全学院','华西公共卫生学院(华西第四医院)','国际关系学院','华西口腔医学院（华西口腔医院）','电气信息学院','华西基础医学与法医学院','历史文化学院(旅游学院)','化学学院','数学学院','体育学院','轻纺与食品学院','外国语学院','文学与新闻学院（新闻学院）','化学工程学院','马克思主义学院','匹兹堡学院','物理科学与技术学院（核科学与工程技术学院）','电子信息学院','计算机学院 （软件学院） ','公共管理学院','材料科学与工程学院','商学院','法学院','华西临床医学院(华西医院)','华西药学院','艺术学院','建筑与环境学院','水利水电学院','空天科学与工程学院','华西第二医院','灾后重建与管理学院','制造科学与工程学院','经济学院'],
        data: ["物理学", "微电子学", "口腔基础医学系-牙合学", "核工程与核技术", "高分子材料与工程专业"],

        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            rotate: -35
        },
        axisLine: {
            lineStyle: {
                color: '#024'
            }
        }
    }],
    yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#024'
                }
            },
            scale: true,
            name: '平均薪酬',
            max: 12000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#024'
                }
            },
            scale: true,
            name: '需求量(人数)',
            max: 12000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [{
            name: '平均薪酬',
            type: 'bar',
            data: (function() {
                var res = [];
                var len = 5;
                while (len--) {
                    res.push(Math.round(Math.random() * 10000));
                }
                return res;
            })()
        },
        {
            name: '需求量(人数)',
            type: 'line',
            data: (function() {
                var res = [];
                var len = 5;
                while (len--) {
                    res.push(Math.round(Math.random() * 10000));
                }
                return res;
            })()
        }
    ]
};