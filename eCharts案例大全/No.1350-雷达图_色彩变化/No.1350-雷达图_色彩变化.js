var str="";
str+="{c|案例1}{b|1例} {d|案例2}{b|1例}\n";
str+="{e|案例3}{b|7例提名4例} {f|案例4}{b|30例提名28例}\n";
str+="{g|“案例5”}{b|5例} {h|案例6}{b|29例}\n";
option = {
    title: {
        text: str,
        right:'center',
        bottom:10,
        textStyle:{
            rich:{
                b:{color:'#333',width:90,fontSize:14,lineHeight:30},
                c:{color:'#ffcb26',width:100,fontSize:14,lineHeight:30},
                d:{color:'#ff8a78',width:100,fontSize:14,lineHeight:30},
                e:{color:'#9dd476',width:100,fontSize:14,lineHeight:30},
                f:{color:'#768ad4',width:100,fontSize:14,lineHeight:30},
                g:{color:'#b476d4',width:100,fontSize:14,lineHeight:30},
                h:{color:'#5499ff',width:100,fontSize:14,lineHeight:30},
                i:{color:'#1ac9f6',width:100,fontSize:14,lineHeight:30},
                j:{color:'#12d891',width:100,fontSize:14,lineHeight:30},
            }
        }
    },
    legend: {
        show:false,
    },
    radar: {
        // shape: 'circle',
        center:['50%','50%'],
        radius:'40%',
        indicator: [
            { name: '案例1', max: 5,color:'#ffcb26'},
            { name: '案例2', max: 5,color:'#ff8a78'},
            { name: '案例3', max: 10,color:'#9dd476'},
            { name: '案例4', max: 50,color:'#768ad4'},
            { name: '案例5', max: 10,color:'#b476d4'},
            { name: '案例6', max: 50,color:'#5499ff'}
        ]
    },
    series: [{
        name: '2',
        type: 'radar',
        data: [
            {
                value: [1, 1, 7, 30, 5, 29,134,20],
                name: 'a'
            },
        ]
    }]
};