var giftImageUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEqklEQVRoQ9WZW4hUdRzHP9+57HrJezobmBA99RIEEUQP0YuKpDu7GxtEVBRqumLa2qq7XjDFS1hkUQmFT4WyoWOWN6ILRWGQkT2E0ZUuOjNuqymtl5mdX5xxZzl7nM3Z3XNmxvMycObM/3w+5/878z2//xF9WyxhryrHkWSTDhb23QifcgkcFcw0+Kg3REtXvX64IQUcaIMsxutXsqw726x/qlnkmhnwwP6NsT6ZZSfN6q1GkesJXGU2TvaGWXimXp9Vm0RpAn3UZhywHMvTD+mXahHpF6hL2BFgVt8V3wk8iJg+COiL2RAbuup1odIiRQVyMCud4dNYlEUyOhBTvaAGKaAjFWcXklVKpGgJ5cTsdFxHHajYURurHlYYtArGXSNinLAQi9NxfVkJiesKFKDG7bMpY8RaGYsQNUVmpDOTo7W7SX+WU6RkgQLU5P12a02OTQaPSoQGwBqXTGwPR9hyaq56yiEyZIEC1JR9dkcEtkrMK1JWf5lYlY7zTtD3x7AFCtB1CbvHjJck7ityxY9ncyzoatI3Qc3GiAX6RfbbHMuxReJON6yBCd7O5ljZ1aTTfov4JnA1P0zTEjwisVFwm0fkX4wtqVFsZ44u+yXir0CB6muL1v3BQoM1gpgH9jeMtmSj3vVDIhiBPjInQ+hhOfCcYPyAGTG+sDCL0/X6biQigQq4M2SsaAdagNrCfjNywK6eKKsvzFXXcETKIuDOkGiODcBjEuF+EThvxsb0DHZwtzJDESmrwIAMEZsFcU9Z/UiI1lRc75cqUREBd4ZgvIC43/OPVXJbW1GBAvTUfTY7LDYDd7nKKgvsvJhh/flmdQ82I1UhUMiQWIKHEZsEt/cDG92I9ckMbxRra6tHoED8iUWmnWO+jHUSdS6RkwYtqUZ97J6N4g2NMTPdqA9LvZECOa7TRscidEh0eMY/lIOl6Qb97OyvvhkAJnXahNooywyWCSa67gun89tNmDWpefq16gTy4BGeNXhGYoLnL/agQrQl4/q+aAnFEpZfmXO+dLeUgZSHZ9CJCZtYC63A0iKPHMcIsSwV11fFWCpaQnlwYwXKgw/ot804oRDtybgO/d9FrIhA3xVvA5ZcAw7Ozbk2FWdPKd1cWQXGd9rkURHaBC0SN3lq/LTB8+lJvMUDckKspK0sAg74mBpWmbFYMNZDdhaxLXmFV2jWxZKoXQcFKlB3yKZymZXAImCMB67HYEemlq3dc3R+qOCF4wMRcMDtEqsFTyNGe0olI/GmGRtSjUoPFzwQgWnvWUw5VslYWATcaV52X4nQfnaefh8puK8CefBe2gULEKO8cAYfSKz0hpAfEiMqoZv32i3hUB58vrtV7I9+41ivWNLVoON+wPoWZA54JMQa4KlBwEsKIT+khjQDk/fa9JqrT4dPDrLA+xOwrtQQKpuAAx4N5VemnxgE/FS+KR9iCAUuMOmAzajJshZ4XCJa5IQjCiFfBdyvmEzMx7hXTqkU25xldHj5sth2rkHn/AAZ7hhDfcnnawgNF9r9u5IE+lbQfA+hsggEGUKBClgZQigQAYNvc9B+pkGH/ThB0GO4l1VeM+PzVKP2BH1SP8f/DyiMkk8db6BlAAAAAElFTkSuQmCC"

option = {
    xAxis: {
        type: "category",
        show:true,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'red'
            }
        },
        axisTick: {
            show:false
         },
         axisLine: {
             show:false
         },
         axisLabel: {
             show:false
         }
    },
    yAxis: {
         show:true,
         axisTick: {
             show:false
         },
          splitLine: {
            show: false
        },
         axisLine: {
             show:false
         },
        axisLabel: {
            show:true,
            formatter: function(value, index){
                if (value > 5) {
                    return [
                `{react|${value}}`,`{margin|}{triangle|}`
            ].join('')
                }
                return ''
            },
            rich: {
                react: {
                    padding:[0, 10, 4, 10],
                    fontSize: 20,
                    color: '#0ce7fd',
                    borderWidth: 1,
                    borderColor: 'rgba(12, 231, 253,0.1)',
                    align: 'center',
                    verticalAlign: 'bottom'
                },
                margin:{
                  padding:[0, 5]  
                },
                triangle: {
                    backgroundColor: {
                        image: giftImageUrl
                    },
                    padding: [2,0],
                   width:10,
                   height:10
                }
            }
        }
    },
    series: [{
        symbolSize: [25, 8],
        data: [
            [3, 8.04],
            [4, 6.95],
            [5, 7.58],
            [6, 8.81],
            [7, 8.33],
            [8, 9.96],
            [9, 7.24],
            [10, 4.26],
            [11, 10.84],
            [12, 2],
            [13, 8]
        ],
        type: 'scatter'
    }],
    "symbol": "rect",
};
