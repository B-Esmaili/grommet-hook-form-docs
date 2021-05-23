---
sidebar_position: 1
---

# Getting Started

Here are instructions to get started quickly with `grommet-hook-form`.

## Installation

To install `grommet-hook-form` issuing following command in you'r terminal should be enough.

```shell
 yarn add gromet-hook-form styled-components
```

or

```shell
 npm install gromet-hook-form styled-components
```

notice that you have to install `styled-components` as a peer dependency.

## Usage

To start using `grommet-hook-form` in you'r project all you have to do is importing `FormBuilder` components.

```javascript
import { Button } from "grommet";
import { FormBuilder, FormField, FormFieldType } from "gromet-hook-form";

const SimpleForm = () => {
  const formFields: FormField[] = [
    {
      name: "fullName",
      label: "Full Name",
      type: FormFieldType.Text,
      required: true,
    },
    {
      name: "jobTitle",
      label: "Job Title",
      type: FormFieldType.Text,
      required: true,
    },
    {
      name: "appDate",
      label: "Appointment Date",
      type: FormFieldType.Date
    },
  ];

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values));
  };

  return (
    <FormBuilder fields={formFields} onSubmit={handleSubmit}>
      <Button label="Submit" type="submit" primary />
    </FormBuilder>
  );
};
```

## Next Steps

Now that you are familiar with `FormBuilder` component its time to discovert defferent type of built-in edtors and practice with properties, events and APIs they offer.