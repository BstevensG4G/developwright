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
  @property({type: String}) projDetails ='detailed description is missing';
  @property({type: Boolean}) show = false;
  @property({type: String}) projUrl = 'url not submitted';
  /* playground-fold-end */

  render() {
    return html`
      <div class="card">

        <p>
          <button @click=${() => this.show = !this.show}>Project Details</button>
          <img src="./src/assets/${this.projUrl}" @click=${() => this.show = !this.show} part="g4g">
        </p>


        <p>
          ${this.show ? html`${this.projDetails}` : ''}
        </p>      
      </div>
    `;
  }

  static styles = css`
    :host {
      margin: 0 auto;
      padding: 2rem;
    }
    .card {
      /* using variable */
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 60%;
      flex-wrap: true;
      flex-grow: 1;
      background-color: var(--my-background, tan);
      border-radius: 1.2em;
      padding: 2em;
    }

    .card img { 
      float: left;
      width: 125px;
      border-radius: 5px;
    }

    ::slotted(h3) {
      font-size: 2.1em;
      line-height: 1.1;
    }

    button {
      margin-left: 10px;
      border-radius: 8px;
      border: 1px solid transparent;
      font-size: .8em;
      font-weight: 500;
      width: 55px;
      height: 40px;
      font-family: inherit;
      background-color: #54544e;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
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
