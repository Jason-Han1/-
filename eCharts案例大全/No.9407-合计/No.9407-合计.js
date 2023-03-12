var YQdata = [{
        value: 335,
        legendname: '种类01',
        name: "种类01",
        itemStyle: {
            color: "#f06acc"
        }
    },
    {
        value: 310,
        legendname: '种类02',
        name: "种类02",
        itemStyle: {
            color: "#822e6b"
        }
    },
    {
        value: 234,
        legendname: '种类03',
        name: "种类03",
        itemStyle: {
            color: "#f3d4a3"
        }
    },
    {
        value: 154,
        legendname: '种类04',
        name: "种类04",
        itemStyle: {
            color: "#68cc6d"
        }
    },
    {
        value: 335,
        legendname: '种类05',
        name: "种类05",
        itemStyle: {
            color: "#c2a597"
        }
    },
];
var textsum = 0;
var text = 0;
(
    function() {


        for (var j = 0; j < YQdata.length; j++) {
            text = YQdata[j].value;
            textsum += text

        }
        return textsum;
    }
)();



option = {
    title: [{
        text: '合计',
        subtext: textsum + '个',
        textStyle: {
            fontSize: 20,
            color: "black"
        },
        subtextStyle: {
            fontSize: 15,
            color: '#8C8C8C'
        },
        textAlign: "center",
        x: '34.5%',
        y: '46%',
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>数量是：{c}<br/>占比：({d}%)'
        // formatter: function(parms) {
        //     var str = parms.seriesName + "</br>" +
        //         parms.marker + "" + parms.data.legendname + "</br>" +
        //         "数量：" + parms.data.value + "</br>" +
        //         "占比：" + parms.percent + "%";
        //     return str;
        // }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '70%',
        align: 'left',
        top: 'middle',
        textStyle: {
            color: '#8C8C8C',
        },
        height: 250,
        formatter: function(name) {
            var sum = 0;
            var amount = 0;
            for (var i = 0; i < YQdata.length; i++) {
                sum += YQdata[i].value;
                if (name == YQdata[i].name) {
                    amount = YQdata[i].value;
                }
                var Avg = (amount / sum * 100).toFixed(2);

            }

            return name + "   " + Avg + "%   " + amount + "笔";
            // return sum
        },

    },
    series: [{
        name: '',
        type: 'pie',
        center: ['35%', '50%'],
        radius: ['30%', '40%'],
        clockwise: false, //饼图的扇区是否是顺时针排布
        avoidLabelOverlap: false,
        label: {
            normal: {
                position: 'inner',
                show: false,
                // show: true,
                // position: 'outter',
                //  formatter:function (parms){
                //      return parms.data.legendname
                //  }
            }
        },
        data: YQdata
    }]
};
