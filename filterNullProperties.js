const filterNullProperties = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => {
            if (value === null) {
                return [key, value];
            } else if (typeof value === 'object') {
                return [key, filterNullProperties(value)];
            } else {
                return [key, value];
            }
        }).filter(([key, value]) => value !== null)
    )
  };

  

  const objs = {
    contact_info: {},
driver_id: "80337258-5c1f-49c8-b8bf-031ab92c0bed",
driver_type
: 
"primary",
education
: 
null,
license
: 
{expires_on: '2024-03-12', id: '', state: '', issued_on: '2014-03-12', status: null},
occupation
: 
null,
personal_detail
: 
{name: {a:null,b:'1'}, address: {c:null,d:'2'}, gender: 'Female', dob: '1965-06-01'},
relation_to_pni
: 
"self",
residence
: 
{is_home_owner: null, residence_type: null, residence_length: null},
source
: 
"prefill"
  }

  console.log(filterNullProperties(objs))