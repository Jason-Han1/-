//10个 = 100%
//person_full 代表全部人
//person_me 你的位置
//person_other 代表超越的人
//例：超越了62.5%的人，me的位置在第7个人，other 6个人，full 3个人
var score = 62.5;


var person = {
    person_other: "/asset/get/s/data-1562901377507-7t9jeExSn.png",
    person_me: "/asset/get/s/data-1562901373659-fMbWFSzXW.png",
    person_full: "/asset/get/s/data-1562901368724-SXbKmbcWQ.png"
};

var sData = [];
for (var i = 1; i <= 10; i++) {
    if (i <= parseInt(score / 10)) {
        sData.push({
            value: 1,
            symbolSize: ['38.64', '80'],
            symbol: 'image://' + person.person_other,
        });
    } else if (i == parseInt(score / 10) + 1) {
        sData.push({
            value: 1,
            symbolSize: ['38.64', '80'],
            symbol: 'image://' + person.person_me,
        });
    } else if (i > parseInt(score / 10) + 1) {
        sData.push({
            value: 1,
            symbolSize: ['38.64', '80'],
            symbol: 'image://' + person.person_full,
        });
    }
}

option = {
    animation: false,
    xAxis: {
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'pictorialBar',
        symbolPosition: 'center',
        data: sData,
    }]
};