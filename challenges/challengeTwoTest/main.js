const vocabularioUm = ['zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove']
const vocabularioDois = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa']
const vocabularioTres = ['cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seissentos', 'setessentos', 'oitocentos', 'novecentos']
const vocabularioQuatro = [['', 'mil', 'milhões', 'bilhões', 'trilhões', 'quadrilhões'], ['', 'mil', 'um milhão', 'um bilhão', 'um trilhão', 'um quadrilhão']]

const textBox = document.querySelector('.textbox')
const resTxt = document.querySelector('.resTxt')

document.querySelector('.btn').addEventListener('click', ()=>{
    if(textBox.value <= 999999999999999999){
        resTxt.innerHTML = toExtense(textBox.value)
    }else{
        resTxt.innerHTML = 'O número precisa ser menor que 999999999999999999 :/'
    }
})

function toExtense(num){
    num = String(num)
    if(num == 0) return 'zero'

    let res = ''
    let newNum

    function getExtense(string){
        string = String(string)
        if(string == '000') return ''
        if(string == '100') return 'cem'
        let one = string.charAt(0)!='0'?string.charAt(0):''
        let two = string.charAt(1)!='0'&&string.charAt(0)!='0'?string.charAt(1):''
        let three = string.charAt(2)
        let tempStr = ''
        console.log(string);
    
        if(string >= 20){
            if(string.length == 1){
                tempStr += vocabularioUm[one]
            }else if(string.length == 2){
                if(two!=0){
                    tempStr += `${vocabularioDois[one-2]} e ${vocabularioUm[two]}`
                }else{
                    tempStr += vocabularioDois[one-2]
                }
            }
            else if(string.length == 3){
                tempStr += vocabularioTres[one-1] + ' e '
                if(`${two}${three}` < 20){
                    tempStr += `${vocabularioUm[`${two}${three}`]}`
                }else{
                    if(three != 0){
                        tempStr += `${vocabularioDois[two-2]} e ${vocabularioUm[three]}`
                    }else{
                        tempStr += vocabularioDois[two-2]
                    }
                }
            }
        }else if(string < 20){
            tempStr += `${vocabularioUm[string]}`
        }
        return tempStr
    }
    function ThreeInThree(string){
        string = string.split('').reverse()
        let newStr = []
        for(let i=0; i<string.length;i++){
            if(i % 3 == 0 && i != 0){
                newStr.push('.')
                newStr.push(string[i])
            }else{
                newStr.push(string[i])
            }
        }
        return newStr.reverse().join('').split('.')
    }
    
    if(num < 20 && num >= 0){
        res = vocabularioUm[num]
    }else if(num >= 20 && num < 100){
        res = getExtense(`0${num.charAt(0)}${num.charAt(1)}`)
    }else if(num >= 100 && num < 1000){
        res = getExtense(`${num.charAt(0)}${num.charAt(1)}${num.charAt(2)}`)
    }else if(num >= 1000){
        newNum = ThreeInThree(num)

        let counter=0
        let tempArr = []
        for(let i=newNum.length; i>0; i--){
            if(getExtense(newNum[i-1])!=''){
                tempArr.push(`${newNum[i-1]!='1'?vocabularioQuatro[0][counter]:vocabularioQuatro[1][counter]} `)
            }
            tempArr.push(`${newNum[i-1]!='1'?getExtense(newNum[i-1]):''} `)
            counter++
        }
        tempArr = tempArr.reverse().join('')
        res = tempArr
    }

    return `${res}`
}