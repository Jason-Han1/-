var getinnername = ['博士', '硕士', '本科', '专科', '高中及以下'];
var getinnervalue = [22, 22, 28, 28,25];
var  getbl=[17.6,17.6,22.4,22.4,20];
var getoutername = [
    '进修培训情况',
    '能力提升情况',
    '教学工作',
    '教研工作',
    '技能竞赛',
    '思想道德建设',
    '获奖情况',
    '年度考核',
    '成果获奖',
    '平台/团队建设',
    '科研项目',
    '学术成果',
    '学历',
    '学位',
];
var getoutervalue = [6, 16, 6, 7, 9, 7, 15, 6, 3, 12, 8, 5,17,8];

var data = [];
for(var i = 0;i<getinnername.length;i++){
	data.push({name:getinnername[i],value:getinnervalue[i]});
}

let scale = 1;
var innervalue = [];
for (var i = 0; i < getinnername.length; i++) {
    innervalue.push({
        name: getinnername[i],
        value: getinnervalue[i],
    });
}
var outervalue = [];
for (var i = 0; i < getoutername.length; i++) {
    if (getoutername[i] == '进修培训情况' || getoutername[i] == '能力提升情况') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#81BEFF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#3295FF', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
        });
    }
    if (getoutername[i] == '教学工作' || getoutername[i] == '教研工作' || getoutername[i] == '技能竞赛') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#48D69E', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#70F3C2', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
        });
    }
    if (getoutername[i] == '思想道德建设' || getoutername[i] == '获奖情况' || getoutername[i] == '年度考核') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#FEAE5C', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FECC84', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
        });
    }
    if (
        getoutername[i] == '成果获奖' ||
        getoutername[i] == '科研项目' ||
        getoutername[i] == '学术成果' ||
        getoutername[i] == '平台/团队建设') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#A1AEFF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#9686F3', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
        });
    }
    if (getoutername[i] == '学历' || getoutername[i] == '学位') {
        outervalue.push({
            name: getoutername[i],
            value: getoutervalue[i],
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#ff7797', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#fe7694', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
        });
    }
}
let echartData = {
    inner: innervalue,
    outer: outervalue,
};

let legend1 = echartData.inner.map((v) => v.name);
let legend2 = echartData.outer.map((v) => v.name);
let legendData = [...legend1, ...legend2];

option = {
    title: {
        text: '第一学历',
        top: 200,
        left: 200
    },
    // tooltip: {
    //     trigger: 'item',
    //     formatter: '{b}：{c}分',
    // },
        legend: {
        type:"scroll",
        orient: 'vertical',
        // left: '50%',
        // y: 'center',  //图例上下居中
		height:'88%',
        // right: '11%',
        right: '10%',
            top: 'center',
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap:10,
        data: getinnername,
        formatter: function(name) {
            for (var i = 0; i<getinnername.length; i++) {
				if (name == data[i].name) {
					return '{name|' + name+'}{value|'+getinnervalue[i] +'人}{rate|' + getbl[i].toFixed(0) + '%}'
				// return  name + getinnervalue[i] +'人' + getbl[i].toFixed(0) + '%';
				}
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 13,
                    fontWeight: 400,
                    width: 50,
                    height: 35,
                    padding:[0,0,0,10],
					color:'#666666'
                },
                value: {
                    fontSize: 13,
                    fontWeight: 400,
                    width: 50,
                    height: 35,
                    padding:[0,0,0,25],
					color:'#333333'
                },
                rate: {
                    fontSize: 13,
                    fontWeight: 500,
                    height: 35,
                    width: 55,
                    align:'left',
					color:'#666666'
                }
            }
        }        
    },
    series: [
        {
            color: [
                {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#81BEFF', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#3295FF', // 100% 处的颜色
                        },
                    ],
                },
                {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#48D69E', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#70F3C2', // 100% 处的颜色
                        },
                    ],
                },
                {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#FEAE5C', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#FECC84', // 100% 处的颜色
                        },
                    ],
                },
                {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#A1AEFF', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#9686F3', // 100% 处的颜色
                        },
                    ],
                },
                 {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#ff7797', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#fe7694', // 100% 处的颜色
                        },
                    ],
                },
            ],
            type: 'pie',
            // center: ['20%', '35%'],
            radius: [0, '24%'],
            itemStyle: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: echartData.inner,
        },
        {
            type: 'pie',
            // center: ['20%', '35%'],
            radius: ['26%', '45%'],
            roseType: 'radius',
            data: echartData.outer,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            label: {
                normal: {
                    show: false,
                },
            },
        },
    ],
};
return option;
