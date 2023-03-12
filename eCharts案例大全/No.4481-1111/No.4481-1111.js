// option = {
//     series: [{
//         type: 'liquidFill',
//         data: [0.5],
//         color: 'rgb(79,203,238)', //波浪颜色，若有多个波浪，可设置成数组
//         amplitude: '5%', //波浪的幅度
//         shape: 'circle', //形状
//         outline: { //边框
//             show: false
//         },
//         backgroundStyle: { //背景设置，包括背景、内部圆的边框
//             color: 'rgb(246,246,246)'
//         },
//         label: {
//             color: 'red',
//             show: false,
//             insideColor: 'red',
//             fontSize: 50,
//             formatter: 'test'
//         }
        
//     }],
//     //背景色
//     backgroundColor: 'white',
// };

var option = {
    series: [{
        type: 'liquidFill',
        radius: '80%',
        data: [0.5, 0.45, 0.4, 0.3],
        label: {
            normal: {
                textStyle: {
                    color: 'red',
                    insideColor: 'yellow',
                    fontSize: 50
                }
            }
        }
    }]
};
