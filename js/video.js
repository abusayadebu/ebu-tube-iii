// Fetch, Load and show the categories on html--

// create loadCategories

const loadCategories = () => {
    // fetch the data
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
    
}

// loadAllVideos
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .then((error) => console.log(error))
}

// loadCategoryVideos 
const loadCategoryVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideos(data.category))
    .then((error) => console.log(error))
    
}


// create displayCategories
const displayCategories = (catgeories) => {
    catgeories.forEach( (item)=>{
        console.log(item);

        // create btn
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = 
        ` <button onclick="loadCategoryVideos(${item.category_id})" class="btn">
            ${item.category}
            </button>
        `;
       

        // show the buttons 
        const categoryContainer = document.getElementById("category-container");
        categoryContainer.append(buttonContainer);
    })
}

// display videos
const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos-container")
    videoContainer.innerHTML = "";

    if(videos.length == 0){
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML = 
        `<div class="min-h-[300px] flex flex-col justify-center items-center gap-5">
        <img src="assets/Icon.png" />
        <h2 class="text-xl text-center font-bold">No Content Here in this category</h2>
            </div>
        `
    }
    else{
        videoContainer.classList.add("grid");
    }

    videos.forEach((video)=> {
        const card = document.createElement("div")
        card.classList = "card bg-base-100 shadow-sm"
        card.innerHTML = 

        `<figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src= ${video.thumbnail}
      alt="" />
      
      ${video.others.posted_date?.length == 0 
        ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white p-2 rounded text-xs">${getTimeString(video.others.posted_date)}</span>`
      }
        
  </figure>

  <div class="px-0 py-2 flex gap-2">
  <img class="w-[35px] h-[35px] rounded-full object-cover" src= ${video.authors[0].profile_picture}>
    <div class =""> 
    <h2 class="text-xl font-bold">${video.title}</h2>
    <div class="flex gap-2">
    <p class="text-lg">${video.authors[0].profile_name}</p>
    ${video.authors[0].verified == true 
        ? `<img class="w-7 object-cover" src="https://img.icons8.com/?size=100&id=123575&format=png"></img>` : ""}
    </div>
    <p>${video.others.views} views</p>
    </div>
  </div>
        `
        videoContainer.append(card);

    })
}


loadCategories();
loadVideos()
// displayCategories();