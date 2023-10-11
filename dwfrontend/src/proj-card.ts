import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('proj-card')
export class ProjectCard extends LitElement {
  @property({type: String}) projDetails ='Some detailed description of the project.';
  @property({type: Boolean}) show = false;
  /* playground-fold-end */

  render() {
    return html`
      <div class="card">
        <p>
          <img src="./src/assets/g4g.png" @click=${() => this.show = !this.show} part="g4g">
        </p>

        <button @click=${() => this.show = !this.show}>Details</button>
        </p>
        <p>
          ${this.show ? html`${this.projDetails}` : ''}
        </p>
      </div>
    `;
  }

  private _onClick() {
    this.toggleText = !this.toggleText
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
    }
    .card {
      /* using variable */
      background-color: var(--my-background, tan);
      border-radius: 1.2em;
      padding: 2em;
    }

    .card img {
      width: 65px;
    }

    ::slotted(h3) {
      font-size: 2.1em;
      line-height: 1.1;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #494732;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    g4g:hover {
      border-color: #646cff;
    }
    g4g:focus,
    g4g:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      g4g {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'proj-card': ProjectCard
  }
}
