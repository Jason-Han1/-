var r = [0, 60];
var y = '50%';
var xa = ['10%', '25%', '40%', '60%', '75%', '90%'];
var data = [
    [
        {value:7, name:'系统维护组'},
        {value:5, name:'规划处'}
    ],
    [
        {value:3, name:'综合交通规划'},
        {value:1, name:'发展战略'},
        {value:1, name:'交通模型与仿真系统研究'},
        {value:1, name:'专项交通规划'},
        {value:1, name:'交通规范与标准研究'},
        {value:6, name:'建设计划'}
    ],
    [
        {value:1, name:'深高顾'},
        {value:1, name:'研究中心'},
        {value:1, name:'交通中心'},
        {value:2, name:'深高速顾问'},
        {value:1, name:'深高速工程顾问有限公司'},
        {value:6, name:'未设置规划单位'}
    ],
    [
        {value:1719, name:'系统维护组'},
        {value:2968, name:'规划处'}
    ],
    [
        {value:1533, name:'综合交通规划'},
        {value:800, name:'发展战略'},
        {value:288, name:'交通模型与仿真系统研究'},
        {value:185, name:'专项交通规划'},
        {value:195, name:'交通规范与标准研究'},
        {value:1686, name:'建设计划'}
    ],
    [
        {value:300, name:'深高顾'},
        {value:800, name:'研究中心'},
        {value:1500, name:'交通中心'},
        {value:473, name:'深高速顾问'},
        {value:195, name:'深高速工程顾问有限公司'},
        {value:1419, name:'未设置规划单位'}
    ]
];

var legend = [];
for (var i = 0; i < 3; i++) {
    var subdata = data[i];
    legend[i] = [];
    for (var j = 0; j < subdata.length; j++) {
        legend[i].push(subdata[j].name);
    }
}


option = {
    title : [{
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: '25%',
            y: '20%',
            textAlign: 'center'
        },{
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x: '75%',
            y: '20%',
            textAlign: 'center'
        }],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: [{
            orient: 'horizontal',
            left: '10%',
            top: '80%',
            width: '25%',
            data: legend[0]
        },{
            orient: 'horizontal',
            left: '40%',
            top: '80%',
            width: '25%',
            data: legend[1]
        },{
            orient: 'horizontal',
            left: '70%',
            top: '80%',
            width: '25%',
            data: legend[2]
        }],
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : r,
            center: [xa[0], y],
            data:data[0],
            label: {
                show: false
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            name: '访问来源',
            type: 'pie',
            radius : r,
            center: [xa[1], y],
            data:data[1],
            label: {
                show: false
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            name: '访问来源',
            type: 'pie',
            radius : r,
            center: [xa[2], y],
            data:data[2],
            label: {
                show: false
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            name: '访问来源',
            type: 'pie',
            radius : r,
            center: [xa[3], y],
            data:data[3],
            label: {
                show: false
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            name: '访问来源',
            type: 'pie',
            radius : r,
            center: [xa[4], y],
            data:data[4],
            label: {
                show: false
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },{
            name: '访问来源',
            type: 'pie',
            radius : r,
            center: [xa[5], y],
            data:data[5],
            label: {
                show: false
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
