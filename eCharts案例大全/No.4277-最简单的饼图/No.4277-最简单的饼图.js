option = {
    title: { //标题名称
        show: true,
        text: "数\n据\n到\n达",
        x: '10%', 
        y: '50%',
        textStyle: {
            fontSize: 18,
            fontStyle: 'normal',
            fontWeight: 'normal',
            color: '#000000'
        },
    },
    color: ['#F3AA1A', '#1AC47C'],
    legend: { //图例
        type: 'plain',
        orient: 'vertical',
        right: "50",
        y: "center"
    },
    series: [{
        type: 'pie', //饼图
        radius: "50%", //饼图整体的大小
        center: ['50%', '50%'], //饼图在盒子中的水平和垂直位置，可为具体数值,不需要带单位
        // startAngle: 90,
        label: {
            position: 'inside', //outside为数值在外面显示
            formatter: '{c}',
            color: '#ffffff',
            fontSize: 40,
            fontWeight: 400
        },
        data: [ {
                    name: '未到',
                    value: 40
                }, {
                    name: '已到',
                    value: 50
                }]
    }]
};
//  $(window).resize(() => {
 //           myChart.resize();
   //     }); 此为echart图自适应大小