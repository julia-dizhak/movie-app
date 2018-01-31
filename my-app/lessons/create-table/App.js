import React from 'react';

import Table from './Layout/Table';
import Row from './Layout/Row';
import Cell from './Layout/Cell';



class TableDynamic extends React.Component {
    state = {
        data : [
            { id:1, key: 'name', label: '((FirstName))' },
            { id:2, key: 'surname', label: '((LastName))' },
            { id:3, key: 'image', label: 'photo' }
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
        const cells = this.state.data; // [{key, label}]

        // generate header (th) cell components
        return  cells.map(function(dataItem) {
            return <th key={dataItem.key}>{dataItem.id}</th>;
        });
    };


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

        // const cells = this.state.data.map(dataItem => {
        //     return (
        //         <td key={dataItem.key}>{dataItem.key}: {dataItem.label}</td>
        //     )
        // });

        return (
            <div style={style.container}>
                 <table>
                     {/*<thead>*/}
                         {/*<tr>{this.generateHeaders()}</tr>*/}
                     {/*</thead>*/}
                     <tbody>
                         <Row>
                             <Cell data={this.state.data} />
                         </Row>
                     </tbody>
                 </table>
            </div>
        )
    }
}

export default TableDynamic;
