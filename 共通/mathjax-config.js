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

            add_math_container: [20, function (doc) {
                setTimeout(() => {
                    document.querySelectorAll('mjx-container[jax="CHTML"][display="true"]').forEach(container => {
                        if (!container.parentElement.classList.contains('math-container')) {
                            const wrapper = document.createElement('div');
                            wrapper.classList.add('math-container');
                            container.parentNode.insertBefore(wrapper, container);
                            wrapper.appendChild(container);
                        }

                        const wrapper = container.parentElement;

                        const needsScroll = container.scrollWidth > container.clientWidth + 1;
                        wrapper.classList.add(needsScroll ? 'scrollable' : 'centered');
                    });
                }, 0); // MathJax描画完了後に実行
            }, '']
        }
    }
};
