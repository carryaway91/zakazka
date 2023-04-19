const wraps = $('.wrap')
const numOfWraps = $('.wrap').length
const children = []
for(let i = 1; i <= numOfWraps; i++) {
    children.push($(`.wrap:nth-child(${i})`).children())
    console.log(children)
}
children.forEach((array) => Array.from(array).forEach((el, idx) => $(el).css('--n', idx)))

