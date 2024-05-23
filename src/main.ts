import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<ul id="td-list">
</ul>
<form id="new-td">
    <input type="text" id="new-td-title">
    <button type="submit">Add</button>
</form>
`
