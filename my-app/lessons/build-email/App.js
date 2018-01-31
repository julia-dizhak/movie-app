import React from 'react';

import Table from './Layout/Table';
import Grid from './Layout/Grid';
import Cell from './Layout/Grid';

class EmailSignature extends React.Component {
    state = {
        cell : [
            { key: 'name', label: '((FirstName))' },
            { key: 'lastName', label: 'Last Name' }
        ],
        // cell : [
        //     { key: 'firstName', label: 'First Name' },
        //     { key: 'lastName', label: 'Last Name' }
        // ],
        data : [
            { id: 1, firstName: 'John', lastName: 'Doe' },
            { id: 2, firstName: 'Clark', lastName: 'Kent' }
        ],

        // placeholders: {
        //     name: ((FirstName)),
        //     surname: ((LastName)),
        //     image: 'test',
        //     job: ((JobTitle)),
        //     phone: ((Phone)),
        //     mobile: ((Mobile)),
        //     email: ((Email)),
        //     street: ((Street)),
        //     zip: ((ZIP)),
        //     city: ((City))
        // },
        translations: {
            en: {
                phone: 'Direct',
                mobile: 'Company',

            },

            de: {
                phone: 'Direkt'
            },

            fr: {
                phone: 'Ligne directe'
            },

            it: {
                phone: 'Tel. Diretto'
            }
        }
    };

    generateHeaders = () => {
        //const cols = [...this.state.cols];
        //console.log(cols);
    };

    // generateHeaders: function() {
    //     var cols = this.props.cols;  // [{key, label}]
    //
    //     // generate our header (th) cell components
    //     return cols.map(function(colData) {
    //         return <th key={colData.key}> {colData.label} </th>;
    //     });
    // },


    render() {
        const style = {
            container: {
                backgroundColor: 'fff',
                padding: '20px 0',
                fontFamily: 'Helvetica,Arial,sans-serif'
            },

            email: {
                maxWidth: '640px',
                width: '100%',
            }
        };

        const cells = this.state.cell.map(cellItem => {
            return (
                <td key={cellItem.key}>{cellItem.key}: {cellItem.label}</td>
            )
        });

        return (
            <div style={style.container}>
                <table>
                    <tbody>
                        <tr>
                            {cells}
                        </tr>
                    </tbody>
                </table>


                {/*this.generateHeaders*/}
                {/*<Grid style={style.email}>*/}

                    {/*/!*<Grid.Cell style={style.content}>*!/*/}
                        {/*/!*{children}*!/*/}
                    {/*/!*</Grid.Cell>*!/*/}

                {/*</Grid>*/}
            </div>
        )
    }
}

export default EmailSignature;
