var value = 0.5555;
var data = [];
data.push(value)
data.push(value - value*1/5);
data.push(value - value*1/3);
data.push(value - value*1/2);
option = {
    title: {
        text: '水球DEMO',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: '#3EABE9'
        }
    },
    series: [{
        type: 'liquidFill',
        data: data,
        radius: '80%',
        backgroundStyle: {
            borderWidth: 10,//内边框粗细
            borderColor: 'red',//内边框颜色
            color: '#AAEEF7'//底色
        },
        label: {
            normal: {
                formatter: value * 100 + '%',//显示所有小数位
                textStyle: {
                    fontSize: 50 //字体大小
                }
            }
        },
        /*outline: {
            show: false//去除边框
        }*/
    }]
};