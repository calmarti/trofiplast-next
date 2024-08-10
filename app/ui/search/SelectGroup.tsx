'use client';
import Select from 'react-select';

export default function SelectGroup({isMounted, isLoading ,fieldOptions, handleChange, selection, /* searchParams */ }) {

    const { group, order, family, genus, species, area, origin, country } = selection;
  
    return isMounted && fieldOptions.map((options:OptionType[])=> {
      const fieldName = options[0].fieldName;

      const getSelectedValue = (fieldName): OptionType | null => {        
        switch (fieldName) {
          case "group":
            return {'label': group, 'value': group, fieldName };          
          case "order":
            return {'label': order, 'value': order, fieldName };   
          case "family":
            return {'label': family, 'value': family, fieldName };   
          case "genus":
            return {'label': genus, 'value': genus, fieldName };   
          case "species":
            return {'label': species, 'value': species, fieldName };   
          case "area":
            return {'label': area, 'value': area, fieldName };   
          case "origin":
            return {'label': origin, 'value': origin, fieldName };   
          case "country":
            return {'label': country, 'value': country, fieldName };   
          default:
            return null;
          }
      }    

        return (
          <div key={fieldName}>
            <span id={`label-${fieldName}`} className="block mb-2">
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
            </span>
            <Select
              aria-labelledby={`label-${fieldName}`}
              id={fieldName}
              options={options}
              name={fieldName}
              // defaultValue={params? params.toString() : null} 
              onChange={handleChange} 
              value={getSelectedValue(fieldName) || null}
                
              // getOptionLabel={(option) => option.label}
              // getOptionValue={(option) => option.value}

              classNamePrefix="select"
              isLoading={isLoading}
              isSearchable={true}
              isClearable={true}
              styles={{
                control: (styles, state) => ({
                  ...styles,
                  width: "14rem",
                  borderColor: state.isFocused ? "#FFFFFF" : "none",
                  ":active": {
                    ...styles[":active"],
                    borderColor: "#FFFFFF",
                  },
                  boxShadow: "0 0 0 1px #C1DDBA",
                }),
                menu: (styles) => ({ ...styles, width: "14rem" }),
                option: (styles, state) => ({
                  ...styles,
                  backgroundColor: state.isFocused
                    ? "#C1DDBA"
                    : state.isSelected
                      ? "#C1DDBA"
                      : "none",
                  ":active": {
                    ...styles[":active"],
                    backgroundColor: "#C1DDBA",
                  },
                }),
              }}
            />
          </div>
        );
      })
    }