import React from 'react';

const propTypes = {};

const defaultProps = {};

const Table = (/* { prop1, prop2 } */) => (
  <div>
    <table>
      <caption>Order</caption>
      <colgroup>
        <col span="3" />
        <col className="total" />
      </colgroup>
      <thead>
        <tr>
          <th>Item</th>
          <th>Qty.</th>
          <th>Price</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colSpan="3">TOTAL</td>
          <td>5.25</td>
        </tr>
      </tfoot>
      <tbody>
        <tr>
          <td>Bananas</td>
          <td>5</td>
          <td>0.50</td>
          <td>2.50</td>
        </tr>
        <tr>
          <td>Apples</td>
          <td>2</td>
          <td>0.25</td>
          <td>0.50</td>
        </tr>
        <tr>
          <td>Oranges</td>
          <td>3</td>
          <td>0.75</td>
          <td>2.25</td>
        </tr>
      </tbody>
    </table>
  </div>
);

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.displayName = 'Table';

export default Table;
