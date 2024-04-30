export function selectCategories() {
    // Cuando cargan las categorías, añadir clase selected si son clicadas
    setTimeout(function(){
        let tags = document.querySelectorAll(".categories-added .tag, .categories-added .tag-group");
        console.log(tags);
        tags.forEach(function(tag){
            tag.addEventListener('click', function(){
                this.classList.toggle("selected")
            })
        })
    }, 1000);
}