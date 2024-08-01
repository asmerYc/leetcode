const formSchema = {
    // Your form schema here...
};

const mapping = {
    comp: 'comprehensiveDeductible',
    coll: 'collisionDeductible',
    rent: 'carRental',
    loan: 'loanPayoffLimit',
    umpd: 'umpd',
    glass: 'glassDeductibleWaiver',
    acpe: 'acpeCoverageLimit'
};

const data = [{ value: '1000', coverage_code: 'comp', premium: '164' }];

const mapValuesToEnumNames = (formSchema, mapping, data) => {
    const { schema } = formSchema;
    const result = data.map(item => {
        const propertyKey = mapping[item.coverage_code];
        if (propertyKey && schema.properties.vehiclesList.items.properties[propertyKey]) {
            const enumValues = schema.properties.vehiclesList.items.properties[propertyKey].enum;
            const enumNames = schema.properties.vehiclesList.items.properties[propertyKey].enumNames;

            // Find the index of the value in the enum array
            const index = enumValues.indexOf(item.value);

            // If index is found, return the corresponding enumName
            if (index !== -1) {
                return enumNames[index];
            }
        }
        return null;
    });

    return result;
};

const result = mapValuesToEnumNames(formSchema, mapping, data);
console.log(result); // Output: [ '$1,000 Deductible' ]