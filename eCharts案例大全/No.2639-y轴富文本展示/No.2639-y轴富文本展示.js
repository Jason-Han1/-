const yData = [0,1,2]
const richIcon = {
      value: {
        lineHeight: 30,
        align: 'center',
      },
    };
    yData.forEach((v, index) => {
      richIcon[index] = {
        width: 24,
        height: 24,
        borderRadius: 12,
        align: 'center',
        backgroundColor: {
          image: 'https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&hs=0&pn=6&spn=0&di=228690&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=3355464299%2C584008140&os=1095218752%2C2568289393&simid=0%2C0&adpicid=0&lpn=0&ln=1824&fr=&fmq=1626771707495_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201202%2F18%2F20120218194349_ZHW5V.thumb.700_0.jpg%26refer%3Dhttp%3A%2F%2Fcdn.duitang.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1629363710%26t%3D7dcdd6263b35bff7182c4036a195ab46&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Frj5rsjAzdH3F4ks52AzdH3FmbmcclmmAzdH3F1jpwtsAzdH3F&gsm=c&rpstart=0&rpnum=0&islist=&querylist=&nojc=undefined',
        },
      };
    });
var seriesLabel = {
    show: true
}

option = {
    title: {
        text: 'Weather Statistics'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['City Alpha', 'City Beta', 'City Gamma']
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',
        name: 'Days',
        axisLabel: {
            formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: yData,
        axisLabel: {
            formatter: function (value) {
                return '{' + value + '| }\n{value|' + value + '}';
            },
            margin: 20,
            rich: richIcon
        }
    },
    series: [
        {
            name: 'City Alpha',
            type: 'bar',
            data: [165,200,300],
        }
    ]
};