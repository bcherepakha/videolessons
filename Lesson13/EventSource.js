// exports = { A, EventSource, default: EventSource}

export const A = 8;

export class EventSource {
    static createEvent(name, data, target) {
        return { name, data, target };
    }

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
            .filter(fn => fn !== callback);

        if (!this.events[eventName].length) {
            delete this.events[eventName];
        }
    }

    dispatchEvent(event, thisArg = this) {
        if (typeof event === 'string') {
            event = EventSource.createEvent(event, null, this);
        }

        if (!this.events[event.name]) {
            return ;
        }

        this.events[event.name].forEach(callback => {
            callback.call(thisArg, event); // this = undefined
        });
    }
}

export default EventSource;
