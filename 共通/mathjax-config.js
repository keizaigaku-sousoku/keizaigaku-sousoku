window.MathJax = {
    tex: {
        tags: 'all',
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        tagSide: 'right',
        tagIndent: '0em'
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
            }, ''],

            //
            // ★ MathJax が数式のレンダリングを終えたあとに横スクロールを設定
            //
            wrap_long_display_math: [170, function (doc) {
                document.querySelectorAll('.mjx-container').forEach(container => {
                    // すでに .math-container に包まれていたらスキップ
                    if (container.parentElement.classList.contains('math-container')) return;

                    const display = container.querySelector('.mjx-display');
                    if (!display) return;

                    // はみ出していたら .math-container にラップ
                    if (display.scrollWidth > display.clientWidth) {
                        const wrapper = document.createElement('div');
                        wrapper.className = 'math-container';
                        container.replaceWith(wrapper);
                        wrapper.appendChild(container);
                    }
                });
            }, '']
        }
    }
};
