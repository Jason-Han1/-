option = {
    title: {
        text: 'Top 20 诺克萨斯之手线杀率',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    toolbox: {
        show: true,
        feature: {
            /*mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
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
        radius: [40, 150],
        center: ['50%', '50%'],
        roseType: 'radius',
        data: [{
                value: '4256',
     name: '雷霆咆哮 42.56%'
 }, {
     value: '4986',
     name: '暗夜猎手 49.86%'
 }, {
     value: '5055',
     name: '离群之刺 50.55%'
 }, {
     value: '5103',
     name: '狂战士 51.03%'
 }, {
     value: '5126',
     name: '放逐之刃 51.26%'
 }, {
     value: '5154',
     name: '暴怒骑士 51.54%'
 }, {
     value: '5182',
     name: '刀锋舞者 51.82%'
 }, {
     value: '5194',
     name: '不屈之枪 51.94%'
 }, {
     value: '5213',
     name: '永恒梦魇 52.13%'
 }, {
     value: '5328',
     name: '暗裔剑魔 53.28%'
 }, {
     value: '5335',
     name: '海兽祭司 53.35%'
 }, {
     value: '5345',
     name: '大发明家 53.45%'
 }, {
     value: '5359',
     name: '武器大师 53.59%'
 }, {
     value: '5455',
     name: '荒漠屠夫 54.55%'
 }, {
     value: '5520',
     name: '德玛西亚之翼 55.20%'
 }, {
     value: '5544',
     name: '山隐之焰 55.44%'
 }, {
     value: '5549',
     name: '牧魂人 55.49%'
 }, {
     value: '5615',
     name: '圣枪游侠 56.15%'
 }, {
     value: '5658',
     name: '祖安怒兽 56.58%'
 }, {
     value: '5717',
     name: '未来守护者 57.17%'
 }]
    }]
};