var MenuActionType = {
    Hyperlink: 0,
    UserScript: 1,
    FlyOut: 2
};

function MenuAction(action, actionType) {
    this.whatever = action;
    this.actionType = actionType;
}

function MenuItem(text, parent, action) {

    if (arguments.length != 3) throw ('MenuItem object takes three arguments');
    //checking if 1st arg is string
    if (typeof(text) == 'string' || isString(text)) this.text = text;
    else throw ('the first arguments should be string');

    //checking if 2nd argument is of type MenuItem
    if (parent != null) {
        if (isMenuItem(parent)) {
            this.parent = parent;
            this.parent.addChild(this);
        }
        else throw ('parent argument must be of type MenuItem');
    }
    //checking if the 3rd arg is of type MenuAction
    if (action == null) throw ('action cannot be null');
    if (!(isMenuAction(action))) throw ('action must be of type MenuAction');
    else this.action = action;

    this.children = null;
    this.addChild = _addChild;

    function isString(obj) {
        if (typeof(obj) == 'object') {
            var ctor = obj.constructor.toString();
            if (ctor.substring(ctor.indexOf(' ') + 1, 6) == 'String') return true;
        }
        return false;
    }

    function isMenuItem(obj) {
        if (!obj) return false;
        if (typeof(obj) == 'object') {
            var ctor = obj.constructor.toString();
            if (ctor.substring(ctor.indexOf(' ') + 1, ctor.indexOf('(')) == 'MenuItem') return true;
        }
        return false;
    }

    function isMenuAction(obj) {
        if (!obj) return false;
        if (typeof(obj) == 'object') {
            var ctor = obj.constructor.toString();
            if (ctor.substring.ctor.indexOf(' ') + 1, ctor.indexOf('(')) return true;
        }
        return false;
    }

    function _addChild(item) {
        if (!this.children) this.children = new Array();
        this.children.push(item);
    }

    function _doAction() {
        switch (this.action.actionType) {
        case MenuActionType.HyperLink:
            window.location.href = this.action.whatever;
            break;
        case MenuActionType.UserScript:
            this.action.whatever();
            break;
        case MenuActionType.FlyOut:
            //this.render();
            break;
        default:
            throw ('invalid action');
            break;
        }
    }

}

function MenuCard(){	
	var items;
	this.addMenuItem = _addMenu;
	function _addMenu(item){
		if(!items)
			items = new Array();
		items.push(item);
	}
}