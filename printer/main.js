window.addEventListener('load', function () {
    /**
     * @type {HTMLInputElement|null}
     */
    const title = document.querySelector("#title");
    /**
     * @type {HTMLInputElement|null}
     */
    const content = document.querySelector("#content");
    /**
     * @type {HTMLInputElement|null}
     */
    const titleView = document.querySelector("#titleView");
    /**
     * @type {HTMLInputElement|null}
     */
    const contentView = document.querySelector("#contentView");

    title?.addEventListener('keyup', function changeTitle() {
        setupPrinterFor(title, titleView);
    });

    content?.addEventListener('keyup', function changeContent() {
        setupPrinterFor(content, contentView);
    });

    function setupPrinterFor(main, view) {
        if (main != null && view != null) {
            view.value = String(main.value);
        }
    }
})
