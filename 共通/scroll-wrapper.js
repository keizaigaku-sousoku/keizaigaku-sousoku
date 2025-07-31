window.addEventListener("load", () => {
    if (window.MathJax && MathJax.startup) {
        MathJax.startup.promise.then(() => {
            document.querySelectorAll('.mjx-container').forEach(el => {
                const parent = el.parentElement;
                if (parent.classList.contains('math-container')) return;
                if (el.scrollWidth > el.clientWidth) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'math-container';
                    el.replaceWith(wrapper);
                    wrapper.appendChild(el);
                }
            });
        });
    }
});
