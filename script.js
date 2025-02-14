(() => {
        const scrollContent = document.querySelector('.gallery');
        const nextButton = document.getElementById('next-btn');
        const backButton = document.getElementById('back-btn');
        scrollContent.style.scrollBehavior = 'smooth';


        scrollContent.addEventListener('wheel', (e) => {
                e.preventDefault();
                scrollContent.scrollLeft += e.deltaY;
        });

        nextButton.addEventListener('click', () => {
                scrollContent.scrollLeft += 900;
        });

        backButton.addEventListener('click', () => {
                scrollContent.scrollLeft -= 900;
        });
})()