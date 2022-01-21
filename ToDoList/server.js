export class Server {
    constructor() {
        this.base = 'https://5d9969125641430014051850.mockapi.io/tasks';
    }

    getTasks({filter, text} = {}) {
        let url = `${this.base}?sortBy=id&order=desc`;

        switch (filter) {
            case 'active':
                url += `&completed=false`;
                break;
            case 'completed':
                url += `&completed=true`;
                break;
        }

        if (text) {
            url += `&text=${text.trim().toLowerCase()}`;
        }

        return fetch(url, {
            method: 'GET',
            headers: {
                'X-MY-OWN-HEADER': 'something'
            }
        }).then(response => response.json());
    }

    async createTask( taskData ) {
        const response = await fetch(this.base, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });
        const data = await response.json();

        return data;
    }

    updateTask( taskData ) {
        return fetch(`${this.base}/${taskData.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        }).then(response => response.json());
    }

    deleteTask( taskID ) {
        return fetch(`${this.base}/${taskID}`, {
            method: 'DELETE'
        });
    }
}
