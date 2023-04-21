"use strict";
exports.__esModule = true;
var TodoItem = /** @class */ (function () {
    function TodoItem(_a) {
        var id = _a.id, text = _a.text, isCompleted = _a.isCompleted, element = _a.element;
        this.id = id;
        this.element = element;
        this.isCompleted = isCompleted;
        this.text = text;
    }
    // a method that creates a new DOM element for the item, including a checkbox, label, and delete button
    TodoItem.prototype.createDOMElement = function () { };
    // a method that updates the DOM element for the item with the latest properties
    TodoItem.prototype.updateDOMElement = function () { };
    //
    TodoItem.LAST_TODOITEM_ID = 0;
    return TodoItem;
}());
exports["default"] = TodoItem;
