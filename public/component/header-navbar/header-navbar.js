const $ = document
const template = $.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="/public/css/style.css">
    <svg class="hidden">
        <symbol id="brasIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
          </symbol>
        <symbol id="xmarkerIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </symbol>
    </svg>
    <nav class="py-5 lg:pb-10 px-3 md:px-10 text-cWhite font-danaRegular">
        <div class="flex justify-between items-center w-full h-20 overflow-hidden">
            <!-- logo Type -->
            <h1 class="font-danaBlack text-3xl md:text-2xl text-lightBg cursor-pointer hover:text-iceBlue transition-all duration-300 animate-rtl">TC</h1>
            <!-- menu -->
            <ul class="hidden lg:flex gap-10 child:cursor-pointer child-hover:text-iceBlue child:transition-all child:duration-300 child:animate-utb">
                <li><a href="/public/html/index.html#homeSection"> خانه </a></li>
                <li><a href="/public/html/index.html#aboutmeSection"> درباره من </a></li>
                <li><a href="/public/html/index.html#myskillSection"> مهارت </a></li>
                <li><a href="/public/html/index.html#myServiceSection"> خدمات </a></li>
                <li><a href="/public/html/index.html#myPortfolioSection"> نمونه کار </a></li>
                <li><a href="/public/html/index.html#contentmeSection"> ارتباط </a></li>
            </ul>
            <!-- btn -->
            <a href="#contentmeSection" id="HireMeLg" class="hidden lg:block py-3 px-4 border text-sm rounded-lg bg-iceBlue text-darkBg hover:bg-darkBg hover:text-iceBlue hover:border-iceBlue transition-all duration-300 animate-ltr">درخواست همکاری</a>
            <!-- menu icon -->
            <svg id="openMenuBtn" class="block lg:hidden size-8"><use href="#brasIcon"></use></svg>
            <svg id="closeMenuBtn" class="hidden lg:hidden size-8"><use href="#xmarkerIcon"></use></svg>
        </div>
    </nav>
    <!-- menu sm -->
            <nav>
                <div id="menuSM" class="hidden fixed z-50 top-0 right-0 w-4/6 h-screen border-l-2 border-b-2 border-cWhite bg-iceBlue py-10 px-5">
                    <ul class="grid gap-5 text-xl font-danaDemibold md:text-lg text-darkBg child:cursor-pointer child-hover:text-white mb-10">
                        <li><a class="itemSmMenu" href="/public/html/index.html#homeSection"> خانه </a></li>
                        <li><a class="itemSmMenu" href="/public/html/index.html#contentmeSection"> ارتباط </a></li>
                        <li><a class="itemSmMenu" href="/public/html/index.html#myskillSection"> مهارت </a></li>
                        <li><a class="itemSmMenu" href="/public/html/index.html#myServiceSection"> خدمات </a></li>
                        <li><a class="itemSmMenu" href="/public/html/index.html#myPortfolioSection"> نمونه کار </a></li>
                        <li><a class="itemSmMenu" href="/public/html/index.html#aboutmeSection"> درباره من </a></li>
                    </ul>
                    <!-- btn -->
                    <a href="#contentmeSection" id="HireMe" class="grid justify-center items-center w-full h-16 -mt-5 border font-danaDemibold md:text-sm rounded-lg bg-darkBg text-iceBlue border-iceBlue">درخواست همکاری</a>
                </div>
                <div id="coverMenu" class="hidden w-2/6 h-screen fixed z-50 top-0 left-0 bg-black/70"></div>
            </nav>
`

class HeaderNavbar extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        const openMenuBtn = this.shadowRoot.querySelector("#openMenuBtn")
        const closeMenuBtn = this.shadowRoot.querySelector("#closeMenuBtn")
        const menuSM = this.shadowRoot.querySelector("#menuSM")
        const coverMenu = this.shadowRoot.querySelector("#coverMenu")
        const itemSmMenu = this.shadowRoot.querySelectorAll(".itemSmMenu")
        const sendRequest = this.shadowRoot.querySelector("#HireMe")
        const sendRequestLg = this.shadowRoot.querySelector("#HireMeLg")
        const subjectInp = $.querySelector("#subjectInp")
        // create function
        const openMenu = () => {
            openMenuBtn.style.display = "none";
            closeMenuBtn.style.display = "block";
            menuSM.style.display = "block";
            coverMenu.style.display = "block";
            menuSM.classList.add("animate-OpenMenu")
            coverMenu.classList.add("animate-OpenCover")
            setTimeout(() => {
                menuSM.classList.remove("animate-OpenMenu")
                coverMenu.classList.remove("animate-OpenCover")
            },1000)
        }
        const closeMenu = () => {
            menuSM.classList.add("animate-CloseMenu")
            coverMenu.classList.add("animate-CloseCover")
            setTimeout(() => {
                openMenuBtn.style.display = "block";
                closeMenuBtn.style.display = "none";
                coverMenu.style.display = "none";
                menuSM.style.display = "none";
                menuSM.classList.remove("animate-CloseMenu")
                coverMenu.classList.remove("animate-CloseCover")
            },1000)
        }
        const sendRequstFunc = e => {
            const target = e.target;
            subjectInp.value = target.innerHTML
        }
        // set event
        openMenuBtn.addEventListener("click",openMenu)
        closeMenuBtn.addEventListener("click",closeMenu)
        itemSmMenu.forEach(item => {
            item.addEventListener("click",closeMenu)
        })
        coverMenu.addEventListener("click",closeMenu)
        sendRequest.addEventListener("click" ,closeMenu)
        sendRequest.addEventListener("click" ,sendRequstFunc)
        sendRequestLg.addEventListener("click" ,sendRequstFunc)

    }
}

export {HeaderNavbar}