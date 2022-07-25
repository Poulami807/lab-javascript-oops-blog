class Blog{
    constructor(title,detail,img){
     this.title = title
     this.detail = detail
     this.image = img
    }
    addTitle() {
        let card_title = document.createElement('h1')
        card_title.setAttribute("id","blog-title")
        card_title.innerHTML = this.title;
        return card_title

    }
    addDescription() {
        let card_desc = document.createElement('p');
        card_desc.setAttribute("id","blog-desc");
        card_desc.innerHTML = this.detail;

        let blog_date = document.createElement('span');
        blog_date.setAttribute("id","blog-date");
        blog_date.innerHTML= `Posted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`
        return {desc: card_desc, date: blog_date}
    }
    addImage(){
        let card_img = document.createElement('img');
        card_img.setAttribute("id","blog-img");
        card_img.setAttribute('src', this.image)
        card_img.setAttribute('alt', 'blog image')
        return card_img
    }
}
let addPostButton = document.getElementById('addBlog')
let popUp = document.getElementById('popupCard')
let parent = document.querySelector('.body-div2')

addPostButton.addEventListener('click',()=>{
    popUp.style.display = 'inherit'
    addPostButton.style.display = 'none'
    let postBtn = document.getElementById('post')
    let closeBtn = document.getElementById('close')
    postBtn.addEventListener('click',()=>{
        console.log("post called");
        let blg = new Blog(document.getElementById('title').value, document.getElementById('detail').value, document.getElementById('blog-image').value)
        let img = blg.addImage()
        let title = blg.addTitle()
        let {desc,date}=blg.addDescription()
        createBlogCard(img,title,desc,date)
        closePopup()
        document.getElementById('title').value ='' 
        document.getElementById('detail').value = '' 
        document.getElementById('blog-image').value = ''
    })
    closeBtn.addEventListener('click', closePopup)
})

let closePopup = ()=>{
    popUp.style.display = 'none'
    addPostButton.style.display = 'inherit'
}
let createBlogCard = (img,title,desc,date) =>{
    let cardDiv = document.createElement('div')
    cardDiv.className = 'article-card'
    let cardTxt = document.createElement('div')
    cardTxt.className = 'card-text'
    let btnDiv = document.createElement('div')
    btnDiv.className = 'card-buttons'
    let editBtn = document.createElement('button')
    let delBtn = document.createElement('button')
    editBtn.setAttribute("id","edit")
    editBtn.innerText = 'EDIT'
    delBtn.setAttribute("id","delete")
    delBtn.innerText = 'DELETE'

    cardTxt.append(title,desc,date)
    btnDiv.append(editBtn,delBtn)
    cardDiv.append(img,cardTxt,btnDiv)

    parent.appendChild(cardDiv)  
    console.log("called");
}

