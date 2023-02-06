(function () {

  setExampleCodeText();

  const sidebar = document.querySelector(".u-drawer");
  const sidebarBackdrop = document.querySelector(".u-drawer-backdrop");
  const appbar = document.getElementById("app-bar");

  function toggleSidebar() {
    if (sidebar.classList.contains("open")) {
      sidebar.classList.remove("open");
    } else {
      sidebar.classList.add("open");
    }

    if (sidebar.classList.contains("dismiss")) {
      sidebar.classList.remove("dismiss");
    } else {
      sidebar.classList.add("dismiss");
    }
  }

  function toggleRtl() {
    document.body.classList.toggle("rtl");
  }

  function mainContentScroll(e) {
    if (window.scrollY) {
      appbar.classList.add('u-toolbar-elevated');
    } else {
      appbar.classList.remove('u-toolbar-elevated');
    }
  }

  document
    .getElementById("menu-toggle")
    .addEventListener("click", toggleSidebar);

  document
    .getElementById("rtl-toggle")
    .addEventListener("click", toggleRtl);


  sidebarBackdrop.addEventListener("click", toggleSidebar);

  window.addEventListener("scroll", mainContentScroll);

  umd.Ripple.initializeRipples();
  umd.TextField.initializeTextFields();
  umd.ChipField.initializeChipFields();
  umd.Dropdown.initializeDropdowns();
  umd.TabBar.initializeTabBars();
  umd.Slider.initializeSliders();

  let textField = document.querySelector('.u-text-field-box');
  const textInput = document.querySelector('#text-field-box');
  if (textInput) {
    textInput.addEventListener('input', function () {
      if (textInput.value) {
        textField.classList.remove('invalid');
      } else {
        textField.classList.add('invalid');
      }
    });
  }

  function setActiveNavigationItem() {
    const navItems = document.querySelectorAll('nav .u-list-item');

    for (let i = 0; i < navItems.length; i++) {
      const navItem = navItems[i];
      if (navItem.pathname !== location.pathname) {
        continue;
      }

      navItem.classList.add('active');
      if (navItem.parentElement.classList.contains('nested-menu-items')) {
        navItem.parentElement.classList.add('expanded');
      }

      break;
    }
  }
  function setExpandableMenus() {
    const nestedMenus = document.querySelectorAll('.nested-menu-items');

    for (const nestedMenu of nestedMenus) {
      const nestedMenuToggle = nestedMenu.previousElementSibling;
      nestedMenuToggle.addEventListener('click', () => nestedMenu.classList.toggle('expanded'));
    }
  }

  function setToggleButtons() {
    const toggleButtons = document.querySelectorAll('.u-icon-toggle-btn');

    for (const button of toggleButtons) {
      const icon = button.firstElementChild;
      button.addEventListener('click', () => {
        if (button.classList.contains('selected')) {
          button.classList.remove('selected');
          icon.classList.remove('mdi-cards-heart');
          icon.classList.add('mdi-cards-heart-outline');
          return;
        }

        button.classList.add('selected');
        icon.classList.add('mdi-cards-heart');
        icon.classList.remove('mdi-cards-heart-outline');
      });
    }
  }

  setActiveNavigationItem();
  setExpandableMenus();
  setToggleButtons();
})();

function getHTML(who, deep){
  if (!who || !who.tagName) return '';

  let txt = '';
  let ax = '';
  let el = document.createElement("div");
  el.appendChild(who.cloneNode(false));

  if (deep) {
    ax = txt.indexOf('>') + 1;
    txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
  }

  el = null;
  return txt;
}

function setExampleCodeText() {
  const exampleBoxHeaders = document.querySelectorAll('.example-box-header, .example-card > .u-card-content:first-child');
  for (let i = 0; i < exampleBoxHeaders.length; i++) {
    const exampleBoxHeader = exampleBoxHeaders[i];
    const tagText = exampleBoxHeader.innerHTML.trim();

    exampleBoxHeader.parentElement.getElementsByTagName('code')[0].innerHTML = tagText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
}

hljs.highlightAll();
//
// class uButton extends HTMLElement {
//   #color = null;
//   #variant = null;
//   #iconSlot = null;
//
//   connectedCallback() {
//
//     this.attachShadow({mode: 'open'});
//     this.shadowRoot.innerHTML = '<slot name="content"><slot part="icon" name="icon"></slot><slot></slot></slot>';
//     this.#iconSlot = this.shadowRoot.querySelector('slot[name="icon"]');
//     // this.#iconSlot.style.setProperty('display', 'none', 'important');
//     // this.#iconSlot.addEventListener('slotchange', () => {
//     //   if (!this.#iconSlot.children.length) {
//     //     this.#iconSlot.style.setProperty('display', 'none', 'important');
//     //     return;
//     //   }
//     //
//     //   this.#iconSlot.style.display = '';
//     // });
//
//     console.log();
//   }
//
//   static get observedAttributes() {
//     return ['color', 'variant'];
//   }
//
//   set color(value) {
//     const previousValue = this.#color;
//     this.#color = value;
//
//
//     if (previousValue) {
//       this.classList.remove(`u-btn-${previousValue}`);
//     }
//
//     this.classList.add(`u-btn-${value}`);
//   }
//
//   get color() {
//     return this.#color;
//   }
//
//   set variant(value) {
//     const previousValue = this.#variant;
//     this.#variant = value;
//
//
//     if (previousValue) {
//       this.classList.remove(`u-${previousValue}-btn`);
//     }
//
//     this.classList.add(`u-${value}-btn`);
//   }
//
//   get variant() {
//     return this.#variant;
//   }
//
//   attributeChangedCallback(name, oldValue, newValue) {
//
//     switch (name) {
//       case 'color':
//         this.color = newValue;
//         break;
//       case 'variant':
//         this.variant = newValue;
//         break;
//     }
//   }
// }
//
// customElements.define('u-button', uButton);

class CustomButton extends HTMLButtonElement {
  #internals = null;
  #container = document.createElement('DIV');
  #color = null;
  #variant = null;

  constructor() {
    super();
    const styles = new CSSStyleSheet();
    styles.replaceSync(`
:host {
  height: 40px;
  line-height: 40px;
  border: 1px solid;
  border-radius: 20px;
}`);

    this.#container.innerHTML = this.innerHTML;
    this.innerHTML = '';
    this.#container.attachShadow({ mode: "open" });
    this.#container.shadowRoot.innerHTML = '<slot></slot>';
    this.#container.shadowRoot.adoptedStyleSheets = [styles];
    this.appendChild(this.#container);
    this.variant = null;
  }

  static get observedAttributes() {
    return ['color', 'variant'];
  }

  set color(value) {
    const previousValue = this.#color;
    this.#color = value;


    if (previousValue) {
      this.classList.remove(`u-btn-${previousValue}`);
    }

    if (value) {
      this.classList.add(`u-btn-${value}`);
    }
  }

  get color() {
    return this.#color;
  }

  set variant(value) {
    value ??= 'filled';

    const previousValue = this.#variant;
    this.#variant = value;


    if (previousValue) {
      this.classList.remove(`u-${previousValue}-btn`);
    }

    this.classList.add(`u-${value}-btn`);
  }

  get variant() {
    return this.#variant;
  }

  attributeChangedCallback(name, oldValue, newValue) {

    switch (name) {
      case 'color':
        this.color = newValue;
        break;
      case 'variant':
        this.variant = newValue;
        break;
    }
  }
}

customElements.define('u-button', CustomButton, { extends: 'button'});

class TextField extends HTMLInputElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = '<slot></slot>';
  }

  attachInput(input) {
    
  }
}

customElements.define('u-text-field', TextField);
class uInput extends HTMLInputElement {
  connectedCallback() {
    let parent = this.parentElement;

    while (parent) {
      if (parent instanceof TextField) {
        parent.attachInput(this);
        break;
      }

      parent = parent.parentElement;
    }
  }



}

customElements.define('u-input', uInput, { extends: 'input'});

class CustomButton2 extends HTMLElement {
  constructor() {
    super();
    const styles = new CSSStyleSheet();
    styles.replaceSync(`
:host {
  height: 40px;
  line-height: 40px;
  border: 1px solid;
  border-radius: 20px;
}`);
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = '<slot></slot>';
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

}

customElements.define('u-button2', CustomButton2);
