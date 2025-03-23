const $ = document

// DB
const portfolioPageArray = [
    {name : "greenweb", LP : "/public/image/myPortfolio/greenweb/video/LP.mp4", TB : "/public/image/myPortfolio/greenweb/video/TB.mp4", MB : "/public/image/myPortfolio/greenweb/video/MB.mp4", poster:"/public/image/myPortfolio/greenweb/cover/greenweb.jpg"},
]
// get element for html
const portfolioContainer = $.querySelector("#portfolioContainer")

// create function
const getDomain = () => {
    let locationSearch = location.search;
    let locationSearchParam = new URLSearchParams(locationSearch);

    portfolioPageArray.forEach(portfolio => {
        if(portfolio.name == locationSearchParam.get("name")){
            portfolioContainer.insertAdjacentHTML("beforeend",`
                <h1 class="text-cWhite font-danaDemibold py-10 text-xl">در سایز لپتاپ :</h1>
                <div class="mx-auto w-2/3 h-80">
                    <video class="w-full h-full" controls poster="${portfolio.poster}">
                        <source src="${portfolio.LP}" type="video/mp4">
                    </video>
                </div>

                <h1 class="text-cWhite font-danaDemibold py-10 text-xl">در سایز تبلت :</h1>
                <div class="mx-auto w-2/3 h-80">
                    <video class="w-full h-full" controls poster="${portfolio.poster}">
                        <source src="${portfolio.TB}" type="video/mp4">
                    </video>
                </div>

                <h1 class="text-cWhite font-danaDemibold py-10 text-xl">در سایز گوشی :</h1>
                <div class="mx-auto w-2/3 h-80">
                    <video class="w-full h-full" controls poster="${portfolio.poster}">
                        <source src="${portfolio.MB}" type="video/mp4">
                    </video>
                </div>

            `)
        }
    })
}

// set event
window.addEventListener("load",getDomain)