const getPost = async() => {
    try{
       const response = await fetch ('data/blog.json');
       const data = await response.json();
       console.log(data);
       return data;
    }catch {
     console.log(error);
    }
};

(async ()=>{
    const newBlog = await getPost();


    newBlog.forEach(item =>{
        const paragraphText =document.querySelector('#posts');
        paragraphText.innerHTML = item;
    })
})()