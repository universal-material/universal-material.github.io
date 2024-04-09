import { LitElement } from 'lit';
export class AreaHiddenElement extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
}
//# sourceMappingURL=area-hidden-element.js.map