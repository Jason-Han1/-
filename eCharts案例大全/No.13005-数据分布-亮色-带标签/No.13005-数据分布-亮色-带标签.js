var formatUtil = echarts.format;

var dtlData = [{
    name: '一账通',
    value: 2474,
    children: [{
        name: 'JKOSS',
        value: 426
    }, {
        name: 'JKTOA',
        value: 73
    }, {
        name: 'JKTOALF_EBD',
        value: 12
    }, {
        name: 'JKTOALF_TOASER',
        value: 101
    }, {
        name: 'TOA',
        value: 1083
    }, {
        name: 'TOAMALL',
        value: 709
    }, {
        name: 'TOAWEB_CMS',
        value: 58
    }, {
        name: 'TOAFLLF_MAAM',
        value: 12
    }]
}, {
    name: '中小企业',
    value: 1053,
    children: [{
        name: 'SMELPCORE_CORE',
        value: 347
    }, {
        name: 'SMELPCORE_FINANCE',
        value: 230
    }, {
        name: 'SMELPCORE_SMELPMCHT',
        value: 14
    }, {
        name: 'SMELPCORE_SMELPWG',
        value: 28
    }, {
        name: 'SMELPCORE_WEB',
        value: 50
    }, {
        name: 'SMELPFATAEX',
        value: 14
    }, {
        name: 'SMELPRISK_RISK',
        value: 370
    }]
}, {
    name: '同业',
    value: 1635,
    children: [{
        name: 'FIC2',
        value: 1128
    }, {
        name: 'LSMMS',
        value: 194
    }, {
        name: 'MFICAW',
        value: 91
    }, {
        name: 'YZTTA',
        value: 222
    }]
}, {
    name: '开放平台',
    value: 9422,
    children: [{
        name: 'CDE',
        value: 259
    }, {
        name: 'CMPCC',
        value: 1161
    }, {
        name: 'PACCF1',
        value: 3564
    }, {
        name: 'PAEBD_PAEBD',
        value: 2231
    }, {
        name: 'QHZX',
        value: 384
    }, {
        name: 'PCDP_CDP',
        value: 205
    }, {
        name: 'PIMP_PIMP',
        value: 51
    }, {
        name: 'ZXAR',
        value: 94
    }, {
        name: 'ZXCD1',
        value: 918
    }, {
        name: 'ZXPD1',
        value: 555
    }]
}, {
    name: '贷款',
    value: 2156,
    children: [{
        name: 'MYUE',
        value: 56
    }, {
        name: 'P2PLM',
        value: 351
    }, {
        name: 'P2PPD',
        value: 1619
    }, {
        name: 'PDAP_PDAP',
        value: 112
    }, {
        name: 'PCACORE_QJJ',
        value: 16
    }, {
        name: 'MP2PPD',
        value: 2
    }]
}, {
    name: '银行一账通',
    value: 6576,
    children: [{
        name: 'FO007',
        value: 1078
    }, {
        name: 'FO008',
        value: 799
    }, {
        name: 'FO009',
        value: 483
    }, {
        name: 'FO023',
        value: 665
    }, {
        name: 'FO024',
        value: 644
    }, {
        name: 'FO025',
        value: 1040
    }, {
        name: 'FO027',
        value: 685
    }, {
        name: 'FCES01',
        value: 215
    }, {
        name: 'FPPG_MIP',
        value: 61
    }, {
        name: 'NMPMS_NMPMS',
        value: 32
    }, {
        name: 'FOGZ',
        value: 546
    }, {
        name: 'FO047',
        value: 328
    }]
}];

var mapping = {
    'CDE': '引擎管理系统',
    'CMPCC': 'CBD核心系统',
    'FCES01': 'F渠道拓展系统',
    'FIC2': '适配器系统',
    'FO007': 'F渠道作业系统',
    'FO008': 'F项目配置系统',
    'FO009': '业务运营管理系统',
    'FO023': 'A银行系统',
    'FO024': 'B银行系统',
    'FO025': 'C银行系统',
    'FO027': '营销活动系统',
    'FO047': '业务运营系统',
    'FOGZ': '理财产品管理系统',
    'FPPG_MIP': '内容管理系统',
    'JKOSS': '认证中心',
    'JKTOA': '活动系统',
    'JKTOALF_EBD': '事务系统',
    'JKTOALF_TOASER': '后台服务系统',
    'LSMMS': '应用服务平台',
    'MFICAW': '产品中心系统',
    'MP2PPD': '贷款进件平台',
    'MYUE': '贷款跃老板子系统',
    'NMPMS_NMPMS': '电子账户管理系统',
    'P2PLM': '信贷贷后管理系统',
    'P2PPD': '信保系统',
    'PACCF1': '金科API服务',
    'PAEBD_PAEBD': '金科空间站',
    'PCACORE_QJJ': '贷款C端服务系统',
    'PCDP_CDP': '客户系统',
    'PDAP_PDAP': '贷款平台业务报表系统',
    'PIMP_PIMP': '风险监测系统',
    'QHZX': '征信数据超市',
    'SMELPCORE_CORE': '信贷管理系统',
    'SMELPCORE_FINANCE': '规则执行系统',
    'SMELPCORE_SMELPMCHT': '网关应用系统',
    'SMELPCORE_SMELPWG': '数据管理系统',
    'SMELPCORE_WEB': '公共服务系统',
    'SMELPFATAEX': '风险控制系统',
    'SMELPRISK_RISK': '门户系统',
    'TOA': '一账通系统',
    'TOAFLLF_MAAM': '移动广告管理平台',
    'TOAMALL': '商城系统',
    'TOAWEB_CMS': '公共运营支撑系统',
    'YZTTA': '运营管理系统',
    'ZXAR': '数据接口系统',
    'ZXCD1': '好信盔甲',
    'ZXPD1': '前海征信爱迪生系统'
};


var color = [
    "#6F3FE1",
    "#5781FD",
    "#4DB1CB",
    "#3EBD7C",
    "#F7A925",
    "#bda29a",
    "#ca8622",
    "#749f83",
    "#6e7074",
    "#546570",
    "#c4ccd3"
];

var bsLine = [];
var bsLineV = {};
for (var key in dtlData) {
    bsLine.push(dtlData[key].name);
    bsLineV[dtlData[key].name] = dtlData[key].value;
}
var sbsLineV = Object.keys(bsLineV).sort(function(a, b) {
    return -(bsLineV[a] - bsLineV[b]);
});


// 层级样式
function getLevelOption1() {
    return [{
            color: color,
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#fff',
                    gapWidth: 2
                }
            }
        },
        {
            //colorSaturation: [0.35, 0.6],
            colorAlpha: [1, 0.5],
            upperLabel: {
                normal: {
                    color: '#555555',
                    show: true,
                    height: 30
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#EFEFEF',
                    gapWidth: 1
                },
                emphasis: {
                    borderColor: '#ccc'
                }
            }
        }
    ];
}


function getLevelOption2() {
    return [{
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#fff',
                    gapWidth: 2
                }
            }
        },
        {
            color: [],
            //colorSaturation: [0.35, 0.6],
            //colorAlpha: [0.5, 1],
            //colorMappingBy: 'value',
            upperLabel: {
                normal: {
                    color: '#555555',
                    show: true,
                    height: 30
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#EFEFEF',
                    gapWidth: 1
                },
                emphasis: {
                    borderColor: '#ccc'
                }
            }
        }
    ];
}

var series0 = {
    name: '数据库',
    type: 'treemap',
    itemStyle: {
        normal: {
            borderColor: '#fff'
        }
    },
    levels: getLevelOption1(),
    leafDepth: 2,
    data: dtlData
};

var series11 = {
    name: '数据库',
    type: 'treemap',
    itemStyle: {
        normal: {
            borderColor: '#fff'
        }
    },
    right: '50%',
    width: '48%',
    levels: getLevelOption1(),
    leafDepth: 2,
    data: dtlData
};

var series12 = {
    name: '数据库',
    type: 'treemap',
    itemStyle: {
        normal: {
            borderColor: '#fff'
        }
    },
    left: '55%',
    width: '40%',
    levels: getLevelOption2(),
    leafDepth: 2,
    data: [dtlData[0]]
};

option = {
    backgroundColor: '#fff',
    title: {
        text: '数据分布',
        left: 'center'
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {},
            restore: {},
            dataView: {}
        }
    },
    tooltip: {
        formatter: function(info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
                treePath.push(treePathInfo[i].name);
            }

            var nodeCN = '';
            if (treePath.length == 2) {
                treePath[1] = mapping[treePath[1]];
            }

            return [
                '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join(' - ')) + '</div>',
                '表数量: ' + formatUtil.addCommas(value),
            ].join('');
        }
    },
    series: [series0]
};

myChart.setOption(option, true);

// 点击事件
myChart.on("click", function(param) {
    var selectedItem = param.name;
    //alert(selectedItem);
    for (var key in dtlData) {
        if (dtlData[key].name === selectedItem) {
            for (var ki in sbsLineV) {
                if (sbsLineV[ki] === selectedItem) {
                    bsColor = color[ki]
                }
            }
            series12.levels[1].color = [bsColor]
            series12.data = [dtlData[key]]
            option.series = [series11, series12]
            myChart.setOption(option, true);
        }
    }

    if (bsLine.indexOf(selectedItem) < 0) {
        option.series = [series0]
        myChart.setOption(option, true);
    }
});