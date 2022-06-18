function Settings(settingsSelector, onSubmit) {
    this.formEl = document.querySelector(settingsSelector);

    this.formEl.addEventListener('submit', e => {
        e.preventDefault();

        onSubmit();
    })
}
