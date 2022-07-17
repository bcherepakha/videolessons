function Settings(selector) {
    this.formEl = document.querySelector(selector);
    this.robotNameEl = this.formEl.elements.robotName;

    this.formEl.addEventListener('submit', this.submit.bind(this));
}

Settings.prototype.submit = function (e) {
    e.preventDefault();

    console.log( this.robotNameEl.value );

    const formData = new FormData(this.formEl);

    console.log( formData.get('userName') );
}

const settings = new Settings('.game.actions');

console.log( settings );
