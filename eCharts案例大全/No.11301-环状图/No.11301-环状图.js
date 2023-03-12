placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: "center"
        },
        labelLine: {
            show: false
        },
        color: "#fff",
        borderColor: "#fff",
        borderWidth: 0
    }
};
var color = ['#DB7093', '#FF8C00', "#48D1CC"]
var dodata = [{
    value: 30,
    name: '优秀率'
}, {
    value: 20,
    name: '得分率'
}, {
    value: 60,
    name: '及格率'
}]
var datass = [];
for (let i = 0; i < dodata.length; i++) {
    var obj = {};
    obj = {
        name: '值',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [200 - i * 30, 200 - i * 30],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                    position: 'outside'
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 8,
                shadowBlur: 40,
                borderColor: color[i],
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        //及格率数据修改
        data: [{
            value: dodata[i]['value'],
            name: dodata[i].name
        }, {
            value: 100 - dodata[i]['value'],
            name: '',
            itemStyle: placeHolderStyle
        }]
    }
    datass.push(obj);
}
var option = {
    backgroundColor: '#fff',
    series: datass
};