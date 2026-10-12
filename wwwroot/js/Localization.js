class Localization {
    constructor(HiddenCultureFormElement = '_HiddenCulture') {
        const container = document.querySelector('li[data-component="localization"]');
        if (container != null) {
            const items = container.querySelectorAll("a[data-culture-value]");
            items.forEach(item => {
                item.addEventListener('click', () => {
                    const flag = container.querySelector('img[data-role="flag"]');
                    flag.src = item.querySelector('img').src;
                    this.#SubmitOnCultureClick(HiddenCultureFormElement, item.dataset.cultureValue);
                });
            });
        }
    }
    #SubmitOnCultureClick(HiddenCultureFormElement,culture) {
        var submit = new Event('submit.2t.localization', { bubbles: true, cancelable: true, composed: false })
        submit.submitform = true;
        submit.culture = culture;
        document.dispatchEvent(submit);
        const submitform = document.querySelector('form.localization');
        if (submit.submitform && submitform!=null) {
            const input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", HiddenCultureFormElement);
            input.setAttribute("id", HiddenCultureFormElement);
            input.setAttribute("value", culture);
            submitform.appendChild(input);
            submitform.submit();
        }
    }
}

