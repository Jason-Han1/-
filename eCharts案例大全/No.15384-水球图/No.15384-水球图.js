//------------------------------------引用请注明出处

var option = {
    title:{
        text:'水球图练习',
        subtext:'作者 : 花自飘凌水自流',
    },
    tooltip: {
        show: true
    },
    series: [{
        type: 'liquidFill',
        name:'liquidFill',
        data: [{
            value:0.45,
            name:'cateGory'
        },0.45,0.4],
        color:['green','cyan','blue'],
        radius: '40%',
        outline:{show:false},
        //自定义路径
        shape:'path://M836.246588 713.185882L828.235294 798.117647H210.823529L120.470588 0h783.058824l-19.877647 210.823529H1024v60.235295h-146.070588L842.691765 645.210353 963.764706 512h60.235294l-187.753412 201.185882zM963.764706 271.058824h60.235294v240.941176h-60.235294V271.058824zM0 813.176471h1024l-169.743059 210.823529H169.743059L0 813.176471z',
        center: ['25%', '25%'],
        // 文字样式
        label:{
            normal:{
                formatter: '{a}\n{b}\nValue : {c}',
                textStyle:{
                    color:'red',
                    insideColor:'yellow',
                    fontSize:20
                },
            },
        },
    }, 
    {
        type: 'liquidFill',
        data: [0.42, 0.5, 0.4, 0.3],
        direction: 'left',
        radius: '40%',
        shape: 'arrow',
        center: ['75%', '25%'],
        label:{
            normal:{
                textStyle:{
                    color:'red',
                    insideColor:'yellow',
                },
            },
        },
    }, 
    {
        type: 'liquidFill',
        data: [0.43, 0.5, 0.4, 0.3],
        radius: '40%',
        shape: 'circle',
        center: ['25%', '75%'],
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        outline: {
            show: false
        },
        //关闭动画
        waveAnimation: false, 
    }, 
    {
        type: 'liquidFill',
        data: [0.44, 0.5, 0.4, 0.3],
        radius: '50%',
        shape: 'pin',
        center: ['75%', '75%'],
        //振幅
        amplitude: 0,
        waveAnimation: false,
        outline: {
            show: false
        },
        backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        }
    }]
};
