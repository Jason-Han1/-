function pieMore(ID,colorsArr, dataArr) {
    //  var myChart = echarts.init(document.getElementById(ID)); //echart容器======>取消注释这里
    var titleArr = [], //标题数组
        seriesArr = []; //配置数组
    dataArr.forEach(function(item, index) {

        console.log(item.color)
        var titleLeft = "", //标题左右距离
            titleTop = "", //标题上下距离
            seriesCenter = []; //图标左右上下距离
        // 判断几个饼  这里只判断了2/4/6个
        switch (dataArr.length) {
            case 2:
                titleLeft = index * 50 + 25 + '%';
                titleTop = "60%";
                seriesCenter = [index * 50 + 25 + '%', "50%"];
                break;
            case 4:
                titleLeft = index < 2 ? index * 50 + 25 + '%' : index * 50 - 75 + '%';
                titleTop = index < 2 ? "40%" : "90%";
                seriesCenter = [index < 2 ? index * 50 + 25 + '%' : index * 50 - 75 + '%', index < 2 ? "25%" : "75%"];
                break;
            case 6:
                titleLeft = index < 3 ? index * 30 + 20 + '%' : (index - 3) * 30 + 20 + '%';
                titleTop = index < 3 ? "40%" : "90%";
                seriesCenter = [index < 3 ? index * 30 + 20 + '%' : (index - 3) * 30 + 20 + '%', index < 3 ? "25%" : "75%"];
                break;

            default:
                alert("异常错误")
        }
        titleArr.push({
            text: item.name,
            left: titleLeft,
            top: titleTop,
            textAlign: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: '16',
                color: "#333",
                textAlign: 'center',
            },
        });
        seriesArr.push({
            name: item.name,
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            // startAngle: 100,//起始旋转角度
            radius: ["5%", "15%"],
            roseType: 'radius', //玫瑰图

            // color: ["pink", "yellow", "green"],
            color:colorsArr,
            center: seriesCenter,
            data: item.list
        })
    });

    option = {
        backgroundColor: "#fff",
        title: titleArr,
        series: seriesArr,
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
    }


    // myChart.setOption(option);  //赋值容器======>取消注释这里
}
pieMore("test",["#012a4a", "#0081a7", "#00af89", "#f3722c", "#f94144"], [{
    name: '标题1',
    list: [{
            name: "类型11",
            value: 600
        },
        {
            name: "类型22",
            value: 600
        },
    ],
}, {
    name: '标题2',
    list: [{
            name: "类型11",
            value: 400
        },
        {
            name: "类型22",
            value: 600
        },
    ],
}, {
    name: '标题3',
    list: [{
            name: "类型11",
            value: 400
        },
        {
            name: "类型22",
            value: 600
        }
    ],
}, {
    name: '标题4',
    list: [{
            name: "类型1",
            value: 200
        },
        {
            name: "类型2",
            value: 600
        },
        {
            name: "类型3",
            value: 600
        },
    ],
}, {
    name: '标题5',
    list: [{
            name: "类型1",
            value: 400
        },
        {
            name: "类型2",
            value: 600
        },
        {
            name: "类型3",
            value: 600
        },
    ],
}, {
    name: '标题6',
    list: [{
            name: "类型1",
            value: 100
        },
        {
            name: "类型2",
            value: 600
        },
        {
            name: "类型3",
            value: 600
        },
        {
            name: "类型4",
            value: 600
        },
        {
            name: "类型5",
            value: 600
        }
    ],
}])