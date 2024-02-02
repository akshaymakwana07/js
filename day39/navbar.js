function loadNav(){
    const nav = `
    
    <div class="sub-header">
    <div class="logo">
        <img src="image/tr1.png" alt="">

    </div>
    <i class="ri-menu-add-line" id="icon"></i>
<nav>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Work</li>
        <li>Contect Us</li>
    </ul>
</nav>
</div>
    `

    document.getElementById("navbar").innerHTML=nav
}
export{loadNav}

