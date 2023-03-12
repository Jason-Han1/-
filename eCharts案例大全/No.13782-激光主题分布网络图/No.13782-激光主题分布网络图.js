option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data:['化学，多学科', '医学，普通和内科', '细胞生物学', '物理学，多学科', '物理，粒子和场', '物理，原子，分子和化学', '物理学，应用', '光学', '生物化学与分子生物学', '多学科科学', '医学，研究与实验', '光谱', '化学，物理', '仪器仪表', '物理，数学', '晶体学', '物理，核', '植物科学', '区域研究', '天文学和天体物理学', '生物学', '纳米科学和纳米技术', '核科学与技术', '生物化学研究方法', '生物技术与应用微生物学', '基因和遗传', '物理，流体和等离子体', '物理学，凝聚态物质', '生物物理学', '材料科学，陶瓷', '工程，电气和电子', '材料科学，多学科']
        },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [
        {name:'化学，多学科',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 3.0, 4.0, 5.0, 7.0]},
{name:'医学，普通和内科',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0]},
{name:'细胞生物学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0]},
{name:'物理学，多学科',type:'line',stack: '总量',areaStyle: {normal: {}},data:[1.0, 1.0, 4.0, 1.0, 9.0, 2.0, 2.0, 3.0, 2.0]},
{name:'物理，粒子和场',type:'line',stack: '总量',areaStyle: {normal: {}},data:[4.0, 1.0, 3.0, 4.0, 3.0, 1.0, 1.0, 4.0, 2.0]},
{name:'物理，原子，分子和化学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[4.0, 3.0, 3.0, 1.0, 14.0, 0.0, 11.0, 7.0, 4.0]},
{name:'物理学，应用',type:'line',stack: '总量',areaStyle: {normal: {}},data:[3.0, 4.0, 2.0, 6.0, 15.0, 7.0, 7.0, 12.0, 12.0]},
{name:'光学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[5.0, 4.0, 6.0, 5.0, 19.0, 9.0, 13.0, 10.0, 11.0]},
{name:'生物化学与分子生物学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 2.0]},
{name:'多学科科学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 4.0, 10.0, 13.0, 12.0]},
{name:'医学，研究与实验',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]},
{name:'光谱',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0]},
{name:'化学，物理',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 3.0, 4.0, 2.0]},
{name:'仪器仪表',type:'line',stack: '总量',areaStyle: {normal: {}},data:[5.0, 4.0, 4.0, 4.0, 9.0, 4.0, 5.0, 10.0, 4.0]},
{name:'物理，数学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0]},
{name:'晶体学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 2.0, 1.0, 4.0, 3.0, 3.0]},
{name:'物理，核',type:'line',stack: '总量',areaStyle: {normal: {}},data:[4.0, 1.0, 3.0, 4.0, 3.0, 1.0, 1.0, 4.0, 2.0]},
{name:'植物科学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 0.0, 0.0]},
{name:'区域研究',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0]},
{name:'天文学和天体物理学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0]},
{name:'生物学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0]},
{name:'纳米科学和纳米技术',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 1.0, 1.0, 0.0]},
{name:'核科学与技术',type:'line',stack: '总量',areaStyle: {normal: {}},data:[3.0, 1.0, 3.0, 4.0, 1.0, 1.0, 1.0, 1.0, 0.0]},
{name:'生物化学研究方法',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 2.0, 0.0, 1.0]},
{name:'生物技术与应用微生物学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]},
{name:'基因和遗传',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]},
{name:'物理，流体和等离子体',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 2.0, 1.0, 1.0, 0.0, 1.0, 0.0, 1.0]},
{name:'物理学，凝聚态物质',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 2.0, 2.0, 0.0, 1.0]},
{name:'生物物理学',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 1.0]},
{name:'材料科学，陶瓷',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0]},
{name:'工程，电气和电子',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 0.0, 0.0, 2.0, 0.0, 1.0, 1.0, 1.0, 1.0]},
{name:'材料科学，多学科',type:'line',stack: '总量',areaStyle: {normal: {}},data:[0.0, 1.0, 0.0, 0.0, 2.0, 2.0, 6.0, 2.0, 7.0]}
                          ]
};