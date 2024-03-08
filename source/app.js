const adviceContainer = document.querySelector('main');
const adviceReloader = document.querySelector('.advice--reloader');

const noAdviceGen = () => {
    return Math.floor(Math.random() * 225);
};

function renderHTML(data){
    const html = `
        <article>
            <span>Advice # <span class="advice__number">${data.slip.id}</span></span>
            <div class="advice--copy"><span>“</span>${data.slip.advice}<span>”</span></div>

            <div class="advice--divider">
                <img src="./img/pause.png" alt="Play">
            </div>

            <div class="advice--reload">
                <a href="" class="advice--reloader">
                    <img src="./img/refresh-reload.png" alt="Reloader Icon">
                </a>
            </div>
        </article>`;
    return adviceContainer.insertAdjacentHTML('beforeend', html);
}

function adviceAPI() {
  fetch(`https://api.adviceslip.com/advice/${noAdviceGen()}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return renderHTML(data);
    });
}

adviceAPI();

adviceReloader.addEventListener('click', (e)=>{
    e.preventDefault();
    adviceAPI();
    console.log(this)
});