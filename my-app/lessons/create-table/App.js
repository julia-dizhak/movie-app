import React from 'react';

import Table from './Layout/Table';
import Row from './Layout/Row';
import Cell from './Layout/Cell';

const demo = ({ children, style = {} }) => {
    return <p style={style} />;
};

class TableDynamic extends React.Component {
    state = {
        personal: [
            { key: 'name', label: '((FirstName))' },
            { key: 'surname', label: '((LastName))' },
            { key: 'image', label: 'photo' },
            { key: 'job', label: '((JobTitle))' }
        ],

        contacts: [
            { key: 'phone', label: '((Phone))', en: 'Direct' },
            { key: 'mobile', label: '((Mobile))', en: 'Company' },
            { key: 'email', label: '((Email))', en: 'Email' }
        ],

        address: [
            { key: 'company', label: 'MoneyPark AG' },
            { key: 'street', label: '((Street))' },
            { key: 'zip', label: '((ZIP))' },
            { key: 'code', label: '((City))' }
        ],

        translations: [
            { key: 'phone', en: 'Direct', de: 'Direkt', fr: 'Ligne directe', it: 'Tel. Diretto' },
            { key: 'mobile', en: 'Company', de: 'Telefon', fr: 'Téléphone', it: 'Ufficio' },
            { key: 'email', en: 'Email', de: 'Email', fr: 'Email', it: 'Email' },
            { key: 'title', en: 'Recommend MoneyPark', de: 'MoneyPark weiterempfehlen', fr: 'test', it: 'test' }
        ]
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
                width: '100%'
            }
        };

        return (
            <div style={style.container}>
                <Table>
                    <tr>
                        <Row data={this.state.contacts} type="cell" />
                    </tr>
                    <Row data={this.state.contacts} />
                </Table>

                <demo />
            </div>
        );
    }
}

export default TableDynamic;
