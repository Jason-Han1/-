const radius = {
    pie: '55%',
    doughnut: ['40%', '55%'],
    rose: ['20%', '55%']
};

let data = [{
        value: 400,
        name: '搜索引擎'
    },
    {
        value: 335,
        name: '直接访问'
    },
    {
        value: 310,
        name: '邮件营销'
    },
    {
        value: 274,
        name: '联盟广告'
    },
    {
        value: 235,
        name: '视频广告'
    }
];

let type = 'rose'; // pie doughnut

function getOption() {
    return {
        color: ['#b34020', '#d95132', '#ff6347', '#ff8170', '#ffa199'],
        grid: {
            top: 46,
            left: 16,
            right: 16,
            bottom: 16,
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
            backgroundColor: '#000'
        },
        legend: {
            data: data.map(item => item.name)
        },
        series: [{
            type: 'pie',
            radius: radius[type],
            center: ['50%', '60%'],
            data: data,
            roseType: type === 'rose' ? 'radius' : void 0,

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
                return Math.random() * 200;
            }
        }]
    };
}

option = getOption();

let types = ['rose', 'doughnut', 'pie'];
let i = 0;

setInterval(function() {
    // data[i++ % data.length].selected = true; // 选中使用selected
    type = types[(i++) % 3];
    myChart.setOption(getOption());
}, 1000);