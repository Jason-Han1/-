
let dataPie = [
    { name: '男', value: 200 },
    { name: '女', value: 100 },
];
var placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
    },
};
var data = [];
var color1 = ['rgba(255, 109, 109, 1)', 'rgba(239, 212, 94, 1)'];
for (var i = 0; i < dataPie.length; i++) {
    data.push(
        {
            value: dataPie[i].value,
            name: dataPie[i].name,
            itemStyle: {
                normal: {
                    color: color1[i],
                },
            },
        },
        {
            value: 1,
            name: '',
            itemStyle: placeHolderStyle,
        }
    );
}
option = {
    backgroundColor:"#000",
    title: {
        text: '共计',
        subtext: '1个',
        textStyle: {
            fontSize: 35,
            color: '#fff',
            lineHeight: 34,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
        },
        subtextStyle: {
            fontSize: 35,
            color: '#fff',
            lineHeight: 34,
            fontWeight: 400,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
        },
        textAlign: 'center',
        left: '50%',
        top: '45%',
    },
    tooltip: {
        trigger: 'item', //注释掉之后鼠标经过扇形图时不显示
        // height: 86,
        // width: 224,
        backgroundColor: 'rgba(0, 0, 0, 0.41)',
        axisPointer: {
            type: 'shadow',
        },
        textStyle: {
            fontSize: 22,
            fontFamily: 'PingFangSC-Regular, PingFang SC',
            width: 224,
            height: 816,
            color: '#FFFFFF',
            padding: [32, 21],
            lineHeight: 22,
            fontWeight: 400,
        },
        formatter: (params, ticket, callback) => {
            var html =
                '<div style="height: 69px;margin-left: 21px,background: rgba(0, 0, 0, 0.41);border-radius: 4px;box-shadow: 0px 2px 12px 0px rgba(255, 255, 255, 0.5);font-size: 27px;font-family: PingFangSC-Regular, PingFang SC;padding:10px 10px">';
            html +=
                '<div style="font-weight: 400;color: #FFFFFF;line-height: 30px;margin:22px 23px;">' +
                params.name +
                ':' +
                params.value +
                '个</div>';
            html += '</div>';
            // console.log("html", html);

            return html;
        },
    },
    legend: {
        itemWidth: 30,
        orient: 'vertical',
        // align : 'auto',
        icon: 'pin',
        // right: "14%",
        left: '49%',
        //       textStyle: {
        //   color: "#FFFFFF",
        //   fontSize: 27,
        // },
        data: dataPie,
        textStyle: {
            color: '#FFFFFF',
            // left:1000,
            rich: {
                uname: {
                    width: 80,
                    color: '#A6AAB5',
                    fontSize: 33,
                    padding: [20, 20],
                    fontFamily: 'PingFang SC',
                    fontWeight: 700,
                },
                unum: {
                    width: 70,
                    height: 40,
                    color: '#A6AAB5',
                    fontSize: 30,
                    padding: [20, 50],
                    fontFamily: 'PingFang SC',
                    lineHeight: 30,
                    fontWeight: 700,
                },
                a: {
                    width: 9,
                    height: 40,
                    color: '#40DAFF',
                    fontSize: 50,
                    padding: [20, 50],
                    fontFamily: 'Roboto',
                    lineHeight: 30,
                    fontWeight: 700,
                },
                b: {
                    width: 9,
                    height: 40,
                    color: '#A6AAB5',
                    fontSize: 30,
                    padding: [20, 70],
                    fontFamily: 'Roboto',
                    lineHeight: 30,
                    fontWeight: 700,
                },
            },
        },
        formatter(name, value) {
            // return `{uname|${name}}{unum|• • • • • • • •}{a|98}{uname|个}`;

            let target, percent;
            for (let i = 0; i < dataPie.length; i++) {
                if (dataPie[i].name === name) {
                    target = dataPie[i].value;
                    //  percent = ((target/total)*100).toFixed(2);
                }
            }
            //  {uname|${name}}{unum|• • • • • • • •}{a|98}{uname|个}
            let arr = [' {uname|' + name + '}' + ''];
            return arr;
        },
    },
    series: [
        {
            // name: "姓名",
            type: 'pie',
            fontSize: 60,
            // radius: [130, 170],
            radius: ['40%', '57%'],
            center: ['50%', '50%'],
            // center: ["22%", "49%"],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            // itemStyle: {
            //   borderWidth: 11,
            //   borderColor: "#112C4E",
            // },
            // ],
            data: data,
        },
    ],
};
