// var data = [{
//     value: 5,
//     name: '高等教育学'
// }, {
//     value: 2,
//     name: '高等教育心理学'
// }, {
//     value: 1,
//     name: '综合学科'
// }];

// var a = 0;
// var scale = 1;
// for (var i = 0; i < data.length; i++) {
//     a += data[i].value;
// }
// data.push({
//     value: a,
//     name: ''
// });

const data = [{
    status: '健康设备',
    value: 5
}, {
    status: '低危设备',
    value: 6
}, {
    status: '高危设备',
    value: 2
}];
let all = 0;
let scale = 1;
for (let i = 0; i < data.length; i++) {
    all += data[i].value;
}
data.push({
    value: all,
    name: '',
    itemStyle: {
        normal: {
            color: '#efefef'
        }
    }
});


console.log(data)
option = {
    color: ['#74D2A0', '#E87C47', '#CB4B53'],
    legend: {
        orient: 'vertical',
        right: '50px',
        bottom: '20px',
        itemGap: 15,
        borderRadius: 20,
        itemWidth: 12,
        itemHeight: 8,
        formatter(params) {
            let number;
            data.map((item) => {
                if (params === item.status) {
                    number = item.value;
                }
            });
            return params + ': ' + number;
        },
        selectedMode: false
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        startAngle: -180,
        hoverAnimation: false,
        radius: ['78%', '55%'],
        center: ['50%', '50%'],
        data:data,
        label: {
            normal: {
                show:false
            }
        },
        labelLine: {
            normal: {
                length: 80 * scale,
            }
        }
    }],
    // dataset: {
    //     source: data
    // }
};