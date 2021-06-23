const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {
    insert.innerHTML = `
    <div class="key">
          ${e.key === ' ' ? 'Space' : e.key}
          <small>evet.key</small>
        </div>
        <div class="key">
         ${e.keyCode === ' ' ? 'Space' : e.keyCode}
          <small>event.KeyCode</small>
        </div>
        <div class="key">
          ${e.code}
          <small>event.code</small>
        </div>
    `
})