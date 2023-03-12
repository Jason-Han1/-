var questionnaires = [{
    question: '常喝/爱喝的咖啡种类（多）',
    options: ['清咖', '浓缩', '拿铁', '摩卡', '焦糖玛奇朵', '卡布奇诺'],
    groups: [{
        name: '18岁以下女',
        values: [4,7,17,13,15,21]
    }, {
        name: '18岁以下男',
        values: [6,5,16,10,9,13]
    }, {
        name: '18岁以上女',
        values: [4,2,4,2,3,6]
    }, {
        name: '18岁以上男',
        values: [1,1,1,0,1,0]
    }]
}, {
    question: '通常喝的咖啡口味（多）',
    options: ['偏浓','偏淡','适中'],
    groups: [{
        name: '18岁以下女',
        values: [6,7,28]
    }, {
        name: '18岁以下男',
        values: [11,7,10]
    }, {
        name: '18岁以上女',
        values: [2,2,6]
    }, {
        name: '18岁以上男',
        values: [3,1,1]
    }]
}, {
    question: '通常喝咖啡添加（多）',
    options: ['加奶','加糖','都加','都不加'],
    groups: [{
        name: '18岁以下女',
        values: [15,17,18,5]
    }, {
        name: '18岁以下男',
        values: [8,7,12,4]
    }, {
        name: '18岁以上女',
        values: [6,4,1,3]
    }, {
        name: '18岁以上男',
        values: [0,2,0,2]
    }]
}, {
    question: '选择咖啡类型（多）',
    options: ['速溶','手磨','店铺购买'],
    groups: [{
        name: '18岁以下女',
        values: [16,9,33]
    }, {
        name: '18岁以下男',
        values: [8,7,22]
    }, {
        name: '18岁以上女',
        values: [4,5,6]
    }, {
        name: '18岁以上男',
        values: [2,2,2]
    }]
}, {
    question: '喝咖啡通常是因为（多）',
    options: ['缓解压力','使自己亢奋','美味','习惯了'],
    groups: [{
        name: '18岁以下女',
        values: [12,15,21,5]
    }, {
        name: '18岁以下男',
        values: [9,12,13,5]
    }, {
        name: '18岁以上女',
        values: [2,4,6,2]
    }, {
        name: '18岁以上男',
        values: [4,3,4,0]
    }]
}, {
    question: '喝完咖啡后会（多）',
    options: ['特别兴奋','有点兴奋','睡不着觉','较影响睡眠','没有特别感觉'],
    groups: [{
        name: '18岁以下女',
        values: [3,6,6,5,26]
    }, {
        name: '18岁以下男',
        values: [4,6,3,3,13]
    }, {
        name: '18岁以上女',
        values: [1,4,3,0,4]
    }, {
        name: '18岁以上男',
        values: [0,1,1,2,4]
    }]
}, {
    question: '您常喝咖啡会（多）',
    options: ['产生心理依赖','产生生理依赖','缓解压力','放松心情','没有特别感觉'],
    groups: [{
        name: '18岁以下女',
        values: [4,1,11,21,21]
    }, {
        name: '18岁以下男',
        values: [3,1,11,13,10]
    }, {
        name: '18岁以上女',
        values: [4,2,6,3,6]
    }, {
        name: '18岁以上男',
        values: [2,2,1,4,2]
    }]
}]

var questionnaire = questionnaires[6]
option = {
    title: {
        text: questionnaire.question,
        left: 'center'
    },
    toolbox: {
        show: true,
        showTitle: false,
        feature: {
            saveAsImage: {
                show: true,
                title: 'Save As Image'
            },
            dataView: {
                show: true,
                title: 'Data View'
            },
        }
    },
    legend: {
        bottom: 10,
        left: 'center',
        data: questionnaire.groups.map(item => { return item.name})
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: questionnaire.options
    },
    series: questionnaire.groups.map(item => { return {
        name: item.name,
        type: 'bar',
        stack: 'Total',
        label: {
            show: true,
            position: 'insideRight'
        },
        data: item.values
    }})
}