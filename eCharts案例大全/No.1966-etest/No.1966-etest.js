var spiritEmpty =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAAAXNSR0IArs4c6QAAAXJJREFUOE/dkrFLw1AQxu/yQl7UVGzBgmiHap6gXRxEQSjSxT/apRRBEJd2qGlptEMtQoVWTIhJSHLyaiptWnFz8G137/txd98dQua1222NMbYr03EcDyuVSjgvwfmg1+txIqoi4prME9EHIt4IIYKZLgscAMBxpuiDEOJxJWDbtklERwstIFqmadorgX6/r0dRdAkAWioIVVVtlMtlfwmo1+tqLpfDfD6/HgRBSQo454PJZOI5jkO1Wi2SOWy1Whuc8zPGmJF1LBM7nufdY6fTOWWM7fwinn7HcfyC3W63qijKFgAERKQh4oJzRESIKHfBkyR5+wYQsZk6xDPVAkS0iOjkjwHf95u6rsulLbXk+76l6/pXS5ZlHSqKUoqi6E7TtAsJEFEy9RxRkWaEYXirqup5kiSD7C1dpRWG6eDyagMhxPVPx/cfAHnamwDwlA65DwDvQojGyqFHo5ExHo+3Xdd9lgLDMPYKhcJrsVh0Z8AnDO/a41RxH6YAAAAASUVORK5CYII=';
var spiritBlue =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAAAXNSR0IArs4c6QAAAa9JREFUOE990j+MDGEcxvHvM3O3pYJwCgqNhNAItYYcIYSG273E7SYKlYpYhdIJlUpxye5dcmsv4txFiL+N9kgUhFJBcYsolHt2H5nZucvsmDHdvO/v8/5+z5tXZL4z97ytNMpEtNxdo710Sd/TJUr/TMx4jIB3iB3xuvlGn4Pti+qs1w2Dpq8IbqcPMVxtV3UnF1RmXTfczIxwvTWl6VxwvuGdwQjvgS1xgfjZX+PAQk1f/wGVeW+yCHt9doVQjQp60AwDvsj0WpP6HZ9xbs67g1GWZfZkb2woi/gsc1rltheBs/8rTu09UnnBK8Ahww/BZiDM4J7hl2Ar8FblBwkQNZnoNsYyoGNRl2nEoPLQK446BAlwBogB6NNQDBYHHSRqhmlygKDujQ5LGxmqErfygM01QXMw0rJvIKYExw1vogw23fjORQnodOFwCZ5hZofeUuWxV5PQ95Pg5Qi0Tml7/lt6kgAzAGIAThaBpwUdThSB516NQ6c7iE7rWBF4kQCSkaBMBMYLwORLfwD2AXeTkJcxH+fHtT8/9GvvFRwdCZmLCv70uGB41TqiT+vgL+I9rnpss6TSAAAAAElFTkSuQmCC';
var spiritGreen =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAAAXNSR0IArs4c6QAAAgVJREFUOE99kj9oU1EUxn/n5U/BwaFV00GHKCkouoiZXVpKBakUqW3SWhMEdXJSjIOjEZ2cVJBE0bZS2tBaaint4poIDoqCQYM2aJ7WDg6FJn3vSF6S0sSHd7uX87vf951zhJZzubS0z2jzD4OFvWlNPuzs/bmzRHZeLporAb9P3oDur71LsVzRE48D3Wajrgm4sr58TZW7TT8K1x+099xzBS6trSTAvt3s0rj5aE930hWI/V464FN9q0qHYwjWKoYcT3f0rv4DRPOvdqvf9rTt8ga9SqxasCWV9OaGFKRsWOOhU3+cT84XF7q8fplFOdzasaa78NHG2y8xc2EG1YH/Fm/7kYyM/ZjPAmHgF9AOeFpgC1gH9gI5Gf3+MotqWNG4iJFENdBsRUxVOyFICpGcjBTnsqBhhDiQRGkBqA4tgZICyUl0NZNVCKtBXFTcFUQTYpOSqqWhbzONDNVW3oEWBRyFG0DayXDu6/Qt0Au2pX2GR147gFKurRJ+wLQtPWl4ZBHkSdMuDRamSlpTmKgHjwiYU8HBTtfVOFt4UdJqaKkDSkQEczo45A4MfJks1bu0rYBgZg4OuwNnPk+UnDloXUGIIGLOHoq4A/358RK0AIg5F4q6A6c/PXsncBS4jwHYXFV4P981esw1dF/++RGPao/Xt/XUWe+Kd8wSWV4MjXxoAH8BV+TG8Ug2ijsAAAAASUVORK5CYII=';
var spiritYellow =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAAAXNSR0IArs4c6QAAAeFJREFUOE990s9vDHEYx/H3Z6Zbtx4I68DBRUK4NNaPODg5IFLpzYqwi6MfiVS6pU2jdIWTP8AuEXrSVKQcSqQSwVQ4EI4OHHYQh15Ia76PzOxWdseuuc3kec3zfJ48IvXY5OFVzvcPgsOLbEL9t782l6j5xe4fz5rnXmO2JvkufZH7uUV9E+FSXSt4UBwwdLX1j3ZO+yvX2oPpYyUzjbcA2ZD23Si3B1OFtdadeQusaBR818Jirw5UP/8D7OGhHlyPT1e0zjmvEBdEnqtmfvuf8OYj7b0zn8T6NX1i/bKuzJTBhvTGUtv5iKI+2czJe2bW/7/iv+NIk3KPTwVADuMbsBzht2AjAn4gVgJzck/OJECoaFi8jWyqWyhUMqySAHt6NrAYSEXMypYCghCpZGYVJWB2IMDIgRXBK4OlOigEVwJVUAyeDQZgOVABcQVLASnEGASrgmJQGkEcRdEe8GcxsoiFJIfRjQgh2oX5jzButt7S8/O1JLTZ3cbx5YFQOy+vbn8aL4ZrSQeoA8jHHbRjrAN4OVprZGgCCrV9tAN4dbFW31JjJJQHhdo20gEEY/UMzSPFGbYOdwBzl94Bm5Cu17dkp4H3yl3Y3D70m/GNyHbD4q16QeYIphn1Dn1YAn8AaJPFy+Y3ZjEAAAAASUVORK5CYII=';
var spiritOringe =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAVCAYAAAByrA+0AAAAAXNSR0IArs4c6QAAAeNJREFUOE99kz1oU1Ecxc+5L6mI2kHROOjgIih1ETM7OTgJbsZBGxyqoq8N/cgrWLBgk7ahWgXbQVId1Elxc3ByTQUHRUcHO/SpOFTEGnPvkZcP6It53u3ee373d//3g+hqP4aG9m3rM+cAi991Pt21vPxla4RbO/IvZSxTbwAeaI1rbVONEzsXH4SdXAywo5fH5DgXW9Fo3KsszScBgcSZGEBNepWlUk9AhSsHrce3APZEAQLfjNVxLtz//A+ga+f7saPf+2PNIUMORgEnraQ99wk/NyzvPd5oLrIZXD2cFl+IPNJ9YrGtSR+NNWfoJv1nDjr7v3BnzoDP6W74NQlZQF8B7AboxWFZAN8B7iWxSjfl1wRkBeUJRqeR6bKFggKCVSICbg43DSLzhEpQF0CEAgNK1ZZhulATlJWQp0FvwCEgUSW4Sner0DZgkEC5twFFCitNg50ZmQLMRWMbp+WlXqtVQ71dRx+BsG4bJ9Ne6iXgHsbekiuPrQPKCHjSvukcwNAU5/f3fBpuNgKQEdUCxByA0EwkAZXxdajLQIZmdC7BsDDRBtoGMIcIKMwmALcjAPEaiNCMJAF3iu8ADFBYhAEk+ADem+Hysd7/4W5wFHKn4LY/agbMrwugecXrpQ8d4C9hoNfANgXcmgAAAABJRU5ErkJggg==';
var data = [891, 400, 1220, 1000, 660, 800, 1670, 1900];
var picArr = [spiritBlue, spiritBlue, spiritGreen, spiritGreen, spiritYellow, spiritYellow, spiritOringe, spiritOringe];

var color = [
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#5CC0FF'
            },
            {
                offset:1,
                color:'#5998FF'
            }
        ]
    },
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#48D69E'
            },
            {
                offset:1,
                color:'#70F3C2'
            }
        ]
    },
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#FFD18C'
            },
            {
                offset:1,
                color:'#FEAD5A'
            }
        ]
    },
    {
        type:'linear',
        colorStops:[
            {
                offset:0,
                color:'#FF977B'
            },
            {
                offset:1,
                color:'#FB6A66'
            }
        ]
    }
]


var yData = ['“双师型”教师比例','全国均值','具有研究生学位的专任教师比例','全国均值','学生体质健康达标率','全国均值','应届生初次就业率','全国均值']
var maxData = 2000;
var pictorialBarData = data.map((item, index) => {
    return {
        name:yData[index],
        value: item,
        symbol: picArr[index],
    };
});

option = {
    tooltip: {},
    xAxis: {
        show:false,
        max: maxData,
        splitLine: { show: false },
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999',
            },
        },
        axisLabel: {
            margin: 10,
        },
    },
    yAxis: {
        show:false,
        data: data,
        inverse: true,
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
            margin: 10,
            color: '#999',
            fontSize: 16,
        },
    },
    grid: {
        left:'2%',
        right:'10%',
        top:'5%',
        bottom:'4%',
        containLabel:true
    },
    series: [
        {
            // current data
            type: 'pictorialBar',
            // symbol: spirit,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolClip: true,
            symbolSize: [12, 20],
            symbolBoundingData: maxData,
            data: pictorialBarData,
            label:{
                show:true,
                formatter: item=>{
                    if(item.dataIndex % 2 == 0){
                        console.log(item.dataIndex/2)
                        return `{line${item.dataIndex/2}|}{pdr|}${item.name}`
                    }
                    return `{pdr|}${item.name}`
                    //item.name
                },
                position:'right',
                offset:[-200,-20],
                rich:{
                    line0:{
                        width:2,
                        height:12,
                        backgroundColor:color[0]
                    },
                    line1:{
                        width:2,
                        height:12,
                        backgroundColor:color[1]
                    },
                    line2:{
                        width:2,
                        height:12,
                        backgroundColor:color[2]
                    },
                    line3:{
                        width:2,
                        height:12,
                        backgroundColor:color[3]
                    },
                    pdr:{
                        width:5,
                        height:1
                    }
                }
            },
            z: 10,
        },
        {
            // full data
            type: 'pictorialBar',
            itemStyle: {
                normal: {
                    opacity: 0.2,
                },
            },
            label: {
                show: true,
                formatter: function (params) {
                    return ((params.value / maxData) * 100).toFixed(1) + ' %';
                },
                position: 'right',
                offset: [10, 0],
                color: 'green',
                fontSize: 18,
            },
            animationDuration: 0,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbol: spiritEmpty,
            symbolSize: [12,20],
            symbolBoundingData: maxData,
            data: pictorialBarData,
            z: 5,
        },
    ],
};
