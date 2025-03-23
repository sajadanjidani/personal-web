const $ = document
const template = $.createElement("template")
template.innerHTML = `
    <link rel="stylesheet" href="/public/css/style.css">
    <!-- skill box -->
    <div class="flex gap-5 items-center h-20 font-danaRegular">
        <!-- image -->
        <div class="w-[90px] h-[90px]">
            <img id="imageSkill">
        </div>
        <!-- content -->
        <div class="w-full">
            <h1 id="nameSkill" class="font-danaDemibold text-cWhite">HTML - 5</h1>
            <div class="flex items-center justify-between w-full h-5 md:h-4 rounded-full bg-lightBg overflow-hidden">
                <div id="perecentSkill" class="w-0 h-full bg-iceBlue rounded-full"></div>
                <p id="perecentSkillNum" class="flex pt-1 text-white ml-2 text-xs">90%</p>
            </div>
        </div>
    </div>
`

class SkillItem extends HTMLElement {
    constructor(){
        super()
        this.attachShadow({mode : "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback(){
        this.shadowRoot.querySelector("#imageSkill").src = this.getAttribute("imageSrc")
        this.shadowRoot.querySelector("#nameSkill").innerHTML = this.getAttribute("nameSkill")
        this.shadowRoot.querySelector("#perecentSkill").style.width = this.getAttribute("fillPerecentSkill")
        this.shadowRoot.querySelector("#perecentSkillNum").innerHTML = this.getAttribute("fillPerecentSkill")
    }
}

export {SkillItem}