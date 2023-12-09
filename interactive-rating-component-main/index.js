const btn = document.getElementById("sub");
const rating = document.querySelector(".selected-number")
const card = document.querySelector(".star");
const card2 = document.querySelector(".rating-complete")


function onSubmit(event) {
    event.preventDefault();
    // alert("Clicked on button");
    console.log("Your function is called")
    const ratingValue = document.querySelector(
        "input[name='one']:checked");
         console.log("option selected " +ratingValue.value);    
    

    
      if ((ratingValue.value === null)) {
        return
      }

      card.setAttribute('hidden', true);
      card2.removeAttribute('hidden');
      rating.innerText = ratingValue.value;
    
    
}

btn.addEventListener("click", onSubmit); 
