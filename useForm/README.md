# useForm

Ejemplo: 
```
const initialForm = {
    name: 'Ejemplo',
    age: 0,
    email: 'ejemplo@gmail.com'
};

const [ formValues, handleInputChange, reset ] = useForm( initialForm );
```