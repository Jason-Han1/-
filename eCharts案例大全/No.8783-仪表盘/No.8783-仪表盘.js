var db_options = {      //用于改变dashboard_option里的参数
    "data": [{
        "value": null,
        "name": ""
    }],
    "color": [],
    "title": {
        show: true,
        offsetCenter: [0, '100%'],
        color: '',
        fontSize: 18,
        backgroundColor: "",
        borderRadius: 5,
        padding: 10
    }
};

var dashboard_option = {       //echarts的设置
    series: [{
            name: "",
            type: "gauge",
            center: ["50%", "45%"],
            radius: "70%",
            min: 0,
            max: 100,
            data: db_options.data,
            axisLine: {
                show: true,
                lineStyle: { // 属性lineStyle控制线条样式
                    color: db_options.color,
                    shadowColor: "#ccc",
                    shadowBlur: 10,
                    width: 15
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: { //指针样式
                length: '60%',
                color: "#4A90E2"
            },
            title: db_options.title,
        },

    ]
};

function init_dashboard(value) {        //此函数根据value的范围大小，为仪表盘参数设置不同的颜色、数字
    db_options.data[0].value = value;
    db_options.color.splice(0, db_options.color.length);
    if (0 < value && value < 30) {        //0~29、30~59、60~100为三个范围，样式、文字不同
        db_options.data[0].name = "低危";
        db_options.color.push([value / 100, '#55d2f8']);
        db_options.title.color = '#55d2f8';
        db_options.title.backgroundColor = "rgba(85, 210, 248, 0.4)";
    } else if (30 <= value && value < 60) {
        db_options.data[0].name = "中危";
        db_options.color.push([value / 100, '#ffca36']);
        db_options.title.color = '#ffca36';
        db_options.title.backgroundColor = "rgba(255, 202, 54, 0.4)";
    } else if (60 <= value && value <= 100) {
        db_options.data[0].name = "高危";
        db_options.color.push([value / 100, '#ff624b']);
        db_options.title.color = '#ff624b';
        db_options.title.backgroundColor = "rgba(255, 98, 75, 0.4)";

    } else {}
    db_options.color.push([1, '#5a5a5a']);
}

function db_init(value) {     //改变option的入口，需要传入一个值
    var option_dashboard=[];
    init_dashboard(value);
    option_dashboard = dashboard_option;
    return option_dashboard;
}

option = db_init(70);     //调用db_init()函数，设置option