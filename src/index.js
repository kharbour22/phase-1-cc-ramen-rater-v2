// index.js

// Callbacks
const handleClick = (ramen) => {
 
  const ramenImage = document.querySelector('.detail-image');
    ramenImage.src = ramen.image

    const ramenName = document.querySelector('.name');
    ramenName.textContent = ramen.name;

    const ramenRestaurant = document.querySelector('.restaurant');
    ramenRestaurant.textContent = ramen.restaurant;

    const ramenComment = document.querySelector('#rating-display')
    ramenComment.textContent = ramen.rating

    const ramenRating = document.querySelector('#comment-display')
    ramenRating.textContent = ramen.comment

}
 const addSubmitListener = () => {
    const addNewRamenForm = document.getElementById('new-ramen');
    addNewRamenForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      
      const newName = document.getElementById('new-name').value;
      const newRestaurant = document.getElementById('new-restaurant').value;
      const newImage = document.getElementById('new-image').value;
      const newRating = document.getElementById('new-rating').value;
      const newComment = document.getElementById('new-comment').value;
  
      
      const newRamen = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment,
      };
  
      
      const imgElement = document.createElement('img');
      imgElement.src = newRamen.image;
  
      
      imgElement.addEventListener('click', () => {
        handleClick(newRamen);
      });
  
      
      const ramenMenuDiv = document.getElementById('ramen-menu');
      ramenMenuDiv.appendChild(imgElement);
  
      addNewRamenForm.reset();
   
    });
  };

const displayRamens = () => {
  const ramenMenuDiv = document.getElementById('ramen-menu');
  fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => {
      ramens.forEach(ramen => {
        const imgElement = document.createElement('img');
        imgElement.src = ramen.image; 
        ramenMenuDiv.appendChild(imgElement);


        imgElement.addEventListener('click', () => {
          handleClick(ramen)

          }); 
        
        handleClick(ramens[0])  
    }); 
})
}

    
 

  

const main = () => {
  displayRamens();
  addSubmitListener();
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

