import { HTMLTemplateResult, LitElement, nothing } from 'lit';
import '../elevation/elevation';
import '../ripple/ripple';
export declare abstract class ButtonBase extends LitElement {
    #private;
    static readonly formAssociated = true;
    /**
     * Whether the button is disabled.
     */
    disabled: boolean;
    /**
     * The URL that the link button points to.
     */
    href: string;
    /**
     * Where to display the linked `href` URL for a link button. Common options
     * include `_blank` to open in a new tab.
     */
    target: string;
    type: string;
    value: string;
    name: string | undefined;
    private readonly buttonElement;
    private readonly ripple;
    /**
     * The `<form>` element to associate the button with (its form owner). The value of this attribute must be the id of a `<form>` in the same document. (If this attribute is not set, the button is associated with its ancestor `<form>` element, if any.)
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#form
     */
    get form(): HTMLFormElement | null;
    constructor();
    protected render(): import("lit-html").TemplateResult<1>;
    private renderButton;
    private renderLink;
    protected abstract renderContent(): HTMLTemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    focus(): void;
    blur(): void;
    protected getAriaLabel(): string | null | typeof nothing;
    private innerHandleClick;
    protected handleClick(_: UIEvent): void;
}
//# sourceMappingURL=button-base.d.ts.map