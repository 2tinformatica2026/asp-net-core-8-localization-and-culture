class Localization {
    constructor(HiddenCultureFormElement = '_HiddenCulture') {
        const div = document.querySelector('div[data-component="localization"]');
        if (div != null && document.querySelector('form.localization')!=null) {
            const items = div.querySelectorAll("a[data-culture-value]");
            items.forEach(item => {
                item.addEventListener('click', () => {
                    this.#SubmitOnCultureClick(HiddenCultureFormElement, item.dataset.cultureValue);
                });
            });
        }
    }
    #SubmitOnCultureClick(HiddenCultureFormElement,culture) {
        const input = document.createElement("input");
        const submitform = document.querySelector('form.localization');
        input.setAttribute("type", "hidden");
        input.setAttribute("name", HiddenCultureFormElement);
        input.setAttribute("id", HiddenCultureFormElement);
        input.setAttribute("value", culture);
        submitform.appendChild(input);
        var submit = new Event('submit.2t.localization', { submitform: Boolean, bubbles: true, cancelable: true, composed: false })
        submit.submitform = true;
        document.dispatchEvent(submit);
        if (submit.submitform) submitform.submit();
    }
}
