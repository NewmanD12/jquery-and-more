let myDiv = $("<div></div>")
let body = $('body')
let ul = $('<ul></ul>')
let text = $('#text')
let column = $('#column')

column.append(myDiv)
myDiv.text('Click Here')
column.append(ul)

myDiv.on('click', () => {
    let li = $(`<li>${text.val()}</li>`)
    text.val('')
    ul.append(li)
})

