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

        if (this.isEventProp(name)) {

            this.addEventListenerFromProp($el, name, value);

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

        if (!newVal) {

            this.removeProp($el, name, oldVal);

        } else if (!oldVal || newVal !== oldVal) {

            this.setProp($el, name, newVal);

        }

    }

    updateProps($el, newProps, oldProps = {}) {

        const props = Object.assign({}, newProps, oldProps);

        Object.keys(props).forEach(name => {

            this.updateProp($el, name, newProps[name], oldProps[name]);

        });

    }

    isEventProp(prop) {

        return /^ez-on-/.test(prop);

    }

    isNil(value) {

        return value === null || typeof value === 'undefined'

    }

    extractEventName(name) {

        return name.replace(/^ez-on-/, '').toLowerCase();

    }

    addEventListenerFromProp($el, name, method) {

        const event = this.extractEventName(name);

        $el.addEventListener(
            event,
            this[method].bind(this)
        );

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
        this.addChildrenToElement($el, node.children);

        return $el;

    }

    changed(node1, node2) {

        return (
            typeof node1 !== typeof node2 ||
            typeof node1 === 'string' && node1 !== node2 ||
            node1.type !== node2.type
        )

    }

    /*
    updateElement($parent, newNode, oldNode, index = 0) {

        console.log('-- update element', index);
        console.log('parent', $parent);
        console.log('new node', newNode);
        console.log('old node', oldNode);
        console.log('index', index);
        console.log('new element', $parent.childNodes[index]);
        console.log('//--');

        if (this.isNil(oldNode)) {
            console.log('- old is nil');
            $parent.appendChild(
                this.createElement(newNode)
            );
        } else if (this.isNil(newNode)) {
            console.log('- new is nil');
            $parent.removeChild(
                $parent.childNodes[index]
            );
        } else if (this.changed(newNode, oldNode)) {
            console.log('- is changed');
            $parent.replaceChild(
                this.createElement(newNode),
                $parent.childNodes[index]
            );
        } else if (newNode.type) {
            console.log('- has type kek');
            this.updateProps(
                $parent.childNodes[index],
                newNode.props,
                oldNode.props
            );
            const newLength = newNode.children.length;
            const oldLength = oldNode.children.length;

            console.log('-- about to update parents children');

            for (let i = 0; i < newLength || i < oldLength; i++) {

                this.updateElement(
                    $parent.childNodes[index],
                    newNode.children[i],
                    oldNode.children[i],
                    i
                );

            }
        }
    }
    */

    updateElement($parent, newNode, oldNode, childNode = $parent.childNodes[0]) {

        console.log('-- update element');
        console.log($parent);
        console.log(newNode);
        console.log(oldNode);
        console.log(childNode);
        console.log('//--');

        if (this.isNil(oldNode)) {

            $parent.appendChild(
                this.createElement(newNode)
            );

        } else if (this.isNil(newNode)) {

            $parent.removeChild(childNode);

            return -1; // suggests that an element has been removed

        } else if (this.changed(newNode, oldNode)) {

            $parent.replaceChild(
                this.createElement(newNode),
                childNode
            );

        } else if (newNode.type) {

            this.updateProps(childNode, newNode.props, oldNode.props);

            const max = Math.max(newNode.children.length, oldNode.children.length);

            let adjustment = 0;

            for (let i = 0; i < max; i++) {

                adjustment += this.updateElement(
                    childNode,
                    newNode.children[i],
                    oldNode.children[i],
                    childNode.childNodes[i + adjustment]
                );

            }

        }

        return 0; // suggest that an element has not been removed

    }

}
