export default class EventSource {
    constructor() {
        this.events = {};
    }

    addEventListener(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    removeEventListener(eventName, callback) {
        if (!this.events[eventName]) {
            return ;
        }

        this.events[eventName] = this.events[eventName]
            .filter(f => f !== callback);
    }

    dispatch(eventName, eventData) {
        if (!this.events[eventName]) {
            return ;
        }

        const eventObj = {
            target: this,
            data: eventData
        };

        this.events[eventName]
            .forEach(f => f.call(this, eventObj));
    }
}
