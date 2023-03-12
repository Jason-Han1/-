option = {
    title: {
        text: '队伍人员结构-学历分布',
        subtext: '',
        left: 'center',
        top: '60px',
    },
    tooltip: {
        trigger: 'item',
       
    },
    legend: {
        orient: 'vertical',
        left: '25%',
        top: '130px',
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: '20%',
            top: '5%',
            data: [
                { value: 18, name: '本科以下' },
                { value: 10, name: '本科' },
                { value: 10, name: '研究生' },
                { value: 10, name: '研究生以上' }
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};




// ----------------------------------------------------------------
// option = {
//     title: {
//         text: '队伍执勤情况',
//         subtext: '',
//         left: 'center',
//     },
//     tooltip: {
//         trigger: 'item',
//     },
//     legend: {
//         orient: 'vertical',
//         left: 'left',
//     },
//     series: [
//         {
//             name: 'Access From',
//             type: 'pie',
//             radius: '50%',
//             data: [
//                 { value: 1048, name: '执勤次数' },
//                 { value: 735, name: '执勤时长' },

//                 { value: 184, name: '执勤规范评分' },
//             ],
//             emphasis: {
//                 itemStyle: {
//                     shadowBlur: 10,
//                     shadowOffsetX: 0,
//                     shadowColor: 'rgba(0, 0, 0, 0.5)',
//                 },
//             },
//         },
//     ],
// };
