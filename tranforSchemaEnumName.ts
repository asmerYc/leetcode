interface Mapping {
    [key: string]: string;
}

interface DataItem {
    value: string;
    coverage_code: string;
    premium: string;
}

interface EnumMapping {
    [key: string]: string[];
}

interface FormSchema {
    schema: {
        properties: {
            vehiclesList: {
                items: {
                    properties: {
                        [key: string]: {
                            enum: string[];
                            enumNames: string[];
                        };
                    };
                };
            };
        };
    };
}

function mapValuesToEnumNames1(
    formSchema: FormSchema,
    data: DataItem[],
    mapping: Mapping
): EnumMapping {
    const result: EnumMapping = {};

    data.forEach(item => {
        const { value, coverage_code } = item;
        const schemaKey = mapping[coverage_code];

        if (schemaKey) {
            const enumProperty = formSchema.schema.properties.vehiclesList.items.properties[schemaKey];
            const enumIndex = enumProperty.enum.indexOf(value);

            if (enumIndex !== -1) {
                result[coverage_code] = [value, enumProperty.enumNames[enumIndex]];
            }
        }
    });

    return result;
}

// 示例数据
const datas: DataItem[] = [
    { value: '1000', coverage_code: 'comp', premium: '164' }
];

const mappings: Mapping = {
    "comp": 'comprehensiveDeductible',
    "coll": 'collisionDeductible',
    "rent": 'carRental',
    "loan": 'loanPayoffLimit',
    "umpd": 'umpd', 
    "glass": 'glassDeductibleWaiver',
    "acpe": 'acpeCoverageLimit'
};

// 调用函数并获取结果
const enumMapping = mapValuesToEnumNames(formSchema, data, mapping);
console.log(enumMapping);
