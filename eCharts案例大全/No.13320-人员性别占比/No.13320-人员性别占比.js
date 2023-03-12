var manNum = 500;
var womanNum = 5000;

var rotateAngle = (manNum) / 2 / (manNum + womanNum) * 360 + 180;



var data = [{
    value: manNum,
    name: '男'
}, {

    value: womanNum,
    name: '女'
}]
var rich = {
    man: {
        align: 'center',
        padding: [20, 0, 0, 0],
        backgroundColor: {
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMxMTA2NzMxNzg0IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2NzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQyMC40OCAxODkuNDRjLTMwLjcyIDAtNTMuNzYgMTAuMjQtNzYuOCAzMC43MkMzMjMuMiAyNDMuMiAzMTAuNCAyNjguOCAzMTAuNCAyOTYuOTZ2MjYzLjY4YzAgMTAuMjQgMi41NiAxNy45MiAxMC4yNCAyNS42IDcuNjggNy42OCAxNS4zNiAxMC4yNCAyNS42IDEwLjI0czIwLjQ4LTIuNTYgMjguMTYtMTAuMjRjNS4xMi03LjY4IDEwLjI0LTE1LjM2IDEwLjI0LTI1LjZWMzI1LjEyaDE3LjkydjY1Mi44YzAgMTIuOCA1LjEyIDIzLjA0IDE1LjM2IDMzLjI4IDEwLjI0IDEwLjI0IDIwLjQ4IDEyLjggMzMuMjggMTIuOCAxNS4zNiAwIDI1LjYtNS4xMiAzNS44NC0xMi44IDEwLjI0LTEwLjI0IDE1LjM2LTIwLjQ4IDE1LjM2LTMzLjI4VjU5OS4wNGgyMC40OHYzNzguODhjMCAxMi44IDUuMTIgMjMuMDQgMTUuMzYgMzMuMjggMTAuMjQgNy42OCAyMy4wNCAxMi44IDM1Ljg0IDEyLjggMTIuOCAwIDIzLjA0LTUuMTIgMzMuMjgtMTIuOCAxMC4yNC0xMC4yNCAxMi44LTIwLjQ4IDEyLjgtMzMuMjh2LTY1Mi44aDIwLjQ4djIzNS41MmMwIDEwLjI0IDIuNTYgMTcuOTIgMTAuMjQgMjUuNiA3LjY4IDcuNjggMTcuOTIgMTAuMjQgMjUuNiAxMC4yNCAxMC4yNCAwIDIwLjQ4LTIuNTYgMjUuNi0xMC4yNCA1LjEyLTcuNjggMTAuMjQtMTUuMzYgMTAuMjQtMjUuNlYyOTYuOTZjMC0yOC4xNi0xMC4yNC01My43Ni0zMC43Mi03Ni44LTIwLjQ4LTIwLjQ4LTQ2LjA4LTMwLjcyLTc2LjgtMzAuNzJINDIwLjQ4ek01MTIuNjQgMTY4Ljk2YzIzLjA0IDAgNDMuNTItNy42OCA1OC44OC0yMy4wNCAxNS4zNi0xNS4zNiAyNS42LTM1Ljg0IDI1LjYtNjEuNDQgMC0yMy4wNC03LjY4LTQzLjUyLTI1LjYtNTguODgtMTUuMzYtMTcuOTItMzUuODQtMjUuNi01OC44OC0yNS42QzQ4OS42IDAgNDY5LjEyIDcuNjggNDUzLjc2IDI1LjYgNDM4LjQgNDAuOTYgNDMwLjcyIDYxLjQ0IDQzMC43MiA4NC40OGMwIDIzLjA0IDcuNjggNDMuNTIgMjMuMDQgNjEuNDQgMTUuMzYgMTUuMzYgMzUuODQgMjMuMDQgNTguODggMjMuMDR6IiBwLWlkPSIyNjcxIiBmaWxsPSIjNzA3ZGIyIj48L3BhdGg+PC9zdmc+'
        }
    },
    woman: {
        align: 'center',
        padding: [20, 0, 0, 0],
        backgroundColor: {
            image: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTMxMTA4Mjc1OTA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMi41NzYgMTAzLjYxNm0tODcuNjggMGE4Ny42OCA4Ny42OCAwIDEgMCAxNzUuMzYgMCA4Ny42OCA4Ny42OCAwIDEgMC0xNzUuMzYgMFoiIHAtaWQ9IjEwNjIiIGZpbGw9IiNmZjc0ODciPjwvcGF0aD48cGF0aCBkPSJNNzM1LjgwOCA1MTQuMTc2TDY2Ni4zNjggMjk4LjI0Yy0wLjUxMi0xLjQwOC0xLjIxNi0yLjY4OC0xLjc5Mi00LjAzMi0yNy43MTItNzAuMDgtODkuMjgtODYuNTI4LTExMS4wNC04Ni41MjhINDcwLjRjLTIxLjgyNCAwLTgzLjM5MiAxNi41MTItMTExLjA0IDg2LjUyOC0wLjU3NiAxLjM0NC0xLjIxNiAyLjYyNC0xLjcyOCA0LjAzMkwyODguMTkyIDUxNC4xNzZhMzQuNTYgMzQuNTYgMCAwIDAgNjUuNDcyIDIxLjY5Nmw2Ni45NDQtMjA4LjA2NGgxNS42OGwtMTE0LjI0IDM1Ni44NjRoOTMuMjQ4djI4Mi43NTJhNDAuNzY4IDQwLjc2OCAwIDEgMCA4MS41MzYgMHYtMjgyLjc1MmgzMC41Mjh2MjgyLjc1MmE0MC43NjggNDAuNzY4IDAgMSAwIDgxLjUzNiAwdi0yODIuNzUyaDkzLjI0OEw1ODcuNzc2IDMyNy44MDhoMTUuNjE2bDY3LjAwOCAyMDguMDY0YTM0LjQ5NiAzNC40OTYgMCAxIDAgNjUuNDA4LTIxLjY5NnoiIHAtaWQ9IjEwNjMiIGZpbGw9IiNmZjc0ODciPjwvcGF0aD48L3N2Zz4='
        }
    },
    yellow: {
        color: "#ffc72b",
        fontSize: 34,
        padding: [5, 4],

    },
    blue: {
        color: '#49dff0',
        fontSize: 16,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}




option = option = {
    backgroundColor: '#031f2d',
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b} : {c} 人 <br/>占比:{d}%"
    },
    series: [{
        name: '',
        /*minAngle: 180,*/
        startAngle: rotateAngle,
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['35%', '50%'],
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: true,
                position: 'left',
                formatter: function(params, ticket, callback) {
                    var a = params.name === '男' ? '{man|}' : '{woman|}';
                    return a + '\n{blue|' + params.percent + '%}';
                },
                rich: rich
            },
            emphasis: {
                show: true,
                formatter: null,
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }],
    color: ['#707db2', '#ff7487'],

    animation: true,
    animationThreshold: 2500,
    addDataAnimation: true,
    animationDuration: 2000,
    animationEasing: 'ExponentialOut'
};