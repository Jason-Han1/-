var value = 0.48;
var data = [value, value ];
var option = {
    backgroundColor: '#000928',
    title:[{
        text:'项目库存',
        left:'center',
        top:'70%',
        textStyle:{
            fontSize:20,
            fontWeight:'normal',
            color:'#fff'
        }
    },{
        text:(value * 100).toFixed(2) + '%',
        left:'center',
        top:'36%',
        textStyle:{
            fontSize:35,
            fontWeight:'normal',
            color:'#fff'
        }
    }],
    series: [{
        type: 'liquidFill',
        radius: '50%',
        center: ['50%', '40%'],
        data: data,
        outline: {
            // show: false
            borderDistance: 5,
            itemStyle: {
                borderWidth: 5,
                borderColor: '#284B9A',
                type:'dashed',
            },
        },
        backgroundStyle: {
            borderWidth: 2,
            borderColor: '#1daaeb',
            color: '#000928'
        },
        label: {
            normal: {
                formatter: '',
            }
        }
    }]
};