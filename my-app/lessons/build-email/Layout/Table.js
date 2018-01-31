import React from 'react';

/**
 * This grid allows you to be less verbose by only defining what you need:
 *
 *    <Grid>
 *      <Grid.Row>
 *        <Grid.Cell>
 *          <p>Foo</p>
 *        </Grid.Cell>
 *      </Grid.Row>
 *    </Grid>
 *
 * Is equivalent of:
 *
 *    <Grid>
 *      <p>Foo</p>
 *    </Grid>
 *
 * Add the missing row and cell declaration are automatically added.
 *
 * Examples
 * --------
 *
 * Render two cells in a row
 *
 *    <Grid>
 *      <Grid.Row>
*          <p>I'm in the first cell</p>
*          <p>I'm in the second cell</p>
 *      </Grid.Row>
 *    </Grid>
 *
 * Render two paragraphs in a cell
 *
 *    <Grid>
 *      <Grid.Cell>
*          <p>I'm in the first cell</p>
*          <p>I'm in the second cell</p>
 *      </Grid.Cell>
 *    </Grid>
 *
 */

const cell = (props) => {
    return (
        <td>{props.children}</td>
    )
};

const table = () => {
    return (
        <p>test</p>
    )
};

export default {table, cell};
