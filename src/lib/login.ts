async function account(formData: FormData) {
  'use server';

  const name = formData.get('name');
  const cpf = formData.get('cpf');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const password = formData.get('password');

  console.log(name, cpf, email, phone, password);
  
} 