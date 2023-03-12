// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
        data: [0.4*0.96],// 若原值为0<x<100% 原值乘以0.96 是为了造成偏低的视觉感；若原值为100%，则可以设置为1.1，来保证水珠充满
        
        radius: '40%',
        waveLength: '90%',//波长
        waveHeight: '10',//波长
        amplitude: 6,//振幅
        outline: {
            show: false
        },
        backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        shape: 'path://M90,350L90,340L100,340L100,320L330,320L330,340L340,340L340,350L90,350M110,310L110,220L100,220L100,210L150,210L150,220L140,220L140,310M170,310L170,220L160,220L160,210L210,210L210,220L200,220L200,310 M230,310L230,220L220,220L220,210L270,210L270,220L260,220L260,310 M290,310L290,220L280,220L280,210L330,210L330,220L320,220L320,310 M90,200L340,200L213,105z M190,165,A24,24,0,1,1,190,165.01Z',
        label: {
            normal: {
                position: ['50%', '-30%'],
                formatter: function() {
                    return '80%';
                },
                textStyle: {
                    fontSize: 20,
                    color: '#D94854'
                }
            }
        }
    }]

};