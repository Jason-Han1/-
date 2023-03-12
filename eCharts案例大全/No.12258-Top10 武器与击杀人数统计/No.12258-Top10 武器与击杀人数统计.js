option = {
    title: {
        text: 'Top20 线杀率与胜率统计',
        subtext: '线杀率                                                                                 胜率',
        x: 'center',
        //x: 'left',//'center',
        y:50
        
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
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
                value: '6141',
     name: '圣锤之毅 61.41%'
 }, {
     value: '6144',
     name: '无畏战车 61.44%'
 }, {
     value: '6192',
     name: '蛮族之王 61.92%'
 }, {
     value: '6320',
     name: '魔蛇之拥 63.20%'
 }, {
     value: '6376',
     name: '虚空恐惧 63.76%'
 }, {
     value: '6426',
     name: '机械公敌 64.26%'
 }, {
     value: '6490',
     name: '海洋之灾 64.90%'
 }, {
     value: '6529',
     name: '青钢影 65.29%'
 }, {
     value: '6559',
     name: '沙漠死神 65.59%'
 }, {
     value: '6653',
     name: '扭曲树精 66.53%'
 }, {
     value: '6716',
     name: '解脱者 67.16%'
 }, {
     value: '6732',
     name: '正义天使 67.32%'
 }, {
     value: '6734',
     name: '猩红收割者 67.34%'
 }, {
     value: '6771',
     name: '疾风剑豪 67.71%'
 }, {
     value: '6853',
     name: '祖安狂人 68.53%'
 }, {
     value: '7035',
     name: '暮光之眼 70.35%'
 }, {
     value: '7095',
     name: '炼金术士 70.95%'
 }, {
     value: '7211',
     name: '亡灵战神 72.11%'
 }, {
     value: '7462',
     name: '符文法师 74.62%'
 }, {
     value: '7598',
     name: '虚空行者 75.98%'
 }]
    }, {
        name: '面积模式',
        type: 'pie',
        radius: [30, 105],
        center: ['76%', '50%'],
        roseType: 'area',
        data: [{
            value: '5031',
     name: '不屈之枪 50.31%'
 }, {
     value: '5037',
     name: '蛮族之王 50.37%'
 }, {
     value: '5064',
     name: '虚空恐惧 50.64%'
 }, {
     value: '5081',
     name: '德玛西亚之力 50.81%'
 }, {
     value: '5094',
     name: '无双剑姬 50.94%'
 }, {
     value: '5096',
     name: '沙漠死神 50.96%'
 }, {
     value: '5098',
     name: '虚空行者 50.98%'
 }, {
     value: '5108',
     name: '亡灵战神 51.08%'
 }, {
     value: '5141',
     name: '疾风剑豪 51.41%'
 }, {
     value: '5192',
     name: '暗裔剑魔 51.92%'
 }, {
     value: '5194',
     name: '符文法师 51.94%'
 }, {
     value: '5200',
     name: '圣锤之毅 52.00%'
 }, {
     value: '5227',
     name: '傲之追猎者 52.27%'
 }, {
     value: '5229',
     name: '祖安怒兽 52.29%'
 }, {
     value: '5231',
     name: '刀锋舞者 52.31%'
 }, {
     value: '5235',
     name: '未来守护者 52.35%'
 }, {
     value: '5305',
     name: '离群之刺 53.05%'
 }, {
     value: '5326',
     name: '战争之影 53.26%'
 }, {
     value: '5451',
     name: '天启者 54.51%'
 }, {
     value: '5831',
     name: '解脱者 58.31%'
 }]
    }]
};