var data = [{
        name: '杭州市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '宁波市',
        value: (Math.random() * 100).toFixed(2)
    },
    {
        name: '温州市',
        value: (Math.random() * 100).toFixed(2)
    },


]

var imgs=[
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAACnElEQVRIiaWW24tNYRjGf3uNcRijQaPETEoYpxtMCBkXanLhjkZIXIySwx/gUITLKXGrnO5IRImURIgLJaYQao+R5DgaGcyerWd61m7N1xpm7Xlrt9Z+v+97n/d7T8/KFZubGUTmAB3Aj2C5BuhN0f9TRqQsVgKLgV8JYy1AIzAeGAkUgR7gHXADeJQVqApYDjwH3gKtwEbgG/AAuA68BkYB8w2+F+gD2oB7tjMT+AB8TwOSp8uAl8BvezrWhu4k9o0BfgIvgIvW7QbOAueBQ0ABWALcBv5oQ5QwsNC3yANN9nyFQdYBl+ylbtdtoBPALD8bndfZwBvnd1FsPC6GacBU4H4Qygn2cvV/UnAU2O/3Ct8IR0h5zOtGOaAeaA8OK/FPhgAi2Qec8nshoW+37ZyA6lxBXcHhq940VNkKbA/2djmfdQKqBT4FG9Y6P1nlGFAdnPksjMgx/RIs7iwDBFfk+kAn2xWRm687sVDpCipXmoJzsl2My7svsTDF1VauTA7O9duOUoz1BMBZpTdtfxQ8cVN2DgPoVRpG3EdhpdwcBtCV4H913EdqsInBYluZIGrQW4FOtguRe6g2WNQcO1IG0KYUXX+fRs7HaBNaUg4ApzOAtHhkrQE2WFdj251xH2lqz0scGufnNmBPyuRIijhoqYevuOyMp4Fkrm2X+ijvkm7w/wXAXY99UcAkYAtwErhmylAeV3lUPQR2ABeAzS6mBl9CtgcQ32NgpftIHHTZXgrwMHDOv1AEtguYAYhznpp26pOEGX6cVJlDOsy0mhIHffCr9R/toNY0BdQeMnjcNhQFMYK4rfQBk/YVJEpXzBXnmKOUUG2c7vGklngPPAvIUg4oZGJnRaYkg31uKXfKi6ZEFtHtlJeBAvwFqb+Z1HAwfFkAAAAASUVORK5CYII=',
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAC3ElEQVRIiaWWSUiVURTHfz6zOawwqJshNE+rihALbRFIi3aFUQS28EI00LoBimopRO7upmnnpmlVQZSVRVAgJY0Klt2IBjOMrHy+OF/nvb53+Ux9HpDnd+53zv8M95z/V5RpmMMQsgx4A3wPjkuBgZze+aHs82Rcgq4EWAv8jIHUAWuA6cB4IAP0A++w5hrOPxwOKMxoMrAOeA68BRqA7cBX4D7wCOgAJgArFVwyHwQacf5e5MWaRcAHnP+WBCSRVgOvNNrzwBTgINASC2YS8CP3JKWzZh9wAGgGjgEGWADcwvnf8loq5mCVZtEF1Gjk6xVkC3AxivJvdn3AC6AJaxbjfFMsu6U436n9XR1mVAHMBVqD0s7QKDcO04KTOH9Yy1aM82n9vyrqo/NdklERMA9oD4yl8W0jABE5hDVntJTpmL498m1NkQCVa096A+OrGsBIpR5rbN67zvdqP8sFqAz4FDjbrP0ZrZzCmqmBzWfBEKBi4EtwuKcAEPRGbg104rs4pcPXFzso0RtUqNQEduI7k73eg7EDo7etUJmdZ+d85DuV4Kw/AB6tDCS9nwp+0aHsHgPQ67wna1JZIJmj8KbcGAPQleBZfEdzJAM2MzhsLBCkHedvBjrxnU7pDJUFh7LHThQAtCNBF81pSvsxUQktLkeAs6MAqcP5NqzZhDXbIo01peq7OztHsrVXxIym6e8uYH/C5oiLcFAlzjdjjXDZOd0GIssj385n4nxUCfRo2aqjjQyyu57p+U7VG2XfzmgfOn9bo9+tVajH+etYsySaR+cfEFD5Y3XUrxx0SSniDnAcuKB/+WLNBmAvsBCoxfknWFOhCzlHmElUXqWk9VKjP6p81aP6jxqgnMkWkPFowfnTmpmQnzBCK87nPmySvoKE0qWMUucsR0lDa4H5up5kJN4DT3H+H1laIwFIyTpwXiqTk6SvoF/AXWBWTCdGl/9zIbKSxvmQQAH4A98XzptcbCMOAAAAAElFTkSuQmCC'
    ,'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAYAAADkgu3FAAAC7ElEQVRIiaWWyUvVURTHP/eZzWGFQZgSNE+rW4RYZIug26JdYRSBLQqigaBdAxTlUoj8AxqWbqJc9Ksgysoi8AdS0mhgAxENZhhZ+bxx7Dy5XJ7T82ze+537O+d7hnvO92darzOULAfeAj+j8xKgL6e3zg/pIJQJeXTFwFrgdwBSA6wBZgITAfHeC3xIE3PDOv94JKA4o6nAOuA58A7YC+wEvgMPgVagA5gErFJwybwfqLfOPxAnaWIWA5+s8z/yAUmkG4BXGu1lYBpwDGgOgpkC/Mo9SOnSxBwCjgCNwGmgDFgI3LHO/5X3MoEDq1l0AtUa+XoF2QZckSg1ux7gBdCQJmaJdb4hyG6Zdf6N9nd1nNF8YB7QEpV2lka5aYQW1FnnT2jZiqzzWf1fJX20zndKRgaoANojY2l82yhARI6nibmgpcwGevFZkSbGCFC59qQ7Mm7SAEYrtWli9oXvWue7tZ/lAlQKfImcbdX+jFXOpYmZHtl8FQwBKgK+RYcHCgBBb+T2SCe+izI6fD3BQbHeoEKlOrIT3z53vfuDgzK9bYXK3NDOOj/gO5PHWW8EPFbpy/d+JvpFh/L9OIBehw9pMnCzyc1RfFNujQPoWvQsvgfQZMBmR4f1BYK0W+dvRzrxnc3oDJVGh7LHzhYAtCuPbmBOM9qPyUpooZwELo4BpMY635YmZkuamB3870+J+n6fmyPZ2isDoxn6uwc4nGdzhCIcVGmdb0wTI1x2SbeByArxbZ33IR9VAl1aNuGlOkB21zM93636MmVfoYIm6/xdjX6/VqHWOn8zTcxSmUfr/COGIT7hpKNiBNwDzgAfh8hoI3AQWCTBWOefpIkR2hGWbbbO/4mBUCqvUtJ6qdGfUr7qUv1n/daQM9kCMh7i8LxmJuQnjNBinR/8sMn3FSSZSRmlzjmOkoZuBhboepKRkAyfWucHyTJNjAQgJeuwzsuGGZR8X0GS6n1gTqATo6vDXIicZK3zMYEC8A+qkuSBk3RXjAAAAABJRU5ErkJggg=='
]
var colors = [
    {color1:'rgba(31,46,61,1)',color2:'rgba(255,71,71,1)'},
    {color1:'rgba(30,46,61,1)',color2:'rgba(255,101,25,1)'},
    {color1:'rgba(27,42,54,1)',color2:'rgba(205,183,0,1)'},
]
var data = data.sort((a, b) => b.value - a.value);
var max = Math.max(...data.map(item => item.value));
var xAxis = [],
    yAxis = [],
    series = [];
    yAxis.push({
        type: 'category',
        axisLine: {
            show: false
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'left',
            padding: [0, 0, 15, 10],
            color: '#fff',
            fontSize: '16',
            formatter: (p, index) => {
                var sIndex = data.map(item => item.name).indexOf(p);
                return '{index'+index+'|} ' + p;
            },
            rich: {
                index0: {
                    width:20,
                    height:20,
                    backgroundColor:{
                        image:imgs[0]
                    }
                        
                },
                index1: {
                    width:20,
                    height:20,
                    backgroundColor:{
                        image:imgs[1]
                    }
                        
                },
                index2: {
                    width:20,
                    height:20,
                    backgroundColor:{
                        image: imgs[2]
                    } 
                }
            }
        },
        axisTick: {
            show: false
        },
        inverse: true,
        data: data.map(item => item.name)
    })
    yAxis.push({
        type: 'category',
        axisLine: {
            show: false
        },
        axisLabel: {
            verticalAlign: 'bottom',
            align: 'right',
            padding: [0, 0, 15, 10],
            textStyle: {
                color: '#fff',
                fontSize: '26',
            },
            formatter: '{value}'+'件'
        },
        axisTick: {
            show: false
        },
        inverse: true,
        data: data.map(item => item.value)
    })
    series.push({
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 0,
        yAxisIndex: 0,
        zlevel: 1,
        data: data.map((item,i)=>{
            item.itemStyle = {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: colors[i].color1 // 0% 处的颜色
                }, {
                    offset: 1,
                    color: colors[i].color2 // 100% 处的颜色
                }], false),
                barBorderRadius: 5
            }
            return item;
        })
    })
    series.push({
        type: 'bar',
        barWidth: 10,
        xAxisIndex: 0,
        yAxisIndex: 1,
        itemStyle: {
            color: 'rgba(50,67,79,1)',
            barBorderRadius: 5
        },
        barGap: '-100%',
        zlevel: 0,
        data: (new Array(data.length)).fill(max)
    })

option = {
    backgroundColor:'rgba(0,0,0,.5)',
    legend: {
        show: false
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: 0,
        top: 0,
        containLabel: true
    },
    yAxis: yAxis,
    xAxis: {
        show: false,
        type: 'value',
        max: max,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: series
}