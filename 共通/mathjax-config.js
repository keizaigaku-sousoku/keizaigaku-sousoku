window.MathJax = {
    tex: {
        tags: 'all',
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        tagSide: 'right',
        tagIndent: '0em'
    },
    output: {
        displayOverflow: 'linebreak',
        font: 'mathjax-asana'
    },
    chtml: {
        linebreaks: {
            inline: true,
            width: '100%'
        }
    },
    options: {
        renderActions: {
            find_script: [10, function (doc) {
                document.querySelectorAll('script[type^="math/tex"]').forEach(function (node) {
                    const display = !!node.type.match(/; *mode=display/);
                    const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
                    const text = document.createElement('span');
                    node.parentNode.replaceChild(text, node);
                    math.start = { node: text, delim: '', n: 0 };
                    math.end = { node: text, delim: '', n: 0 };
                    doc.math.push(math);
                });
            }, '']
        }
    }
};
(function () {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js';
    script.async = false;
    document.head.appendChild(script);
})();
