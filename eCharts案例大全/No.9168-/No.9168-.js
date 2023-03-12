var data = {
    age: [{
            value: 335,
            name: '30岁以上'
        },
        {
            value: 310,
            name: '18-20'
        },
        {
            value: 234,
            name: '26-30'
        },
        {
            value: 135,
            name: '21-25'
        },
    ],
    stature: [{
            value: 335,
            name: '180以上'
        },
        {
            value: 310,
            name: '170以下'
        },
        {
            value: 234,
            name: '176-180'
        },
        {
            value: 135,
            name: '170-175'
        },

    ],
    education: [{
            value: 335,
            name: '高中以下'
        },
        {
            value: 310,
            name: '本科'
        },
        {
            value: 234,
            name: '大专'
        },
        {
            value: 135,
            name: '高中'
        },
    ],
    skill: [{
            value: 335,
            name: '武术'
        },
        {
            value: 310,
            name: '其他'
        },
        {
            value: 234,
            name: '射击'
        }
    ]
};

function setText() {
    colors = ["#c500dc", "#e6a15c", "#61b1f2", "#73e699"];
    texts = ["年龄", "身高", "学历", "技能"];
    var label = [];
    for (var i = 0; i < texts.length; i++) {

        var obj = {
            tooltip: {
                show: false, //取消鼠标放上去时会显示信息的样式
                trigger: 'item',
            },
            label: {
                normal: {
                    formatter: [
                        '{c|' + texts[i] + '}',
                    ].join('\n'),
                    position: 'center', //让文字居中
                    show: true,
                    rich: {
                        c: {
                            fontSize: '14',
                            fontWeight: 'bold',
                            color: '' + colors[i] + '',
                            lineHeight: '20'
                        },
                    }
                }
            },
        }
        label.push(obj);
    }
    return label;
};


var labels = setText();
    var Index = ["age", "stature", "education", "skill"];
    for (var i = 0; i < Index.length; i++) {
        data[Index[i]].push(labels[i])
    }
    var option = {
        backgroundColor:'#0d213b',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}:{d}%"
        },
        grid: {
            left: '0%',
            top: '0px',
            right: '0%',
            bottom: '0px',
            containLabel: true
        },
        series: [{
            type: 'pie',
            name: '年龄',
            radius: ['25%', '38%'],
            center: ['25%', '28%'],
            color: ["#c500dc", "#e55ce5", "#f29de4", "#ffe5f6"],
            minAngle: 30,
            animation: false,
            label: {
                normal: {
                    formatter: '{b}',
                },

            },
            labelLine: {
                show: false,
                length: 1,
                length2: 5
            },
            data: data.age,
        }, {
            type: 'pie',
            name: '身高',
            radius: ['25%', '38%'],
            center: ['75%', '28%'],
            color: ["#e55c00", "#e5a15c", "#f2cf9d", "#ffeecc"],
            minAngle: 30,
            animation: false,
            label: {
                normal: {
                    formatter: '{b}',
                }
            },
            labelLine: {
                show: false,
                length: 1,
                length2: 5
            },
            data: data.stature

        }, {
            type: 'pie',
            name: '学历',
            radius: ['25%', '38%'],
            center: ['25%', '78%'],
            color: ["#0371ec", "#61b1f2", "#b2e3ff", "#e5f8ff"],
            minAngle: 30,
            animation: false,
            label: {
                normal: {
                    formatter: '{b}',
                }
            },
            labelLine: {
                show: false,
                length: 0,
                length2: 10
            },
            data: data.education
        }, {
            type: 'pie',
            name: '技能',
            radius: ['25%', '38%'],
            center: ['75%', '78%'],
            color: ["#06ca2b", "#73e599", "#e5fff2"],
            minAngle: 30,
            animation: false,
            label: {
                normal: {
                    formatter: '{b}',
                }
            },
            labelLine: {
                show: false,
                length: 0,
                length2: 10
            },
            data: data.skill
        }]
    };
   
