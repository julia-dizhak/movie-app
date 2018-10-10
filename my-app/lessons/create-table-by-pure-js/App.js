import React from 'react';

import Table from './Layout/Table';
import Row from './Layout/Row';

const translations1 = [
    { key: 'phone', en: 'Direct', de: 'Direkt', fr: 'Ligne directe', it: 'Tel. Diretto' },
    { key: 'mobile', en: 'Company', de: 'Telefon', fr: 'Téléphone', it: 'Ufficio' },
    { key: 'email', en: 'Email', de: 'Email', fr: 'Email', it: 'Email' }
];

const contacts = {
    phone: {
        en: 'Direct',
        de: 'Direkt'
    }
    // en: [
    //     { key: 'phone',  en: 'Direct'},
    //     { key: 'mobile', en: 'Company'}
    // ],
    // de: [
    //     { key: 'phone',  de: 'Direkt'},
    //     { key: 'mobile', de: 'Telefon'}
    // ]
};

// const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let html = ' ';
//
//
// let contacts1 = [contactsEn, contactsDe];
// let contactsEn = contacts.en;
// let contactsDe = contacts.de;
// console.log(contactsEn);
// console.log(contactsDe);
//
// for (let i=0; i < contacts1.length; i ++ ) {
//     //console.log(i)
//     console.log(contacts1[i])
// }

html += `
    <tr> ${contacts.phone.en} </tr>
    <tr> + test + </tr>`;

// for (let i=0; i < (contacts.en).length; i++) {
//     html += `
//     <tr> + ${contacts[i]} + </tr>
//     <tr> + test + </tr>`;
// }
//document.getElementById("table-dynamic").innerHTML = html;

//console.log(html);

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
            </div>
        );
    }
}

export default TableDynamic;
