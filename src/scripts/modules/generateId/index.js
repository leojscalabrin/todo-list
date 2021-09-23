import randomNumber from "../randomNumber/index.js"

const generateId = (maxLength) => {
    let id = ''
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZÇ'

    for(let i = 0; i < maxLength; i++){
        const number = randomNumber(characters.length)
        id += characters[number]
    }
    
    return id
}

export default generateId