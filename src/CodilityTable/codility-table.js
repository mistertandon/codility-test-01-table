import mainstyles from './../style.scss';
import styles from './codility-table.scss';

class CodilityTable extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.table_data = { headers: [], data: {} };
  }

  static get observedAttributes() {
    return ['table_data'];
  }

  connectedCallback() {
    this.render();
    console.log('connectedCallback-1');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback');
    if (name === 'table_data') {
      this.table_data = JSON.parse(newValue);
    }
    this.render();
  }

  getTableTheadTrTemplate() {
    return `
      <tr class='thead-row--container'>
        <th class='thead-th--container'>
          &nbsp;
        </th>
        ${this.table_data.headers
          .map(
            tableHeader => `<th class='thead-th--container'>${tableHeader}</th>`
          )
          .join('')}
      </tr>`;
  }

  getTableTbodyTrTemplate() {
    return `${Object.entries(this.table_data.data)
      .map(([companyName, zipCodeArr]) => {
        return `
              <tr class='tbody-row--container'>
                <th class='tbody-th--container'>${companyName}</th>
                ${zipCodeArr
                  .map(
                    (zipCode, index) =>
                      `<td class='tbody-td--container' title='${companyName}, ${this.table_data.headers[index]}'>${zipCode}</td>`
                  )
                  .join('')}
              </tr>`;
      })
      .join('')}`;
  }

  render() {
    const template = `
    <style>
      ${mainstyles}
      ${styles}
    </style>
    <article class='codility-table--container'>

        <section class='section-table--container'>
          <table class='table--container'>
            <thead>
                ${this.getTableTheadTrTemplate()}
            </thead>
            <tbody>
              ${this.getTableTbodyTrTemplate()}
            </tbody>
          </table>
        </section>

    </article>`;

    this.shadow.innerHTML = `
      ${template}`;
  }
}

customElements.define('codility-table', CodilityTable);
