export interface IPartner {
    id: 0;
    createdAt: '2022-07-25T09:23:23.220Z';
    name: 'string';
    logoImageUrl: 'string';
    description: 'string';
    categoryId: 0;
    categoryName: 'string';
    commission: 0;
    legalForm: 'string';
    tin: 'string';
    okpo: 'string';
    regionCode: 'Bishkek';
    registrationAddress: 'string';
    actualAddress: 'string';
    foundingDate: '2022-07-25T09:23:23.220Z';
    managerPosition: 'string';
    managerFullname: 'string';
    bankName: 'string';
    bankAccount: 'string';
    bic: 'string';
    status: 10;
    contacts: [
        {
            type: 'Website';
            value: 'string';
        }
    ];
    tags: [
        {
            id: 0;
            name: 'string';
            nameLocalizations: [
                {
                    id: 0;
                    cultureCode: 'string';
                    value: 'string';
                }
            ];
        }
    ];
    branches: [
        {
            id: 0;
            createdAt: '2022-07-25T09:23:23.220Z';
            name: 'string';
            workingHourStart: '2022-07-25T09:23:23.220Z';
            workingHourEnd: '2022-07-25T09:23:23.220Z';
            address: 'string';
            location: {
                type: 'string';
                coordinates: [0];
            };
            mall: {
                id: 0;
                createdAt: '2022-07-25T09:23:23.220Z';
                name: 'string';
                logoImageUrl: 'string';
                address: 'string';
                workingHourStart: '2022-07-25T09:23:23.220Z';
                workingHourEnd: '2022-07-25T09:23:23.220Z';
                partnersCount: 0;
                roundTheClockWork: true;
                location: {
                    type: 'string';
                    coordinates: [0];
                };
                locality: 'string';
            };
            locality: 'string';
        }
    ];
}
export interface IBranches {
    id: 0;
    createdAt: '2022-07-27T04:10:05.864Z';
    name: 'string';
    workingHourStart: '2022-07-27T04:10:05.864Z';
    workingHourEnd: '2022-07-27T04:10:05.864Z';
    address: 'string';
    location: {
        type: 'string';
        coordinates: [0];
    };
    mall: {
        id: 0;
        createdAt: '2022-07-27T04:10:05.864Z';
        name: 'string';
        logoImageUrl: 'string';
        address: 'string';
        workingHourStart: '2022-07-27T04:10:05.864Z';
        workingHourEnd: '2022-07-27T04:10:05.864Z';
        partnersCount: 0;
        roundTheClockWork: true;
        location: {
            type: 'string';
            coordinates: [0];
        };
        locality: 'string';
    };
    locality: 'string';
}
// export interface ITransactions {}
