option = {
    backgroundColor: '#f1f0ed',
    title : {
        text: '阅读形式倾向调查报告（2010-2017）',
         textStyle :{
             fontSize:'14',
         },
        subtext: '           数据来源：全民阅读调查报告',
         subtextStyle: {
            fontSize:'8',
            },
        x:'30%',
        top:'40%'
    },
    tooltip: { //提示框组件
        trigger: 'item', //触发类型,'item'数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。 'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
        triggerOn: "mousemove", //提示框触发的条件,'mousemove'鼠标移动时触发。'click'鼠标点击时触发。'mousemove|click'同时鼠标移动和点击时触发。'none'不在 'mousemove' 或 'click' 时触发
        showContent: true, //是否显示提示框浮层
        alwaysShowContent: false, //是否永远显示提示框内容
        showDelay: 0, //浮层显示的延迟，单位为 ms
        hideDelay: 0, //浮层隐藏的延迟，单位为 ms
        enterable: false,
        formatter : '{b}<br/>{a} : {c}%'
    },
    angleAxis: {
        show: false,
        type: 'category',
        startAngle: 180,
        axisLabel: {
            show: true,
            interval: "0",
        },
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '0', '0', '0', '0', '0', '0', '0', '0'],
        z: 10
    },
    radiusAxis: {
        max: '180',
        show: false,
    },
    polar: {},
    barWidth: 18,
    center: ['45%', '50%'],
    series: [

        {
            type: 'bar',
            center: ['47%', '70%'],
            data: [63.8, 73.5, 74.4, 66, 57.2, 57.5, 51.6, 45.1],
            coordinateSystem: 'polar',
            name: '纸质',
            color: '#b5aa90',
            stack: 'a'
        },
        {
            type: 'bar',
            center: ['47%', '70%'],
            data: [21.4, 11.8, 13.2, 15, 14.3, 10.2, 9.8, 12.2],
            coordinateSystem: 'polar',
            name: '网络在线阅读',
            color: '#Fbb929',
            stack: 'a'
        },
        {
            type: 'bar',
            center: ['47%', '70%'],
            data: [1.7, 2.8, 1.3, 1, 1.6, 1.2, 1, 1.4],
            coordinateSystem: 'polar',
            name: '其他',
            color: '#F7DA94',
            stack: 'a'
        },
        {
            type: 'bar',
            center: ['47%', '70%'],
            data: [13, 11.9, 11.2, 18, 26.9, 31.1, 37.6, 41.3],
            coordinateSystem: 'polar',
            name: '移动端阅读',
            color: '#F2E6CE',
            stack: 'a'
        }
    ],
    legend: {
        show: true,
        textStyle:{
             fontSize:'12',
        },
        itemGap: 5,
        orient: 'vertical',
        left: '70%',
        top: '56%',
        itemWidth: 14,
        itemHeight: 12,
        data: ['纸质', '网络在线阅读', '移动端阅读', '其他']
    },
};
myChart.setOption(option);
window.addEventListener("resize",function(){
    myChart.resize();
});