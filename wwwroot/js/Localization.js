class Localization {
    #HiddenCultureFormElement = '_HiddenCulture';
    constructor() {
        const submitform = document.querySelector('form.localization');
        const container = document.querySelector('li[data-component="localization"]');
        if (container != null && submitform !=null) {
            const items = container.querySelectorAll("a[data-culture-value]");
            items.forEach(item => {
                item.addEventListener('click', () => {
                    this.#SubmitOnCultureClick(submitform,item.dataset.cultureValue);
                });
            });
        }
    }
    #SubmitOnCultureClick(submitform,culture) {
        const input = document.createElement("input");
        const beforesubmit = new Event('submit.2t.localization', { bubbles: true, cancelable: true, composed: false })
        beforesubmit.culture = culture;
        input.setAttribute("type", "hidden");
        input.setAttribute("name", this.#HiddenCultureFormElement);
        input.setAttribute("id", this.#HiddenCultureFormElement);
        input.setAttribute("value", culture);
        submitform.appendChild(input);
        document.dispatchEvent(beforesubmit);
        submitform.submit();
    }
}
