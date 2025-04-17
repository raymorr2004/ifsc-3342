document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.getElementById("videoWrapper");
  
    if (!wrapper) return;
  
    wrapper.addEventListener("click", () => {
      wrapper.innerHTML = `
        <iframe 
          width="100%" height="100%"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      `;
    });
  });
  
  
  