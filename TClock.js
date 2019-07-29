class TClock {
    constructor(timezone, city) {
        this.timezone = timezone;
        this.changeListener = null;
        // определяем время 
        this.date = new Date();
        //this.utc = this.date.getTime() + (this.date.getTimezoneOffset() * 60000);
        //this.nd = new Date(this.utc + (3600000*this.timezone));

        // модель обновляет себя
        setInterval(() => {
            this.d = new Date();
            this.utc = this.d.getTime() + (this.d.getTimezoneOffset() * 60000);
            this.date = new Date(this.utc + (3600000*this.timezone)); // определяем время в нужном нам часовом поясе 
            
            this.changeListenerCallback();

        }, 1000);
    }

    setChangeListener(changeListener) {
        this.changeListenerCallback = changeListener;
    }
} 