import { useState } from 'react';

const useForm = (callback: () => void) => {
  const [values, setValues] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    callback();
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

export default useForm;
