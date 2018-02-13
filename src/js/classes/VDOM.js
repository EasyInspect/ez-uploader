/** @jsx h */

export default class EzVDOM {

    constructor() {

        this.cachedVDOM = null;

    }

    setElementProps($el, props) {

        if (props) {

            const properties = Object.keys(props);

            properties.forEach(name => {

                const value = props[name];

                this.setElementProp($el, name, value);

            })

        }

    }

    setElementProp($el, name, value) {

        if (this.isCustomProp(name)) {

            return;

        } else if (name === 'className') {

            $el.setAttribute('class', value);

        } else if (typeof value === 'boolean') {

            this.setBooleanProp($el, name, value);

        } else {

            $el.setAttribute(name, value);

        }

    }

    setBooleanProp($el, name, value) {

        if (value) {

            $el.setAttribute(name, value);
            $el[name] = true;

        } else {

            $el[name] = false;

        }

    }

    removeBooleanProp($el, name) {

        $el.removeAttribute(name);
        $el[name] = false;

    }

    removeProp($el, name, value) {

        if (name === 'className') {

            $el.removeAttribute('class');

        } else if (typeof value === 'boolean') {

            this.removeBooleanProp($el, name);

        } else {

            $el.removeAttribute(name);

        }

    }

    updateProp($el, name, newVal, oldVal) {

        if (this.isConditionalProp(name)) {

            this.setElementProp($el, name, newVal);

        }else if (!newVal) {

            this.removeProp($el, name, oldVal);

        } else if (!oldVal || JSON.stringify(newVal) !== JSON.stringify(oldVal)) {

            this.setElementProp($el, name, newVal);

        }

    }

    updateProps($el, newProps = {}, oldProps = {}) {

        if ($el && $el.setAttribute) {

            const props = Object.assign({}, newProps, oldProps);

            Object.keys(props).forEach(name => {

                const newProp = newProps && !this.isNil(newProps[name]) && newProps[name] || null;
                const oldProp = oldProps && !this.isNil(oldProps[name]) && oldProps[name] || null;

                this.updateProp($el, name, newProp, oldProp);

            });

        }

    }

    isConditionalProp(name) {

        return /^ez-show/.test(name);

    }

    isEventProp(name) {

        return /^ez-on-/.test(name);

    }

    isCustomProp(name) {

        return name === 'forceUpdate' || this.isEventProp(name);

    }

    isNil(value) {

        return value === null || typeof value === 'undefined'

    }

    extractEventName(name) {

        return name.replace(/^ez-on-/, '').toLowerCase();

    }

    extractConditionalDisplayType(name) {

        if (name === 'ez-show') {

            return name.replace(/^ez-show/, '').toLowerCase();

        } else {

            return name.replace(/^ez-show-/, '').toLowerCase();

        }

    }

    updateEventListenerFromProp($el, event, newMethod, oldMethod) {

        if ($el && $el.addEventListener) {

            if (oldMethod) {

                $el.removeEventListener(event, oldMethod);

            }

            if (newMethod) {

                this.addEventListenerFromProp($el, event, newMethod);

            }

        }

    }

    updateEventListenersFromProp($el, newProps, oldProps) {

        const allProps      = Object.assign({}, oldProps, newProps);
        const properties    = Object.keys(allProps);

        properties.forEach(name => {

            if (this.isEventProp(name)) {

                const event = this.extractEventName(name);

                const newMethod = newProps[name];
                const oldMethod = oldProps[name];

                this.updateEventListenerFromProp($el, event, newMethod, oldMethod);

            }

        })

    }

    addEventListenerFromProp($el, name, method) {

        const event = this.extractEventName(name);

        if (typeof method === 'string' && this[method]) {

            method = this[method].bind(this);

        }

        $el.addEventListener(
            event,
            method
        );

    }

    addEventListenersFromProps($el, props) {

        if (props) {

            const properties = Object.keys(props);

            properties.forEach(name => {

                if (this.isEventProp(name)) {

                    const method = props[name];

                    this.addEventListenerFromProp($el, name, method);

                }

            })

        }

    }

    addChildrenToElement($el, children) {

        if (children) {

            children.forEach(child => $el.appendChild.bind($el)(this.createElement(child)));

        }

    }

    createElement(node) {

        if (typeof node === 'undefined' || node === null) {
            return document.createTextNode('');
        }

        if (typeof node === 'string' || typeof node === 'number' || typeof node === 'undefined' || node === null) {
            return document.createTextNode(node);
        }

        const $el = document.createElement(node.type);

        this.setElementProps($el, node.props);
        this.addEventListenersFromProps($el, node.props);
        this.addChildrenToElement($el, node.children);

        return $el;

    }

    changed(node1, node2) {

        return (
            typeof node1 !== typeof node2 ||
            typeof node1 === 'string' || typeof node1 === 'number' && node1 !== node2 ||
            node1.type !== node2.type ||
            node1.props && node1.props.forceUpdate
        )

    }

    isInView($parent, $el) {

        return true;
        if ($el && (!$el.getBoundingClientRect || $el.style.display == 'none')) {
            return true;
        }

        const childRect = $el.getBoundingClientRect();
        const parentRect = $parent.getBoundingClientRect();

        return (
            childRect.top >= (parentRect.top - childRect.height) &&
            childRect.bottom <= (parentRect.bottom + childRect.height)
        );

        return (1<2)

    }

    updateElement($parent, newNode, oldNode, $el = $parent.childNodes[0]) {

        /*console.log('-- update element');
        console.log($parent);
        console.log(newNode);
        console.log(oldNode);
        console.log($el);
        console.log('//--');*/

        if (this.isNil(oldNode)) {

            $parent.appendChild(
                this.createElement(newNode)
            );

        } else if (this.isNil(newNode)) {

            $parent.removeChild($el);

            return -1; // suggests that an element has been removed

        } else if (this.changed(newNode, oldNode)) {

            $parent.replaceChild(
                this.createElement(newNode),
                $el
            );

        } else if (this.isInView($parent, $el) && newNode.type) {

            this.updateProps($el, newNode.props, oldNode.props);
            this.updateEventListenersFromProp($el, newNode.props, oldNode.props);

            const max = Math.max(newNode.children.length, oldNode.children.length);

            let adjustment = 0;

            for (let i = 0; i < max; i++) {

                adjustment += this.updateElement(
                    $el,
                    newNode.children[i],
                    oldNode.children[i],
                    $el.childNodes[i + adjustment]
                );

            }

        }

        return 0; // suggest that an element has not been removed

    }

}
