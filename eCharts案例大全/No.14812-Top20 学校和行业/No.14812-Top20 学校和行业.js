option = {
    title: {
        text: 'Top20 学校和行业',
        //subtext: '南丁格尔玫瑰图',
        //爬取张佳玮138w+知乎关注者：数据可视化
        //https://zhuanlan.zhihu.com/p/28890605?refer=c_122608198
        x: 'center',
        //x: 'left',//'center',
        y:50
        
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            /*dataView: {
                show: true,
                readOnly: false
            },*/
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            /*restore: {
                show: true
            },*/
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: [30, 105],
        center: ['30%', '50%'],
        roseType: 'radius',
        data: [{
                value: '522',
                name: '北京大学 522'
            }, {
                value: '431',
                name: '清华大学 431'
            }, {
                value: '305',
                name: '浙江大学 305'
            }, {
                value: '293',
                name: '复旦大学 293'
            }, {
                value: '262',
                name: '武汉大学 262'
            }, {
                value: '237',
                name: '上海交通大学 237'
            }, {
                value: '217',
                name: '中山大学 217'
            }, {
                value: '211',
                name: '南京大学 211'
            }, {
                value: '207',
                name: '中国人民大学 207'
            }, {
                value: '202',
                name: '华中科技大学 202'
            }, {
                value: '186',
                name: '同济大学 186'
            }, {
                value: '142',
                name: '四川大学 142'
            }, {
                value: '137',
                name: '北京航空航天大学 137'
            }, {
                value: '134',
                name: '山东大学 134'
            }, {
                value: '132',
                name: '厦门大学 132'
            }, {
                value: '131',
                name: '哈尔滨工业大学 131'
            }, {
                value: '126',
                name: '华南理工大学 126'
            }, {
                value: '120',
                name: '中国传媒大学 120'
            }, {
                value: '111',
                name: '南开大学 111'
            }, {
                value: '108',
                name: '中国科学技术大学 108'
            }
        ]
    }, {
        name: '面积模式',
        type: 'pie',
        radius: [30, 105],
        center: ['76%', '50%'],
        roseType: 'area',
        data: [{
            value: '5904',
            name: '互联网 5904'
        }, {
            value: '1416',
            name: '计算机软件 1416'
        }, {
            value: '1133',
            name: '金融 1133'
        }, {
            value: '1032',
            name: '高等教育 1032'
        }, {
            value: '839',
            name: '创意艺术 839'
        }, {
            value: '790',
            name: '法律 790'
        }, {
            value: '563',
            name: '科研 563'
        }, {
            value: '537',
            name: '高新科技 537'
        }, {
            value: '478',
            name: '教育 478'
        }, {
            value: '444',
            name: '信息传媒 444'
        }, {
            value: '443',
            name: '临床医疗 443'
        }, {
            value: '433',
            name: '电子商务 433'
        }, {
            value: '404',
            name: '电子游戏 404'
        }, {
            value: '400',
            name: '政府 400'
        }, {
            value: '371',
            name: '广告 371'
        }, {
            value: '349',
            name: '财务 349'
        }, {
            value: '339',
            name: '汽车 339'
        }, {
            value: '328',
            name: '证券投资 328'
        }, {
            value: '325',
            name: '地产建筑 325'
        }, {
            value: '325',
            name: '银行 325'
        }]
    }]
};
