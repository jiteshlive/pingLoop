let imaginary = document.getElementById('imaginary');
let createPost = document.getElementById('createPost');
let createPostText = document.getElementById('createPostText');
let createPostTimeOut;

createPostText.addEventListener('input', ()=>{
    if (createPostText.value == '') {
        imaginary.style.pointerEvents = 'none';
        imaginary.style.backdropFilter = 'blur(0px)';
        createPostText.style.height = "20px";
        createPostTimeOut = setTimeout(() => {
            createPost.style.zIndex = '';
        }, 300);
        // experimental
        document.body.style.overflow = '';
    } else{
        imaginary.style.pointerEvents = 'all';
        imaginary.style.backdropFilter = 'blur(50px)';
        createPostText.style.height = "180px";
        clearTimeout(createPostTimeOut);
        createPost.style.zIndex = '100';
        // experimental
        document.body.style.overflow = 'hidden';
    }
})
