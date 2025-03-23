const $ = document
const template = $.createElement("template")
template.innerHTML = `
    <svg class="hidden">
        <symbol id="codeIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </symbol>
        <symbol id="bugIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
            </symbol>
        <symbol id="penIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </symbol>
    </svg>
    <link rel="stylesheet" href="/public/css/style.css">
    <div class="relative h-[400px] rounded-md bg-darkBg pt-8 px-4 group font-danaRegular hover:border hover:border-iceBlue hover:transition-all hover:duration-500 hover:scale-[103%]">
        <svg class="size-16 mx-auto text-lightBg group-hover:text-iceBlue transition-all duration-500"><use id="iconID"></use></svg>
        <h1 id="title" class="font-danaDemibold text-2xl text-center my-2.5 text-lightBg group-hover:text-iceBlue transition-all duration-500">بازتوسعه سایت</h1>
        <p id="content" class="text-lightBg text-justify md:text-sm group-hover:text-cWhite transition-all duration-500 tracking-tighter">یه سایت آماده دارید که دیگه قدیمی شده و نیاز به تغییر داره؟ یا می‌خواید امکانات جدیدی بهش اضافه کنید؟ من می‌تونم سایتتون رو از نو بسازم و با یه طراحی مدرن و جذاب، و امکانات پیشرفته، یه سایت کاملاً جدید و منطبق با نیازهای روزتون تحویلتون بدم. </p>
        <div class="flex justify-center items-center">
            <a href="#contentmeSection" id="sendRequst" class="absolute bottom-5 py-3 md:py-2 px-8 md:px-4 text-lightBg border border-lightBg rounded-full group-hover:text-iceBlue group-hover:border-iceBlue hover:border-none hover:bg-lightBg transition-all duration-200">درخواست</a>
        </div>
    </div>
`

class ServicesItem extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector("#iconID").setAttribute("href",`#${this.getAttribute("iconID")}`)
        this.shadowRoot.querySelector("#title").innerHTML = this.getAttribute("title")
        this.shadowRoot.querySelector("#content").innerHTML = this.getAttribute("content")

        const sendRequst = this.shadowRoot.querySelectorAll("#sendRequst")
        const subjectInp = $.querySelector("#subjectInp")

        const sendRequstFunc = e => {
            const target = e.target.parentElement.parentElement.firstChild.nextElementSibling.nextElementSibling
            subjectInp.value = target.innerHTML
        }

        sendRequst.forEach(item => {
            item.addEventListener("click",sendRequstFunc)
        })
    }
}

export {ServicesItem}