option = {
    title: {
        text: "",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
    },

    backgroundColor: new echarts.graphic.RadialGradient(0, 0, 1, [{
        offset: 0,
        color: '#174b78'
    }, {
        offset: 1,
        color: '#174b78'
    }]),
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '一级指标',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{value:17,name:'组织能力指标'},
{value:12,name:'研判分析指标'},
{value:10,name:'工作态势指标'},
{value:7,name:'效能考核指标'}]
    }, {
        name: '二级指标',
        type: 'pie',
        radius: ['32%', '60%'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{value:4,name:'综治机构组织情况'},
{value:7,name:'综治网格分布情况'},
{value:6,name:'综治团队构成情况'},
{value:1,name:'实有人口情况'},
{value:1,name:'特殊人群情况'},
{value:1,name:'重点少年情况'},
{value:2,name:'两新组织情况'},
{value:2,name:'辖区房屋情况'},
{value:2,name:'出租房流动情况'},
{value:2,name:'校园及周边安全情况'},
{value:1,name:'社会治安情况'},
{value:1,name:'综治事件情况'},
{value:2,name:'矛盾纠纷排查情况'},
{value:1,name:'综治服务开展情况'},
{value:6,name:'综治工作落实情况'},
{value:1,name:'职能部门工作评价'},
{value:2,name:'街道矛盾纠纷排查工作评价'},
{value:1,name:'街道重点对象综治工作评价'},
{value:2,name:'街道综治事件工作评价'},
{value:1,name:'街道综治服务工作评价'}]
    }, {
        name: '三级指标',
        type: 'pie',
        radius: ['62%', '70%'],
        label: {
            normal: {
                position: 'outer'
            }
        },
        data: [{value:1,name:'综治机构总数'},
{value:3,name:'综治机构成员总数'},
{value:7,name:'综治网格数量'},
{value:1,name:'综治团队数量'},
{value:5,name:'综治团队成员数'},
{value:1,name:'实有人口数环比增长'},
{value:1,name:'特殊人群数环比增长'},
{value:1,name:'重点少年数环比增长'},
{value:1,name:'社会组织数环比增长'},
{value:1,name:'新经济组织数环比增长'},
{value:1,name:'本年新增房屋数环比增长'},
{value:1,name:'存量房屋数环比增长'},
{value:1,name:'出租房屋数环比增长'},
{value:1,name:'出租房屋人口数环比增长'},
{value:1,name:'本年新建学校数量'},
{value:1,name:'现有学校总数'},
{value:1,name:'社会治安点数环比增长'},
{value:1,name:'综治事件数环比增长'},
{value:1,name:'矛盾纠纷排查数环比增长'},
{value:1,name:'矛盾纠纷调处数环比增长'},
{value:1,name:'综治服务数环比增长'},
{value:1,name:'特殊人群帮教落实率环比增长'},
{value:1,name:'重点少年帮教率环比增长'},
{value:1,name:'两新组织综治人员落实率环比增长'},
{value:1,name:'房屋综治人员落实率环比增长'},
{value:1,name:'重点校园负责人落实率环比增长'},
{value:1,name:'社会治安重点场所负责人落实率环比增长'},
{value:1,name:'职能部门工作得分环比增长'},
{value:1,name:'街道矛盾纠纷排查环比增长'},
{value:1,name:'街道矛盾纠纷调处成功率环比增长'},
{value:1,name:'街道重点对象综治落实率环比增长'},
{value:1,name:'街道综治事件环比增长'},
{value:1,name:'街道综治事件结案率环比增长'},
{value:1,name:'综治服务工作量环比增长'}]
    }]
};