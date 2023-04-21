interface todoItem {
    id: TodoItem['id'];
    text: TodoItem['text'];
    isCompleted: TodoItem['isCompleted'];
    element: TodoItem['element'];
}

class TodoItem {
    //
    static LAST_TODOITEM_ID_POSTFIX = 0;

    // a unique identifier for each item
    id: number;
    // the text content of the item
    text: string;
    // a boolean value indicating whether the item has been completed
    isCompleted: boolean;
    // a reference to the DOM element for the item
    element: HTMLElement;

    constructor({ id, text, isCompleted, element }: todoItem) {
        this.id = id;
        this.element = element;
        this.isCompleted = isCompleted;
        this.text = text;
    }

    // a method that creates a new DOM element for the item, including a checkbox, label, and delete button
    createDOMElement(): void {
        const markup = () => {
            TodoItem.LAST_TODOITEM_ID_POSTFIX += 1;

            return `
            <li class="todo-item">
                <div class="flex">
                    <input type="checkbox" id="todo-item-${TodoItem.LAST_TODOITEM_ID_POSTFIX}" />
                    <label for="todo-item-${TodoItem.LAST_TODOITEM_ID_POSTFIX}">${this.text}</label>
                </div>
                <button class="btn-danger">Delete</button>
            </li>
            `;
        };
    }
    // a method that updates the DOM element for the item with the latest properties
    updateDOMElement(): void {}
}

export default TodoItem;
