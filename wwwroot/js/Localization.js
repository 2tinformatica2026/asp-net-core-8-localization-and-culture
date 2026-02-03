class Localization {
    #HiddenCultureFormElement;
    #submitform;
    constructor(HiddenCultureFormElement = '_HiddenCulture') {
        const div = document.querySelector('div.culture-choice');
        if (div != null) {
            const This = this;
            this.#HiddenCultureFormElement = HiddenCultureFormElement;
            this.#submitform = document.querySelector('form.localization');
            if (this.#submitform == null) this.#submitform = document.forms[0];
            var items = div.querySelectorAll("a[data-culture-value]");
            for (var i = 0; i < items.length; i++) {
                items[i].addEventListener('click', function () {
                    This.#SubmitOnCultureClick(this.getAttribute("data-culture-value"))
                });
            }
        }
    }
    #SubmitOnCultureClick(culture) {
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", this.#HiddenCultureFormElement);
        input.setAttribute("id", this.#HiddenCultureFormElement);
        input.setAttribute("value", culture);
        this.#submitform.appendChild(input);
        var ChangeCultureRequest = new Event('ChangeCultureRequest', { submitform: Boolean, bubbles: true, cancelable: true, composed: false })
        ChangeCultureRequest.submitform = true;
        document.dispatchEvent(ChangeCultureRequest);
        if (ChangeCultureRequest.submitform) this.#submitform.submit();
    }
}
