function EventSource() {
    this.events = {
        // [eventName]: [f, f, f, f, f, ]
    };
}

EventSource.prototype.addEventListener = function (eventName, callback) {
    if (!this.events[eventName]) {
        this.events[eventName] = [];
    }

    this.events[eventName].push(callback);
};

EventSource.prototype.removeEventListener = function (eventName, callback) {
    if (!this.events[eventName]) {
        return ;
    }

    this.events[eventName] = this.events[eventName]
        .filter(fn => fn !== callback);

    if (!this.events[eventName].length) {
        delete this.events[eventName];
    }
};

EventSource.prototype.dispatchEvent = function (event, thisArg = this) {
    if (typeof event === 'string') {
        event = EventSource.createEvent(event, null, this);
    }

    if (!this.events[event.name]) {
        return ;
    }

    this.events[event.name].forEach(callback => {
        callback.call(thisArg, event); // this = undefined
    });
};

EventSource.createEvent = function (name, data, target) {
    return { name, data, target };
};
