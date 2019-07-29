/*class TClockControllerButtons {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        // контроллер при снятии флажка в представлении
        // перестает слушать изменения модели,
        // а при установке - продолжает
        this.view.setChangeHandler(
            started => {
                if (started) {
                    this.registerModelHandler();
                } else {
                    this.model.setChangeListener(null);
                }
            }
        );
        this.registerModelHandler();
    }

    registerModelHandler() {
        this.model.setChangeListener(
            () => this.handleModelChange());
        this.handleModelChange();
    }

    handleModelChange() {
        // при вызове функции обратного вызова
        // контроллер перерисовывает представление
        this.view.render(this.model);
    }
}*/
class TClockControllerButtons {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        // контроллер при нажатии кнопки "стоп"
        // перестает слушать изменения модели,
        // а при нажатии кнопки "старт" - продолжает
        this.view.setChangeHandler(
            (checked) => {
                if (checked) {
                    this.registerModelHandler();
                } else {
                    this.model.setChangeListener(null);
                }
            }
        );
        this.registerModelHandler();
    }

    registerModelHandler() {
        this.model.setChangeListener(
            () => this.view.render(this.model));
        this.view.render(this.model);
    }
} 