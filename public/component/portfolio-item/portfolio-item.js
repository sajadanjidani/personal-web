const $ = document
const template = $.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="/public/css/style.css">
    <!-- Portfolio continer -->
    <div class="relative w-full h-40 rounded-xl bg-lightBg cursor-pointer overflow-hidden group font-danaRegular">
        <!-- image continer -->
        <div class="absolute group-hover:z-10 flex justify-center items-center w-full h-full text-white group-hover:text-darkBg transition-all duration-500">
            <!-- image -->
            <h1>... coming soon</h1>
        </div>
        <!-- gradient liner -->
        <div class="hidden group-hover:block absolute group-hover:z-0 w-full h-full bg-gradient-to-b from-iceBlue via-blue-500 to-endliner transition-all duration-1000"></div>
    </div>
`

class PortfolioItem extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export {PortfolioItem}