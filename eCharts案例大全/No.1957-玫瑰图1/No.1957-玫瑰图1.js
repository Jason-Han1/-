let color = ['#CC393D', '#C57D40', '#C5AD43', '#37B2CD', '#368FC8', '#3962CC', '#403ACC', '#8A3BCA', '#8A3BCA'];
let data1 = [
    { value: 40, name: '类别 1'},
    { value: 38, name: '类别 2' },
    { value: 32, name: '类别 3' },
    { value: 30, name: '类别 4' },
    { value: 28, name: '类别 5' },
    { value: 26, name: '类别 6' },
    { value: 22, name: '类别 7' },
    { value: 18, name: '类别 8' },
    { value: 20, name: '类别 9' }
];
 data1.sort(function(a,b){
    return a.value-b.value
})
color.splice(data1.length,data1.length-1);
data1.map((item,index) => {
    data1.push({ value: 0, name: '' });
    color.push('transparent');
});
option = {
    backgroundColor: '#0a1235',
     title: {
        text: '十大用电客户',
        top: '40%',
        left: 'center',
        textStyle: {
          color:'#FFFFFF'
        },
    },
    tooltip: {
        show: false,
    },
       legend: {
        icon: 'circle',
        top: '30%',
         textStyle: {
            color: '#fff',
        },
    },
    //   calculable: true,
    series: [
        {
            name: '玫瑰图',
            type: 'pie',
            startAngle: 0,
            radius: [70, 350],
            center: ['50%', '40%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            itemStyle: {
                normal: {
                    color: function (params) {
                        return color[params.dataIndex]
                    },
                },
            },
            label: {
                show: true,
                position: 'outside',
                fontSize:18,
                formatter: function (params) {
                    return params.value+'WM';
                },
            },
            labelLine: {
                normal: {
                    length: 60,
                    length2: 20,
                    show: true,
                    lineStyle: {
                        width: 1,
                    },
                },
            },
            data: data1,
        },
    ],
};
